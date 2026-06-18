import React from 'react';
import { Link } from 'react-router-dom';

export default function ArchiveMetadataRail({ 
  id, 
  status, 
  classification, 
  source, 
  restorationLevel, 
  accessLevel, 
  relatedThemes = [], 
  relatedLocations = [], 
  relatedBooks = [] 
}) {
  return (
    <div className="border-l border-border/50 pl-4 py-2 space-y-4 mb-8 dense-section">
      <div className="space-y-1">
        <div className="flex items-center"><span className="metadata-label w-24">ID:</span> <span className="metadata-value">{id}</span></div>
        <div className="flex items-center"><span className="metadata-label w-24">STATUS:</span> <span className="metadata-value">{status}</span></div>
        <div className="flex items-center"><span className="metadata-label w-24">CLASS:</span> <span className="metadata-value">{classification}</span></div>
        {source && <div className="flex items-center"><span className="metadata-label w-24">SOURCE:</span> <span className="metadata-value">{source}</span></div>}
        {restorationLevel && <div className="flex items-center"><span className="metadata-label w-24">RESTORATION:</span> <span className="metadata-value">{restorationLevel}</span></div>}
        {accessLevel && <div className="flex items-center"><span className="metadata-label w-24">ACCESS:</span> <span className="metadata-value">{accessLevel}</span></div>}
      </div>

      {(relatedThemes.length > 0 || relatedLocations.length > 0) && (
        <div className="pt-2 border-t border-border/20 space-y-3">
          {relatedThemes.length > 0 && (
            <div>
              <span className="metadata-label block mb-1">THEMES:</span>
              <div className="flex flex-wrap gap-2">
                {relatedThemes.map(theme => (
                  <span key={theme} className="metadata-text px-2 py-0.5 bg-muted/10 border border-border/30">
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          )}
          {relatedLocations.length > 0 && (
            <div>
              <span className="metadata-label block mb-1">LOCATIONS:</span>
              <div className="flex flex-wrap gap-2">
                {relatedLocations.map(loc => (
                  <span key={loc} className="metadata-text px-2 py-0.5 bg-muted/10 border border-border/30">
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {relatedBooks.length > 0 && (
        <div className="pt-2 border-t border-border/20">
          <span className="metadata-label block mb-1">ASSOCIATED RECORDS:</span>
          <div className="flex flex-col gap-1">
            {relatedBooks.map(book => (
              <Link key={book.url} to={book.url} className="metadata-value hover:text-foreground transition-colors truncate">
                REF: {book.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}