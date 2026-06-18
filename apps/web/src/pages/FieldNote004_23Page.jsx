import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export default function FieldNote004_23Page() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-ledger paper-grain fold-shadow relative">
      <Helmet><title>ARCHIVE 004.23 - HRIMFALL</title></Helmet>
      <Header />
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6 relative z-20">
        <nav className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-12">
          <Link to="/field-notes" className="hover:text-foreground">Field Notes</Link> &gt; 
          <Link to="/field-notes/vikamal-coastal-grammar" className="hover:text-foreground ml-2">Vikamál</Link> &gt; 004.23
        </nav>
        
        <header className="border-b border-border/50 pb-8 mb-12 font-mono text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>FILE: SEASONAL/HRIMFALL/004.23</span>
            <span>STATUS: PARTIAL</span>
          </div>
        </header>

        <article className="font-serif text-lg leading-loose space-y-6">
          <h1 className="text-3xl mb-8">CASE VII: HRIMFALL (Winter-Falling Case)</h1>
          <p>Used exclusively between November and February. It freezes the verb, turning action into a static state of endurance. "We are surviving" becomes "Survival is frozen upon us."</p>
          <div className="mt-12 text-center opacity-40 font-mono text-xs">
            [DATA CORRUPTED. SALT WATER DAMAGE DETECTED.]
          </div>
        </article>

        <div className="mt-24 border-t border-border/50 pt-8 font-mono text-xs flex gap-4">
          <Link to="/field-notes/field-note-004-22" className="hover:text-foreground">← 004.22</Link>
          <Link to="/field-notes/field-note-004-24" className="hover:text-foreground">004.24 →</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}