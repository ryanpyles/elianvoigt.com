import React from 'react';
import { TouShell, TouSection } from '@/components/faust/TouLayout.jsx';
import FloorRow from '@/components/faust/FloorRow.jsx';
import { FLOOR_DIRECTORY } from '@/data/termsOfUnbeingLore.js';

export default function BuildingBlueprintPage() {
  return (
    <TouShell
      title="Building Directory"
      description="Faust Luxury Residences building directory. Nine stories, the street is told. The receipt disagrees."
      active="/faust-luxury-residences/building"
    >
      <TouSection eyebrow="Record III" heading="Building Directory">
        <p className="tou-muted" style={{ maxWidth: '70ch' }}>
          The receipt is also a map. The directory prints itself floor by floor, in warm ink, a resort listing its
          features to a guest who is also the buffet. Nine stories is what it shows the street. What follows is
          what it shows a resident.
        </p>
        <div style={{ marginTop: '2rem' }}>
          {FLOOR_DIRECTORY.map((floor, i) => (
            <FloorRow key={floor.level + floor.name} floor={floor} index={i} />
          ))}
        </div>
      </TouSection>
    </TouShell>
  );
}
