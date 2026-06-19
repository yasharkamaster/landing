import LandingFrame from '../shared/LandingFrame';
import LeadmatrixClient from '../shared/LeadmatrixClient';
import LandingAuditForm from '../shared/LandingAuditForm';
import { asset } from '@/lib/landing-assets';
import './clinic.css';

const a = (file: string) => asset('clinic', file);

const BUSINESS_TYPES = [
  'General Practice',
  'Specialty Clinic',
  'Dental Clinic',
  'Physiotherapy',
  'Dermatology',
  'Cardiology',
  'Pediatrics',
  'Multi-Specialty',
  'Other Healthcare',
];

const LEVELS = [
  { value: '', label: 'Not sure yet — help me decide' },
  { value: 'visibility', label: 'Level 01 — Visibility (See Every Enquiry)' },
  { value: 'control', label: 'Level 02 — Control (Book & Remind Automatically)' },
  { value: 'autonomy', label: 'Level 03 — Autonomy (AI Runs Your Pipeline)' },
];

export default function ClinicLanding() {
  return (
    <LandingFrame bodyClass="leadmatrix-landing">
      <LeadmatrixClient
        source="clinic"
        leakRate={4.2}
        leakLabel="Based on avg. clinic with 40% enquiry leak during peak OPD"
      />
      <>
        <div id="cursor" />
        <div id="cursor-ring" />

        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[
              '38% of patient enquiries go unanswered during peak OPD hours',
              'Average response lag for after-hours WhatsApp: 4–8 hours',
              'No-show rates drop up to 60% with automated reminders',
              'First responder wins most new patient bookings',
              'Most clinics have zero visibility into enquiry-to-appointment conversion',
            ].flatMap((t) => [t, t]).map((text, i) => (
              <span key={`${text}-${i}`}>{text}</span>
            ))}
          </div>
        </div>

        <nav>
          <div className="nav-logo">
            Lead<span>Matrix</span>
          </div>
          <a href="#audit-form" className="nav-cta">
            Free Patient Audit
          </a>
        </nav>

        <div className="hero">
          <div className="hero-left">
            <div className="hero-eyebrow hero-reveal hero-reveal-delay-0">Healthcare Patient Acquisition</div>
            <h1 className="hero-h1 hero-reveal hero-reveal-delay-1">
              She messaged about knee pain at <em>7:42 PM.</em>
              <br />
              Your front desk saw it at 9 AM.
            </h1>
            <p className="hero-sub hero-reveal hero-reveal-delay-2">
              Every day, new patients enquire on WhatsApp, your website, and Google. Most never hear back fast enough. That&apos;s not a marketing problem. That&apos;s a systems problem.
            </p>
            <div className="hero-cta-row hero-reveal hero-reveal-delay-3">
              <a href="#audit-form" className="btn-primary">
                Show Me My Patient Leak
              </a>
              <a href="#how-it-works" className="btn-ghost">
                See How It Works
              </a>
            </div>
            <div className="hero-stat hero-reveal hero-reveal-delay-4">
              <div className="hero-stat-item">
                <span className="num">90s</span>
                <span className="label">Avg response time</span>
              </div>
              <div className="hero-stat-item">
                <span className="num">60%</span>
                <span className="label">No-show reduction</span>
              </div>
              <div className="hero-stat-item">
                <span className="num">₹0</span>
                <span className="label">Cost to find your gap</span>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="conv-card">
              <div className="conv-header">
                <div className="conv-avatar">P</div>
                <div>
                  <div className="conv-name">Priya Mehta</div>
                  <div className="conv-time">7:42 PM</div>
                </div>
              </div>
              <div className="conv-msgs">
                <div className="msg msg-in msg-reveal msg-reveal-delay-0">
                  Hi, I need a dermatology consultation for persistent skin rash. Can I get an appointment this week?
                </div>
                <div className="msg-time">7:42 PM</div>
                <div className="msg msg-out msg-reveal msg-reveal-delay-1">
                  Hi Priya! Thank you for reaching out. We have slots available Wed &amp; Thu this week. I&apos;m sending our booking link now — choose a time that works for you.
                </div>
                <div className="msg-time">7:43 PM ✓✓</div>
                <div className="msg msg-in msg-reveal msg-reveal-delay-2">That was fast! Booking Thursday 4 PM. Thank you!</div>
                <div className="msg-time">7:44 PM</div>
              </div>
              <div className="conv-badge">LeadMatrix responded in 68 seconds — while your OPD was closed</div>
            </div>
          </div>
        </div>

        <section style={{ background: '#000000', padding: '32px 6% 0' }}>
          <div className="img-grid fade-up">
            <div className="img-grid-item">
              <img src={a('clinic.jpeg')} alt="LeadMatrix for healthcare clinics" loading="lazy" />
            </div>
            <div className="img-grid-item">
              <img src={a('Capture-removebg-preview.png')} alt="Capture every patient enquiry" loading="lazy" />
            </div>
            <div className="img-grid-item">
              <img src={a('Respond-removebg-preview.png')} alt="Respond in under 2 minutes" loading="lazy" />
            </div>
            <div className="img-grid-item">
              <img src={a('Book-removebg-preview.png')} alt="Book appointments automatically" loading="lazy" />
            </div>
          </div>
        </section>

        <div className="leak-banner fade-up">
          <div>
            <div className="leak-label">Estimated Patient Revenue Leaking Right Now</div>
            <div className="leak-sub">Based on avg. clinic, 38% enquiry leak rate</div>
          </div>
          <div>
            <div className="leak-number" id="leakCounter">
              ₹0.00
            </div>
          </div>
          <a href="#audit-form" className="btn-primary">
            Find My Actual Number
          </a>
        </div>

        <section>
          <div className="section-eyebrow fade-up">Why New Patients Don&apos;t Book</div>
          <h2 className="section-h2 fade-up fade-up-d1">
            Four ways your clinic <em>loses patients</em> every single day.
          </h2>
          <div className="problems-grid">
            {[
              { num: 'I', title: 'The Peak OPD Gap', body: 'Your front desk is managing 40 patients in the waiting room. A new enquiry arrives on WhatsApp. By the time someone responds — 4 hours later — the patient has already booked with another clinic.' },
              { num: 'II', title: 'The After-Hours Black Hole', body: 'Patient enquiries spike at 7–10 PM — after your team has left. Those messages sit unread until morning. 78% of patients choose whoever responds first.' },
              { num: 'III', title: 'No Qualification Layer', body: 'Urgent cases and routine checkups get the same slow attention. Your team spends equal time on every enquiry while high-value new patients slip away.' },
              { num: 'IV', title: 'Invisible Pipeline', body: 'You don\'t know how many enquiries you got last month, your response time, or which channel brings the most new patients. The leak is silent — until month-end.' },
            ].map((p, i) => (
              <div key={p.num} className={`problem-card fade-up${i ? ` fade-up-d${i}` : ''}`}>
                <div className="problem-num">{p.num}</div>
                <div className="problem-title">{p.title}</div>
                <p className="problem-body">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="section-eyebrow fade-up">The Reality</div>
          <h2 className="section-h2 fade-up fade-up-d1">
            Your OPD is full. <em>Your pipeline isn&apos;t.</em>
          </h2>
          <div className="transformation-visual-wrap fade-up fade-up-d2">
            <div className="img-inner">
              <video src={a('LHealth.mp4')} controls playsInline preload="metadata" poster={a('clinic.jpeg')}>
                Your browser does not support the video tag.
              </video>
              <div className="img-caption-overlay">See LeadMatrix in action for healthcare clinics</div>
            </div>
          </div>
        </section>

        <section>
          <div className="section-eyebrow fade-up">The Transformation</div>
          <h2 className="section-h2 fade-up fade-up-d1">
            What changes when <em>LeadMatrix is live</em>
          </h2>
          <div className="before-after">
            <div className="ba-col ba-before fade-up">
              <div className="ba-watermark">Before</div>
              <div className="ba-label">✕ Without LeadMatrix</div>
              {['Enquiry at 7 PM — seen next morning', 'Manual callback — often unreachable', 'No qualification — every enquiry treated equally', '25–30% no-show rate', 'Zero channel attribution data', 'Revenue leak invisible until month-end'].map((t) => (
                <div key={t} className="ba-item">
                  <span className="ba-icon">✕</span>
                  {t}
                </div>
              ))}
            </div>
            <div className="ba-col ba-after fade-up fade-up-d1">
              <div className="ba-watermark">After</div>
              <div className="ba-label">✓ With LeadMatrix</div>
              {['Enquiry at 7 PM — responded in 90 seconds', 'Appointment booked automatically', 'Urgency qualified before human touch', 'Automated reminders — no-shows cut 60%', 'Full channel attribution in real time', 'Revenue leak tracked daily in ₹'].map((t) => (
                <div key={t} className="ba-item">
                  <span className="ba-icon">✓</span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="value-story fade-up">
          <span className="qs-large">&ldquo;</span>
          <p>
            The real bottleneck in a clinic isn&apos;t footfall. It&apos;s what happens to <strong>new patient enquiries</strong> after they arrive. Most clinics have perfectly good demand — they just don&apos;t have the infrastructure to convert it.
          </p>
          <p>
            One missed dermatology enquiry in peak season is a patient you never collect. <strong>LeadMatrix doesn&apos;t add patients. It captures the ones you&apos;re already losing.</strong>
          </p>
        </div>

        <section id="how-it-works">
          <div className="section-eyebrow fade-up">The Mechanism</div>
          <h2 className="section-h2 fade-up fade-up-d1">
            Five steps from <em>enquiry to appointment</em>
          </h2>
          <div className="mechanism-steps">
            {[
              { n: '01', t: 'Capture', d: 'WhatsApp, website, Google, calls — every channel in one inbox.' },
              { n: '02', t: 'Respond', d: 'Under 2 minutes. Automatic. 24/7. In your clinic\'s voice.' },
              { n: '03', t: 'Qualify', d: 'Urgency, specialty, and intent scored before your team sees it.' },
              { n: '04', t: 'Book', d: 'Appointment scheduled without front desk involvement.' },
              { n: '05', t: 'Remind', d: 'Pre-visit sequences cut no-shows by up to 60%.' },
            ].map((s, i) => (
              <div key={s.n} className={`step-card fade-up${i ? ` fade-up-d${i}` : ''}`}>
                <span className="step-num">{s.n}</span>
                <div className="step-title">{s.t}</div>
                <p className="step-body">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tiers">
          <div className="section-eyebrow fade-up">Tier Selection</div>
          <h2 className="section-h2 fade-up fade-up-d1">
            Choose your <em>infrastructure level</em>
          </h2>
          <div className="tiers-grid">
            <div className="tier-card fade-up">
              <div className="tier-head">
                <div className="tier-name">Visibility</div>
                <div className="tier-tagline">Level 01 — See Every Enquiry</div>
                <a href="#audit-form" className="tier-cta" data-level="visibility">
                  Inquire for Level 01
                </a>
              </div>
              <div className="tier-body">
                <div className="tier-section-label">Core Features</div>
                <div className="tier-feature">Unified enquiry dashboard — all channels</div>
                <div className="tier-feature">Under 2-min auto-response</div>
                <div className="tier-feature">Response time tracking</div>
                <div className="tier-feature">Revenue leak detection in ₹</div>
                <div className="tier-feature">Lead source comparison</div>
              </div>
            </div>
            <div className="tier-card featured fade-up fade-up-d1">
              <div className="tier-badge">Most Popular</div>
              <div className="tier-head">
                <div className="tier-name">Control</div>
                <div className="tier-tagline">Level 02 — Book &amp; Remind Automatically</div>
                <a href="#audit-form" className="tier-cta" data-level="control">
                  Inquire for Level 02
                </a>
              </div>
              <div className="tier-body">
                <div className="tier-section-label">Everything in Level 01, plus:</div>
                <div className="tier-feature carried">Unified dashboard + auto-response</div>
                <div className="tier-feature">Automated appointment scheduling</div>
                <div className="tier-feature">Pre-visit reminder sequences</div>
                <div className="tier-feature">Specialty routing</div>
                <div className="tier-feature">Conversion tracking by channel</div>
              </div>
            </div>
            <div className="tier-card fade-up fade-up-d2">
              <div className="tier-head">
                <div className="tier-name">Autonomy</div>
                <div className="tier-tagline">Level 03 — AI Runs Your Pipeline</div>
                <a href="#audit-form" className="tier-cta" data-level="autonomy">
                  Inquire for Level 03
                </a>
              </div>
              <div className="tier-body">
                <div className="tier-section-label">Everything in Level 02, plus:</div>
                <div className="tier-feature carried">Scheduling + reminders + routing</div>
                <div className="tier-feature">24/7 AI agents</div>
                <div className="tier-feature">OPD load forecasting</div>
                <div className="tier-feature">Missed patient recovery</div>
                <div className="tier-feature">Weekly clinic intelligence report</div>
              </div>
            </div>
          </div>
        </section>

        <hr className="gold-divider fade-up" aria-hidden="true" />
        <div className="guarantee-section">
          <div className="guarantee-box fade-up">
            <span className="guarantee-icon">⚲</span>
            <div className="guarantee-title">The Zero-Risk Patient Audit</div>
            <p className="guarantee-body">
              Before you spend a single rupee, we calculate how many patients you&apos;re losing monthly and what that costs in rupees. If the number is zero, we say so.{' '}
              <strong style={{ color: 'var(--gold)' }}>Your numbers. Our calculation. Zero obligation.</strong>
            </p>
          </div>
        </div>

        <section>
          <div className="section-eyebrow fade-up">Common Questions</div>
          <h2 className="section-h2 fade-up fade-up-d1">
            Answered <em>directly.</em>
          </h2>
          <div className="faq-grid">
            {[
              { q: 'Will this work with our HMS?', a: 'Yes. LeadMatrix sits on top of your existing hospital management software — not a replacement. The audit maps exactly what integration looks like for your setup.' },
              { q: 'We have a reception team. Why automation?', a: 'Your reception handles patients already in the building. LeadMatrix handles volume that arrives while they\'re occupied — after-hours WhatsApp, peak OPD enquiries, overnight forms.' },
              { q: 'Is patient data secure?', a: 'Built with healthcare-appropriate security. Patient information is never shared or sold. Full data processing agreement before any engagement.' },
              { q: 'How fast do no-shows drop?', a: 'Most clinics see measurable reduction within 2–3 weeks of the reminder system going live — 48-hour, 24-hour, and same-day confirmations, all automated.' },
            ].map((item, i) => (
              <div key={item.q} className={`faq-item fade-up${i ? ` fade-up-d${i}` : ''}`}>
                <div className="faq-q">{item.q}</div>
                <p className="faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <LandingAuditForm
          source="clinic"
          headline={
            <>
              Claim your <em>free patient enquiry audit.</em>
              <br />
              Find out exactly what you&apos;re leaking.
            </>
          }
          subtitle="Takes 3 minutes to fill. We do the math."
          submitLabel="Get My Free Patient Enquiry Audit →"
          businessTypeOptions={BUSINESS_TYPES}
          levelOptions={LEVELS}
          roleOptions={['Founder / Owner', 'Director / CEO', 'Practice Manager', 'Operations Head', 'Other']}
        />

        <footer className="fade-up">
          <div>
            <div className="footer-brand">
              Lead<span>Matrix</span>
            </div>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '8px', maxWidth: '320px' }}>
              Patient acquisition infrastructure for clinics ready to stop losing enquiries.
            </p>
          </div>
          <div className="footer-contact">
            <div>
              Email: <a href="mailto:hypexofficial.team@gmail.com">hypexofficial.team@gmail.com</a>
            </div>
            <div>
              Contact: <a href="tel:+916289109099">+91 6289109099</a> / <a href="tel:+918444815643">8444815643</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-legal">© 2025 LeadMatrix | Healthcare. Built by HypeX.</span>
            <a href="#audit-form" className="btn-primary" style={{ fontSize: '11px', padding: '12px 24px' }}>
              Get Free Audit →
            </a>
          </div>
        </footer>
      </>
    </LandingFrame>
  );
}
