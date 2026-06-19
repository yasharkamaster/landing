import type { CSSProperties } from 'react';
import LandingFrame from '../shared/LandingFrame';
import { asset } from '@/lib/landing-assets';
import ToursClient from './ToursClient';
import './tours.css';

export default function ToursLanding() {
  return (
    <LandingFrame bodyClass="leadmatrix-landing">
      <ToursClient />
      <>
        <div id="cursor"></div>
        <div id="cursor-ring"></div>


        <div className="ticker-wrap">
          <div className="ticker-inner">
            <span>73% of travel inquiries are lost after 6 hours of no response</span>
            <span>Average group tour booking: ₹45,000–₹3,20,000 per package</span>
            <span>67% of travel buyers compare 3+ operators before deciding</span>
            <span>Peak season lasts 90 days — your system must capture every lead</span>
            <span>First responder wins 78% of bookings in tours &amp; travel</span>
            <span>73% of travel inquiries are lost after 6 hours of no response</span>
            <span>Average group tour booking: ₹45,000–₹3,20,000 per package</span>
            <span>67% of travel buyers compare 3+ operators before deciding</span>
            <span>Peak season lasts 90 days — your system must capture every lead</span>
            <span>First responder wins 78% of bookings in tours &amp; travel</span>
          </div>
        </div>


        <nav>
          <div className="nav-logo">Lead<span>Matrix</span></div>
          <a href="#audit-form" className="nav-cta">Claim Free Audit</a>
        </nav>


        <div className="hero">
          <div className="hero-left">
            <div className="hero-eyebrow hero-reveal hero-reveal-delay-0">Tours &amp; Travel Revenue System</div>
            <h1 className="hero-h1 hero-reveal hero-reveal-delay-1">
              She booked a ₹1.8L <em>Manali package</em> at 11:42 PM.<br />
              You were asleep.
            </h1>
            <p className="hero-sub hero-reveal hero-reveal-delay-2">
              Every day, qualified travel buyers message you on Instagram, WhatsApp, and your website. Most never hear back fast enough. That's not a leads problem. That's a systems problem.
            </p>
            <div className="hero-cta-row hero-reveal hero-reveal-delay-3">
              <a href="#audit-form" className="btn-primary">Show Me My Revenue Leak</a>
              <a href="#how-it-works" className="btn-ghost">See How It Works</a>
            </div>
            <div className="hero-stat hero-reveal hero-reveal-delay-4">
              <div className="hero-stat-item">
                <span className="num">47 sec</span>
                <span className="label">Avg response time</span>
              </div>
              <div className="hero-stat-item">
                <span className="num">3.2×</span>
                <span className="label">Booking conversion lift</span>
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
                  <div className="conv-name">Priya Sharma</div>
                  <div className="conv-time">11:42 PM</div>
                </div>
              </div>
              <div className="conv-msgs">
                <div className="msg msg-in msg-reveal msg-reveal-delay-0">Hi, I'm interested in a 7-day Spiti Valley trek for 8 people. Can you share the package details and price? Dates: 14th March.</div>
                <div className="msg-time">11:42 PM</div>
                <div className="msg msg-out msg-reveal msg-reveal-delay-1">Hi Priya! Great choice — Spiti in March is spectacular. Our 7N/8D Spiti Valley Expedition starts at ₹22,000/person for groups of 8+. Let me send you the complete itinerary right now 🏔️</div>
                <div className="msg-time">11:43 PM ✓✓</div>
                <div className="msg msg-in msg-reveal msg-reveal-delay-2">Wow so fast! Yes please send details. Can we book a call tomorrow morning?</div>
                <div className="msg-time">11:44 PM</div>
                <div className="msg msg-out msg-reveal msg-reveal-delay-3">Absolutely! I've sent the full itinerary to this number. You can book a slot here → [link]. Morning slots are open. See you then! 🗓️</div>
                <div className="msg-time">11:44 PM ✓✓</div>
              </div>
              <div className="conv-badge">
                LeadMatrix responded in 61 seconds — while you slept
              </div>
            </div>
          </div>
        </div>


        <section style={{ background: '#0C0B08', padding: '32px 6% 0' }}>
          <div className="img-grid fade-up">
            <div className="img-grid-item">
              <img src={asset('tours', 'Peak_Season_Windows_Are_Short._Systems_Capture_All_of_It.-removebg-preview.png')} alt="Peak season windows are short — systems capture all of it" />
            </div>
            <div className="img-grid-item">
              <img src={asset('tours', 'Group_Bookings___Highest_Revenue_Per_Lead-removebg-preview.png')} alt="Group bookings equal highest revenue per lead" />
            </div>
            <div className="img-grid-item">
              <img src={asset('tours', 'Every_Inquiry_Deserves_a_Premium_Response-removebg-preview.png')} alt="Every inquiry deserves a premium response" />
            </div>
            <div className="img-grid-item">
              <img src={asset('tours', 'LeadMatrix_Dashboard___Your_Command_Center-removebg-preview.png')} alt="LeadMatrix Dashboard — Your Command Center" />
            </div>
          </div>
        </section>


        <div className="leak-banner fade-up">
          <div>
            <div className="leak-label">Estimated Revenue Leaking Right Now</div>
            <div className="leak-sub">Based on avg. ₹8L/mo tour operator, 40% lead leak rate</div>
          </div>
          <div>
            <div className="leak-number" id="leakCounter">₹0.00</div>
          </div>
          <a href="#audit-form" className="btn-primary">Find My Actual Number</a>
        </div>


        <section>
          <div className="section-eyebrow fade-up">Why Revenue Stays Stuck</div>
          <h2 className="section-h2 fade-up fade-up-d1">Four ways your travel business <em>leaks money</em> every single day.</h2>
          <div className="problems-grid">
            <div className="problem-card fade-up">
              <div className="problem-num">I</div>
              <div className="problem-title">The 6-Hour Response Gap</div>
              <p className="problem-body">A travel buyer who inquires at 7 PM and doesn't hear back until morning has already called three other operators. Studies show 78% of bookings go to the first responder. Your competitor who replies in 2 minutes wins the ₹1.5L group booking you never knew you lost.</p>
            </div>
            <div className="problem-card fade-up fade-up-d1">
              <div className="problem-num">II</div>
              <div className="problem-title">No Qualification Layer</div>
              <p className="problem-body">You spend 45 minutes on a call only to discover they want a budget of ₹8,000 when your packages start at ₹22,000. Or they're planning for 18 months from now. Without automatic qualification, your best time goes to the worst leads — and the serious buyers don't get the attention they deserve.</p>
            </div>
            <div className="problem-card fade-up fade-up-d2">
              <div className="problem-num">III</div>
              <div className="problem-title">Dead Leads That Weren't Dead</div>
              <p className="problem-body">They said "I'll think about it" three months ago. You moved on. But that lead just booked a ₹2.8L family Europe package with someone else — someone who kept following up automatically. Your CRM has hundreds of "cold" leads that just needed the right nudge at the right time.</p>
            </div>
            <div className="problem-card fade-up fade-up-d3">
              <div className="problem-num">IV</div>
              <div className="problem-title">Peak Season Chaos</div>
              <p className="problem-body">December to February. April to June. These 90 days determine your entire year. But this is also when your team is most overwhelmed, response rates drop, and the highest-value inquiries — the ones for Bhutan, Europe, custom itineraries — fall through the cracks. You can't scale humans. You can scale systems.</p>
            </div>
          </div>
        </section>


        <section>
          <div className="section-eyebrow fade-up">The Reality</div>
          <h2 className="section-h2 fade-up fade-up-d1">Profits go elsewhere. <em>Not passengers.</em></h2>
          <p className="section-lead fade-up fade-up-d2">When response is slow and systems fail, your revenue walks to the operator who answers first. Here's the shift that changes everything.</p>
          <div className="transformation-visual-wrap fade-up fade-up-d2">
            <div className="img-inner">
              <img src={asset('tours', 'Travel.jpeg')} alt="Profits Go Elsewhere. Not Passengers. — From chaotic booking errors to a modern, customer-first travel experience." loading="lazy" />
              <div className="img-caption-overlay">Before: chaos &amp; lost bookings → After: smooth operations &amp; happy travellers</div>
            </div>
          </div>
          <div className="transformation-visual-wrap fade-up fade-up-d3" style={{ marginTop: '60px' }}>
            <div className="img-inner">
              <div style={{ textAlign: 'center', padding: '16px 0 8px' }}>
                <span style={{ fontFamily: '\'Poppins\', sans-serif', fontSize: '11px', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>▶ Watch How It Works</span>
                <h3 style={{ fontFamily: '\'Poppins\', sans-serif', fontSize: 'clamp(18px,2.5vw,24px)', fontWeight: '600', color: 'var(--ivory)', marginTop: '4px', fontStyle: 'italic' }}>See LeadMatrix in Action for Travel</h3>
              </div>
              <video src={asset('tours', 'LTravel.mp4')} controls playsInline preload="metadata" poster={asset('tours', 'Travel.jpeg')} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }}>
                Your browser does not support the video tag.
              </video>
              <div className="img-caption-overlay">See LeadMatrix in action for tours &amp; travel businesses</div>
            </div>
          </div>
        </section>


        <section>
          <div className="section-eyebrow fade-up">The Transformation</div>
          <h2 className="section-h2 fade-up fade-up-d1">What running on a system <em>actually looks like</em></h2>
          <div className="before-after">
            <div className="ba-col ba-before fade-up">
              <div className="ba-watermark">Before</div>
              <div className="ba-label">✕ Before LeadMatrix</div>
              <div className="ba-item"><span className="ba-icon">✕</span>Inquiry comes in at 10 PM — replied next morning, buyer already gone</div>
              <div className="ba-item"><span className="ba-icon">✕</span>No qualification — spending hours with window shoppers</div>
              <div className="ba-item"><span className="ba-icon">✕</span>Peak season = missed calls, no follow-up, chaos</div>
              <div className="ba-item"><span className="ba-icon">✕</span>WhatsApp is personal number — no tracking, no reports</div>
              <div className="ba-item"><span className="ba-icon">✕</span>"Cold" leads sit forgotten for months</div>
              <div className="ba-item"><span className="ba-icon">✕</span>Revenue completely dependent on 1–2 people</div>
              <div className="ba-item"><span className="ba-icon">✕</span>No idea which channel generates best bookings</div>
              <div className="ba-item"><span className="ba-icon">✕</span>Payment collection is manual, delayed, awkward</div>
            </div>
            <div className="ba-col ba-after fade-up fade-up-d1">
              <div className="ba-watermark">After</div>
              <div className="ba-label">✓ After LeadMatrix</div>
              <div className="ba-item"><span className="ba-icon">✓</span>Every inquiry answered in under 60 seconds — 24/7, automatic</div>
              <div className="ba-item"><span className="ba-icon">✓</span>Lead scoring routes high-intent buyers to your phone instantly</div>
              <div className="ba-item"><span className="ba-icon">✓</span>Peak season handled — system doesn't sleep, doesn't panic</div>
              <div className="ba-item"><span className="ba-icon">✓</span>WhatsApp Business API — every conversation tracked and logged</div>
              <div className="ba-item"><span className="ba-icon">✓</span>Automated re-engagement sequences revive "dead" leads</div>
              <div className="ba-item"><span className="ba-icon">✓</span>Revenue runs even when your team is on leave</div>
              <div className="ba-item"><span className="ba-icon">✓</span>Channel attribution — you know exactly where your best leads come from</div>
              <div className="ba-item"><span className="ba-icon">✓</span>Razorpay links sent automatically — advance collected in minutes</div>
            </div>
          </div>
        </section>


        <div className="value-story fade-up">
          <span className="qs-large">"</span>
          <p>The <strong>real bottleneck</strong> in a travel business isn't the number of leads. It's what happens to leads after they arrive. Most operators have perfectly good demand — they just don't have the infrastructure to convert it.</p>
          <p>One missed Ladakh group inquiry in October is ₹1.76L you never collect. Over a 90-day peak season, that math becomes brutal. <strong>LeadMatrix doesn't add leads. It captures the ones you're already losing.</strong></p>
        </div>


        <section id="how-it-works">
          <div className="section-eyebrow fade-up">The Mechanism</div>
          <h2 className="section-h2 fade-up fade-up-d1">Five steps that turn <em>inquiries into advance payments</em></h2>
          <div className="mechanism-steps">
            <div className="step-card fade-up">
              <span className="step-num">01</span>
              <div className="step-title">Capture Every Inquiry</div>
              <p className="step-body">WhatsApp, Instagram DM, website form, Google — every channel funnels into one unified inbox. Nothing slips.</p>
            </div>
            <div className="step-card fade-up fade-up-d1">
              <span className="step-num">02</span>
              <div className="step-title">Respond in Your Voice</div>
              <p className="step-body">Automated responses that sound like you wrote them. Destination-specific, warm, professional. Under 60 seconds. Every time.</p>
            </div>
            <div className="step-card fade-up fade-up-d2">
              <span className="step-num">03</span>
              <div className="step-title">Score &amp; Qualify</div>
              <p className="step-body">15-point scoring system identifies serious buyers instantly. HOT leads (budget confirmed, dates fixed, group size known) get escalated to your phone in real time.</p>
            </div>
            <div className="step-card fade-up fade-up-d3">
              <span className="step-num">04</span>
              <div className="step-title">Book the Consultation</div>
              <p className="step-body">Calendly integration sends a booking link automatically. Your calendar fills with qualified discovery calls — no chasing, no manual coordination.</p>
            </div>
            <div className="step-card fade-up fade-up-d4">
              <span className="step-num">05</span>
              <div className="step-title">Collect Advance</div>
              <p className="step-body">Post-call, Razorpay payment link triggered automatically. 25–30% advance collected before the conversation ends. Cash flow secured.</p>
            </div>
          </div>
        </section>


        <section>
          <div className="section-eyebrow fade-up">Your Command Centre</div>
          <h2 className="section-h2 fade-up fade-up-d1">Everything you need to see, <em>in one place.</em></h2>
          <div className="dashboard-wrap fade-up fade-up-d2">
            <div className="dash-header">
              <div className="dash-dot" style={{ background: '#ff5f57' }}></div>
              <div className="dash-dot" style={{ background: '#febc2e' }}></div>
              <div className="dash-dot" style={{ background: '#28c840' }}></div>
              <div className="dash-title">LeadMatrix — Tours &amp; Travel Pipeline</div>
            </div>
            <div className="dash-body">
              <div className="dash-metric">
                <div className="dash-metric-val" data-count-to="47" data-suffix="">47</div>
                <div className="dash-metric-label">Active Leads This Week</div>
              </div>
              <div className="dash-metric">
                <div className="dash-metric-val" data-count-to="8.4" data-prefix="₹" data-suffix="L">₹8.4L</div>
                <div className="dash-metric-label">Pipeline Value</div>
              </div>
              <div className="dash-metric">
                <div className="dash-metric-val" data-count-to="34" data-suffix="%">34%</div>
                <div className="dash-metric-label">Conversion Rate</div>
              </div>
              <div className="dash-metric">
                <div className="dash-metric-val" data-count-to="58" data-suffix="s">58s</div>
                <div className="dash-metric-label">Avg Response Time</div>
              </div>
              <div className="dash-chart">
                <div className="dash-chart-title">Weekly Bookings Confirmed</div>
                <div className="bars">
                  <div className="bar bar--initial" style={{ height: '40%' }}></div>
                  <div className="bar bar--initial" style={{ height: '55%' }}></div>
                  <div className="bar bar--initial" style={{ height: '45%' }}></div>
                  <div className="bar bar--initial" style={{ height: '70%' }}></div>
                  <div className="bar bar--initial" style={{ height: '60%' }}></div>
                  <div className="bar bar--initial active" style={{ height: '85%' }}></div>
                  <div className="bar bar--initial" style={{ height: '30%' }}></div>
                </div>
              </div>
              <div className="dash-chart">
                <div className="dash-chart-title">Lead Source Breakdown</div>
                <div className="bars">
                  <div className="bar bar--initial active" style={{ height: '90%' }}></div>
                  <div className="bar bar--initial" style={{ height: '65%' }}></div>
                  <div className="bar bar--initial" style={{ height: '50%' }}></div>
                  <div className="bar bar--initial" style={{ height: '40%' }}></div>
                </div>
              </div>
              <div className="dash-pipeline">
                <div className="dash-chart-title" style={{ fontFamily: '\'Poppins\',sans-serif', fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Revenue Pipeline Progress</div>
                <div className="pipeline-stages">
                  <div className="pipeline-stage"><div className="pipeline-fill pipeline-fill--anim" style={{ width: '0' }} data-width="100"></div><div className="pipeline-label">New</div></div>
                  <div className="pipeline-stage"><div className="pipeline-fill pipeline-fill--anim" style={{ width: '0' }} data-width="75"></div><div className="pipeline-label">Qualified</div></div>
                  <div className="pipeline-stage"><div className="pipeline-fill pipeline-fill--anim" style={{ width: '0' }} data-width="55"></div><div className="pipeline-label">Proposal</div></div>
                  <div className="pipeline-stage"><div className="pipeline-fill pipeline-fill--anim" style={{ width: '0' }} data-width="38"></div><div className="pipeline-label">Advance</div></div>
                  <div className="pipeline-stage"><div className="pipeline-fill pipeline-fill--anim" style={{ width: '0' }} data-width="22"></div><div className="pipeline-label">Confirmed</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="section-eyebrow fade-up">What You Actually Get</div>
          <h2 className="section-h2 fade-up fade-up-d1">The complete <em>value stack</em> — before we discuss price</h2>
          <div className="value-stack">
            <div className="vs-header fade-up fade-up-d2">
              <span>What LeadMatrix Delivers</span>
              <span>Real-World Value</span>
            </div>
            <div className="vs-item fade-up fade-up-d2">
              <div className="vs-item-name">24/7 WhatsApp Lead Capture &amp; Auto-Response<span>Never lose an off-hours inquiry again</span></div>
              <div className="vs-item-val">₹15,000/mo</div>
            </div>
            <div className="vs-item fade-up fade-up-d3">
              <div className="vs-item-name">15-Point Lead Scoring Engine<span>Your time goes only to serious buyers</span></div>
              <div className="vs-item-val">₹12,000/mo</div>
            </div>
            <div className="vs-item fade-up fade-up-d3">
              <div className="vs-item-name">Automated 7-Touch Follow-Up Sequence<span>Revive cold leads on autopilot</span></div>
              <div className="vs-item-val">₹10,000/mo</div>
            </div>
            <div className="vs-item fade-up fade-up-d4">
              <div className="vs-item-name">Booking &amp; Calendar Automation<span>Qualified calls in your calendar daily</span></div>
              <div className="vs-item-val">₹8,000/mo</div>
            </div>
            <div className="vs-item fade-up fade-up-d4">
              <div className="vs-item-name">Advance Payment Collection (Razorpay)<span>30% advance auto-triggered post consultation</span></div>
              <div className="vs-item-val">₹8,000/mo</div>
            </div>
            <div className="vs-item fade-up fade-up-d5">
              <div className="vs-item-name">Revenue Analytics Dashboard<span>Know exactly where your best bookings come from</span></div>
              <div className="vs-item-val">₹6,000/mo</div>
            </div>
            <div className="vs-item fade-up fade-up-d5">
              <div className="vs-item-name">Peak Season Overflow Handling<span>System capacity never breaks during rush</span></div>
              <div className="vs-item-val">₹10,000/mo</div>
            </div>
            <div className="vs-total fade-up fade-up-d6">
              <span className="vs-total-label">Total Real-World Value</span>
              <span className="vs-total-val">₹69,000/mo</span>
            </div>
            <div className="vs-price-row fade-up fade-up-d6">
              <span className="vs-price-label">You don't pay that</span>
              <span className="vs-price-val">₹69,000/mo</span>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontFamily: '\'Poppins\',sans-serif', fontSize: '13px', color: 'var(--text-muted)', marginTop: '24px', letterSpacing: '0.1em' }}>See tier pricing below — inquiry-based access only.</p>
        </section>


        <div className="cta-band fade-up">
          <h2>Still wondering if your numbers <em>justify the investment?</em></h2>
          <p>We calculate your actual revenue leak before you spend a single rupee. Free. No pitch until you've seen the gap yourself.</p>
          <a href="#audit-form" className="btn-primary">Get My Free Revenue Audit</a>
        </div>


        <section>
          <div className="section-eyebrow fade-up">Early Results</div>
          <h2 className="section-h2 fade-up fade-up-d1">What operators saw <em>in the first 60 days</em></h2>
          <div className="results-grid">
            <div className="result-card fade-up">
              <div className="result-bg">₹</div>
              <span className="result-num">₹4.2L</span>
              <div className="result-label">Additional Revenue — Month 2</div>
              <p className="result-quote">"We used to miss 15–20 WhatsApp inquiries a week. Now the system catches everything. Three of those revived leads became confirmed bookings in the first 45 days."</p>
              <div className="result-author">Tour Operator — Manali-based, Group Treks</div>
            </div>
            <div className="result-card fade-up fade-up-d1">
              <div className="result-bg">%</div>
              <span className="result-num">3.1×</span>
              <div className="result-label">Booking Conversion Rate Increase</div>
              <p className="result-quote">"Before, our close rate was around 12%. After qualification filtering, we're only talking to people who are genuinely ready. Close rate jumped to 38% in 6 weeks."</p>
              <div className="result-author">Travel Agency — Pune, International Packages</div>
            </div>
            <div className="result-card fade-up fade-up-d2">
              <div className="result-bg">h</div>
              <span className="result-num">11hrs</span>
              <div className="result-label">Saved Per Week — Founder's Time</div>
              <p className="result-quote">"I was manually replying to every WhatsApp, every night. Now I only get notified when someone is hot — budget confirmed, dates set. The rest is handled automatically."</p>
              <div className="result-author">Adventure Travel Founder — Delhi, 8 years running</div>
            </div>
          </div>
        </section>


        <section id="tiers">
          <div className="section-eyebrow fade-up">Tier Selection</div>
          <h2 className="section-h2 fade-up fade-up-d1">Choose your operating <em>infrastructure level</em></h2>
          <p className="section-lead fade-up fade-up-d2">All tiers are cumulative. Tier 2 includes everything in Tier 1. Tier 3 includes everything in Tier 2. You never lose what you've built.</p>
          <div className="tiers-grid">

            <div className="tier-card fade-up">
              <div className="tier-head">
                <div className="tier-name">Presence</div>
                <div className="tier-tagline">Tier 1 — Entry Infrastructure</div>
                <a href="#audit-form" className="tier-cta">Inquire for Tier 1</a>
              </div>
              <div className="tier-body">
                <div className="tier-section-label">Core Features</div>
                <div className="tier-feature">WhatsApp Business API Integration</div>
                <div className="tier-feature">24/7 Auto-Response (Under 60 Seconds)</div>
                <div className="tier-feature">Lead Capture Form (Tally/Website)</div>
                <div className="tier-feature">Basic Lead Qualification (Budget, Dates, Group Size)</div>
                <div className="tier-feature">CRM Pipeline Dashboard (Google Sheets)</div>
                <div className="tier-feature">3-Touch Nurture Sequence (WhatsApp + Email)</div>
                <div className="tier-feature">Business Hours Human Escalation</div>
                <div className="tier-feature">Single Landing Page Setup</div>
                <div className="tier-section-label">Reporting</div>
                <div className="tier-feature">Monthly Lead Report</div>
                <div className="tier-feature">Channel Performance Overview</div>
              </div>
            </div>

            <div className="tier-card featured fade-up fade-up-d1">
              <div className="tier-badge">Most Popular</div>
              <div className="tier-head">
                <div className="tier-name">Distinction</div>
                <div className="tier-tagline">Tier 2 — Tier 1 + Advanced Conversion</div>
                <a href="#audit-form" className="tier-cta">Inquire for Tier 2</a>
              </div>
              <div className="tier-body">
                <div className="tier-section-label">Everything in Tier 1, plus:</div>
                <div className="tier-feature carried">WhatsApp Business API Integration</div>
                <div className="tier-feature carried">24/7 Auto-Response + Lead Capture</div>
                <div className="tier-feature carried">CRM Pipeline + 3-Touch Nurture</div>
                <div className="tier-section-label">Tier 2 Additions</div>
                <div className="tier-feature">15-Point Lead Scoring Engine</div>
                <div className="tier-feature">HOT / WARM / COLD Auto-Routing</div>
                <div className="tier-feature">7-Touch Nurture Sequence (Multi-Channel)</div>
                <div className="tier-feature">Calendly Booking Automation</div>
                <div className="tier-feature">Razorpay Advance Payment Link (Auto-Triggered)</div>
                <div className="tier-feature">2 Landing Pages + A/B Testing Setup</div>
                <div className="tier-feature">Real-Time HOT Lead Mobile Alerts</div>
                <div className="tier-section-label">Reporting</div>
                <div className="tier-feature">Weekly Performance Dashboard</div>
                <div className="tier-feature">Booking Source Attribution</div>
                <div className="tier-feature">Conversion Funnel Report</div>
              </div>
            </div>

            <div className="tier-card fade-up fade-up-d2">
              <div className="tier-head">
                <div className="tier-name">Mastery</div>
                <div className="tier-tagline">Tier 3 — Tier 2 + Full Revenue OS</div>
                <a href="#audit-form" className="tier-cta">Inquire for Tier 3</a>
              </div>
              <div className="tier-body">
                <div className="tier-section-label">Everything in Tier 2, plus:</div>
                <div className="tier-feature carried">Lead Scoring + HOT Routing</div>
                <div className="tier-feature carried">7-Touch Nurture + Booking Automation</div>
                <div className="tier-feature carried">Payment Integration + Landing Pages</div>
                <div className="tier-section-label">Tier 3 Additions</div>
                <div className="tier-feature">AI Qualification Agent (Intent Detection)</div>
                <div className="tier-feature">Full Revenue Analytics Dashboard</div>
                <div className="tier-feature">Upsell &amp; Cross-Sell Automation (Post-Booking)</div>
                <div className="tier-feature">Referral Trigger System (Day 30 Post-Booking)</div>
                <div className="tier-feature">Retention &amp; Repeat-Booking Sequences</div>
                <div className="tier-feature">Dedicated System Manager (Yours, Not Shared)</div>
                <div className="tier-feature">Unlimited WhatsApp Template Creation</div>
                <div className="tier-feature">Custom API Integrations (Your Tools)</div>
                <div className="tier-section-label">Support</div>
                <div className="tier-feature">Priority 4-Hour Response SLA</div>
                <div className="tier-feature">Quarterly Revenue Strategy Review Call</div>
                <div className="tier-feature">Ongoing System Optimisation</div>
              </div>
            </div>
          </div>
        </section>


        <hr className="gold-divider fade-up" aria-hidden="true" />
        <div className="guarantee-section">
          <div className="guarantee-box fade-up">
            <span className="guarantee-icon">⚲</span>
            <div className="guarantee-title">The Zero-Risk Audit Promise</div>
            <p className="guarantee-body">Before you spend a single rupee, we calculate your exact revenue leak — which leads you're losing, from which channels, and what they're worth. If the number is zero, we say so and part as friends. No pitch until you've seen the gap yourself. <strong style={{ color: 'var(--gold)' }}>Your numbers. Our calculation. Zero obligation.</strong></p>
          </div>
        </div>


        <section>
          <div className="section-eyebrow fade-up">Common Questions</div>
          <h2 className="section-h2 fade-up fade-up-d1">Answered <em>directly.</em></h2>
          <div className="faq-grid">
            <div className="faq-item fade-up">
              <div className="faq-q">How fast does the system actually respond?</div>
              <p className="faq-a">Under 60 seconds. We use WhatsApp Business API — a platform-approved automation layer, not a workaround. Your response goes out before your competitor has even read the notification.</p>
            </div>
            <div className="faq-item fade-up fade-up-d1">
              <div className="faq-q">Will it sound generic or bot-like?</div>
              <p className="faq-a">No. Every response template is built specifically for your business, your destinations, and your voice. We run it with you before going live. If it doesn't sound like you, we don't launch it.</p>
            </div>
            <div className="faq-item fade-up fade-up-d2">
              <div className="faq-q">What if a lead needs human attention?</div>
              <p className="faq-a">That's what the routing logic is for. When a lead scores high (budget confirmed, dates set, group ready), you get a real-time alert. The system handles the first pass. You handle the close. That's the division of work.</p>
            </div>
            <div className="faq-item fade-up fade-up-d3">
              <div className="faq-q">How long does setup take?</div>
              <p className="faq-a">Standard setup is 7–10 business days from kickoff call to go-live. We handle everything — WhatsApp API onboarding, template approvals, CRM setup, automation builds. You onboard your team in a single 30-minute call.</p>
            </div>
            <div className="faq-item fade-up fade-up-d4">
              <div className="faq-q">We're seasonal. Does this work during off-season?</div>
              <p className="faq-a">Perfectly. Off-season is when the system runs nurture sequences on warm leads — keeping you top of mind so when peak season opens, your pipeline is already warm. Seasonality becomes an advantage, not a limitation.</p>
            </div>
            <div className="faq-item fade-up">
              <div className="faq-q">What does the audit include?</div>
              <p className="faq-a">A 20-minute call where we walk through your current inquiry volume, response time, close rate, and average booking value. We calculate the monthly number you're leaving on the table — to the rupee. You keep that number whether you move forward or not.</p>
            </div>
          </div>
        </section>


        <div className="form-section" id="audit-form">
          <div className="form-wrap">
            <div className="section-eyebrow fade-up" style={{ justifyContent: 'center' }}>Free Revenue Leak Audit</div>
            <h2 className="section-h2 fade-up fade-up-d1" style={{ textAlign: 'center' }}>Claim your <em>free 20-minute audit.</em><br />Find out exactly what you're leaking.</h2>
            <p style={{ textAlign: 'center', fontSize: '17px', color: 'rgba(245,240,232,0.6)', marginBottom: '8px', fontFamily: '\'Poppins\',sans-serif' }}>Takes 3 minutes to fill. We do the math.</p>
            <form id="auditForm" className="form-grid">
              <div className="form-field fade-up fade-up-d2">
                <label className="form-label">Your Name</label>
                <input type="text" name="Name" className="form-input" placeholder="e.g. Rajesh Sharma" required />
              </div>
              <div className="form-field fade-up fade-up-d2">
                <label className="form-label">Business / Franchise Name</label>
                <input type="text" name="Business Name" className="form-input" placeholder="e.g. Sharma's Bakery" required />
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
                <select name="Your Role" className="form-select" required>
                  <option value="">Select your role</option>
                  <option>Founder / Owner</option>
                  <option>Operations Head</option>
                  <option>Sales Manager</option>
                  <option>Marketing Lead</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-field fade-up fade-up-d4">
                <label className="form-label">Business Type</label>
                <select name="Business Type" className="form-select" required>
                  <option value="">Select type</option>
                  <option>Travel Agency (B2C)</option>
                  <option>Tour Operator</option>
                  <option>DMC (Destination Management)</option>
                  <option>Corporate Travel</option>
                  <option>Adventure / Niche Tourism</option>
                  <option>Luxury Travel</option>
                  <option>Online Travel (OTA)</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-field fade-up fade-up-d5">
                <label className="form-label">Number of Locations</label>
                <select name="Number of Locations" className="form-select" required>
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
                <select name="Monthly Revenue" className="form-select" required>
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
                <select name="Which Level Interests You?" className="form-select" id="levelSelect">
                  <option value="">Not sure yet — help me decide</option>
                  <option value="visibility">Tier 1 — Presence (Entry Infrastructure)</option>
                  <option value="control">Tier 2 — Distinction (Advanced Conversion)</option>
                  <option value="autonomy">Tier 3 — Mastery (Full Revenue OS)</option>
                </select>
              </div>
              <div className="form-field full fade-up fade-up-d6">
                <button type="submit" className="form-submit">Claim My Free Revenue Leak Audit →</button>
                <p className="form-note">20-minute call. No pitch before your numbers. No obligation to proceed.</p>
              </div>
            </form>
          </div>
        </div>


        <footer className="fade-up">
          <div>
            <div className="footer-brand">Lead<span>Matrix</span></div>
            <p style={{ fontFamily: '\'Poppins\',sans-serif', fontSize: '13px', color: 'rgba(245,240,232,0.4)', marginTop: '8px', maxWidth: '320px' }}>Revenue infrastructure for tour operators and travel companies that are ready to stop leaking bookings.</p>
          </div>
          <div className="footer-contact">
            <div>Email: <a href="mailto:hypexofficial.team@gmail.com">hypexofficial.team@gmail.com</a></div>
            <div>Contact: <a href="tel:+916289109099">+91 6289109099</a> / <a href="tel:+918444815643">8444815643</a></div>
          </div>
          <div className="footer-bottom">
            <span className="footer-legal">© 2025 LeadMatrix. All rights reserved. Built for operators who are done leaving revenue on the table.</span>
            <a href="#audit-form" className="btn-primary" style={{ fontSize: '11px', padding: '12px 24px' }}>Get Free Audit →</a>
          </div>
        </footer>


      </>
    </LandingFrame>
  );
}
