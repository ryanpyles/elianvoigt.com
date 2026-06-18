import React from 'react';
import { Link } from 'react-router-dom';
import { booksData } from '@/data/books.js';

function ArchiveRelatedBooks({ relatedSlugs }) {
  if (!relatedSlugs || relatedSlugs.length === 0) return null;

  const books = relatedSlugs.map(slug => booksData.find(b => b.slug === slug)).filter(Boolean);

  return (
    <div className="space-y-6">
      <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-2">
        Related Works
      </h3>
      <div className="grid grid-cols-1 gap-4">
        {books.map(book => (
          <Link 
            key={book.slug} 
            to={`/archive/${book.slug}`}
            className="block p-4 border border-border/30 hover:bg-muted/20 transition-colors duration-300"
          >
            <div className="font-mono text-[10px] text-muted-foreground mb-2 uppercase tracking-widest">
              ENTRY {book.archiveEntry} | {book.classification}
            </div>
            <h4 className="font-serif text-xl mb-2">{book.title}</h4>
            <div className="flex flex-wrap gap-2 mt-3">
              {book.themes.slice(0, 2).map(theme => (
                <span key={theme} className="font-mono text-[9px] px-2 py-1 bg-muted/30 border border-border/50 uppercase">
                  {theme}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArchiveRelatedBooks;