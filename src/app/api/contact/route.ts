import { google } from 'googleapis';

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body: ContactPayload = await req.json();
    if (!body?.name || !body?.email || !body?.message) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing required fields' }), { status: 400 });
    }

    const sheetsId = process.env.GOOGLE_SHEETS_ID;
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKeyRaw = process.env.GOOGLE_PRIVATE_KEY || '';
    const privateKey = privateKeyRaw.replace(/\\n/g, '\n');

    if (!sheetsId || !clientEmail || !privateKey) {
      return new Response(JSON.stringify({ ok: false, error: 'Server is not configured' }), { status: 500 });
    }

    const jwt = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    await jwt.authorize();
    const sheets = google.sheets({ version: 'v4', auth: jwt });

    const now = new Date().toISOString();
    const headers = Object.fromEntries(req.headers.entries());
    const ip = headers['x-forwarded-for']?.split(',')[0]?.trim() || headers['x-real-ip'] || '';
    const ua = headers['user-agent'] || '';

    const appendRes = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetsId,
      range: 'Sheet1!A1',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[now, body.name, body.email, body.company || '', body.message, ip, ua]],
      },
    });

    return new Response(JSON.stringify({ ok: true, updatedRange: appendRes.data.updates?.updatedRange }), { status: 200 });
  } catch (err: any) {
    console.error('contact api error', err?.message || err, err?.response?.data);
    return new Response(JSON.stringify({ ok: false, error: 'Internal Error' }), { status: 500 });
  }
}


