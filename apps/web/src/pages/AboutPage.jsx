import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Identity Record — Elian Voigt</title>
        <meta name="description" content="Elian Voigt — the literary identity behind novels of language, memory, bureaucracy, ritual, grief, and the unreal." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-24">
          <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-4xl"
            >
              <div className="metadata-label mb-8">
                Document Reference: ID-001
              </div>
              <h1 className="literary-statement-primary ink-bleed" style={{ padding: 0, margin: '0 0 2rem 0' }}>Identity Record</h1>

              <div className="mb-4">
                <img
                  src="/author/elian-voigt.png"
                  alt="Elian Voigt"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  className="w-full max-w-md object-contain mix-blend-multiply"
                />
              </div>
              <p className="metadata-label mb-12 italic">Likeness on file.</p>

              <div className="identity-section">
                <h2 className="metadata-label mb-8">IDENTITY RELATIONSHIP RECORD</h2>
                
                <div className="identity-entry">
                  <h3 className="literary-statement-secondary" style={{ padding: 0, margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>ELIAN VOIGT</h3>
                  <p className="operational-text">Literary fiction identity. The name on the books.</p>
                </div>
                
                <div className="identity-entry">
                  <h3 className="literary-statement-secondary" style={{ padding: 0, margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>RYAN J. PYLES</h3>
                  <p className="operational-text">Custodial and originating author identity.</p>
                </div>
                
                <div className="identity-entry">
                  <h3 className="literary-statement-secondary" style={{ padding: 0, margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>FORMÆTRIX</h3>
                  <p className="operational-text">Parent creative system and imprint structure.</p>
                </div>
              </div>

              <div className="prose prose-invert prose-lg md:prose-xl max-w-none font-serif leading-relaxed text-foreground/90 space-y-8 mt-12">
                <p>
                  Elian Voigt is a literary identity devoted to fiction where design and
                  content are inseparable — books where the premise is always also the design.
                </p>

                <p>
                  The work published under this name returns obsessively to certain concerns: 
                  memory as a filing system, translation as a form of grief, bureaucracy as surrealism, 
                  disappearance as evidence. Language is treated as architecture — something that can be 
                  inhabited, something that can collapse, something that organizes experience even as it fails.
                </p>

                <p>
                  Each book is an experiment in how form and content might converge. Novels that read like 
                  archives. Grief that functions like grammar. Stories structured as bureaucratic documents. 
                  The premise is always also the design.
                </p>

                <p>
                  The recurring themes are not accidental: how we catalog loss, how institutions remember, 
                  how language persists when meaning dissolves, how objects outlast the lives they document. 
                  These are books about what survives when everything else is gone.
                </p>

                <p>
                  Elian Voigt is not a person. It is a literary project, an imprint identity, a way of 
                  organizing certain kinds of fiction that resist easy categorization. The books exist at 
                  the intersection of experimental form and accessible narrative, designed for readers who 
                  want stories that feel like arguments about what fiction can do.
                </p>

                <div className="mt-16 pt-10 border-t border-border/20">
                  <p className="ev-catalog-no italic mb-5">
                    Elian Voigt is a literary identity within FORMÆTRIX Imprint, an independent press
                    where design is not decoration but argument.
                  </p>
                  <a
                    href="https://formatrix.press"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="metadata-text hover:opacity-100 transition-opacity border border-border/30 px-4 py-2 inline-block"
                  >
                    Visit FORMÆTRIX →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;