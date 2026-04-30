/* Pricing page — standalone */
const { useEffect: useEffectP } = React;

function PricingHero() {
  return (
    <section style={{ padding: '180px 0 80px', position: 'relative' }}>
      <div className="shell" style={{ position: 'relative', zIndex: 2 }}>
        <span className="eyebrow">How we price</span>
        <h1 className="h-display" style={{ marginTop: 32, maxWidth: '16ch' }}>
          Fixed-scope. <span style={{ color: 'var(--moss-400)' }}>No hourly games</span>.
        </h1>
        <p className="lede" style={{ marginTop: 32, maxWidth: '60ch' }}>
          Three predictable on-ramps. Each one ends in a real deliverable — not a SOW for the next one. Hourly billing rewards consultants for being slow; fixed scope rewards us for being right.
        </p>
      </div>
    </section>
  );
}

function PricingTiers() {
  const tiers = [
    {
      name: 'Diagnostic',
      price: 'Free',
      sub: '45-min architect session',
      features: [
        'Architect-led discovery — not a sales rep',
        'AI-assisted process mapping',
        'Honest feasibility report',
        'Module recommendation & ballpark timeline',
        'No commitment, no slide deck',
      ],
      cta: 'Book diagnostic',
    },
    {
      name: 'Sandbox',
      price: '$4,800',
      sub: 'flat — refunded on signing',
      features: [
        '48-hour live Odoo sandbox',
        'Loaded with your real data',
        'Branded environment, your top 3 workflows wired',
        'Test before you sign',
        'Refunded in full when you proceed to implementation',
      ],
      cta: 'Build my sandbox',
      highlight: true,
    },
    {
      name: 'Full implementation',
      price: 'Project-based',
      sub: 'fixed scope · fixed price',
      features: [
        'Full first implementation, end to end',
        'Banyan AI Toolkit included for 12 months',
        '90-day hyper-care after go-live',
        'Bilingual training (EN/ES)',
        'No hourly games, no scope creep upcharge',
      ],
      cta: 'Get a quote',
    },
  ];
  return (
    <section style={{ padding: '60px 0 120px', background: 'var(--ink-200)', borderTop: '1px solid var(--glass-line)' }}>
      <div className="shell">
        <div className="pricing-grid">
          {tiers.map(t => (
            <div key={t.name} className={`pricing-card ${t.highlight ? 'on' : ''}`}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: 28 }}>{t.name}</h3>
                  {t.highlight && <span className="tag" style={{ background: 'var(--moss-400)', color: 'var(--ink-100)', borderColor: 'var(--moss-400)' }}>Most popular</span>}
                </div>
                <div style={{ fontSize: 56, marginTop: 18, lineHeight: 1, color: t.highlight ? 'var(--moss-400)' : 'var(--bone-100)', fontWeight: 500, letterSpacing: '-0.03em' }}>{t.price}</div>
                <div className="mono" style={{ fontSize: 12, color: 'var(--bone-400)', marginTop: 8, letterSpacing: '0.06em' }}>{t.sub}</div>
              </div>
              <ul className="pricing-features">
                {t.features.map(f => (
                  <li key={f}>
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none"><path d="M3 8 L 7 12 L 13 4" stroke="var(--moss-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a className={`btn ${t.highlight ? 'btn-primary' : 'btn-ghost'}`} href="contact.html" style={{ width: '100%', justifyContent: 'space-between' }}>
                {t.cta} <span className="btn-arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        @media (max-width: 1000px) { .pricing-grid { grid-template-columns: 1fr; } }
        .pricing-card { background: var(--ink-100); border: 1px solid var(--glass-line); border-radius: 24px; padding: 36px; display: flex; flex-direction: column; gap: 32px; }
        .pricing-card.on { background: var(--ink-300); border-color: var(--moss-700); box-shadow: var(--shadow-accent-soft); }
        .pricing-features { list-style: none; display: flex; flex-direction: column; gap: 12px; flex: 1; }
        .pricing-features li { display: flex; align-items: flex-start; gap: 12px; font-size: 14px; color: var(--bone-200); line-height: 1.45; }
        .pricing-features li svg { margin-top: 4px; flex-shrink: 0; }
      `}</style>
    </section>
  );
}

function PricingPrinciples() {
  const items = [
    { n: '01', t: 'Fixed scope, fixed price', d: 'You see the line items. We see the deliverables. Nobody has an incentive to drag.' },
    { n: '02', t: 'Diagnostic always free', d: 'Before you spend anything, you get a senior architect for 45 minutes. No commitment.' },
    { n: '03', t: 'Try it before you commit.', d: 'Pay $4,800 for a 48-hour live sandbox loaded with your real data. If you sign with us for the implementation, that $4,800 comes off your invoice — so it costs you nothing. If you walk away, the sandbox is yours to keep.' },
    { n: '04', t: '90-day hyper-care, included', d: 'After go-live we don\'t hand you off to "support." The architect who built it stays for 90 days.' },
  ];
  return (
    <section style={{ padding: '160px 0', borderTop: '1px solid var(--glass-line)' }}>
      <div className="shell">
        <div style={{ marginBottom: 60 }}>
          <span className="eyebrow">Pricing principles</span>
          <h2 className="h1" style={{ marginTop: 24, maxWidth: '18ch' }}>Four rules. <span style={{ color: 'var(--bone-300)' }}>No exceptions.</span></h2>
        </div>
        <div className="principles-grid">
          {items.map(it => (
            <div key={it.n} className="principle-card">
              <div className="mono" style={{ fontSize: 12, color: 'var(--moss-400)', letterSpacing: '0.08em' }}>{it.n}</div>
              <h3 style={{ fontSize: 24, marginTop: 16, lineHeight: 1.15, fontWeight: 500, letterSpacing: '-0.02em' }}>{it.t}</h3>
              <p style={{ fontSize: 14, color: 'var(--bone-300)', marginTop: 14, lineHeight: 1.6 }}>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .principles-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--glass-line); border: 1px solid var(--glass-line); border-radius: 18px; overflow: hidden; }
        @media (max-width: 1000px) { .principles-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .principles-grid { grid-template-columns: 1fr; } }
        .principle-card { background: var(--ink-100); padding: 36px; min-height: 220px; }
      `}</style>
    </section>
  );
}

function PricingBookCTA() {
  return (
    <section style={{ padding: '140px 0', borderTop: '1px solid var(--glass-line)', background: 'var(--ink-200)' }}>
      <div className="shell" style={{ textAlign: 'center' }}>
        <span className="eyebrow eyebrow-bone" style={{ marginBottom: 24, display: 'inline-flex' }}>Not sure which fits?</span>
        <h2 className="h-display" style={{ maxWidth: '18ch', margin: '24px auto 0', fontSize: 'clamp(40px, 5.5vw, 80px)' }}>
          Talk to an architect. <span style={{ color: 'var(--moss-400)' }}>Free.</span>
        </h2>
        <p className="lede" style={{ margin: '28px auto 0', maxWidth: '52ch' }}>
          45 minutes with a senior implementer. We come back with a feasibility map, a module recommendation, and an honest timeline — even if it's not us.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap' }}>
          <a className="btn btn-primary" href="contact.html">Book a call <span className="btn-arrow">→</span></a>
          <a className="btn btn-ghost" href="services.html">See our services</a>
        </div>
      </div>
    </section>
  );
}

function PricingPage() {
  useEffectP(() => { if (window.applyAccent && window.BANYAN_TWEAK_DEFAULTS) window.applyAccent(window.BANYAN_TWEAK_DEFAULTS.accent); }, []);
  return (
    <>
      <Nav active="pricing" />
      <main>
        <PricingHero />
        <PricingTiers />
        <PricingPrinciples />
        <PricingBookCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PricingPage />);
