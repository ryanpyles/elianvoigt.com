import React from 'react';

function SystemRelationsMap({ book }) {
  if (!book) return null;

  return (
    <div className="font-mono text-xs text-muted-foreground whitespace-pre overflow-x-auto p-8 bg-muted/30 border border-border/50 rounded-sm">
      {`SYSTEM RELATIONS MAP: ENTRY ${book.archiveEntry}
==================================================

[ ${book.title.toUpperCase()} ]
       |
       |-- THEMES
       |    |-- ${book.themes[0] || 'N/A'}
       |    |-- ${book.themes[1] || 'N/A'}
       |    +-- ${book.themes[2] || 'N/A'}
       |
       |-- SUBJECTS
       |    |-- ${book.subjects[0] || 'N/A'}
       |    |-- ${book.subjects[1] || 'N/A'}
       |    +-- ${book.subjects[2] || 'N/A'}
       |
       +-- CROSS-REFERENCES
            |-- FIELD NOTES: ${book.relatedFieldNotes.length} linked records
            +-- RELATED WORKS: ${book.relatedBooks.length} linked records

==================================================
STATUS: ${book.status}
CLASSIFICATION: ${book.classification}`}
    </div>
  );
}

export default SystemRelationsMap;