import React from 'react';
import { motion } from 'framer-motion';
import { fragments, praise } from '@/data/siteContent.js';

// Ink memory: a word the record no longer keeps, left as a stain behind the
// first word of each fragment — decorative archival texture, not a claim
// about manuscript content (same category as the site's other invented
// archive chrome, e.g. "ARCHIVE STATUS: PARTIAL RELEASE").
const ERASED_WORDS = {
  'Feast of the Broadcast Saints': 'witness',
  'What Survives Is Proof': 'her',
  'Declensions of Dark Water': 'name',
  'Terms of Unbeing': 'self',
  'Summer of the Glass Bees': 'grief',
  'The Quiet Metric': 'silence',
};

function QuoteWithMemory({ quote, source }) {
  const erased = ERASED_WORDS[source];
  const spaceIndex = quote.indexOf(' ');
  if (!erased || spaceIndex === -1) return quote;
  const firstWord = quote.slice(0, spaceIndex);
  const rest = quote.slice(spaceIndex);
  return (
    <>
      <span className="ev-ink-memory" data-erased={erased}><span>{firstWord}</span></span>
      {rest}
    </>
  );
}

export default function Fragments() {
  return (
    <section id="fragments" className="scroll-mt-24 relative z-20 overflow-hidden py-28 bg-foreground/[0.02] border-y border-foreground/10">
      <div
        className="ev-glow"
        aria-hidden="true"
        style={{ '--glow-x': '50%', '--glow-y': '0%', '--glow-size': '50rem', '--glow-color': 'var(--ev-gold)', '--glow-strength': '0.12' }}
      />
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-12">
        <div className="mb-14 text-center">
          <span className="ev-eyebrow justify-center">Fragments from the Record</span>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
          {fragments.map((f, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.08 }}
              className="relative pl-8"
            >
              <span className="ev-gold absolute -left-1 -top-3 font-serif text-7xl leading-none opacity-30">“</span>
              <blockquote className="ev-fragment relative text-2xl md:text-[1.7rem]">
                <QuoteWithMemory quote={f.quote} source={f.source} />
              </blockquote>
              <figcaption className="ev-catalog-no mt-4">— {f.source}</figcaption>
            </motion.figure>
          ))}
        </div>

        {praise.length > 0 && (
          <div className="mx-auto mt-20 max-w-3xl border-t border-foreground/10 pt-10 text-center">
            <p className="ev-catalog-no mb-6">Advance praise</p>
            <div className="flex flex-col gap-5">
              {praise.map((p, i) => (
                <p key={i} className="font-prose italic text-lg text-foreground/70">
                  “{p.quote}” <span className="ev-catalog-no not-italic">— {p.source}</span>
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
