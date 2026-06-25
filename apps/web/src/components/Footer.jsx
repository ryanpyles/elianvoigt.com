import React from 'react';
import { Link } from 'react-router-dom';
import { links, primaryMessage } from '@/data/siteContent.js';

export default function Footer() {
  const reviewHref = `mailto:${links.pressEmail}?subject=${encodeURIComponent('Review copy request — Elian Voigt')}`;
  const contactHref = `mailto:${links.contactEmail}?subject=${encodeURIComponent('A note for Elian Voigt')}`;

  return (
    <footer className="bg-background pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-border/30 pt-12">
        <div className="md:col-span-2 space-y-4">
          <Link to="/" className="inline-block group">
            <span className="font-serif text-2xl tracking-widest uppercase group-hover:text-muted-foreground transition-colors">
              Elian Voigt
            </span>
          </Link>
          <p className="font-serif text-sm text-muted-foreground max-w-md leading-relaxed">
            {primaryMessage}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="ev-eyebrow">Read</h3>
          <ul className="space-y-2 metadata-text">
            <li><a href="#latest" className="hover:text-foreground transition-colors">Latest release</a></li>
            <li><a href="#reading-order" className="hover:text-foreground transition-colors">Reading order</a></li>
            <li><Link to="/publishing-catalogue" className="hover:text-foreground transition-colors">Full catalogue</Link></li>
            <li><Link to="/archive/field-notes" className="hover:text-foreground transition-colors">Field notes</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="ev-eyebrow">Subscribe &amp; Press</h3>
          <ul className="space-y-2 metadata-text">
            <li>
              <a href={links.substack} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                Substack
              </a>
            </li>
            <li><a href="#subscribe" className="hover:text-foreground transition-colors">Reader list</a></li>
            <li><a href={reviewHref} className="hover:text-foreground transition-colors">Request review copy</a></li>
            <li><a href={contactHref} className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 footer-attribution">
        <div className="metadata-text" style={{ margin: 0 }}>© 2026 ELIAN VOIGT.</div>
        <div className="metadata-text opacity-40" style={{ margin: 0 }}>CUSTODIAL RECORD: RYAN J. PYLES.</div>
        <div className="metadata-text opacity-40" style={{ margin: 0 }}>ALL RIGHTS RESERVED.</div>
      </div>
    </footer>
  );
}
