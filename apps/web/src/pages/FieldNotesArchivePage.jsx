import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FieldNoteEntry from '@/components/FieldNoteEntry.jsx';
import ArchivalInterruptionNotice from '@/components/ArchivalInterruptionNotice.jsx';
import ShadowRecord from '@/components/ShadowRecord.jsx';
import pb from '@/lib/pocketbaseClient.js';
import { 
  RETRIEVAL_MODES, 
  ACCESS_CONTEXTS, 
  generateTemporalAnomalies, 
  generateCrossContamination, 
  generateShadowRecords 
} from '@/lib/ArchivalRetrievalSystem.js';

export default function FieldNotesArchivePage() {
  const [notes, setNotes] = useState([]);
  const [shadowRecords, setShadowRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeMode, setActiveMode] = useState(RETRIEVAL_MODES[0].id);
  const [activeContext, setActiveContext] = useState(ACCESS_CONTEXTS[0].id);

  useEffect(() => {
    pb.collection('field_notes').getFullList({
      $autoCancel: false,
      sort: '-created'
    })
    .then(records => {
      setNotes(records);
      generateTemporalAnomalies(records);
      generateCrossContamination(records);
      setShadowRecords(generateShadowRecords(5));
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  // Procedural filtering logic based on mode
  const filteredNotes = notes.filter(note => {
    if (activeMode === 'STABLE') return note.status !== 'RESTRICTED' && !note.classification?.includes('HOLD');
    if (activeMode === 'FRAGMENTARY') return note.status === 'PARTIAL' || note.classification?.includes('PROCESS');
    if (activeMode === 'HOLDS') return note.classification?.includes('HOLD') || note.status === 'UNTRANSLATED';
    if (activeMode === 'MUNICIPAL') return note.classification?.includes('MUNICIPAL') || note.recoverySource?.includes('Municipal');
    if (activeMode === 'CONTESTED') return note.status === 'RESTRICTED' || note.classification?.includes('CONFLICT');
    return true;
  });

  const totalRecords = notes.length + shadowRecords.length;
  const retrievable = notes.length;
  const withheld = shadowRecords.filter(r => r.shadowRecordStatus === 'WITHHELD' || r.shadowRecordStatus === 'MUNICIPAL HOLD').length;
  const unrecoverable = shadowRecords.length - withheld;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Field Notes Archive — Elian Voigt</title>
      </Helmet>
      
      <Header />
      
      <main className="pt-32 pb-24 max-w-5xl mx-auto px-6">
        <header className="mb-16">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            ARCHIVE DIRECTORY / FIELD NOTES
          </div>
          <h1 className="font-serif text-5xl md:text-7xl mb-8">Unstructured<br/>Observations</h1>
          
          <div className="font-mono text-[0.85rem] leading-[1.6] opacity-80 border-l-2 border-border/40 pl-4 py-2 mb-8 max-w-3xl">
            <p className="mb-2">INSTITUTIONAL SUMMARY: The Field Notes Aggregation represents recovered institutional observations, primary source fragments, and in-situ documentation.</p>
            <p className="mb-2">PROCESSING NOTES: Records are inherently unstable, subject to environmental degradation, and often exhibit referential drift.</p>
            <p className="mb-2">PRESERVATION STATUS: ACTIVE RECOVERY. Estimated completion: [UNAVAILABLE].</p>
            <p>RETRIEVAL CONDITIONS: Cross-reference validity DISPUTED. Access restrictions apply.</p>
          </div>
        </header>

        {/* Retrieval Interface */}
        <section className="mb-16 border-t border-border/20 pt-8">
          <div className="font-mono text-[0.7rem] uppercase tracking-widest opacity-50 mb-4">Retrieval Modes</div>
          <div className="flex flex-wrap gap-6 mb-8">
            {RETRIEVAL_MODES.map(mode => (
              <button 
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`font-mono text-[0.8rem] uppercase tracking-widest transition-all ${activeMode === mode.id ? 'opacity-100 border-b border-foreground pb-1' : 'opacity-60 hover:opacity-80'}`}
              >
                {mode.label}
              </button>
            ))}
          </div>

          <div className="font-mono text-[0.7rem] uppercase tracking-widest opacity-50 mb-4">Access Context</div>
          <div className="flex flex-wrap gap-6 mb-8">
            {ACCESS_CONTEXTS.map(ctx => (
              <button 
                key={ctx.id}
                onClick={() => setActiveContext(ctx.id)}
                className={`font-mono text-[0.75rem] uppercase tracking-widest transition-all ${activeContext === ctx.id ? 'opacity-100 border-b border-foreground/50 pb-1' : 'opacity-40 hover:opacity-60'}`}
              >
                {ctx.label}
              </button>
            ))}
          </div>

          <div className="font-mono text-[0.75rem] opacity-70 border-b border-border/20 pb-4 mt-8">
            RESULTS: {totalRecords} RECORDS FOUND / {retrievable} RETRIEVABLE / {withheld} WITHHELD / {unrecoverable} UNRECOVERABLE
          </div>
        </section>

        {/* Results List */}
        {loading ? (
          <div className="font-mono text-sm opacity-50">PROCESSING RETRIEVAL...</div>
        ) : (
          <div className="space-y-2">
            {filteredNotes.map((note, index) => {
              const isCompressed = index % 5 === 0;
              const isOneLine = index % 7 === 0 && !isCompressed;
              const showNotice = index > 0 && index % 9 === 0;
              const showShadow = index > 0 && index % 6 === 0 && shadowRecords[(index/6)%shadowRecords.length];

              return (
                <React.Fragment key={note.id}>
                  {showNotice && (
                    <ArchivalInterruptionNotice 
                      message={`RESTORATION NOTICE // SEQUENCE ${String(index).padStart(2, '0')} SUSPENDED FOLLOWING OVERLAY EVENT`}
                      spacing={index % 2 === 0 ? 'dense' : 'sparse'}
                    />
                  )}
                  
                  {showShadow && <ShadowRecord record={shadowRecords[(index/6)%shadowRecords.length]} />}

                  <FieldNoteEntry 
                    note={note} 
                    index={index} 
                    isCompressed={isCompressed} 
                    isOneLine={isOneLine} 
                  />
                </React.Fragment>
              );
            })}
            
            {filteredNotes.length === 0 && (
              <div className="font-mono text-sm opacity-50 py-12 text-center">
                NO RECORDS RETRIEVABLE UNDER CURRENT PARAMETERS.
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}