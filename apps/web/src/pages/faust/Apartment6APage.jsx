import React from 'react';
import { TouShell, TouSection } from '@/components/faust/TouLayout.jsx';
import { APARTMENT_6A } from '@/data/termsOfUnbeingLore.js';

// Unlinked, reachable by URL only — same convention as VikamalArchivePage and
// the FieldNote004_* pages. One quiet crumb toward this page exists on the
// hub's Expansion section; it does not appear in TouSubnav or any index.

export default function Apartment6APage() {
  return (
    <TouShell
      title="Unit 6A — Reconstruction"
      description="A restricted reconstruction of Unit 6A, Faust Luxury Residences."
      active={null}
    >
      <TouSection eyebrow="Restricted Record" heading={APARTMENT_6A.heading}>
        <p className="tou-muted tou-sm" style={{ marginBottom: '2rem' }}>
          This record was not indexed. It is presented here without further comment.
        </p>
        <div className="tou-6a-room">
          <p>{APARTMENT_6A.intro}</p>
          <div className="tou-6a-beats">
            {APARTMENT_6A.beats.map((beat, i) => (
              <p key={i}>{beat}</p>
            ))}
          </div>
          <p className="tou-sharp tou-mono" style={{ fontSize: '1rem' }}>{APARTMENT_6A.closing}</p>
        </div>
      </TouSection>
    </TouShell>
  );
}
