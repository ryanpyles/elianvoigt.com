import React from 'react';
import ArchivalMetadataDisplay from '@/components/ArchivalMetadataDisplay.jsx';
import { RETRIEVAL_TIERS } from '@/lib/ArchivalRetrievalSystem.js';

const TIER_MAP = {
  VERIFIED: RETRIEVAL_TIERS.VERIFIED_RETRIEVAL,
  PARTIAL: RETRIEVAL_TIERS.PARTIAL_RECOVERY,
  // ArchivalMetadataDisplay only renders `conflictingValues` when the tier is
  // UNSTABLE_SEQUENCE (its `isUnstable` check, not `isConflict`) — mapping to
  // that tier here, not REFERENTIAL_CONFLICT, is what actually surfaces both
  // of Okonkwo's unit numbers instead of silently showing just one.
  CONFLICT: RETRIEVAL_TIERS.UNSTABLE_SEQUENCE,
};

export default function ResidentCard({ resident }) {
  const tier = TIER_MAP[resident.tier] || RETRIEVAL_TIERS.VERIFIED_RETRIEVAL;

  return (
    <article className="tou-resident-card">
      <h3 className="tou-resident-name">{resident.name}</h3>
      <ArchivalMetadataDisplay
        tier={tier}
        label="Unit"
        value={resident.unit}
        conflictingValues={resident.conflictingValues || []}
      />
      <span className="tou-resident-tag">{resident.status} · {resident.tag}</span>
      <p className="tou-muted tou-sm">{resident.note}</p>
    </article>
  );
}
