import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '@/styles/brynjavik-theme.css';

// Shared chrome for the Brynjavík institution site (pages/brynjavik/*),
// covering Declensions of Dark Water. Deliberately unlinked from the main
// site nav until wired in — same reachable-by-URL-only convention used for
// the Vikamál fragment pages and the Faust Luxury Residences institution
// site (pages/faust/*).

const SUBNAV = [
  { to: '/brynjavik', label: 'Field Station' },
  { to: '/brynjavik/grammar', label: 'Grammar Archive' },
  { to: '/field-notes/vikamal-coastal-grammar', label: 'Field Notes' },
  { to: '/brynjavik/log', label: 'Coastal Log' },
];

export function BrynjavikSubnav({ active }) {
  return (
    <nav className="brk-subnav" aria-label="Brynjavík archive sections">
      {SUBNAV.map((item) => (
        <Link key={item.to} to={item.to} aria-current={active === item.to ? 'page' : undefined}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function BrynjavikShell({ title, description, active, children }) {
  return (
    <div className="brk-page">
      <Helmet>
        <title>{title} | Brynjavík Field Station Archive</title>
        {description ? <meta name="description" content={description} /> : null}
        <meta name="robots" content="noindex" />
      </Helmet>

      <header className="brk-nav">
        <Link to="/brynjavik" className="brk-brand">Brynjavík Field Station Archive</Link>
        <div>
          <Link to="/catalogue/declensions-of-dark-water" className="brk-btn brk-btn--sm">Declensions of Dark Water</Link>
        </div>
      </header>

      <main>
        <div className="brk-wrap" style={{ paddingTop: 'clamp(32px,5vw,56px)' }}>
          <BrynjavikSubnav active={active} />
        </div>
        {children}
      </main>

      <footer className="brk-footer">
        <div className="brk-wrap">
          <p className="brk-mono brk-sm brk-muted" style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Brynjavík Field Station Archive · A Declensions of Dark Water Record
          </p>
          <div className="brk-footer-mono brk-mono">
            <p>Materials presented for research purposes. Restoration incomplete.</p>
            <p><Link to="/catalogue/declensions-of-dark-water">Read more about Declensions of Dark Water →</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function BrynjavikSection({ eyebrow, heading, children, id }) {
  return (
    <section id={id} className="brk-section">
      <div className="brk-wrap">
        {eyebrow ? <p className="brk-eyebrow">{eyebrow}</p> : null}
        {heading ? <h2 className="brk-h2">{heading}</h2> : null}
        <div className="brk-prose">{children}</div>
      </div>
    </section>
  );
}
