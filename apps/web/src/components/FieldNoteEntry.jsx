import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArchivalMetadataDisplay from './ArchivalMetadataDisplay.jsx';
import { getTierForNote, RETRIEVAL_TIERS } from '@/lib/ArchivalRetrievalSystem.js';

function FieldNoteEntry({ note, index = 0, isCompressed = false, isOneLine = false }) {
  if (!note) return null;

  const tier = getTierForNote(note);
  const isUnstable = tier.name === RETRIEVAL_TIERS.UNSTABLE_SEQUENCE.name;
  const isConflict = tier.name === RETRIEVAL_TIERS.REFERENTIAL_CONFLICT.name;

  const displaceClass = (isUnstable || isConflict) ? 'animate-displace-text' : '';

  if (isOneLine) {
    return (
      <div className="metadata-text py-2 border-b border-border/10 hover:opacity-100 transition-opacity dense-section">
        <Link to={`/field-notes/${note.slug}`}>
          — {note.title || 'Untitled Fragment'} <span className="metadata-footnote ml-2">[{tier.name}]</span>
        </Link>
      </div>
    );
  }

  if (isCompressed) {
    return (
      <div className="metadata-text py-3 border-b border-border/20 hover:opacity-100 transition-opacity flex flex-wrap gap-2 items-center dense-section">
        <span className="metadata-label">FN-{note.fieldNoteNumber || note.id.substring(0,4)}</span>
        <span className="opacity-30">|</span>
        <Link to={`/field-notes/${note.slug}`} className="hover:underline metadata-value">
          {note.title || 'Untitled Fragment'}
        </Link>
        <span className="opacity-30">|</span>
        <span className="metadata-label">{tier.name}</span>
        <span className="opacity-30">|</span>
        <span className="metadata-footnote">{note.recoveredDate || note.created?.substring(0,10) || 'UNDATED'}</span>
      </div>
    );
  }

  return (
    <motion.article 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`relative bg-background/50 mb-6 transition-all duration-500 hover:bg-secondary/10 medium-section`}
      style={{
        opacity: tier.opacity,
        padding: tier.padding,
        borderLeft: tier.borderLeft,
        borderTop: '1px solid hsla(var(--border) / 0.4)',
        borderRight: '1px solid hsla(var(--border) / 0.4)',
        borderBottom: '1px solid hsla(var(--border) / 0.4)'
      }}
    >
      <header className="mb-6 border-b border-border/20 pb-4">
        <div className="flex justify-between items-start mb-4 dense-section">
          <ArchivalMetadataDisplay 
            tier={tier} 
            label="REF" 
            value={`FN-${note.fieldNoteNumber || note.id.substring(0,6)}`} 
          />
          <ArchivalMetadataDisplay 
            tier={tier} 
            label="DATE" 
            value={note.recoveredDate || note.created?.substring(0,10)} 
            conflictingValues={isUnstable ? ['2008', '2015', '2023'] : []}
          />
        </div>
        
        <Link to={`/field-notes/${note.slug}`}>
          <h2 className={`literary-statement-secondary ink-bleed hover:opacity-70 transition-opacity ${displaceClass}`} style={{ lineHeight: tier.lineHeight, marginTop: '1rem', marginBottom: '1rem', padding: 0 }}>
            {note.title || 'Untitled Fragment'}
          </h2>
        </Link>
      </header>

      <div className="operational-description mb-6" style={{ fontSize: tier.fontSize, lineHeight: tier.lineHeight }}>
        <p className="italic opacity-80">{note.excerpt || '[TEXT UNAVAILABLE]'}</p>
        
        {(isUnstable || isConflict) && (
          <div className="mt-4 pt-3 border-t border-border/10 metadata-footnote italic">
            Recovery notation appended 14 years after initial classification.
          </div>
        )}
      </div>

      <footer className="pt-4 border-t border-border/10 flex justify-between items-center dense-section">
        <span className="metadata-label">
          TIER: {tier.name}
        </span>
        <Link to={`/field-notes/${note.slug}`} className="metadata-text hover:underline">
          Access Record
        </Link>
      </footer>
    </motion.article>
  );
}

export default FieldNoteEntry;