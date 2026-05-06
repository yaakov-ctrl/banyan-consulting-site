/* Shared components: Nav, Footer, Logo, Reveal hook, etc. */

const { useState, useEffect, useRef, useMemo } = React;

/* ---------- Logo: realistic banyan tree illustration ----------
   A naturalistic banyan with detailed foliage clumps, multiple trunk system,
   visible aerial roots, and ground shadow. Painted feel, not iconographic.
*/
function BanyanMark({ size = 28, color = "currentColor", accent = "var(--moss-400)" }) {
  // We accept color/accent for theming but use rich gradients for realism.
  const id = React.useMemo(() => 'bm-' + Math.random().toString(36).slice(2, 8), []);
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Banyan tree">
      <defs>
        <radialGradient id={`${id}-canopy`} cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#5BD896" />
          <stop offset="55%" stopColor="#1AAE6B" />
          <stop offset="100%" stopColor="#0A5C3A" />
        </radialGradient>
        <radialGradient id={`${id}-leaf`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7DE3AB" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1AAE6B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-trunk`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#3B2A1A" />
          <stop offset="50%" stopColor="#6B4A2E" />
          <stop offset="100%" stopColor="#2A1D10" />
        </linearGradient>
        <radialGradient id={`${id}-shadow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="40" cy="72" rx="26" ry="3.5" fill={`url(#${id}-shadow)`} />

      {/* Trunks — main trunk + aerial root supports, wider at top, tapered to ground */}
      {/* Outer left aerial root */}
      <path d="M22 48 C 20 55, 19 62, 18 70 L 21 70 C 22 62, 23 55, 25 48 Z"
            fill={`url(#${id}-trunk)`} />
      {/* Inner left support */}
      <path d="M30 46 C 29 54, 28.5 62, 28 70 L 32 70 C 32 62, 32 54, 33 46 Z"
            fill={`url(#${id}-trunk)`} />
      {/* Main trunk */}
      <path d="M36 42 C 35 50, 35 60, 34 70 L 46 70 C 45 60, 45 50, 44 42 Z"
            fill={`url(#${id}-trunk)`} />
      {/* Inner right support */}
      <path d="M47 46 C 47.5 54, 48 62, 48 70 L 52 70 C 51.5 62, 51 54, 50 46 Z"
            fill={`url(#${id}-trunk)`} />
      {/* Outer right aerial root */}
      <path d="M55 48 C 57 55, 58 62, 59 70 L 62 70 C 61 62, 60 55, 58 48 Z"
            fill={`url(#${id}-trunk)`} />

      {/* Trunk highlight strokes — bark suggestion */}
      <path d="M40 44 L 39.5 68" stroke="#1A0F06" strokeWidth="0.8" opacity="0.5" />
      <path d="M41 44 L 41.5 68" stroke="#8C6440" strokeWidth="0.6" opacity="0.6" />
      <path d="M23.5 50 L 22.5 68" stroke="#1A0F06" strokeWidth="0.5" opacity="0.4" />
      <path d="M30.5 48 L 30 68" stroke="#1A0F06" strokeWidth="0.5" opacity="0.4" />
      <path d="M49.5 48 L 50 68" stroke="#1A0F06" strokeWidth="0.5" opacity="0.4" />
      <path d="M56.5 50 L 57.5 68" stroke="#1A0F06" strokeWidth="0.5" opacity="0.4" />

      {/* Aerial roots — thin tendrils dropping from canopy edge */}
      <path d="M16 30 Q 17 40, 21 48" stroke="#3B2A1A" strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M20 26 Q 22 36, 24 46" stroke="#3B2A1A" strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.5"/>
      <path d="M64 30 Q 63 40, 59 48" stroke="#3B2A1A" strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M60 26 Q 58 36, 56 46" stroke="#3B2A1A" strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.5"/>

      {/* Canopy — main mass: multiple overlapping organic blobs for foliage texture */}
      <g>
        {/* Base big cloud */}
        <ellipse cx="40" cy="28" rx="32" ry="20" fill={`url(#${id}-canopy)`} />
        {/* Foliage clumps — overlapping circles in varying greens */}
        <circle cx="20" cy="26" r="11" fill="#1AAE6B" />
        <circle cx="30" cy="18" r="13" fill="#22C77B" />
        <circle cx="42" cy="14" r="14" fill="#2DD487" />
        <circle cx="54" cy="18" r="13" fill="#22C77B" />
        <circle cx="62" cy="26" r="11" fill="#1AAE6B" />
        <circle cx="14" cy="32" r="9"  fill="#0F8A55" />
        <circle cx="68" cy="32" r="9"  fill="#0F8A55" />
        <circle cx="38" cy="36" r="11" fill="#0E7A4B" />
        {/* Highlight clumps — sun-lit top */}
        <circle cx="32" cy="14" r="7" fill="#7DE3AB" opacity="0.85" />
        <circle cx="44" cy="10" r="6" fill="#9BEEC0" opacity="0.9" />
        <circle cx="52" cy="14" r="6" fill="#7DE3AB" opacity="0.85" />
        <circle cx="24" cy="20" r="5" fill="#5BD896" opacity="0.7" />
        <circle cx="60" cy="20" r="5" fill="#5BD896" opacity="0.7" />
        {/* Shadow clumps — under-canopy */}
        <circle cx="26" cy="36" r="6" fill="#0A5C3A" opacity="0.55" />
        <circle cx="40" cy="40" r="7" fill="#083D27" opacity="0.55" />
        <circle cx="54" cy="36" r="6" fill="#0A5C3A" opacity="0.55" />
        {/* Tiny leaf speckles */}
        <circle cx="18" cy="24" r="1.3" fill="#9BEEC0" />
        <circle cx="36" cy="20" r="1.1" fill="#9BEEC0" />
        <circle cx="48" cy="22" r="1.2" fill="#9BEEC0" />
        <circle cx="58" cy="24" r="1.3" fill="#9BEEC0" />
        <circle cx="22" cy="32" r="1.0" fill="#5BD896" />
        <circle cx="64" cy="32" r="1.0" fill="#5BD896" />
        <circle cx="40" cy="26" r="1.4" fill="#7DE3AB" />
      </g>

      {/* Ground line */}
      <line x1="10" y1="70" x2="70" y2="70" stroke="#5C4A36" strokeWidth="0.8" opacity="0.55"/>
    </svg>
  );
}

/* ---------- Wordmark: serif "Banyan" + caps tracking subtitle ---------- */
function BanyanWordmark({ size = 22, subtitle = true }) {
  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1, gap: 3 }}>
      <span style={{
        fontFamily: 'var(--sans)',
        fontWeight: 600,
        fontSize: size,
        letterSpacing: '-0.03em',
        color: 'var(--bone-100)',
      }}>
        Banyan
      </span>
      {subtitle && (
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: Math.max(9, size * 0.42),
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color: 'var(--bone-400)',
          paddingLeft: '1px',
        }}>
          Consulting
        </span>
      )}
    </span>
  );
}

/* ---------- Navigation ---------- */
function Nav({ active = "home" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') return 'light';
    return document.documentElement.getAttribute('data-theme') || 'light';
  });
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 880) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('banyan-theme', next); } catch(e){}
  };

  const items = [
    { id: 'services', label: 'Services', href: 'services.html' },
    { id: 'industries', label: 'Industries', href: 'industries.html' },
    { id: 'pricing', label: 'Pricing', href: 'pricing.html' },
    { id: 'about', label: 'About', href: 'about.html' },
    { id: 'contact', label: 'Contact', href: 'contact.html' },
  ];

  const ThemeBtn = (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      )}
    </button>
  );

  return (
    <React.Fragment>
      <nav className="nav" style={scrolled ? { background: 'var(--nav-bg-scrolled)' } : {}}>
        <a className="nav-brand" href="index.html" aria-label="Banyan Consulting — Home">
          <img src="banyan-mark-v2.png" alt="" className="nav-brand-mark-img" width="48" height="48" style={{ display: 'block', objectFit: 'contain', objectPosition: 'center' }} />
          <BanyanWordmark size={26} subtitle={true} />
          <span className="mono" style={{ fontSize: 9, color: 'var(--bone-300)', letterSpacing: '0.22em', marginLeft: 8, paddingLeft: 10, borderLeft: '1px solid var(--glass-line)', alignSelf: 'center' }}>FL · USA</span>
        </a>

        <div className="nav-links">
          {items.map(item => (
            <a key={item.id} href={item.href} className={active === item.id ? 'active' : ''}>{item.label}</a>
          ))}
        </div>

        <div className="nav-right">
          <span className="nav-lang">
            <span className="on">EN</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>ES</span>
          </span>
          {ThemeBtn}
          <a className="btn btn-primary" href="contact.html">
            Book a call
            <span className="btn-arrow">→</span>
          </a>
          <button
            type="button"
            className={`nav-burger${open ? ' open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span className="nav-burger-bars">
              <span></span><span></span><span></span>
            </span>
          </button>
        </div>
      </nav>

      <div className={`nav-overlay${open ? ' open' : ''}`} role="dialog" aria-modal="true" aria-hidden={!open}>
        <a className={`nav-overlay-link${active === 'home' ? ' active' : ''}`} href="index.html">Home</a>
        {items.map(item => (
          <a key={item.id} href={item.href} className={`nav-overlay-link${active === item.id ? ' active' : ''}`}>{item.label}</a>
        ))}
        <div className="nav-overlay-foot">
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            {ThemeBtn}
            <span className="mono" style={{ fontSize: 12, color: 'var(--bone-300)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{theme} theme</span>
          </div>
          <a className="btn btn-primary" href="contact.html">Book a call <span className="btn-arrow">→</span></a>
          <span style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--bone-400)' }}>
            <span>Miami, Florida · EN / ES</span>
            <span>+1 (305) 555-0140</span>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div className="foot-grid">
          <div>
            <div className="foot-mark" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <img src="banyan-mark-v2.png" alt="" width="54" height="54" style={{ display: 'block', objectFit: 'contain', objectPosition: 'center' }} />
              <BanyanWordmark size={32} subtitle={true} />
            </div>
            <p className="foot-tag">
              An Odoo consulting firm headquartered in Florida.
              We bring AI to ERP implementation so deployment becomes the easiest part of your transformation.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <a href="#" style={badgeStyle}>Odoo Experts</a>
              <a href="#" style={badgeStyle}>v18 / v19 Certified</a>
            </div>
          </div>

          <div className="foot-col">
            <h5>Services</h5>
            <ul>
              <li><a href="services.html">First implementation</a></li>
              <li><a href="services.html">Project recovery</a></li>
              <li><a href="services.html">Strategic consulting</a></li>
              <li><a href="services.html">Support & training</a></li>
              <li><a href="services.html">Banyan AI Toolkit</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Industries</h5>
            <ul>
              <li><a href="industries.html">Manufacturing</a></li>
              <li><a href="industries.html">Construction</a></li>
              <li><a href="industries.html">Professional services</a></li>
              <li><a href="industries.html">Retail & e-commerce</a></li>
              <li><a href="industries.html">Healthcare</a></li>
              <li><a href="industries.html">Real estate</a></li>
              <li><a href="industries.html">Non-profit</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="about.html">Our method</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="contact.html">Free diagnostic</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Banyan Consulting LLC · Miami, Florida</span>
          <span style={{ display: 'inline-flex', gap: 24 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="mailto:hello@gobanyan.consulting">hello@gobanyan.consulting</a>
            <a href="#">+1 (305) 555-0140</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

const badgeStyle = {
  fontFamily: 'var(--mono)',
  fontSize: 12,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  padding: '6px 10px',
  border: '1px solid var(--glass-line)',
  borderRadius: 999,
  color: 'var(--bone-300)',
};

/* ---------- Reveal-on-scroll wrapper ---------- */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setVis(true), delay); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`reveal ${vis ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

/* ---------- Tweaks defaults ---------- */
const BANYAN_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "moss",
  "heroVariant": "ai-pulse",
  "showBadges": true
}/*EDITMODE-END*/;

/* Apply accent live by overriding CSS variables.
   For the default "moss"/"plum" preset we CLEAR any inline overrides instead of
   writing them, so the theme-aware CSS rules ([data-theme="light"] / [dark])
   take effect — light theme uses deep plum, dark uses light mauve. */
function applyAccent(name) {
  const root = document.documentElement;
  const overrideKeys = ['--moss-300', '--moss-400', '--moss-500', '--moss-700'];

  if (name === 'moss' || name === 'plum' || !name) {
    // Default — let CSS theme tokens win. Strip any previously-set inline overrides.
    overrideKeys.forEach(k => root.style.removeProperty(k));
    return;
  }

  const presets = {
    copper: { '--moss-300': '#E0B68A', '--moss-400': '#C89B6B', '--moss-500': '#A47B4D', '--moss-700': '#3F2D1E' },
    sky:    { '--moss-300': '#7DD3FC', '--moss-400': '#38BDF8', '--moss-500': '#0EA5E9', '--moss-700': '#0C4A6E' },
    bone:   { '--moss-300': '#F5F1EA', '--moss-400': '#E8E2D6', '--moss-500': '#B8B2A6', '--moss-700': '#2A2620' },
  };
  const p = presets[name];
  if (!p) {
    overrideKeys.forEach(k => root.style.removeProperty(k));
    return;
  }
  Object.entries(p).forEach(([k, v]) => root.style.setProperty(k, v));
}

/* expose globally */

/* ---------- Odoo wordmark (inlined so "doo" inherits text color via currentColor) ---------- */
function OdooLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="140 140 640 215"
      role="img"
      aria-label="Odoo"
      style={{
        height: '0.78em',
        width: 'auto',
        display: 'inline-block',
        verticalAlign: '-0.04em',
        color: 'var(--bone-100)',
      }}
    >
      <path d="M695,346a75,75,0,1,1,75-75A75,75,0,0,1,695,346Zm0-31a44,44,0,1,0-44-44A44,44,0,0,0,695,315ZM538,346a75,75,0,1,1,75-75A75,75,0,0,1,538,346Zm0-31a44,44,0,1,0-44-44A44,44,0,0,0,538,315Zm-82-45c0,41.9-33.6,76-75,76s-75-34-75-75.9S336.5,196,381,196c16.4,0,31.6,3.5,44,12.6V165.1c0-8.3,7.3-15.1,15.5-15.1s15.5,6.8,15.5,15.1Zm-75,45a44,44,0,1,0-44-44A44,44,0,0,0,381,315Z" fill="currentColor"></path>
      <path d="M224,346a75,75,0,1,1,75-75A75,75,0,0,1,224,346Zm0-31a44,44,0,1,0-44-44A44,44,0,0,0,224,315Z" fill="#714b67"></path>
    </svg>
  );
}

/* ---------- Final CTA (used on home, services, industries, about, pricing) ---------- */
function CTAFinal() {
  return (
    <section style={{ padding: '160px 0', position: 'relative', borderTop: '1px solid var(--glass-line)' }}>
      <div className="shell" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <h2 className="h-display" style={{ maxWidth: '16ch', margin: '0 auto' }}>
          Let's make implementation <span style={{ color: 'var(--moss-400)' }}>the easy part</span>.
        </h2>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap' }}>
          <a className="btn btn-primary" href="contact.html">Free diagnostic <span className="btn-arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Sticky mobile CTA bar ---------- */
function StickyCTA({ label = "Free 45-min diagnostic", sub = "Florida-based · No commitment", cta = "Book", href = "contact.html" }) {
  return (
    <div className="sticky-cta" role="complementary" aria-label="Quick contact">
      <div className="sticky-cta-row">
        <span className="sticky-cta-label">{label}<strong>{sub}</strong></span>
        <a className="btn btn-primary" href={href}>{cta} <span className="btn-arrow">→</span></a>
      </div>
    </div>
  );
}

Object.assign(window, { BanyanMark, BanyanWordmark, OdooLogo, CTAFinal, Nav, Footer, Reveal, BANYAN_TWEAK_DEFAULTS, applyAccent, StickyCTA });
