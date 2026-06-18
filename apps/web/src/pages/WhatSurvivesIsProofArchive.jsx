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

export default function WhatSurvivesIsProofArchive() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    pb.collection('quotes').getFullList({
      filter: 'bookTitle="What Survives Is Proof"',
      $autoCancel: false
    }).then(setQuotes).catch(console.error);
  }, []);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "What Survives Is Proof Archive",
    "description": "Forensic fragments, evidence boards, and incomplete timelines.",
    "url": "https://elianvoigt.com/archive/what-survives-is-proof",
    "isPartOf": { "@type": "CollectionPage", "url": "https://elianvoigt.com/archive" }
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--forensic-sparse))] text-foreground">
      <Helmet>
        <title>Archive: What Survives Is Proof | Elian Voigt</title>
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Archive", url: "/archive" },
        { name: "What Survives Is Proof", url: "/archive/what-survives-is-proof" }
      ]} />

      <ArticleSchema 
        headline="What Survives Is Proof Archive"
        description="Forensic fragments, evidence boards, and incomplete timelines."
        author="Elian Voigt"
        keywords={['Grief', 'Evidence', 'Memory', 'Institutional Erasure']}
        isPartOf={{ name: "What Survives Is Proof", url: "/archive/what-survives-is-proof" }}
      />

      <Header />
      
      <main className="pt-32 pb-32 max-w-4xl mx-auto px-6">
        <ArchiveMetadataRail 
          id="WSP-EV-01" 
          status="EVIDENCE LOGGED" 
          classification="FORENSIC FRAGMENTS" 
          restorationLevel="UNRESOLVED OVERLAY"
          accessLevel="LEVEL 2 CLEARANCE"
          relatedThemes={['EVIDENCE', 'MEMORY', 'INSTITUTIONAL ERASURE']}
        />
        
        <h1 className="font-serif text-4xl md:text-5xl mb-8 uppercase tracking-widest border-b border-border/30 pb-8">
          What Survives Is Proof
        </h1>

        <section className="mb-12 font-serif text-lg leading-relaxed text-muted-foreground border-l-2 border-border/50 pl-4 py-2">
          <p>
            The evidentiary transcripts catalogued below correspond to the systemic cover-ups investigated in the novel *What Survives Is Proof* by Elian Voigt, distributed by FORMÆTRIX Imprint. The archive notes significant contradictions across multiple restoration layers.
          </p>
        </section>

        <div className="mb-12 p-6 bg-white dark:bg-black border-l-2 border-border/50 shadow-sm font-mono text-sm space-y-2">
          <p className="uppercase tracking-widest text-muted-foreground mb-4">ARCHIVAL ANNOTATION 019</p>
          <p>The evidentiary timeline is incomplete. Several fragments exhibit UNRESOLVED OVERLAY, indicating multiple contradictory events occurred simultaneously.</p>
          <p>Status: EVIDENCE LOGGED.</p>
          <p>Custodian: Forensic Reconstruction Unit.</p>
        </div>

        <div className="mb-16">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">RECOVERED TRANSCRIPT — FORENSIC OVERLAY ACTIVE</h3>
          <ArchiveExcerpt 
            title="EVIDENCE TAG: THE OPENING" 
            content="The body was found where the map said it shouldn't be. The coordinates were correct, but the geography had shifted overnight." 
          />
          <div className="mt-4 font-mono text-[10px] text-muted-foreground uppercase space-y-1">
            <p>Cross-reference markers indicate alignment with SITE RECORD 65N-01.</p>
            <p>Institutional analysis: Geographic instability confirmed by secondary surveys.</p>
          </div>
        </div>

        <div className="my-16">
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-8">Evidentiary Fragments</h2>
          {quotes.map(q => <ArchiveQuoteFragment key={q.id} quote={q} department="forensic" />)}
        </div>

        <RelatedRecords 
          currentBook="what-survives-is-proof"
          currentTheme="Grief"
          currentClassification="FORENSIC FRAGMENTS"
        />
      </main>
      <Footer />
    </div>
  );
}