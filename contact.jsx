/* Contact page */
const { useState: useStateC, useEffect: useEffectC } = React;

function ContactPage() {
  const [form, setForm] = useStateC({ name: '', email: '', company: '', size: '', industry: '', stage: '', notes: '' });
  const [sent, setSent] = useStateC(false);
  useEffectC(() => { if (window.applyAccent && window.BANYAN_TWEAK_DEFAULTS) window.applyAccent(window.BANYAN_TWEAK_DEFAULTS.accent); }, []);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <>
      <Nav active="contact" />
      <main>
        <section style={{ padding: '180px 0 100px', position: 'relative', minHeight: '100vh' }}>
          <div className="shell" style={{ position: 'relative', zIndex: 2 }}>
            <div className="contact-grid">
              <div>
                <span className="eyebrow">Free diagnostic</span>
                <h1 className="h-display" style={{ marginTop: 32, fontSize: 'clamp(48px, 6.5vw, 96px)', maxWidth: '12ch' }}>
                  Talk to an <span style={{ color: 'var(--moss-400)' }}>architect</span>.
                </h1>
                <p className="lede" style={{ marginTop: 32 }}>
                  45 minutes, no commitment, no salesperson. Tell us about your operation and we'll come back with an honest feasibility map.
                </p>

                <div className="contact-info">
                  <div className="contact-info-row">
                    <div className="mono contact-info-label">Office</div>
                    <div>
                      <div>1450 Brickell Ave, Suite 1700</div>
                      <div>Miami, FL 33131</div>
                    </div>
                  </div>
                  <div className="contact-info-row">
                    <div className="mono contact-info-label">Direct</div>
                    <div>
                      <div>contact@banyanco.com</div>
                      <div className="mono" style={{ fontSize: 12, color: 'var(--bone-300)', marginTop: 4 }}>+1 (305) 555-0140</div>
                    </div>
                  </div>
                  <div className="contact-info-row">
                    <div className="mono contact-info-label">Languages</div>
                    <div>
                      <span className="tag" style={{ marginRight: 8 }}>English</span>
                      <span className="tag">Español</span>
                    </div>
                  </div>
                  <div className="contact-info-row">
                    <div className="mono contact-info-label">Hours</div>
                    <div>Monday–Friday · 8am–7pm ET</div>
                  </div>
                </div>
              </div>

              <div>
                {!sent ? (
                  <form className="contact-form" onSubmit={submit}>
                    <div className="contact-form-head">
                      <span className="mono" style={{ fontSize: 12, color: 'var(--moss-400)', letterSpacing: '0.08em' }}>STEP 01 / 01</span>
                      <h3 className="" style={{ fontSize: 28, lineHeight: 1.1, marginTop: 12 }}>Tell us about your operation</h3>
                      <p style={{ fontSize: 14, color: 'var(--bone-300)', marginTop: 8 }}>An architect responds within one business day.</p>
                    </div>

                    <div className="field-row">
                      <Field label="Name" v={form.name} onChange={v => set('name', v)} placeholder="Maria Hernández" />
                      <Field label="Work email" v={form.email} onChange={v => set('email', v)} placeholder="m.hernandez@company.com" type="email" />
                    </div>
                    <div className="field-row">
                      <Field label="Company" v={form.company} onChange={v => set('company', v)} placeholder="Atlantic Bay Components" />
                      <Field label="Team size" v={form.size} onChange={v => set('size', v)} as="select" options={['', '1–20', '20–100', '100–500', '500+']} />
                    </div>
                    <div className="field-row">
                      <Field label="Industry" v={form.industry} onChange={v => set('industry', v)} as="select" options={['', 'Manufacturing', 'Construction', 'Professional services', 'Retail / e-commerce', 'Healthcare', 'Real estate', 'Non-profit', 'Other']} />
                      <Field label="Where are you?" v={form.stage} onChange={v => set('stage', v)} as="select" options={['', 'Evaluating Odoo', 'Implementation in progress', 'Live but stuck', 'Recovering a stalled project', 'Just exploring']} />
                    </div>
                    <Field label="What are you trying to solve?" v={form.notes} onChange={v => set('notes', v)} as="textarea" placeholder="A few sentences is plenty." />

                    <div className="contact-consent">
                      <div className="contact-consent-check"><svg viewBox="0 0 16 16" width="12" height="12" fill="none"><path d="M3 8 L 7 12 L 13 4" stroke="var(--moss-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                      <span style={{ fontSize: 13, color: 'var(--bone-300)' }}>I consent to Banyan storing this submission to prepare for the diagnostic. We don't share, sell, or spam. Read our <a href="#" style={{ color: 'var(--moss-400)' }}>privacy policy</a>.</span>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'space-between', padding: '18px 24px', fontSize: 15 }}>
                      Request my diagnostic <span className="btn-arrow">→</span>
                    </button>

                    <div className="contact-trust">
                      <div className="contact-trust-item"><svg viewBox="0 0 24 24" width="14" height="14" fill="none"><circle cx="12" cy="12" r="10" stroke="var(--moss-400)" strokeWidth="1.4"/><path d="M8 12 L 11 15 L 16 9" stroke="var(--moss-400)" strokeWidth="1.6" strokeLinecap="round"/></svg><span>Replies within 1 business day</span></div>
                      <div className="contact-trust-item"><svg viewBox="0 0 24 24" width="14" height="14" fill="none"><circle cx="12" cy="12" r="10" stroke="var(--moss-400)" strokeWidth="1.4"/><path d="M8 12 L 11 15 L 16 9" stroke="var(--moss-400)" strokeWidth="1.6" strokeLinecap="round"/></svg><span>Free · no commitment</span></div>
                      <div className="contact-trust-item"><svg viewBox="0 0 24 24" width="14" height="14" fill="none"><circle cx="12" cy="12" r="10" stroke="var(--moss-400)" strokeWidth="1.4"/><path d="M8 12 L 11 15 L 16 9" stroke="var(--moss-400)" strokeWidth="1.6" strokeLinecap="round"/></svg><span>Real architect, not chatbot</span></div>
                    </div>
                  </form>
                ) : (
                  <div className="contact-form" style={{ textAlign: 'center', padding: '60px 36px' }}>
                    <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--moss-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', border: '1px solid var(--moss-700)' }}>
                      <svg viewBox="0 0 24 24" width="28" height="28" fill="none"><path d="M5 12 L 10 17 L 19 7" stroke="var(--moss-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <h3 className="" style={{ fontSize: 36, lineHeight: 1.1 }}>Got it.</h3>
                    <p className="lede" style={{ marginTop: 16, textAlign: 'center', margin: '16px auto 0' }}>An architect will reach out within one business day. Look out for an email from <strong style={{ color: 'var(--bone-100)' }}>contact@banyanco.com</strong>.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        @media (max-width: 1000px) { .contact-grid { grid-template-columns: 1fr; gap: 60px; } }
        .contact-info { margin-top: 60px; display: flex; flex-direction: column; gap: 24px; }
        .contact-info-row { display: grid; grid-template-columns: 100px 1fr; gap: 20px; font-size: 14px; color: var(--bone-200); }
        .contact-info-label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--bone-300); padding-top: 4px; font-weight: 500; }
        .contact-form { background: var(--ink-200); border: 1px solid var(--glass-line); border-radius: 24px; padding: 36px; display: flex; flex-direction: column; gap: 18px; }
        .contact-form-head { padding-bottom: 24px; border-bottom: 1px solid var(--glass-line); margin-bottom: 8px; }
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 600px) { .field-row { grid-template-columns: 1fr; } }
        .field { display: flex; flex-direction: column; gap: 8px; }
        .field-label { font-family: var(--mono); font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--bone-300); font-weight: 500; }
        .field input, .field select, .field textarea { width: 100%; padding: 14px 16px; background: var(--ink-100); border: 1px solid var(--glass-line); border-radius: 10px; color: var(--bone-100); font-family: var(--sans); font-size: 14px; transition: border 0.2s, background 0.2s; }
        .field input:focus, .field select:focus, .field textarea:focus { outline: none; border-color: var(--moss-400); background: var(--ink-200); }
        .field textarea { min-height: 100px; resize: vertical; }
        .field select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6 L 8 10 L 12 6' stroke='%23B8B2A6' stroke-width='1.4'/%3E%3C/svg%3E"); background-position: right 14px center; background-repeat: no-repeat; padding-right: 40px; }
        .contact-consent { display: flex; gap: 12px; align-items: flex-start; padding: 16px; background: var(--ink-100); border: 1px solid var(--glass-line); border-radius: 12px; }
        .contact-consent-check { width: 18px; height: 18px; border-radius: 4px; background: var(--moss-900); border: 1px solid var(--moss-700); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
        .contact-trust { display: flex; gap: 20px; flex-wrap: wrap; padding-top: 8px; }
        .contact-trust-item { display: inline-flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 11px; color: var(--bone-300); letter-spacing: 0.04em; }
      `}</style>
    </>
  );
}

function Field({ label, v, onChange, placeholder, as = 'input', type = 'text', options = [] }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      {as === 'input' && <input type={type} value={v} onChange={e => onChange(e.target.value)} placeholder={placeholder} />}
      {as === 'textarea' && <textarea value={v} onChange={e => onChange(e.target.value)} placeholder={placeholder} />}
      {as === 'select' && (
        <select value={v} onChange={e => onChange(e.target.value)}>
          {options.map(o => <option key={o} value={o}>{o || 'Select…'}</option>)}
        </select>
      )}
    </label>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ContactPage />);
