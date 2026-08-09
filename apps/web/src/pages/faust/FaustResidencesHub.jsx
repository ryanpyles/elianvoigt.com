import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TouShell, TouSection, TouPull } from '@/components/faust/TouLayout.jsx';
import { Crest } from '@/pages/TermsOfUnbeingPage.jsx';
import { ISBN, PAPERBACK_URL, ALSO_BY } from '@/data/termsOfUnbeingLore.js';

const ARTIFACTS = [
  { n: 'I', to: '/faust-luxury-residences/residents', title: 'Resident Directory', desc: 'Names, units, and the discrepancies between them.' },
  { n: 'II', to: '/faust-luxury-residences/lease', title: 'Lease Explorer', desc: 'The clauses that emerge, revise, and attach retroactively.' },
  { n: 'III', to: '/faust-luxury-residences/building', title: 'Building Directory', desc: 'Nine stories, the street is told. The receipt disagrees.' },
  { n: 'IV', to: '/faust-luxury-residences/tribunal', title: 'Tribunal Archive', desc: 'HOA Tribunal, Conference Room B. Now hearing.' },
];

export default function FaustResidencesHub() {
  const [open, setOpen] = useState(false);

  return (
    <TouShell
      title="Faust Luxury Residences"
      description="The official archive of Faust Luxury Residences — a Terms of Unbeing institution site."
      active="/faust-luxury-residences"
    >
      {/* Arrival */}
      <div className="tou-arrival" data-open={open}>
        <div className="tou-arrival-doors" aria-hidden="true">
          <div className="tou-arrival-door tou-arrival-door--l" />
          <div className="tou-arrival-door tou-arrival-door--r" />
        </div>
        <div className="tou-arrival-content">
          <p className="tou-arrival-mark tou-display">Faust</p>
          <p className="tou-arrival-mark tou-display" style={{ marginTop: '-1.2rem' }}>Luxury Residences</p>
          <p className="tou-arrival-sub tou-mono">Luxury Beyond Ownership.</p>
          <button type="button" className="tou-btn tou-btn--primary" onClick={() => setOpen(true)}>
            Enter
          </button>
        </div>
      </div>

      {/* Immersion */}
      <section className="tou-hero" id="lobby">
        <div className="tou-hero-copy">
          <p className="tou-eyebrow tou-brass">The Lobby</p>
          <h1 className="tou-title" style={{ fontSize: 'clamp(2.2rem,5.5vw,4.2rem)' }}>You are already expected.</h1>
          <p className="tou-epigraph">“Every listing is a diagnosis, and every collection has a price.”</p>
          <p className="tou-lede">
            Faust Luxury Residences rises nine stories in surgical white and black marble, every angle too
            deliberate, the pattern in the facade never repeating. The lobby doors are brass, heavy enough to
            imply terms. A woman works the coffee cart alone. She will tell you what happens at 6:17. Believe her.
          </p>
          <div className="tou-cta-row">
            <a href="#artifacts" className="tou-btn tou-btn--primary">Enter the archive</a>
            <Link to="/terms-of-unbeing" className="tou-btn tou-btn--ghost">Read the full listing</Link>
          </div>
        </div>
        <div className="tou-hero-art">
          <Crest className="tou-crest" />
        </div>
      </section>

      {/* Artifacts */}
      <TouSection id="artifacts" eyebrow="The Archive" heading="What the building has kept on record.">
        <div className="tou-artifact-grid">
          {ARTIFACTS.map((a) => (
            <Link key={a.to} to={a.to} className="tou-artifact-tile">
              <span className="tou-plaque-n">{a.n}</span>
              <h3>{a.title}</h3>
              <p className="tou-muted tou-sm">{a.desc}</p>
            </Link>
          ))}
        </div>
      </TouSection>

      {/* Story */}
      <TouSection id="listing" eyebrow="The Listing" heading="The only door in the city opened for him.">
        <p>
          Gideon Cross has three hundred dollars, an apartment with sweating walls, a landlord threatening removal,
          and a VA housing referral with a waiting list longer than the winter. He also has Arya.
        </p>
        <p>
          Then a rental listing appears for Unit 6A: art deco interiors, brass fixtures, impossible city views,
          utilities included, pets permitted, and rent set at $512 a month. The building does not screen applicants
          by income. It selects them by encumbrance.
        </p>
        <TouPull>“The building does not rent to the comfortable. The comfortable have nothing to pay with.”</TouPull>
      </TouSection>

      <TouSection eyebrow="The Portfolio" heading="Occupancy at one property constitutes occupancy at all.">
        <p>
          Faust Luxury Residences is not a single building. The lease identifies a broader portfolio governed by a
          unified Master Lease: Faust Luxury Residences at 617 Harrow Street, Faust Riverside, Faust on the Park,
          and the Faustian Meridian. The address at Harrow Street has previously existed as the Harrow Sanitarium,
          the Meridian Arms, and the Cross-Continental Temperance Hotel — each demolished and rebuilt on the same
          footprint without fully replacing what came before.
        </p>
        <TouPull>A tenant does not relocate. A tenant is redistributed.</TouPull>
      </TouSection>

      {/* Expansion */}
      <TouSection eyebrow="Expansion" heading="This archive is not complete.">
        <p>
          Records here are added as they are recovered. Elian Voigt’s other institutions remain open for
          inspection:
        </p>
        <ul className="tou-props tou-mono">
          {ALSO_BY.map(([t, id]) => (
            <li key={id}><Link to={`/catalogue/${id}`}>{t}</Link></li>
          ))}
        </ul>
        <p className="tou-crumb tou-mono" style={{ display: 'block', marginTop: '2rem' }}>
          <Link to="/faust-luxury-residences/6a">Additional records: Unit 6A — access restricted.</Link>
        </p>
      </TouSection>

      {/* Acquire */}
      <section className="tou-section tou-purchase" id="acquire">
        <div className="tou-wrap">
          <p className="tou-eyebrow tou-brass">Available Now</p>
          <h2 className="tou-h2">Review the terms before signing.</h2>
          <p className="tou-muted">Terms of Unbeing: A Faust Luxury Residences Novel is available in paperback.</p>
          <div className="tou-cta-row">
            <a href={PAPERBACK_URL} target="_blank" rel="noopener noreferrer" className="tou-btn tou-btn--primary">Buy the paperback</a>
            <Link to="/terms-of-unbeing#reviewers" className="tou-btn tou-btn--ghost">Request a review copy</Link>
          </div>
          <p className="tou-muted tou-sm" style={{ marginTop: '1rem' }}>Paperback ISBN {ISBN}</p>
        </div>
      </section>
    </TouShell>
  );
}
