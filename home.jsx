/* ============================================================
   Banyan Home — simplified
   Hero · Stats · Logos · Trust · Services · Industries
   · Case studies · Client stories · Methodology · CTA
   ============================================================ */

const { useState: useStateH, useEffect: useEffectH } = React;

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="hero">
      <div className="shell hero-inner">
        <div className="hero-meta">
          <span className="eyebrow">Odoo specialists · AI-native</span>
          <span className="mono" style={{ fontSize: 12, color: 'var(--bone-300)', letterSpacing: '0.10em' }}>
            EST. 2023 / MIAMI, FL
          </span>
        </div>

        <h1 className="h-display hero-title">
          <span className="hero-line">The first AI&#8209;native <OdooLogo /> firm.</span>
          <span className="hero-line hero-line-muted">Implementation, the easy part.</span>
        </h1>

        <div className="hero-grid">
          <p className="lede" style={{ maxWidth: '42ch' }}>
            Banyan is an Odoo consulting firm that pairs senior architects with proprietary AI to compress months of ERP implementation into weeks of clarity.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="contact.html">Free Odoo diagnostic <span className="btn-arrow">→</span></a>
            <a className="btn btn-ghost" href="services.html">See our method</a>
          </div>
        </div>
      </div>

      <style>{`
        .hero { padding: 180px 0 120px; position: relative; }
        .hero-inner { display: flex; flex-direction: column; gap: 56px; }
        .hero-meta { display: flex; justify-content: space-between; align-items: center; padding-bottom: 32px; flex-wrap: wrap; gap: 16px; }
        .hero-title { font-size: clamp(40px, 5.5vw, 76px); line-height: 1.05; max-width: none; }
        .hero-line { display: block; }
        .hero-line-muted { color: var(--bone-300); }
        .hero-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 60px; align-items: end; padding-top: 8px; }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; justify-content: flex-end; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-actions { justify-content: flex-start; }
        }
      `}</style>
    </section>
  );
}

/* ---------- STATS ROW ---------- */
function StatsRow() {
  const stats = [
    { n: '3.4×', l: 'faster than industry average implementation' },
    { n: '92%', l: 'first-pass accuracy on data migration' },
    { n: '48h', l: 'from kickoff to live sandbox environment' },
    { n: '100%', l: 'senior architects, no offshore handoffs' },
  ];
  return (
    <section style={{ padding: '40px 0 80px', borderTop: '1px solid var(--glass-line)' }}>
      <div className="shell">
        <div className="stats-row">
          {stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="stat-n">{s.n}</div>
              <div className="stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
        @media (max-width: 880px) { .stats-row { grid-template-columns: repeat(2, 1fr); gap: 30px 32px; } }
        .stat { padding-right: 12px; }
        .stat-n { font-family: var(--sans); font-weight: 500; font-size: clamp(40px, 4.5vw, 60px); line-height: 1; letter-spacing: -0.03em; color: var(--bone-100); }
        .stat-l { font-family: var(--mono); font-size: 13px; line-height: 1.5; color: var(--bone-200); margin-top: 14px; max-width: 24ch; }
      `}</style>
    </section>
  );
}

/* ---------- CLIENT LOGOS (static grid) ---------- */
function ClientLogos() {
  const logos = ['ATLANTIC BAY', 'CORAL SHORE', 'CASA VERDE', 'MERIDIAN HEALTH', 'PALMETTO REALTY', 'SUNSET LOGISTICS', 'CALOOSA INDUSTRIES', 'GULFSTREAM EQ.'];
  const list = [...logos, ...logos];
  return (
    <section style={{ padding: '60px 0', borderTop: '1px solid var(--glass-line)' }}>
      <div className="shell" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
        <span className="eyebrow eyebrow-bone">Trusted by Florida operators</span>
        <span className="mono" style={{ fontSize: 12, color: 'var(--bone-400)' }}>Selected clients · 2024–2026</span>
      </div>
      <div className="logo-marquee">
        <div className="logo-marquee-track">
          {list.map((l, i) => (
            <span key={i} className="logo-pill">{l}</span>
          ))}
        </div>
      </div>
      <style>{`
        .logo-marquee { overflow: hidden; white-space: nowrap; display: flex; padding: 28px 0; }
        .logo-marquee-track { display: inline-flex; align-items: center; gap: 64px; flex-shrink: 0; padding-right: 64px; animation: logo-scroll 45s linear infinite; }
        .logo-pill { font-family: var(--sans); font-weight: 500; font-size: 18px; letter-spacing: 0.06em; color: var(--bone-300); }
        @keyframes logo-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}

/* ---------- ACCREDITATION STRIP ---------- */
function TrustStrip() {
  const items = [
    { label: 'Odoo Partner',              sub: 'In progress',         code: 'CRT-01', state: 'progress', short: 'In progress' },
    { label: 'Odoo v18 / v19 Certified',  sub: 'Team',                code: 'CRT-02', state: 'live',     short: 'Team' },
    { label: 'SOC 2 Type II',             sub: 'Targeting Q3 2026',   code: 'CRT-03', state: 'future',   short: 'Q3 2026' },
    { label: 'ISO 27001',                 sub: 'Targeting 2027',      code: 'CRT-04', state: 'future',   short: '2027' },
    { label: 'AWS Select Tier',           sub: 'Verified',            code: 'CRT-05', state: 'live',     short: 'Verified' },
    { label: 'GDPR / CCPA',               sub: 'Compliant',           code: 'CRT-06', state: 'live',     short: 'Compliant' },
  ];
  return (
    <section style={{ padding: '60px 0', borderTop: '1px solid var(--glass-line)' }}>
      <div className="shell">
        <div className="trust-head" style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 28, flexWrap: 'wrap' }}>
          <span className="eyebrow eyebrow-bone">Accredited & verified</span>
          <span className="mono" style={{ fontSize: 12, color: 'var(--bone-400)' }}>Transparent about what's in place and what's coming.</span>
        </div>
        <div className="trust-grid">
          {items.map((it, i) => (
            <div className={`trust-item state-${it.state}`} key={i}>
              <svg className="trust-shield" viewBox="0 0 24 24" width="18" height="18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                <path d="M12 2 L 21 6 L 21 12 C 21 17, 17 21, 12 22 C 7 21, 3 17, 3 12 L 3 6 Z" stroke="var(--moss-400)" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M8 12 L 11 15 L 16 9" stroke="var(--moss-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="trust-code mono" aria-hidden="true">{it.code}</div>
              <div className="trust-body">
                <div className="trust-label">{it.label}</div>
                <div className="trust-sub mono">{it.sub}</div>
              </div>
              <div className="trust-status mono">
                <span className="trust-dot" aria-hidden="true"></span>
                <span className="trust-status-text">{it.short}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .trust-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px 40px; }
        @media (max-width: 880px) { .trust-grid { grid-template-columns: repeat(2, 1fr); gap: 28px 32px; } }
        .trust-item { display: flex; gap: 12px; align-items: flex-start; }
        .trust-item .trust-label { font-weight: 500; font-size: 14px; }
        .trust-item .trust-sub { font-size: 12px; color: var(--bone-300); letter-spacing: 0.06em; margin-top: 4px; }
        .trust-code, .trust-status { display: none; }

        @media (max-width: 600px) {
          .trust-head { margin-bottom: 18px !important; }
          .trust-grid {
            display: flex;
            flex-direction: column;
            gap: 0;
            grid-template-columns: none;
            border-top: 1px solid var(--glass-line);
          }
          .trust-item {
            display: grid;
            grid-template-columns: 56px 1fr auto;
            align-items: center;
            gap: 14px;
            padding: 16px 0;
            border-bottom: 1px solid var(--glass-line);
          }
          .trust-item .trust-shield,
          .trust-item .trust-sub { display: none; }
          .trust-code {
            display: block;
            font-size: 11px;
            color: var(--bone-400);
            letter-spacing: 0.08em;
            font-weight: 500;
          }
          .trust-body { min-width: 0; }
          .trust-item .trust-label {
            font-size: 15px;
            line-height: 1.25;
            letter-spacing: -0.01em;
          }
          .trust-status {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 11px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--bone-300);
            white-space: nowrap;
          }
          .trust-dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            border: 1px solid var(--moss-400);
            background: transparent;
            flex-shrink: 0;
          }
          .state-live .trust-dot { background: var(--moss-400); }
          .state-progress .trust-dot {
            background: linear-gradient(90deg, var(--moss-400) 50%, transparent 50%);
          }
          .state-live { order: 1; }
          .state-progress { order: 2; }
          .state-future { order: 3; }
          .state-future .trust-status,
          .state-future .trust-code { color: var(--bone-400); }
        }
      `}</style>
    </section>
  );
}

/* ---------- SERVICES LIST ---------- */
function ServicesSummary() {
  const services = [
    { n: '01', t: 'First implementation', d: 'End-to-end Odoo deployment for SMBs ready to standardize on a single ERP.' },
    { n: '02', t: 'Project recovery', d: 'Stalled rollout? Bad data? We assess, stabilize, and restore value within 90 days.' },
    { n: '03', t: 'Strategic consulting', d: 'Process design, module selection, and ROI modeling — for leaders deciding on Odoo.' },
    { n: '04', t: 'Banyan AI Toolkit', d: 'Proprietary AI for process discovery, data migration, and configuration auditing.' },
    { n: '05', t: 'Support & training', d: 'Embedded support to drive adoption and unlock new modules over time.' },
  ];
  return (
    <section style={{ padding: '120px 0', borderTop: '1px solid var(--glass-line)' }}>
      <div className="shell">
        <div className="services-head">
          <div>
            <span className="eyebrow">What we do</span>
            <h2 className="h1" style={{ marginTop: 24, maxWidth: '18ch' }}>
              Five services. One outcome: a living <OdooLogo /> system your team owns.
            </h2>
          </div>
          <a className="btn btn-ghost" href="services.html" style={{ justifySelf: 'end' }}>All services <span className="btn-arrow">→</span></a>
        </div>

        <div className="services-list">
          {services.map((s) => (
            <a href="services.html" key={s.n} className="service-row">
              <div className="service-n mono">{s.n}</div>
              <div className="service-t">{s.t}</div>
              <div className="service-d">{s.d}</div>
              <div className="service-arrow">→</div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .services-head { display: grid; grid-template-columns: 1.6fr 1fr; gap: 60px; align-items: end; margin-bottom: 60px; }
        @media (max-width: 880px) { .services-head { grid-template-columns: 1fr; } }
        .services-list { border-top: 1px solid var(--glass-line); }
        .service-row { display: grid; grid-template-columns: 60px 1.2fr 2fr 40px; gap: 32px; padding: 32px 0; border-bottom: 1px solid var(--glass-line); align-items: center; }
        .service-row:hover .service-arrow { color: var(--moss-400); }
        .service-n { font-size: 12px; color: var(--bone-300); letter-spacing: 0.08em; font-weight: 500; }
        .service-t { font-family: var(--sans); font-weight: 500; font-size: clamp(22px, 2.2vw, 30px); line-height: 1.15; letter-spacing: -0.02em; }
        .service-d { color: var(--bone-300); font-size: 15px; line-height: 1.55; max-width: 56ch; }
        .service-arrow { font-size: 22px; color: var(--bone-400); }
        @media (max-width: 880px) { .service-row { grid-template-columns: 60px 1fr; gap: 16px; } .service-d, .service-arrow { display: none; } }
      `}</style>
    </section>
  );
}

/* ---------- INDUSTRIES GRID ---------- */
function IndustriesGrid() {
  const inds = [
    { t: 'Manufacturing & Distribution', n: 'IND-01', stats: 'MRP · Inventory · Quality', desc: 'Multi-warehouse, BOM-heavy operations.' },
    { t: 'Construction', n: 'IND-02', stats: 'Project · Field service · Cost control', desc: 'Contract jobs, field crews, change orders.' },
    { t: 'Professional Services', n: 'IND-03', stats: 'Timesheets · Billing · CRM', desc: 'Agencies, consultancies, retainer models.' },
    { t: 'Retail & E-commerce', n: 'IND-04', stats: 'POS · Omnichannel · Marketing', desc: 'Storefront + Shopify/Amazon sync.' },
    { t: 'Healthcare', n: 'IND-05', stats: 'Compliance · Inventory · HR', desc: 'Clinics, medical distributors, devices.' },
    { t: 'Real Estate', n: 'IND-06', stats: 'Properties · Maintenance · CRM', desc: 'Brokerage, property mgmt, development.' },
    { t: 'Non-profit', n: 'IND-07', stats: 'Donors · Grants · Accounting', desc: 'Membership orgs, foundations, NGOs.' },
  ];
  return (
    <section style={{ padding: '120px 0', borderTop: '1px solid var(--glass-line)' }}>
      <div className="shell">
        <div style={{ marginBottom: 60 }}>
          <span className="eyebrow">Industries</span>
          <h2 className="h1" style={{ marginTop: 24, maxWidth: '20ch' }}>
            Built for operators across the industries that move Florida and the Americas.
          </h2>
        </div>

        <div className="ind-grid">
          {inds.map((it) => (
            <a href="industries.html" key={it.n} className="ind-card">
              <div className="ind-card-head">
                <span className="mono" style={{ fontSize: 12, color: 'var(--bone-300)', letterSpacing: '0.08em' }}>{it.n}</span>
              </div>
              <div className="ind-card-body">
                <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 500, fontSize: 22, lineHeight: 1.15, letterSpacing: '-0.02em' }}>{it.t}</h3>
                <p style={{ color: 'var(--bone-300)', fontSize: 14, marginTop: 10 }}>{it.desc}</p>
              </div>
              <div className="ind-card-foot mono">{it.stats}</div>
            </a>
          ))}
          <div className="ind-card ind-card-cta">
            <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 500, fontSize: 22, lineHeight: 1.15, letterSpacing: '-0.02em' }}>Don't see yours?</h3>
            <p style={{ color: 'var(--bone-300)', fontSize: 14, marginTop: 10 }}>Odoo's modularity covers anything operationally complex. Let's talk.</p>
            <a href="contact.html" className="btn btn-primary" style={{ marginTop: 'auto' }}>Tell us about it <span className="btn-arrow">→</span></a>
          </div>
        </div>
      </div>

      <style>{`
        .ind-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--glass-line); border: 1px solid var(--glass-line); }
        @media (max-width: 1100px) { .ind-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .ind-grid { grid-template-columns: 1fr; } }
        .ind-card { background: var(--ink-100); padding: 28px; display: flex; flex-direction: column; gap: 24px; min-height: 220px; }
        .ind-card-head { display: flex; justify-content: space-between; align-items: center; }
        .ind-card-body { flex: 1; }
        .ind-card-foot { font-size: 12px; color: var(--moss-400); letter-spacing: 0.04em; padding-top: 14px; font-weight: 500; }
        .ind-card-cta { background: var(--ink-200); justify-content: space-between; }
      `}</style>
    </section>
  );
}

/* ---------- CASE STUDIES ---------- */
function CaseStudies() {
  const cases = [
    {
      tag: 'Manufacturing',
      client: 'Atlantic Bay Components',
      headline: 'From 14 disconnected spreadsheets to one source of truth — in 7 weeks.',
      metrics: [
        { n: '7', l: 'weeks to go-live', sub: 'vs. 6+ months quoted' },
        { n: '−63%', l: 'order processing time' },
        { n: '$340K', l: 'annual carrying cost saved' },
      ],
    },
    {
      tag: 'Construction',
      client: 'Coral Shore Builders',
      headline: 'Project recovery: a stalled Odoo rollout, restored and live in 90 days.',
      metrics: [
        { n: '90', l: 'days to stabilize' },
        { n: '4×', l: 'faster job costing' },
        { n: '12', l: 'modules deployed', sub: 'previously stuck on 2' },
      ],
    },
    {
      tag: 'Retail',
      client: 'Casa Verde Mercados',
      headline: 'Bilingual, multi-location POS + e-commerce, fully synced overnight.',
      metrics: [
        { n: '11', l: 'locations live' },
        { n: '0', l: 'days of downtime', sub: 'cutover ran overnight' },
        { n: 'EN/ES', l: 'fully bilingual UX' },
      ],
    },
  ];
  return (
    <section style={{ padding: '120px 0', borderTop: '1px solid var(--glass-line)', background: 'var(--ink-200)' }}>
      <div className="shell">
        <div style={{ marginBottom: 60 }}>
          <span className="eyebrow">Outcomes, not opinions</span>
          <h2 className="h1" style={{ marginTop: 24, maxWidth: '18ch' }}>
            What the work actually looks like.
          </h2>
        </div>

        <div className="case-list">
          {cases.map((c, i) => (
            <article key={i} className="case-card">
              <div className="case-card-head">
                <div className="mono" style={{ fontSize: 12, color: 'var(--moss-400)', letterSpacing: '0.08em' }}>CASE 0{i+1} · {c.tag.toUpperCase()}</div>
                <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 500, fontSize: 'clamp(22px, 2vw, 28px)', lineHeight: 1.2, letterSpacing: '-0.02em', marginTop: 14, maxWidth: '34ch' }}>{c.headline}</h3>
                <div className="mono" style={{ fontSize: 12, color: 'var(--bone-400)', marginTop: 14, letterSpacing: '0.08em' }}>{c.client.toUpperCase()}</div>
              </div>
              <div className="case-metrics">
                {c.metrics.map((m, idx) => (
                  <div key={idx} className="case-metric">
                    <div className="case-metric-n">{m.n}</div>
                    <div className="case-metric-l">{m.l}</div>
                    {m.sub && <div className="case-metric-sub mono">{m.sub}</div>}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .case-list { display: grid; grid-template-columns: 1fr; gap: 24px; }
        .case-card { background: var(--ink-100); border: 1px solid var(--glass-line); padding: clamp(28px, 3vw, 40px); display: grid; grid-template-columns: 1.2fr 2fr; gap: 40px; align-items: start; }
        @media (max-width: 900px) { .case-card { grid-template-columns: 1fr; } }
        .case-metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        @media (max-width: 600px) { .case-metrics { grid-template-columns: 1fr; gap: 24px; } }
        .case-metric { padding-right: 12px; }
        .case-metric-n { font-family: var(--sans); font-weight: 500; font-size: clamp(36px, 4vw, 56px); line-height: 1; color: var(--moss-400); letter-spacing: -0.03em; }
        .case-metric-l { font-size: 13px; color: var(--bone-200); margin-top: 10px; }
        .case-metric-sub { font-size: 12px; color: var(--bone-300); margin-top: 4px; letter-spacing: 0.04em; }
      `}</style>
    </section>
  );
}

/* ---------- CLIENT STORIES ---------- */
function ClientStories() {
  const stories = [
    {
      quote: "Banyan Consulting transformed our operations. We went from three disconnected systems to a single Odoo platform in under four months. Our team actually enjoys using it now.",
      initials: "MR",
      name: "Michael Ramirez",
      role: "COO — Coastal Distribution Co., Miami",
    },
    {
      quote: "The team's depth of Odoo knowledge is unmatched in Florida. They didn't just implement software — they re-engineered our workflows. We cut our order-to-ship time by 38%.",
      initials: "SL",
      name: "Sarah Lindqvist",
      role: "VP Operations — SunState Manufacturing, Tampa",
    },
    {
      quote: "We migrated from NetSuite to Odoo with Banyan handling everything. Zero data loss, minimal downtime, and a system that fits us perfectly. Best technology decision we've made.",
      initials: "JT",
      name: "James Thornton",
      role: "CEO — Pinnacle Health Group, Orlando",
    },
  ];
  return (
    <section style={{ padding: '120px 0', borderTop: '1px solid var(--glass-line)' }}>
      <div className="shell">
        <div className="stories-head">
          <div>
            <span className="eyebrow">Trusted by operators who can't afford guesswork</span>
            <h2 className="h1" style={{ marginTop: 24, maxWidth: '20ch' }}>
              Client stories.
            </h2>
          </div>
          <p className="lede" style={{ maxWidth: '38ch', color: 'var(--bone-300)' }}>
            Real words from leaders running the businesses behind the metrics. No anonymized blurbs, no marketing edit.
          </p>
        </div>

        <div className="story-grid">
          {stories.map((s, i) => (
            <article key={i} className="story-card">
              <span className="story-mark" aria-hidden="true">&ldquo;</span>
              <p className="story-quote">{s.quote}</p>
              <footer className="story-foot">
                <div className="story-avatar" aria-hidden="true">{s.initials}</div>
                <div className="story-meta">
                  <div className="story-name">{s.name}</div>
                  <div className="story-role mono">{s.role}</div>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .stories-head { display: grid; grid-template-columns: 1.4fr 1fr; gap: 60px; align-items: end; margin-bottom: 60px; }
        @media (max-width: 880px) { .stories-head { grid-template-columns: 1fr; gap: 24px; } }
        .story-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        @media (max-width: 1000px) { .story-grid { grid-template-columns: 1fr; } }
        .story-card {
          position: relative;
          background: var(--ink-200);
          border: 1px solid var(--glass-line-strong);
          padding: 40px 36px 32px;
          display: flex;
          flex-direction: column;
          transition: background 0.18s ease, border-color 0.18s ease;
        }
        .story-card:hover { background: var(--ink-300); }
        .story-mark {
          position: absolute;
          top: 8px;
          right: 28px;
          font-family: var(--sans);
          font-weight: 500;
          font-size: 120px;
          line-height: 1;
          color: var(--moss-400);
          opacity: 0.16;
          user-select: none;
          pointer-events: none;
        }
        .story-quote {
          font-family: var(--sans);
          font-size: 16px;
          line-height: 1.6;
          color: var(--bone-100);
          flex: 1;
          letter-spacing: -0.005em;
          margin: 0;
        }
        .story-foot {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid var(--glass-line);
        }
        .story-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--moss-400);
          color: #FAF7F0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--mono);
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.04em;
          flex-shrink: 0;
        }
        .story-meta { min-width: 0; }
        .story-name { font-family: var(--sans); font-size: 14px; font-weight: 500; color: var(--bone-100); }
        .story-role { font-size: 11px; color: var(--bone-300); margin-top: 4px; letter-spacing: 0.04em; line-height: 1.4; }
      `}</style>
    </section>
  );
}

/* ---------- METHODOLOGY ---------- */
function Methodology() {
  const steps = [
    { n: '01', t: 'Diagnostic', d: 'A free, structured 45-min session with a senior architect — not a salesperson.' },
    { n: '02', t: 'Sandbox', d: 'Within 48 hours: a working Odoo environment loaded with your real data and workflows.' },
    { n: '03', t: 'Configure', d: 'Native-first builds. Custom code only when modules genuinely cannot fit your reality.' },
    { n: '04', t: 'Migrate', d: 'AI-validated cleanup, reconciliation, and cutover. Every record traceable.' },
    { n: '05', t: 'Embed', d: 'On-site change management and live training. Your team owns the system before we step back.' },
    { n: '06', t: 'Evolve', d: 'Quarterly health checks driven by AI configuration audits. Catch drift before it costs.' },
  ];
  return (
    <section style={{ padding: '120px 0', borderTop: '1px solid var(--glass-line)' }}>
      <div className="shell">
        <div style={{ marginBottom: 60 }}>
          <span className="eyebrow">The Banyan method</span>
          <h2 className="h1" style={{ marginTop: 24, maxWidth: '18ch' }}>
            A six-step framework that makes complexity visible before it becomes risk.
          </h2>
        </div>
        <div className="method-grid">
          {steps.map((s) => (
            <div key={s.n} className="method-card">
              <div className="method-n mono">{s.n}</div>
              <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 500, fontSize: 22, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 12 }}>{s.t}</h3>
              <p style={{ fontSize: 14, color: 'var(--bone-300)', lineHeight: 1.6 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .method-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--glass-line); border: 1px solid var(--glass-line); }
        @media (max-width: 1000px) { .method-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .method-grid { grid-template-columns: 1fr; } }
        .method-card { background: var(--ink-100); padding: 32px; min-height: 200px; }
        .method-n { font-size: 12px; color: var(--moss-400); letter-spacing: 0.08em; margin-bottom: 20px; font-weight: 500; }
      `}</style>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section style={{ padding: '140px 0', borderTop: '1px solid var(--glass-line)' }}>
      <div className="shell" style={{ textAlign: 'center' }}>
        <span className="eyebrow" style={{ marginBottom: 24, display: 'inline-flex' }}>Your free Odoo diagnostic</span>
        <h2 className="h-display" style={{ maxWidth: '16ch', margin: '24px auto 0' }}>
          Talk to an architect, <span style={{ color: 'var(--moss-400)' }}>not a salesperson.</span>
        </h2>
        <p className="lede" style={{ margin: '28px auto 0', maxWidth: '52ch' }}>
          45 minutes. No commitment. We come back with a feasibility map, a module recommendation, and an honest timeline.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap' }}>
          <a className="btn btn-primary" href="contact.html">Book my diagnostic <span className="btn-arrow">→</span></a>
          <a className="btn btn-ghost" href="services.html">Explore services</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- HOME PAGE ROOT ---------- */
function Home() {
  useEffectH(() => {
    if (window.applyAccent && window.BANYAN_TWEAK_DEFAULTS) {
      window.applyAccent(window.BANYAN_TWEAK_DEFAULTS.accent);
    }
  }, []);

  return (
    <>
      <Nav active="home" />
      <main>
        <Hero />
        <StatsRow />
        <ClientLogos />
        <TrustStrip />
        <ServicesSummary />
        <IndustriesGrid />
        <CaseStudies />
        <ClientStories />
        <Methodology />
        <CTA />
      </main>
      <Footer />
      <StickyCTA />
      <BanyanTweaks />
    </>
  );
}

/* ---------- TWEAKS ---------- */
function BanyanTweaks() {
  const [tweaks, setTweak] = useTweaks(BANYAN_TWEAK_DEFAULTS);
  useEffectH(() => { applyAccent(tweaks.accent); }, [tweaks.accent]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Accent">
        <TweakRadio
          value={tweaks.accent}
          options={[
            { value: 'moss', label: 'Plum' },
            { value: 'copper', label: 'Copper' },
            { value: 'sky', label: 'Sky' },
            { value: 'bone', label: 'Bone' },
          ]}
          onChange={v => setTweak('accent', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Home />);
