import React from 'react';
import { Link } from 'react-router-dom';
import { fieldNotesData } from '@/data/fieldNotes.js';

function ArchiveRelatedFieldNotes({ relatedSlugs }) {
  if (!relatedSlugs || relatedSlugs.length === 0) return null;

  const notes = relatedSlugs.map(slug => fieldNotesData.find(n => n.slug === slug)).filter(Boolean);

  return (
    <div className="space-y-6">
      <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-2">
        Related Field Notes
      </h3>
      <div className="grid grid-cols-1 gap-4">
        {notes.map(note => (
          <Link 
            key={note.slug} 
            to={`/field-notes/${note.slug}`}
            className="block p-4 border border-border/30 hover:bg-muted/20 transition-colors duration-300"
          >
            <div className="font-mono text-[10px] text-muted-foreground mb-2 uppercase tracking-widest">
              REF: {note.slug.substring(0, 8)} | {note.classification}
            </div>
            <h4 className="font-serif text-xl mb-2">{note.title}</h4>
            <p className="text-sm text-muted-foreground italic line-clamp-2">{note.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArchiveRelatedFieldNotes;