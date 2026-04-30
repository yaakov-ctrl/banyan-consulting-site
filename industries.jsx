/* Industries page */
const { useState: useStateI, useEffect: useEffectI } = React;

const INDUSTRIES = [
  {
    id: 'manufacturing', n: 'IND-01', t: 'Manufacturing & Distribution',
    desc: 'Multi-warehouse, BOM-heavy operations with serial/lot tracking, MRP, and quality controls.',
    challenges: ['Disconnected production schedules', 'Inventory drift across sites', 'Manual quality records', 'Slow order-to-cash'],
    odoo: ['MRP', 'Inventory', 'Quality', 'PLM', 'Maintenance', 'Purchase', 'Sales'],
    metric: { n: '−63%', l: 'avg. order-to-cash time' },
  },
  {
    id: 'construction', n: 'IND-02', t: 'Construction',
    desc: 'Project-based businesses with field crews, change orders, and complex job costing.',
    challenges: ['Job cost transparency', 'Field-to-office data lag', 'Subcontractor management', 'Change order chaos'],
    odoo: ['Project', 'Timesheets', 'Field Service', 'Purchase', 'Accounting', 'Documents'],
    metric: { n: '4×', l: 'faster job costing' },
  },
  {
    id: 'services', n: 'IND-03', t: 'Professional Services',
    desc: 'Agencies, consultancies, and retainer-based businesses where time is the product.',
    challenges: ['Project profitability blind spots', 'Manual time tracking', 'Retainer vs. T&M billing', 'Resource allocation'],
    odoo: ['Project', 'Timesheets', 'Invoicing', 'CRM', 'Helpdesk', 'Documents'],
    metric: { n: '+22%', l: 'avg. project margin' },
  },
  {
    id: 'retail', n: 'IND-04', t: 'Retail & E-commerce',
    desc: 'Omnichannel operations syncing in-store POS with online storefronts.',
    challenges: ['Inventory sync across channels', 'Loyalty across locations', 'Bilingual customer experience', 'Multi-location reporting'],
    odoo: ['POS', 'Sales', 'Inventory', 'eCommerce', 'Marketing', 'Loyalty'],
    metric: { n: '11', l: 'locations on one system' },
  },
  {
    id: 'healthcare', n: 'IND-05', t: 'Healthcare',
    desc: 'Clinics, medical distributors, and device companies with strict compliance and traceability needs.',
    challenges: ['Lot/serial traceability', 'Compliance documentation', 'Inventory expiration', 'Patient/customer privacy'],
    odoo: ['Inventory', 'Quality', 'Documents', 'HR', 'Accounting', 'Helpdesk'],
    metric: { n: '100%', l: 'lot traceability' },
  },
  {
    id: 'realestate', n: 'IND-06', t: 'Real Estate',
    desc: 'Property management, brokerage, and development teams managing portfolios at scale.',
    challenges: ['Property maintenance tickets', 'Tenant communications', 'Commission tracking', 'Multi-entity accounting'],
    odoo: ['CRM', 'Maintenance', 'Property (custom)', 'Accounting', 'Documents'],
    metric: { n: '−40%', l: 'maintenance response time' },
  },
  {
    id: 'nonprofit', n: 'IND-07', t: 'Non-profit',
    desc: 'Membership organizations, foundations, and NGOs with donor and grant complexity.',
    challenges: ['Donor lifecycle tracking', 'Grant reporting', 'Member engagement', 'Fund accounting'],
    odoo: ['CRM', 'Fundraising (custom)', 'Accounting', 'Events', 'Marketing'],
    metric: { n: '+35%', l: 'donor retention' },
  },
];

function IndustriesHero() {
  return (
    <section style={{ padding: '180px 0 80px', position: 'relative' }}>
      <div className="shell" style={{ position: 'relative', zIndex: 2 }}>
        <span className="eyebrow">Industries</span>
        <h1 className="h-display" style={{ marginTop: 32, maxWidth: '16ch' }}>
          We speak <span style={{ color: 'var(--moss-400)' }}>your operators'</span> language.
        </h1>
        <p className="lede" style={{ marginTop: 32, maxWidth: '52ch' }}>
          Odoo is modular by design — but knowing which modules fit your industry, in what order, with what data model, is the work. We've done it across seven verticals.
        </p>
      </div>
    </section>
  );
}

function IndustriesDeep() {
  const [active, setActive] = useStateI(INDUSTRIES[0].id);
  const cur = INDUSTRIES.find(i => i.id === active);
  return (
    <section style={{ padding: '60px 0 160px' }}>
      <div className="shell">
        <div className="ind-deep">
          <div className="ind-deep-list">
            {INDUSTRIES.map((it) => (
              <button key={it.id} className={`ind-deep-item ${active === it.id ? 'on' : ''}`} onClick={() => setActive(it.id)}>
                <span className="mono">{it.n}</span>
                <span className="" style={{ fontSize: 22 }}>{it.t}</span>
                <span className="ind-deep-arrow">→</span>
              </button>
            ))}
          </div>
          <div className="ind-deep-detail">
            <div className="ind-deep-meta">
              <span className="mono" style={{ fontSize: 12, color: 'var(--moss-400)', letterSpacing: '0.08em' }}>{cur.n}</span>
              <span className="tag">Live engagements</span>
            </div>
            <h2 className="h2" style={{ marginTop: 20 }}>{cur.t}</h2>
            <p className="lede" style={{ marginTop: 20 }}>{cur.desc}</p>
            <div className="ind-deep-grid">
              <div>
                <div className="mono ind-deep-label">Common challenges we solve</div>
                <ul className="ind-deep-list-2">
                  {cur.challenges.map(c => (
                    <li key={c}>
                      <span className="ind-deep-bullet">·</span>{c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="mono ind-deep-label">Core Odoo modules</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
                  {cur.odoo.map(m => <span key={m} className="tag">{m}</span>)}
                </div>
              </div>
            </div>
            <div className="ind-deep-metric">
              <div className="" style={{ fontSize: 'clamp(56px, 6vw, 96px)', lineHeight: 1, color: 'var(--moss-400)', letterSpacing: '-0.02em' }}>{cur.metric.n}</div>
              <div style={{ fontSize: 14, color: 'var(--bone-200)', marginTop: 12 }}>{cur.metric.l}</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .ind-deep { display: grid; grid-template-columns: 1fr 1.5fr; gap: 1px; background: var(--glass-line); border: 1px solid var(--glass-line); border-radius: 18px; overflow: hidden; min-height: 640px; }
        @media (max-width: 1000px) { .ind-deep { grid-template-columns: 1fr; } }
        .ind-deep-list { background: var(--ink-200); display: flex; flex-direction: column; }
        .ind-deep-item { padding: 24px 28px; display: grid; grid-template-columns: 60px 1fr 30px; gap: 14px; align-items: center; text-align: left; border-bottom: 1px solid var(--glass-line); transition: all 0.2s; color: var(--bone-300); }
        .ind-deep-item:hover { background: var(--ink-300); color: var(--bone-100); }
        .ind-deep-item.on { background: var(--moss-900); color: var(--bone-100); }
        .ind-deep-item.on .mono { color: var(--moss-400); }
        .ind-deep-item .mono { font-size: 12px; color: var(--bone-300); letter-spacing: 0.06em; font-weight: 500; }
        .ind-deep-arrow { font-size: 16px; color: var(--bone-400); }
        .ind-deep-item.on .ind-deep-arrow { color: var(--moss-400); }
        .ind-deep-detail { background: var(--ink-100); padding: clamp(32px, 4vw, 64px); display: flex; flex-direction: column; gap: 32px; }
        .ind-deep-meta { display: flex; justify-content: space-between; align-items: center; }
        .ind-deep-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; padding-top: 8px; }
        @media (max-width: 700px) { .ind-deep-grid { grid-template-columns: 1fr; } }
        .ind-deep-label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--bone-300); font-weight: 500; }
        .ind-deep-list-2 { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-top: 16px; }
        .ind-deep-list-2 li { display: flex; gap: 10px; font-size: 14px; color: var(--bone-200); }
        .ind-deep-bullet { color: var(--moss-400); font-weight: 600; }
        .ind-deep-metric { margin-top: auto; padding-top: 16px; }
      `}</style>
    </section>
  );
}

function IndustriesPage() {
  useEffectI(() => { if (window.applyAccent && window.BANYAN_TWEAK_DEFAULTS) window.applyAccent(window.BANYAN_TWEAK_DEFAULTS.accent); }, []);
  return (
    <>
      <Nav active="industries" />
      <main>
        <IndustriesHero />
        <IndustriesDeep />
        <CTAFinal />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<IndustriesPage />);
