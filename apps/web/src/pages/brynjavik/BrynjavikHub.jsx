import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BrynjavikShell, BrynjavikSection } from '@/components/brynjavik/BrynjavikLayout.jsx';
import { BOOK, CHARACTERS, ALSO_BY, QUOTES } from '@/data/declensionsLore.js';

const ARTIFACTS = [
  { n: 'I', to: '/brynjavik/grammar', title: 'Grammar Archive', desc: 'The Seven Coastal Cases. Words the sea is and is not permitted to hear.' },
  { n: 'II', to: '/field-notes/vikamal-coastal-grammar', title: 'Field Notes', desc: 'The full Vikamál fragment system, case by case, note by note.' },
  { n: 'III', to: '/brynjavik/log', title: 'Coastal Log', desc: 'Locations, weather, and the incidents that followed misdeclension.' },
  { n: 'IV', to: '/archive/declensions-of-dark-water', title: 'Archive Record', desc: 'Recovered quotes and the municipal preservation note.' },
];

export default function BrynjavikHub() {
  return (
    <BrynjavikShell
      title="Brynjavík Field Station Archive"
      description="A field-station archive for the Vikamál dialect of Brynjavík, Iceland — a Declensions of Dark Water institution site."
      active="/brynjavik"
    >
      {/* Arrival — the manuscript restores itself, no click required */}
      <section className="brk-hero" style={{ paddingBottom: 0 }}>
        <div>
          <motion.p
            className="brk-eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            Field Station Record · Brynjavík, Iceland
          </motion.p>
          <motion.h1
            className="brk-title"
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
          >
            {BOOK.tagline}
          </motion.h1>
          <motion.p
            className="brk-epigraph"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.6 }}
          >
            {BOOK.taglineSub}
          </motion.p>
          <p className="brk-lede">
            Materials recovered from field notebooks, parish registers, linguistic surveys, and privately donated
            manuscripts document a coastal dialect governed by rules of avoidance, silence, and grammatical
            restraint. Certain place names have been withheld at the request of local authorities.
          </p>
          <div className="brk-cta-row">
            <a href="#artifacts" className="brk-btn brk-btn--primary">Enter the archive</a>
            <Link to="/catalogue/declensions-of-dark-water" className="brk-btn brk-btn--ghost">Read the full listing</Link>
          </div>
        </div>
      </section>

      {/* Immersion */}
      <BrynjavikSection eyebrow="Field Notebook" heading="He empties his mother’s flat the way he would open a site.">
        <p>
          Rowan Hale is fifty-five, a Cambridge linguist twenty-two years into a career describing suppressed
          grammatical categories. His mother died at seventy-seven without ever telling him where she was from.
          Under her bed he finds a biscuit tin: a sealed envelope marked <em>for E.B. only</em>, a photograph of a
          young woman on a shore of black rock inscribed only <em>Brynjavík</em>, and forty scraps of paper —
          hand-drilled grammar paradigms, torn along the same margin, forty times. Nominative. Accusative. Dative.
          Genitive. And then three more columns he does not recognize.
        </p>
        <blockquote className="brk-h2" style={{ fontStyle: 'italic', fontSize: '1.4rem', maxWidth: '60ch', borderLeft: '2px solid var(--brk-moss)', paddingLeft: '1.2rem' }}>
          He is very good at this. That is the thing he will think about later — that the whole apparatus of a
          career was available to him on the floor of his own front room.
        </blockquote>
        <p>
          He books a fieldwork grant on the north coast — a small parish, an unusually conservative dialect — and
          does not write down the real reason on the application.
        </p>
      </BrynjavikSection>

      {/* Artifacts */}
      <BrynjavikSection id="artifacts" eyebrow="The Archive" heading="What has been recovered so far.">
        <div className="brk-artifact-grid">
          {ARTIFACTS.map((a) => (
            <Link key={a.to} to={a.to} className="brk-artifact-tile">
              <span className="brk-plaque-n">{a.n}</span>
              <h3>{a.title}</h3>
              <p className="brk-muted brk-sm">{a.desc}</p>
            </Link>
          ))}
        </div>
      </BrynjavikSection>

      {/* Story */}
      <BrynjavikSection eyebrow="The Institute" heading="“The whole north-west is a museum of things that should have died in 1890.”">
        <p>
          Before the village, Reykjavík. Dr. Ragnheiður Ólafsdóttir has twice nearly secured mapping funding for
          the north coast and twice let it lapse. She does not ask why a Cambridge man wants a hundred-person
          parish. She tells him what she knows: the dialect is conservative, the retentions are real, and one
          family with a strong grandmother can carry a whole fjord’s worth of feature.
        </p>
        <p>She does not know his mother was one of them.</p>
        <div className="brk-quote-strip">
          {QUOTES.slice(0, 3).map((q) => <p key={q}>“{q}”</p>)}
        </div>
      </BrynjavikSection>

      <BrynjavikSection eyebrow="Persons of Record" heading="Named in the field notebook.">
        <div className="brk-grid brk-grid--3">
          {CHARACTERS.map((c) => (
            <article key={c.name} className="brk-card">
              <p className="brk-eyebrow" style={{ marginBottom: '0.4rem' }}>{c.role}</p>
              <h3 className="brk-card-title">{c.name}</h3>
              <p className="brk-muted brk-sm">{c.note}</p>
            </article>
          ))}
        </div>
      </BrynjavikSection>

      {/* Expansion */}
      <BrynjavikSection eyebrow="Expansion" heading="This archive is not complete.">
        <p>Other Elian Voigt institutions remain open for inspection:</p>
        <ul className="brk-mono" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '1.2rem' }}>
          {ALSO_BY.map(([t, id]) => (
            <li key={id} style={{ borderBottom: '1px solid rgba(27,28,26,0.14)', paddingBottom: '8px' }}>
              <Link to={`/catalogue/${id}`}>{t}</Link>
            </li>
          ))}
        </ul>
        <p className="brk-mono brk-sm brk-muted" style={{ marginTop: '2rem' }}>
          <Link to="/brynjavik/eighth-declension">Field note index references a Declension VIII. Record restricted.</Link>
        </p>
      </BrynjavikSection>

      {/* Acquire */}
      <section className="brk-section" id="acquire" style={{ borderTop: '1px solid rgba(27,28,26,0.1)' }}>
        <div className="brk-wrap">
          <p className="brk-eyebrow">Available Now</p>
          <h2 className="brk-h2">{BOOK.title}</h2>
          <p className="brk-muted" style={{ maxWidth: '60ch' }}>{BOOK.excerpt}</p>
          <div className="brk-cta-row">
            <a href={BOOK.paperback} target="_blank" rel="noopener noreferrer" className="brk-btn brk-btn--primary">Buy the paperback</a>
            <a href={BOOK.kindle} target="_blank" rel="noopener noreferrer" className="brk-btn brk-btn--ghost">Buy the Kindle edition</a>
          </div>
        </div>
      </section>
    </BrynjavikShell>
  );
}
