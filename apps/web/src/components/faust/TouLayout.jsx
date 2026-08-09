import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '@/styles/tou-theme.css';
import { Crest } from '@/pages/TermsOfUnbeingPage.jsx';

// Shared chrome for the Faust Luxury Residences institution site
// (pages/faust/*). Deliberately unlinked from the main site nav — reachable
// by URL only, same convention already used for VikamalArchivePage and the
// FieldNote004_* pages.

const SUBNAV = [
  { to: '/faust-luxury-residences', label: 'Lobby' },
  { to: '/faust-luxury-residences/residents', label: 'Resident Directory' },
  { to: '/faust-luxury-residences/lease', label: 'Lease Explorer' },
  { to: '/faust-luxury-residences/building', label: 'Building Directory' },
  { to: '/faust-luxury-residences/tribunal', label: 'Tribunal Archive' },
];

export function TouSubnav({ active }) {
  return (
    <nav className="tou-subnav" aria-label="Faust Luxury Residences sections">
      {SUBNAV.map((item) => (
        <Link key={item.to} to={item.to} aria-current={active === item.to ? 'page' : undefined}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function TouShell({ title, description, active, children }) {
  return (
    <div className="tou-page">
      <Helmet>
        <title>{title} | Faust Luxury Residences</title>
        {description ? <meta name="description" content={description} /> : null}
        <meta name="robots" content="noindex" />
      </Helmet>

      <header className="tou-nav">
        <Link to="/faust-luxury-residences" className="tou-brand">Faust Luxury Residences</Link>
        <div className="tou-nav-right">
          <Link to="/terms-of-unbeing" className="tou-btn tou-btn--sm">Buy Terms of Unbeing</Link>
        </div>
      </header>

      <main>
        <div className="tou-wrap" style={{ paddingTop: 'clamp(32px,5vw,56px)' }}>
          <TouSubnav active={active} />
        </div>
        {children}
      </main>

      <footer className="tou-footer">
        <div className="tou-wrap">
          <Crest className="tou-footer-crest" />
          <div className="tou-footer-mono tou-mono">
            <p>Faust Luxury Residences · A Terms of Unbeing Archive</p>
            <p>Records presented for prospective-tenant review only.</p>
            <p><Link to="/terms-of-unbeing">Read the full listing at elianvoigt.com →</Link></p>
          </div>
          <p className="tou-footer-line tou-mono tou-red">No renewal will be offered. No vacancy will be recorded.</p>
        </div>
      </footer>
    </div>
  );
}

export function TouSection({ eyebrow, heading, children, id }) {
  return (
    <section id={id} className="tou-section">
      <div className="tou-wrap">
        {eyebrow ? <p className="tou-eyebrow tou-brass">{eyebrow}</p> : null}
        {heading ? <h2 className="tou-h2">{heading}</h2> : null}
        <div className="tou-prose">{children}</div>
      </div>
    </section>
  );
}

export function TouPull({ children }) {
  return <blockquote className="tou-pull tou-display">{children}</blockquote>;
}
