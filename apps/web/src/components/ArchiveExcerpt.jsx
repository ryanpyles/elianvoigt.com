import React from 'react';

export default function ArchiveExcerpt({ title, content, type = 'standard' }) {
  return (
    <div className="mb-16 relative">
      <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6 border-b border-border/30 pb-2">
        {title}
      </h3>
      
      {type === 'vikamal' ? (
        <div className="crossfade-container font-serif text-lg leading-relaxed">
          <div className="crossfade-icelandic">{content.icelandic}</div>
          <div className="crossfade-english">{content.english}</div>
        </div>
      ) : (
        <div className="font-serif text-lg leading-relaxed">
          {content}
        </div>
      )}
    </div>
  );
}