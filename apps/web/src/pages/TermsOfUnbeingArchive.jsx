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

export default function TermsOfUnbeingArchive() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    pb.collection('quotes').getFullList({
      filter: 'bookTitle="Terms of Unbeing"',
      $autoCancel: false
    }).then(setQuotes).catch(console.error);
  }, []);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Terms of Unbeing Archive",
    "description": "Contractual paradoxes, recursive clauses, and legal unmaking.",
    "url": "https://elianvoigt.com/archive/terms-of-unbeing",
    "isPartOf": { "@type": "CollectionPage", "url": "https://elianvoigt.com/archive" }
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--contractual-dense))] text-foreground">
      <Helmet>
        <title>Archive: Terms of Unbeing | Elian Voigt</title>
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Archive", url: "/archive" },
        { name: "Terms of Unbeing", url: "/archive/terms-of-unbeing" }
      ]} />

      <ArticleSchema 
        headline="Terms of Unbeing Archive"
        description="Contractual paradoxes, recursive clauses, and legal unmaking."
        author="Elian Voigt"
        keywords={['Institutions', 'Identity', 'Contracts', 'Bureaucracy']}
        isPartOf={{ name: "Terms of Unbeing", url: "/archive/terms-of-unbeing" }}
      />

      <Header />
      
      <main className="pt-32 pb-32 max-w-4xl mx-auto px-6">
        <ArchiveMetadataRail 
          id="TOU-999" 
          status="UNDER REVIEW" 
          classification="LEGAL FRAGMENTS" 
          restorationLevel="CONTESTED"
          accessLevel="LEVEL 4 CLEARANCE"
          relatedThemes={['BUREAUCRACY', 'ERASURE', 'CONTRACTS']}
          relatedLocations={['FAUST RESIDENCES']}
        />
        
        <h1 className="font-serif text-4xl md:text-5xl mb-8 uppercase tracking-widest border-b border-border/30 pb-8">
          Terms of Unbeing
        </h1>

        <section className="mb-12 font-serif text-lg leading-relaxed text-muted-foreground border-l-2 border-border/50 pl-4 py-2">
          <p>
            These legal fragments and procedural notices trace the contractual dissolution of identity, serving as primary evidence for the events depicted in *Terms of Unbeing* by Elian Voigt. The clauses exhibit highly recursive and hostile syntax.
          </p>
        </section>

        <div className="mb-12 p-6 bg-muted/20 border-l-2 border-border/50 font-mono text-sm space-y-2">
          <p className="uppercase tracking-widest text-muted-foreground mb-4">PRESERVATION NOTE 881</p>
          <p>The contractual clauses contained herein exhibit recursive properties. Reading Subsection A legally binds the reader to Subsection B, which retroactively alters the text of Subsection A.</p>
          <p>Status: INTERNAL REVIEW.</p>
          <p>Custodian: Department of Legal Unmaking.</p>
        </div>

        <div className="mb-16">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">RECOVERED TRANSCRIPT — PROCEDURAL OVERLAY ACTIVE</h3>
          <ArchiveExcerpt 
            title="CLAUSE 4.1.A: GIDEON & ARYA" 
            content="The contract stipulated that upon signing, the signatory's past would become property of the firm. Any memories retained were considered unauthorized reproductions." 
          />
          <div className="mt-4 font-mono text-[10px] text-muted-foreground uppercase space-y-1">
            <p>Cross-reference markers indicate alignment with CONTRACTUAL EVENT CLASS C.</p>
            <p>Institutional analysis: The clause is self-enforcing and requires no external authority.</p>
          </div>
        </div>

        <div className="my-16">
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-8">Procedural Notices</h2>
          {quotes.map(q => <ArchiveQuoteFragment key={q.id} quote={q} department="legal" />)}
        </div>

        <RelatedRecords 
          currentBook="terms-of-unbeing"
          currentTheme="Institutions"
          currentLocation="Faust Residences"
        />
      </main>
      <Footer />
    </div>
  );
}