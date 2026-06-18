import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export default function FieldNote004_18Page() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-ledger paper-grain fold-shadow relative">
      <Helmet><title>ARCHIVE 004.18 - ACCUSATIVE CASE</title></Helmet>
      <Header />
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6 relative z-20">
        <nav className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-12">
          <Link to="/field-notes" className="hover:text-foreground">Field Notes</Link> &gt; 
          <Link to="/field-notes/vikamal-coastal-grammar" className="hover:text-foreground ml-2">Vikamál</Link> &gt; 004.18
        </nav>
        
        <header className="border-b border-border/50 pb-8 mb-12 font-mono text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>FILE: BX-441-A</span>
            <span>STATUS: PARTIAL RECONSTRUCTION</span>
          </div>
        </header>

        <article className="font-serif text-lg leading-loose space-y-6">
          <h1 className="text-3xl mb-8">CASE II: ACCUSATIVE (Direct Impact)</h1>
          <p>Used only when describing physical consequence. The ocean does not "take" (active). You "are taken to" the water. The accusative implies a direction of travel that cannot be reversed.</p>
          <div className="p-6 border border-border/30 bg-muted/10 font-mono text-sm">
            <span className="text-muted-foreground block mb-2">INCORRECT CONSTRUCTION:</span>
            "I walked into the sea."<br/><br/>
            <span className="text-muted-foreground block mb-2">CORRECT CONSTRUCTION:</span>
            "The distance between myself and the deep diminished."
          </div>
          <p className="restoration-note">[Illegible scribble on reverse side of document. Looks like a map contour.]</p>
        </article>

        <div className="mt-24 border-t border-border/50 pt-8 font-mono text-xs flex gap-4">
          <Link to="/field-notes/field-note-004-17" className="hover:text-foreground">← 004.17</Link>
          <Link to="/field-notes/field-note-004-19" className="hover:text-foreground">004.19 →</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}