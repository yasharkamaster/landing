import { NextRequest, NextResponse } from 'next/server';

const AIRTABLE_API = 'https://api.airtable.com/v0';

function sanitize(val: unknown): string {
  if (val == null) return '';
  return String(val).trim();
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(request: NextRequest) {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || 'Leads';

  if (!token || !baseId) {
    console.error('Missing AIRTABLE_TOKEN or AIRTABLE_BASE_ID');
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const fields: Record<string, string> = {
    Name: sanitize(body['Name']),
    'Business Name': sanitize(body['Business Name']),
    Email: sanitize(body['Email']),
    'WhatsApp Number': sanitize(body['WhatsApp Number']),
    'Your Role': sanitize(body['Your Role']),
    'Business Type': sanitize(body['Business Type']),
    'Number of Locations': sanitize(body['Number of Locations']),
    'Monthly Revenue': sanitize(body['Monthly Revenue']),
    'Which Level Interests You?': sanitize(body['Which Level Interests You?']),
    Source: sanitize(body['Source']),
  };

  for (const key of Object.keys(fields)) {
    if (fields[key] === '') delete fields[key];
  }

  const url = `${AIRTABLE_API}/${baseId}/${encodeURIComponent(tableName)}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Airtable error', response.status, errText);
      return NextResponse.json({ error: 'Failed to save lead' }, { status: response.status });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Request error', err);
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 502 });
  }
}
