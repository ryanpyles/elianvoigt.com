import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ArchiveMetadataRail from '@/components/ArchiveMetadataRail.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';
import RelatedRecords from '@/components/RelatedRecords.jsx';

export default function LanguageThemePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Thematic Hub: Language as System",
    "description": "Institutional analysis of language as a containment system, linguistic instability, and translation variants.",
    "url": "https://elianvoigt.com/archive/themes/language",
    "isPartOf": { "@type": "CollectionPage", "url": "https://elianvoigt.com/archive" }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Language as System — Thematic Hub | Elian Voigt</title>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Archive", url: "/archive" },
        { name: "Themes", url: "/archive/taxonomy" },
        { name: "Language as System", url: "/archive/themes/language" }
      ]} />

      <Header />
      
      <main className="pt-32 pb-32 max-w-4xl mx-auto px-6">
        <ArchiveMetadataRail 
          id="HUB-LANG-01" 
          status="ACTIVE" 
          classification="THEMATIC CLUSTER" 
          source="Central Custodial Database" 
          accessLevel="PUBLIC"
          relatedBooks={[{title: 'Declensions of Dark Water', url: '/archive/declensions-of-dark-water'}]}
        />
        
        <h1 className="font-serif text-4xl md:text-5xl mb-8 uppercase tracking-widest border-b border-border/30 pb-8">
          Language as System
        </h1>

        <section className="mb-12 font-serif text-lg leading-relaxed text-muted-foreground border-l-2 border-border/50 pl-4 py-2">
          <p>
            This thematic hub aggregates records concerning linguistic instability. It forms the philosophical backbone of the works of Elian Voigt. The archive recognizes that grammar is not descriptive; it is infrastructural.
          </p>
        </section>

        <section className="mb-16 font-serif text-lg leading-relaxed space-y-6">
          <p>
            Within the institutional framework, language is not merely a descriptive tool; it is a containment system. The archive recognizes that words do not passively reflect reality—they enforce it. When linguistic instability occurs, it is treated not as a grammatical error, but as a structural breach. 
          </p>
          <p>
            Custodial analysis indicates that certain environments—particularly coastal zones subject to extreme weather anomalies—exert a degrading pressure on syntax. The resulting linguistic holds require specialized quarantine protocols.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6 border-b border-border/10 pb-2">
            Thematic Centerpiece
          </h2>
          <div className="p-8 bg-muted/10 border border-border/30 relative">
            <div className="absolute top-0 right-0 bg-foreground text-background font-mono text-[10px] px-2 py-1 uppercase tracking-widest">
              EXCERPT: DECLENSIONS
            </div>
            <blockquote className="font-serif text-2xl italic mb-6 mt-4">
              "The forms must be precise. If you decline the noun incorrectly, the water does not simply misunderstand you; it redefines you according to the error. A misplaced vowel is a drowning."
            </blockquote>
            <div className="font-mono text-xs text-muted-foreground space-y-1">
              <p>SOURCE: Declensions of Dark Water</p>
              <p>STATUS: VERIFIED (WITH ANOMALIES)</p>
              <p>CUSTODIAL NOTE: The text exhibits minor referential drift during high tide.</p>
            </div>
          </div>
        </section>

        <RelatedRecords currentTheme="Language" />

        <section className="pt-8 mt-16 border-t border-border/30 font-mono text-xs text-muted-foreground uppercase tracking-widest space-y-2">
          <p>PROCEDURAL CLOSING</p>
          <p>The linguistic parameters defined herein are subject to immediate revision without notice. The Northern Variants remain under review. Custodial personnel are reminded that reading is an act of complicity.</p>
        </section>

      </main>
      <Footer />
    </div>
  );
}