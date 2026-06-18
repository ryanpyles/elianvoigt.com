import React from 'react';

export default function ArchiveQuoteFragment({ quote, department }) {
  return (
    <div className={`p-6 border border-border/30 mb-6 ${department === 'forensic' ? 'bg-white dark:bg-black shadow-sm' : 'bg-muted/10'}`}>
      <div className="font-mono text-[10px] text-muted-foreground mb-4 uppercase tracking-widest opacity-60">
        FRAGMENT RECOVERY // {quote.classification || 'UNCLASSIFIED'}
      </div>
      <blockquote className="font-serif text-xl italic mb-4">
        "{quote.quoteText}"
      </blockquote>
      <div className="font-mono text-xs text-muted-foreground space-y-1">
        <p><span className="opacity-50">ANALYSIS:</span> {quote.whyItWorks}</p>
        <p><span className="opacity-50">APPLICATION:</span> {quote.bestUse}</p>
      </div>
    </div>
  );
}