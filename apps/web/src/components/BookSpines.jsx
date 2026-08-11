import React, { useState, useEffect } from 'react';
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

/* ------------------------------- Desktop ------------------------------- */

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
      <span
        className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[3px]"
        style={{ backgroundColor: 'hsl(var(--accent))' }}
      />

      {/* Collapsed spine */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-between py-6 transition-opacity duration-300 ${
          isActive ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <span className="font-mono text-xs tracking-widest" style={{ color: 'hsl(var(--accent))' }}>
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

      {/* Opened spread */}
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
            <div className="relative z-10 flex h-44 shrink-0 items-center justify-center bg-foreground/[0.04] p-6 md:h-full md:w-[42%]">
              <img
                src={book.coverImage}
                alt={`${book.title} cover`}
                className="h-full w-auto max-w-full object-contain shadow-[0_8px_40px_rgba(0,0,0,0.25)]"
              />
            </div>
            <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center gap-5 overflow-y-auto px-7 py-8 md:px-10">
              <div className="flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                <span style={{ color: 'hsl(var(--accent))' }}>Record {book.num}</span>
                <span className="h-px flex-1 bg-border/60" />
                <span>{book.status}</span>
              </div>
              <h3 className="ink-bleed font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">{book.title}</h3>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{book.genre}</p>
              <p className="max-w-prose font-prose text-lg italic leading-relaxed text-foreground/75">{book.description}</p>
              <Link to={`/catalogue/${book.id}`} className="ghost-button mt-2 w-fit">Examine Record →</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------- Mobile -------------------------------- */

function MobileSpine({ book, index, onSelect }) {
  const accent = accents[index % accents.length];
  return (
    <button
      type="button"
      onClick={() => onSelect(book.id)}
      style={{ '--accent': accent }}
      className="relative h-full min-w-[76px] shrink-0 snap-start overflow-hidden border-r border-border/40 text-left last:border-r-0 active:bg-foreground/[0.04]"
      aria-label={`Open ${book.title}`}
    >
      <span className="pointer-events-none absolute left-0 top-0 h-full w-[3px]" style={{ backgroundColor: 'hsl(var(--accent))' }} />
      <span className="absolute inset-0 flex flex-col items-center justify-between py-6">
        <span className="font-mono text-xs tracking-widest" style={{ color: 'hsl(var(--accent))' }}>{book.num}</span>
        <span className="font-serif text-base tracking-wide text-foreground/80" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          {book.title}
        </span>
        <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-muted-foreground/50">{book.id.slice(0, 3).toUpperCase()}</span>
      </span>
    </button>
  );
}

function MobileCard({ book, accent, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} aria-hidden />

      <motion.div
        className="absolute inset-x-0 bottom-0 top-[6vh] flex flex-col overflow-hidden rounded-t-2xl border border-border/40 bg-background shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.5)]"
        style={{ '--accent': accent }}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 32 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.5 }}
        onDragEnd={(e, info) => {
          if (info.offset.y > 110 || info.velocity.y > 500) onClose();
        }}
        role="dialog"
        aria-modal="true"
        aria-label={book.title}
      >
        <span className="absolute left-0 top-0 z-10 h-1 w-full" style={{ backgroundColor: 'hsl(var(--accent))' }} />

        {/* Grabber + close */}
        <div className="relative shrink-0 pt-3">
          <span className="mx-auto block h-1.5 w-10 rounded-full bg-foreground/20" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-2 flex h-9 w-9 items-center justify-center rounded-full border border-border/40 font-mono text-lg text-muted-foreground active:bg-foreground/5"
          >
            ×
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 pb-10 pt-2">
          <div className="flex justify-center py-4">
            <img
              src={book.coverImage}
              alt={`${book.title} cover`}
              className="max-h-[40vh] w-auto object-contain shadow-[0_16px_50px_-20px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div className="mt-2 flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
            <span style={{ color: 'hsl(var(--accent))' }}>Record {book.num}</span>
            <span className="h-px flex-1 bg-border/60" />
            <span>{book.status}</span>
          </div>
          <h3 className="ink-bleed mt-4 font-serif text-3xl leading-tight">{book.title}</h3>
          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">{book.genre}</p>
          <p className="mt-4 font-prose text-lg italic leading-relaxed text-foreground/75">{book.description}</p>
          <Link to={`/catalogue/${book.id}`} className="ghost-button mt-6 inline-block">Examine Record →</Link>
          <p className="mt-8 text-center font-mono text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground/50">
            Swipe down to close
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------- Root ---------------------------------- */

function BookSpines() {
  const [activeId, setActiveId] = useState(null);
  const toggle = (id) => setActiveId((cur) => (cur === id ? null : id));

  const activeIndex = records.findIndex((b) => b.id === activeId);
  const activeBook = activeIndex >= 0 ? records[activeIndex] : null;

  // Lock body scroll while the mobile card is open.
  useEffect(() => {
    if (!activeId) return;
    const mobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;
    if (!mobile) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [activeId]);

  return (
    <>
      {/* Desktop — horizontal accordion */}
      <div className="hidden h-[68vh] min-h-[480px] w-full overflow-hidden border border-border/40 bg-muted/[0.04] md:flex">
        <div
          style={{ flexGrow: activeId === null ? 1 : 0, flexBasis: 0, transition: `flex-grow 0.7s ${EASE}` }}
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
          <Spine key={book.id} book={book} index={i} isActive={activeId === book.id} onSelect={toggle} />
        ))}
      </div>

      {/* Mobile — scrollable shelf; tap opens a card */}
      <div className="md:hidden">
        <div className="flex h-[52vh] min-h-[340px] w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain border border-border/40 bg-muted/[0.04]">
          {records.map((book, i) => (
            <MobileSpine key={book.id} book={book} index={i} onSelect={setActiveId} />
          ))}
        </div>
        <p className="mt-3 text-center font-mono text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground/50">
          Tap a spine · swipe the shelf to browse
        </p>
      </div>

      {activeBook && (
        <MobileCard
          key={activeBook.id}
          book={activeBook}
          accent={accents[activeIndex % accents.length]}
          onClose={() => setActiveId(null)}
        />
      )}
    </>
  );
}

export default BookSpines;
