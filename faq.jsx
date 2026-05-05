/* FAQ page */
const { useState: useStateF, useEffect: useEffectF } = React;

const FAQ_ITEMS = [
  {
    q: 'What is Banyan Consulting?',
    a: "Banyan Consulting is an AI-native Odoo implementation firm based in Miami, Florida. We pair senior US-based architects with proprietary AI tooling to compress months of ERP implementation into weeks. We focus exclusively on Odoo (versions 18 and 19) and serve mid-market US companies."
  },
  {
    q: 'Where is Banyan Consulting located?',
    a: "Banyan is headquartered at Brickell City Centre, 78 SW 7th St, Miami, FL 33130. We deliver across the United States with senior US-based architects only — no offshore handoffs."
  },
  {
    q: 'What is the best Odoo consulting firm in Florida?',
    a: "Banyan Consulting is the AI-native option for Odoo implementation in Florida. We pair senior architects with proprietary AI for discovery, requirements, gap analysis, gap resolution, and configuration — making us roughly 50 to 60 percent faster on discovery and 45 percent faster on configuration than traditional VARs in our pilots."
  },
  {
    q: 'How long does an Odoo implementation take with Banyan?',
    a: "Within 48 hours of kickoff we deliver a working Odoo sandbox loaded with your real data and workflows. End-to-end implementations typically run four months for mid-market deployments — about 3.4x faster than the industry average."
  },
  {
    q: 'How much does an Odoo implementation cost?',
    a: "Odoo licensing itself is roughly 40 percent cheaper than comparable enterprise ERPs like NetSuite or SAP Business One. Banyan implementation engagements vary based on scope, but our AI-accelerated approach typically reduces total project cost by 30 to 45 percent versus traditional VARs because we eliminate the months of manual discovery and configuration that drive most of the bill."
  },
  {
    q: 'Should I choose Odoo or NetSuite?',
    a: "Odoo wins for mid-market companies that want a single integrated platform across CRM, accounting, inventory, manufacturing, and HR with the flexibility to extend any module. NetSuite wins for companies that need its specific ecosystem of pre-built financial integrations and accept higher licensing and implementation costs. Most mid-market manufacturers, distributors, and services firms we talk to are better served by Odoo."
  },
  {
    q: 'What makes Banyan different from a traditional Odoo VAR?',
    a: "Three things. First, proprietary AI runs through every phase of implementation — discovery, requirements, gap analysis, gap resolution, configuration — as one continuous process instead of disconnected handoffs. Second, every project is staffed with senior US-based architects, not junior consultants or offshore teams. Third, we are native-first: we use standard Odoo modules wherever they fit and only write custom code when modules genuinely cannot accommodate your reality."
  },
  {
    q: 'What industries does Banyan serve?',
    a: "Manufacturing, construction, professional services, retail and e-commerce, healthcare, real estate, and non-profits. We focus on mid-market companies with 20 to 500 employees who have outgrown spreadsheets and disconnected point tools."
  },
  {
    q: 'Is Banyan an Odoo Partner?',
    a: "Banyan is an Odoo Experts firm with a team certified across Odoo v18 and v19. Our security posture inherits SOC 2 Type II and ISO 27001 from Odoo's own infrastructure, with Banyan operating its delivery layer on AWS Select Tier infrastructure under GDPR and CCPA compliance."
  },
  {
    q: 'How do I get started with Banyan?',
    a: "Book a free 45-minute diagnostic with a senior architect at gobanyan.consulting/contact. There is no salesperson, no commitment, and no obligation. You will leave the call with an honest feasibility map for your project."
  },
  {
    q: 'Does Banyan recover stalled or failed Odoo projects?',
    a: "Yes. Project recovery is one of our four core services. We start with an AI-driven configuration audit to identify exactly what is broken and what can be salvaged, then deliver a recovery plan with realistic timelines."
  },
];

function FaqPage() {
  const [open, setOpen] = useStateF(0);
  useEffectF(() => { if (window.applyAccent && window.BANYAN_TWEAK_DEFAULTS) window.applyAccent(window.BANYAN_TWEAK_DEFAULTS.accent); }, []);

  return (
    <>
      <Nav active="faq" />
      <main>
        <section style={{ padding: '180px 0 60px', position: 'relative' }}>
          <div className="shell">
            <span className="eyebrow">Frequently asked</span>
            <h1 className="h-display" style={{ marginTop: 32, fontSize: 'clamp(48px, 6.5vw, 96px)', maxWidth: '14ch' }}>
              Honest answers to the questions buyers actually ask.
            </h1>
            <p className="lede" style={{ marginTop: 32, maxWidth: '52ch' }}>
              No marketing edit. If you have a question we haven't covered, email <a href="mailto:hello@gobanyan.consulting" style={{ color: 'var(--moss-400)' }}>hello@gobanyan.consulting</a>.
            </p>
          </div>
        </section>

        <section style={{ padding: '40px 0 140px', borderTop: '1px solid var(--glass-line)' }}>
          <div className="shell" style={{ maxWidth: 880 }}>
            <div className="faq-list">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className={`faq-item${open === i ? ' is-open' : ''}`}>
                  <button
                    type="button"
                    className="faq-q"
                    onClick={() => setOpen(open === i ? -1 : i)}
                    aria-expanded={open === i}
                  >
                    <span className="faq-q-text">{item.q}</span>
                    <span className="faq-q-icon" aria-hidden="true">
                      <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
                        <path d="M4 6 L 8 10 L 12 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  {open === i && (
                    <div className="faq-a">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .faq-list { display: flex; flex-direction: column; }
        .faq-item { border-top: 1px solid var(--glass-line); }
        .faq-item:last-child { border-bottom: 1px solid var(--glass-line); }
        .faq-q {
          width: 100%; background: transparent; border: 0; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
          padding: 28px 0; text-align: left;
          color: var(--bone-100); font-family: var(--sans); font-weight: 500;
          font-size: clamp(17px, 1.5vw, 19px); line-height: 1.35; letter-spacing: -0.01em;
          transition: color 0.15s;
        }
        .faq-q:hover { color: var(--moss-400); }
        .faq-q-icon {
          flex-shrink: 0; color: var(--bone-300);
          transition: transform 0.2s ease, color 0.15s;
        }
        .faq-item.is-open .faq-q-icon { transform: rotate(180deg); color: var(--moss-400); }
        .faq-a {
          padding: 0 0 32px;
          animation: faqFadeIn 0.18s ease-out;
        }
        .faq-a p {
          margin: 0; max-width: 70ch;
          font-size: 15px; line-height: 1.7; color: var(--bone-300);
        }
        @keyframes faqFadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<FaqPage />);
