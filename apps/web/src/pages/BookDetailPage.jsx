import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import RetrievalTerminal from '@/components/RetrievalTerminal.jsx';
import { bookPages } from '@/data/catalogueData.js';

const FRAGMENT_LABELS = {
  'book-broadcast': 'Broadcast Fragments',
  'book-evidence': 'Marginalia',
  'book-linguistic': 'Recovered Phrases',
  'book-legal': 'Clauses',
  'book-specimen': 'Field Tags',
  'book-quiet': 'Observations',
};

export default function BookDetailPage() {
  const { bookId } = useParams();
  const book = bookPages.find(b => b.id === bookId);

  if (!book) {
    return (
      <div className="archive-page flex min-h-screen">
        <Header />
        <RetrievalTerminal />
        <main className="main-content flex-1 pt-24 pb-32 flex items-center justify-center">
          <div className="text-center font-typewriter opacity-50 uppercase tracking-widest text-sm">
            <p>Error: Entry not found in catalogue.</p>
            <Link to="/publishing-catalogue" className="mt-4 block border-b border-dashed border-[currentColor] pb-1 hover:opacity-100 transition-opacity">
              Return to Index
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={`archive-page flex min-h-screen book-detail ${book.styleClass || ''}`}>
      <Helmet>
        <title>{`${book.title} — Elian Voigt Catalogue`}</title>
        <meta name="description" content={book.shortDescription || `Details for ${book.title}`} />
      </Helmet>

      <Header />
      <RetrievalTerminal />

      <main className="main-content flex-1 pt-24 pb-32">
        <div className="catalogue-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bk-accent-bar" aria-hidden="true"></div>

          <nav className="book-breadcrumb mb-12 font-typewriter text-xs uppercase tracking-widest opacity-60">
            <Link to="/publishing-catalogue" className="hover:opacity-100 transition-opacity">Catalogue</Link>
            <span className="mx-2">/</span>
            <span className="current opacity-100">{book.title}</span>
          </nav>

          <header className="book-header" style={{ animationDelay: '0ms' }}>
            <div className="catalogue-entry-top flex items-center gap-4 mb-6">
              {book.num && <span className="catalogue-entry-num text-xl opacity-40 font-serif">{book.num}</span>}
              {book.status && <span className="book-status text-xs font-typewriter uppercase tracking-widest border border-[currentColor] px-2 py-1 opacity-60">{book.status}</span>}
            </div>
            
            <h1 className="catalogue-title mb-2 font-serif font-medium leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.02em' }}>
              {book.title}
            </h1>
            
            {book.subtitle && (
              <h2 className="catalogue-subtitle text-xl md:text-2xl opacity-70 mb-6 font-serif italic">
                {book.subtitle}
              </h2>
            )}

            {book.positioningLine && (
              <div className="book-positioning text-lg md:text-xl font-medium leading-relaxed mb-8 border-l-4 border-[hsla(var(--foreground)/0.2)] pl-4 py-1">
                {book.positioningLine}
              </div>
            )}
            
            {book.genre && (
              <div className="catalogue-entry-genre text-xs font-typewriter uppercase tracking-widest mb-12 inline-block border border-[hsla(var(--foreground)/0.15)] px-3 py-1.5 bg-[hsla(var(--foreground)/0.02)]">
                {book.genre}
              </div>
            )}
            
            <div className="catalogue-rule mb-12 h-px bg-[hsla(var(--foreground)/0.15)] w-full"></div>
          </header>

          <div className="book-cover-section grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 mb-16">
            
            <div className="book-cover-wrapper" style={{ animationDelay: '100ms' }}>
              <img 
                src={book.coverImage} 
                alt={`Cover art for ${book.title}`} 
                className="w-full aspect-[9/13.5] object-cover border border-[hsla(var(--foreground)/0.15)] shadow-lg opacity-95 rounded-sm"
              />
              
              {book.taglines && book.taglines.length > 0 && (
                <div className="fragments-box mt-8 p-6 bg-[hsla(var(--foreground)/0.03)] border border-[hsla(var(--foreground)/0.1)] rounded-sm">
                  <div className="section-label text-[0.65rem] font-typewriter uppercase tracking-widest opacity-50 mb-4">{FRAGMENT_LABELS[book.styleClass] || 'Fragments'}</div>
                  <ul className="space-y-3">
                    {book.taglines.map((tagline, idx) => (
                      <li key={idx} className="text-sm font-medium flex gap-3 opacity-80">
                        <span className="opacity-40 font-typewriter">›</span>
                        {tagline}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="book-content-area space-y-16" style={{ animationDelay: '200ms' }}>
              
              <article className="book-content max-w-prose">
                {book.shortDescription && (
                  <section className="mb-10">
                    <div className="section-label text-[0.65rem] font-typewriter uppercase tracking-widest opacity-50 mb-4 border-b border-[hsla(var(--foreground)/0.1)] pb-2">Summary</div>
                    <p className="font-serif text-lg md:text-xl leading-relaxed opacity-90">
                      {book.shortDescription}
                    </p>
                  </section>
                )}
                
                {book.expandedSynopsis && (
                  <section className="mb-10">
                    <div className="section-label text-[0.65rem] font-typewriter uppercase tracking-widest opacity-50 mb-4 border-b border-[hsla(var(--foreground)/0.1)] pb-2">Expanded Synopsis</div>
                    <p className="font-serif text-base md:text-lg leading-relaxed opacity-80">
                      {book.expandedSynopsis}
                    </p>
                  </section>
                )}

                {book.thematicKeywords && book.thematicKeywords.length > 0 && (
                  <section className="mb-10">
                    <div className="section-label text-[0.65rem] font-typewriter uppercase tracking-widest opacity-50 mb-4 border-b border-[hsla(var(--foreground)/0.1)] pb-2">Thematic Parameters</div>
                    <div className="flex flex-wrap gap-2">
                      {book.thematicKeywords.map((keyword, index) => (
                        <span key={index} className="keyword-chip px-2.5 py-1 text-[0.65rem] font-typewriter uppercase tracking-widest border border-[hsla(var(--foreground)/0.15)] bg-[hsla(var(--foreground)/0.02)] opacity-70 hover:opacity-100 transition-opacity cursor-default">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </section>
                )}
              </article>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="book-metadata">
                  {book.metadataLabels && Object.keys(book.metadataLabels).length > 0 && (
                    <section className="mb-10">
                      <div className="section-label text-[0.65rem] font-typewriter uppercase tracking-widest opacity-50 mb-4 border-b border-[hsla(var(--foreground)/0.1)] pb-2">Institutional Ledger</div>
                      <div className="metadata-grid flex flex-col gap-3 font-typewriter text-xs">
                        {Object.entries(book.metadataLabels).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-baseline gap-4">
                            <span className="catalogue-format-key uppercase tracking-wider opacity-60 whitespace-nowrap">{key}</span>
                            <span className="border-b border-dotted border-[hsla(var(--foreground)/0.2)] flex-grow relative -top-1"></span>
                            <span className="catalogue-format-value opacity-80 text-right whitespace-nowrap">
                              {book.metadataValues && book.metadataValues[key] ? book.metadataValues[key] : value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {book.formats && book.formats.length > 0 && (
                    <section className="mb-10">
                      <div className="section-label text-[0.65rem] font-typewriter uppercase tracking-widest opacity-50 mb-4 border-b border-[hsla(var(--foreground)/0.1)] pb-2">Specifications</div>
                      <div className="flex flex-col gap-3 font-typewriter text-xs">
                        {book.formats.map((format, index) => (
                          <div key={index} className="flex justify-between items-baseline gap-4">
                            <span className="uppercase tracking-wider opacity-60">{format.key}</span>
                            <span className="border-b border-dotted border-[hsla(var(--foreground)/0.2)] flex-grow relative -top-1"></span>
                            <span className="opacity-80 text-right">{format.value}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </div>

                <div className="book-comparable">
                  {book.comparableTitles && book.comparableTitles.length > 0 && (
                    <section>
                      <div className="section-label text-[0.65rem] font-typewriter uppercase tracking-widest opacity-50 mb-4 border-b border-[hsla(var(--foreground)/0.1)] pb-2">Cross-Referenced Materials</div>
                      <div className="flex flex-col gap-6">
                        {book.comparableTitles.map((item, index) => {
                          const isObj = typeof item === 'object' && item !== null;
                          if (!isObj) {
                            return (
                              <div key={index} className="font-serif italic opacity-80">{item}</div>
                            );
                          }
                          return (
                            <div key={index} className="space-y-1">
                              <div className="font-serif text-base">
                                <span className="italic font-medium">{item.title}</span>
                                {item.author && <span className="opacity-60 text-sm"> by {item.author}</span>}
                              </div>
                              {item.comparison && <div className="text-sm opacity-70 leading-relaxed">{item.comparison}</div>}
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  )}
                </div>
              </div>

              {book.promotionalQuotes && book.promotionalQuotes.length > 0 && (
                <section className="pt-8 border-t border-[hsla(var(--foreground)/0.1)]">
                  <div className="section-label text-[0.65rem] font-typewriter uppercase tracking-widest opacity-50 mb-8">From the Record</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {book.promotionalQuotes.map((quoteItem, index) => {
                      const isObj = typeof quoteItem === 'object' && quoteItem !== null;
                      const text = isObj ? quoteItem.quote : quoteItem;
                      const purpose = isObj ? quoteItem.purpose : null;
                      
                      return (
                        <blockquote key={index} className="space-y-3">
                          <div className="font-serif text-base italic leading-relaxed opacity-90">"{text}"</div>
                          {purpose && <div className="quote-purpose text-[0.65rem] font-typewriter uppercase tracking-widest opacity-50">— {purpose}</div>}
                        </blockquote>
                      );
                    })}
                  </div>
                </section>
              )}

            </div>
          </div>

          <nav className="book-navigation flex flex-col sm:flex-row justify-between items-center mt-24 pt-8 border-t border-[hsla(var(--foreground)/0.15)] font-typewriter text-xs uppercase tracking-widest opacity-60 gap-6" style={{ animationDelay: '400ms' }}>
            {book.prevBook ? (
              <Link to={`/catalogue/${book.prevBook.id}`} className="hover:opacity-100 transition-opacity flex flex-col gap-2 text-center sm:text-left">
                <span>← PREVIOUS ENTRY</span>
                <span className="font-serif normal-case tracking-normal italic text-sm">{book.prevBook.title}</span>
              </Link>
            ) : (
              <span className="opacity-30">| START OF RECORD |</span>
            )}
            
            {book.nextBook ? (
              <Link to={`/catalogue/${book.nextBook.id}`} className="hover:opacity-100 transition-opacity flex flex-col gap-2 text-center sm:text-right">
                <span>NEXT ENTRY →</span>
                <span className="font-serif normal-case tracking-normal italic text-sm">{book.nextBook.title}</span>
              </Link>
            ) : (
              <span className="opacity-30">| END OF RECORD |</span>
            )}
          </nav>

          <footer className="book-footer mt-24 text-center opacity-40 font-typewriter text-[0.65rem] uppercase tracking-[0.2em]">
            <p className="mb-2">FORMÆTRIX IMPRINT · CHICAGO</p>
            <p>INSTITUTIONAL ARCHIVAL DIVISION</p>
          </footer>

        </div>
      </main>
    </div>
  );
}