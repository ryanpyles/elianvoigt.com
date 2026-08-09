import React, { useMemo, useState } from 'react';
import { TouShell, TouSection } from '@/components/faust/TouLayout.jsx';
import ClauseRow from '@/components/faust/ClauseRow.jsx';
import { FULL_CLAUSES } from '@/data/termsOfUnbeingLore.js';

export default function LeaseExplorerPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return FULL_CLAUSES;
    return FULL_CLAUSES.filter((c) =>
      [c.label, c.t, c.note].join(' ').toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <TouShell
      title="Lease Explorer"
      description="Faust Luxury Residences Master Lease — searchable clauses. Hover a clause for commentary."
      active="/faust-luxury-residences/lease"
    >
      <TouSection eyebrow="Record II" heading="Lease Explorer">
        <p className="tou-muted" style={{ maxWidth: '70ch' }}>
          The lease governing Unit 6A is a local instrument of the Faust Master Lease. Its clauses can emerge,
          disappear, revise themselves, and attach retroactively. Hover a clause for the notation attached to it.
        </p>
        <input
          type="search"
          className="tou-search"
          placeholder="Search clauses…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search lease clauses"
        />
        <div className="tou-clauses" style={{ marginTop: 0 }}>
          {filtered.map((clause) => (
            <ClauseRow key={clause.n} clause={clause} />
          ))}
          {filtered.length === 0 && (
            <p className="tou-muted tou-sm" style={{ padding: '20px 0' }}>No matching clauses on file.</p>
          )}
        </div>
      </TouSection>
    </TouShell>
  );
}
