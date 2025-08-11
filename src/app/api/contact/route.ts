import { google } from 'googleapis';

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

function makeRequestId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export async function POST(req: Request) {
  try {
    const rid = makeRequestId('contactPOST');
    console.log(`[${rid}] inbound request`);
    const body: ContactPayload = await req.json();
    if (!body?.name || !body?.email || !body?.message) {
      console.warn(`[${rid}] invalid payload`, { hasName: !!body?.name, hasEmail: !!body?.email, hasMsg: !!body?.message });
      return new Response(JSON.stringify({ ok: false, error: 'Missing required fields' }), { status: 400 });
    }

    const sheetsId = process.env.GOOGLE_SHEETS_ID;
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKeyRaw = process.env.GOOGLE_PRIVATE_KEY || '';
    const privateKey = privateKeyRaw.replace(/\\n/g, '\n');

    if (!sheetsId || !clientEmail || !privateKey) {
      console.error(`[${rid}] missing env`, {
        hasSheetsId: Boolean(sheetsId),
        hasClientEmail: Boolean(clientEmail),
        privateKeyLen: privateKeyRaw.length,
      });
      return new Response(JSON.stringify({ ok: false, error: 'Server is not configured' }), { status: 500 });
    }

    console.log(`[${rid}] start`, {
      name: body.name,
      email: body.email,
      msgLen: body.message?.length ?? 0,
      sheet: sheetsId?.slice(0, 6),
    });

    const jwt = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      subject: clientEmail,
    });
    google.options({ timeout: 30000 });
    console.time(`[${rid}] authorize`);
    await jwt.authorize();
    console.timeEnd(`[${rid}] authorize`);
    const sheets = google.sheets({ version: 'v4', auth: jwt });

    const now = new Date().toISOString();
    const headers = Object.fromEntries(req.headers.entries());
    const ip = headers['x-forwarded-for']?.split(',')[0]?.trim() || headers['x-real-ip'] || '';
    const ua = headers['user-agent'] || '';

    console.log(`[${rid}] append start`, { range: 'Sheet1!A:F' });
    const appendPromise = sheets.spreadsheets.values
      .append({
        spreadsheetId: sheetsId,
        range: 'Sheet1!A:F',
        valueInputOption: 'RAW',
        requestBody: {
          values: [[now, body.name, body.email, body.company || '', body.message, ip, ua]],
        },
      })
      .then((res) => {
        console.log(`[${rid}] appended`, res.data.updates?.updatedRange);
        return res;
      })
      .catch((err) => {
        const e = err as { message?: string };
        console.error(`[${rid}] append error`, e?.message || e);
        throw err;
      });

    // 最多等待 8s，否则先返回 202，后端继续写入
    const raced = await Promise.race([
      appendPromise.then((res) => ({ done: true as const, res })),
      new Promise<{ done: false }>((r) => setTimeout(() => r({ done: false }), 8000)),
    ]);

    if (!('done' in raced) || raced.done === false) {
      console.warn(`[${rid}] queued return (append still running)`);
      return new Response(JSON.stringify({ ok: true, queued: true }), { status: 202 });
    }

    console.log(`[${rid}] success`, raced.res.data.updates?.updatedRange);
    return new Response(JSON.stringify({ ok: true, updatedRange: raced.res.data.updates?.updatedRange }), { status: 200 });
  } catch (err) {
    const e = err as { message?: string; response?: { data?: unknown } };
    const msg = e?.message || String(e);
    console.error('[contact][POST] error', msg, e?.response?.data);
    const debug = process.env.DEBUG_CONTACT === '1' ? { debug: msg } : {};
    return new Response(JSON.stringify({ ok: false, error: 'Internal Error', ...debug }), { status: 500 });
  }
}

export async function GET() {
  try {
    const rid = makeRequestId('contactGET');
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
    console.time(`[${rid}] authorize`);
    await jwt.authorize();
    console.timeEnd(`[${rid}] authorize`);
    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const meta = await sheets.spreadsheets.get({ spreadsheetId: sheetsId! });
    return new Response(JSON.stringify({ ok: true, stage: 'auth', title: meta.data.properties?.title }), { status: 200 });
  } catch (err) {
    const e = err as { message?: string; response?: { data?: unknown } };
    console.error('[contact][GET] error', e?.message || e, e?.response?.data);
    const debug = process.env.DEBUG_CONTACT === '1' ? { debug: e?.message || String(e) } : {};
    return new Response(JSON.stringify({ ok: false, stage: 'api', error: e?.message || 'error', ...debug }), { status: 200 });
  }
}


