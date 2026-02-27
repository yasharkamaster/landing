/**
 * Node.js server: serves the HTML landing pages and POST /api/submit to Airtable.
 * Secrets go in .env (not committed). Run: npm start
 */
require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// JSON body for /api/submit
app.use(express.json());

// Serve static files (HTML, assets) from project root
app.use(express.static(path.join(__dirname)));

// CORS: allow same origin (pages served from this server)
app.use('/api', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  next();
});

app.post('/api/submit', async (req, res) => {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || 'Leads';

  if (!token || !baseId) {
    console.error('Missing AIRTABLE_TOKEN or AIRTABLE_BASE_ID in .env');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const body = req.body || {};
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

  Object.keys(fields).forEach(key => {
    if (fields[key] === '') delete fields[key];
  });

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;
  try {
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
  } catch (err) {
    console.error('Request error', err);
    return res.status(502).json({ error: 'Failed to save lead' });
  }
});

function sanitize(val) {
  if (val == null) return '';
  return String(val).trim();
}

app.listen(PORT, () => {
  console.log('Server running at http://localhost:' + PORT);
  console.log('Open e.g. http://localhost:' + PORT + '/Clinic/clinic_landing.html');
});
