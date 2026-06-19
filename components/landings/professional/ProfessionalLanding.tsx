import LandingFrame from '../shared/LandingFrame';
import LeadmatrixClient from '../shared/LeadmatrixClient';
import LandingAuditForm from '../shared/LandingAuditForm';
import { asset } from '@/lib/landing-assets';
import './professional.css';

const a = (file: string) => asset('professional', file);

const BUSINESS_TYPES = [
  'CA Firm',
  'Financial Consultant',
  'Fitness Coach',
  'Dietitian',
  'Salon / Spa',
  'Other Professional Service',
];

const LEVELS = [
  { value: '', label: 'Not sure yet — help me decide' },
  { value: 'visibility', label: 'Visibility — See every lead' },
  { value: 'control', label: 'Control — Auto-respond & qualify' },
  { value: 'autonomy', label: 'Autonomous — AI runs it 24/7' },
];

export default function ProfessionalLanding() {
  return (
    <LandingFrame bodyClass="leadmatrix-landing">
      <LeadmatrixClient
        source="professional"
        leakRate={5.5}
        leakLabel="Based on avg. professional practice, 35% lead leak rate"
      />
      <>
        <div id="cursor" />
        <div id="cursor-ring" />

        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[
              '78% of clients book with whoever responds first',
              'Average discovery call value: ₹15,000–₹2,00,000',
              'After-hours enquiries are your highest-intent leads',
              'Most solo practitioners lose 6–8 leads monthly to response lag',
              'First responder wins — not the best practitioner',
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
            Free Revenue Audit
          </a>
        </nav>

        <div className="hero">
          <div className="hero-left">
            <div className="hero-eyebrow hero-reveal hero-reveal-delay-0">Professional Services Revenue System</div>
            <h1 className="hero-h1 hero-reveal hero-reveal-delay-1">
              She DM&apos;d about GST filing at <em>8:15 PM.</em>
              <br />
              You were with a client.
            </h1>
            <p className="hero-sub hero-reveal hero-reveal-delay-2">
              Every day, qualified prospects message you on Instagram, WhatsApp, and Google. Most never hear back fast enough. You don&apos;t have a leads problem. You have a response problem.
            </p>
            <div className="hero-cta-row hero-reveal hero-reveal-delay-3">
              <a href="#audit-form" className="btn-primary">
                Show Me My Revenue Leak
              </a>
              <a href="#how-it-works" className="btn-ghost">
                See How It Works
              </a>
            </div>
            <div className="hero-stat hero-reveal hero-reveal-delay-4">
              <div className="hero-stat-item">
                <span className="num">68s</span>
                <span className="label">Avg response time</span>
              </div>
              <div className="hero-stat-item">
                <span className="num">3.1×</span>
                <span className="label">Conversion lift</span>
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
                <div className="conv-avatar">S</div>
                <div>
                  <div className="conv-name">Sunita Patel</div>
                  <div className="conv-time">8:15 PM</div>
                </div>
              </div>
              <div className="conv-msgs">
                <div className="msg msg-in msg-reveal msg-reveal-delay-0">
                  Hi, I need help with GST filing for my new business. Can we schedule a consultation?
                </div>
                <div className="msg-time">8:15 PM</div>
                <div className="msg msg-out msg-reveal msg-reveal-delay-1">
                  Hi Sunita! Absolutely — I&apos;d be happy to help with your GST setup. I&apos;ve sent a booking link for a discovery call. Morning slots are open tomorrow.
                </div>
                <div className="msg-time">8:16 PM ✓✓</div>
                <div className="msg msg-in msg-reveal msg-reveal-delay-2">Perfect, booked for 10 AM. Thank you for the quick reply!</div>
                <div className="msg-time">8:17 PM</div>
              </div>
              <div className="conv-badge">LeadMatrix responded in 72 seconds — while you were with a client</div>
            </div>
          </div>
        </div>

        <section style={{ background: '#000000', padding: '32px 6% 0' }}>
          <div className="img-grid fade-up">
            <div className="img-grid-item">
              <img src={a('Gemini_Generated_Image_awfceiawfceiawfc-removebg-preview.png')} alt="LeadMatrix for professional services" loading="lazy" />
            </div>
            <div className="img-grid-item">
              <img src={a('CA_Furms-removebg-preview.png')} alt="CA Firms" loading="lazy" />
            </div>
            <div className="img-grid-item">
              <img src={a('Fitness.png')} alt="Fitness Coaches" loading="lazy" />
            </div>
            <div className="img-grid-item">
              <img src={a('Saloon.png')} alt="Salons" loading="lazy" />
            </div>
          </div>
        </section>

        <div className="leak-banner fade-up">
          <div>
            <div className="leak-label">Estimated Revenue Leaking Right Now</div>
            <div className="leak-sub">Based on avg. practice, 35% lead leak rate</div>
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
          <div className="section-eyebrow fade-up">Why Revenue Stays Stuck</div>
          <h2 className="section-h2 fade-up fade-up-d1">
            Four ways your practice <em>leaks money</em> every single day.
          </h2>
          <div className="problems-grid">
            {[
              { num: 'I', title: 'The Attention Gap', body: "You're with Client A. Client B enquired on Instagram. Two hours later, Client B booked with someone who responded in 4 minutes. You lost them on availability of attention, not price." },
              { num: 'II', title: 'The 8 PM Problem', body: 'Professionals close their workday. Potential clients make decisions in the evening. That\'s when your best leads arrive — and when nobody\'s monitoring the inbox.' },
              { num: 'III', title: 'No Qualification Layer', body: 'Even when your team responds, there\'s no system to separate serious prospects from browsers. High-value clients get the same slow attention as curious enquiries.' },
              { num: 'IV', title: 'Invisible Revenue Loss', body: "You don't know how many enquiries you got last month, your response time, or which platform sends the best clients. The money leaks silently." },
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
            Presence isn&apos;t enough. <em>Response wins.</em>
          </h2>
          <div className="transformation-visual-wrap fade-up fade-up-d2">
            <div className="img-inner">
              <img src={a('Gym.jpeg')} alt="Fitness transformation with LeadMatrix" loading="lazy" />
              <div className="img-caption-overlay">Fitness &amp; gyms: Turn response lag into booked sessions</div>
            </div>
          </div>
          <div className="transformation-visual-wrap fade-up fade-up-d3" style={{ marginTop: '60px' }}>
            <div className="img-inner">
              <video src={a('LFinance.mp4')} controls playsInline preload="metadata" poster={a('Financial_consulting-removebg-preview.png')}>
                Your browser does not support the video tag.
              </video>
              <div className="img-caption-overlay">See LeadMatrix in action for professional services</div>
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
              {['Enquiry while you\'re busy — no response for hours', 'Manual follow-up — prospects go cold', 'No lead scoring — time wasted on browsers', 'Calendar booking is manual back-and-forth', 'Zero data on which channel converts best'].map((t) => (
                <div key={t} className="ba-item">
                  <span className="ba-icon">✕</span>
                  {t}
                </div>
              ))}
            </div>
            <div className="ba-col ba-after fade-up fade-up-d1">
              <div className="ba-watermark">After</div>
              <div className="ba-label">✓ With LeadMatrix</div>
              {['Every enquiry answered in under 2 minutes — 24/7', 'Automated follow-up sequences keep leads warm', 'Hot/warm/cold scoring routes serious buyers to you', 'Discovery calls land in your calendar automatically', 'Full channel attribution in real time'].map((t) => (
                <div key={t} className="ba-item">
                  <span className="ba-icon">✓</span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works">
          <div className="section-eyebrow fade-up">The Mechanism</div>
          <h2 className="section-h2 fade-up fade-up-d1">
            Four steps from <em>enquiry to booked call</em>
          </h2>
          <div className="mechanism-steps" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {[
              { n: '01', t: 'Capture Everything', d: 'WhatsApp, Instagram, Google, website forms — one dashboard.', img: 'Capture_Everything_Everywhere-removebg-preview.png' },
              { n: '02', t: 'Respond in 2 Minutes', d: 'Personalised response in your voice. Under 2 minutes. Always.', img: 'Respond_in_Under_2_Minutes_Always.-removebg-preview.png' },
              { n: '03', t: 'Qualify & Score', d: 'Budget, urgency, intent — hot leads escalated to your phone.', img: 'QualifyWithout_Your_Team-removebg-preview.png' },
              { n: '04', t: 'Book Automatically', d: 'Discovery calls in your calendar with full client context.', img: 'Appointment_in_Calendar_Automatically-removebg-preview.png' },
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
                <div className="tier-tagline">See every lead in one place</div>
                <a href="#audit-form" className="tier-cta" data-level="visibility">
                  Inquire for Visibility
                </a>
              </div>
              <div className="tier-body">
                <div className="tier-feature">Unified lead dashboard</div>
                <div className="tier-feature">Under 2-min auto response (24/7)</div>
                <div className="tier-feature">Revenue leak detection</div>
                <div className="tier-feature">Response time tracking</div>
              </div>
            </div>
            <div className="tier-card featured fade-up fade-up-d1">
              <div className="tier-badge">Most Popular</div>
              <div className="tier-head">
                <div className="tier-name">Control</div>
                <div className="tier-tagline">Auto-respond, qualify, and book</div>
                <a href="#audit-form" className="tier-cta" data-level="control">
                  Inquire for Control
                </a>
              </div>
              <div className="tier-body">
                <div className="tier-section-label">Everything in Visibility, plus:</div>
                <div className="tier-feature">Lead scoring (hot/warm/cold)</div>
                <div className="tier-feature">Discovery call booking</div>
                <div className="tier-feature">Multi-step follow-ups</div>
                <div className="tier-feature">AI-personalised messages</div>
              </div>
            </div>
            <div className="tier-card fade-up fade-up-d2">
              <div className="tier-head">
                <div className="tier-name">Autonomous</div>
                <div className="tier-tagline">AI runs your pipeline 24/7</div>
                <a href="#audit-form" className="tier-cta" data-level="autonomy">
                  Inquire for Autonomous
                </a>
              </div>
              <div className="tier-body">
                <div className="tier-section-label">Everything in Control, plus:</div>
                <div className="tier-feature">24/7 AI agents</div>
                <div className="tier-feature">Revenue forecasting</div>
                <div className="tier-feature">Repeat client recognition</div>
                <div className="tier-feature">Weekly intelligence report</div>
              </div>
            </div>
          </div>
        </section>

        <hr className="gold-divider fade-up" aria-hidden="true" />
        <div className="guarantee-section">
          <div className="guarantee-box fade-up">
            <span className="guarantee-icon">⚲</span>
            <div className="guarantee-title">The Zero-Risk Revenue Audit</div>
            <p className="guarantee-body">
              We calculate your exact revenue leak before you spend a single rupee. If the number is zero, we say so.{' '}
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
              { q: "I'm a solo practitioner. Is this overkill?", a: 'The Visibility tier was built for solo operators. Even 20 enquiries per month often means 6–8 lost to response lag. The audit tells you if it\'s worth it.' },
              { q: 'Will automated responses feel impersonal?', a: 'Responses are written in your voice and acknowledge the specific enquiry. Most prospects can\'t tell the difference from a human reply sent within 90 seconds.' },
              { q: 'How does booking work with my calendar?', a: 'We integrate with Google Calendar, Calendly, or your existing system. High-intent leads get scheduling links. Confirmations and reminders are automated.' },
              { q: 'How long until I see results?', a: 'First impact within the first week on response rate. Most clients report measurable appointment increases within 30 days.' },
            ].map((item, i) => (
              <div key={item.q} className={`faq-item fade-up${i ? ` fade-up-d${i}` : ''}`}>
                <div className="faq-q">{item.q}</div>
                <p className="faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <LandingAuditForm
          source="professional"
          headline={
            <>
              Claim your <em>free revenue leak audit.</em>
              <br />
              Find out exactly what you&apos;re losing.
            </>
          }
          subtitle="Takes 3 minutes to fill. We do the math."
          submitLabel="Get My Free Revenue Leak Audit →"
          businessTypeOptions={BUSINESS_TYPES}
          levelOptions={LEVELS}
          roleOptions={['Owner / Founder', 'Partner', 'Solo Practitioner', 'Practice Manager', 'Other']}
        />

        <footer className="fade-up">
          <div>
            <div className="footer-brand">
              Lead<span>Matrix</span>
            </div>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '8px', maxWidth: '320px' }}>
              Revenue infrastructure for professional services ready to stop losing clients.
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
            <span className="footer-legal">© 2025 LeadMatrix | Professional Services. Built by HypeX.</span>
            <a href="#audit-form" className="btn-primary" style={{ fontSize: '11px', padding: '12px 24px' }}>
              Get Free Audit →
            </a>
          </div>
        </footer>
      </>
    </LandingFrame>
  );
}
