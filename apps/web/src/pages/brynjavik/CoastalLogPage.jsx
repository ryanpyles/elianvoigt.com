import React from 'react';
import { BrynjavikShell, BrynjavikSection } from '@/components/brynjavik/BrynjavikLayout.jsx';
import LogEntry from '@/components/brynjavik/LogEntry.jsx';
import { LOCATIONS, WEATHER_LOG, TIMELINE } from '@/data/declensionsLore.js';

export default function CoastalLogPage() {
  return (
    <BrynjavikShell
      title="Coastal Log"
      description="Locations, weather events, and incident records for Brynjavík and the north coast."
      active="/brynjavik/log"
    >
      <BrynjavikSection eyebrow="Record III" heading="Locations">
        {LOCATIONS.map((loc, i) => (
          <LogEntry
            key={loc.name}
            index={i}
            label={loc.coordinates}
            title={`${loc.name} — ${loc.classification}`}
            note={`${loc.note} Instability index: ${loc.instability}.`}
          />
        ))}
      </BrynjavikSection>

      <BrynjavikSection eyebrow="Weather Correlation" heading="Weather events and the constructions that followed.">
        <p className="brk-muted" style={{ maxWidth: '68ch', marginBottom: '1rem' }}>
          Field station records pair recorded weather conditions with the grammatical constructions observed in
          the same window — a correlation the station has not explained and does not editorialize on.
        </p>
        {WEATHER_LOG.map((w, i) => (
          <LogEntry
            key={w.condition}
            index={i}
            label={`SEVERITY ${w.severity}`}
            title={w.condition}
            note={`${w.note}${w.linguisticEvents.length ? ' — ' + w.linguisticEvents.join('; ') : ''}`}
          />
        ))}
      </BrynjavikSection>

      <BrynjavikSection eyebrow="Incident Record" heading="Timeline.">
        {TIMELINE.map((t, i) => (
          <LogEntry
            key={t.title}
            index={i}
            label={`CONFIDENCE ${t.confidence}`}
            title={t.title}
            note={t.note}
            redacted={t.redacted}
          />
        ))}
      </BrynjavikSection>
    </BrynjavikShell>
  );
}
