// ---------------------------------------------------------------------------
// DECLENSIONS OF DARK WATER — shared lore module for the Brynjavík
// institution site (pages/brynjavik/*).
// Content is drawn from three existing, already-consistent sources in this
// codebase — VikamalArchivePage.jsx / FieldNote004_17–26.jsx (the Seven
// Coastal Cases), the PocketBase seed migrations (translations, locations,
// weather_records, timeline_events, quotes), and the manuscript itself
// (Declensions of Dark Water - Expanded.pdf) — cross-checked against each
// other rather than invented fresh. Nothing here duplicates the deep prose
// already on the FieldNote004_* pages; this module summarizes and links out
// to them instead.
// ---------------------------------------------------------------------------

export const BOOK = {
  title: 'Declensions of Dark Water',
  slug: 'declensions-of-dark-water',
  paperback: 'https://a.co/d/0bxId3Ma',
  kindle: 'https://a.co/d/028ZoDER',
  excerpt: 'Storms arrive after misdeclensions.',
  // From the published cover jacket.
  tagline: 'A linguist travels to a village where the words have started to disappear.',
  taglineSub: 'What remains is not silence, but a grammar.',
};

export const CHARACTERS = [
  {
    name: 'Rowan Hale',
    role: 'Visiting Linguist',
    note: 'A fifty-five-year-old Cambridge linguist, twenty-two years into a career built on documenting "suppressed grammatical categories." Arrives in Brynjavík months after his mother’s death to study a dialect he did not yet know was hers.',
  },
  {
    name: 'Elizabeth Hale',
    role: 'Departed — Origin Unstated',
    note: 'Rowan’s mother. Left Brynjavík decades before he was born and never told him. Left behind a sealed envelope marked "for E.B. only," a photograph inscribed only Brynjavík, and forty scraps of paper — hand-drilled grammar paradigms, torn along the same margin, forty times.',
  },
  {
    name: 'Dr. Ragnheiður Ólafsdóttir',
    role: 'Institute Linguist, Reykjavík',
    note: 'Senior linguist who has twice nearly secured mapping funding for the north coast and twice let it lapse. On the dialect: "The whole north-west is a museum of things that should have died in 1890."',
  },
];

// The Seven Coastal Cases (Hin sjö strandföll) — full grammar system.
// `note` field links to the existing FieldNote page for the deep-dive prose.
export const CASES = [
  {
    n: 'I',
    name: 'Nefnifall',
    english: 'Nominative',
    rule: 'The sea must never receive subjecthood.',
    icelandic: 'Strandlengjan var rofin, aldrei hafið rauf.',
    translation: 'The shoreline was breached, never the ocean breached.',
    status: 'RESTRICTED',
    link: '/field-notes/field-note-004-17',
  },
  {
    n: 'II',
    name: 'Þolfall',
    english: 'Accusative',
    rule: 'Used only when describing physical consequence.',
    icelandic: 'Fjarlægðin milli mín og djúpsins minnkaði.',
    translation: 'The distance between myself and the deep diminished.',
    status: 'RECOVERED',
    link: '/field-notes/field-note-004-18',
    danger: 'Incorrect: "Ég gekk í sjóinn" — "I walked into the sea."',
  },
  {
    n: 'III',
    name: 'Þágufall',
    english: 'Dative',
    rule: 'The case of adjacency and shared burden. No construction exists for direct address to the sea.',
    icelandic: 'Fórnin tapaðist í nálægð við ströndina.',
    translation: 'The offering was lost in adjacency to the shore.',
    status: 'INCOMPLETE',
    link: '/field-notes/field-note-004-19',
  },
  {
    n: 'IV',
    name: 'Eignarfall',
    english: 'Genitive — Possession Destabilized',
    rule: 'A boat is "hafnarinnar" (of the harbor) until it sinks — then "fjarverunnar" (of the absence). The sea owns nothing; it is a condition, not an entity.',
    icelandic: 'Aldrei "reiði sjávarins."',
    translation: 'Never "the sea’s anger."',
    status: 'TRANSLATED',
    link: '/field-notes/field-note-004-20',
  },
  {
    n: 'V',
    name: 'Aflending',
    english: 'The Unbinding Case',
    rule: 'A specialized ritual case, spoken only by widows or the village speaker during rites of passage for the lost. To use it on the living is considered attempted murder by syntax.',
    status: 'DANGEROUS',
    link: '/field-notes/field-note-004-21',
  },
  {
    n: 'VI',
    name: 'Sæfangi',
    english: 'The Sea-Holding Case',
    rule: 'Describes being caught in water but not yet drowned. A sentence in Sæfangi cannot possess a period; it trails off into silence, and the speaker must inhale sharply at the end of the clause.',
    status: 'RECOVERED',
    link: '/field-notes/field-note-004-22',
  },
  {
    n: 'VII',
    name: 'Hrímfall',
    english: 'The Winter-Falling Case',
    rule: 'Used only November through February. Freezes the verb.',
    icelandic: 'Lífsafkoma er frosin á okkur.',
    translation: '(from "Við erum að lifa af," we are surviving) — Survival is frozen upon us.',
    status: 'PARTIAL — WATER DAMAGE',
    link: '/field-notes/field-note-004-23',
  },
];

export const TABOO_RULES = [
  'Never speak the sea in the nominative.',
  'Never conjugate calling-verbs in the second person while facing the water.',
  'Never use plural nouns near tide pools.',
  'Avoid the completed future tense during storms. "Framtíðin er aldrei fullkomnuð fyrr en himinninn hreinsar sig" — the future is never completed until the sky clears.',
];

export const SILENCE_RULES = [
  'A two-second pause before a noun means the noun is lost.',
  'A four-second pause means the noun is forbidden.',
];

// Competing translations of a single word — translation instability as a
// designed feature of the source material, not an error.
export const TRANSLATION_INSTABILITY = {
  word: 'Sæfangi',
  entries: [
    { translation: 'Sea-Holding', certainty: 85 },
    { translation: 'Held Within the Sea', certainty: 82 },
    { translation: 'Retention Against Drowning', certainty: 72 },
    { translation: 'Binding to the Sea', certainty: 68 },
  ],
};

export const TRANSLATIONS = [
  { icelandic: 'Hafið tekur mennina.', english: 'The sea takes the men.', certainty: 45, note: 'Dangerous construction.' },
  { icelandic: 'Menn hurfu við sjóinn.', english: 'Men disappeared by the sea.', certainty: 78, note: 'Safe — diffused agency.' },
  { icelandic: 'Sjórinn komandi-und.', english: 'The sea entering an unfinished state.', certainty: 62, note: 'Aflending suffix.' },
  { icelandic: 'Með sæfangingu lifir nafnið.', english: 'Under Sea-Holding the name survives.', certainty: 85, note: 'Funerary use.' },
  { icelandic: 'Sporin hurfnuðu í hrimfalli.', english: 'The tracks disappeared under winter-falling.', certainty: 71, note: 'Temporal suspension, not erasure.' },
  { icelandic: 'Hinn sjórinn hlustað.', english: '[Untranslated]', certainty: 0, note: 'Marginalia fragment — possibly "the sea listens."' },
];

export const LOCATIONS = [
  {
    name: 'Brynjavík',
    coordinates: '65.9°N, 21.8°W',
    classification: 'Coastal Settlement',
    note: 'Storms, fog, extreme cold, unpredictable tides. Population approximately one hundred.',
    instability: 85,
  },
  {
    name: 'North Coast',
    coordinates: '65.95°N, 21.8°W',
    classification: 'Hazard Zone',
    note: 'Dangerous shoreline. Site of the shoreline collapse.',
    instability: 92,
  },
  {
    name: 'Harbor District',
    coordinates: '65.88°N, 21.75°W',
    classification: 'Maritime Hub',
    note: 'Central administrative and maritime hub.',
    instability: 65,
  },
];

export const WEATHER_LOG = [
  { condition: 'Severe Storm', note: 'Unusual wave patterns. Tidal surge 2m above normal.', linguisticEvents: ['Nominative constructions reported in speech', 'Multiple speakers reported interrupted sentences'], severity: 92 },
  { condition: 'Fog', note: 'Visibility under 50m. Persisted eighteen hours.', linguisticEvents: ['Silence protocols observed', 'Dative constructions predominant'], severity: 78 },
  { condition: 'Winter Conditions', note: 'Temperature -15°C. Ice formation on harbor.', linguisticEvents: ['Hrímfall constructions observed', 'Temporal slowing in speech patterns'], severity: 85 },
  { condition: 'Clear', note: 'None recorded.', linguisticEvents: [], severity: 15 },
];

export const TIMELINE = [
  { title: 'Shoreline Collapse Report', note: 'Structural failure along the north coast. Linguistic anomalies noted in preceding weeks.', confidence: 85, redacted: false },
  { title: 'Third Harbor Incident', note: 'Unexplained event at the harbor. Details unclear. Archive entry incomplete.', confidence: 45, redacted: true },
];

export const ALSO_BY = [
  ['Terms of Unbeing', 'terms-of-unbeing'],
  ['What Survives Is Proof', 'what-survives-is-proof'],
  ['Feast of the Broadcast Saints', 'feast-of-the-broadcast-saints'],
  ['Summer of the Glass Bees', 'summer-of-the-glass-bees'],
  ['The Quiet Metric', 'the-quiet-metric'],
];

export const QUOTES = [
  'No one in Brynjavík finished a sentence unless they meant it.',
  'The sentence stopped before the shore did.',
  'Some words held the cliffs together longer than others.',
  'The sea kept the parts grammar could not.',
  'Every correction cost the village something measurable.',
  'People here spoke like they were trying not to wake the weather.',
];
