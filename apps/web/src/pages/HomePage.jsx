import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import RetrievalPanel from '@/components/RetrievalPanel.jsx';
import BookSpines from '@/components/BookSpines.jsx';

function HomePage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Elian Voigt — Active Literary Database</title>
        <meta name="description" content="A classified archival system. Language under pressure. Memory as architecture." />
      </Helmet>

      <div className="min-h-screen relative z-10 bg-background">
        <RetrievalPanel />
        <Header />

        <main className="md:ml-[140px]">
          {/* Hero Section */}
          <section className="relative min-h-[100dvh] flex flex-col justify-center px-6 lg:px-12 max-w-[90rem] mx-auto z-20 sparse-section">
            <div className="relative max-w-5xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="metadata-label mb-8 animate-metadata-drift"
              >
                RECORD GROUP 04 / LANGUAGE PRESSURE / RELEASED PARTIAL
              </motion.div>

              <h1 className="literary-statement-primary hover:animate-text-instability" style={{ padding: 0, margin: '0 0 2rem 0' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  Language under pressure.
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  Memory as architecture.
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <span>Evidence that refuses</span>
                  <br />
                  <span className="ml-[12px] inline-block">to stay <span className="damaged">[filed]</span>.</span>
                </motion.div>
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
                className="flex flex-col sm:flex-row gap-6 items-start mt-12 dense-section"
              >
                <Link to="/archive" className="retrieval-terminal w-[140px]">
                  <span className="metadata-text">ENTER ARCHIVE</span>
                  <span className="metadata-footnote">AUTHORIZED PARTIAL</span>
                </Link>
                
                <Link to="/archive/field-notes" className="retrieval-terminal w-[155px]">
                  <span className="metadata-text">RETRIEVE FIELD NOTES</span>
                  <span className="metadata-footnote">STABLE RECOVERY</span>
                </Link>
                
                <Link to="/archive/taxonomy" className="retrieval-terminal w-[135px]">
                  <span className="metadata-text">VIEW TAXONOMY</span>
                  <span className="metadata-footnote">CROSS-REFERENCE VALID</span>
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 2 }}
              className="absolute right-6 lg:right-12 bottom-12 md:bottom-24 metadata-text opacity-50 animate-residue-flicker hidden sm:block text-right"
            >
              Classification retained after third review.<br/>
              Sequence disputed. Do not normalize.
            </motion.div>
          </section>

          {/* Archive Section — Primary Records as openable book spines */}
          <section id="archive" className="scroll-mt-24 relative z-20 py-24 sparse-section">
            <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
              <div className="mb-8 flex items-end justify-between border-b border-border/30 pb-8">
                <h2 className="metadata-label">Primary Records</h2>
                <Link to="/publishing-catalogue" className="metadata-text hover:underline">
                  Full Catalogue →
                </Link>
              </div>
              <BookSpines />
            </div>
          </section>

          {/* Section Interruption */}
          <div className="w-full py-32 flex flex-col items-center justify-center text-center px-6 relative z-10 sparse-section">
            <div className="w-full max-w-3xl border-t border-border/20 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 metadata-label">
                SUPPLEMENTARY MATERIAL
              </div>
            </div>
            <p className="mt-16 literary-statement-secondary text-muted-foreground/60 max-w-2xl" style={{ padding: 0 }}>
              "The archive is not a place where things are kept, but a place where things are forgotten systematically."
            </p>
          </div>

          {/* Field Notes Section (Simplified) */}
          <section id="field-notes" className="py-24 scroll-mt-24 relative z-20 sparse-section">
            <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="mb-16 border-b border-border/30 pb-8 flex justify-between items-end"
              >
                <h2 className="literary-statement-primary" style={{ padding: 0, margin: 0 }}>Field Notes</h2>
                <Link to="/field-notes" className="metadata-text hover:underline">
                  View Full Archive →
                </Link>
              </motion.div>

              <div className="p-12 border border-border/30 bg-muted/5 text-center medium-section">
                <h3 className="literary-statement-secondary mb-4" style={{ padding: 0, margin: 0 }}>Field Notes Aggregation</h3>
                <p className="operational-description mb-6">Unstructured observations and fragments.</p>
                <Link to="/field-notes" className="retrieval-terminal w-[155px] mx-auto">
                  <span className="metadata-text">ACCESS NOTES</span>
                  <span className="metadata-footnote">STABLE</span>
                </Link>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </>
  );
}

export default HomePage;