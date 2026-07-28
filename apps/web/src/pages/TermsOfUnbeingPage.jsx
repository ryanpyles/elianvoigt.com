import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { links } from '@/data/siteContent.js';

// ---------------------------------------------------------------------------
// TERMS OF UNBEING — dedicated cinematic book page.
// All copy is manuscript-verified per the supplied package. No invented
// characters, quotations, prices, or retailer links.
// ---------------------------------------------------------------------------

const COVER = 'https://horizons-cdn.hostinger.com/382cedd2-9572-4434-8e0c-f3ad52cc678a/79bae30f343a1b0ee8d13a09ec9b159f.png';
const ISBN = '9798189011627';
// Non-fabricated, functional link: an Amazon search by ISBN. Replace with the
// direct product URL once the listing URL is known.
const PAPERBACK_URL = `https://www.amazon.com/s?k=${ISBN}`;
const REVIEW_EMAIL = 'author@elianvoigt.com';

const CLAUSES = [
  { n: '2.1', t: 'Eligibility is determined not by income but by encumbrance.' },
  { n: '3.1', t: 'Ignorance of the terms is itself a term.' },
  { n: '6.2', t: 'Advancement to Vested, and thereafter to Anchor, is earned through demonstrated resonance and cannot be declined.' },
  { n: '8.8', t: 'A tenant does not relocate. A tenant is redistributed.' },
  { n: '18', t: 'Lost rooms, multiplied doors, and unreturnable hallways remain part of the leased unit.' },
  { n: '20', t: 'Noise, silence, lack of response, excessive breathing, animal alarm, and unanswered prayer may each constitute disturbance at Management’s discretion.' },
];

const LEASE_CONCEPTS = [
  ['Existential Equity', 'Emotional resonance is converted into a measurable balance that falls as the building extracts value.'],
  ['Reconciliation Hour', 'At 6:17 PM, the building reconciles its accounts and harvests Existential Equity.'],
  ['Portfolio Reciprocity', 'Obligations follow the tenant across all affiliated Faust properties.'],
  ['Reversion', 'Units and remaining contents may be reabsorbed rather than re-listed.'],
  ['Prior Names', 'Management may deem a tenant’s previous name surplus to an optimized profile.'],
  ['Incomplete Presence', 'A tenant may be treated as fully present for liability and fully absent for defense.'],
  ['Recursive Enforcement', 'Repeated clauses compound obligation even when they add no new meaning.'],
  ['Burn Clause', 'Section 0 provides that a contract consuming the full identity of its signatory loses standing — no consenting party remains.'],
];

const SYSTEMS = [
  ['The HOA Tribunal', 'Names are misfiled, errors become the tenant’s responsibility, spiritual leakage can be cited as a violation, and appeals are final.'],
  ['The Reading Room', 'A library of variations of The Leaseholder’s Guide to Existence, where the text changes while continuing to say the same thing.'],
  ['The Gastronomer’s Hall', 'A dining room offering food linked to intimate memories, priced in maternal approval, childhood stories, and other emotional assets.'],
  ['Debt & Delight', 'A retail environment selling reconstructed memories and simulated experiences using identity balances and store credit.'],
  ['The Soul-Token Reliquary', 'A system that itemizes a tenant’s roles, loyalties, unresolved trauma, and collateral value.'],
  ['Emotional Compliance', 'Programs designed to convert rage, grief, projection, self-analysis, and resistance into participation.'],
  ['The Vault', 'Storage for memories, versions of identity, extracted assets, and sealed collateral.'],
  ['Subterranean Operations', 'The industrial system beneath the building, where collected regret and depleted tenants are redirected into its continuing operation.'],
  ['Tenant Audit', 'A process that presents alternative versions of the self and demands singular classification.'],
];

const MOTIFS = [
  ['6:17', 'The hour of reconciliation, filing, payment, and administrative transformation.'],
  ['Burned Paper', 'The lease smells as though fire passed through it and left its memory behind.'],
  ['Red & Black Ink', 'Red marks signatures, filings, authority, warnings, and contractual attachment. Used sparingly.'],
  ['Brass', 'Doors, plaques, directories, fixtures, and cards form the building’s luxury vocabulary.'],
  ['Marble & Stone', 'Black marble and surgical white stone combine elite residential design with clinical severity.'],
  ['Copper Veins', 'In the lower systems, pipes and mesh make the building feel anatomical without becoming organic.'],
  ['Mirrors', 'Gideon’s reflection becomes delayed, revised, duplicated, and used as evidence against him.'],
  ['Ledgers', 'Personal experience becomes a record, a balance, a docket, a case, a transaction, an asset.'],
  ['The Griffin Crest', 'Two rearing griffins flank a tower — official, proprietary, non-negotiable.'],
  ['The Brass Zippo', 'Danny Reyes’s lighter, with a crooked Saint Christopher medal: memory, guilt, loyalty, evidence.'],
  ['The Three-Line Bird', 'Nora’s simple drawing — gentleness, lost intimacy, memory the building cannot fully reduce.'],
  ['Arya’s Weight', 'She presses against Gideon and blocks thresholds, a physical anchor when reality is revised.'],
];

const COMPS = [
  ['The Trial', 'Franz Kafka', 'Accusation, inaccessible procedure, self-incrimination, and systems that treat participation as jurisdiction.'],
  ['The Castle', 'Franz Kafka', 'Institutional authority that stays inaccessible while governing every movement beneath it.'],
  ['Inferno', 'Dante Alighieri', 'A descent through increasingly explicit layers of punishment, classification, and moral accounting.'],
  ['House of Leaves', 'Mark Z. Danielewski', 'Architecture that exceeds its physical boundaries; documentation that becomes part of the horror.'],
  ['The Haunting of Hill House', 'Shirley Jackson', 'A building that acts upon perception, identity, and the idea of home.'],
  ['Annihilation', 'Jeff VanderMeer', 'An environment that revises the observer and resists stable interpretation.'],
  ['Piranesi', 'Susanna Clarke', 'Impossible interiors, memory, cataloguing, and the unstable relation of enclosure and identity.'],
];

const CHARACTERS_MAIN = [
  ['Gideon Cross', 'The Provisional Tenant', 'A forty-one-year-old former Navy hospital corpsman and lapsed compliance engineer. He carries the death of Danny Reyes, the friend who called him Saint. His training, guilt, and unresolved weight make him an unusually valuable tenant; the building identifies Danny’s death as his “primary collateral.”'],
  ['Arya', 'Unaffiliated Witness', 'Gideon’s fawn-colored dog — companion, alarm, witness, and final point of recognition. She senses reconciliations before he does and resists thresholds, false copies, and anything wearing the shape of a person without the presence inside it. The building cannot make her treat a record as more authoritative than recognition.'],
  ['Azrael Faust', 'Proprietor', 'The proprietor of Faust Luxury Residences and the human face of its contractual system. A charcoal suit, a silver fountain pen, and the warmth of polished stone. His threat is administrative rather than theatrical: he offers comfort, optimization, and renewal while treating identity as an asset class.'],
  ['Beatrice “Bea” Hall', 'Incomplete Conversion', 'The woman working the coffee cart outside the building. She warns Gideon about 6:17 before he enters. She reads erased clauses, preserves tenant names in private ledgers, and helps selected tenants surface the true lease — neither free nor fully billable, retained through a technicality the Master Lease did not anticipate.'],
];

const CHARACTERS_MORE = [
  ['Danny Reyes', 'Gideon’s dead friend from his military service, who carried a brass Zippo with a crooked Saint Christopher medal and called Gideon “Saint.” Faust treats that grief as high-yield collateral.'],
  ['Nora', 'A woman Gideon loved after the military, who drew constantly — her recurring mark a bird in three lines. The building’s theft of the last napkin she left becomes part of the novel’s study of memory as proof.'],
  ['Ms. Ellix', 'An operator within the conversion economy, handling memory extraction, Soul Marks, receipts, and repossessed assets. Through her, pain is processed into value.'],
  ['Priya Anand', 'A tenant whose grief is pledged in full — a case that shows how the system reclassifies devastating loss as an asset, then calls forced erasure optimization.'],
  ['Walter Kowalczyk', 'A long-term tenant presented as a model of compliance. His contentment reveals what Faust calls successful tenancy: the exhaustion of anything left to contest.'],
  ['Doug', 'A resident consuming prepackaged memories through the building’s retail systems — meaning removed, then sold back as an upgrade.'],
  ['Mateo', 'A tenant referenced within the larger reconciliation system, contributing to Gideon’s realization that his account is one line inside a portfolio-wide operation.'],
];

const FAQ = [
  ['What is Terms of Unbeing about?', 'It follows Gideon Cross, a former Navy hospital corpsman who rents an impossibly affordable apartment and discovers that Faust Luxury Residences collects rent in memory, grief, identity, and emotional attachment.'],
  ['What genre is it?', 'Literary horror, supernatural horror, bureaucratic horror, psychological horror, and weird fiction.'],
  ['Who is Arya?', 'Arya is Gideon’s dog and his most reliable companion. Her ability to recognize him without reference to documents, labels, or records becomes central to the story.'],
  ['Who is Azrael Faust?', 'Azrael Faust is the proprietor of Faust Luxury Residences and the administrative face of the portfolio’s lease and conversion system.'],
  ['Is Faust Luxury Residences a single building?', 'No. The novel identifies a broader portfolio that includes Faust Riverside, Faust on the Park, and the Faustian Meridian, all governed by a unified Master Lease.'],
  ['What is Existential Equity?', 'It is the building’s measure of extractable emotional and personal value. Grief, memory, loyalty, identity, remorse, and attachment can all be converted into equity.'],
  ['Why is 6:17 important?', 'It is Reconciliation Hour, when the building squares its accounts and harvests Existential Equity.'],
  ['Is this a revised edition?', 'Yes. It is the Second Edition, Revised, published in 2026 by Formætrix Imprint in Chicago, Illinois.'],
  ['What is the paperback ISBN?', ISBN + '.'],
  ['Are review copies available?', 'Review copies may be available while the author is actively providing them. Requests are welcome from readers and reviewers covering literary and supernatural horror, weird fiction, and formally inventive fiction.'],
];

const ALSO_BY = [
  ['What Survives Is Proof', 'what-survives-is-proof'],
  ['Feast of the Broadcast Saints', 'feast-of-the-broadcast-saints'],
  ['Summer of the Glass Bees', 'summer-of-the-glass-bees'],
  ['Declensions of Dark Water', 'declensions-of-dark-water'],
  ['The Quiet Metric', 'the-quiet-metric'],
];

function Crest({ className }) {
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

// Prefers the local final cover; falls back to the remote cover until it exists.
function CoverImg({ className, alt }) {
  const [src, setSrc] = useState('/tou/epub-terms-cover.png');
  return <img src={src} alt={alt} className={className} onError={() => { if (src !== COVER) setSrc(COVER); }} />;
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
          src="/tou/wraparound.png"
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

      <style>{TOU_CSS}</style>

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

const TOU_CSS = `
.tou-page {
  --tou-black:#0B0B0C; --tou-marble:#151517; --tou-white:#F0F0EC; --tou-bone:#E7E0D2;
  --tou-brass:#A48345; --tou-copper:#8A5A3B; --tou-gray:#999A96; --tou-red:#9a3a3f; --tou-navy:#17202B;
  background:var(--tou-black); color:var(--tou-white);
  font-family:'Inter',system-ui,sans-serif; line-height:1.6; font-size:18px;
  min-height:100vh; overflow-x:hidden;
}
.tou-page ::selection{ background:var(--tou-brass); color:#000; }
.tou-page a{ color:inherit; text-decoration:none; }
.tou-display{ font-family:'Playfair Display',Georgia,serif; }
.tou-mono{ font-family:'IBM Plex Mono',ui-monospace,monospace; }
.tou-red{ color:var(--tou-red); }
.tou-brass{ color:var(--tou-brass); }
.tou-muted{ color:var(--tou-gray); }
.tou-sm{ font-size:0.85rem; line-height:1.55; }
.tou-center{ text-align:center; }

.tou-wrap{ max-width:1180px; margin:0 auto; padding:0 clamp(20px,5vw,72px); }
.tou-section{ padding:clamp(72px,11vw,150px) 0; border-top:1px solid rgba(164,131,69,0.12); }
.tou-prose p{ max-width:70ch; margin:0 0 1.25rem; }
.tou-eyebrow{ font-family:'IBM Plex Mono',monospace; font-size:0.66rem; letter-spacing:0.32em; text-transform:uppercase; margin:0 0 1.25rem; }
.tou-h2{ font-family:'Playfair Display',serif; font-weight:500; font-size:clamp(1.9rem,4.2vw,3.1rem); line-height:1.1; margin:0 0 1.75rem; max-width:22ch; }

.tou-announce{ background:var(--tou-marble); color:var(--tou-bone); text-align:center;
  font-family:'IBM Plex Mono',monospace; font-size:0.64rem; letter-spacing:0.28em; text-transform:uppercase;
  padding:9px 16px; border-bottom:1px solid rgba(164,131,69,0.25); }

.tou-nav{ position:sticky; top:0; z-index:50; display:flex; align-items:center; justify-content:space-between; gap:16px;
  padding:14px clamp(20px,5vw,48px); background:rgba(11,11,12,0.82); backdrop-filter:blur(10px);
  border-bottom:1px solid rgba(164,131,69,0.15); }
.tou-brand{ font-family:'Playfair Display',serif; letter-spacing:0.14em; text-transform:uppercase; font-size:0.95rem; }
.tou-anchors{ display:none; gap:26px; font-family:'IBM Plex Mono',monospace; font-size:0.62rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--tou-gray); }
.tou-anchors a:hover{ color:var(--tou-white); }
.tou-nav-right{ display:flex; align-items:center; gap:14px; }
.tou-equity-mini{ font-family:'IBM Plex Mono',monospace; font-size:0.6rem; letter-spacing:0.14em; color:var(--tou-brass); }
@media(min-width:1024px){ .tou-anchors{ display:flex; } }

.tou-btn{ display:inline-flex; align-items:center; justify-content:center; gap:8px;
  font-family:'IBM Plex Mono',monospace; font-size:0.72rem; letter-spacing:0.14em; text-transform:uppercase;
  padding:0.85rem 1.5rem; border:1px solid var(--tou-brass); color:var(--tou-bone); background:transparent;
  transition:background-color .35s,color .35s,border-color .35s; cursor:pointer; }
.tou-btn--primary{ background:var(--tou-brass); color:#0B0B0C; border-color:var(--tou-brass); }
.tou-btn--primary:hover{ background:var(--tou-red); border-color:var(--tou-red); color:var(--tou-white); }
.tou-btn--ghost:hover{ border-color:var(--tou-white); color:var(--tou-white); }
.tou-btn--sm{ padding:0.5rem 0.9rem; font-size:0.62rem; }
.tou-cta-row{ display:flex; flex-wrap:wrap; gap:14px; margin:2rem 0 1rem; }
.tou-center-row{ justify-content:center; }
.tou-textlink{ display:inline-block; font-family:'IBM Plex Mono',monospace; font-size:0.7rem; letter-spacing:0.1em; color:var(--tou-brass); border-bottom:1px solid transparent; }
.tou-textlink:hover{ border-color:var(--tou-brass); }
.tou-micro{ font-family:'IBM Plex Mono',monospace; font-size:0.64rem; letter-spacing:0.1em; color:var(--tou-gray); margin-top:1.5rem; }

.tou-hero{ display:grid; grid-template-columns:1fr; gap:48px; align-items:center;
  max-width:1180px; margin:0 auto; padding:clamp(56px,9vw,110px) clamp(20px,5vw,72px);
  background:
    radial-gradient(120% 80% at 85% 10%, rgba(23,32,43,0.55), transparent 60%),
    linear-gradient(180deg, rgba(21,21,23,0.6), transparent 40%); }
.tou-title{ font-family:'Playfair Display',serif; font-weight:600; line-height:0.98;
  font-size:clamp(2.8rem,8vw,6.2rem); margin:0.6rem 0 1.4rem; letter-spacing:-0.01em; }
.tou-epigraph{ font-family:'Playfair Display',serif; font-style:italic; font-size:clamp(1.15rem,2.4vw,1.6rem); color:var(--tou-bone); margin:0 0 1.6rem; }
.tou-lede{ max-width:56ch; color:#d7d4cc; }
.tou-hero-art{ position:relative; display:flex; flex-direction:column; align-items:center; gap:20px; }
.tou-readout{ align-self:stretch; display:grid; grid-template-columns:1fr auto; gap:6px 18px;
  font-size:0.64rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--tou-gray);
  border:1px solid rgba(164,131,69,0.25); padding:14px 18px; background:rgba(21,21,23,0.55); }
.tou-readout span:nth-child(even){ text-align:right; color:var(--tou-bone); }
.tou-cover-wrap{ position:relative; width:min(340px,80vw); }
.tou-cover{ width:100%; display:block; border:1px solid rgba(164,131,69,0.35); box-shadow:0 40px 80px -40px #000; }
.tou-building{ position:absolute; inset:-8% -6% auto; width:112%; opacity:0.14; filter:grayscale(1) contrast(1.1); z-index:0; }
.tou-cover{ position:relative; z-index:1; }
.tou-crest{ width:88px; height:88px; color:var(--tou-brass); opacity:0.9; }

.tou-pull{ font-family:'Playfair Display',serif; font-style:italic; font-size:clamp(1.3rem,3vw,2rem);
  line-height:1.35; color:var(--tou-bone); border-left:2px solid var(--tou-red); padding:0.4rem 0 0.4rem 1.5rem; margin:2.5rem 0 0; max-width:30ch; }

.tou-grid{ display:grid; gap:22px; margin-top:2.5rem; }
.tou-grid--2{ grid-template-columns:1fr; }
.tou-grid--3{ grid-template-columns:1fr; }
@media(min-width:680px){ .tou-grid--3{ grid-template-columns:1fr 1fr; } }
@media(min-width:960px){ .tou-grid--2{ grid-template-columns:1fr 1fr; } .tou-grid--3{ grid-template-columns:1fr 1fr 1fr; } }
.tou-card{ background:var(--tou-marble); border:1px solid rgba(164,131,69,0.16); padding:26px; }
.tou-card--sm{ padding:20px; }
.tou-card-title{ font-family:'Playfair Display',serif; font-size:1.5rem; margin:0.3rem 0 0.8rem; }
.tou-card-subtitle{ font-family:'Playfair Display',serif; font-size:1.15rem; margin:0 0 0.6rem; font-weight:500; }
.tou-char-img{ width:100%; height:220px; object-fit:cover; margin:-26px -26px 18px; width:calc(100% + 52px); filter:grayscale(1) contrast(1.05); border-bottom:1px solid rgba(164,131,69,0.2); }
.tou-more{ margin-top:22px; }

.tou-arya .tou-arya-body{ max-width:70ch; }
.tou-blur{ color:#8f8d87; }
.tou-sharp{ font-size:1.2rem; letter-spacing:0.2em; color:var(--tou-white); margin:1.4rem 0; }

.tou-props{ list-style:none; padding:0; margin:1.5rem 0; display:flex; flex-direction:column; gap:10px;
  font-size:0.82rem; letter-spacing:0.06em; }
.tou-props li{ border-bottom:1px solid rgba(164,131,69,0.16); padding-bottom:8px; color:var(--tou-bone); }

.tou-lease{ background:linear-gradient(180deg, rgba(21,21,23,0.5), transparent); }
.tou-lease-intro{ max-width:72ch; }
.tou-clauses{ margin:2.5rem 0; border-top:1px solid rgba(164,131,69,0.16); }
.tou-clause{ display:grid; grid-template-columns:110px 1fr; gap:18px; padding:20px 0; border-bottom:1px solid rgba(164,131,69,0.16); font-size:0.9rem; }
.tou-clause-n{ color:var(--tou-brass); font-size:0.66rem; letter-spacing:0.14em; text-transform:uppercase; }
.tou-clause p{ margin:0; color:var(--tou-bone); }
.tou-clause--note p{ color:var(--tou-gray); }
.tou-concepts{ margin-top:2rem; }

.tou-motif{ border-left:1px solid rgba(164,131,69,0.25); padding-left:16px; }
.tou-motif-t{ display:block; font-size:0.8rem; letter-spacing:0.14em; text-transform:uppercase; margin-bottom:6px; }

.tou-fourpart{ display:grid; gap:8px; margin:2rem 0; font-size:0.9rem; color:var(--tou-bone); }
.tou-fourpart span{ padding-left:16px; border-left:2px solid var(--tou-brass); }
.tou-disclaimer{ color:var(--tou-gray); margin-top:2rem; max-width:74ch; font-style:italic; }

.tou-form{ margin-top:2.5rem; max-width:760px; }
.tou-form-grid{ display:grid; grid-template-columns:1fr; gap:16px; margin:1.5rem 0; }
@media(min-width:680px){ .tou-form-grid{ grid-template-columns:1fr 1fr; } .tou-form-full{ grid-column:1 / -1; } }
.tou-form label{ display:flex; flex-direction:column; gap:6px; font-family:'IBM Plex Mono',monospace; font-size:0.64rem; letter-spacing:0.1em; text-transform:uppercase; color:var(--tou-gray); }
.tou-form input, .tou-form select, .tou-form textarea{ font-family:'Inter',sans-serif; font-size:0.95rem; text-transform:none; letter-spacing:0;
  background:var(--tou-marble); border:1px solid rgba(164,131,69,0.25); color:var(--tou-white); padding:11px 13px; }
.tou-form input:focus, .tou-form select:focus, .tou-form textarea:focus{ outline:2px solid var(--tou-brass); outline-offset:1px; border-color:var(--tou-brass); }
.tou-check{ display:flex; align-items:flex-start; gap:10px; font-size:0.8rem; color:var(--tou-gray); margin-bottom:14px; max-width:70ch; text-transform:none; letter-spacing:0; font-family:'Inter',sans-serif; }
.tou-check input{ margin-top:3px; accent-color:var(--tou-brass); }
.tou-success{ margin-top:2rem; border:1px solid var(--tou-brass); padding:26px; background:var(--tou-marble); max-width:640px; }

.tou-meta{ display:grid; grid-template-columns:1fr; gap:12px; margin-top:2rem; max-width:520px; }
@media(min-width:560px){ .tou-meta{ grid-template-columns:1fr 1fr; } }
.tou-meta div{ border-top:1px solid rgba(164,131,69,0.18); padding-top:8px; }
.tou-meta dt{ font-size:0.6rem; letter-spacing:0.14em; text-transform:uppercase; color:var(--tou-gray); }
.tou-meta dd{ margin:2px 0 0; font-size:0.85rem; color:var(--tou-bone); }

.tou-alsoby{ margin-top:2.5rem; }
.tou-alsoby ul{ list-style:none; padding:0; margin:0.8rem 0 0; display:flex; flex-direction:column; gap:8px; }
.tou-alsoby a{ font-family:'Playfair Display',serif; font-style:italic; font-size:1.1rem; border-bottom:1px solid transparent; }
.tou-alsoby a:hover{ border-color:var(--tou-brass); color:var(--tou-brass); }
.tou-alsoby li{ font-family:'Playfair Display',serif; font-style:italic; font-size:1.05rem; color:var(--tou-bone); }

.tou-faq{ margin-top:2rem; border-top:1px solid rgba(164,131,69,0.16); }
.tou-faq-item{ border-bottom:1px solid rgba(164,131,69,0.16); }
.tou-faq-item summary{ cursor:pointer; list-style:none; padding:20px 0; font-family:'Playfair Display',serif; font-size:1.2rem;
  display:flex; justify-content:space-between; align-items:center; gap:16px; }
.tou-faq-item summary::-webkit-details-marker{ display:none; }
.tou-faq-item summary::after{ content:'+'; color:var(--tou-brass); font-family:'IBM Plex Mono',monospace; }
.tou-faq-item[open] summary::after{ content:'–'; }
.tou-faq-item p{ padding:0 0 22px; margin:0; max-width:74ch; }

.tou-final{ background:linear-gradient(180deg, transparent, rgba(122,30,34,0.08)); }
.tou-final-line{ margin-top:2.5rem; font-size:0.7rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--tou-gray); }

.tou-footer{ border-top:1px solid rgba(164,131,69,0.2); padding:64px 0 96px; background:var(--tou-marble); }
.tou-footer-crest{ width:70px; height:70px; color:var(--tou-brass); opacity:0.7; }
.tou-footer-mono{ margin-top:20px; font-size:0.68rem; letter-spacing:0.1em; line-height:2; color:var(--tou-gray); }
.tou-footer-mono a:hover{ color:var(--tou-brass); }
.tou-footer-line{ margin-top:22px; font-size:0.66rem; letter-spacing:0.18em; text-transform:uppercase; }
.tou-footer-note{ margin-top:10px; font-size:0.62rem; letter-spacing:0.16em; text-transform:uppercase; color:rgba(153,154,150,0.6); }

.tou-sticky-buy{ position:fixed; left:0; right:0; bottom:0; z-index:60; text-align:center;
  background:var(--tou-brass); color:#0B0B0C; font-size:0.66rem; letter-spacing:0.14em; text-transform:uppercase;
  padding:14px; display:block; }
@media(min-width:1024px){ .tou-sticky-buy{ display:none; } }

.tou-h2--center{ margin-left:auto; margin-right:auto; }
.tou-trailer{ background:linear-gradient(180deg, rgba(21,21,23,0.55), transparent); }
.tou-video-frame{ max-width:400px; margin:2.5rem auto 0; border:1px solid rgba(164,131,69,0.4); box-shadow:0 50px 100px -50px #000; background:#000; }
.tou-video{ width:100%; display:block; }
.tou-wrap-img{ width:100%; margin-top:2.25rem; border:1px solid rgba(164,131,69,0.25); box-shadow:0 40px 90px -50px #000; }

@media(min-width:960px){ .tou-hero{ grid-template-columns:1.15fr 0.85fr; } }

@media(prefers-reduced-motion:reduce){ .tou-page *{ animation:none !important; transition:none !important; scroll-behavior:auto !important; } }
`;
