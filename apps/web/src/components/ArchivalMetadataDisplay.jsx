import React from 'react';
import { RETRIEVAL_TIERS } from '@/lib/ArchivalRetrievalSystem.js';

export default function ArchivalMetadataDisplay({ tier, label, value, conflictingValues = [] }) {
  const isUnstable = tier.name === RETRIEVAL_TIERS.UNSTABLE_SEQUENCE.name;
  const isConflict = tier.name === RETRIEVAL_TIERS.REFERENTIAL_CONFLICT.name;
  const isPartial = tier.name === RETRIEVAL_TIERS.PARTIAL_RECOVERY.name;

  let displayValue = value;

  if (isPartial && Math.random() > 0.7) {
    displayValue = Math.random() > 0.5 ? '[UNCERTAIN]' : '[UNAVAILABLE]';
  }

  if (isConflict && Math.random() > 0.5) {
    displayValue = '[DISPUTED]';
  }

  const flickerClass = (isUnstable || isConflict) ? 'animate-flicker-metadata' : '';

  return (
    <div className={`flex flex-col gap-1 font-mono text-[0.8rem] ${flickerClass}`}>
      <span className="opacity-60 uppercase tracking-widest">{label}</span>
      
      {isUnstable && conflictingValues.length > 0 ? (
        <span className="opacity-90">
          {conflictingValues.join(' / ')}
          <span className="block text-[0.65rem] opacity-50 mt-1">[ CLASSIFICATION CONFLICT ]</span>
        </span>
      ) : (
        <span className="opacity-90">{displayValue || '[UNAVAILABLE]'}</span>
      )}
    </div>
  );
}