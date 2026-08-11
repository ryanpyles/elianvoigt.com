import React from 'react';
import NewsletterForm from '@/components/NewsletterForm.jsx';
import { links } from '@/data/siteContent.js';

export default function NewsletterSection() {
  return (
    <section id="subscribe" className="scroll-mt-24 relative z-20 overflow-hidden py-28">
      <div
        className="ev-glow"
        aria-hidden="true"
        style={{ '--glow-x': '50%', '--glow-y': '50%', '--glow-size': '44rem', '--glow-color': 'var(--ev-gold)', '--glow-strength': '0.14' }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <span className="ev-eyebrow justify-center">Standing Subscription</span>
        <h2 className="mt-6 font-serif text-4xl md:text-5xl ink-bleed">
          Join the reader list
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-prose italic text-xl text-foreground/70">
          New books, recovered fragments, and field notes from the imprint — sent
          rarely, never forwarded, never sold. A quiet correspondence.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={links.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="ev-buy w-full max-w-sm justify-center"
          >
            Subscribe on Substack →
          </a>
          <span className="ev-catalog-no">or leave your details directly</span>
        </div>

        <div className="mt-8 border-t border-foreground/10 pt-10">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
