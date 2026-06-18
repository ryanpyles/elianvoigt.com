import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export default function FieldNote004_21Page() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-ledger paper-grain fold-shadow relative">
      <Helmet><title>ARCHIVE 004.21 - AFLENDING</title></Helmet>
      <Header />
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6 relative z-20">
        <nav className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-12">
          <Link to="/field-notes" className="hover:text-foreground">Field Notes</Link> &gt; 
          <Link to="/field-notes/vikamal-coastal-grammar" className="hover:text-foreground ml-2">Vikamál</Link> &gt; 004.21
        </nav>
        
        <header className="border-b border-border/50 pb-8 mb-12 font-mono text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>FILE: RITUAL/AFLENDING/004.21</span>
            <span>STATUS: DANGEROUS</span>
          </div>
        </header>

        <article className="font-serif text-lg leading-loose space-y-6">
          <h1 className="text-3xl mb-8">CASE V: AFLENDING (The Unbinding Case)</h1>
          <p>A specialized ritual case. It grammatically unmoors a noun from the land. Spoken only by widows or the village speaker during rites of passage for the lost.</p>
          <p className="italic restoration-note">"To use Aflending on the living is considered attempted murder by syntax."</p>
        </article>

        <div className="mt-24 border-t border-border/50 pt-8 font-mono text-xs flex gap-4">
          <Link to="/field-notes/field-note-004-20" className="hover:text-foreground">← 004.20</Link>
          <Link to="/field-notes/field-note-004-22" className="hover:text-foreground">004.22 →</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}