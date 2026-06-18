import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-border/30 pt-12">
        <div className="md:col-span-2 space-y-4">
          <Link to="/" className="flex flex-col group inline-block">
            <span className="font-serif text-2xl tracking-widest uppercase group-hover:text-muted-foreground transition-colors">
              Elian Voigt
            </span>
          </Link>
          <p className="font-serif text-sm text-muted-foreground max-w-md leading-relaxed">
            Elian Voigt is the literary fiction identity of FORMÆTRIX Imprint, publishing novels about language, memory, grief, archives, ritual, bureaucracy, and the strange machinery beneath ordinary life.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="metadata-label">Archive</h3>
          <ul className="space-y-2 metadata-text">
            <li><Link to="/archive" className="hover:text-muted-foreground transition-colors">Index</Link></li>
            <li><Link to="/archive/field-notes" className="hover:text-muted-foreground transition-colors">Field Notes</Link></li>
            <li><Link to="/archive/taxonomy" className="hover:text-muted-foreground transition-colors">Taxonomy</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="metadata-label">Institutional</h3>
          <ul className="space-y-2 metadata-text">
            <li><Link to="/about" className="hover:text-muted-foreground transition-colors">About</Link></li>
            <li><Link to="/privacy" className="hover:text-muted-foreground transition-colors">Privacy Policy</Link></li>
            <li><a href="https://formatrix.press" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">FORMÆTRIX Imprint</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 footer-attribution">
        <div className="metadata-text" style={{ margin: 0 }}>© 2026 ELIAN VOIGT / FORMÆTRIX IMPRINT.</div>
        <div className="metadata-text" style={{ margin: 0 }}>CUSTODIAL RECORD: RYAN J. PYLES.</div>
        <div className="metadata-text opacity-40" style={{ margin: 0 }}>ALL RIGHTS RESERVED.</div>
      </div>
    </footer>
  );
}