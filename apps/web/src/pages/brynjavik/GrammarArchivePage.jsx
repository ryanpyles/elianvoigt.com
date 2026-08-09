import React, { useMemo, useState } from 'react';
import { BrynjavikShell, BrynjavikSection } from '@/components/brynjavik/BrynjavikLayout.jsx';
import CaseCard from '@/components/brynjavik/CaseCard.jsx';
import { CASES, TABOO_RULES, SILENCE_RULES, TRANSLATION_INSTABILITY } from '@/data/declensionsLore.js';

export default function GrammarArchivePage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CASES;
    return CASES.filter((c) =>
      [c.name, c.english, c.rule, c.icelandic, c.translation].filter(Boolean).join(' ').toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <BrynjavikShell
      title="Grammar Archive"
      description="The Seven Coastal Cases of Vikamál — the Brynjavík dialect's ritual grammar system."
      active="/brynjavik/grammar"
    >
      <BrynjavikSection eyebrow="Record I" heading="Hin sjö strandföll — The Seven Coastal Cases">
        <p className="brk-muted" style={{ maxWidth: '70ch' }}>
          A conservative dialect on the north coast retains a case system found nowhere else recorded. Each case
          governs not meaning but relationship to the sea. Search by name, rule, or example.
        </p>
        <input
          type="search"
          className="brk-search"
          placeholder="Search the seven cases…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search grammar cases"
        />
        <div>
          {filtered.map((c) => <CaseCard key={c.n} caseData={c} />)}
          {filtered.length === 0 && <p className="brk-muted brk-sm" style={{ padding: '20px 0' }}>No matching cases on file.</p>}
        </div>
      </BrynjavikSection>

      <BrynjavikSection eyebrow="Translation Instability" heading={`No single translation of “${TRANSLATION_INSTABILITY.word}” has been accepted.`}>
        <div className="brk-grid brk-grid--2">
          {TRANSLATION_INSTABILITY.entries.map((e) => (
            <div key={e.translation} className="brk-card">
              <p className="brk-card-title" style={{ fontStyle: 'italic' }}>{e.translation}</p>
              <p className="brk-mono brk-sm brk-muted">Certainty: {e.certainty}%</p>
            </div>
          ))}
        </div>
      </BrynjavikSection>

      <BrynjavikSection eyebrow="Bannreglur" heading="Taboo rules.">
        <ol className="brk-prose" style={{ paddingLeft: '1.2rem' }}>
          {TABOO_RULES.map((r) => <li key={r} style={{ marginBottom: '0.9rem', maxWidth: '68ch' }}>{r}</li>)}
        </ol>
      </BrynjavikSection>

      <BrynjavikSection eyebrow="Silence as Syntax" heading="What a pause means.">
        <ul className="brk-prose" style={{ paddingLeft: '1.2rem' }}>
          {SILENCE_RULES.map((r) => <li key={r} style={{ marginBottom: '0.9rem', maxWidth: '68ch' }}>{r}</li>)}
        </ul>
      </BrynjavikSection>
    </BrynjavikShell>
  );
}
