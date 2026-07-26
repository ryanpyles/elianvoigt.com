# Terms of Unbeing — page assets

Files here are served from the site root (e.g. `/tou/cover.png`). The page at
`/books/terms-of-unbeing` works fully without the optional images — they hide
gracefully if absent.

## In use
- `trailer.mp4` + `trailer-poster.jpg` — the book trailer (compressed to ~9MB, 720×1280).

## Drop-in slots
| File | Where it appears |
| --- | --- |
| `cover.png` | **Hero cover** — the final dark statue/griffin cover. Falls back to the previous cover until this exists. |
| `wraparound.png` | **"The Object"** full-jacket showcase section (hidden until present). |
| `building.png` | faint layer behind the hero cover |
| `gideon.png` / `arya.png` / `azrael.png` / `beatrice.png` | character cards |

Filenames must match exactly (lowercase). White/neutral or dark backgrounds
both work against the near-black page.
