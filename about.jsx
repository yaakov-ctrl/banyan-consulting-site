/* About + Contact pages */
const { useState: useStateA, useEffect: useEffectA } = React;

/* ============= ABOUT ============= */
function AboutHero() {
  return (
    <section style={{ padding: '180px 0 80px', position: 'relative' }}>
      <div className="shell" style={{ position: 'relative', zIndex: 2 }}>
        <span className="eyebrow">About Banyan</span>
        <h1 className="h-display" style={{ marginTop: 32, maxWidth: '16ch' }}>
          Customer success is <span style={{ color: 'var(--moss-400)' }}>the only</span> metric.
        </h1>
        <p className="lede" style={{ marginTop: 32, maxWidth: '60ch' }}>
          We're a small Florida team of architects, operators, and customer-success specialists. Several of us ran ERP from the client side — got bad implementations rolled out at us, fixed them, and decided to do it properly from the consulting seat. We mean it when we say we've been there.
        </p>
      </div>
    </section>
  );
}

function AINative() {
  const chain = [
    {
      n: '01',
      tag: 'COLLECT',
      t: 'Operational data, gathered without the workshop circus.',
      desc: "Our discovery agent ingests SOPs, screen recordings, system exports, interviews, and existing tickets, then builds a structured operational model in days, not months. No 47-page requirements doc that nobody reads.",
    },
    {
      n: '02',
      tag: 'IDENTIFY GAPS',
      t: 'Native Odoo, mapped against your reality.',
      desc: "The model is run against native Odoo capability with confidence scores. We surface exactly where the standard system fits, where it bends, and where it genuinely has to break, before a single line of custom code is written.",
    },
    {
      n: '03',
      tag: 'CONFIGURE',
      t: 'Configuration generated from the analysis, not transcribed.',
      desc: "The validated gap map drives configuration directly: module setup, custom fields, automations, access rights. Nothing gets re-typed between discovery and build, so nothing gets lost.",
    },
  ];
  return (
    <section style={{ padding: '60px 0 120px' }}>
      <div className="shell">
        <Reveal>
          <div style={{ marginBottom: 56, maxWidth: '64ch' }}>
            <span className="eyebrow">AI-native stack</span>
            <h2 className="h1" style={{ marginTop: 24 }}>
              <span style={{ color: 'var(--moss-400)' }}>Truly AI-native</span>, from first call to go-live.
            </h2>
            <p className="lede" style={{ marginTop: 24 }}>
              Most consultancies bolt AI onto a traditional process: a chatbot here, a summarizer there. We rebuilt the implementation process around our own software, end-to-end. One proprietary stack carries from operational discovery through gap analysis to live configuration, so nothing gets re-typed, lost, or guessed.
            </p>
          </div>
        </Reveal>
        <div className="ai-rows">
          {chain.map((step, i) => (
            <Reveal key={step.n} delay={i * 60}>
              <div className="ai-row">
                <div className="ai-n mono">{step.n}</div>
                <div className="ai-content">
                  <div className="mono ai-tag">{step.tag}</div>
                  <div className="ai-title">{step.t}</div>
                  <div className="ai-desc">{step.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .ai-rows { border-top: 1px solid var(--glass-line); }
        .ai-row { display: grid; grid-template-columns: 80px 1fr; gap: 40px; padding: 44px 0; border-bottom: 1px solid var(--glass-line); align-items: start; }
        .ai-n { font-size: 14px; color: var(--moss-400); letter-spacing: 0.08em; font-weight: 500; padding-top: 6px; }
        .ai-content { max-width: 84ch; }
        .ai-tag { font-size: 11px; color: var(--bone-400); letter-spacing: 0.12em; margin-bottom: 12px; }
        .ai-title { font-family: var(--sans); font-weight: 500; font-size: clamp(24px, 2.6vw, 36px); line-height: 1.15; letter-spacing: -0.02em; margin-bottom: 14px; }
        .ai-desc { color: var(--bone-300); font-size: 16px; line-height: 1.6; max-width: 56ch; }
        @media (max-width: 700px) {
          .ai-row { grid-template-columns: 1fr; gap: 10px; padding: 28px 0; }
          .ai-n { padding-top: 0; }
          .ai-title { font-size: 22px; }
          .ai-desc { font-size: 15px; }
        }
      `}</style>
    </section>
  );
}

function Manifesto() {
  const beliefs = [
    { n: '01', t: 'Customer success is the metric.', d: "Hours billed, tickets closed, modules deployed — none of that means anything if your operation didn't actually get better. We measure ourselves on adoption, on whether your team owns the system, on whether you need us less six months in than you did at go-live." },
    { n: '02', t: 'We\'ve been on your side of the table.', d: "Several of us ran ERP implementations from the client seat — got it badly rolled out at us, fixed it, then went to fix it for others. We know what bad consulting feels like. We refuse to repeat it." },
    { n: '03', t: 'Architects, not account managers.', d: 'Every client works directly with a senior architect from day one. No offshore handoffs, no junior consultant relays, no "let me check with my team."' },
    { n: '04', t: 'Native Odoo, always first.', d: 'The fastest, cheapest, most maintainable Odoo system is one that uses 90% native modules. We commit to custom code only when reality genuinely demands it.' },
    { n: '05', t: 'Fixed scope. Fixed price.', d: 'Hourly billing rewards consultants for being slow. Fixed-scope work rewards us for being right. Our incentives match yours.' },
    { n: '06', t: 'Your team owns the system.', d: 'A successful engagement ends with you needing us less, not more. We embed, train, and step back. Lock-in is the opposite of partnership.' },
  ];
  return (
    <section style={{ padding: '60px 0 160px' }}>
      <div className="shell">
        <Reveal>
          <div style={{ marginBottom: 60 }}>
            <span className="eyebrow">Our manifesto</span>
            <h2 className="h1" style={{ marginTop: 24, maxWidth: '14ch' }}>Six things <span style={{}}>we believe</span>.</h2>
          </div>
        </Reveal>
        <div className="manifesto-grid">
          {beliefs.map((b, i) => (
            <Reveal key={b.n} delay={i * 50}>
              <div className="manifesto-card">
                <div className="mono" style={{ fontSize: 12, color: 'var(--moss-400)', letterSpacing: '0.08em' }}>{b.n}</div>
                <h3 className="" style={{ fontSize: 28, lineHeight: 1.1, marginTop: 18, marginBottom: 16, fontWeight: 500, letterSpacing: '-0.02em' }}>{b.t}</h3>
                <p style={{ fontSize: 14, color: 'var(--bone-300)', lineHeight: 1.6 }}>{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .manifesto-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--glass-line); border: 1px solid var(--glass-line); border-radius: 18px; overflow: hidden; }
        @media (max-width: 1000px) { .manifesto-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .manifesto-grid { grid-template-columns: 1fr; } }
        .manifesto-card { background: var(--ink-100); padding: 36px; min-height: 280px; transition: background 0.3s; }
        .manifesto-card:hover { background: var(--ink-200); }
      `}</style>
    </section>
  );
}

function Team() {
  const team = [
    {
      name: 'Justin Rotondo',
      role: 'Senior Consultant & Implementation Lead',
      bio: "Years of Odoo implementations on both sides of the table. Ran operations at a multi-site distributor — lived through bad ERP rollouts, then fixed them. Now does the same thing on the consulting side: implements, recovers, and gets the system actually used.",
      cred: 'Odoo Certified · Operator-turned-Consultant',
      featured: true,
    },
    {
      name: 'Sam Feuer',
      role: 'Customer Success & Support',
      bio: "The person who picks up when something is on fire — and the person who makes sure it isn't. Owns post-go-live customer experience: support tiers, training, super-user development, and the quarterly health checks that keep your system from drifting.",
      cred: 'Customer Success Lead',
    },
    { name: 'TBA', role: 'Senior Implementation Architect', bio: 'Coming soon — manufacturing & distribution focus.', cred: 'Open role', placeholder: true },
    { name: 'TBA', role: 'AI & Data Migration Lead', bio: 'Coming soon — owns the Banyan AI Toolkit and migrations from legacy ERPs.', cred: 'Open role', placeholder: true },
    { name: 'TBA', role: 'Bilingual Training & Adoption Lead', bio: 'Coming soon — EN/ES training, change management, super-user programs.', cred: 'Open role', placeholder: true },
  ];
  return (
    <section style={{ padding: '160px 0', borderTop: '1px solid var(--glass-line)', background: 'var(--ink-200)' }}>
      <div className="shell">
        <div style={{ marginBottom: 60 }}>
          <span className="eyebrow">The team</span>
          <h2 className="h1" style={{ marginTop: 24, maxWidth: '20ch' }}>The people <span style={{ color: 'var(--moss-400)' }}>actually</span> on your project.</h2>
          <p className="lede" style={{ marginTop: 24, maxWidth: '60ch' }}>No offshore relay, no junior account manager between you and the work. The names below are the ones who answer your emails.</p>
        </div>
        <div className="team-grid">
          {team.map((m, i) => (
            <Reveal key={m.name + i} delay={i * 50}>
              <div className={`team-card ${m.placeholder ? 'placeholder' : ''} ${m.featured ? 'featured' : ''}`}>
                <div className="team-portrait">
                  <div className="team-portrait-inner">
                    <span style={{ fontSize: 56, color: m.placeholder ? 'var(--bone-400)' : 'var(--moss-400)', fontWeight: 500, letterSpacing: '-0.04em' }}>
                      {m.placeholder ? '—' : m.name.split(' ').map(s => s[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="team-body">
                  <h3 style={{ fontSize: 24, lineHeight: 1.1, fontWeight: 500, letterSpacing: '-0.02em' }}>{m.name}</h3>
                  <div className="mono" style={{ fontSize: 12, color: m.placeholder ? 'var(--bone-400)' : 'var(--moss-400)', letterSpacing: '0.08em', marginTop: 8 }}>{m.role.toUpperCase()}</div>
                  <p style={{ fontSize: 14, color: 'var(--bone-300)', marginTop: 16, lineHeight: 1.55 }}>{m.bio}</p>
                  <div className="team-cred">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none"><path d="M12 2 L 21 6 L 21 12 C 21 17, 17 21, 12 22 C 7 21, 3 17, 3 12 L 3 6 Z" stroke={m.placeholder ? 'var(--bone-400)' : 'var(--moss-400)'} strokeWidth="1.4" /><path d="M8 12 L 11 15 L 16 9" stroke={m.placeholder ? 'var(--bone-400)' : 'var(--moss-400)'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span>{m.cred}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .team-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        @media (max-width: 800px) { .team-grid { grid-template-columns: 1fr; } }
        .team-card { background: var(--ink-100); border: 1px solid var(--glass-line); border-radius: 18px; padding: 28px; display: grid; grid-template-columns: 120px 1fr; gap: 28px; align-items: start; }
        .team-card.featured { border-color: var(--moss-700); background: var(--ink-300); box-shadow: var(--shadow-accent); }
        .team-card.placeholder { opacity: 0.6; }
        .team-card.placeholder .team-portrait { background: linear-gradient(135deg, var(--ink-200), var(--ink-100)); }
        @media (max-width: 600px) { .team-card { grid-template-columns: 1fr; } }
        .team-portrait { width: 120px; height: 140px; border-radius: 14px; background: linear-gradient(135deg, var(--ink-300), var(--ink-200)); display: flex; align-items: center; justify-content: center; border: 1px solid var(--glass-line); }
        .team-cred { display: inline-flex; align-items: center; gap: 8px; margin-top: 18px; padding: 6px 12px; background: var(--moss-900); border-radius: 999px; font-family: var(--mono); font-size: 10px; color: var(--moss-300); letter-spacing: 0.06em; }
        .team-card.placeholder .team-cred { background: var(--ink-100); color: var(--bone-400); border: 1px dashed var(--glass-line); }
      `}</style>
    </section>
  );
}

function Numbers() {
  return (
    <section style={{ padding: '160px 0', borderTop: '1px solid var(--glass-line)' }}>
      <div className="shell">
        <span className="eyebrow">By the numbers</span>
        <h2 className="h1" style={{ marginTop: 24, maxWidth: '16ch' }}>The state of <span style={{}}>the firm</span>.</h2>
        <div className="numbers-grid">
          <Stat n="2023" label="Founded · Miami, Florida" />
          <Stat n="12" label="Architects & engineers (and growing)" />
          <Stat n="EN/ES" label="Bilingual by default — every artifact" />
          <Stat n="$0" label="Hourly billing on fixed-scope work" />
        </div>
      </div>
      <style>{`
        .numbers-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; margin-top: 80px; }
        @media (max-width: 880px) { .numbers-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; } }
      `}</style>
    </section>
  );
}

function AboutPage() {
  useEffectA(() => { if (window.applyAccent && window.BANYAN_TWEAK_DEFAULTS) window.applyAccent(window.BANYAN_TWEAK_DEFAULTS.accent); }, []);
  return (
    <>
      <Nav active="about" />
      <main>
        <AboutHero />
        <AINative />
        <Manifesto />
        <Team />
        <Numbers />
        <CTAFinal />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}

function Stat({ n, label }) {
  return (
    <div className="hero-stat">
      <div className="hero-stat-n" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 4.5vw, 60px)', lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--bone-100)' }}>{n}</div>
      <div className="hero-stat-l" style={{ fontFamily: 'var(--mono)', fontSize: 12, lineHeight: 1.5, color: 'var(--bone-300)', marginTop: 12, maxWidth: '24ch' }}>{label}</div>
      <style>{`.hero-stat { padding-right: 12px; }`}</style>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AboutPage />);
