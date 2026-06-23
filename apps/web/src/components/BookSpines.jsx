import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { publishedWorks } from '@/data/catalogueData.js';
import { localCover } from '@/data/siteContent.js';

// The six in-print records, in catalogue order.
const records = publishedWorks.filter((w) => w.status === 'In print');

// Muted, archival-toned accents — the Canal Street colour-bar idea,
// desaturated to sit inside the ink-on-cream palette.
const accents = [
  '38 52% 46%', // I   — ochre
  '8 48% 46%',  // II  — oxblood
  '210 32% 46%', // III — slate blue
  '150 24% 38%', // IV  — sage
  '45 48% 48%',  // V   — muted gold
  '282 22% 46%', // VI  — plum
];

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

function Spine({ book, index, isActive, onSelect }) {
  const accent = accents[index % accents.length];

  return (
    <div
      onClick={() => onSelect(book.id)}
      style={{
        flexGrow: isActive ? 1 : 0,
        flexBasis: '76px',
        flexShrink: 0,
        transition: `flex-grow 0.7s ${EASE}`,
        '--accent': accent,
      }}
      className={`group relative h-full min-w-[76px] cursor-pointer overflow-hidden border-r border-border/40 last:border-r-0 ${
        isActive ? '' : 'hover:bg-foreground/[0.03]'
      }`}
      aria-expanded={isActive}
    >
      {/* Accent edge — the book's "spine colour" */}
      <span
        className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[3px]"
        style={{ backgroundColor: 'hsl(var(--accent))' }}
      />

      {/* ---- Collapsed spine ---- */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-between py-6 transition-opacity duration-300 ${
          isActive ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <span
          className="font-mono text-xs tracking-widest"
          style={{ color: 'hsl(var(--accent))' }}
        >
          {book.num}
        </span>

        <span
          className="font-serif text-base tracking-wide text-foreground/80 transition-colors group-hover:text-foreground"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          {book.title}
        </span>

        <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-muted-foreground/50">
          {book.id.slice(0, 3).toUpperCase()}
        </span>
      </div>

      {/* ---- Opened "spread" ---- */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, rotateY: -14 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'left center', perspective: 1200 }}
            className="absolute inset-0 flex flex-col items-stretch overflow-hidden md:flex-row"
          >
            {/* Ink illustration as a faint archival backdrop */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply"
              style={{
                backgroundImage: `url(${localCover(book.id)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 55%)',
                maskImage: 'linear-gradient(to right, transparent, black 55%)',
              }}
            />

            {/* Cover (actual book cover) */}
            <div className="relative z-10 flex h-44 shrink-0 items-center justify-center bg-foreground/[0.04] p-6 md:h-full md:w-[42%]">
              <img
                src={book.coverImage}
                alt={`${book.title} cover`}
                className="h-full w-auto max-w-full object-contain shadow-[0_8px_40px_rgba(0,0,0,0.25)]"
              />
            </div>

            {/* Text */}
            <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center gap-5 overflow-y-auto px-7 py-8 md:px-10">
              <div className="flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                <span style={{ color: 'hsl(var(--accent))' }}>Record {book.num}</span>
                <span className="h-px flex-1 bg-border/60" />
                <span>{book.status}</span>
              </div>

              <h3 className="ink-bleed font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
                {book.title}
              </h3>

              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {book.genre}
              </p>

              <p className="max-w-prose font-serif text-base italic leading-relaxed text-foreground/75">
                {book.description}
              </p>

              <Link to={`/catalogue/${book.id}`} className="ghost-button mt-2 w-fit">
                Examine Record →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function BookSpines() {
  // Null = all spines stacked on the right, nothing opened yet.
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => setActiveId((cur) => (cur === id ? null : id));

  return (
    <div className="flex h-[68vh] min-h-[480px] w-full overflow-hidden border border-border/40 bg-muted/[0.04]">
      {/* Empty left mat that collapses away once a record is opened,
          letting the closed spines sit stacked on the right to start. */}
      <div
        style={{
          flexGrow: activeId === null ? 1 : 0,
          flexBasis: 0,
          transition: `flex-grow 0.7s ${EASE}`,
        }}
        className="flex min-w-0 items-center justify-center overflow-hidden"
      >
        <p
          className={`whitespace-nowrap px-8 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground/50 transition-opacity duration-300 ${
            activeId === null ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Select a record to open
        </p>
      </div>

      {records.map((book, i) => (
        <Spine
          key={book.id}
          book={book}
          index={i}
          isActive={activeId === book.id}
          onSelect={toggle}
        />
      ))}
    </div>
  );
}

export default BookSpines;
