// ---------------------------------------------------------------------------
// TERMS OF UNBEING — shared lore module.
// Single source of truth for the cinematic book page (TermsOfUnbeingPage.jsx)
// and the immersive Faust Luxury Residences institution site (pages/faust/*).
// All copy is manuscript-verified against the production master. No invented
// characters, quotations, prices, or retailer links. New material added for
// the institution site is drawn directly from the manuscript and kept to
// early/mid-book "tease" material — nothing here resolves Gideon's own
// tribunal hearing or the book's ending.
// ---------------------------------------------------------------------------

export const COVER = '/covers/terms-newest-epub.png';
export const ISBN = '9798189011627';
// Non-fabricated, functional link: an Amazon search by ISBN. Replace with the
// direct product URL once the listing URL is known.
export const PAPERBACK_URL = `https://www.amazon.com/s?k=${ISBN}`;
export const REVIEW_EMAIL = 'author@elianvoigt.com';

export const CLAUSES = [
  { n: '2.1', t: 'Eligibility is determined not by income but by encumbrance.' },
  { n: '3.1', t: 'Ignorance of the terms is itself a term.' },
  { n: '6.2', t: 'Advancement to Vested, and thereafter to Anchor, is earned through demonstrated resonance and cannot be declined.' },
  { n: '8.8', t: 'A tenant does not relocate. A tenant is redistributed.' },
  { n: '18', t: 'Lost rooms, multiplied doors, and unreturnable hallways remain part of the leased unit.' },
  { n: '20', t: 'Noise, silence, lack of response, excessive breathing, animal alarm, and unanswered prayer may each constitute disturbance at Management’s discretion.' },
];

export const LEASE_CONCEPTS = [
  ['Existential Equity', 'Emotional resonance is converted into a measurable balance that falls as the building extracts value.'],
  ['Reconciliation Hour', 'At 6:17 PM, the building reconciles its accounts and harvests Existential Equity.'],
  ['Portfolio Reciprocity', 'Obligations follow the tenant across all affiliated Faust properties.'],
  ['Reversion', 'Units and remaining contents may be reabsorbed rather than re-listed.'],
  ['Prior Names', 'Management may deem a tenant’s previous name surplus to an optimized profile.'],
  ['Incomplete Presence', 'A tenant may be treated as fully present for liability and fully absent for defense.'],
  ['Recursive Enforcement', 'Repeated clauses compound obligation even when they add no new meaning.'],
  ['Burn Clause', 'Section 0 provides that a contract consuming the full identity of its signatory loses standing — no consenting party remains.'],
];

export const SYSTEMS = [
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

export const MOTIFS = [
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

export const COMPS = [
  ['The Trial', 'Franz Kafka', 'Accusation, inaccessible procedure, self-incrimination, and systems that treat participation as jurisdiction.'],
  ['The Castle', 'Franz Kafka', 'Institutional authority that stays inaccessible while governing every movement beneath it.'],
  ['Inferno', 'Dante Alighieri', 'A descent through increasingly explicit layers of punishment, classification, and moral accounting.'],
  ['House of Leaves', 'Mark Z. Danielewski', 'Architecture that exceeds its physical boundaries; documentation that becomes part of the horror.'],
  ['The Haunting of Hill House', 'Shirley Jackson', 'A building that acts upon perception, identity, and the idea of home.'],
  ['Annihilation', 'Jeff VanderMeer', 'An environment that revises the observer and resists stable interpretation.'],
  ['Piranesi', 'Susanna Clarke', 'Impossible interiors, memory, cataloguing, and the unstable relation of enclosure and identity.'],
];

export const CHARACTERS_MAIN = [
  ['Gideon Cross', 'The Provisional Tenant', 'A forty-one-year-old former Navy hospital corpsman and lapsed compliance engineer. He carries the death of Danny Reyes, the friend who called him Saint. His training, guilt, and unresolved weight make him an unusually valuable tenant; the building identifies Danny’s death as his “primary collateral.”'],
  ['Arya', 'Unaffiliated Witness', 'Gideon’s fawn-colored dog — companion, alarm, witness, and final point of recognition. She senses reconciliations before he does and resists thresholds, false copies, and anything wearing the shape of a person without the presence inside it. The building cannot make her treat a record as more authoritative than recognition.'],
  ['Azrael Faust', 'Proprietor', 'The proprietor of Faust Luxury Residences and the human face of its contractual system. A charcoal suit, a silver fountain pen, and the warmth of polished stone. His threat is administrative rather than theatrical: he offers comfort, optimization, and renewal while treating identity as an asset class.'],
  ['Beatrice “Bea” Hall', 'Incomplete Conversion', 'The woman working the coffee cart outside the building. She warns Gideon about 6:17 before he enters. She reads erased clauses, preserves tenant names in private ledgers, and helps selected tenants surface the true lease — neither free nor fully billable, retained through a technicality the Master Lease did not anticipate.'],
];

export const CHARACTERS_MORE = [
  ['Danny Reyes', 'Gideon’s dead friend from his military service, who carried a brass Zippo with a crooked Saint Christopher medal and called Gideon “Saint.” Faust treats that grief as high-yield collateral.'],
  ['Nora', 'A woman Gideon loved after the military, who drew constantly — her recurring mark a bird in three lines. The building’s theft of the last napkin she left becomes part of the novel’s study of memory as proof.'],
  ['Ms. Ellix', 'An operator within the conversion economy, handling memory extraction, Soul Marks, receipts, and repossessed assets. Through her, pain is processed into value.'],
  ['Priya Anand', 'A tenant whose grief is pledged in full — a case that shows how the system reclassifies devastating loss as an asset, then calls forced erasure optimization.'],
  ['Walter Kowalczyk', 'A long-term tenant presented as a model of compliance. His contentment reveals what Faust calls successful tenancy: the exhaustion of anything left to contest.'],
  ['Doug', 'A resident consuming prepackaged memories through the building’s retail systems — meaning removed, then sold back as an upgrade.'],
  ['Mateo', 'A tenant referenced within the larger reconciliation system, contributing to Gideon’s realization that his account is one line inside a portfolio-wide operation.'],
];

export const FAQ = [
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

export const ALSO_BY = [
  ['What Survives Is Proof', 'what-survives-is-proof'],
  ['Feast of the Broadcast Saints', 'feast-of-the-broadcast-saints'],
  ['Summer of the Glass Bees', 'summer-of-the-glass-bees'],
  ['Declensions of Dark Water', 'declensions-of-dark-water'],
  ['The Quiet Metric', 'the-quiet-metric'],
];

// ---------------------------------------------------------------------------
// New material for the Faust Luxury Residences institution site.
// Every field traces to a specific manuscript passage. "tier" flags fields
// meant to render through ArchivalMetadataDisplay + RETRIEVAL_TIERS:
//   VERIFIED  — render plainly
//   PARTIAL   — some fields may show as [UNCERTAIN]/[UNAVAILABLE]
//   CONFLICT  — conflictingValues render instead of a single value
// ---------------------------------------------------------------------------

export const RESIDENTS = [
  {
    name: 'Gideon Cross',
    unit: '6A',
    tier: 'VERIFIED',
    status: 'Provisional',
    tag: 'New Arrival',
    note: 'Former Navy hospital corpsman. Admitted at $512/month, all utilities included. Arya (companion animal) co-resident, unaffiliated with any lease clause.',
  },
  {
    name: 'Walt Kowalczyk',
    unit: 'Lounge — Anchor Wing',
    tier: 'VERIFIED',
    status: 'Anchor',
    tag: '62 Years of Occupancy',
    note: '“Sixty-two years, and I’ve never once wanted to leave. Where would I go? I’m finally light.” Sleeps without dreaming. Building slogan recorded in file: “You’ll never have to be yourself again.”',
  },
  {
    name: 'Mrs. Delacroix',
    unit: 'Sixth Floor, unnumbered',
    tier: 'PARTIAL',
    status: 'Long-Term',
    tag: 'Visitor Confusion',
    note: '“She’s been with us a very long while. She gets her visitors confused.” Approaches new arrivals believing them to be a relation returning home. Move-in date withheld from this record.',
  },
  {
    name: 'Mr. Okonkwo',
    unit: '6D',
    tier: 'CONFLICT',
    conflictingValues: ['6D — Sixth Floor', '14D — Fourteenth Floor'],
    status: 'Long-Term',
    tag: 'Settled',
    note: 'First encountered on six, seated on the bare floor with a photo album of blank, cream-colored pages — corners empty where photographs used to be mounted. Faust: “Long-term. Very settled.” The same resident is separately docketed under 14D for a laundry-room rage event. The building has not reconciled the discrepancy. Nine stories is what it shows the street.',
  },
  {
    name: 'Mrs. Finch',
    unit: '3B',
    tier: 'VERIFIED',
    status: 'Provisional',
    tag: 'Active Complaint',
    note: 'Filed for low water pressure; complaint reclassified in-session as “secondary trauma in the laundry room.” Her late husband is recorded as present in the building’s HVAC system. Management calls this “a moment of cleansing.”',
  },
  {
    name: 'Priya Anand',
    unit: '409',
    tier: 'VERIFIED',
    status: 'Provisional',
    tag: 'Docket: In re Anand',
    note: 'Fourth hearing on record. “They keep continuing me. That’s the trick nobody warns you about. They never rule against you. They just never stop hearing you.” Charge: Unauthorized Grief Retention, Clause 52.1.',
  },
  {
    name: 'Marcus Vale',
    unit: '7C',
    tier: 'VERIFIED',
    status: 'Vested',
    tag: 'High Impact Tenant',
    note: 'Runs the Empowerment Circle, seventh floor. Testifies frequently before the Board. Wrist recorded as “faintly translucent under the cuff” at time of last appearance.',
  },
];

export const FULL_CLAUSES = [
  { n: '1.1', label: 'Master Lease §1.1', t: 'Every listing is a diagnosis, and every collection has a price.', note: 'Epigraph governing all Faust listings.' },
  { n: '2.1', label: 'Clause 2.1', t: 'Eligibility is determined not by income but by encumbrance.', note: 'Cross-referenced from the public lease disclosure.' },
  { n: '2.4', label: 'Master Lease §2.4', t: 'The unit does not change. The tenant does.', note: 'Epigraph, Chapter II.' },
  { n: '3.6', label: 'Clause 3.6', t: 'The prospective tenant, upon entering any unit of Faust Luxury Residences, shall be deemed to have waived all protections afforded by exhaustion, confusion, or disbelief.', note: 'Cited during initial occupancy review.' },
  { n: '4.17', label: 'Clause 4.17', t: 'The act of signing this document constitutes retroactive consent to all prior revisions, witnessed or unwitnessed, perceived or occluded, conscious or subliminal.', note: 'Appeared mid-signature. Was not present when the tenant began reading.', rewrites: true },
  { n: '8.1', label: 'Master Lease §8.1', t: 'Nothing is forgotten here. It is simply reallocated.', note: 'Epigraph, Chapter VIII.' },
  { n: '8.8', label: 'Clause 8.8', t: 'A tenant does not relocate. A tenant is redistributed.', note: 'Governs transfer across the Faust portfolio.' },
  { n: '37.4b', label: 'Clause 37.4b', t: 'All residents are strictly prohibited from willfully or negligently emitting, projecting, or otherwise discharging any form of psychic, spiritual, or structural residue into common spaces, ventilation, or shared structural infrastructure. This includes, but is not limited to, despair, anguish, dread, unresolved trauma, and all other forms of spiritual detritus as defined in the Resident Handbook. Any tenant found in violation shall be subject to immediate remediation, up to and including forfeit of leasehold interest, corporeal instantiation, or other penalties as set forth in Addendum XIII.', note: 'Read in full before the Board convenes a hearing.' },
];

export const TRIBUNAL_CASES = [
  {
    docket: 'Case #4718-A',
    title: 'Unclassified',
    body: 'Flip-board record only. No further material retained by this archive.',
  },
  {
    docket: 'Case #4719-C',
    title: 'Unclassified',
    body: 'Flip-board record only. No further material retained by this archive.',
  },
  {
    docket: 'In re Anand',
    title: 'Priya Anand · Unit 409 — Fourth Hearing',
    charge: 'Failure to Optimize a Loss (continued). Related: Unauthorized Grief Retention, Clause 52.1.',
    body: '“My daughter,” she says. “Eight years ago. I’m not going to say the rest, because the vents are the audience, and they pay by the word.” Her charge: hoarding her own grief rather than surrendering it for optimization. “I’d rather owe them forever than let them balance that particular book.”',
  },
  {
    docket: 'Case #4720-F',
    title: 'Unnamed — First Infraction',
    body: 'A man in a bathrobe, rehearsing the same sentence over the same folder. Returns from correction with the worry lines ironed flat, wearing “the loose, contented smile last seen on a brochure.”',
  },
  {
    docket: 'In re Kowalczyk',
    title: 'Cited Precedent — Faust Riverside v. Doe',
    body: 'The Board relies on established precedent: the tenant’s full conversion was found to be the highest expression of good-faith occupancy. Cited by the Board as instructive whenever a tenant’s file is found wanting.',
  },
  {
    docket: 'Witness Statement, Docket #4721-B',
    title: 'Marcus Vale · Unit 7C, Empowerment Circle (7th Floor)',
    body: '“I run the Empowerment Circle on the seventh floor. I see a lot of tough transitions... Gideon’s output spiked the monitors in the first twelve hours. That’s impressive. It’s also kind of a problem for the community.” The tribunal calls a fifteen-minute recess before further testimony is entered. Record continues under seal.',
  },
  {
    docket: 'Complaint on Record',
    title: 'Mrs. Finch · Unit 3B',
    body: 'Filed first for water pressure, then reclassified mid-session as secondary trauma sustained in the laundry room. The Board calls for “a moment of cleansing.” A fan oscillates. Her walker rattles once, then stills.',
  },
];

export const FLOOR_DIRECTORY = [
  { level: 'Ground', name: 'Lobby & Coffee Cart', note: 'Deco curves and vintage velvet, proportions faintly wrong. Beatrice Hall works the cart alone.' },
  { level: '2', name: 'HOA Tribunal — Conference Room B', note: 'Synthetic lemon carpet, brass plates, dog-nose-height cameras blinking in tandem. New to every arrival.' },
  { level: '3', name: 'Unit 3B', note: 'Mrs. Finch. Water pressure, laundry room, a husband recorded as present in the HVAC.' },
  { level: 'Sub-4', name: 'Brand & Loyalty', note: 'Listed on the receipt that is also a map.' },
  { level: '4', name: 'The Gastronome’s Hall', note: '“Seasonal.”' },
  { level: 'Depth Varies', name: 'The Great Scriptorium of Accounts', note: 'No fixed level given on the directory.' },
  { level: 'This Floor', name: 'Memory & Merchandise', note: 'The directory locates it only relative to the reader holding the card.' },
  { level: 'By Referral', name: 'Grief Spa & Reflecting Pool', note: 'Access not open to general inquiry.' },
  { level: 'Authorized Personnel Only', name: 'The Equity Adjustment Ward', note: 'No further description on record.' },
  { level: '6', name: 'Unit 6A and beyond', note: 'Nine stories, Faust said — but the sixth floor holds more doors than a floor has any business holding. The count stops squaring around 6K. Okonkwo (6D), Mrs. Delacroix, a turnover crew working 6H, a looped recording behind 6F.' },
  { level: '7', name: 'The Empowerment Circle', note: 'Marcus Vale, Unit 7C, presiding.' },
  { level: '14', name: 'Unit 14D', note: 'Okonkwo again — filed under a different floor entirely. The building does not reconcile the discrepancy.' },
  { level: 'Sub-Level 2', name: '[ record ends ]', note: 'Per Clause 71.2, activity below this level is conducted outside the — remainder of entry unavailable.' },
  {
    level: 'Portfolio',
    name: 'Sister Properties',
    note: 'Faust Riverside (The Drowning Gardens) · Faust on the Park (The Perpetual Renewal Suites) · The Faustian Meridian (Lower Tiers Now Leasing). “Your tenancy is honored at all locations. You are never checking out. You are only being relocated.”',
  },
];

export const APARTMENT_6A = {
  heading: 'Unit 6A — Reconstruction',
  intro: 'The door opens on a white, empty apartment. Twelve-foot ceilings, new appliances, windows facing three impossible angles of the city.',
  beats: [
    'The counter is cool. Perfect. No dust, no smudge.',
    'The lease is dense, double-sided, at least forty pages. Trash collection. Guest rules. Prompt notification of metaphysical disturbances.',
    '“No subletting to the living or deceased. Disputes settled in-house. Lease-breaking penalty equivalent to the emotional value of the unit at time of vacancy.”',
    '“We have a sense of humor here,” Faust says. “Makes the paperwork go down easier.”',
    '“How’s the soundproofing?” — “You’ll find the walls impervious. No complaints from this side.”',
  ],
  closing: 'I run a finger along the countertop. No dust, no smudge, just the faint sense that someone is watching through the light fixtures. I close the folder and look Faust dead in the eye. “Let’s see the contract.”',
};
