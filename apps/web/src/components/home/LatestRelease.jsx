import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { publishedWorks } from '@/data/catalogueData.js';
import { buyLinks, links, latestReleaseId, localCover, featuredCover, dedicatedPages, excerptPages } from '@/data/siteContent.js';

function BuyRow({ id, children }) {
  const l = buyLinks[id] || {};
  const formats = [
    ['Paperback', l.paperback],
    ['Kindle', l.kindle],
    ['Hardcover', l.hardcover],
  ].filter(([, url]) => url);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {formats.map(([label, url]) => (
        <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="ev-buy">
          {label}
        </a>
      ))}
      {children}
    </div>
  );
}

export default function LatestRelease() {
  const book = publishedWorks.find((b) => b.id === latestReleaseId) || publishedWorks[0];
  const reviewHref = `mailto:${links.pressEmail}?subject=${encodeURIComponent(
    `Review copy request — ${book.title}`,
  )}`;

  return (
    <section id="latest" className="scroll-mt-24 relative z-20 py-24">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <div className="mb-12 flex items-center justify-between">
          <span className="ev-eyebrow">Latest Acquisition</span>
          <span className="ev-catalog-no">REC {book.num} / IN PRINT</span>
        </div>

        <div className="ev-card relative grid grid-cols-1 gap-0 overflow-hidden md:grid-cols-12">
          {/* Ink illustration as a faint archival backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
            style={{
              backgroundImage: `url(${localCover(book.id)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'right center',
              WebkitMaskImage: 'linear-gradient(to left, transparent, black 60%)',
              maskImage: 'linear-gradient(to left, transparent, black 60%)',
            }}
          />

          {/* Cover (actual book cover) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="relative z-10 md:col-span-5 flex items-center justify-center border-b border-foreground/10 bg-foreground/[0.03] p-10 md:border-b-0 md:border-r"
          >
            <img
              src={featuredCover(book.id) || book.coverImage}
              loading="eager"
              alt={`${book.title} — cover`}
              className="w-auto max-h-[32rem] max-w-full object-contain shadow-[0_30px_70px_-30px_hsl(var(--ev-ink)/0.7)]"
            />
          </motion.div>

          {/* Detail */}
          <div className="relative z-10 md:col-span-7 flex flex-col justify-center gap-7 p-10 md:p-14">
            <div className="flex items-center gap-4">
              <span className="ev-seal ev-drift shrink-0">
                E · V
                <br />· {book.num} ·
              </span>
              <div className="ev-catalog-no leading-relaxed">
                Record {book.num}
                <br />
                {book.genre}
              </div>
            </div>

            <h2 className="ink-bleed font-serif text-4xl leading-[1.05] md:text-6xl">
              {book.title}
            </h2>

            <p className="max-w-xl font-prose text-xl italic leading-relaxed text-foreground/75">
              {book.description}
            </p>

            <div className="space-y-4 pt-2">
              <BuyRow id={book.id}>
                {dedicatedPages[book.id] ? (
                  <Link to={dedicatedPages[book.id]} className="ev-buy ev-buy--ghost">
                    Enter the full dossier →
                  </Link>
                ) : (
                  <Link to={excerptPages[book.id] || `/catalogue/${book.id}`} className="ev-buy ev-buy--ghost">
                    Read an excerpt
                  </Link>
                )}
              </BuyRow>
              <a href={reviewHref} className="ev-catalog-no block underline-offset-4 hover:text-foreground hover:underline">
                Request a review copy →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
