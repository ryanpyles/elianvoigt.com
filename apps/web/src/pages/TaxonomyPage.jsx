import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ArchiveMetadataRail from '@/components/ArchiveMetadataRail.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';
import RelatedRecords from '@/components/RelatedRecords.jsx';

export default function TaxonomyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "Archive Taxonomy — Elian Voigt",
        "description": "Institutional taxonomy and classification systems for the Elian Voigt archive.",
        "url": "https://elianvoigt.com/archive/taxonomy",
        "publisher": { "@type": "Organization", "name": "FORMÆTRIX Imprint" }
      },
      {
        "@type": "DefinedTerm",
        "name": "LINGUISTIC HOLD",
        "description": "Text quarantined due to referential instability.",
        "inDefinedTermSet": "Archive Classification System",
        "sameAs": "https://elianvoigt.com/archive/terminology#linguistic-hold"
      },
      {
        "@type": "DefinedTerm",
        "name": "FIELD NOTE",
        "description": "Primary observation recorded in situ.",
        "inDefinedTermSet": "Archive Classification System",
        "sameAs": "https://elianvoigt.com/archive/terminology#field-note"
      },
      {
        "@type": "DefinedTerm",
        "name": "MUNICIPAL RECORD",
        "description": "Official documentation from civic authorities.",
        "inDefinedTermSet": "Archive Classification System",
        "sameAs": "https://elianvoigt.com/archive/terminology#municipal-record"
      },
      {
        "@type": "DefinedTerm",
        "name": "ARCHIVAL FRAGMENT",
        "description": "A discrete piece of text recovered from a degraded source.",
        "inDefinedTermSet": "Archive Classification System",
        "sameAs": "https://elianvoigt.com/archive/terminology#archival-fragment"
      },
      {
        "@type": "DefinedTerm",
        "name": "COASTAL SURVEY",
        "description": "Geographic and meteorological data linked to linguistic anomalies.",
        "inDefinedTermSet": "Archive Classification System"
      },
      {
        "@type": "DefinedTerm",
        "name": "EVIDENTIARY TRANSCRIPT",
        "description": "Verbatim record of spoken or recorded audio.",
        "inDefinedTermSet": "Archive Classification System",
        "sameAs": "https://elianvoigt.com/archive/terminology#evidentiary-transcript"
      },
      {
        "@type": "DefinedTerm",
        "name": "CONTAINMENT NOTICE",
        "description": "Warning attached to hazardous or cognitively dangerous texts.",
        "inDefinedTermSet": "Archive Classification System"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Archive Taxonomy — Elian Voigt | FORMÆTRIX Imprint</title>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Archive", url: "/archive" },
        { name: "Taxonomy", url: "/archive/taxonomy" }
      ]} />

      <Header />
      
      <main className="pt-32 pb-32 max-w-4xl mx-auto px-6">
        <ArchiveMetadataRail 
          id="EV-TAX-PUB" 
          status="PARTIAL RELEASE" 
          classification="INSTITUTIONAL REFERENCE" 
          source="Central Custodial Database" 
          restorationLevel="VERIFIED"
          accessLevel="PUBLIC"
          relatedThemes={['INSTITUTIONS', 'PROCEDURE']}
        />
        
        <h1 className="font-serif text-4xl md:text-5xl mb-8 uppercase tracking-widest border-b border-border/30 pb-8">
          Institutional Taxonomy
        </h1>

        <section className="mb-12 font-serif text-[0.9rem] leading-[1.5] opacity-85 border-l-2 border-border/50 pl-4 py-2">
          <p>
            This reference document establishes the semantic hierarchy used across all Elian Voigt publications. Strict adherence to these classifications ensures referential integrity when interacting with archival fragments, field notes, and municipal records. For detailed vocabulary, consult the <Link to="/archive/terminology" className="editorial-link opacity-unstable">Terminology Index</Link>.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mono-text-small mb-6 border-b border-border/10 pb-2">
            I. Archive Classification Systems <span className="flicker-restricted">[REDACTED]</span>
          </h2>
          <div className="space-y-6 font-serif text-[0.9rem] leading-[1.5] opacity-85">
            <p><strong>01. <Link to="/archive/terminology#archival-fragment" className="hover:opacity-70 transition-opacity">ARCHIVAL FRAGMENT</Link>:</strong> A discrete piece of text recovered from a degraded source. Requires provenance metadata and custodial sign-off before integration.</p>
            <p><strong>02. <Link to="/archive/terminology#field-note" className="hover:opacity-70 transition-opacity">FIELD NOTE</Link>:</strong> Primary observation recorded in situ. Subject to environmental degradation and subjective bias.</p>
            <p><strong>03. PARTIAL RECONSTRUCTION:</strong> A document assembled from multiple incomplete sources. Must note confidence level and points of interpolation.</p>
            
            <div className="pl-4 border-l border-border/20 my-4">
              <p className="line-through opacity-50"><strong>04. ~~ARCHIVAL FRAGMENT~~</strong></p>
              <p className="mono-text-small text-[0.65rem] mt-1">Status: SUPERSEDED BY PARTIAL RECONSTRUCTION | Last used: 2019</p>
            </div>

            <p><strong>05. <Link to="/archive/terminology#municipal-record" className="hover:opacity-70 transition-opacity">MUNICIPAL RECORD</Link>:</strong> Official documentation from civic authorities. Often sterilized or redacted to comply with local ordinances.</p>
            <p><strong>06. <Link to="/archive/terminology#evidentiary-transcript" className="hover:opacity-70 transition-opacity">EVIDENTIARY TRANSCRIPT</Link>:</strong> Verbatim record of spoken or recorded audio. Must include timestamp and anomaly markers.</p>
            <p><strong>07. <Link to="/archive/terminology#linguistic-hold" className="hover:opacity-70 transition-opacity">LINGUISTIC HOLD</Link>:</strong> Text quarantined due to referential instability or translation hazards. Access strictly monitored.</p>
            
            <div className="pl-4 border-l border-border/20 my-4">
              <p className="opacity-50"><strong>08. [UNAVAILABLE]</strong></p>
              <p className="mono-text-small text-[0.65rem] mt-1">Status: UNAVAILABLE | Reason: [RESTRICTED]</p>
            </div>

            <p><strong>09. RESTORATION STATUS:</strong> Meta-document detailing the recovery process of another file. Tracks degradation vectors.</p>
            
            {/* Skipped 10, 11 */}
            
            <div className="pl-4 border-l border-border/20 my-4">
              <p className="opacity-50"><strong>12. [UNAVAILABLE]</strong></p>
              <p className="mono-text-small text-[0.65rem] mt-1">Status: UNAVAILABLE | Reason: [RESTRICTED]</p>
            </div>

            {/* Skipped 13, 14 */}

            <p><strong>15. COASTAL SURVEY:</strong> Geographic and meteorological data linked to linguistic anomalies. Primarily associated with the Brynjavík sector.</p>
            <p><strong>16. SITE RECORD:</strong> Physical description of a location where an event or recovery occurred. Includes coordinate drift data.</p>
            
            {/* Skipped 17 */}

            <p><strong>18. PRESERVATION LOG:</strong> Custodial record of document degradation over time. Tracks the half-life of specific memories.</p>
            
            {/* Skipped 19 */}

            <p className="opacity-60"><strong>20. [RESTRICTED]</strong></p>

            <div className="mt-8 pt-4 border-t border-border/10 mono-text-small text-[0.75rem]">
              Related terms: PARTIAL RECONSTRUCTION, <span className="opacity-40">[INACTIVE: LINGUISTIC VARIANT]</span>, EVIDENTIARY FRAGMENT
            </div>
          </div>
        </section>

        <RelatedRecords currentTheme="Institutions" />

      </main>
      <Footer />
    </div>
  );
}