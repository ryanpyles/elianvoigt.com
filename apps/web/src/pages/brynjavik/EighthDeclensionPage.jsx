import React from 'react';
import { BrynjavikShell, BrynjavikSection } from '@/components/brynjavik/BrynjavikLayout.jsx';

// Unlinked, reachable by URL only — same convention as the hidden Faust
// Luxury Residences /6a page. Field Note 004.25 ends with "See also:
// DECLENSION VIII [ACCESS RESTRICTED]" and 004.26 carries a hidden
// sys-meta line: "post-Eighth contamination protocols active." Rather than
// invent what an eighth case says — nothing in the manuscript or the
// existing field-note system resolves it — this page presents the
// restriction itself as the record.

export default function EighthDeclensionPage() {
  return (
    <BrynjavikShell
      title="Declension VIII — Restricted"
      description="Record for the eighth Vikamál case. Access restricted."
      active={null}
    >
      <BrynjavikSection eyebrow="Restricted Record" heading="Declension VIII">
        <p className="brk-muted brk-sm" style={{ marginBottom: '2rem' }}>
          This record was not indexed. It is presented here without further comment.
        </p>
        <div className="brk-restricted">
          <p className="brk-mono brk-sm" style={{ marginBottom: '1rem' }}>
            FIELD NOTE 004.25 — cross-reference: <em>See also: Declension VIII [ACCESS RESTRICTED]</em>
          </p>
          <p className="brk-mono brk-sm" style={{ marginBottom: '1.5rem' }}>
            [SYS_META_HIDDEN_BLOCK]: 0x228B. post-Eighth contamination protocols active.
          </p>
          <p style={{ maxWidth: '60ch' }}>
            No transcription of an eighth case exists in this archive. Seven cases have been recovered, glossed,
            and cross-referenced. An eighth is named only by its absence — in a cross-reference, in a corrupted
            system line, in the shape of a citation with nothing behind it.
          </p>
          <p className="brk-mono brk-sm brk-muted" style={{ marginTop: '1.5rem' }}>
            Status: UNRECOVERED. Do not request further access.
          </p>
        </div>
      </BrynjavikSection>
    </BrynjavikShell>
  );
}
