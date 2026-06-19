type LevelOption = { value: string; label: string };

import type { ReactNode } from 'react';

type LandingAuditFormProps = {
  source: string;
  formId?: string;
  headline?: ReactNode;
  subtitle?: string;
  submitLabel?: string;
  businessTypeOptions: string[];
  levelOptions: LevelOption[];
  roleOptions?: string[];
};

const DEFAULT_ROLES = ['Founder / Owner', 'Operations Head', 'Sales Manager', 'Practice Manager', 'Other'];

export default function LandingAuditForm({
  source,
  formId = 'auditForm',
  headline = (
    <>
      Claim your <em>free audit.</em>
    </>
  ),
  subtitle = 'Takes 3 minutes to fill. We do the math.',
  submitLabel = 'Claim My Free Audit →',
  businessTypeOptions,
  levelOptions,
  roleOptions = DEFAULT_ROLES,
}: LandingAuditFormProps) {
  return (
    <div className="form-section" id="audit-form">
      <div className="form-wrap">
        <div className="section-eyebrow fade-up" style={{ justifyContent: 'center' }}>
          Free Audit
        </div>
        <h2 className="section-h2 fade-up fade-up-d1" style={{ textAlign: 'center' }}>
          {headline}
        </h2>
        <p
          style={{
            textAlign: 'center',
            fontSize: '17px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '8px',
            fontFamily: "'Poppins',sans-serif",
          }}
        >
          {subtitle}
        </p>
        <form id={formId} className="form-grid" data-landing-source={source}>
          <div className="form-field fade-up fade-up-d2">
            <label className="form-label">Your Name</label>
            <input type="text" name="Name" className="form-input" placeholder="e.g. Rajesh Sharma" required />
          </div>
          <div className="form-field fade-up fade-up-d2">
            <label className="form-label">Business / Franchise Name</label>
            <input type="text" name="Business Name" className="form-input" placeholder="e.g. Your Business Name" required />
          </div>
          <div className="form-field fade-up fade-up-d3">
            <label className="form-label">Email</label>
            <input type="email" name="Email" className="form-input" placeholder="you@yourbusiness.com" required />
          </div>
          <div className="form-field fade-up fade-up-d3">
            <label className="form-label">WhatsApp Number</label>
            <input type="tel" name="WhatsApp Number" className="form-input" placeholder="+91 98XXXXXXXX" required />
          </div>
          <div className="form-field fade-up fade-up-d4">
            <label className="form-label">Your Role</label>
            <select name="Your Role" className="form-select" required defaultValue="">
              <option value="">Select your role</option>
              {roleOptions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field fade-up fade-up-d4">
            <label className="form-label">Business Type</label>
            <select name="Business Type" className="form-select" required defaultValue="">
              <option value="">Select type</option>
              {businessTypeOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field fade-up fade-up-d5">
            <label className="form-label">Number of Locations</label>
            <select name="Number of Locations" className="form-select" required defaultValue="">
              <option value="">Select range</option>
              <option>1 location</option>
              <option>2-3 locations</option>
              <option>4-6 locations</option>
              <option>7-10 locations</option>
              <option>10+ locations</option>
            </select>
          </div>
          <div className="form-field fade-up fade-up-d5">
            <label className="form-label">Monthly Revenue (₹)</label>
            <select name="Monthly Revenue" className="form-select" required defaultValue="">
              <option value="">Select range</option>
              <option>Under ₹5 Lakhs</option>
              <option>₹5L - ₹15L</option>
              <option>₹15L - ₹30L</option>
              <option>₹30L - ₹50L</option>
              <option>₹50L+</option>
            </select>
          </div>
          <div className="form-field full fade-up fade-up-d6">
            <label className="form-label">Which Level Interests You?</label>
            <select name="Which Level Interests You?" className="form-select" id="levelSelect" defaultValue="">
              {levelOptions.map((l) => (
                <option key={l.value || 'default'} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field full fade-up fade-up-d6">
            <button type="submit" className="form-submit">
              {submitLabel}
            </button>
            <p className="form-note">20-minute call. No pitch before your numbers. No obligation to proceed.</p>
          </div>
        </form>
      </div>
    </div>
  );
}
