import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { booksData } from '@/data/books.js';

function BookDetailTemplate({ book }) {
  if (!book) return null;

  const {
    title = 'Untitled Document',
    longline = '',
    blurb = '',
    excerpt = '',
    genre = 'Unclassified',
    themes = [],
    subjects = [],
    status = 'UNKNOWN',
    classification = 'UNCLASSIFIED',
    archiveEntry = '',
    links = {},
    relatedBooks = [],
    coverImage = ''
  } = book;

  // Filter out null links and format them for display safely
  const buyLinks = links ? Object.entries(links)
    .filter(([_, url]) => url !== null && url !== undefined && url !== '')
    .map(([format, url]) => ({ format, url })) : [];

  // Map related book slugs to actual book objects safely
  const relatedBookObjects = Array.isArray(relatedBooks) ? relatedBooks.map(slug => 
    typeof slug === 'string' ? booksData.find(b => b.slug === slug) : slug
  ).filter(Boolean) : [];

  // Safely generate meta description
  const metaDescription = (typeof blurb === 'string' && blurb.length > 0) 
    ? `${blurb.substring(0, 150)}...` 
    : (typeof longline === 'string' ? longline : 'Archive Document');

  // Safely generate document reference fallback
  const docRefFallback = (typeof title === 'string' && title.length >= 3) 
    ? title.substring(0, 3).toUpperCase() 
    : 'DOC';

  return (
    <>
      <Helmet>
        <title>{`${title} — Elian Voigt`}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        {coverImage && <meta property="og:image" content={coverImage} />}
        <meta property="og:type" content="book" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-24">
          {/* Hero Section */}
          <section className="min-h-[80vh] flex flex-col justify-center px-6 lg:px-12 max-w-[90rem] mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-5xl"
            >
              <div className="mono-text-small mb-8">
                Document Reference: {archiveEntry ? `ENTRY-${archiveEntry}` : `${docRefFallback}-001`}
              </div>
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-12 ink-bleed leading-none displace-x">
                {title}
              </h1>
              {longline && (
                <p className="font-serif italic text-2xl md:text-4xl text-muted-foreground max-w-3xl opacity-85">
                  {longline}
                </p>
              )}
            </motion.div>
            
            {/* Scroll indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 2 }}
              className="absolute bottom-12 left-6 lg:left-12 mono-text-small opacity-40"
            >
              Scroll to read
            </motion.div>
          </section>

          {/* Corridor Transition */}
          <div className="w-full h-32 bg-gradient-to-b from-transparent to-background/50 my-12"></div>

          {/* Content Section */}
          <section className="px-6 lg:px-12 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Metadata & Actions */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2 }}
              className="lg:col-span-4 space-y-12"
            >
              {buyLinks.length > 0 && (
                <div>
                  <h3 className="mono-text-small mb-4 border-b border-border/30 pb-2">
                    Acquisition
                  </h3>
                  <div className="flex flex-col gap-3">
                    {buyLinks.map((link) => (
                      <a 
                        key={link.format}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ghost-button text-center opacity-unstable"
                      >
                        {link.format}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="mono-text-small mb-4 border-b border-border/30 pb-2">
                  Metadata
                </h3>
                <dl className="space-y-1 mono-text-small">
                  {archiveEntry && (
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="opacity-60">ENTRY</dt>
                      <dd className="col-span-2 opacity-100">{archiveEntry}</dd>
                    </div>
                  )}
                  {status && (
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="opacity-60">STATUS</dt>
                      <dd className="col-span-2 opacity-100">
                        {status === 'UNDER REVIEW' ? <span className="flicker-restricted">[REDACTED]</span> : status}
                      </dd>
                    </div>
                  )}
                  {classification && (
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="opacity-60">CLASS</dt>
                      <dd className="col-span-2 opacity-100">{classification}</dd>
                    </div>
                  )}
                  {genre && (
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="opacity-60">GENRE</dt>
                      <dd className="col-span-2 opacity-100">{genre}</dd>
                    </div>
                  )}
                  {Array.isArray(themes) && themes.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="opacity-60">THEMES</dt>
                      <dd className="col-span-2 opacity-100">{themes.join(', ')}</dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* Custodial Presence */}
              <div className="mt-12 pt-6 border-t border-border/10">
                <div className="mono-text-small text-[0.65rem] opacity-35 mb-2">
                  RESTORATION INITIATED BY: [R.J.P]
                </div>
                <div className="mono-text-small text-[0.7rem] opacity-40">
                  Last updated: 14 years after initial classification
                </div>
                <div className="mt-4 p-3 border-l-2 border-border/20 text-[0.8rem] italic opacity-65 font-serif">
                  Recovery notation appended 14 years after initial classification.
                </div>
              </div>
            </motion.div>

            {/* Right Column: Blurb/Excerpt */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, delay: 0.2 }}
              className="lg:col-span-8"
            >
              {typeof blurb === 'string' && blurb.length > 0 && (
                <div className="prose prose-invert max-w-none font-serif text-[0.9rem] leading-[1.5] opacity-85">
                  {blurb.split('\n').filter(p => p.trim() !== '').map((paragraph, index) => (
                    <p key={index} className="mb-6">
                      {paragraph}
                      {index === 0 && <span className="inline-block ml-2 font-mono text-[0.65rem] opacity-40 tracking-[0.08em]">[ CLASS IV / VERIFIED ]</span>}
                    </p>
                  ))}
                </div>
              )}

              {/* Conflicting Annotation */}
              <div className="my-8 pl-4 border-l border-border/15 text-[0.85rem] leading-[1.5] opacity-75 font-serif">
                <span className="mono-text-small text-[0.65rem] block mb-1">2015-04-12 // CUSTODIAL NOTE</span>
                <span className="line-through opacity-50">Initial assessment indicated stable narrative structure.</span>
                <br/>
                <span className="mono-text-small text-[0.65rem] block mt-2 mb-1">2023-11-08 // REVISION</span>
                Narrative structure exhibits severe semantic decay. Previous assessment invalidated.
              </div>

              {excerpt && (
                <div className="my-16 py-12 border-y border-border/30 text-center px-8">
                  <p className="font-serif text-2xl md:text-3xl leading-snug opacity-80 italic">
                    "{excerpt}"
                  </p>
                </div>
              )}

              {/* Preservation Dispute */}
              <div className="mt-12 p-3 bg-foreground/5 border border-border/15 text-[0.8rem] opacity-60 font-serif">
                <span className="font-bold">PRESERVATION DISPUTE:</span> Recovery sequence validity contested. Multiple overlay events detected in primary source material.
              </div>
            </motion.div>
          </section>

          {/* Related Books */}
          {relatedBookObjects.length > 0 && (
            <section className="mt-24 px-6 lg:px-12 max-w-[90rem] mx-auto border-t border-border/30 pt-16">
              <h2 className="mono-text-small mb-8">
                Related Documents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedBookObjects.map((relBook) => (
                  <Link 
                    key={relBook.slug} 
                    to={`/archive/${relBook.slug}`}
                    className="group block border border-border/20 p-6 hover:bg-secondary/20 transition-colors duration-700"
                  >
                    <div className="mono-text-small mb-3">
                      ENTRY {relBook.archiveEntry || 'UNKNOWN'} | {relBook.classification || 'UNCLASSIFIED'}
                    </div>
                    <h3 className="font-serif text-2xl mb-3 group-hover:opacity-80 transition-opacity duration-500">
                      {relBook.title}
                    </h3>
                    {relBook.longline && (
                      <p className="font-serif italic text-[0.85rem] opacity-65">
                        {relBook.longline}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

export default BookDetailTemplate;