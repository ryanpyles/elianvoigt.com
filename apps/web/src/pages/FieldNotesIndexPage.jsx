import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';
import DatasetSchema from '@/components/DatasetSchema.jsx';
import RetrievalTerminal from '@/components/RetrievalTerminal.jsx';
import pb from '@/lib/pocketbaseClient.js';
import { generateShadowRecords } from '@/lib/ArchivalRetrievalSystem.js';

export default function FieldNotesIndexPage() {
  const [notes, setNotes] = useState([]);
  const [shadowRecords, setShadowRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pb.collection('field_notes').getFullList({
      $autoCancel: false,
      sort: '-created'
    })
    .then(records => {
      setNotes(records);
      setShadowRecords(generateShadowRecords(12));
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Field Notes Aggregation — Elian Voigt",
    "description": "Recovered institutional observations, field notes, and archival fragments.",
    "url": "https://elianvoigt.com/archive/field-notes",
    "hasPart": notes.map(n => ({
      "@type": "CreativeWork",
      "name": n.title || `Field Note ${n.fieldNoteNumber}`,
      "url": `https://elianvoigt.com/field-notes/${n.slug}`
    }))
  };

  return (
    <div className="archive-page min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Field Notes Aggregation | Elian Voigt</title>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <RetrievalTerminal />

      <div className="main-content">
        <DatasetSchema 
          name="Field Notes Primary Aggregation"
          description="Dataset containing primary in-situ observations and unstable archival fragments."
          url="/archive/field-notes"
          keywords={["Field Notes", "Primary Sources", "Fragments", "Observations"]}
        />

        <BreadcrumbSchema items={[
          { name: "Archive", url: "/archive" },
          { name: "Field Notes", url: "/archive/field-notes" }
        ]} />

        <Header />
        
        <main className="pt-32 pb-32 max-w-5xl mx-auto px-6 sparse-section">
          <h1 className="literary-statement-secondary border-b border-border/30 pb-8" style={{ padding: 0, margin: '0 0 2rem 0' }}>
            Field Notes Aggregation
          </h1>

          <section className="mb-16 operational-description border-l-2 border-border/50 pl-6 py-4 space-y-4">
            <p>
              <strong>INSTITUTIONAL SUMMARY:</strong> The Field Notes Aggregation represents recovered institutional observations, primary source fragments, and in-situ documentation. These records form the raw evidentiary basis for the publications of Elian Voigt under FORMÆTRIX Imprint.
            </p>
            <p>
              <strong>PROCESSING NOTES:</strong> Records are inherently unstable, subject to environmental degradation, and often exhibit referential drift. Semantic instability is common. Cross-reference validity is frequently disputed.
            </p>
            <p>
              <strong>PRESERVATION STATUS:</strong> ACTIVE RECOVERY. Recovery method: Procedural Extraction. Estimated completion: [UNAVAILABLE].
            </p>
            <p>
              <strong>RETRIEVAL CONDITIONS:</strong> STABLE/UNSTABLE mixed. Access restrictions apply to {shadowRecords.length} withheld or removed materials. Cross-reference validity: DISPUTED.
            </p>
          </section>

          <div className="mb-12 metadata-label border-b border-border/20 pb-4 dense-section">
            AGGREGATION METRICS: <span className="metadata-value">{notes.length} ACTIVE RECORDS</span> / <span className="metadata-value">{shadowRecords.length} SHADOW RECORDS</span>
          </div>

          {loading ? (
            <div className="metadata-text">AGGREGATING RECORDS...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 medium-section">
              {notes.map(note => (
                <Link key={note.id} to={`/field-notes/${note.slug}`} className="block p-6 border border-border/30 hover:bg-muted/10 transition-colors group">
                  <div className="flex justify-between items-start mb-4 dense-section">
                    <span className="metadata-label">FN-{note.fieldNoteNumber || note.id.substring(0,4)}</span>
                    <span className="metadata-value">{note.status || 'ACTIVE'}</span>
                  </div>
                  <h2 className="literary-statement-secondary mb-3 group-hover:text-muted-foreground transition-colors" style={{ padding: 0, margin: 0, fontSize: '1.25rem' }}>{note.title || 'Untitled Fragment'}</h2>
                  <p className="operational-text mb-4 line-clamp-3">{note.excerpt || 'No excerpt available.'}</p>
                  <div className="metadata-footnote">
                    CLASS: {note.classification || 'UNASSIGNED'}
                  </div>
                </Link>
              ))}
            </div>
          )}

          <section className="pt-8 mt-16 border-t border-border/30 dense-section">
            <p className="metadata-label">PROCEDURAL CLOSING</p>
            <p className="metadata-footnote">The records contained within this aggregation are subject to continuous custodial review. Access does not imply verification. FORMÆTRIX Imprint assumes no liability for semantic contamination resulting from exposure to these fragments.</p>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}