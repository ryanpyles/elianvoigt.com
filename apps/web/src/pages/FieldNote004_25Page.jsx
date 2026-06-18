import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export default function FieldNote004_25Page() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-ledger paper-grain fold-shadow relative">
      <Helmet><title>ARCHIVE 004.25 - TABOO RULES</title></Helmet>
      <Header />
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6 relative z-20">
        <nav className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-12">
          <Link to="/field-notes" className="hover:text-foreground">Field Notes</Link> &gt; 
          <Link to="/field-notes/vikamal-coastal-grammar" className="hover:text-foreground ml-2">Vikamál</Link> &gt; 004.25
        </nav>
        
        <header className="border-b border-border/50 pb-8 mb-12 font-mono text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>FILE: PROHIBITIONS/004.25</span>
            <span>STATUS: ACTIVE DIRECTIVE</span>
          </div>
        </header>

        <article className="font-serif text-lg leading-loose space-y-6">
          <h1 className="text-3xl mb-8">FOUNDATIONAL PROHIBITIONS</h1>
          <ul className="list-decimal pl-6 space-y-4">
            <li>Never speak the sea in the nominative.</li>
            <li>Never conjugate verbs of calling in the second person while facing the water.</li>
            <li>Never use plural nouns near tide pools.</li>
            <li>Avoid the completed future tense during storms. The future is never completed until the sky clears.</li>
          </ul>
        </article>

        <div className="mt-24 border-t border-border/50 pt-8 font-mono text-xs flex gap-4">
          <Link to="/field-notes/field-note-004-24" className="hover:text-foreground">← 004.24</Link>
          <Link to="/field-notes/field-note-004-26" className="hover:text-foreground">004.26 →</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}