import React from 'react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card.jsx';

// Clauses that rewrite themselves (per the manuscript) get a palimpsest
// reveal instead of a plain tooltip: hover/focus scrapes the clause text
// away to expose its own annotation underneath, rather than layering on
// invented "prior wording" — the annotation is real, manuscript-sourced text.
function PalimpsestClause({ clause }) {
  return (
    <div className="tou-palimpsest" tabIndex={0}>
      <p className="tou-palimpsest-under">{clause.note}</p>
      <p className="tou-clause-rewrite tou-palimpsest-current">{clause.t}</p>
    </div>
  );
}

export default function ClauseRow({ clause }) {
  return (
    <div className="tou-clause-row tou-mono">
      <span className="tou-clause-n tou-brass">{clause.label}</span>
      {clause.rewrites ? (
        <PalimpsestClause clause={clause} />
      ) : (
        <HoverCard openDelay={120}>
          <HoverCardTrigger asChild>
            <p style={{ cursor: 'help' }}>
              {clause.t}
            </p>
          </HoverCardTrigger>
          <HoverCardContent
            className="bg-[#151517] border-[rgba(164,131,69,0.35)] text-[#E7E0D2]"
            style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '0.78rem', lineHeight: 1.6 }}
          >
            {clause.note}
          </HoverCardContent>
        </HoverCard>
      )}
    </div>
  );
}
