import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ArchiveEntryCard({ book, index = 0 }) {
  // Density variations
  const isDense = index % 3 === 0;
  const isSparse = index % 5 === 0 && !isDense;
  
  const paddingClass = isSparse ? 'p-8 md:p-12' : isDense ? 'p-4 md:p-6' : 'p-6 md:p-8';
  const gapClass = isSparse ? 'gap-8' : isDense ? 'gap-4' : 'gap-6';
  const titleSize = isSparse ? 'text-6xl md:text-8xl' : isDense ? 'text-4xl md:text-5xl' : 'text-5xl md:text-7xl';
  const lineHt = isSparse ? 'leading-[1.8]' : isDense ? 'leading-[1.4]' : 'leading-relaxed';

  // Missing metadata variations
  const isIncomplete = index % 4 === 0;
  const isMinimal = index % 7 === 0;

  // Procedural interruption
  const showInterruption = index > 0 && index % 6 === 0;

  return (
    <>
      {showInterruption && (
        <div className="w-full text-center my-6 py-4 border-institutional mono-text-small text-[0.7rem] tracking-[0.1em] opacity-40">
          RESTORATION NOTICE // SEQUENCE {String(index).padStart(2, '0')} SUSPENDED FOLLOWING OVERLAY EVENT
        </div>
      )}

      <motion.div 
        className={`relative w-full h-full min-h-[60vh] flex flex-col justify-center items-center text-center ${paddingClass} group overflow-hidden`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* Faint Cover Background */}
        <div 
          className="absolute inset-0 z-0 opacity-5 group-hover:opacity-10 transition-opacity duration-1000 bg-cover bg-center"
          style={{ backgroundImage: `url(${book.coverImage})` }}
        />

        <div className={`relative z-10 max-w-4xl mx-auto flex flex-col items-center ${gapClass}`}>
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground opacity-60">
            ARCHIVE ENTRY {book.archiveEntry}
          </div>
          
          <h2 className={`font-serif ${titleSize} group-hover:-translate-y-1 transition-transform duration-700 displace-x`}>
            {book.title}
          </h2>
          
          {!isMinimal && (
            <p className={`font-serif italic text-xl md:text-2xl text-muted-foreground max-w-2xl ${lineHt}`}>
              {book.longline}
            </p>
          )}

          <div className="flex flex-wrap justify-center gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
            {!isIncomplete && !isMinimal && <span>STATUS: {book.status}</span>}
            {!isIncomplete && !isMinimal && <span>•</span>}
            {!isMinimal && <span>CLASS: {book.classification}</span>}
          </div>

          <Link to={`/archive/${book.slug}`} className="ghost-button opacity-unstable">
            VIEW ARCHIVE ENTRY
          </Link>
        </div>
      </motion.div>
    </>
  );
}

export default ArchiveEntryCard;