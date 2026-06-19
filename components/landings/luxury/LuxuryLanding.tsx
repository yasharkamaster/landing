import LandingFrame from '../shared/LandingFrame';
import LuxuryClient from './LuxuryClient';
import { asset } from '@/lib/landing-assets';
import './luxury.css';

export default function LuxuryLanding() {
  const a = (file: string) => asset('luxury', file);

  return (
    <LandingFrame bodyClass="luxury-landing">
      <LuxuryClient />
      <div id="landing-root">

        <div className="cursor" id="cursor"></div>
        <div className="cursor-ring" id="cursorRing"></div>


        <nav>
          <div className="nav-brand">LeadMatrix</div>
          <div className="nav-tagline">Revenue Operating Systems for Luxury Retail</div>
          <a href="#audit-form" className="nav-cta">Free Audit</a>
        </nav>


        <section className="hero">
          <div className="hero-left">
            <div className="hero-issue">LeadMatrix · Luxury Boutiques</div>

            <h1 className="hero-headline">
              <span className="line">She enquired</span>
              <span className="line"><em>at eleven PM.</em></span>
              <span className="line"><span className="not-you">Her reply came in 61 seconds. Not from you.</span></span>
            </h1>

            <p className="hero-sub">
              Every after-hours WhatsApp that goes unanswered is a <strong>₹40,000–₹1.2 lakh conversation</strong> you will never have.
              LeadMatrix responds the moment she sends a message — with the same refinement and warmth your boutique is known for.
            </p>

            <div className="hero-cta-block">
              <a href="#audit-form" className="btn-primary">Claim Your Free Revenue Leak Audit</a>
              <p className="cta-footnote">20 minutes · Zero cost · We show you the exact number first</p>
            </div>

            <div className="hero-stats">
              <div className="stat-pill">
                <span className="stat-num">63%</span>
                <span className="stat-label">Enquiries after 7 PM</span>
              </div>
              <div className="stat-pill">
                <span className="stat-num">8.4hr</span>
                <span className="stat-label">Average response time</span>
              </div>
              <div className="stat-pill">
                <span className="stat-num">₹0</span>
                <span className="stat-label">Recovered without a system</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="enquiry-thread">
              <div className="thread-label">Live · Instagram DM · 11:07 PM</div>
              <div className="chat-window">
                <div className="chat-topbar">
                  <div className="chat-avatar">💎</div>
                  <div>
                    <div className="chat-info-name">Ishita Mehta</div>
                    <div className="chat-info-sub">High-Value Client · Mumbai</div>
                  </div>
                </div>
                <div className="chat-messages">
                  <div className="msg client">
                    <div className="bubble">Hi, I'm looking for a custom lehenga for my daughter's reception. Our budget is around ₹85,000. Do you still have December appointments?</div>
                    <div className="msg-time">11:07 PM</div>
                  </div>
                  <div className="msg system">
                    <div className="bubble">Good evening, Ishita. Yes, we have exclusive December appointments for bridal trousseau — and your budget is beautifully suited for our Signature Collection. I'm sending you our lookbook right now. Shall we schedule a private consultation this week?</div>
                    <div className="msg-time">11:08 PM · LeadMatrix</div>
                  </div>
                  <div className="msg client">
                    <div className="bubble">Oh wow, that was fast! Yes, Wednesday or Thursday works.</div>
                    <div className="msg-time">11:09 PM</div>
                  </div>
                </div>
                <div className="response-badge">
                  <div className="badge-dot"></div>
                  <span className="badge-text">Responded in 61 seconds · ₹85,000 consultation booked</span>
                </div>
              </div>
              <div className="revenue-ticker">
                <div className="ticker-label">Without LeadMatrix · Same enquiry · Typical boutique</div>
                <div className="ticker-amount" id="leakAmount">₹0</div>
                <div className="ticker-sub">lost because no one saw the message until morning</div>
              </div>
            </div>
          </div>
          </section>


          <section className="comparison-visual-section" style={{ background: 'var(--ink)', padding: 'clamp(48px,7vw,90px) clamp(20px,5vw,72px) 0', borderTop: '1px solid var(--border)' }}>
            <div className="comparison-visual reveal" style={{ maxWidth: '1400px', margin: '0 auto' }}>
              <div className="comparison-image-wrapper" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.4),0 0 0 1px var(--border-strong)', border: '2px solid var(--border-strong)', background: 'var(--ink-light)', padding: 'clamp(10px,1.2vw,14px)' }}>
                <img src={a('Luxury.jpeg')} alt="FROM CHAOS TO LUXURY - Before and After Luxury Boutique Transformation" className="comparison-image" style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block', borderRadius: '12px', filter: 'brightness(0.98)' }} loading="lazy" />
              </div>
            </div>
          </section>


          <div className="ticker-bar">
          <div className="ticker-inner">
            <div className="ticker-item">After-hours enquiries go unanswered for 8+ hours on average</div>
            <div className="ticker-item">LeadMatrix responds in under 90 seconds — every time</div>
            <div className="ticker-item">63% of luxury fashion enquiries arrive between 8 PM and midnight</div>
            <div className="ticker-item">Average boutique consultation value: ₹42,000–₹1.2 lakh</div>
            <div className="ticker-item">One recovered high-value client covers your entire annual system cost</div>
            <div className="ticker-item">After-hours enquiries go unanswered for 8+ hours on average</div>
            <div className="ticker-item">LeadMatrix responds in under 90 seconds — every time</div>
            <div className="ticker-item">63% of luxury fashion enquiries arrive between 8 PM and midnight</div>
            <div className="ticker-item">Average boutique consultation value: ₹42,000–₹1.2 lakh</div>
            <div className="ticker-item">One recovered high-value client covers your entire annual system cost</div>
          </div>
        </div>


        <section className="truth">
          <blockquote className="truth-quote reveal">
            The luxury client does not wait. She is not browsing — she is <strong>deciding</strong>.
            When she reaches out at 11 PM, she has already imagined herself in your boutique.
            The only question is whether your boutique responds before
            <em>someone else's does.</em>
          </blockquote>
          <div className="truth-attribution reveal reveal-d2">— The After-Hours Revenue Problem, Every Luxury Boutique Founder Knows But Has Not Solved</div>
        </section>


        <section className="problems">
          <div className="section-eyebrow reveal">The Revenue Leak</div>
          <h2 className="section-title reveal reveal-d1">What happens when<br /><em>no one is watching</em></h2>
          <div className="problem-grid">
            <div className="prob-cell reveal" data-num="I">
              <div className="prob-img"><img src={a('The_11_PM_Enquiry-removebg-preview.png')} alt="The 11 PM Enquiry — after-hours luxury boutique enquiries" /></div>
              <div className="prob-num">I</div>
              <div className="prob-title">The 11 PM Enquiry</div>
              <div className="prob-body">
                Your highest-value clients browse after dinner, after events, after the day calms.
                <strong>They send messages when they are emotionally ready to buy.</strong>
                Your team is asleep. Your boutique is silent. By morning, she has found someone else.
              </div>
            </div>
            <div className="prob-cell reveal reveal-d1" data-num="II">
              <div className="prob-img"><img src={a('Inconsistent_First_Impressions-removebg-preview.png')} alt="Inconsistent first impressions — brand tone across touchpoints" /></div>
              <div className="prob-num">II</div>
              <div className="prob-title">Inconsistent First Impressions</div>
              <div className="prob-body">
                One team member replies warmly. Another sends a voice note. A third doesn't follow up at all.
                <strong>Your boutique's tone should be as consistent as your craftsmanship.</strong>
                Right now, it depends entirely on whoever is available.
              </div>
            </div>
            <div className="prob-cell reveal reveal-d2" data-num="III">
              <div className="prob-img"><img src={a('No_Qualification_Layer-removebg-preview.png')} alt="No qualification layer — filtering leads before your team" /></div>
              <div className="prob-num">III</div>
              <div className="prob-title">No Qualification Layer</div>
              <div className="prob-body">
                Time-wasters and serious clients look identical in a DM.
                Your team spends equal energy on both.
                <strong>LeadMatrix qualifies by budget, occasion, and timeline</strong> before any human gets involved —
                so your team meets only ready buyers.
              </div>
            </div>
            <div className="prob-cell reveal reveal-d3" data-num="IV">
              <div className="prob-img"><img src={a('Revenue-That_Cannot_Be_Counted-removebg-preview.png')} alt="Revenue that cannot be counted — invisible leak" /></div>
              <div className="prob-num">IV</div>
              <div className="prob-title">Revenue That Cannot Be Counted</div>
              <div className="prob-body">
                You do not know how many enquiries became nothing. There is no record, no follow-up trail, no data.
                <strong>The rupee leak is invisible — which means it compounds silently</strong>, month after month,
                until someone shows you the number.
              </div>
            </div>
          </div>
        </section>


        <section className="comparison-visual-section" style={{ background: 'var(--ink)', padding: 'clamp(56px,8vw,120px) clamp(20px,5vw,72px)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="comparison-visual reveal" style={{ maxWidth: '1400px', margin: '40px auto 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(9px,0.9vw,10px)', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)' }}>▶ Watch the Transformation</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px,2.5vw,30px)', fontWeight: '400', color: 'var(--parchment)', marginTop: '8px', fontStyle: 'italic' }}>See LeadMatrix in Action</h3>
            </div>
            <div className="comparison-image-wrapper" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.4),0 0 0 1px var(--border-strong)', border: '2px solid var(--border-strong)', background: 'var(--ink-light)', padding: 'clamp(10px,1.2vw,14px)', transition: 'transform 0.4s ease,box-shadow 0.4s ease' }}>
              <video src={a('LHotel.mp4')} className="comparison-image" style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block', borderRadius: '12px', transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)', filter: 'brightness(0.98)' }} controls playsInline preload="metadata" poster={a('Luxury.jpeg')}>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>


        <section className="mechanism">
          <div className="mech-layout">
            <div className="mech-left">
              <div className="section-eyebrow reveal">How It Works</div>
              <h2 className="mech-intro reveal reveal-d1">
                Instant. Refined.
                <em>Automated to perfection.</em>
              </h2>
              <p className="mech-body reveal reveal-d2">
                LeadMatrix is not a chatbot. It is an always-on extension of your boutique — trained to respond with
                <strong>the warmth, vocabulary, and exclusivity</strong> your brand is built on.
              </p>
              <p className="mech-body reveal reveal-d3">
                It captures every enquiry from Instagram DMs, WhatsApp, your website, and even missed calls —
                <strong>qualifies them in under 2 minutes</strong>, and delivers only consultation-ready clients to your team.
              </p>
            </div>
            <div className="mech-right reveal reveal-d2">
              <div className="step-list">
                <div className="step-item">
                  <div className="step-num">01</div>
                  <div className="step-content">
                    <div className="step-title">Capture Every Enquiry</div>
                    <div className="step-desc">Instagram DMs, WhatsApp messages, website forms, missed calls — every touchpoint captured instantly. Nothing falls through.</div>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-num">02</div>
                  <div className="step-content">
                    <div className="step-title">Respond in Your Voice</div>
                    <div className="step-desc">A personalised, brand-consistent response arrives within 90 seconds — day or night, weekday or wedding season.</div>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-num">03</div>
                  <div className="step-content">
                    <div className="step-title">Qualify with Elegance</div>
                    <div className="step-desc">Budget, occasion, timeline — gathered conversationally, not through a cold form. Only serious buyers reach your team.</div>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-num">04</div>
                  <div className="step-content">
                    <div className="step-title">Book the Consultation</div>
                    <div className="step-desc">Appointment confirmed while the client is still in the conversation — before she considers anyone else.</div>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-num">05</div>
                  <div className="step-content">
                    <div className="step-title">See Everything</div>
                    <div className="step-desc">One dashboard. Every enquiry, every response, every booking. The invisible becomes visible — and manageable.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="tiers">
          <div className="tiers-header">
            <h2 className="section-title reveal" style={{ marginBottom: '0' }}>Choose your<br /><em>level of presence.</em></h2>
            <div className="tiers-intro reveal reveal-d2">
              Three levels. Each one ensures that no enquiry goes unanswered.
              Start where you are comfortable. Upgrade when the data makes the decision for you.
            </div>
          </div>

          <div className="tiers-grid">

            <div className="tier-card reveal">
              <div className="tier-name">LeadMatrix · I</div>
              <div className="tier-title">Presence</div>
              <div className="tier-price">₹15,000–20,000 / month</div>
              <ul className="tier-feature-list">
                <li className="tier-feature highlight">WhatsApp + Instagram DM capture</li>
                <li className="tier-feature highlight">Automated first response (90 sec)</li>
                <li className="tier-feature highlight">Basic qualification (budget + occasion)</li>
                <li className="tier-feature">Lead pipeline in Google Sheets</li>
                <li className="tier-feature">Manual appointment booking</li>
                <li className="tier-feature">Weekly enquiry summary</li>
              </ul>
            </div>


            <div className="tier-card featured reveal reveal-d1">
              <div className="tier-featured-badge">Most Chosen</div>
              <div className="tier-name">LeadMatrix · II</div>
              <div className="tier-title">Distinction</div>
              <div className="tier-price">₹25,000–35,000 / month</div>
              <ul className="tier-feature-list">
                <li className="tier-feature highlight">All Presence features</li>
                <li className="tier-feature highlight">Full qualification sequence (budget, timeline, occasion, decision-maker)</li>
                <li className="tier-feature highlight">Automated consultation booking with calendar sync</li>
                <li className="tier-feature highlight">Follow-up sequence for warm leads (3-touch)</li>
                <li className="tier-feature">Brand-voice customisation</li>
                <li className="tier-feature">Monthly revenue recovery report</li>
              </ul>
            </div>


            <div className="tier-card reveal reveal-d2">
              <div className="tier-name">LeadMatrix · III</div>
              <div className="tier-title">Mastery</div>
              <div className="tier-price">₹40,000–45,000 / month</div>
              <ul className="tier-feature-list">
                <li className="tier-feature highlight">All Distinction features</li>
                <li className="tier-feature highlight">AI-assisted lookbook delivery in-chat</li>
                <li className="tier-feature highlight">VIP client re-engagement sequences</li>
                <li className="tier-feature highlight">Post-purchase referral automation</li>
                <li className="tier-feature">Multi-channel (website, calls, DMs)</li>
                <li className="tier-feature">Dedicated account manager + quarterly review</li>
              </ul>
            </div>
          </div>
        </section>


        <section className="guarantee">
          <div className="guarantee-ornament reveal">✦</div>
          <h2 className="guarantee-title reveal reveal-d1">
            We show you the leak<br />before you spend
            <em>a single rupee.</em>
          </h2>
          <p className="guarantee-body reveal reveal-d2">
            The Free Revenue Leak Audit takes 20 minutes. We will calculate exactly how much your boutique is leaving on the table from unanswered enquiries — with a specific rupee number.
            <strong>If the number is zero, we say so and we part as friends.</strong>
            No pitch until you have seen the gap yourself.
          </p>
        </section>


        <section className="form-section" id="audit-form">
          <div className="form-layout">
            <div className="form-left">
              <div className="section-eyebrow reveal">The Audit</div>
              <h2 className="form-headline reveal reveal-d1">
                Reserve your
                <em>free 20-minute session.</em>
              </h2>
              <p className="form-desc reveal reveal-d2">
                We will show you <strong>the exact rupee value of your unanswered enquiries</strong> — calculated from your own business, not industry averages.
                You will leave knowing the number. What you do next is entirely your decision.
              </p>
              <ul className="promise-list reveal reveal-d3">
                <li className="promise-item">Zero cost — no credit card, no obligation</li>
                <li className="promise-item">20 minutes. Nothing longer.</li>
                <li className="promise-item">Custom rupee leak calculation for your boutique</li>
                <li className="promise-item">If we cannot help you, we will tell you immediately</li>
              </ul>
            </div>

            <div className="form-right reveal reveal-d2">
              <div className="audit-form" id="auditFormCard">
                <div id="formBody">
                  <div className="form-wrap" data-animate="form-wrap">
                    <h3>Reserve Your Audit</h3>
                    <p>We'll show you the exact rupee value of your unanswered enquiries. Our team will reach out within 4 hours.</p>
                    <form id="leadForm">
                      <div className="form-group" data-form-field="1">
                        <label>Your Name</label>
                        <input type="text" name="Name" placeholder="e.g. Rajesh Sharma" required />
                      </div>
                      <div className="form-group" data-form-field="2">
                        <label>Business / Franchise Name</label>
                        <input type="text" name="Business Name" placeholder="e.g. Sharma's Bakery" required />
                      </div>
                      <div className="form-row">
                        <div className="form-group" data-form-field="3">
                          <label>Email</label>
                          <input type="email" name="Email" placeholder="you@yourbusiness.com" required />
                        </div>
                        <div className="form-group" data-form-field="4">
                          <label>WhatsApp Number</label>
                          <input type="tel" name="WhatsApp Number" placeholder="+91 98XXXXXXXX" required />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group" data-form-field="5">
                          <label>Your Role</label>
                          <select name="Your Role" required>
                            <option value="">Select your role</option>
                            <option>Founder / Owner</option>
                            <option>Director / CEO</option>
                            <option>Store Manager</option>
                            <option>Operations Head</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="form-group" data-form-field="6">
                          <label>Business Type</label>
                          <select name="Business Type" required>
                            <option value="">Select type</option>
                            <option>Luxury Fashion</option>
                            <option>Bridal &amp; Couture</option>
                            <option>Designer Boutique</option>
                            <option>Multi-Designer Store</option>
                            <option>Accessories &amp; Jewelry</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group" data-form-field="7">
                          <label>Number of Locations</label>
                          <select name="Number of Locations" required>
                            <option value="">Select range</option>
                            <option>1 location</option>
                            <option>2-3 locations</option>
                            <option>4-6 locations</option>
                            <option>7-10 locations</option>
                            <option>10+ locations</option>
                          </select>
                        </div>
                        <div className="form-group" data-form-field="8">
                          <label>Monthly Revenue (₹)</label>
                          <select name="Monthly Revenue" required>
                            <option value="">Select range</option>
                            <option>Under ₹5 Lakhs</option>
                            <option>₹5L - ₹15L</option>
                            <option>₹15L - ₹30L</option>
                            <option>₹30L - ₹50L</option>
                            <option>₹50L+</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group" data-form-field="9">
                        <label>Which Level Interests You?</label>
                        <select id="levelSelect" name="Which Level Interests You?">
                          <option value="">Not sure yet — help me decide</option>
                          <option value="visibility">Level 01 — Visibility (See Every Enquiry)</option>
                          <option value="control">Level 02 — Control (Capture &amp; Convert)</option>
                          <option value="autonomy">Level 03 — Autonomous (AI Runs Your Pipeline)</option>
                        </select>
                      </div>
                      <button type="submit" className="btn form-submit primary-cta">
                        <span>Show Me My Revenue Leak →</span>
                      </button>
                      <div className="form-trust">
                        <span>🔒</span>
                        <span>No spam. No obligation. Your data stays private.</span>
                      </div>
                    </form>
                  </div>
                  <div className="trust-row">
                    <div className="trust-item" data-trust="1">No credit card</div>
                    <div className="trust-item" data-trust="2">20-minute call</div>
                    <div className="trust-item" data-trust="3">Zero obligation</div>
                  </div>
                </div>
                <div className="success-message" id="successMsg">
                  <div className="success-icon">✅</div>
                  <div className="success-title">Audit Request Sent!</div>
                  <p className="success-text">We'll call you within 4 hours with your personalized Revenue Leak Audit. Watch for our message.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="faq">
          <div className="faq-layout">
            <div className="faq-side">
              <h2 className="faq-side-title reveal">Questions<br /><em>worth asking.</em></h2>
              <p className="faq-side-body reveal reveal-d1">If something is still unclear after reading this, it is answered here. If it is not, ask us in the audit — that is what it is for.</p>
            </div>
            <div className="faq-items">
              <div className="faq-item">
                <button className="faq-q">
                  <span className="faq-q-text">Our boutique has a specific brand voice. Will the automated responses sound like us?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a">
                  Yes — this is the first thing we configure. Before a single message is sent, we spend dedicated time learning your tone, vocabulary, preferred greetings, and how your team naturally speaks to clients. <strong>The response that arrives within 90 seconds should feel indistinguishable from your best team member</strong> — not like a bot.
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-q">
                  <span className="faq-q-text">We already have a team managing our DMs. Will this replace them?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a">
                  It does not replace your team — it handles everything before your team needs to get involved. <strong>Your team currently spends time on initial replies, repeated questions, and unqualified enquiries.</strong> LeadMatrix handles all of that automatically. By the time a conversation reaches your team, the client is qualified, interested, and ready to book. Your team focuses only on closing.
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-q">
                  <span className="faq-q-text">What about high-end clients who might feel offended by an automated reply?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a">
                  This concern is understandable and it is exactly why the response quality is the first thing we invest in. <strong>A warm, specific, well-written reply in 61 seconds is never offensive — an 8-hour silence is.</strong> Luxury clients have high standards for responsiveness. LeadMatrix meets those standards consistently. No client will know it is automated unless you tell them.
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-q">
                  <span className="faq-q-text">How long does it take to set up and go live?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a">
                  The system goes live in 5–7 working days from the signed agreement. That includes brand voice calibration, channel integration, qualification logic setup, and testing. <strong>You will see your first automated enquiry response within the first week.</strong>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-q">
                  <span className="faq-q-text">What exactly happens in the free audit?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a">
                  It is a 20-minute conversation. We ask you about your current enquiry volume, average consultation or order value, and how your team responds today. From those numbers, <strong>we calculate the specific rupee value of revenue leaving your boutique monthly through unanswered or delayed enquiries.</strong> That number is yours regardless of whether you move forward with us.
                </div>
              </div>
            </div>
          </div>
        </section>


        <footer>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', width: '100%' }}>
            <div>
              <div className="footer-brand">LeadMatrix · Revenue Operating Systems</div>
              <div className="footer-note">Every enquiry deserves an answer worthy of your boutique.</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', fontWeight: '600', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Contact Us</span>
              <a href="mailto:hypexofficial.team@gmail.com" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'rgba(245,239,228,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}>📧 hypexofficial.team@gmail.com</a>
              <a href="tel:+916289109099" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'rgba(245,239,228,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}>📞 +91 6289109099</a>
              <a href="tel:+918444815643" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'rgba(245,239,228,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}>📞 +91 8444815643</a>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'rgba(245,239,228,0.3)', letterSpacing: '1px' }}>© 2025 HypeX. All rights reserved.</p>
            </div>
          </div>
        </footer>











      </div>
    </LandingFrame>
  );
}
