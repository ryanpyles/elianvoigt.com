import React from 'react';
import { TouShell, TouSection } from '@/components/faust/TouLayout.jsx';
import { Accordion } from '@/components/ui/accordion.jsx';
import TribunalCaseItem from '@/components/faust/TribunalCaseItem.jsx';
import { TRIBUNAL_CASES } from '@/data/termsOfUnbeingLore.js';

export default function TribunalArchivePage() {
  return (
    <TouShell
      title="Tribunal Archive"
      description="Faust Luxury Residences HOA Tribunal, Conference Room B. Docket and case archive."
      active="/faust-luxury-residences/tribunal"
    >
      <TouSection eyebrow="Record IV" heading="Tribunal Archive">
        <p className="tou-muted" style={{ maxWidth: '70ch', marginBottom: '1rem' }}>
          HOA TRIBUNAL: CONFERENCE ROOM B, second floor. A wall-mounted board never empties. Now hearing.
          Precedent controls. All appeals final.
        </p>
        <Accordion type="single" collapsible className="w-full" style={{ borderTop: '1px solid rgba(164,131,69,0.16)' }}>
          {TRIBUNAL_CASES.map((tribunalCase) => (
            <TribunalCaseItem key={tribunalCase.docket} tribunalCase={tribunalCase} />
          ))}
        </Accordion>
      </TouSection>
    </TouShell>
  );
}
