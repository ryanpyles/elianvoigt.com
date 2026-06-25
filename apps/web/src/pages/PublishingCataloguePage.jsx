import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { publishedWorks, upcomingWorks } from '@/data/catalogueData.js';
import Header from '@/components/Header.jsx';
import RetrievalTerminal from '@/components/RetrievalTerminal.jsx';

export default function PublishingCataloguePage() {
  return (
    <div className="archive-page flex min-h-screen">
      <Helmet>
        <title>Publishing Catalogue — Elian Voigt</title>
        <meta name="description" content="The collected works and publishing catalogue of Elian Voigt, maintained by FORMÆTRIX Imprint." />
      </Helmet>

      <Header />
      <RetrievalTerminal />

      <main className="main-content flex-1 pt-24 pb-32">
        <div className="catalogue-wrap">
          <header className="catalogue-header" style={{ animationDelay: '0ms' }}>
            <div className="catalogue-imprint">ELIAN VOIGT · CHICAGO</div>
            <h1 className="catalogue-title">Elian Voigt</h1>
            <div className="catalogue-subtitle">The Collected Works — a publishing catalogue</div>
            <div className="catalogue-rule"></div>
          </header>

          <section>
            <div className="catalogue-section-label">PUBLISHED WORKS</div>
            {publishedWorks.map((work, index) => (
              <Link 
                to={`/catalogue/${work.id}`} 
                key={work.num} 
                className="catalogue-entry-link block"
              >
                <article 
                  className="catalogue-entry" 
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="catalogue-entry-top">
                    <span className="catalogue-entry-num">{work.num}</span>
                    <h2 className="catalogue-entry-title">{work.title}</h2>
                    <span className="catalogue-status">{work.status}</span>
                  </div>
                  <div className="catalogue-entry-genre">{work.genre}</div>
                  
                  {work.coverImage ? (
                    <div className="catalogue-entry-cover-container">
                      <img 
                        src={work.coverImage} 
                        alt={`Cover of ${work.title}`} 
                        className="catalogue-entry-cover-image"
                      />
                      <div className="catalogue-entry-cover-content">
                        <p className="catalogue-entry-desc">{work.description}</p>
                        {work.formats && (
                          <div className="catalogue-entry-formats">
                            {work.formats.map((format, fIndex) => (
                              <div key={fIndex} className="catalogue-format">
                                <span className="catalogue-format-key">{format.key}</span>
                                <span className="catalogue-format-leader"></span>
                                <span className="catalogue-format-value">
                                  {format.value.includes(',') ? (
                                    <>
                                      <strong>{format.value.split(',')[0]}</strong>
                                      <span>,</span>
                                      {format.value.split(',')[1]}
                                    </>
                                  ) : (
                                    format.value
                                  )}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="catalogue-entry-desc">{work.description}</p>
                      {work.formats && (
                        <div className="catalogue-entry-formats">
                          {work.formats.map((format, fIndex) => (
                            <div key={fIndex} className="catalogue-format">
                              <span className="catalogue-format-key">{format.key}</span>
                              <span className="catalogue-format-leader"></span>
                              <span className="catalogue-format-value">
                                {format.value.includes(',') ? (
                                  <>
                                    <strong>{format.value.split(',')[0]}</strong>
                                    <span>,</span>
                                    {format.value.split(',')[1]}
                                  </>
                                ) : (
                                  format.value
                                )}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </article>
              </Link>
            ))}
          </section>

          <section className="catalogue-upcoming mt-16">
            <div className="catalogue-section-label">FORTHCOMING</div>
            {upcomingWorks.map((work, index) => (
              <article 
                key={index} 
                className="catalogue-entry pointer-events-none" 
                style={{ animationDelay: `${(index + publishedWorks.length + 1) * 100}ms` }}
              >
                <div className="catalogue-entry-top">
                  <span className="catalogue-entry-num">{work.num}</span>
                  <h2 className="catalogue-entry-title">{work.title}</h2>
                  <span className="catalogue-status upcoming">{work.status}</span>
                </div>
                <div className="catalogue-entry-genre">{work.genre}</div>
                <p className="catalogue-entry-desc">{work.description}</p>
              </article>
            ))}
          </section>

          <footer className="catalogue-footer">
            <div className="catalogue-footer-mono">ELIAN VOIGT</div>
            <div>Institutional Archival Division</div>
            <div className="mt-4">
              <a href="/">elianvoigt.com</a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}