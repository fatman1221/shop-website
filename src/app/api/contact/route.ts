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
      console.error('[contact][POST] missing env', {
        hasSheetsId: Boolean(sheetsId),
        hasClientEmail: Boolean(clientEmail),
        privateKeyLen: privateKeyRaw.length,
      });
      return new Response(JSON.stringify({ ok: false, error: 'Server is not configured' }), { status: 500 });
    }

    console.log('[contact][POST] start', {
      name: body.name,
      email: body.email,
      msgLen: body.message?.length ?? 0,
    });

    const jwt = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      subject: clientEmail,
    });
    google.options({ timeout: 30000 });
    await jwt.authorize();
    const sheets = google.sheets({ version: 'v4', auth: jwt });

    const now = new Date().toISOString();
    const headers = Object.fromEntries(req.headers.entries());
    const ip = headers['x-forwarded-for']?.split(',')[0]?.trim() || headers['x-real-ip'] || '';
    const ua = headers['user-agent'] || '';

    const appendRes = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetsId,
      range: 'Sheet1!A:F',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[now, body.name, body.email, body.company || '', body.message, ip, ua]],
      },
    });

    console.log('[contact][POST] appended', appendRes.data.updates?.updatedRange);
    return new Response(JSON.stringify({ ok: true, updatedRange: appendRes.data.updates?.updatedRange }), { status: 200 });
  } catch (err: any) {
    console.error('[contact][POST] error', err?.message || err, err?.response?.data);
    return new Response(JSON.stringify({ ok: false, error: 'Internal Error' }), { status: 500 });
  }
}

export async function GET() {
  try {
    const sheetsId = process.env.GOOGLE_SHEETS_ID;
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKeyRaw = process.env.GOOGLE_PRIVATE_KEY || '';
    const privateKey = privateKeyRaw.replace(/\\n/g, '\n');

    const envOk = Boolean(sheetsId && clientEmail && privateKeyRaw);
    if (!envOk) {
      return new Response(
        JSON.stringify({ ok: false, stage: 'env', detail: { hasSheetsId: Boolean(sheetsId), hasClientEmail: Boolean(clientEmail), privateKeyLen: privateKeyRaw.length } }),
        { status: 200 }
      );
    }

    const jwt = new google.auth.JWT({ email: clientEmail!, key: privateKey, scopes: ['https://www.googleapis.com/auth/spreadsheets'], subject: clientEmail! });
    google.options({ timeout: 10000 });
    await jwt.authorize();
    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const meta = await sheets.spreadsheets.get({ spreadsheetId: sheetsId! });
    return new Response(JSON.stringify({ ok: true, stage: 'auth', title: meta.data.properties?.title }), { status: 200 });
  } catch (err: any) {
    console.error('[contact][GET] error', err?.message || err, err?.response?.data);
    return new Response(JSON.stringify({ ok: false, stage: 'api', error: err?.message || 'error' }), { status: 200 });
  }
}


