import React, { useMemo, useState } from 'react';
import { TouShell, TouSection } from '@/components/faust/TouLayout.jsx';
import ResidentCard from '@/components/faust/ResidentCard.jsx';
import { RESIDENTS } from '@/data/termsOfUnbeingLore.js';

export default function ResidentDirectoryPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return RESIDENTS;
    return RESIDENTS.filter((r) =>
      [r.name, r.unit, r.status, r.tag, r.note].join(' ').toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <TouShell
      title="Resident Directory"
      description="Faust Luxury Residences resident directory — names, units, and the discrepancies between them."
      active="/faust-luxury-residences/residents"
    >
      <TouSection eyebrow="Record I" heading="Resident Directory">
        <p className="tou-muted" style={{ maxWidth: '70ch' }}>
          Compiled from occupancy records and firsthand accounts. Some fields could not be verified. Where the
          building’s own records disagree with each other, both values are shown.
        </p>
        <input
          type="search"
          className="tou-search"
          placeholder="Search by name, unit, or status…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search resident directory"
        />
        <div className="tou-grid tou-grid--3">
          {filtered.map((resident) => (
            <ResidentCard key={resident.name} resident={resident} />
          ))}
          {filtered.length === 0 && (
            <p className="tou-muted tou-sm">No matching records. The building may be withholding them.</p>
          )}
        </div>
      </TouSection>
    </TouShell>
  );
}
