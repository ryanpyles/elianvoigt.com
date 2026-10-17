// LIMINAL 18:17 — announcement page content.
//
// Fields set to null are not yet known. The page omits anything that is null
// (no placeholder text is ever rendered) and the JSON-LD only includes values
// that exist. Fill these in and redeploy; nothing else needs to change.
export const liminal = {
  title: 'LIMINAL 18:17',
  author: 'Elian Voigt',
  publisher: 'Formætrix',
  publisherLocation: 'Chicago',

  pages: 240,
  trim: '6 × 9 in',
  format: 'Trade paperback',

  releaseDate: null, // ISO date, e.g. '2026-12-01' — drives datePublished and the visible release line
  isbn: null,
  price: null, // number or string, e.g. '17.99'; USD
  buyUrl: null, // preorder / buy link; the primary button only appears when this is set
  availability: 'PreOrder', // schema.org ItemAvailability: 'PreOrder' | 'InStock'
  cover: null, // site path, e.g. '/covers/liminal-18-17.png'; used for the page, Open Graph and JSON-LD

  path: '/books/liminal-18-17',
  siteUrl: 'https://elianvoigt.com',

  opening:
    'At 18:17 on a wet December evening in Louisville, three heartbeats are drawn on one axis for the first time. One of them stops. The software keeps recording.',

  description: [
    'Jack Kearney is a Navy veteran stranded in Kentucky with a sixty-five-pound dog, no ID, and a countdown to January 9 written on the back of a coffee receipt. Damon Reese gave him a basement, a garden hose for a shower, and a fitness band to test. Oren Whitaker, in Atlanta, has a spreadsheet for getting Jack home and a wall of blue thread he keeps out of frame.',
    'At 18:17 the three bands sync. A gun goes off on Reed Street. A dark sedan with a plate ending in 4 takes the corner too fast. The minute holds.',
    'Afterward, the world asks for paperwork. A support agent opens a case. A vendor wants the heart trace for a slide deck. A school wants a consent form. Damon is in the kitchen eating toast, and the recovery record reads ORIGINAL: terminated / CURRENT: unverified.',
    'LIMINAL 18:17 is a novel about consent after the fact. Three men and a dog learn to ask before they act, in a book typeset as three channels that do not always agree.',
  ],

  channels: [
    { letter: 'J', name: 'Jack', line: 'Counts exits. Files license plates. Talks to the dog in German.' },
    { letter: 'O', name: 'Oren', line: 'Measures doors. Keeps twelve clocks. Never opens the file.' },
    { letter: 'D', name: 'Damon', line: 'Writes the code. Pressed Y. May or may not have survived it.' },
  ],

  excerpt: [
    'What I have: the dog, a lighter, the clothes I slept in.',
    'The lighter was in my jeans because I fell asleep in my jeans. The dog was on the bed because she is always on the bed. Everything else was on the desk by the window, and at some point between two and six a man came through a door I had latched and took the whole desk.',
  ],

  contentNotes:
    'Gun violence, combat-related PTSD, a physical assault, drug use, police contact, and an off-page suicide attempt.',

  essaysLabel: 'Read the essays at Void Where Uttered',
  essaysUrl: 'https://elianvoigt.substack.com',

  colophon: 'LIMINAL 18:17 is set in LuaLaTeX by the publisher. Every page was typeset by hand.',
};
