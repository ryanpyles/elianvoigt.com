import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { links } from '@/data/siteContent.js';
import '@/styles/tou-theme.css';
import {
  COVER, WRAPAROUND, ISBN, PAPERBACK_URL, REVIEW_EMAIL,
  CLAUSES, LEASE_CONCEPTS, SYSTEMS, MOTIFS, COMPS,
  CHARACTERS_MAIN, CHARACTERS_MORE, FAQ, ALSO_BY,
} from '@/data/termsOfUnbeingLore.js';

// ---------------------------------------------------------------------------
// TERMS OF UNBEING — dedicated cinematic book page.
// All copy is manuscript-verified per the supplied package. No invented
// characters, quotations, prices, or retailer links.
// Shared data/theme now live in termsOfUnbeingLore.js / tou-theme.css so the
// Faust Luxury Residences institution site (pages/faust/*) can reuse them.
// ---------------------------------------------------------------------------

export function Crest({ className }) {
  // Institutional emblem: two rearing griffin forms flanking an art deco tower.
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Institutional crest: two rearing griffins flanking a tower" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      {/* tower */}
      <path d="M60 20 L60 12 M55 20 L65 20 M56 20 L56 16 M60 20 L60 16 M64 20 L64 16" />
      <path d="M52 24 L68 24 L66 92 L54 92 Z" />
      <path d="M56 34 L64 34 M56 44 L64 44 M56 54 L64 54 M56 64 L64 64" />
      <path d="M60 72 L60 92" />
      {/* left griffin */}
      <path d="M50 44 C40 40 34 48 34 58 C34 70 40 80 46 88 C40 82 42 72 44 66 C40 70 36 68 36 62 C40 66 44 62 44 56 C40 58 38 54 40 50 C44 54 48 52 50 48 Z" />
      <circle cx="35" cy="46" r="2.2" />
      <path d="M35 44 L32 41 M35 48 L31 49" />
      {/* right griffin (mirror) */}
      <path d="M70 44 C80 40 86 48 86 58 C86 70 80 80 74 88 C80 82 78 72 76 66 C80 70 84 68 84 62 C80 66 76 62 76 56 C80 58 82 54 80 50 C76 54 72 52 70 48 Z" />
      <circle cx="85" cy="46" r="2.2" />
      <path d="M85 44 L88 41 M85 48 L89 49" />
      {/* base */}
      <path d="M40 96 L80 96 M44 100 L76 100" />
    </svg>
  );
}

function OptionalImage({ src, alt, className }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return <img src={src} alt={alt} loading="lazy" onError={() => setOk(false)} className={className} />;
}

function CoverImg({ className, alt }) {
  return <img src={COVER} alt={alt} className={className} />;
}

// Renders the full wraparound jacket only if the asset is present.
function WraparoundShowcase() {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <section id="object" className="tou-section">
      <div className="tou-wrap">
        <p className="tou-eyebrow tou-brass">The Object</p>
        <h2 className="tou-h2">Shelter is a contract. Oblivion is the fee.</h2>
        <img
          src={WRAPAROUND}
          alt="Full wraparound cover of Terms of Unbeing, showing the front, spine, and back with author biography."
          loading="lazy"
          onError={() => setOk(false)}
          className="tou-wrap-img"
        />
      </div>
    </section>
  );
}

export default function TermsOfUnbeingPage() {
  const [equity, setEquity] = useState(43.2);
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setEquity(+(43.2 - p * 9.4).toFixed(1));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const submitReview = (e) => {
    e.preventDefault();
    const f = new FormData(formRef.current);
    const lines = [
      `Name: ${f.get('name') || ''}`,
      `Email: ${f.get('email') || ''}`,
      `Publication / channel: ${f.get('publication') || ''}`,
      `Website or profile: ${f.get('url') || ''}`,
      `Where you usually publish: ${f.get('where') || ''}`,
      `Approximate audience size: ${f.get('audience') || ''}`,
      `Preferred format: ${f.get('format') || ''}`,
      `Reason for interest: ${f.get('reason') || ''}`,
      `Expected review window: ${f.get('window') || ''}`,
    ].join('\n');
    const href = `mailto:${REVIEW_EMAIL}?subject=${encodeURIComponent('Review copy request — Terms of Unbeing')}&body=${encodeURIComponent(lines)}`;
    window.location.href = href;
    setSent(true);
  };

  return (
    <div className="tou-page">
      <Helmet>
        <title>Terms of Unbeing by Elian Voigt | Literary Horror Novel</title>
        <meta name="description" content="Gideon Cross signs a luxury-apartment lease that collects rent in memory, grief, and identity. Discover Terms of Unbeing, a literary horror novel by Elian Voigt." />
        <meta property="og:title" content="Terms of Unbeing — A Faust Luxury Residences Novel" />
        <meta property="og:description" content="An impossible lease. A falling Existential Equity balance. A building that invoices every feeling—and a dog that still knows who you are." />
        <meta property="og:type" content="book" />
        <link rel="canonical" href="https://elianvoigt.com/books/terms-of-unbeing" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Book',
          name: 'Terms of Unbeing',
          author: { '@type': 'Person', name: 'Elian Voigt' },
          publisher: { '@type': 'Organization', name: 'Formætrix Imprint' },
          bookEdition: 'Second Edition, Revised',
          datePublished: '2026',
          isbn: ISBN,
          inLanguage: 'en',
          genre: ['Literary Horror', 'Supernatural Horror', 'Psychological Horror', 'Weird Fiction'],
          isPartOf: { '@type': 'CreativeWorkSeries', name: 'Faust Luxury Residences' },
          description: 'Gideon Cross signs an impossibly affordable luxury-apartment lease that collects rent in memory, grief, identity, and emotional attachment.',
        })}</script>
      </Helmet>

      {/* Announcement */}
      <div className="tou-announce">The Second Edition, Revised — now available</div>

      {/* Nav */}
      <header className="tou-nav">
        <Link to="/" className="tou-brand">Elian Voigt</Link>
        <nav className="tou-anchors" aria-label="Sections">
          <a href="#overview">Overview</a>
          <a href="#lease">The Lease</a>
          <a href="#arya">Gideon &amp; Arya</a>
          <a href="#faust">Faust</a>
          <a href="#reviews">Reviews</a>
          <a href="#purchase">Purchase</a>
        </nav>
        <div className="tou-nav-right">
          <span className="tou-equity-mini" aria-hidden="true">EQ {equity}%</span>
          <a href="#purchase" className="tou-btn tou-btn--sm">Buy</a>
        </div>
      </header>

      {/* Hero */}
      <section className="tou-hero" id="overview">
        <div className="tou-hero-copy">
          <p className="tou-eyebrow">A Faust Luxury Residences Novel</p>
          <h1 className="tou-title">Terms of Unbeing</h1>
          <p className="tou-epigraph">“The first payment is never the money.”</p>
          <p className="tou-lede">
            Gideon Cross is out of money, out of options, and still carrying the death of a man he could not save.
            Then Faust Luxury Residences offers him an immaculate apartment for $512 a month. The lease appears
            impossible. The rent is worse. At 6:17 PM, the building begins collecting Existential Equity —
            converting memory, grief, remorse, identity, and attachment into assets it can retain. Gideon may not
            have enough of himself left to escape. Arya still recognizes him.
          </p>
          <div className="tou-cta-row">
            <a href="#purchase" className="tou-btn tou-btn--primary">Buy the paperback</a>
            <a href="#reviewers" className="tou-btn tou-btn--ghost">Request a review copy</a>
          </div>
          <a href="#revision" className="tou-textlink">Read about the revised edition →</a>
          <p className="tou-micro">Second Edition, Revised, 2026 · Paperback ISBN {ISBN}</p>
        </div>

        <div className="tou-hero-art" aria-hidden="false">
          <div className="tou-readout tou-mono">
            <span>EXISTENTIAL EQUITY</span><span className="tou-red">{equity}%</span>
            <span>LEASE CYCLE</span><span>72:00:00</span>
            <span>RECONCILIATION</span><span>6:17 PM</span>
          </div>
          <div className="tou-cover-wrap">
            <OptionalImage src="/tou/building.png" alt="Faust Luxury Residences, a nine-story white-stone and black-marble building with heavy brass doors and subtly inconsistent architectural angles." className="tou-building" />
            <CoverImg alt="Cover of Terms of Unbeing by Elian Voigt, presented as a Faust Luxury Residences novel." className="tou-cover" />
          </div>
          <Crest className="tou-crest" />
        </div>
      </section>

      {/* Trailer */}
      <section id="trailer" className="tou-section tou-trailer">
        <div className="tou-wrap tou-center">
          <p className="tou-eyebrow tou-brass">Broadcast</p>
          <h2 className="tou-h2 tou-h2--center">An infernal lease.</h2>
          <p className="tou-muted" style={{ maxWidth: '46ch', margin: '0 auto' }}>“I signed for shelter. They took my soul.”</p>
          <div className="tou-video-frame">
            <video className="tou-video" controls playsInline preload="none" poster="/tou/trailer-poster.jpg">
              <source src="/tou/trailer.mp4" type="video/mp4" />
              Your browser does not support the video element.
            </video>
          </div>
        </div>
      </section>

      {/* Listing */}
      <Section id="listing" eyebrow="The Listing" heading="The only door in the city opened for him.">
        <p>
          Gideon Cross has three hundred dollars, an apartment with sweating walls, a landlord threatening removal,
          and a VA housing referral with a waiting list longer than the winter. He also has Arya.
        </p>
        <p>
          Then a rental listing appears for Unit 6A at Faust Luxury Residences: art deco interiors, brass fixtures,
          impossible city views, utilities included, pets permitted, and rent set at $512 a month. The building does
          not screen applicants by income. It selects them by encumbrance. Hardship is eligibility. Unresolved
          obligation is collateral. Emotional weight is proof of funds. Gideon knows the listing is wrong. He
          schedules the viewing anyway.
        </p>
        <Pull>“The building does not rent to the comfortable. The comfortable have nothing to pay with.”</Pull>
      </Section>

      {/* Synopsis */}
      <Section id="synopsis" eyebrow="Overview" heading="A lease written against the human soul.">
        <p>
          When former Navy corpsman Gideon Cross signs a lease at Faust Luxury Residences, he believes he has
          accepted an apartment. Instead, he has entered a conversion system.
        </p>
        <p>
          Every day at 6:17 PM, the building reconciles its accounts. Gideon’s grief, memory, remorse, loyalty, and
          unresolved trauma become Existential Equity. Every protest creates another filing. Every attempt at
          resistance becomes evidence of participation. Every service offered by the building carries a cost Gideon
          may not remember agreeing to pay.
        </p>
        <p>
          As his identity balance falls, Gideon begins to understand the architecture around him: the HOA Tribunal,
          the Soul-Token Reliquary, the memory vaults, the compliance floors, the subterranean operations, and the
          Master Lease connecting Faust properties across places and times. To survive, he will have to do more than
          break the rules. He will have to read them completely.
        </p>
      </Section>

      {/* Characters */}
      <Section id="parties" eyebrow="Parties to the Agreement" heading="The lease recognizes several interested parties.">
        <div className="tou-grid tou-grid--2">
          {CHARACTERS_MAIN.map(([name, role, bio]) => (
            <article key={name} className="tou-card tou-char">
              <OptionalImage src={`/tou/${name.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '')}.png`} alt={`Portrait of ${name}`} className="tou-char-img" />
              <p className="tou-eyebrow tou-brass">{role}</p>
              <h3 className="tou-card-title">{name}</h3>
              <p className="tou-muted">{bio}</p>
            </article>
          ))}
        </div>
        <div className="tou-grid tou-grid--3 tou-more">
          {CHARACTERS_MORE.map(([name, bio]) => (
            <article key={name} className="tou-card tou-card--sm">
              <h4 className="tou-card-subtitle">{name}</h4>
              <p className="tou-muted tou-sm">{bio}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Gideon & Arya */}
      <section id="arya" className="tou-section tou-arya">
        <div className="tou-wrap">
          <p className="tou-eyebrow tou-brass">Unaffiliated Witness</p>
          <h2 className="tou-h2">The lease can revise the record. Arya does not care.</h2>
          <div className="tou-arya-body">
            <p className="tou-blur">
              Faust Luxury Residences changes Gideon’s handwriting, memories, reflection, emotional responses, and
              even the name under which his case is filed.
            </p>
            <p className="tou-blur">
              She senses Reconciliation Hour before it arrives. She refuses false thresholds. She recognizes when a
              human shape has had the person poured out of it. She watches the building’s copies of Gideon and finds
              the one fact its paperwork cannot overwrite.
            </p>
            <p className="tou-sharp tou-mono">Yes. You. Still you.</p>
            <p className="tou-muted">
              The novel’s most important bond is not sentimental decoration. It is a direct challenge to the
              building’s authority. Faust depends on classification, documentation, and billable identity. Arya
              recognizes without adjudicating.
            </p>
          </div>
        </div>
      </section>

      {/* Faust portfolio */}
      <Section id="faust" eyebrow="The Portfolio" heading="Occupancy at one property constitutes occupancy at all.">
        <p>
          Faust Luxury Residences is not a single building. The lease identifies a broader portfolio governed by a
          unified Master Lease.
        </p>
        <ul className="tou-props tou-mono">
          <li>Faust Luxury Residences — 617 Harrow Street</li>
          <li>Faust Riverside</li>
          <li>Faust on the Park</li>
          <li>The Faustian Meridian</li>
        </ul>
        <p>
          Properties may be presently standing, since demolished, or not yet built. The address at Harrow Street has
          previously existed as the Harrow Sanitarium, the Meridian Arms, and the Cross-Continental Temperance Hotel
          — each demolished and rebuilt on the same footprint without fully replacing what came before.
        </p>
        <Pull>A tenant does not relocate. A tenant is redistributed.</Pull>
      </Section>

      {/* Lease module */}
      <section id="lease" className="tou-section tou-lease">
        <div className="tou-wrap">
          <p className="tou-eyebrow tou-brass">Master Lease Disclosure</p>
          <h2 className="tou-h2">The terms do not remain where you read them.</h2>
          <p className="tou-muted tou-lease-intro">
            The lease governing Unit 6A is a local instrument of the Faust Master Lease. Its clauses can emerge,
            disappear, revise themselves, attach retroactively, repeat under new numbering, and remain structurally
            binding even when their text is absent. Residents are classified as Prospective, Provisional, Vested, or
            Anchor. Advancement cannot be declined. Downward reclassification is never voluntary.
          </p>

          <div className="tou-clauses">
            {CLAUSES.map((c) => (
              <div key={c.n} className="tou-clause tou-mono">
                <span className="tou-clause-n">Clause {c.n}</span>
                <p>{c.t}</p>
              </div>
            ))}
            <div className="tou-clause tou-clause--note tou-mono">
              <span className="tou-clause-n tou-red">Notice</span>
              <p>All prior revisions apply. The clock remains fixed at 6:17.</p>
            </div>
          </div>

          <div className="tou-grid tou-grid--2 tou-concepts">
            {LEASE_CONCEPTS.map(([t, d]) => (
              <div key={t} className="tou-card tou-card--sm">
                <h3 className="tou-card-subtitle tou-brass">{t}</h3>
                <p className="tou-muted tou-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems */}
      <Section id="systems" eyebrow="Tenant Amenities" heading="Every service is a collection mechanism.">
        <div className="tou-grid tou-grid--3">
          {SYSTEMS.map(([t, d]) => (
            <article key={t} className="tou-card tou-card--sm">
              <h3 className="tou-card-subtitle">{t}</h3>
              <p className="tou-muted tou-sm">{d}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Motifs */}
      <Section id="motifs" eyebrow="Instrument &amp; Evidence" heading="The vocabulary of the building.">
        <div className="tou-grid tou-grid--3">
          {MOTIFS.map(([t, d]) => (
            <div key={t} className="tou-motif">
              <span className="tou-motif-t tou-mono tou-brass">{t}</span>
              <p className="tou-muted tou-sm">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Literary positioning */}
      <Section id="literary" eyebrow="Literary DNA" heading="For readers who know the system is working exactly as designed.">
        <p>
          Terms of Unbeing belongs to a tradition in which the institution is not a backdrop to horror. It is the
          monster’s preferred form. The novel combines infernal descent, bureaucratic absurdity, unstable
          architecture, recursive documents, psychological fragmentation, and a distinctly contemporary fear: that
          every effort to explain your suffering merely makes it easier for a system to classify, monetize, and
          retain you.
        </p>
        <div className="tou-fourpart tou-mono">
          <span>Kafka wrote the intake procedure.</span>
          <span>Dante mapped the descent.</span>
          <span>Faust built the portfolio.</span>
          <span>Arya remained outside the contract.</span>
        </div>
        <div className="tou-grid tou-grid--2 tou-comps">
          {COMPS.map(([t, a, d]) => (
            <div key={t} className="tou-card tou-card--sm">
              <h3 className="tou-card-subtitle">{t} <span className="tou-muted tou-sm">by {a}</span></h3>
              <p className="tou-muted tou-sm">{d}</p>
            </div>
          ))}
        </div>
        <p className="tou-disclaimer tou-sm">
          Comparisons are intended to help readers locate the book’s tonal and thematic territory. They are not
          claims of stylistic imitation or direct influence. The novel itself invokes Dante and Kafka through
          epigraphs.
        </p>
      </Section>

      {/* Revised edition */}
      <Section id="revision" eyebrow="Second Edition, Revised" heading="All prior revisions apply.">
        <p>
          This is the Second Edition, Revised, published in 2026 by Formætrix Imprint. The final interior presents
          the story as both a novel and an artifact issued from within Faust Luxury Residences — its narrative
          interrupted and reframed through clauses, notices, tribunal records, affidavits, findings, accounting
          language, deposition material, lease excerpts, and archival back matter.
        </p>
        <p className="tou-muted">
          The design uses three coordinated type systems — TeX Gyre Pagella, TeX Gyre Heros, and TeX Gyre Cursor —
          typeset with LuaLaTeX, and edited, designed, and produced by Formætrix.
        </p>
      </Section>

      <WraparoundShowcase />

      {/* Reviewer intake */}
      <section id="reviewers" className="tou-section tou-reviewers">
        <div className="tou-wrap">
          <p className="tou-eyebrow tou-brass">Reviewer Intake</p>
          <h2 className="tou-h2">Management is accepting outside testimony.</h2>
          <p className="tou-muted">
            Complimentary digital review copies of Terms of Unbeing may be available for readers and reviewers
            covering literary horror, supernatural horror, weird fiction, dark speculative fiction, independent
            publishing, veteran narratives, institutional horror, or formally inventive fiction. Review copies are
            provided without any expectation of favorable coverage.
          </p>

          {sent ? (
            <div className="tou-success">
              <p>Thank you. Your review-copy request has been prepared in your email client — send it to complete the request. You will receive a response by email if a copy is available.</p>
              <p className="tou-muted tou-sm">Receipt does not guarantee classification, but Management has acknowledged your existence.</p>
            </div>
          ) : (
            <form ref={formRef} className="tou-form" onSubmit={submitReview}>
              <h3 className="tou-card-subtitle">Application for Provisional Reviewer Status</h3>
              <div className="tou-form-grid">
                <label>Name<input name="name" type="text" required autoComplete="name" /></label>
                <label>Email<input name="email" type="email" required autoComplete="email" /></label>
                <label>Publication, channel, or platform<input name="publication" type="text" /></label>
                <label>Website or profile URL<input name="url" type="url" placeholder="https://" /></label>
                <label>Where you usually publish reviews<input name="where" type="text" /></label>
                <label>Approximate audience size (optional)<input name="audience" type="text" /></label>
                <label>Preferred digital format
                  <select name="format" defaultValue="No preference">
                    <option>EPUB</option>
                    <option>PDF</option>
                    <option>No preference</option>
                  </select>
                </label>
                <label>Expected review window (optional)<input name="window" type="text" /></label>
                <label className="tou-form-full">Reason for interest<textarea name="reason" rows="3" /></label>
              </div>
              <label className="tou-check"><input type="checkbox" required /> I understand that receiving a complimentary review copy does not require a positive review.</label>
              <label className="tou-check"><input type="checkbox" /> I am open to being contacted about future Elian Voigt releases.</label>
              <button type="submit" className="tou-btn tou-btn--primary">Submit for classification</button>
              <p className="tou-muted tou-sm">The Board does not require praise. Only attendance.</p>
            </form>
          )}
        </div>
      </section>

      {/* Reader reviews */}
      <section id="reviews" className="tou-section tou-readreviews">
        <div className="tou-wrap">
          <p className="tou-eyebrow tou-brass">Occupancy Records</p>
          <h2 className="tou-h2">Already completed occupancy?</h2>
          <p className="tou-muted">
            Reader reviews help independent fiction remain visible. If you have finished Terms of Unbeing, consider
            leaving an honest review on the retailer or reading platform you use.
          </p>
          <div className="tou-cta-row">
            <a href={PAPERBACK_URL} target="_blank" rel="noopener noreferrer" className="tou-btn tou-btn--ghost">Review on Amazon</a>
            <a href={links.substack} target="_blank" rel="noopener noreferrer" className="tou-btn tou-btn--ghost">Share on Substack</a>
          </div>
        </div>
      </section>

      {/* Purchase */}
      <section id="purchase" className="tou-section tou-purchase">
        <div className="tou-wrap">
          <p className="tou-eyebrow tou-brass">Available Now</p>
          <h2 className="tou-h2">Review the terms before signing.</h2>
          <p className="tou-muted">Terms of Unbeing: A Faust Luxury Residences Novel is available in paperback.</p>
          <div className="tou-cta-row">
            <a href={PAPERBACK_URL} target="_blank" rel="noopener noreferrer" className="tou-btn tou-btn--primary">Buy the paperback</a>
          </div>
          <dl className="tou-meta tou-mono">
            <div><dt>Author</dt><dd>Elian Voigt</dd></div>
            <div><dt>Publisher</dt><dd>Formætrix Imprint, Chicago</dd></div>
            <div><dt>Edition</dt><dd>Second Edition, Revised, 2026</dd></div>
            <div><dt>Paperback ISBN</dt><dd>{ISBN}</dd></div>
          </dl>
        </div>
      </section>

      {/* Author */}
      <Section id="author" eyebrow="Author of Record" heading="Elian Voigt">
        <p>
          Elian Voigt writes unsettling fiction about systems, memory, and the places we are told we cannot leave.
          His work explores the quiet violence of bureaucracy, the instability of identity, and the cost of
          belonging. He lives in Chicago. Terms of Unbeing is his seventh novel.
        </p>
        <div className="tou-alsoby">
          <p className="tou-eyebrow tou-brass">Also by Elian Voigt</p>
          <ul>
            {ALSO_BY.map(([t, id]) => (
              <li key={id}><Link to={`/catalogue/${id}`}>{t}</Link></li>
            ))}
          </ul>
          <p className="tou-eyebrow tou-brass" style={{ marginTop: '1.5rem' }}>Forthcoming</p>
          <ul>
            <li>Liminal 6:17</li>
            <li>Babel Threshold: A Palimpsest of Tongues</li>
          </ul>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" eyebrow="Disclosures" heading="Frequently asked questions.">
        <div className="tou-faq">
          {FAQ.map(([q, a]) => (
            <details key={q} className="tou-faq-item">
              <summary>{q}</summary>
              <p className="tou-muted">{a}</p>
            </details>
          ))}
        </div>
        <p className="tou-disclaimer tou-sm">
          Content note: Terms of Unbeing contains depictions of housing instability, financial distress, veteran
          trauma, grief, memory loss, emotional manipulation, institutional coercion, bureaucratic abuse, identity
          erosion, addiction references, death, and psychological distress. A dog is placed in threatening situations
          but remains central to the story.
        </p>
      </Section>

      {/* Newsletter */}
      <section id="registry" className="tou-section tou-registry">
        <div className="tou-wrap tou-center">
          <p className="tou-eyebrow tou-brass">The Resident Registry</p>
          <h2 className="tou-h2">Receive notices from Management.</h2>
          <p className="tou-muted">
            Join Elian Voigt’s mailing list for publication updates, essays, new fiction, design notes, review
            opportunities, and further notices concerning Faust Luxury Residences.
          </p>
          <a href={links.substack} target="_blank" rel="noopener noreferrer" className="tou-btn tou-btn--primary">Join the registry</a>
          <p className="tou-muted tou-sm">Your information will not be sold, redistributed among affiliated properties, or attached retroactively to an unread amendment.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="tou-section tou-final">
        <div className="tou-wrap tou-center">
          <p className="tou-eyebrow tou-red">Final Notice</p>
          <h2 className="tou-h2">The apartment is still available.</h2>
          <p className="tou-muted">
            Gideon Cross found the only door in the city willing to open for him. The building had already reviewed
            what he was carrying.
          </p>
          <div className="tou-cta-row tou-center-row">
            <a href={PAPERBACK_URL} target="_blank" rel="noopener noreferrer" className="tou-btn tou-btn--primary">Buy Terms of Unbeing</a>
            <a href="#reviewers" className="tou-btn tou-btn--ghost">Request a review copy</a>
          </div>
          <p className="tou-final-line tou-mono">No renewal will be offered. No vacancy will be recorded.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="tou-footer">
        <div className="tou-wrap">
          <Crest className="tou-footer-crest" />
          <div className="tou-footer-mono tou-mono">
            <p>Formætrix Imprint · Chicago, Illinois</p>
            <p>Terms of Unbeing · Copyright © 2026 by Elian Voigt</p>
            <p>Paperback ISBN {ISBN}</p>
            <p><a href="https://elianvoigt.com">elianvoigt.com</a> · <a href="https://formaetrix.com" target="_blank" rel="noopener noreferrer">formaetrix.com</a></p>
          </div>
          <p className="tou-footer-line tou-mono tou-red">No renewal will be offered. No vacancy will be recorded.</p>
          <p className="tou-footer-note tou-mono">You have read this far. Management notes the fact.</p>
        </div>
      </footer>

      {/* Sticky mobile purchase */}
      <a href="#purchase" className="tou-sticky-buy tou-mono">Buy the paperback · ISBN {ISBN}</a>
    </div>
  );
}

function Section({ id, eyebrow, heading, children }) {
  return (
    <section id={id} className="tou-section">
      <div className="tou-wrap">
        <p className="tou-eyebrow tou-brass" dangerouslySetInnerHTML={{ __html: eyebrow }} />
        <h2 className="tou-h2">{heading}</h2>
        <div className="tou-prose">{children}</div>
      </div>
    </section>
  );
}

function Pull({ children }) {
  return <blockquote className="tou-pull tou-display">{children}</blockquote>;
}
