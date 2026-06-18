import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export default function FieldNote004_19Page() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-ledger paper-grain fold-shadow relative">
      <Helmet><title>ARCHIVE 004.19 - DATIVE CASE</title></Helmet>
      <Header />
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6 relative z-20">
        <nav className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-12">
          <Link to="/field-notes" className="hover:text-foreground">Field Notes</Link> &gt; 
          <Link to="/field-notes/vikamal-coastal-grammar" className="hover:text-foreground ml-2">Vikamál</Link> &gt; 004.19
        </nav>
        
        <header className="border-b border-border/50 pb-8 mb-12 font-mono text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>FILE: COAST/17/UNTRANSLATED</span>
            <span>STATUS: INCOMPLETE</span>
          </div>
        </header>

        <article className="font-serif text-lg leading-loose space-y-6">
          <h1 className="text-3xl mb-8">CASE III: DATIVE (Endurance)</h1>
          <p>The case of adjacency and shared burden. To stand beside the water is to exist in the dative relative to it. You are receiving its cold, its noise, its intent.</p>
          <p>There is no construction for "I gave the offering to the sea." It is formulated: "The offering was lost in adjacency to the shore."</p>
          <p className="redacted block w-full h-12 mt-8"></p>
        </article>

        <div className="mt-24 border-t border-border/50 pt-8 font-mono text-xs flex gap-4">
          <Link to="/field-notes/field-note-004-18" className="hover:text-foreground">← 004.18</Link>
          <Link to="/field-notes/field-note-004-20" className="hover:text-foreground">004.20 →</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}