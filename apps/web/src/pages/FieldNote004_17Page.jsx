import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export default function FieldNote004_17Page() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-ledger paper-grain fold-shadow relative">
      <Helmet><title>ARCHIVE 004.17 - NOMINATIVE AVOIDANCE</title></Helmet>
      <Header />
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6 relative z-20">
        <nav className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-12">
          <Link to="/field-notes" className="hover:text-foreground">Field Notes</Link> &gt; 
          <Link to="/field-notes/vikamal-coastal-grammar" className="hover:text-foreground ml-2">Vikamál</Link> &gt; 004.17
        </nav>
        
        <header className="border-b border-border/50 pb-8 mb-12 font-mono text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>FILE: MUNICIPAL HOLD 004.17b</span>
            <span>STATUS: <span className="redacted">RESTRICTED</span></span>
          </div>
          <div className="mt-2">RECOVERED: 19<span className="redacted">██</span></div>
        </header>

        <article className="font-serif text-lg leading-loose space-y-6">
          <h1 className="text-3xl mb-8">CASE I: NOMINATIVE AVOIDANCE</h1>
          <p>The sea must never receive subjecthood. To grant it the nominative case is to invite it to act upon you.</p>
          <p className="restoration-note">[Fragment torn. Evidence of water damage. Marginalia indicates a previous translator drowned before finishing this section.]</p>
          <p>When speaking of the coastline, use the passive voice. The shoreline <em>was breached</em>, never <em>the ocean breached</em>. Agency must be stripped from the water at all costs.</p>
          <p className="opacity-50 mt-12 font-mono text-xs">...end of recovered fragment.</p>
        </article>

        <div className="mt-24 border-t border-border/50 pt-8 font-mono text-xs">
          <span className="text-muted-foreground">CROSS-REFERENCE: </span>
          <Link to="/field-notes/field-note-004-18" className="hover:text-foreground">004.18 (ACCUSATIVE)</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}