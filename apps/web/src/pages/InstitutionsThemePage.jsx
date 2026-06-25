import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ArchiveMetadataRail from '@/components/ArchiveMetadataRail.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';
import RelatedRecords from '@/components/RelatedRecords.jsx';
import RetrievalTerminal from '@/components/RetrievalTerminal.jsx';

export default function InstitutionsThemePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Thematic Hub: Institutions as System",
    "description": "Institutional analysis of procedural horror, municipal sterilization, and contractual nightmares.",
    "url": "https://elianvoigt.com/archive/themes/institutions",
    "isPartOf": { "@type": "CollectionPage", "url": "https://elianvoigt.com/archive" }
  };

  return (
    <div className="archive-page min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Institutions as System — Thematic Hub | Elian Voigt</title>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <RetrievalTerminal />

      <div className="main-content">
        <BreadcrumbSchema items={[
          { name: "Home", url: "/" },
          { name: "Archive", url: "/archive" },
          { name: "Themes", url: "/archive/taxonomy" },
          { name: "Institutions as System", url: "/archive/themes/institutions" }
        ]} />

        <Header />
        
        <main className="pt-32 pb-32 max-w-4xl mx-auto px-6">
          <ArchiveMetadataRail 
            id="HUB-INST-03" 
            status="ACTIVE" 
            classification="THEMATIC CLUSTER" 
            source="Central Custodial Database" 
            accessLevel="PUBLIC"
            relatedBooks={[{title: 'Terms of Unbeing', url: '/archive/terms-of-unbeing'}]}
          />
          
          <h1 className="font-serif text-4xl md:text-5xl mb-8 uppercase tracking-widest border-b border-border/30 pb-8">
            Institutions as System
          </h1>

          <section className="mb-12 font-serif text-lg leading-relaxed text-muted-foreground border-l-2 border-border/50 pl-4 py-2">
            <p>
              The examination of bureaucratic horror forms a core pillar of the Elian Voigt canon. The archive does not merely collect documents; it is a mechanism that actively shapes reality through procedure.
            </p>
          </section>

          <section className="mb-16 font-serif text-lg leading-relaxed space-y-6">
            <p>
              Institutions do not merely record history; they manufacture it through the application of procedure. Procedural horror arises when the bureaucratic apparatus continues to function flawlessly long after its human components have been compromised or removed. 
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6 border-b border-border/10 pb-2">
              Thematic Centerpiece
            </h2>
            <div className="p-8 bg-[hsl(var(--contractual-dense))] border border-border/30 relative">
              <div className="absolute top-0 right-0 bg-foreground text-background font-mono text-[10px] px-2 py-1 uppercase tracking-widest">
                INSTITUTIONAL FRAMING
              </div>
              <blockquote className="font-serif text-2xl italic mb-6 mt-4">
                "The receipts are the first layer. Once you accept the receipt, you accept the transaction. Once you accept the transaction, you agree that the thing you lost had a price, and therefore, could be sold."
              </blockquote>
              <div className="font-mono text-xs text-muted-foreground space-y-1">
                <p>SOURCE: Terms of Unbeing</p>
                <p>STATUS: VERIFIED (CONTRACTUAL)</p>
                <p>CUSTODIAL NOTE: Clause remains legally binding despite the ontological collapse of the signatories.</p>
              </div>
            </div>
          </section>

          <RelatedRecords currentTheme="Institutions" />

          <section className="pt-8 mt-16 border-t border-border/30 font-mono text-xs text-muted-foreground uppercase tracking-widest space-y-2">
            <p>PROCEDURAL CLOSING</p>
            <p>This hub is maintained by automated custodial systems. Inquiries regarding the ethical implications of these records will be logged and discarded. Compliance is mandatory.</p>
          </section>

        </main>
        <Footer />
      </div>
    </div>
  );
}