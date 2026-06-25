import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ArchiveMetadataRail from '@/components/ArchiveMetadataRail.jsx';
import ArchiveQuoteFragment from '@/components/ArchiveQuoteFragment.jsx';
import ArchiveExcerpt from '@/components/ArchiveExcerpt.jsx';
import RelatedRecords from '@/components/RelatedRecords.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';
import ArticleSchema from '@/components/ArticleSchema.jsx';
import pb from '@/lib/pocketbaseClient';

export default function DeclensionsOfDarkWaterArchive() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    pb.collection('quotes').getFullList({
      filter: 'bookTitle="Declensions of Dark Water"',
      $autoCancel: false
    }).then(setQuotes).catch(console.error);
  }, []);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "Declensions of Dark Water Archive",
        "description": "Coastal linguistics, weather anomalies, and the grammar of the drowned.",
        "url": "https://elianvoigt.com/archive/declensions-of-dark-water",
        "isPartOf": { "@id": "https://elianvoigt.com/archive" }
      },
      {
        "@type": "Dataset",
        "name": "Declensions of Dark Water Dataset",
        "description": "Primary archival materials pertaining to coastal linguistics and semantic decay.",
        "creator": { "@type": "Organization", "name": "FORMÆTRIX Imprint" },
        "isPartOf": { "@type": "Dataset", "name": "Elian Voigt Literary Archive" },
        "keywords": ["Language", "Coastal Folklore", "Grief", "Ritual", "Translation", "Coastal-Records"]
      },
      {
        "@type": "ItemList",
        "name": "Archived Fragments",
        "itemListElement": quotes.map((q, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": `Fragment: ${q.classification || 'Unclassified'}`
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--coastal-damp))] text-foreground">
      <Helmet>
        <title>Archive: Declensions of Dark Water | Elian Voigt</title>
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Archive", url: "/archive" },
        { name: "Declensions of Dark Water", url: "/archive/declensions-of-dark-water" }
      ]} />

      <ArticleSchema 
        headline="Declensions of Dark Water Archive"
        description="Coastal linguistics, weather anomalies, and the grammar of the drowned."
        author="Elian Voigt"
        keywords={['Language', 'Coastal Folklore', 'Grief', 'Ritual']}
        isPartOf={{ name: "Declensions of Dark Water", url: "/archive/declensions-of-dark-water" }}
      />

      <Header />
      
      <main className="pt-32 pb-32 max-w-4xl mx-auto px-6">
        <ArchiveMetadataRail 
          id="DDW-001" 
          status="ACTIVE RECOVERY" 
          classification="COASTAL LINGUISTICS" 
          source="Brynjavík Municipal Archive" 
          restorationLevel="PARTIAL RECONSTRUCTION"
          accessLevel="LEVEL 3 CLEARANCE"
          relatedThemes={['LANGUAGE', 'COASTAL', 'RITUAL']}
          relatedLocations={['BRYNJAVÍK', 'VESTFIRÐIR']}
        />
        
        <h1 className="font-serif text-4xl md:text-5xl mb-8 uppercase tracking-widest border-b border-border/30 pb-8">
          Declensions of Dark Water
        </h1>

        <section className="mb-12 font-serif text-lg leading-relaxed text-muted-foreground border-l-2 border-border/50 pl-4 py-2">
          <p>
            This archival record documents coastal linguistics and semantic decay, forming a critical part of the archive system explored in the novel *Declensions of Dark Water* by Elian Voigt. The preservation logs indicate severe structural instability within the primary text.
          </p>
        </section>

        <div className="mb-12 p-6 bg-muted/20 border-l-2 border-border/50 font-mono text-sm space-y-2">
          <p className="uppercase tracking-widest text-muted-foreground mb-4">PRESERVATION NOTE 004</p>
          <p>The original manuscript contained seventeen instances of linguistic instability. Restoration efforts have stabilized twelve. Five remain contested.</p>
          <p>Status: PARTIAL RECONSTRUCTION.</p>
          <p>Custodian: Department of Coastal Linguistics.</p>
          <p>Recovery date: 2024-11-03.</p>
        </div>

        <div className="mb-16">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">RECOVERED TRANSCRIPT — SOURCE DEGRADED BY SALT EXPOSURE</h3>
          <ArchiveExcerpt 
            title="EXCERPT I: THE ARRIVAL" 
            type="vikamal"
            content={{
              icelandic: "Vatnið man ekki eftir þér, en það þekkir þyngd þína.",
              english: "The water does not remember you, but it knows your weight."
            }} 
          />
          <div className="mt-4 font-mono text-[10px] text-muted-foreground uppercase space-y-1">
            <p>Cross-reference markers indicate alignment with DECLENSIONAL EVENT CLASS B.</p>
            <p>Institutional analysis: The text demonstrates active resistance to translation.</p>
          </div>
        </div>

        <div className="my-16">
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-8">Recovered Fragments</h2>
          {quotes.map(q => <ArchiveQuoteFragment key={q.id} quote={q} department="coastal" />)}
        </div>

        <RelatedRecords 
          currentBook="declensions-of-dark-water"
          currentTheme="Language"
          currentLocation="Brynjavík"
        />
      </main>
      <Footer />
    </div>
  );
}