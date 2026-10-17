import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { liminal as b } from '@/data/liminalAnnouncement.js';
import '@/styles/liminal-theme.css';

const pad = (n) => String(n).padStart(2, '0');

// Local time, ticking. During the minute 18:17 it holds at 18:17:00.
function useLocalTime() {
  const read = () => {
    const now = new Date();
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (now.getHours() === 18 && now.getMinutes() === 17) return '18:17:00';
    return reduce ? `${pad(now.getHours())}:${pad(now.getMinutes())}` : `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  };
  const [time, setTime] = useState(read);
  useEffect(() => {
    const id = setInterval(() => setTime(read()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function Stamp({ children, ...rest }) {
  return (
    <p className="lm-stamp" {...rest}>
      <span>{children}</span>
    </p>
  );
}

const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export default function LiminalPage() {
  const time = useLocalTime();
  const url = `${b.siteUrl}${b.path}`;
  const image = b.cover ? `${b.siteUrl}${b.cover}` : null;
  const year = b.releaseDate ? b.releaseDate.slice(0, 4) : null;
  const releaseLabel = b.releaseDate ? formatDate(b.releaseDate) : null;
  const metaDescription = `At 18:17, three heartbeats sync on one axis and one stops. A literary novel about consent after the fact. ${b.publisher}${year ? `, ${year}` : ''}.`;
  const title = `${b.title} — a novel by ${b.author}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: b.title,
    author: { '@type': 'Person', name: b.author },
    publisher: { '@type': 'Organization', name: b.publisher },
    numberOfPages: b.pages,
    bookFormat: 'https://schema.org/Paperback',
    url,
    ...(b.isbn && { isbn: b.isbn }),
    ...(b.releaseDate && { datePublished: b.releaseDate }),
    ...(image && { image }),
    ...(b.price && b.buyUrl && {
      offers: {
        '@type': 'Offer',
        price: String(b.price),
        priceCurrency: 'USD',
        url: b.buyUrl,
        availability: `https://schema.org/${b.availability}`,
      },
    }),
  };

  const details = [
    ['Pages', b.pages],
    ['Trim', b.trim],
    ['Publisher', b.publisher],
    ['ISBN', b.isbn],
    ['Release', releaseLabel],
    ['Price', b.price ? `$${b.price}` : null],
  ].filter(([, v]) => v);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="book" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={url} />
        {image && <meta property="og:image" content={image} />}
        <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        {image && <meta name="twitter:image" content={image} />}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="voigt-brand lm-page">
        <Header />

        <main className="lm-main">
          <div className="lm-wrap">
            <header className="lm-head">
              <Stamp aria-hidden="true">{time}</Stamp>
              <h1 className="lm-title">{b.title}</h1>
              <p className="lm-label">A novel</p>
              <p className="lm-author">{b.author}</p>
              <p className="lm-label" style={{ marginTop: '0.75rem' }}>
                {releaseLabel ? `${releaseLabel} · ${b.publisher}` : b.publisher}
              </p>
            </header>

            {b.cover && <img className="lm-cover" src={b.cover} alt={`${b.title}, a novel by ${b.author}. Cover.`} />}

            <div className="lm-stamp-block">
              <Stamp>18:17 · Louisville</Stamp>
            </div>
            <p className="lm-opening">{b.opening}</p>

            <section className="lm-prose" style={{ marginTop: '4.5rem' }} aria-label="Description">
              <p>{b.description[0]}</p>
              <div className="lm-stamp-block" style={{ margin: '2.5rem 0' }}>
                <Stamp>18:17 · Reed Street</Stamp>
              </div>
              <p>{b.description[1]}</p>
              <p>{b.description[2]}</p>
              <p>{b.description[3]}</p>
            </section>

            <section aria-labelledby="lm-channels-h">
              <h2 id="lm-channels-h" className="lm-sr">Three channels</h2>
              <div className="lm-channels">
                {b.channels.map((c) => (
                  <div key={c.letter} className="lm-channel">
                    <p className="lm-channel-head">
                      <span className="lm-label"><span className="lm-letter">{c.letter}</span> — {c.name}</span>
                    </p>
                    <p>{c.line}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="lm-prose" style={{ marginTop: '5rem' }} aria-labelledby="lm-excerpt-h">
              <h2 id="lm-excerpt-h" className="lm-label lm-excerpt-title">From the opening</h2>
              {b.excerpt.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>

            <section style={{ marginTop: '4.5rem' }} aria-labelledby="lm-details-h">
              <h2 id="lm-details-h" className="lm-sr">Details</h2>
              <dl className="lm-details">
                {details.map(([k, v]) => (
                  <React.Fragment key={k}>
                    <dt className="lm-label">{k}</dt>
                    <dd>{v}</dd>
                  </React.Fragment>
                ))}
              </dl>
            </section>

            <details className="lm-notes">
              <summary className="lm-label">Content notes</summary>
              <p>{b.contentNotes}</p>
            </details>

            <div className="lm-cta">
              {b.buyUrl && (
                <a href={b.buyUrl} target="_blank" rel="noopener noreferrer" className="ev-buy">
                  {b.availability === 'PreOrder' ? 'Preorder' : 'Buy'}
                </a>
              )}
              <a href={b.essaysUrl} target="_blank" rel="noopener noreferrer" className="lm-essays">
                {b.essaysLabel} →
              </a>
            </div>

            <p className="lm-colophon">{b.colophon}</p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
