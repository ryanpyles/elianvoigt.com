import React from 'react';
import { Link } from 'react-router-dom';
import { publishedWorks } from '@/data/catalogueData.js';
import { aboutShort, imprintNote, links, pressKit } from '@/data/siteContent.js';

function PressKit() {
  const covers = publishedWorks.slice(0, 6);
  const pressHref = `mailto:${links.pressEmail}?subject=${encodeURIComponent('Press / interview request — Elian Voigt')}`;
  const reviewHref = `mailto:${links.pressEmail}?subject=${encodeURIComponent('Review copy request — Elian Voigt')}`;

  return (
    <div className="ev-card flex h-full flex-col gap-7 p-10">
      <div className="flex items-center justify-between">
        <span className="ev-eyebrow">Press &amp; Review</span>
        <span className="ev-catalog-no">DOSSIER 04</span>
      </div>

      <p className="font-serif text-xl italic leading-relaxed text-foreground/80">
        {pressKit.oneLine}
      </p>

      <dl className="grid grid-cols-2 gap-x-6 gap-y-3">
        {pressKit.facts.map((f) => (
          <div key={f.k} className="border-t border-foreground/10 pt-2">
            <dt className="ev-catalog-no">{f.k}</dt>
            <dd className="font-serif text-sm text-foreground/85">{f.v}</dd>
          </div>
        ))}
      </dl>

      <div>
        <p className="ev-catalog-no mb-3">Cover plates (hi-res)</p>
        <div className="flex flex-wrap gap-2">
          {covers.map((b) => (
            <a
              key={b.id}
              href={b.coverImage}
              target="_blank"
              rel="noopener noreferrer"
              title={`${b.title} — cover`}
              className="block h-16 w-12 overflow-hidden border border-foreground/15 transition-colors hover:border-[hsl(var(--ev-gold))]"
            >
              <img src={b.coverImage} alt={`${b.title} cover`} className="h-full w-full object-cover" />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-2">
        <a href={reviewHref} className="ev-buy">Request review copy</a>
        <a href={pressHref} className="ev-buy ev-buy--ghost">Press &amp; interviews</a>
      </div>
    </div>
  );
}

export default function AboutAndPress() {
  return (
    <section id="about" className="scroll-mt-24 relative z-20 py-24">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-stretch">
        {/* About */}
        <div className="flex flex-col justify-center">
          <img
            src="/author/elian-voigt-glasses.png"
            alt="Elian Voigt"
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
            className="mb-8 w-52 max-w-full self-start object-contain mix-blend-multiply"
          />
          <span className="ev-eyebrow">The Author Identity</span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl ink-bleed">About Elian Voigt</h2>
          <div className="mt-7 space-y-5 max-w-xl font-serif text-lg leading-relaxed text-foreground/80">
            {aboutShort.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <p className="mt-8 ev-catalog-no italic">{imprintNote}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/about" className="ev-buy ev-buy--ghost">Full record →</Link>
            <a
              href={`mailto:${links.contactEmail}?subject=${encodeURIComponent('A note for Elian Voigt')}`}
              className="ev-buy ev-buy--ghost"
            >
              Contact the author
            </a>
          </div>
        </div>

        {/* Press kit */}
        <PressKit />
      </div>
    </section>
  );
}
