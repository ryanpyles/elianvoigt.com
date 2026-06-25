import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { publishedWorks } from '@/data/catalogueData.js';
import { readingOrder } from '@/data/siteContent.js';

export default function ReadingOrder() {
  const rows = readingOrder
    .map((r) => ({ ...r, book: publishedWorks.find((b) => b.id === r.id) }))
    .filter((r) => r.book);

  return (
    <section id="reading-order" className="scroll-mt-24 relative z-20 py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-3 flex items-end justify-between">
          <span className="ev-eyebrow">Order of Retrieval</span>
          <span className="ev-catalog-no">Sequence disputed · do not normalize</span>
        </div>
        <h2 className="mb-2 font-serif text-3xl md:text-4xl">Where to begin reading</h2>
        <p className="mb-10 max-w-2xl font-serif italic text-foreground/60">
          A suggested path through the record. The books stand alone; the order is a courtesy, not a rule.
        </p>

        <div role="list">
          {rows.map((r, i) => (
            <motion.div
              role="listitem"
              key={r.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
            >
              <Link to={`/catalogue/${r.id}`} className="ev-ledger-row group block md:grid">
                <span className="font-serif text-2xl text-foreground/40 transition-colors group-hover:text-[hsl(var(--ev-gold))]">
                  {r.book.num}
                </span>
                <span className="min-w-0">
                  <span className="block font-serif text-xl leading-tight md:text-2xl">
                    {r.book.title}
                  </span>
                  <span className="mt-1 block font-serif italic text-foreground/55">
                    {r.note}
                  </span>
                </span>
                <span className="ev-catalog-no whitespace-nowrap self-center">
                  {r.book.status === 'In print' ? 'In print →' : 'Forthcoming'}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
