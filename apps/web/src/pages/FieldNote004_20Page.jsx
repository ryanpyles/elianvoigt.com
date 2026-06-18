import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export default function FieldNote004_20Page() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-ledger paper-grain fold-shadow relative">
      <Helmet><title>ARCHIVE 004.20 - GENITIVE CASE</title></Helmet>
      <Header />
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6 relative z-20">
        <nav className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-12">
          <Link to="/field-notes" className="hover:text-foreground">Field Notes</Link> &gt; 
          <Link to="/field-notes/vikamal-coastal-grammar" className="hover:text-foreground ml-2">Vikamál</Link> &gt; 004.20
        </nav>
        
        <header className="border-b border-border/50 pb-8 mb-12 font-mono text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>FILE: MEMORIAL/004.20</span>
            <span>STATUS: TRANSLATED</span>
          </div>
        </header>

        <article className="font-serif text-lg leading-loose space-y-6">
          <h1 className="text-3xl mb-8">CASE IV: GENITIVE (Possession Destabilized)</h1>
          <p>Used strictly to denote what formerly belonged to the land but now belongs to the deep. A boat is "of the harbor" until it sinks, then it is "of the absence."</p>
          <p>Never say "The sea's anger." The sea owns nothing because the sea is a condition, not an entity.</p>
        </article>

        <div className="mt-24 border-t border-border/50 pt-8 font-mono text-xs flex gap-4">
          <Link to="/field-notes/field-note-004-19" className="hover:text-foreground">← 004.19</Link>
          <Link to="/field-notes/field-note-004-21" className="hover:text-foreground">004.21 →</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}