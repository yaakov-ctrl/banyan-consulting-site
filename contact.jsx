/* Contact page */
const { useState: useStateC, useEffect: useEffectC } = React;

const WEB3FORMS_KEY = '93426a60-8552-4922-a45b-97ddfaaec523';

function ContactPage() {
  const [form, setForm] = useStateC({ name: '', email: '', company: '', size: '', industry: '', stage: '', notes: '' });
  const [sent, setSent] = useStateC(false);
  const [submitting, setSubmitting] = useStateC(false);
  const [error, setError] = useStateC('');
  const [consent, setConsent] = useStateC(false);
  const [showPrivacy, setShowPrivacy] = useStateC(false);
  useEffectC(() => { if (window.applyAccent && window.BANYAN_TWEAK_DEFAULTS) window.applyAccent(window.BANYAN_TWEAK_DEFAULTS.accent); }, []);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const submit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!consent) {
      setError('Please agree to the consent statement before submitting.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `New diagnostic request from ${form.name || 'unknown'}${form.company ? ` (${form.company})` : ''}`,
        from_name: 'Banyan Website',
        name: form.name,
        email: form.email,
        company: form.company,
        team_size: form.size,
        industry: form.industry,
        where_are_you: form.stage,
        message: form.notes,
        botcheck: '',
      };
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSent(true);
      } else {
        setError(data.message || 'Something went wrong. Please email hello@gobanyan.consulting directly.');
      }
    } catch (err) {
      setError('Network error. Please email hello@gobanyan.consulting directly.');
    } finally {
      setSubmitting(false);
    }
  };

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
                      <div>Brickell City Centre</div>
                      <div>78 SW 7th St, Miami, FL 33130</div>
                    </div>
                  </div>
                  <div className="contact-info-row">
                    <div className="mono contact-info-label">Direct</div>
                    <div>
                      <div>hello@gobanyan.consulting</div>
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

                    <label className="contact-consent" style={{ cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={e => { setConsent(e.target.checked); if (e.target.checked) setError(''); }}
                        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
                      />
                      <div
                        className={`contact-consent-check${consent ? ' is-checked' : ''}`}
                        aria-hidden="true"
                      >
                        {consent && (
                          <svg viewBox="0 0 16 16" width="12" height="12" fill="none">
                            <path d="M3 8 L 7 12 L 13 4" stroke="var(--moss-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <span style={{ fontSize: 13, color: 'var(--bone-300)' }}>
                        I consent to Banyan storing this submission to prepare for the diagnostic. We don't share, sell, or spam. Read our{' '}
                        <a
                          href="#"
                          onClick={e => { e.preventDefault(); e.stopPropagation(); setShowPrivacy(true); }}
                          style={{ color: 'var(--moss-400)' }}
                        >
                          privacy policy
                        </a>.
                      </span>
                    </label>

                    <button type="submit" disabled={submitting || !consent} className="btn btn-primary" style={{ width: '100%', justifyContent: 'space-between', padding: '18px 24px', fontSize: 15, opacity: (submitting || !consent) ? 0.55 : 1, cursor: (submitting || !consent) ? 'not-allowed' : 'pointer' }}>
                      {submitting ? 'Sending…' : 'Request my diagnostic'} <span className="btn-arrow">→</span>
                    </button>
                    {error && (
                      <div style={{ fontSize: 13, color: '#E89A9A', padding: '10px 14px', background: 'rgba(232, 154, 154, 0.08)', border: '1px solid rgba(232, 154, 154, 0.25)', borderRadius: 8 }}>
                        {error}
                      </div>
                    )}

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
                    <p className="lede" style={{ marginTop: 16, textAlign: 'center', margin: '16px auto 0' }}>An architect will reach out within one business day. Look out for an email from <strong style={{ color: 'var(--bone-100)' }}>hello@gobanyan.consulting</strong>.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {showPrivacy && (
        <div
          className="privacy-overlay"
          onClick={() => setShowPrivacy(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Privacy policy"
        >
          <div className="privacy-modal" onClick={e => e.stopPropagation()}>
            <button
              type="button"
              className="privacy-close"
              onClick={() => setShowPrivacy(false)}
              aria-label="Close privacy policy"
            >
              ×
            </button>
            <span className="eyebrow">Privacy</span>
            <h3 style={{ fontSize: 28, lineHeight: 1.15, marginTop: 16 }}>How we handle your information.</h3>
            <p className="privacy-body" style={{ marginTop: 20 }}>
              When you submit the diagnostic form, we collect your name, work email, company, team size, industry, current stage, and the notes you write. We use this information for one purpose: to prepare for and respond to your diagnostic request.
            </p>
            <h4 className="privacy-h">What we do with it</h4>
            <ul className="privacy-list">
              <li>Store it securely on infrastructure operated by Banyan and our form processor (Web3Forms).</li>
              <li>Read it ourselves so an architect can prepare a useful response.</li>
              <li>Reach out to you by email or phone using the contact details you provide.</li>
            </ul>
            <h4 className="privacy-h">What we don't do</h4>
            <ul className="privacy-list">
              <li>We don't sell, rent, or share your information with third parties for marketing.</li>
              <li>We don't add you to a newsletter or drip campaign without your explicit opt-in.</li>
              <li>We don't use your submission to train AI models.</li>
            </ul>
            <h4 className="privacy-h">Your rights</h4>
            <p className="privacy-body">
              You can ask us to delete your submission at any time by emailing <a href="mailto:hello@gobanyan.consulting" style={{ color: 'var(--moss-400)' }}>hello@gobanyan.consulting</a>. We'll confirm deletion within five business days.
            </p>
            <p className="privacy-body" style={{ marginTop: 20, fontSize: 12, color: 'var(--bone-400)' }}>
              Last updated: May 2026.
            </p>
          </div>
        </div>
      )}

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
        .contact-consent { position: relative; display: flex; gap: 12px; align-items: flex-start; padding: 16px; background: var(--ink-100); border: 1px solid var(--glass-line); border-radius: 12px; transition: border-color 0.2s; }
        .contact-consent:hover { border-color: var(--glass-line-strong); }
        .contact-consent-check { width: 18px; height: 18px; border-radius: 4px; background: transparent; border: 1px solid var(--bone-400); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; transition: background 0.15s, border-color 0.15s; }
        .contact-consent-check.is-checked { background: var(--moss-900); border-color: var(--moss-700); }

        .privacy-overlay {
          position: fixed; inset: 0; background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          padding: 24px; z-index: 1000; animation: fadeIn 0.18s ease-out;
        }
        .privacy-modal {
          position: relative; max-width: 560px; width: 100%; max-height: 85vh; overflow-y: auto;
          background: var(--ink-200); border: 1px solid var(--glass-line-strong);
          border-radius: 16px; padding: 40px 36px;
          animation: slideUp 0.22s ease-out;
        }
        .privacy-close {
          position: absolute; top: 16px; right: 16px;
          width: 32px; height: 32px; border-radius: 50%;
          background: transparent; border: 1px solid var(--glass-line);
          color: var(--bone-300); font-size: 22px; line-height: 1; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s, color 0.15s;
        }
        .privacy-close:hover { background: var(--glass-fill); color: var(--bone-100); }
        .privacy-h { font-family: var(--sans); font-size: 13px; font-weight: 500; color: var(--bone-100); margin-top: 24px; margin-bottom: 8px; letter-spacing: 0.02em; }
        .privacy-body { font-size: 14px; line-height: 1.6; color: var(--bone-300); margin: 0; }
        .privacy-list { font-size: 14px; line-height: 1.6; color: var(--bone-300); margin: 0; padding-left: 18px; }
        .privacy-list li { margin-bottom: 6px; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
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
