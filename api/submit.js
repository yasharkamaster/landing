/**
 * Serverless API: POST form data to Airtable (Leads table).
 * Only writes the record; Airtable Automations handle email + WhatsApp.
 * Env: AIRTABLE_TOKEN, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME (default: Leads)
 */

const AIRTABLE_API = 'https://api.airtable.com/v0';

export default async function handler(req, res) {
  // CORS: allow same-origin and common static hosts
  const origin = req.headers.origin || '';
  const allowOrigin = origin || '*';
  res.setHeader('Access-Control-Allow-Origin', allowOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || 'Leads';

  if (!token || !baseId) {
    console.error('Missing AIRTABLE_TOKEN or AIRTABLE_BASE_ID');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  // Airtable column names (must match base schema)
  const fields = {
    'Name': sanitize(body['Name']),
    'Business Name': sanitize(body['Business Name']),
    'Email': sanitize(body['Email']),
    'WhatsApp Number': sanitize(body['WhatsApp Number']),
    'Your Role': sanitize(body['Your Role']),
    'Business Type': sanitize(body['Business Type']),
    'Number of Locations': sanitize(body['Number of Locations']),
    'Monthly Revenue': sanitize(body['Monthly Revenue']),
    'Which Level Interests You?': sanitize(body['Which Level Interests You?']),
    'Source': sanitize(body['Source']),
  };

  // Omit empty strings so Airtable doesn't get empty values (optional)
  Object.keys(fields).forEach(key => {
    if (fields[key] === '') delete fields[key];
  });

  const url = `${AIRTABLE_API}/${baseId}/${encodeURIComponent(tableName)}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields }),
  });

  if (!response.ok) {
    const errText = await response.text();
    console.error('Airtable error', response.status, errText);
    return res.status(response.status).json({ error: 'Failed to save lead' });
  }

  return res.status(200).json({ ok: true });
}

function sanitize(val) {
  if (val == null) return '';
  return String(val).trim();
}
