import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ArchiveMetadataRail from '@/components/ArchiveMetadataRail.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';
import RelatedRecords from '@/components/RelatedRecords.jsx';
import DatasetSchema from '@/components/DatasetSchema.jsx';
import RetrievalTerminal from '@/components/RetrievalTerminal.jsx';

export default function CoastalRecordsThemePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "Thematic Hub: Coastal Records",
        "description": "Institutional analysis of environmental pressure and geographic instability on the archive.",
        "url": "https://elianvoigt.com/archive/themes/coastal-records",
        "isPartOf": { "@type": "CollectionPage", "url": "https://elianvoigt.com/archive" }
      },
      {
        "@type": "CreativeWork",
        "name": "Coastal Records",
        "author": { "@type": "Person", "name": "Elian Voigt" }
      },
      {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Declensions of Dark Water", "url": "https://elianvoigt.com/archive/declensions-of-dark-water" },
          { "@type": "ListItem", "position": 2, "name": "Summer of the Glass Bees", "url": "https://elianvoigt.com/archive/summer-of-the-glass-bees" }
        ]
      }
    ]
  };

  return (
    <div className="archive-page min-h-screen bg-[hsl(var(--coastal-damp))] text-foreground">
      <Helmet>
        <title>Coastal Records — Thematic Hub | Elian Voigt</title>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <RetrievalTerminal />

      <div className="main-content">
        <DatasetSchema 
          name="Coastal Degradation Dataset"
          description="Dataset containing site records, coastal surveys, and environmentally degraded fragments."
          url="/archive/themes/coastal-records"
          keywords={["Coastal", "Geography", "Environmental Pressure", "Survey"]}
        />

        <BreadcrumbSchema items={[
          { name: "Home", url: "/" },
          { name: "Archive", url: "/archive" },
          { name: "Themes", url: "/archive/taxonomy" },
          { name: "Coastal Records", url: "/archive/themes/coastal-records" }
        ]} />

        <Header />
        
        <main className="pt-32 pb-32 max-w-4xl mx-auto px-6 sparse-section">
          <ArchiveMetadataRail 
            id="HUB-CST-06" 
            status="ACTIVE RECOVERY" 
            classification="THEMATIC CLUSTER" 
            source="Brynjavík Sector" 
            accessLevel="PUBLIC"
            relatedBooks={[
              {title: 'Declensions of Dark Water', url: '/archive/declensions-of-dark-water'},
              {title: 'Summer of the Glass Bees', url: '/archive/summer-of-the-glass-bees'}
            ]}
          />
          
          <h1 className="literary-statement-secondary border-b border-border/30 pb-8" style={{ padding: 0, margin: '0 0 2rem 0' }}>
            Coastal Records
          </h1>

          <section className="mb-12 operational-description border-l-2 border-border/50 pl-4 py-2">
            <p>
              Coastal environments within the Elian Voigt archive act as pressure cookers for geographic and semantic instability. FORMÆTRIX Imprint maintains these records to track how extreme weather anomalies compromise both human memory and municipal containment.
            </p>
          </section>

          <section className="mb-16 operational-text space-y-6">
            <p>
              The archive treats the coastline not as a physical location, but as an active deteriorating agent. Environmental pressure routinely causes coordinate drift, salt-degradation of primary transcripts, and the spontaneous generation of non-stable referents.
            </p>
          </section>

          <section className="mb-16 medium-section">
            <h2 className="operational-label mb-6 border-b border-border/10 pb-2">
              Thematic Centerpiece
            </h2>
            <div className="p-8 bg-muted/20 border border-border/50 relative shadow-sm">
              <div className="absolute top-0 right-0 bg-foreground text-background metadata-footnote px-2 py-1">
                RECOVERED TRANSCRIPT
              </div>
              <blockquote className="literary-statement-secondary italic mb-6 mt-4" style={{ padding: 0, margin: 0, fontSize: '1.5rem' }}>
                "The sea kept the parts grammar could not. Every time the tide receded, we lost another noun to the undertow. We were left pointing at the water, trying to remember the word for drowning."
              </blockquote>
              <div className="dense-section space-y-1">
                <p className="metadata-label">SOURCE: <span className="metadata-value">Declensions of Dark Water</span></p>
                <p className="metadata-label">STATUS: <span className="metadata-value">DEGRADED</span></p>
              </div>
            </div>
          </section>

          <section className="mb-16 operational-text space-y-6">
            <h2 className="operational-label mb-6 border-b border-border/10 pb-2">
              Semantic Clustering
            </h2>
            <p>
              <em>Declensions of Dark Water</em> demonstrates language under environmental pressure—a linguistic event where the vocabulary itself rots. Conversely, <em>Summer of the Glass Bees</em> examines municipal coastal systems, highlighting the administrative control necessary to prevent the coastline from eroding civic reality entirely.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="p-6 border border-border/30 bg-background/50">
                <p className="operational-description italic mb-4">"Coordinate drift detected: the lighthouse moved fourteen meters inland during the storm. The municipal maps have been updated retroactively to hide the error."</p>
                <p className="metadata-footnote">FRAG-012 // SITE RECORD</p>
              </div>
              <div className="p-6 border border-border/30 bg-background/50">
                <p className="operational-description italic mb-4">"The salt ate through the physical contract, leaving only the obligations intact."</p>
                <p className="metadata-footnote">FRAG-044 // COASTAL SURVEY</p>
              </div>
              <div className="p-6 border border-border/30 md:col-span-2 bg-background/50 text-center opacity-40">
                <p className="metadata-footnote">RECORD DEGRADED — UNAVAILABLE</p>
              </div>
            </div>
          </section>

          <section className="mb-16 operational-text space-y-6">
            <h2 className="operational-label mb-6 border-b border-border/10 pb-2">
              Cross-Thematic Connections
            </h2>
            <p>
              Coastal anomalies exact immense environmental pressure on <strong>Language</strong>, stripping syntax bare until only the heaviest words remain. <strong>Institutions</strong> desperately attempt municipal control of coastal space, fighting a losing battle against coordinate drift. This physical erosion perfectly mirrors <strong>Memory</strong> loss, where the landscape forgets the events that occurred upon it.
            </p>
          </section>

          <RelatedRecords currentTheme="Coastal-Records" />

          <section className="pt-8 mt-16 border-t border-border/30 dense-section space-y-2">
            <p className="metadata-label">PROCEDURAL SUMMARY</p>
            <p className="metadata-footnote">Coastal instability requires constant surveillance. Ongoing surveys indicate that the Brynjavík sector is experiencing severe coordinate drift. All recovered records from this sector must undergo salt-sterilization protocols before integration.</p>
          </section>

        </main>
        <Footer />
      </div>
    </div>
  );
}