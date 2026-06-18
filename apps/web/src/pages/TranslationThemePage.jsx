import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ArchiveMetadataRail from '@/components/ArchiveMetadataRail.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';
import RelatedRecords from '@/components/RelatedRecords.jsx';
import DatasetSchema from '@/components/DatasetSchema.jsx';
import RetrievalTerminal from '@/components/RetrievalTerminal.jsx';

export default function TranslationThemePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "Thematic Hub: Translation as System",
        "description": "Institutional analysis of translation, linguistic instability, and untranslatable coastal concepts.",
        "url": "https://elianvoigt.com/archive/themes/translation",
        "isPartOf": { "@type": "CollectionPage", "url": "https://elianvoigt.com/archive" }
      },
      {
        "@type": "CreativeWork",
        "name": "Translation as System",
        "author": { "@type": "Person", "name": "Elian Voigt" }
      },
      {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Declensions of Dark Water", "url": "https://elianvoigt.com/archive/declensions-of-dark-water" },
          { "@type": "ListItem", "position": 2, "name": "Vikamál Fragment", "url": "https://elianvoigt.com/field-notes/vikamal-coastal-grammar" }
        ]
      }
    ]
  };

  return (
    <div className="archive-page min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Translation as System — Thematic Hub | Elian Voigt</title>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <RetrievalTerminal />

      <div className="main-content">
        <DatasetSchema 
          name="Translation Variations Dataset"
          description="Dataset containing translation variants, linguistic holds, and coastal grammar shifts."
          url="/archive/themes/translation"
          keywords={["Translation", "Language", "Coastal-Records", "Linguistics"]}
        />

        <BreadcrumbSchema items={[
          { name: "Home", url: "/" },
          { name: "Archive", url: "/archive" },
          { name: "Themes", url: "/archive/taxonomy" },
          { name: "Translation as System", url: "/archive/themes/translation" }
        ]} />

        <Header />
        
        <main className="pt-32 pb-32 max-w-4xl mx-auto px-6 sparse-section">
          <ArchiveMetadataRail 
            id="HUB-TRN-05" 
            status="ACTIVE" 
            classification="THEMATIC CLUSTER" 
            source="Central Custodial Database" 
            accessLevel="PUBLIC"
            relatedBooks={[{title: 'Declensions of Dark Water', url: '/archive/declensions-of-dark-water'}]}
          />
          
          <h1 className="literary-statement-secondary border-b border-border/30 pb-8" style={{ padding: 0, margin: '0 0 2rem 0' }}>
            Translation as System
          </h1>

          <section className="mb-12 operational-description border-l-2 border-border/50 pl-4 py-2">
            <p>
              Translation is treated by the archive not as a bridge between languages, but as a structural breach. In the works of Elian Voigt, distributed via FORMÆTRIX Imprint, linguistic instability highlights the presence of untranslatable concepts—phenomena that weaponize syntax against the reader.
            </p>
          </section>

          <section className="mb-16 operational-text space-y-6">
            <p>
              The process of translation frequently triggers semantic fracture. When a text from a hostile environment is forced into standard institutional grammar, the original meaning actively resists. This results in translation variants that contradict each other, forcing the archive to implement linguistic holds.
            </p>
          </section>

          <section className="mb-16 medium-section">
            <h2 className="operational-label mb-6 border-b border-border/10 pb-2">
              Thematic Centerpiece
            </h2>
            <div className="p-8 bg-muted/10 border border-border/30 relative">
              <div className="absolute top-0 right-0 bg-foreground text-background metadata-footnote px-2 py-1">
                LINGUISTIC HOLD: VERIFIED
              </div>
              <blockquote className="literary-statement-secondary italic mb-6 mt-4" style={{ padding: 0, margin: 0, fontSize: '1.5rem' }}>
                "We tried to map the grammar of the tide, but the verbs demanded conjugation in a tense that only exists underwater. To translate it perfectly would require the translator to stop breathing."
              </blockquote>
              <div className="dense-section space-y-1">
                <p className="metadata-label">SOURCE: <span className="metadata-value">Declensions of Dark Water</span></p>
                <p className="metadata-label">STATUS: <span className="metadata-value">NON-STABLE REFERENT</span></p>
              </div>
            </div>
          </section>

          <section className="mb-16 operational-text space-y-6">
            <h2 className="operational-label mb-6 border-b border-border/10 pb-2">
              Semantic Clustering
            </h2>
            <p>
              The phenomenon of Vikamál acts as the primary case study for an untranslatable linguistic event. It is a coastal grammar that functions simultaneously as a dialect and an environmental hazard. When translation fails, the text splinters into translation variants.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="p-6 border border-border/20">
                <p className="operational-description italic mb-4">"The English translation reads: 'The sea returned what it took.' The original text reads: 'The sea replaced it with something heavier.'"</p>
                <p className="metadata-footnote">FRAG-081 // TRANSLATION VARIANT</p>
              </div>
              <div className="p-6 border border-border/20 flex flex-col justify-center items-center text-center">
                <p className="operational-description italic text-muted-foreground opacity-50 mb-4">[TRANSLATION UNAVAILABLE — SEMANTIC COLLAPSE]</p>
                <p className="metadata-footnote">FRAG-099 // LINGUISTIC HOLD</p>
              </div>
            </div>
          </section>

          <section className="mb-16 operational-text space-y-6">
            <h2 className="operational-label mb-6 border-b border-border/10 pb-2">
              Cross-Thematic Connections
            </h2>
            <p>
              Translation is the violent intersection of <strong>Language</strong> and <strong>Institutions</strong>. The institutional control of meaning forces untranslatable phenomena into sterilized boxes, resulting in inevitable structural damage. Furthermore, translation loss functions as a form of <strong>Memory</strong> loss, as the original context is overwritten by an institutional approximation.
            </p>
          </section>

          <RelatedRecords currentTheme="Translation" />

          <section className="pt-8 mt-16 border-t border-border/30 dense-section space-y-2">
            <p className="metadata-label">PROCEDURAL SUMMARY</p>
            <p className="metadata-footnote">Translation instability remains a primary vector for semantic contamination. Custodians must rely on approximations when dealing with hazardous syntax. The Northern Variants remain under review.</p>
          </section>

        </main>
        <Footer />
      </div>
    </div>
  );
}