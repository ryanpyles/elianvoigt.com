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
        <meta name="description" content="Identity and structural relationships of Elian Voigt, the literary fiction imprint of FORMÆTRIX." />
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

              <div className="identity-section">
                <h2 className="metadata-label mb-8">IDENTITY RELATIONSHIP RECORD</h2>
                
                <div className="identity-entry">
                  <h3 className="literary-statement-secondary" style={{ padding: 0, margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>ELIAN VOIGT</h3>
                  <p className="operational-text">Literary fiction identity published through FORMÆTRIX Imprint.</p>
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
                  Elian Voigt is the literary fiction imprint identity of FORMÆTRIX, 
                  a press dedicated to creating books where design and content are inseparable.
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

                <div className="my-16 metadata-section pt-16">
                  <h2 className="literary-statement-secondary" style={{ padding: 0, margin: '0 0 2rem 0', fontSize: '2rem' }}>Institutional Context: FORMÆTRIX</h2>

                  <p className="operational-text">
                    FORMÆTRIX is an independent press creating books where design is not decoration but 
                    argument. Every project begins with a premise about what a book can be, and the design 
                    follows from that premise with absolute precision.
                  </p>

                  <p className="operational-text">
                    The press publishes literary fiction, experimental nonfiction, and hybrid works that 
                    resist genre. All books are designed in-house, printed on demand, and distributed 
                    independently. The goal is specificity: books that look exactly like what they are about.
                  </p>

                  <p className="mt-12">
                    <a
                      href="https://formatrix.press"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="metadata-text hover:opacity-100 transition-opacity border border-border/30 px-4 py-2 inline-block"
                    >
                      ACCESS PARENT SYSTEM (FORMÆTRIX.PRESS)
                    </a>
                  </p>
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