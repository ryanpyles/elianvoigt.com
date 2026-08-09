import React from 'react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card.jsx';

export default function ClauseRow({ clause }) {
  return (
    <div className="tou-clause-row tou-mono">
      <span className="tou-clause-n tou-brass">{clause.label}</span>
      <HoverCard openDelay={120}>
        <HoverCardTrigger asChild>
          <p className={clause.rewrites ? 'tou-clause-rewrite' : undefined} style={{ cursor: 'help' }}>
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
    </div>
  );
}
