'use client';

import { FormEvent, useState } from 'react';

type AuditFormProps = {
  source: string;
  formId?: string;
  title: string;
  subtitle: string;
  submitLabel: string;
  successLabel?: string;
  alertMessage?: string;
  businessTypeOptions: string[];
  levelOptions?: LevelOption[];
  locationOptions?: string[];
  className?: string;
};

const ROLES = ['Founder / Owner', 'Director / CEO', 'Operations Head', 'Practice Manager', 'Other'];
const LOCATIONS = ['1', '2-3', '4-6', '7-10', '10+'];
const REVENUE = ['Under ₹5 Lakhs', '₹5L - ₹15L', '₹15L - ₹30L', '₹30L - ₹50L', '₹50L+'];
type LevelOption = { value: string; label: string };

const DEFAULT_LEVELS: LevelOption[] = [
  { value: '', label: 'Not sure yet — help me decide' },
  { value: 'visibility', label: 'Level 01 — Visibility' },
  { value: 'control', label: 'Level 02 — Control' },
  { value: 'autonomy', label: 'Level 03 — Autonomy' },
];

export default function AuditForm({
  source,
  formId = 'auditForm',
  title,
  subtitle,
  submitLabel,
  successLabel = "✓ Audit Request Sent! We'll call you within 4 hours.",
  alertMessage,
  businessTypeOptions,
  levelOptions = DEFAULT_LEVELS,
  locationOptions = LOCATIONS,
  className = 'form-wrap',
}: AuditFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending' || status === 'success') return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = {
      Name: String(data.get('Name') ?? ''),
      'Business Name': String(data.get('Business Name') ?? ''),
      Email: String(data.get('Email') ?? ''),
      'WhatsApp Number': String(data.get('WhatsApp Number') ?? ''),
      'Your Role': String(data.get('Your Role') ?? ''),
      'Business Type': String(data.get('Business Type') ?? ''),
      'Number of Locations': String(data.get('Number of Locations') ?? ''),
      'Monthly Revenue': String(data.get('Monthly Revenue') ?? ''),
      'Which Level Interests You?': String(data.get('Which Level Interests You?') ?? ''),
      Source: source,
    };

    setStatus('sending');
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('submit failed');
      setStatus('success');
      form.reset();
      if (alertMessage) alert(alertMessage);
    } catch {
      setStatus('error');
      alert('Something went wrong. Please try again or contact us directly.');
    }
  }

  const buttonText =
    status === 'sending' ? 'Sending…' : status === 'success' ? successLabel : submitLabel;

  return (
    <div className={className}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <form id={formId} onSubmit={onSubmit}>
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" name="Name" placeholder="e.g. Rajesh Sharma" required />
        </div>
        <div className="form-group">
          <label>Business / Franchise Name</label>
          <input type="text" name="Business Name" placeholder="e.g. Sharma&apos;s Bakery" required />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="Email" placeholder="you@yourbusiness.com" required />
          </div>
          <div className="form-group">
            <label>WhatsApp Number</label>
            <input type="tel" name="WhatsApp Number" placeholder="+91 98XXXXXXXX" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Your Role</label>
            <select name="Your Role" required defaultValue="">
              <option value="" disabled>
                Select your role
              </option>
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Business Type</label>
            <select name="Business Type" required defaultValue="">
              <option value="" disabled>
                Select type
              </option>
              {businessTypeOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Number of Locations</label>
            <select name="Number of Locations" required defaultValue="">
              <option value="" disabled>
                Select range
              </option>
              {locationOptions.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Monthly Revenue (₹)</label>
            <select name="Monthly Revenue" required defaultValue="">
              <option value="" disabled>
                Select range
              </option>
              {REVENUE.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Which Level Interests You?</label>
          <select id="levelSelect" name="Which Level Interests You?" defaultValue="">
            {levelOptions.map((l) => (
              <option key={l.value || 'default'} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="btn form-submit primary-cta"
          disabled={status === 'sending' || status === 'success'}
          style={status === 'success' ? { background: 'var(--green, #10B981)' } : undefined}
        >
          <span>{buttonText}</span>
        </button>
        <div className="form-trust">
          <span>🔒</span>
          <span>No spam. No obligation. Your data stays private.</span>
        </div>
      </form>
    </div>
  );
}
