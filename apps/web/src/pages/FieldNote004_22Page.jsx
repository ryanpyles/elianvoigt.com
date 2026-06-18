import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export default function FieldNote004_22Page() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-ledger paper-grain fold-shadow relative">
      <Helmet><title>ARCHIVE 004.22 - SÆFANGI</title></Helmet>
      <Header />
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6 relative z-20">
        <nav className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-12">
          <Link to="/field-notes" className="hover:text-foreground">Field Notes</Link> &gt; 
          <Link to="/field-notes/vikamal-coastal-grammar" className="hover:text-foreground ml-2">Vikamál</Link> &gt; 004.22
        </nav>
        
        <header className="border-b border-border/50 pb-8 mb-12 font-mono text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>FILE: FUNERARY/SÆFANGI/004.22</span>
            <span>STATUS: RECOVERED</span>
          </div>
        </header>

        <article className="font-serif text-lg leading-loose space-y-6">
          <h1 className="text-3xl mb-8">CASE VI: SÆFANGI (Sea-Holding Case)</h1>
          <p>Describes the state of being caught in the water but not yet drowned. The grammar itself suspends action. Sentences utilizing Sæfangi cannot possess a period; they trail off into silence.</p>
          <p>The speaker must inhale sharply at the end of the clause.</p>
        </article>

        <div className="mt-24 border-t border-border/50 pt-8 font-mono text-xs flex gap-4">
          <Link to="/field-notes/field-note-004-21" className="hover:text-foreground">← 004.21</Link>
          <Link to="/field-notes/field-note-004-23" className="hover:text-foreground">004.23 →</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}