// Archival Retrieval System Utility Module

export const RETRIEVAL_TIERS = {
  VERIFIED_RETRIEVAL: {
    name: 'VERIFIED RETRIEVAL',
    opacity: 'var(--tier-verified)',
    fontSize: '1rem',
    lineHeight: '1.6',
    padding: '1.5rem',
    borderLeft: '2px solid hsla(var(--foreground) / 0.2)'
  },
  PARTIAL_RECOVERY: {
    name: 'PARTIAL RECOVERY',
    opacity: 'var(--tier-partial)',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    padding: '1.25rem',
    borderLeft: '1px solid hsla(var(--foreground) / 0.15)'
  },
  UNSTABLE_SEQUENCE: {
    name: 'UNSTABLE SEQUENCE',
    opacity: 'var(--tier-unstable)',
    fontSize: '0.9rem',
    lineHeight: '1.4',
    padding: '1rem',
    borderLeft: '1px dashed hsla(var(--foreground) / 0.2)'
  },
  REFERENTIAL_CONFLICT: {
    name: 'REFERENTIAL CONFLICT',
    opacity: 'var(--tier-conflict)',
    fontSize: '0.85rem',
    lineHeight: '1.3',
    padding: '0.75rem',
    borderLeft: '1px dotted hsla(var(--foreground) / 0.3)'
  }
};

export const RETRIEVAL_MODES = [
  { id: 'STABLE', label: 'Stable Records' },
  { id: 'FRAGMENTARY', label: 'Fragmentary Recoveries' },
  { id: 'HOLDS', label: 'Linguistic Holds' },
  { id: 'MUNICIPAL', label: 'Municipal Releases' },
  { id: 'CONTESTED', label: 'Contested Materials' }
];

export const ACCESS_CONTEXTS = [
  { id: 'RECENT', label: 'Recently Restored' },
  { id: 'PENDING', label: 'Pending Verification' },
  { id: 'RELEASED', label: 'Released Following Review' },
  { id: 'CROSS_REF', label: 'Cross-Referenced During Third Restoration' }
];

// Cache to persist generated anomalies across navigation
let cachedAnomalies = new Map();
let cachedContamination = new Map();
let cachedShadowRecords = null;

export function getTierForNote(note) {
  if (note.retrievalTier && RETRIEVAL_TIERS[note.retrievalTier]) {
    return RETRIEVAL_TIERS[note.retrievalTier];
  }
  
  // Fallback logic based on status/classification
  if (note.status === 'RESTRICTED' || note.classification?.includes('CONFLICT')) {
    return RETRIEVAL_TIERS.REFERENTIAL_CONFLICT;
  }
  if (note.status === 'PARTIAL' || note.classification?.includes('PROCESS')) {
    return RETRIEVAL_TIERS.PARTIAL_RECOVERY;
  }
  if (note.status === 'UNTRANSLATED' || note.classification?.includes('HOLD')) {
    return RETRIEVAL_TIERS.UNSTABLE_SEQUENCE;
  }
  return RETRIEVAL_TIERS.VERIFIED_RETRIEVAL;
}

export function generateTemporalAnomalies(notes) {
  if (cachedAnomalies.size > 0) return cachedAnomalies;
  
  notes.forEach((note, index) => {
    if (Math.random() < 0.1) {
      const types = ['Reversed Chronology', 'Recovered After Citation', 'Future Classification Reference'];
      cachedAnomalies.set(note.id, {
        type: types[Math.floor(Math.random() * types.length)],
        description: 'Temporal sequence mismatch detected during archival ingestion.',
        dates: ['2008', '2015', '2023']
      });
    }
  });
  return cachedAnomalies;
}

export function generateCrossContamination(notes) {
  if (cachedContamination.size > 0) return cachedContamination;
  
  notes.forEach((note, index) => {
    if (Math.random() < 0.05 && notes.length > 1) {
      const otherNote = notes[(index + 1) % notes.length];
      cachedContamination.set(note.id, {
        type: 'Shared Phrase',
        relatedNoteId: otherNote.id,
        phrase: 'The sea kept the parts grammar could not.',
        restorationId: `REST-${Math.floor(Math.random() * 10000)}`
      });
    }
  });
  return cachedContamination;
}

export function generateShadowRecords(count) {
  if (cachedShadowRecords) return cachedShadowRecords;
  
  const statuses = ['MUNICIPAL HOLD', 'ACCESS RESTRICTED', 'WITHHELD', 'REMOVED FOLLOWING REVIEW'];
  const records = [];
  
  for (let i = 0; i < count; i++) {
    records.push({
      id: `shadow-${i}`,
      shadowRecordStatus: statuses[Math.floor(Math.random() * statuses.length)],
      shadowRecordReason: 'Procedural containment protocol active.',
      shadowRecordRemovalDate: `20${Math.floor(Math.random() * 15 + 10)}-0${Math.floor(Math.random() * 8 + 1)}-1${Math.floor(Math.random() * 8 + 1)}`,
      isShadow: true
    });
  }
  
  cachedShadowRecords = records;
  return records;
}