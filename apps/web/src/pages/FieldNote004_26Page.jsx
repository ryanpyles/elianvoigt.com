import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useMarginalia } from '@/hooks/useMarginalia';

export default function FieldNote004_26Page() {
  const { getByDocument } = useMarginalia();
  const pageMarginalia = getByDocument('field-note-004-26');

  return (
    <div className="min-h-screen bg-background text-foreground bg-ledger paper-grain fold-shadow relative">
      <Helmet><title>ARCHIVE 004.26 - STRUCTURAL FEATURES</title></Helmet>
      
      {/* Ghost text / Metadata overlay logic */}
      {pageMarginalia.map((m) => (
        <div 
          key={m.id}
          className="marginalia top-[40%] right-[8%] text-xs"
          style={{ opacity: m.opacity }}
        >
          {m.text}
        </div>
      ))}
      
      <Header />
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6 relative z-20">
        <nav className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-12">
          <Link to="/field-notes" className="hover:text-foreground">Field Notes</Link> &gt; 
          <Link to="/field-notes/vikamal-coastal-grammar" className="hover:text-foreground ml-2">Vikamál</Link> &gt; 004.26
        </nav>
        
        <header className="border-b border-border/50 pb-8 mb-12 font-mono text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>FILE: PHILOSOPHY/004.26</span>
            <span>STATUS: THEORETICAL</span>
          </div>
        </header>

        <article className="font-serif text-lg leading-loose space-y-6">
          <h1 className="text-3xl mb-8">STRUCTURAL FEATURES & LINGUISTIC PHILOSOPHY</h1>
          <p>The grammar is built on the suppression of human agency. It is a linguistic ecosystem designed to minimize the speaker's footprint. The ledger grammar (written) often contradicts the spoken grammar (silence-heavy), suggesting that what is written is meant to deceive the earth, while what is spoken is meant to survive it.</p>
          <p className="restoration-note">[Final fragment ends abruptly.]</p>
          
          <div className="mt-12 text-xs font-mono text-muted-foreground/30 p-4 border border-border/10">
            [SYS_META_HIDDEN_BLOCK]: 0x228B. post-Eighth contamination protocols active.
          </div>
        </article>

        <div className="mt-24 border-t border-border/50 pt-8 font-mono text-xs flex gap-4">
          <Link to="/field-notes/field-note-004-25" className="hover:text-foreground">← 004.25</Link>
          <Link to="/field-notes/vikamal-coastal-grammar" className="hover:text-foreground">RETURN TO MAIN INDEX →</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}