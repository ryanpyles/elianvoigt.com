import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ArchiveMetadataRail from '@/components/ArchiveMetadataRail.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';
import RelatedRecords from '@/components/RelatedRecords.jsx';

export default function GriefThemePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Thematic Hub: Grief as System",
    "description": "Institutional analysis of grief as procedural compression, memory flattening, and identity erosion.",
    "url": "https://elianvoigt.com/archive/themes/grief",
    "isPartOf": { "@type": "CollectionPage", "url": "https://elianvoigt.com/archive" }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Grief as System — Thematic Hub | Elian Voigt</title>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Archive", url: "/archive" },
        { name: "Themes", url: "/archive/taxonomy" },
        { name: "Grief as System", url: "/archive/themes/grief" }
      ]} />

      <Header />
      
      <main className="pt-32 pb-32 max-w-4xl mx-auto px-6">
        <ArchiveMetadataRail 
          id="HUB-GRF-02" 
          status="ACTIVE" 
          classification="THEMATIC CLUSTER" 
          source="Central Custodial Database" 
          accessLevel="PUBLIC"
          relatedBooks={[{title: 'What Survives Is Proof', url: '/archive/what-survives-is-proof'}]}
        />
        
        <h1 className="font-serif text-4xl md:text-5xl mb-8 uppercase tracking-widest border-b border-border/30 pb-8">
          Grief as System
        </h1>

        <section className="mb-12 font-serif text-lg leading-relaxed text-muted-foreground border-l-2 border-border/50 pl-4 py-2">
          <p>
            The institutional treatment of emotional mass—specifically grief—is a recurring protocol in the literature of Elian Voigt, distributed under FORMÆTRIX Imprint. The archive treats loss not as sentiment, but as a physical pressure that deforms surrounding records.
          </p>
        </section>

        <section className="mb-16 font-serif text-lg leading-relaxed space-y-6">
          <p>
            The archive does not recognize grief as an emotion; it recognizes it as a system of compression. When an entity experiences profound loss, the resulting psychological mass must be accommodated within the physical and temporal architecture of the environment. 
          </p>
          <p>
            Custodial records indicate that uncontained grief acts as a localized gravity well, distorting evidentiary transcripts and causing preservation logs to register false positives.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6 border-b border-border/10 pb-2">
            Thematic Centerpiece
          </h2>
          <div className="p-8 bg-white dark:bg-black border border-border/30 shadow-sm relative">
            <div className="absolute top-0 right-0 bg-foreground text-background font-mono text-[10px] px-2 py-1 uppercase tracking-widest">
              EVIDENTIARY FRAGMENT 01
            </div>
            <blockquote className="font-serif text-2xl italic mb-6 mt-4">
              "That's what breaks me up from the half-dream. Not the sound of the door, but the absolute, verified silence of the space where you used to be. The room has memorized your absence."
            </blockquote>
            <div className="font-mono text-xs text-muted-foreground space-y-1">
              <p>SOURCE: What Survives Is Proof</p>
              <p>STATUS: VERIFIED</p>
              <p>CUSTODIAL NOTE: Audio transcript exhibits micro-abrasions consistent with emotional compression.</p>
            </div>
          </div>
        </section>

        <RelatedRecords currentTheme="Grief" />

        <section className="pt-8 mt-16 border-t border-border/30 font-mono text-xs text-muted-foreground uppercase tracking-widest space-y-2">
          <p>PROCEDURAL CLOSING</p>
          <p>All emotional responses to the archived materials must be logged and submitted for restoration. The archive assumes no liability for psychological resonance. Review of these materials constitutes acceptance of the associated risks.</p>
        </section>

      </main>
      <Footer />
    </div>
  );
}