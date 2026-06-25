import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';
import ArticleSchema from '@/components/ArticleSchema.jsx';
import RelatedRecords from '@/components/RelatedRecords.jsx';
import RetrievalTerminal from '@/components/RetrievalTerminal.jsx';
import pb from '@/lib/pocketbaseClient.js';
import { 
  getTierForNote, 
  generateTemporalAnomalies, 
  generateCrossContamination 
} from '@/lib/ArchivalRetrievalSystem.js';

export default function FieldNoteDetailPage() {
  const { slug } = useParams();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [anomaly, setAnomaly] = useState(null);
  const [contamination, setContamination] = useState(null);

  useEffect(() => {
    pb.collection('field_notes').getFirstListItem(`slug="${slug}"`, {
      $autoCancel: false
    })
    .then(record => {
      setNote(record);
      const anomalies = generateTemporalAnomalies([record]);
      const contam = generateCrossContamination([record]);
      setAnomaly(anomalies.get(record.id));
      setContamination(contam.get(record.id));
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="archive-page min-h-screen bg-background text-foreground flex justify-center items-center metadata-text">
        <RetrievalTerminal />
        <div className="main-content flex flex-col justify-center items-center h-full">
          <Header />
          RECOVERING FRAGMENT...
        </div>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="archive-page min-h-screen bg-background text-foreground">
        <Helmet><title>Document Not Found — Elian Voigt</title></Helmet>
        <RetrievalTerminal />
        <div className="main-content flex flex-col justify-center items-center min-h-screen">
          <Header />
          <div className="text-center dense-section">
            <p className="metadata-label mb-4">ERR_FILE_NOT_LOCATED</p>
            <Link to="/archive/field-notes" className="metadata-text hover:underline">Return to Field Notes Archive</Link>
          </div>
        </div>
      </div>
    );
  }

  const tier = getTierForNote(note);

  return (
    <div className="archive-page min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{`${note.fieldNoteNumber || 'Archival Fragment'} — Elian Voigt`}</title>
      </Helmet>
      
      <RetrievalTerminal />

      <div className="main-content">
        <BreadcrumbSchema items={[
          { name: "Home", url: "/" },
          { name: "Archive", url: "/archive" },
          { name: "Field Notes", url: "/archive/field-notes" },
          { name: note.title || note.fieldNoteNumber, url: `/field-notes/${slug}` }
        ]} />

        <ArticleSchema 
          headline={note.title || `Field Note ${note.fieldNoteNumber}`}
          description={note.excerpt || "Recovered archival fragment."}
          author="FORMÆTRIX Imprint"
          datePublished={note.recoveredDate || note.created}
          keywords={[note.classification, ...(note.subjects || [])].filter(Boolean)}
          articleBody={note.fullText?.replace(/<[^>]*>?/gm, '') || note.excerpt}
        />

        <Header />

        <main className="pt-32 pb-24 max-w-4xl mx-auto px-6 sparse-section">
          <Link to="/archive/field-notes" className="metadata-text hover:opacity-100 mb-8 inline-block opacity-unstable">
            ← Back to Directory
          </Link>

          <header className="mb-12 pb-6 border-b border-border/30" style={{ opacity: tier.opacity }}>
            <div className="flex justify-between dense-section mb-4">
              <span className="metadata-label">FIELD NOTE {note.fieldNoteNumber || note.id.substring(0,6)}</span>
              <span className="metadata-value">[{tier.name}]</span>
            </div>
            
            <h1 className="literary-statement-secondary animate-displace-text" style={{ padding: 0, margin: '1rem 0 2rem 0' }}>{note.title || 'Untitled Fragment'}</h1>
            
            {anomaly && (
              <div className="metadata-footnote text-destructive opacity-80 mb-6 border border-destructive/30 p-2 inline-block">
                [ TEMPORAL ANOMALY: {anomaly.type.toUpperCase()} ]
              </div>
            )}

            <div className="operational-description italic opacity-65 mb-6 border-l-2 border-border/50 pl-4 py-2">
              This archival fragment documents phenomena categorized under {note.classification || 'general anomalies'}, forming part of the broader institutional archive catalogued by Elian Voigt.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 dense-section">
              <div className="space-y-2">
                <div className="metadata-label">Classification History</div>
                <div className="metadata-value">
                  2008: ARCHIVAL FRAGMENT<br/>
                  2015: PARTIAL RECONSTRUCTION<br/>
                  CURRENT: {note.classification || 'DISPUTED'}
                </div>
              </div>
              <div className="space-y-2">
                <div className="metadata-label">Restoration Chain</div>
                <div className="metadata-value">
                  Initial recovery: 2008<br/>
                  Updated following Third Restoration: 2015<br/>
                  Recovery notation appended: [INACCESSIBLE]
                </div>
              </div>
            </div>
          </header>

          <article className="operational-text max-w-none opacity-85" style={{ fontSize: tier.fontSize, lineHeight: tier.lineHeight }}>
            {note.fullText ? (
              <div dangerouslySetInnerHTML={{ __html: note.fullText }} />
            ) : (
              <p className="italic opacity-60">{note.excerpt || "No further text recoverable."}</p>
            )}
          </article>

          {/* Archival Context & Marginalia */}
          <div className="mt-16 space-y-4 dense-section">
            {contamination && (
              <div className="metadata-footnote opacity-70 border-l border-border/40 pl-3 py-1">
                [ PHRASE OVERLAP WITH FN-{contamination.relatedNoteId.substring(0,4)} ]<br/>
                [ SHARED RESTORATION ID: {contamination.restorationId} - VALIDITY DISPUTED ]
              </div>
            )}
            
            {Math.random() > 0.5 && (
              <div className="metadata-footnote opacity-70 border-l border-border/40 pl-3 py-1">
                [ THEMATIC CONFLICT: Note appears in multiple mutually exclusive categories ]
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-border/10">
              <div className="metadata-label mb-2">CUSTODIAL MARGINALIA</div>
              <ul className="metadata-footnote italic space-y-1">
                <li>Restoration sequence initiated by: [R.J.P]</li>
                <li>Procedural remarks: Semantic instability detected during ingestion.</li>
              </ul>
            </div>
          </div>

          <RelatedRecords 
            currentClassification={note.classification}
            currentLocation={note.recoverySource}
          />

        </main>

        <Footer />
      </div>
    </div>
  );
}