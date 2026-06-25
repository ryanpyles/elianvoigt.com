import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ArchiveMetadataRail from '@/components/ArchiveMetadataRail.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';
import RelatedRecords from '@/components/RelatedRecords.jsx';
import DatasetSchema from '@/components/DatasetSchema.jsx';
import RetrievalTerminal from '@/components/RetrievalTerminal.jsx';

export default function MemoryThemePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "Thematic Hub: Memory as System",
        "description": "Institutional analysis of memory flattening, identity erosion, and absence as evidence.",
        "url": "https://elianvoigt.com/archive/themes/memory",
        "isPartOf": { "@type": "CollectionPage", "url": "https://elianvoigt.com/archive" }
      },
      {
        "@type": "CreativeWork",
        "name": "Memory as System",
        "author": { "@type": "Person", "name": "Elian Voigt" }
      },
      {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "What Survives Is Proof", "url": "https://elianvoigt.com/archive/what-survives-is-proof" },
          { "@type": "ListItem", "position": 2, "name": "Summer of the Glass Bees", "url": "https://elianvoigt.com/archive/summer-of-the-glass-bees" }
        ]
      }
    ]
  };

  return (
    <div className="archive-page min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Memory as System — Thematic Hub | Elian Voigt</title>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <RetrievalTerminal />

      <div className="main-content">
        <DatasetSchema 
          name="Memory Aggregation Dataset"
          description="Dataset containing fragments related to memory flattening and identity erosion."
          url="/archive/themes/memory"
          keywords={["Memory", "Grief", "Erasure", "Institutions"]}
        />

        <BreadcrumbSchema items={[
          { name: "Home", url: "/" },
          { name: "Archive", url: "/archive" },
          { name: "Themes", url: "/archive/taxonomy" },
          { name: "Memory as System", url: "/archive/themes/memory" }
        ]} />

        <Header />
        
        <main className="pt-32 pb-32 max-w-4xl mx-auto px-6 sparse-section">
          <ArchiveMetadataRail 
            id="HUB-MEM-04" 
            status="ACTIVE" 
            classification="THEMATIC CLUSTER" 
            source="Central Custodial Database" 
            accessLevel="PUBLIC"
            relatedBooks={[
              {title: 'What Survives Is Proof', url: '/archive/what-survives-is-proof'},
              {title: 'Summer of the Glass Bees', url: '/archive/summer-of-the-glass-bees'}
            ]}
          />
          
          <h1 className="literary-statement-secondary border-b border-border/30 pb-8" style={{ padding: 0, margin: '0 0 2rem 0' }}>
            Memory as System
          </h1>

          <section className="mb-12 operational-description border-l-2 border-border/50 pl-4 py-2">
            <p>
              Within the Elian Voigt archive structure, memory is never treated as a reliable ledger. Memory is an architecture subject to structural erosion. Absence is not treated as a lack of data, but as the primary evidence of systemic extraction.
            </p>
          </section>

          <section className="mb-16 operational-text space-y-6">
            <p>
              The archive documents memory as a procedural system—one that can be overwritten, flattened, or seized by municipal authority. The flattening of historical continuity often corresponds to a localized gravity well of grief or a direct intervention by institutional bureaucracy.
            </p>
          </section>

          <section className="mb-16 medium-section">
            <h2 className="operational-label mb-6 border-b border-border/10 pb-2">
              Thematic Centerpiece
            </h2>
            <div className="p-8 bg-white dark:bg-black border border-border/30 shadow-sm relative">
              <div className="absolute top-0 right-0 bg-foreground text-background metadata-footnote px-2 py-1">
                EVIDENTIARY FRAGMENT 01
              </div>
              <blockquote className="literary-statement-secondary italic mb-6 mt-4" style={{ padding: 0, margin: 0, fontSize: '1.5rem' }}>
                "We didn't photograph the room to remember what was there. We photographed the dust settling on the floorboards to measure the exact shape of what was taken. The investigation wall is just a map of omissions."
              </blockquote>
              <div className="dense-section space-y-1">
                <p className="metadata-label">SOURCE: <span className="metadata-value">What Survives Is Proof</span></p>
                <p className="metadata-label">STATUS: <span className="metadata-value">VERIFIED</span></p>
                <p className="metadata-footnote">CUSTODIAL NOTE: Archival framing confirms that material loss functions as primary evidence.</p>
              </div>
            </div>
          </section>

          <section className="mb-16 operational-text space-y-6">
            <h2 className="operational-label mb-6 border-b border-border/10 pb-2">
              Semantic Clustering
            </h2>
            <p>
              Memory flattening is explicitly documented in <em>Summer of the Glass Bees</em>, where civic history is sterilized to prevent emotional contagion. Conversely, <em>Terms of Unbeing</em> details identity erosion not as an accident of time, but as a contractual obligation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="p-6 border border-border/20">
                <p className="operational-description italic mb-4">"The preservation log notes that by day forty, the subjects could no longer recall the layout of their childhood homes, only the permit numbers required to modify them."</p>
                <p className="metadata-footnote">FRAG-199 // PRESERVATION LOG</p>
              </div>
              <div className="p-6 border border-border/20">
                <p className="operational-description italic mb-4">"I told them the memory belonged to me. They asked for the receipt. When I couldn't provide one, it was repossessed."</p>
                <p className="metadata-footnote">FRAG-240 // WITNESS ACCOUNT</p>
              </div>
              <div className="p-6 border border-border/20 md:col-span-2">
                <p className="operational-description italic text-muted-foreground opacity-50 mb-4">[RECORD INTENTIONALLY OMITTED BY CUSTODIAL AUTHORITY]</p>
                <p className="metadata-footnote">FRAG-311 // FIELD NOTE (RESTRICTED)</p>
              </div>
            </div>
          </section>

          <section className="mb-16 operational-text space-y-6">
            <h2 className="operational-label mb-6 border-b border-border/10 pb-2">
              Cross-Thematic Connections
            </h2>
            <p>
              Memory's instability is inextricably bound to <strong>Language</strong>—as vocabulary is sterilized, the capacity to remember diminishes. This linguistic loss feeds into <strong>Grief</strong>, creating a feedback loop where the absence of evidence becomes the evidence of loss. Ultimately, the entire system is contained by <strong>Institutions</strong>, which wield procedural containment to ensure memories that threaten civic stability are cleanly erased.
            </p>
          </section>

          <RelatedRecords currentTheme="Memory" />

          <section className="pt-8 mt-16 border-t border-border/30 dense-section space-y-2">
            <p className="metadata-label">PROCEDURAL SUMMARY</p>
            <p className="metadata-footnote">Memory remains inherently unstable across all monitored sectors. Preservation challenges persist due to the volatile nature of the source material. Custodians are advised that attempting to verify a memory may result in its immediate erasure.</p>
          </section>

        </main>
        <Footer />
      </div>
    </div>
  );
}