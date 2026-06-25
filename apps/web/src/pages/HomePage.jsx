import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import RetrievalPanel from '@/components/RetrievalPanel.jsx';
import BookSpines from '@/components/BookSpines.jsx';
import LatestRelease from '@/components/home/LatestRelease.jsx';
import ReadingOrder from '@/components/home/ReadingOrder.jsx';
import Fragments from '@/components/home/Fragments.jsx';
import Dispatches from '@/components/home/Dispatches.jsx';
import NewsletterSection from '@/components/home/NewsletterSection.jsx';
import AboutAndPress from '@/components/home/AboutAndPress.jsx';

const SUBJECTS = ['language', 'memory', 'bureaucracy', 'ritual', 'grief', 'the unreal'];

function HomePage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Elian Voigt — Literary Fiction of Language, Memory & the Unreal</title>
        <meta
          name="description"
          content="Elian Voigt writes literary fiction about language, memory, bureaucracy, ritual, grief, and the unreal. A catalogue of novels — buy, read, and subscribe."
        />
      </Helmet>

      <div className="min-h-screen relative z-10 bg-background">
        <RetrievalPanel />
        <Header />

        <main className="md:ml-[140px]">
          {/* ---------------- Hero ---------------- */}
          <section className="relative min-h-[100dvh] flex flex-col justify-center px-6 lg:px-12 max-w-[90rem] mx-auto z-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
              className="ev-eyebrow mb-10"
            >
              Record Group 04 — Language Pressure
            </motion.div>

            <h1 className="max-w-5xl font-serif text-[2.5rem] leading-[1.1] sm:text-6xl lg:text-7xl">
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="block"
              >
                Elian Voigt writes literary fiction about
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-3 block"
              >
                {SUBJECTS.map((word, i) => (
                  <span key={word}>
                    <span className="italic ev-gold">{word}</span>
                    {i < SUBJECTS.length - 2 && <span className="text-foreground/50">, </span>}
                    {i === SUBJECTS.length - 2 && <span className="text-foreground/50">, and </span>}
                  </span>
                ))}
                <span className="text-foreground/50">.</span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="mt-10 max-w-xl font-serif text-lg italic text-foreground/60"
            >
              A catalogue of novels recovered from institutions that have forgotten
              why they keep records — and cannot stop.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.4 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <a href="#latest" className="ev-buy">Begin reading</a>
              <a href="#archive" className="ev-buy ev-buy--ghost">The catalogue</a>
              <a href="#subscribe" className="ev-buy ev-buy--ghost">Subscribe</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 2 }}
              className="absolute right-6 lg:right-12 bottom-12 hidden text-right ev-catalog-no sm:block"
            >
              Classification retained after third review.<br />
              Sequence disputed. Do not normalize.
            </motion.div>
          </section>

          {/* ---------------- Latest release ---------------- */}
          <LatestRelease />

          {/* ---------------- Featured books / catalogue ---------------- */}
          <section id="archive" className="scroll-mt-24 relative z-20 py-24">
            <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-foreground/15 pb-6">
                <div>
                  <span className="ev-eyebrow">Primary Records</span>
                  <h2 className="mt-4 font-serif text-3xl md:text-4xl">The Catalogue</h2>
                </div>
                <Link to="/publishing-catalogue" className="ev-catalog-no underline-offset-4 hover:text-foreground hover:underline">
                  Full catalogue →
                </Link>
              </div>
              <BookSpines />
              <p className="mt-6 font-serif italic text-foreground/50">
                Six records in print. Select a spine to open it.
              </p>
            </div>
          </section>

          {/* ---------------- Reading order ---------------- */}
          <ReadingOrder />

          {/* ---------------- Fragments / praise ---------------- */}
          <Fragments />

          {/* ---------------- Recent Substack posts ---------------- */}
          <Dispatches />

          {/* ---------------- Newsletter / Substack ---------------- */}
          <NewsletterSection />

          {/* ---------------- About + Press ---------------- */}
          <AboutAndPress />

          <Footer />
        </main>
      </div>
    </>
  );
}

export default HomePage;
