import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';

export default function TerminologyPage() {
  const terms = [
    { name: "ARCHIVAL FRAGMENT", desc: "A discrete piece of text recovered from a degraded source. Requires provenance metadata." },
    { name: "FIELD NOTE", desc: "Primary observation recorded in situ. Subject to environmental degradation and subjective bias." },
    { name: "PARTIAL RECONSTRUCTION", desc: "A document assembled from multiple incomplete sources. Must note confidence level." },
    { name: "MUNICIPAL RECORD", desc: "Official documentation from civic authorities. Often sterilized or redacted." },
    { name: "EVIDENTIARY TRANSCRIPT", desc: "Verbatim record of spoken or recorded audio with anomaly markers." },
    { name: "RESTORATION", desc: "The act of forcing a degraded text back into legibility." },
    { name: "RECOVERY", desc: "The extraction of data from a hostile environment." },
    { name: "MATERIAL LOSS DETECTED", desc: "Indicator that the physical absence of a record constitutes primary evidence." },
    { name: "SEMANTIC INSTABILITY", desc: "Condition where vocabulary fails to hold its assigned meaning." },
    { name: "UNRESOLVED OVERLAY", desc: "Multiple incompatible records occupy the same physical or digital space." },
    { name: "INCOMPLETE STABILIZATION", desc: "A state of partial recovery where the text remains volatile." },
    { name: "LINGUISTIC HOLD", desc: "Text quarantined due to referential instability or translation hazards." },
    { name: "TRANSLATION VARIANT", desc: "Alternative reading of a text, indicating semantic fracturing." },
    { name: "NON-STABLE REFERENT", desc: "A word pointing to an object or concept that no longer exists or fluctuates." },
    { name: "PHONETIC RECOVERY ONLY", desc: "Only the sound of the word remains; the meaning is permanently lost." },
    { name: "CUSTODIAN", desc: "The entity responsible for the containment of a record." },
    { name: "VERIFICATION", desc: "The procedural confirmation of a text's institutional utility." },
    { name: "CONTAINMENT", desc: "The isolation of hazardous semantics." },
    { name: "INSTITUTIONAL PRESSURE", desc: "The force exerted by bureaucratic systems to alter or erase non-compliant reality." }
  ];

  const definedTermsSchema = terms.map(t => ({
    "@type": "DefinedTerm",
    "name": t.name,
    "description": t.desc,
    "inDefinedTermSet": "https://elianvoigt.com/archive/taxonomy"
  }));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "Terminology Index — Elian Voigt",
        "description": "Released institutional vocabulary index for the Elian Voigt archive.",
        "url": "https://elianvoigt.com/archive/terminology",
        "publisher": { "@type": "Organization", "name": "FORMÆTRIX Imprint" }
      },
      ...definedTermsSchema
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Terminology Index — Elian Voigt | FORMÆTRIX Imprint</title>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Archive", url: "/archive" },
        { name: "Terminology", url: "/archive/terminology" }
      ]} />

      <Header />
      
      <main className="pt-32 pb-32 max-w-4xl mx-auto px-6">
        <div className="font-mono text-xs text-muted-foreground border-l border-border/50 pl-4 py-2 space-y-4 mb-8">
          <div><span className="opacity-50 inline-block w-24">ID:</span> EV-TERM-IDX</div>
          <div><span className="opacity-50 inline-block w-24">STATUS:</span> PARTIAL RELEASE</div>
          <div><span className="opacity-50 inline-block w-24">CLASS:</span> INSTITUTIONAL VOCABULARY</div>
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl mb-8 uppercase tracking-widest border-b border-border/30 pb-8">
          Terminology Index
        </h1>

        <section className="mb-16 font-serif text-lg leading-relaxed text-muted-foreground">
          <p>
            This index represents a partial release of institutional vocabulary. Several definitions remain unstable, highly restricted, or deliberately omitted due to semantic hazard. Custodial personnel are reminded that knowing the name of an anomaly does not constitute containment of the anomaly.
          </p>
        </section>

        {/* SECTION 1 */}
        <section className="mb-16 border-t border-border/20 pt-8">
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-8">I. Archival Vocabulary</h2>
          <div className="space-y-8 font-serif">
            <div id="archival-fragment">
              <h3 className="text-xl font-medium tracking-wide mb-2 uppercase">ARCHIVAL FRAGMENT</h3>
              <p className="text-muted-foreground leading-relaxed">A discrete piece of text recovered from a degraded source. Requires strict provenance metadata to prevent cross-contamination.</p>
              <div className="font-mono text-[10px] uppercase text-muted-foreground opacity-60 mt-2">WEIGHT: TIER 2 | RELATED: PARTIAL RECONSTRUCTION</div>
            </div>
            <div id="field-note">
              <h3 className="text-xl font-medium tracking-wide mb-2 uppercase">FIELD NOTE</h3>
              <p className="text-muted-foreground leading-relaxed">Primary observation recorded in situ. Highly subject to environmental degradation and subjective bias. Forms the foundation of coastal and forensic reconstructions.</p>
              <div className="font-mono text-[10px] uppercase text-muted-foreground opacity-60 mt-2">WEIGHT: TIER 1 | RELATED: COASTAL SURVEY</div>
            </div>
            <div id="partial-reconstruction">
              <h3 className="text-xl font-medium tracking-wide mb-2 uppercase">PARTIAL RECONSTRUCTION</h3>
              <p className="text-muted-foreground leading-relaxed">A document assembled from multiple incomplete sources. Must note confidence level, as institutional interpolation often introduces bureaucratic bias.</p>
            </div>
            <div id="municipal-record">
              <h3 className="text-xl font-medium tracking-wide mb-2 uppercase">MUNICIPAL RECORD</h3>
              <p className="text-muted-foreground leading-relaxed">Official documentation from civic authorities. These records are frequently sterilized or redacted prior to archival integration to maintain institutional reality.</p>
            </div>
            <div id="evidentiary-transcript">
              <h3 className="text-xl font-medium tracking-wide mb-2 uppercase">EVIDENTIARY TRANSCRIPT</h3>
              <p className="text-muted-foreground leading-relaxed">Verbatim record of spoken or recorded audio. Due to anomalies in recording environments, must always include timestamp drift markers.</p>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="mb-16 border-t border-border/20 pt-8">
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-8">II. Preservation Vocabulary</h2>
          <div className="space-y-8 font-serif">
            <div>
              <h3 className="text-xl font-medium tracking-wide mb-2 uppercase">RESTORATION & RECOVERY</h3>
              <p className="text-muted-foreground leading-relaxed"><strong>RESTORATION</strong> implies forcing a degraded text back into legibility, often via institutional pressure. <strong>RECOVERY</strong> is merely the physical extraction of data from a hostile environment.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium tracking-wide mb-2 uppercase">UNRESOLVED OVERLAY</h3>
              <p className="text-muted-foreground leading-relaxed">A paradoxical state where multiple incompatible records occupy the same physical or digital space simultaneously. The archive cannot resolve the contradiction.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium tracking-wide mb-2 uppercase">MATERIAL LOSS DETECTED</h3>
              <p className="text-muted-foreground leading-relaxed">An indicator flag denoting that the physical degradation or disappearance of a record is now considered the primary evidence of an event.</p>
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="mb-16 border-t border-border/20 pt-8">
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-8">III. Linguistic Vocabulary</h2>
          <div className="space-y-8 font-serif">
            <div id="linguistic-hold">
              <h3 className="text-xl font-medium tracking-wide mb-2 uppercase">LINGUISTIC HOLD</h3>
              <p className="text-muted-foreground leading-relaxed">Text quarantined due to severe referential instability or translation hazards. Exposure without proper clearance may induce temporary syntax collapse in the reader.</p>
            </div>
            <div id="translation-variant">
              <h3 className="text-xl font-medium tracking-wide mb-2 uppercase">TRANSLATION VARIANT</h3>
              <p className="text-muted-foreground leading-relaxed">Alternative readings of a text indicating semantic fracturing. Often present in records retrieved from the Brynjavík sector.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium tracking-wide mb-2 uppercase">NON-STABLE REFERENT</h3>
              <p className="text-muted-foreground leading-relaxed">A translated word that points to an object or concept that no longer exists or fluctuates in reality. The signifier outlives the signified.</p>
            </div>
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="mb-16 border-t border-border/20 pt-8">
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-8">IV. Institutional Vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-serif text-lg">
            <div>
              <strong>CUSTODIAN:</strong> The entity (human or automated) responsible for maintaining containment of a specific record.
            </div>
            <div>
              <strong>VERIFICATION:</strong> The procedural confirmation of a text's institutional utility, regardless of its objective truth.
            </div>
            <div>
              <strong>CONTAINMENT:</strong> The isolation of hazardous semantics to prevent contamination of the broader archive.
            </div>
            <div>
              <strong>INSTITUTIONAL PRESSURE:</strong> The bureaucratic force exerted to flatten anomalies into manageable data points.
            </div>
          </div>
        </section>

        {/* SECTION 5 */}
        <section className="mb-16 border-t border-border/20 pt-8 bg-muted/5 p-6 border-l-2">
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6">V. Restricted Vocabulary</h2>
          <ul className="space-y-3 font-mono text-sm">
            <li className="flex justify-between"><span>POST-EIGHTH MATERIAL</span> <span className="text-muted-foreground opacity-50">[UNAVAILABLE]</span></li>
            <li className="flex justify-between"><span>DECLENSIONAL CLASS VIII</span> <span className="text-muted-foreground opacity-50">[UNAVAILABLE]</span></li>
            <li className="flex justify-between"><span>THE EIGHTH REVIEW</span> <span className="text-muted-foreground opacity-50">[UNAVAILABLE]</span></li>
            <li className="flex justify-between"><span>OVERLAY CONDITIONS</span> <span className="text-foreground">[PARTIALLY AVAILABLE]</span></li>
          </ul>
        </section>

        {/* SECTION 6 */}
        <section className="mb-16 border-t border-border/20 pt-8">
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6">VI. Unstable Definitions</h2>
          <div className="space-y-6 font-serif">
            <div className="border border-border/30 p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest mb-4">TERM: ARCHIVE</h3>
              <p className="text-muted-foreground line-through opacity-50 mb-2">1. A place where historical records are kept.</p>
              <p className="text-muted-foreground mb-2">2. A machine designed to enforce forgetting through categorization.</p>
              <div className="font-mono text-[10px] text-muted-foreground mt-4">STATUS: UNSTABLE</div>
            </div>
            <div className="border border-border/30 p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest mb-4">TERM: MEMORY</h3>
              <p className="text-muted-foreground mb-2">1. The bureaucratic residue of an erased event.</p>
              <p className="text-muted-foreground italic mb-2">2. The shape of the dust left after extraction.</p>
              <div className="font-mono text-[10px] text-muted-foreground mt-4">STATUS: CONTESTED</div>
            </div>
          </div>
        </section>

        {/* SECTION 7 */}
        <section className="mb-16 border-t border-border/20 pt-8">
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6">VII. Cross-Referenced Systems</h2>
          <div className="space-y-2 font-mono text-sm text-muted-foreground">
            <p>REF: DECLENSIONAL CLASSIFICATIONS (I–VII VERIFIED, VIII RESTRICTED, IX–XII UNAVAILABLE)</p>
            <p>REF: ARCHIVE CONDITIONS (STABLE, VOLATILE, QUARANTINED, DEGRADED)</p>
            <p>REF: PRESERVATION EVENTS (THE COASTAL CORRECTION, THE MUNICIPAL SILENCE)</p>
            <p>REF: TRANSLATION EVENTS (NORTHERN VARIANTS UNDER REVIEW)</p>
          </div>
        </section>

        <section className="pt-8 border-t border-border/30 font-mono text-xs text-muted-foreground uppercase tracking-widest space-y-2">
          <p>PROCEDURAL CLOSING</p>
          <p>Vocabulary maintenance is a continuous, automated process. Personnel encountering undocumented terms must submit them for sterilization immediately. Requesting definitions for restricted terminology will result in access revocation.</p>
        </section>

      </main>
      <Footer />
    </div>
  );
}