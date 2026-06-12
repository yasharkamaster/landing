import LandingFrame from '../shared/LandingFrame';
import LeadmatrixClient from '../shared/LeadmatrixClient';
import LandingAuditForm from '../shared/LandingAuditForm';
import { asset } from '@/lib/landing-assets';
import './food.css';

const a = (file: string) => asset('food', file);

const BUSINESS_TYPES = [
  'Restaurant / Cafe',
  'Bakery / Confectionery',
  'Food Franchise',
  'Multi-Location Food Business',
  'Cloud Kitchen',
  'Food Delivery Chain',
  'Other Food Business',
];

const LEVELS = [
  { value: '', label: 'Not sure yet — help me decide' },
  { value: 'visibility', label: 'Level 01 — Visibility (See Everything)' },
  { value: 'control', label: 'Level 02 — Control (AI Acts on It)' },
  { value: 'autonomy', label: 'Level 03 — Autonomy (AI Runs Operations)' },
];

export default function FoodLanding() {
  return (
    <LandingFrame>
      <LeadmatrixClient
        source="food"
        leakRate={8.2}
        leakLabel="Based on avg. multi-location food business, margin leak rate"
      />
      <>
        <div id="cursor" />
        <div id="cursor-ring" />

        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[
              'One underperforming outlet can drag entire franchise profitability',
              'Inventory managed on WhatsApp costs thousands monthly in waste',
              'Margin leakage is invisible until month-end reconciliation',
              'Expansion without operational intelligence adds chaos, not revenue',
              'Multi-location operators lose 15–25% to invisible operational leaks',
            ].flatMap((t) => [t, t]).map((text, i) => (
              <span key={`${text}-${i}`}>{text}</span>
            ))}
          </div>
        </div>

        <nav>
          <div className="nav-logo">
            Axiom <span>OS</span>
          </div>
          <a href="#audit-form" className="nav-cta">
            Free Ops Audit
          </a>
        </nav>

        <div className="hero">
          <div className="hero-left">
            <div className="hero-eyebrow hero-reveal hero-reveal-delay-0">Food Franchise Command Centre</div>
            <h1 className="hero-h1 hero-reveal hero-reveal-delay-1">
              Vasant Kunj is at <em>52% capacity.</em>
              <br />
              You found out on the 1st.
            </h1>
            <p className="hero-sub hero-reveal hero-reveal-delay-2">
              You own the outlets. You manage them on WhatsApp and spreadsheets. Inventory is guesswork. Margin leakage is invisible. One location underperforms — and you find out at month-end.
            </p>
            <div className="hero-cta-row hero-reveal hero-reveal-delay-3">
              <a href="#audit-form" className="btn-primary">
                Show Me What&apos;s Leaking
              </a>
              <a href="#how-it-works" className="btn-ghost">
                See How It Works
              </a>
            </div>
            <div className="hero-stat hero-reveal hero-reveal-delay-4">
              <div className="hero-stat-item">
                <span className="num">4/4</span>
                <span className="label">Locations monitored</span>
              </div>
              <div className="hero-stat-item">
                <span className="num">31%</span>
                <span className="label">Margin visibility</span>
              </div>
              <div className="hero-stat-item">
                <span className="num">₹0</span>
                <span className="label">Cost to find your gap</span>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="dashboard-wrap" style={{ marginTop: 0, maxWidth: '420px', width: '100%' }}>
              <div className="dash-header">
                <div className="dash-dot" style={{ background: '#ff5f57' }} />
                <div className="dash-dot" style={{ background: '#febc2e' }} />
                <div className="dash-dot" style={{ background: '#28c840' }} />
                <div className="dash-title">Axiom — Live Command Centre</div>
              </div>
              <div className="dash-body" style={{ gridTemplateColumns: '1fr 1fr', padding: '16px' }}>
                <div className="dash-metric">
                  <div className="dash-metric-val" style={{ fontSize: '22px' }}>
                    ₹2.1L
                  </div>
                  <div className="dash-metric-label">Revenue today</div>
                </div>
                <div className="dash-metric">
                  <div className="dash-metric-val" style={{ fontSize: '22px', color: '#ff5f57' }}>
                    3
                  </div>
                  <div className="dash-metric-label">Stock alerts</div>
                </div>
                <div className="dash-metric" style={{ gridColumn: 'span 2' }}>
                  <div className="dash-chart-title">Location performance</div>
                  <div className="bars" style={{ height: '60px' }}>
                    <div className="bar active" style={{ height: '88%' }} />
                    <div className="bar" style={{ height: '74%' }} />
                    <div className="bar active" style={{ height: '91%' }} />
                    <div className="bar" style={{ height: '52%', background: 'rgba(255,95,87,0.5)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section style={{ background: '#0C0B08', padding: '32px 6% 0' }}>
          <div className="img-grid fade-up">
            <div className="img-grid-item">
              <img src={a('Food_Franchise.jpeg')} alt="Axiom OS for food franchises" loading="eager" />
            </div>
            <div className="img-grid-item">
              <img src={a('Whatsapp_OS.png')} alt="WhatsApp is not an OS" loading="lazy" />
            </div>
            <div className="img-grid-item">
              <img src={a('Invisible_Margin_Leak.png')} alt="Invisible margin leaks" loading="lazy" />
            </div>
            <div className="img-grid-item">
              <img src={a('One_Location_Drags_the_Rest.png')} alt="One location drags the rest" loading="lazy" />
            </div>
          </div>
        </section>

        <div className="leak-banner fade-up">
          <div>
            <div className="leak-label">Estimated Operational Leakage Right Now</div>
            <div className="leak-sub">Based on avg. 4-location food franchise</div>
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
          <div className="section-eyebrow fade-up">The Multi-Location Trap</div>
          <h2 className="section-h2 fade-up fade-up-d1">
            You scaled. Your systems <em>didn&apos;t.</em>
          </h2>
          <div className="problems-grid">
            {[
              { num: 'I', title: 'WhatsApp Is Not an OS', body: 'Inventory updates, sales numbers, staff issues — all in WhatsApp groups. Information is delayed, informal, and impossible to act on systematically.' },
              { num: 'II', title: 'Invisible Margin Leaks', body: 'Food waste, over-ordering, pricing gaps — you don\'t see any of it until month-end. Thousands of rupees leak silently across locations.' },
              { num: 'III', title: 'One Location Drags the Rest', body: 'One underperforming outlet reduces overall profitability. You know something\'s wrong but you\'re looking at aggregated numbers, not location intelligence.' },
              { num: 'IV', title: 'Expansion Feels Dangerous', body: "You want to open another outlet but can't confidently replicate what's working — because you're not sure exactly what is." },
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
            You stop managing. <em>You start commanding.</em>
          </h2>
          <div className="transformation-visual-wrap fade-up fade-up-d2">
            <div className="img-inner">
              <video src={a('LBusiness.mp4')} controls playsInline preload="metadata" poster={a('Food_Franchise.jpeg')}>
                Your browser does not support the video tag.
              </video>
              <div className="img-caption-overlay">See Axiom OS in action for food franchises</div>
            </div>
          </div>
        </section>

        <section id="how-it-works">
          <div className="section-eyebrow fade-up">What Axiom Is</div>
          <h2 className="section-h2 fade-up fade-up-d1">
            Not software. Not a dashboard. <em>Your business brain.</em>
          </h2>
          <div className="mechanism-steps" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              { n: '01', t: 'Visibility', d: 'See inventory, cash, revenue, and performance across every location in real time.' },
              { n: '02', t: 'Control', d: 'AI automates reorders, forecasting, compliance tracking, and staff dashboards.' },
              { n: '03', t: 'Autonomy', d: 'AI agents run operations — detecting anomalies, making decisions, predicting revenue.' },
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
            Three levels. Total <em>command.</em>
          </h2>
          <div className="tiers-grid">
            <div className="tier-card fade-up">
              <div className="tier-head">
                <div className="tier-name">Visibility</div>
                <div className="tier-tagline">Level 01 — See Everything</div>
                <a href="#audit-form" className="tier-cta" data-level="visibility">
                  Inquire for Level 01
                </a>
              </div>
              <div className="tier-body">
                <div className="tier-feature">Unified revenue + ops dashboard</div>
                <div className="tier-feature">Real-time inventory per outlet</div>
                <div className="tier-feature">Branch performance comparison</div>
                <div className="tier-feature">Low stock notifications</div>
              </div>
            </div>
            <div className="tier-card featured fade-up fade-up-d1">
              <div className="tier-badge">Most Popular</div>
              <div className="tier-head">
                <div className="tier-name">Control</div>
                <div className="tier-tagline">Level 02 — AI Acts on It</div>
                <a href="#audit-form" className="tier-cta" data-level="control">
                  Inquire for Level 02
                </a>
              </div>
              <div className="tier-body">
                <div className="tier-section-label">Everything in Visibility, plus:</div>
                <div className="tier-feature">Demand forecasting by SKU</div>
                <div className="tier-feature">Auto-reorder with expiry tracking</div>
                <div className="tier-feature">Real-time P&amp;L per location</div>
                <div className="tier-feature">GST compliance tracking</div>
              </div>
            </div>
            <div className="tier-card fade-up fade-up-d2">
              <div className="tier-head">
                <div className="tier-name">Autonomy</div>
                <div className="tier-tagline">Level 03 — AI Runs Operations</div>
                <a href="#audit-form" className="tier-cta" data-level="autonomy">
                  Inquire for Level 03
                </a>
              </div>
              <div className="tier-body">
                <div className="tier-section-label">Everything in Control, plus:</div>
                <div className="tier-feature">Inventory prediction AI agents</div>
                <div className="tier-feature">Demand spike alerts 72h ahead</div>
                <div className="tier-feature">Expansion readiness score</div>
                <div className="tier-feature">AI weekly executive summary</div>
              </div>
            </div>
          </div>
        </section>

        <hr className="gold-divider fade-up" aria-hidden="true" />
        <div className="guarantee-section">
          <div className="guarantee-box fade-up">
            <span className="guarantee-icon">⚲</span>
            <div className="guarantee-title">We Map the Invisible — For Free</div>
            <p className="guarantee-body">
              30-minute Operations Audit. Inventory leakage. Margin compression. Location underperformance. All quantified in rupees.{' '}
              <strong style={{ color: 'var(--gold)' }}>If the number is zero, we say so. Zero obligation.</strong>
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
              { q: 'We already use a POS. Is Axiom additional?', a: 'Axiom integrates with your POS — it adds an intelligence layer that connects data across locations, forecasts, detects anomalies, and acts. The brain that makes your tools work together.' },
              { q: 'We only have 2 locations. Is it overkill?', a: 'Two-location operators often have the most invisible leakage. If you generate ₹30L+ per month, the audit is worth your time.' },
              { q: 'How long does setup take?', a: 'Level 1 is live in 4–6 weeks. Level 2 takes 8–12 weeks. Level 3 is 3–5 months. All levels generate intelligence before full deployment.' },
              { q: 'What does the free audit involve?', a: 'A 30-minute call about your systems, locations, revenue, and pain points. By the end, a preliminary assessment of where leakage is concentrated and what it costs monthly.' },
            ].map((item, i) => (
              <div key={item.q} className={`faq-item fade-up${i ? ` fade-up-d${i}` : ''}`}>
                <div className="faq-q">{item.q}</div>
                <p className="faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <LandingAuditForm
          source="food"
          headline={
            <>
              Claim your <em>free operations audit.</em>
              <br />
              Find out what&apos;s leaking across every location.
            </>
          }
          subtitle="Takes 3 minutes to fill. We quantify it in rupees."
          submitLabel="Get My Free Operations Audit →"
          businessTypeOptions={BUSINESS_TYPES}
          levelOptions={LEVELS}
          roleOptions={['Owner / Founder', 'Operations Manager', 'Franchise Manager', 'Business Development', 'Other']}
        />

        <footer className="fade-up">
          <div>
            <div className="footer-brand">
              HypeX <span>|</span> Axiom
            </div>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: '13px', color: 'rgba(245,240,232,0.4)', marginTop: '8px', maxWidth: '320px' }}>
              Business operating system for food franchises ready to stop running blind.
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
            <span className="footer-legal">© 2025 HypeX | Axiom OS. Food &amp; Bakery Franchises.</span>
            <a href="#audit-form" className="btn-primary" style={{ fontSize: '11px', padding: '12px 24px' }}>
              Get Free Audit →
            </a>
          </div>
        </footer>
      </>
    </LandingFrame>
  );
}
