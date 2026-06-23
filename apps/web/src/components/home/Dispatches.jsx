import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { links } from '@/data/siteContent.js';

function formatDate(s) {
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function Dispatches() {
  const [state, setState] = useState({ status: 'loading', items: [] });

  useEffect(() => {
    let alive = true;
    fetch('/api/substack')
      .then((r) => r.json())
      .then((data) => {
        if (!alive) return;
        const items = (data && data.items) || [];
        setState({ status: items.length ? 'ready' : 'empty', items: items.slice(0, 3) });
      })
      .catch(() => alive && setState({ status: 'empty', items: [] }));
    return () => {
      alive = false;
    };
  }, []);

  return (
    <section id="dispatches" className="scroll-mt-24 relative z-20 py-24">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-foreground/15 pb-6">
          <div>
            <span className="ev-eyebrow">From the Newsletter</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">Recent Dispatches</h2>
          </div>
          <a
            href={links.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="ev-catalog-no underline-offset-4 hover:text-foreground hover:underline"
          >
            All dispatches on Substack →
          </a>
        </div>

        {state.status === 'loading' && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="ev-card h-56 animate-pulse p-8" />
            ))}
          </div>
        )}

        {state.status === 'ready' && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {state.items.map((post, i) => (
              <motion.a
                key={post.link || i}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="ev-card group flex flex-col gap-4 p-8"
              >
                <span className="ev-catalog-no">{formatDate(post.pubDate)}</span>
                <h3 className="font-serif text-2xl leading-tight transition-colors group-hover:text-[hsl(var(--ev-blood))]">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="font-serif text-sm italic leading-relaxed text-foreground/65 line-clamp-4">
                    {post.excerpt}
                  </p>
                )}
                <span className="ev-catalog-no mt-auto ev-gold">Read on Substack →</span>
              </motion.a>
            ))}
          </div>
        )}

        {state.status === 'empty' && (
          <div className="ev-card flex flex-col items-center gap-5 p-12 text-center">
            <p className="font-serif text-xl italic text-foreground/70">
              New dispatches from the imprint will appear here as they are published.
            </p>
            <a href={links.substack} target="_blank" rel="noopener noreferrer" className="ev-buy">
              Read &amp; subscribe on Substack →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
