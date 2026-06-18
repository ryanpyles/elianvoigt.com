import React from 'react';
import { motion } from 'framer-motion';

function FieldNoteCard({ title, category, excerpt, index = 0, date, refCode }) {
  // Density variations
  const isDense = index % 3 === 0;
  const isSparse = index % 4 === 0 && !isDense;
  
  const paddingClass = isSparse ? 'p-8 md:p-12' : isDense ? 'p-4 md:p-6' : 'p-6 md:p-8';
  const gapClass = isSparse ? 'mb-8' : isDense ? 'mb-4' : 'mb-6';
  const textClass = isDense ? 'text-[0.95rem] leading-[1.4]' : isSparse ? 'text-base leading-[1.8]' : 'text-sm leading-relaxed';

  // Missing metadata variations
  const isIncomplete = index % 4 === 0;
  const isMinimal = index % 5 === 0;

  // Procedural interruption
  const showInterruption = index > 0 && index % 5 === 0;

  return (
    <>
      {showInterruption && (
        <div className="w-full text-center my-6 py-4 border-institutional mono-text-small text-[0.7rem] tracking-[0.1em] opacity-40 col-span-full">
          RECOVERY NOTATION // MATERIAL LOSS DETECTED IN RECORDS {index}-{index + 3}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, delay: (index % 4) * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        className={`group relative border border-border/40 ${paddingClass} bg-background/50 hover:bg-secondary/20 transition-colors duration-700 ruled-lines`}
      >
        {/* Faux Stamp */}
        {index % 3 === 0 && (
          <div className="archival-stamp top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
            FILED
          </div>
        )}

        <div className="flex flex-col h-full relative z-10">
          <div className={`flex justify-between items-start ${gapClass} font-mono text-xs text-muted-foreground uppercase tracking-widest opacity-60`}>
            {!isIncomplete && <span>{date || 'UNDATED'}</span>}
            <span>{refCode || `FN-${String(index + 1).padStart(3, '0')}`}</span>
          </div>

          <h3 className={`font-serif text-2xl md:text-3xl ${gapClass} group-hover:text-foreground/80 transition-colors duration-500 ink-bleed displace-y`}>
            {title}
          </h3>
          
          {!isMinimal && (
            <p className={`text-muted-foreground/80 ${textClass} ${gapClass} flex-grow`}>
              {excerpt}
            </p>
          )}

          <div className="mt-auto pt-4 border-t border-border/30 flex justify-between items-center">
            {!isMinimal && (
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent/70 opacity-60">
                Class: {category}
              </span>
            )}
            <span className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 flicker-animation">
              [READ]
            </span>
          </div>
        </div>
        
        {/* Subtle corner fold effect */}
        <div className="absolute top-0 right-0 w-4 h-4 bg-background border-l border-b border-border/40 transform translate-x-2 -translate-y-2 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </motion.div>
    </>
  );
}

export default FieldNoteCard;