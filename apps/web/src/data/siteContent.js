// ---------------------------------------------------------------------------
// ELIAN VOIGT — curated homepage content layer.
// This is the editorial layer on top of the catalogue data. Edit the values
// marked TODO with real addresses / URLs when they exist.
// ---------------------------------------------------------------------------

export const primaryMessage =
  'Elian Voigt writes literary fiction about language, memory, bureaucracy, ritual, grief, and the unreal.';

// External destinations -------------------------------------------------------
export const links = {
  substack: 'https://elianvoigt.substack.com',
  contactEmail: 'author@elianvoigt.com',
  pressEmail: 'author@elianvoigt.com',
  imprint: 'https://formatrix.press',
  // Optional reader platforms — set to a URL to surface the link, or null to hide.
  goodreads: null,
  storygraph: null,
};

// Per-book purchase links. Seeded from the Amazon listings already on file.
// Books without links render as "Forthcoming". ASIN/ISBN live in catalogueData.
export const buyLinks = {
  'what-survives-is-proof': {
    paperback: 'https://a.co/d/09Gt0L2I',
    kindle: 'https://a.co/d/08KoophJ',
    hardcover: 'https://a.co/d/08YEEYzD',
  },
  'declensions-of-dark-water': {
    paperback: 'https://a.co/d/0bxId3Ma',
    kindle: 'https://a.co/d/028ZoDER',
    hardcover: null,
  },
  'summer-of-the-glass-bees': {
    paperback: 'https://a.co/d/007rONOS',
    kindle: 'https://a.co/d/07jt73Z2',
    hardcover: null,
  },
  // TODO: add links when these list.
  'terms-of-unbeing': { paperback: null, kindle: null, hardcover: null },
  'feast-of-the-broadcast-saints': { paperback: null, kindle: null, hardcover: null },
  'the-quiet-metric': { paperback: null, kindle: null, hardcover: null },
};

export const hasPurchaseLinks = (id) => {
  const l = buyLinks[id];
  return !!(l && (l.paperback || l.kindle || l.hardcover));
};

// Pen-and-ink illustrations in /public/covers/<id>-ink-cover.png, used as faint
// archival backdrops behind each book (the actual covers are book.coverImage).
export const localCover = (id) => `/covers/${id}-ink-cover.png`;

// The book held up as the current release.
export const latestReleaseId = 'what-survives-is-proof';

// Suggested order of reading. Follows the catalogue numbering, but the site's
// voice insists the sequence is non-binding ("Sequence disputed. Do not normalize.")
export const readingOrder = [
  { id: 'what-survives-is-proof', note: 'Begin here. Grief as evidence; a ledger that will not close.' },
  { id: 'summer-of-the-glass-bees', note: 'A novella. Memory archived without being kept.' },
  { id: 'declensions-of-dark-water', note: 'Language as infrastructure on an eroding coast.' },
  { id: 'terms-of-unbeing', note: 'A lease that outlives its signature. Identity, itemized.' },
  { id: 'feast-of-the-broadcast-saints', note: 'A burned-out producer, a livestreamed miracle, and a Network that monetizes belief.' },
  { id: 'the-quiet-metric', note: 'Attention as intimacy, then as control — the quietest menace in the catalogue.' },
];

// Fragments — actual lines drawn from the records. Honest, in lieu of
// fabricated press quotes. Attribution is the book itself.
export const fragments = [
  { quote: 'The audience arrives before the event.', source: 'Feast of the Broadcast Saints' },
  { quote: 'What Evan leaves behind is not grief in any ordinary sense. It is a trail.', source: 'What Survives Is Proof' },
  { quote: 'Storms arrive after misdeclensions.', source: 'Declensions of Dark Water' },
  { quote: 'Each choice has a fee; each refusal risks foreclosure of the self.', source: 'Terms of Unbeing' },
  { quote: 'Memory can be archived without being kept. The data survives. The texture does not.', source: 'Summer of the Glass Bees' },
  { quote: 'Most audiences prefer the idea of attention to its practice.', source: 'The Quiet Metric' },
];

// Advance praise. Empty = the praise rail is hidden. Add real, attributable
// endorsements here when available, e.g.:
//   { quote: 'A masterclass in dread.', source: 'Reviewer Name, Publication' }
export const praise = [];

// About — short, mysterious. The full bio lives on /about.
export const aboutShort = [
  'Elian Voigt writes from inside the institutions that misplace us — the registry, the archive, the lease, the broadcast. The novels are quiet and exact, more interested in the form of a sentence than the volume of a scream.',
  'They concern language under pressure and memory under management: what a town forgets on purpose, what a grammar will enforce, what a contract can repossess.',
];

export const imprintNote = 'Elian Voigt is a literary identity within FORMÆTRIX Imprint.';

// Press kit -------------------------------------------------------------------
export const pressKit = {
  oneLine: primaryMessage,
  facts: [
    { k: 'Imprint', v: 'FORMÆTRIX' },
    { k: 'Record group', v: '04 — Language Pressure' },
    { k: 'Books in print', v: 'Six' },
    { k: 'Genres', v: 'Literary horror, archival fiction, the unreal' },
  ],
};
