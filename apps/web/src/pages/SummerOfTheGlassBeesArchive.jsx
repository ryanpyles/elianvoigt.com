import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { bookPages } from '@/data/catalogueData.js';

export default function SummerOfTheGlassBeesArchive() {
  const book = bookPages.find(b => b.id === 'summer-of-the-glass-bees');

  if (!book) return null;

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#3a2f29] font-serif selection:bg-[#d3c4b1] selection:text-[#2c241b]">
      <Helmet>
        <title>{`${book.title} | Archival Record`}</title>
        <meta name="description" content={book.shortDescription} />
      </Helmet>

      <Header />

      <main className="pt-32 pb-24 max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Breadcrumb */}
        <nav className="font-mono text-xs uppercase tracking-widest text-[#8a7b6c] mb-12 flex items-center gap-2">
          <Link to="/" className="hover:text-[#3a2f29] transition-colors">Index</Link>
          <span>/</span>
          <Link to="/publishing-catalogue" className="hover:text-[#3a2f29] transition-colors">Catalogue</Link>
          <span>/</span>
          <span className="text-[#3a2f29]">{book.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 items-start">
          
          {/* Left Column: Main Content */}
          <article className="space-y-16">
            
            {/* Header Section */}
            <header className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#d3c4b1] pb-4">
                <span className="font-mono text-sm tracking-widest text-[#8a7b6c]">RECORD {book.num}</span>
                <span className="font-mono text-xs px-2 py-1 bg-[#f0e6d2] text-[#5c4d40] tracking-widest uppercase">
                  {book.status}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-none text-[#2c241b]">
                {book.title}
              </h1>
              
              {book.subtitle && (
                <h2 className="text-2xl md:text-3xl italic text-[#6b5a4e]">
                  {book.subtitle}
                </h2>
              )}

              <div className="font-mono text-xs uppercase tracking-widest text-[#8a7b6c] pt-2">
                {book.genre}
              </div>
            </header>

            {/* Positioning Line Callout */}
            {book.positioningLine && (
              <div className="text-xl md:text-2xl leading-relaxed text-[#4a3c31] border-l-4 border-[#d3c4b1] pl-6 py-2 italic">
                {book.positioningLine}
              </div>
            )}

            {/* Synopsis Section */}
            <section className="space-y-8">
              <div className="font-mono text-xs uppercase tracking-widest text-[#8a7b6c] border-b border-[#e8dfd1] pb-2">
                Archival Summary
              </div>
              <p className="text-lg leading-relaxed text-[#4a3c31] font-medium">
                {book.shortDescription}
              </p>
              <p className="text-base leading-loose text-[#5c4d40]">
                {book.expandedSynopsis}
              </p>
            </section>

            {/* Thematic Keywords */}
            {book.thematicKeywords && book.thematicKeywords.length > 0 && (
              <section className="space-y-6">
                <div className="font-mono text-xs uppercase tracking-widest text-[#8a7b6c] border-b border-[#e8dfd1] pb-2">
                  Thematic Parameters
                </div>
                <div className="flex flex-wrap gap-3">
                  {book.thematicKeywords.map((keyword, idx) => (
                    <span key={idx} className="font-mono text-xs px-3 py-1.5 border border-[#d3c4b1] text-[#5c4d40] bg-white/50 uppercase tracking-wider">
                      {keyword}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Comparable Titles */}
            {book.comparableTitles && book.comparableTitles.length > 0 && (
              <section className="space-y-6">
                <div className="font-mono text-xs uppercase tracking-widest text-[#8a7b6c] border-b border-[#e8dfd1] pb-2">
                  Cross-Referenced Materials
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {book.comparableTitles.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="text-lg italic text-[#2c241b]">{item.title}</h4>
                      <div className="font-mono text-xs uppercase tracking-widest text-[#8a7b6c]">
                        by {item.author}
                      </div>
                      <p className="text-sm leading-relaxed text-[#5c4d40]">
                        {item.comparison}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Promotional Quotes */}
            {book.promotionalQuotes && book.promotionalQuotes.length > 0 && (
              <section className="space-y-6">
                <div className="font-mono text-xs uppercase tracking-widest text-[#8a7b6c] border-b border-[#e8dfd1] pb-2">
                  Critical Reception
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  {book.promotionalQuotes.map((quoteItem, idx) => (
                    <blockquote key={idx} className="space-y-3">
                      <p className="text-base italic leading-relaxed text-[#4a3c31]">
                        "{quoteItem.quote}"
                      </p>
                      <footer className="font-mono text-[10px] uppercase tracking-widest text-[#8a7b6c]">
                        — {quoteItem.purpose}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </section>
            )}

          </article>

          {/* Right Column: Sidebar / Metadata */}
          <aside className="space-y-12 lg:sticky lg:top-32">
            
            {/* Cover Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-[#d3c4b1] translate-x-3 translate-y-3 -z-10"></div>
              <img 
                src={book.coverImage} 
                alt={`Cover of ${book.title}`}
                className="w-full aspect-[9/13.5] object-cover border border-[#d3c4b1] shadow-sm bg-white"
              />
            </div>

            {/* Taglines */}
            {book.taglines && book.taglines.length > 0 && (
              <div className="bg-[#f0e6d2] p-6 border border-[#d3c4b1] space-y-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#8a7b6c] mb-4">
                  Broadcast Fragments
                </div>
                <ul className="space-y-3">
                  {book.taglines.map((tagline, idx) => (
                    <li key={idx} className="text-sm font-medium text-[#4a3c31] flex gap-3">
                      <span className="text-[#8a7b6c] font-mono">›</span>
                      {tagline}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Institutional Metadata */}
            {book.metadataLabels && Object.keys(book.metadataLabels).length > 0 && (
              <div className="space-y-4">
                <div className="font-mono text-xs uppercase tracking-widest text-[#8a7b6c] border-b border-[#e8dfd1] pb-2">
                  Institutional Ledger
                </div>
                <div className="font-mono text-xs space-y-3">
                  {Object.entries(book.metadataLabels).map(([key, label]) => (
                    <div key={key} className="flex justify-between items-baseline gap-4">
                      <span className="text-[#8a7b6c] uppercase tracking-wider whitespace-nowrap">{label}</span>
                      <span className="border-b border-dotted border-[#d3c4b1] flex-grow relative -top-1"></span>
                      <span className="text-[#4a3c31] text-right whitespace-nowrap">
                        {book.metadataValues[key]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Formats */}
            {book.formats && book.formats.length > 0 && (
              <div className="space-y-4">
                <div className="font-mono text-xs uppercase tracking-widest text-[#8a7b6c] border-b border-[#e8dfd1] pb-2">
                  Available Formats
                </div>
                <div className="font-mono text-xs space-y-3">
                  {book.formats.map((format, idx) => (
                    <div key={idx} className="flex justify-between items-baseline gap-4">
                      <span className="text-[#8a7b6c] uppercase tracking-wider">{format.key}</span>
                      <span className="border-b border-dotted border-[#d3c4b1] flex-grow relative -top-1"></span>
                      <span className="text-[#4a3c31] text-right">{format.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </aside>

        </div>

        {/* Navigation Footer */}
        <nav className="mt-32 pt-8 border-t border-[#d3c4b1] flex flex-col sm:flex-row justify-between items-center gap-8">
          {book.prevBook ? (
            <Link to={`/catalogue/${book.prevBook.id}`} className="group flex flex-col gap-2 text-center sm:text-left">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8a7b6c] group-hover:text-[#4a3c31] transition-colors">
                ← Previous Record
              </span>
              <span className="text-lg italic text-[#4a3c31] group-hover:text-[#2c241b] transition-colors">
                {book.prevBook.title}
              </span>
            </Link>
          ) : (
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#8a7b6c]/50">
              | Start of Archive |
            </div>
          )}

          {book.nextBook ? (
            <Link to={`/catalogue/${book.nextBook.id}`} className="group flex flex-col gap-2 text-center sm:text-right">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8a7b6c] group-hover:text-[#4a3c31] transition-colors">
                Next Record →
              </span>
              <span className="text-lg italic text-[#4a3c31] group-hover:text-[#2c241b] transition-colors">
                {book.nextBook.title}
              </span>
            </Link>
          ) : (
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#8a7b6c]/50">
              | End of Archive |
            </div>
          )}
        </nav>

      </main>
      
      <Footer />
    </div>
  );
}