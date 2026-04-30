/* Services page */
const { useState: useStateS, useEffect: useEffectS } = React;

function ServicesHero() {
  return (
    <section style={{ padding: '180px 0 100px', position: 'relative' }}>
      <div className="shell" style={{ position: 'relative', zIndex: 2 }}>
        <span className="eyebrow">Services</span>
        <h1 className="h-display" style={{ marginTop: 32, maxWidth: '14ch' }}>
          Five ways we make <OdooLogo /> <span style={{ color: 'var(--moss-400)' }}>actually work</span>.
        </h1>
        <p className="lede" style={{ marginTop: 32, maxWidth: '52ch' }}>
          Every engagement starts with a free architect-led diagnostic and ends only when your team owns the system. AI handles the tedium; humans handle the decisions.
        </p>
      </div>
    </section>
  );
}

function ServicesDeep() {
  const services = [
    {
      n: '01', t: 'First implementation',
      who: 'For SMBs (20–500 employees) committing to Odoo as their operating system.',
      what: 'End-to-end deployment: discovery, architecture, configuration, data migration, training, go-live, hyper-care.',
      ai: 'Banyan AI handles process discovery from your existing SOPs, builds your initial module map, and validates every migrated record.',
      time: '6–14 weeks',
      modules: ['Sales & CRM', 'Inventory', 'Accounting', 'Manufacturing', 'Project', 'HR', 'Purchase', 'Website / e-commerce'],
    },
    {
      n: '02', t: 'Project recovery',
      who: 'Stalled rollouts, abandoned customizations, or implementations that never went live.',
      what: 'Diagnostic audit, stabilization, decoupling of bad customizations, data reconciliation, and a 90-day path to value.',
      ai: 'Our config audit AI maps everything that\'s been done — and flags exactly what\'s blocking go-live with confidence scores.',
      time: '8–16 weeks',
      modules: ['Audit & assessment', 'Custom code review', 'Module re-architecture', 'Data reconciliation', 'Re-launch'],
    },
    {
      n: '03', t: 'Strategic consulting',
      who: 'Leaders evaluating Odoo vs. NetSuite/SAP, or planning a 3-year ERP roadmap.',
      what: 'Process mapping, ROI modeling, vendor comparison, build-vs-buy analysis, and an implementation playbook.',
      ai: 'AI-generated process maps from your real operational data — not workshop wishlists.',
      time: '2–6 weeks',
      modules: ['Process discovery', 'ROI model', 'Vendor scorecard', 'Roadmap', 'Implementation playbook'],
    },
    {
      n: '04', t: 'Banyan AI Toolkit',
      who: 'Existing Odoo customers who want our proprietary AI tools embedded in their environment.',
      what: 'Subscription-based access to: process discovery, data migration, test generation, configuration auditing, and adoption analytics.',
      ai: 'This IS the AI. Continuous monitoring, drift detection, and recommendations — built for Odoo, by Odoo experts.',
      time: 'Ongoing',
      modules: ['Process Lens', 'Data Reconciler', 'Test Forge', 'Config Auditor', 'Adoption Analytics'],
    },
    {
      n: '05', t: 'Support & training',
      who: 'Live Odoo customers who need senior-level help on demand without retainer-hostage pricing.',
      what: 'Tiered support packages, embedded training, super-user development, quarterly health checks.',
      ai: 'AI triage routes tickets to the right architect with full context — average resolution under 4 business hours.',
      time: 'Ongoing',
      modules: ['Tier 1–3 support', 'Embedded training', 'Super-user program', 'Health checks', 'Module expansions'],
    },
  ];

  return (
    <section style={{ padding: '60px 0 160px' }}>
      <div className="shell">
        <div className="services-deep">
          {services.map((s, i) => (
            <Reveal key={s.n}>
              <div className="service-deep">
                <div className="service-deep-head">
                  <div className="mono" style={{ fontSize: 12, color: 'var(--moss-400)', letterSpacing: '0.08em' }}>SERVICE {s.n}</div>
                  <h2 className="h2" style={{ marginTop: 14, maxWidth: '20ch' }}>{s.t}</h2>
                </div>
                <div className="service-deep-body">
                  <div className="service-row-detail">
                    <div className="mono service-row-label">Who it's for</div>
                    <div>{s.who}</div>
                  </div>
                  <div className="service-row-detail">
                    <div className="mono service-row-label">What's included</div>
                    <div>{s.what}</div>
                  </div>
                  <div className="service-row-detail">
                    <div className="mono service-row-label">AI advantage</div>
                    <div style={{ color: 'var(--moss-300)' }}>{s.ai}</div>
                  </div>
                  <div className="service-row-detail">
                    <div className="mono service-row-label">Typical timeline</div>
                    <div>{s.time}</div>
                  </div>
                  <div className="service-row-detail">
                    <div className="mono service-row-label">Modules / deliverables</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {s.modules.map(m => <span key={m} className="tag">{m}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .services-deep { display: flex; flex-direction: column; gap: 1px; background: var(--glass-line); border: 1px solid var(--glass-line); border-radius: 18px; overflow: hidden; }
        .service-deep { background: var(--ink-100); padding: clamp(32px, 4vw, 64px); display: grid; grid-template-columns: 1fr 2fr; gap: 60px; }
        @media (max-width: 1000px) { .service-deep { grid-template-columns: 1fr; gap: 40px; } }
        .service-deep-body { display: flex; flex-direction: column; gap: 28px; }
        .service-row-detail { display: grid; grid-template-columns: 160px 1fr; gap: 24px; padding-bottom: 24px; border-bottom: 1px solid var(--glass-line); align-items: start; }
        .service-row-detail:last-child { border-bottom: none; padding-bottom: 0; }
        @media (max-width: 700px) { .service-row-detail { grid-template-columns: 1fr; gap: 8px; } }
        .service-row-label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--bone-300); padding-top: 4px; font-weight: 500; }
      `}</style>
    </section>
  );
}

function ServicesPage() {
  useEffectS(() => { if (window.applyAccent && window.BANYAN_TWEAK_DEFAULTS) window.applyAccent(window.BANYAN_TWEAK_DEFAULTS.accent); }, []);
  return (
    <>
      <Nav active="services" />
      <main>
        <ServicesHero />
        <ServicesDeep />
        <CTAFinal />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ServicesPage />);
