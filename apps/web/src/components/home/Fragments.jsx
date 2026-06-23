import React from 'react';
import { motion } from 'framer-motion';
import { fragments, praise } from '@/data/siteContent.js';

export default function Fragments() {
  return (
    <section id="fragments" className="scroll-mt-24 relative z-20 py-28 bg-foreground/[0.02] border-y border-foreground/10">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
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
              <span className="ev-gold absolute left-0 top-0 font-serif text-4xl leading-none">“</span>
              <blockquote className="ev-fragment text-2xl md:text-[1.7rem]">
                {f.quote}
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
                <p key={i} className="font-serif italic text-foreground/70">
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
