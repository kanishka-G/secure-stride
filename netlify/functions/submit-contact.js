const { google } = require('googleapis');

// Netlify Function to receive contact submissions and append to Google Sheets
// Environment variables required in Netlify site settings:
// SHEETS_SERVICE_ACCOUNT_KEY -> the JSON service account key (stringified JSON)
// SHEETS_SPREADSHEET_ID -> the target spreadsheet ID

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
};

exports.handler = async function (event, context) {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: CORS_HEADERS, body: '' };
  }

  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, headers: CORS_HEADERS, body: 'Method Not Allowed' };
    }

    let body;
    try {
      body = event.body ? JSON.parse(event.body) : {};
    } catch (err) {
      return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Invalid JSON body' }) };
    }

    // Basic validation
    const firstName = body.firstName || '';
    const lastName = body.lastName || '';
    const email = body.email || '';
    const company = body.company || '';
    const phone = body.phone || '';
    const challenges = body.challenges || '';

    if (!firstName || !lastName || !email || !company) {
      return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Missing required fields' }) };
    }

    const keyJson = process.env.SHEETS_SERVICE_ACCOUNT_KEY;
    const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

    if (!keyJson || !spreadsheetId) {
      console.error('Missing SHEETS_SERVICE_ACCOUNT_KEY or SHEETS_SPREADSHEET_ID');
      return { statusCode: 500, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Server misconfigured' }) };
    }

    const key = JSON.parse(keyJson);
    // Ensure private_key newlines are correct
    if (key.private_key && key.private_key.indexOf('\\n') !== -1) {
      key.private_key = key.private_key.replace(/\\n/g, '\n');
    }

    const client = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    await client.authorize();

    const sheets = google.sheets({ version: 'v4', auth: client });

    const now = new Date().toISOString();
    const values = [[now, firstName, lastName, email, company, phone, challenges]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:G',
      valueInputOption: 'RAW',
      requestBody: { values }
    });

    // Optionally: send email or notifications here (SendGrid, Slack) using env vars

    return { statusCode: 200, headers: CORS_HEADERS, body: JSON.stringify({ status: 'ok' }) };
  } catch (err) {
    console.error('submit-contact error', err);
    return { statusCode: 500, headers: CORS_HEADERS, body: JSON.stringify({ error: String(err) }) };
  }
};
