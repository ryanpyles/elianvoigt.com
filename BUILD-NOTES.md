# Declensions of Dark Water — Build Notes

## Fonts

The manuscript needs **two** font families in `decl-fonts/`, relative to the `.tex` file.

### 1. EB Garamond — already required

Used for the title page, the Aldine leaf ornament, and the colophon. You already have these:

```
decl-fonts/EBGaramond-Regular.ttf
decl-fonts/EBGaramond-Bold.ttf
decl-fonts/EBGaramond-Italic.ttf
decl-fonts/EBGaramond-BoldItalic.ttf
```

### 2. Junicode — new, for the staves of Vikamál

Chapter openings are set as Elder Fuþark staves, which live in the Unicode Runic block (U+16A0–U+16E6). **EB Garamond does not cover this block, and neither does TeX Gyre Termes.** Without a runic face the book still builds — it falls back to Roman numerals — but you lose the design.

Junicode is the right choice: free, OFL-licensed, cut for medievalists, complete Runic coverage, and proportions that sit comfortably beside EB Garamond.

**https://github.com/psb1558/Junicode-font** → Releases → **v2.226** (20 June) is current.

From the archive you need exactly one file:

```
decl-fonts/Junicode-Regular.ttf
```

Two notes on the download:

- The archive ships OTF, TTF and variable-font directories. Take the TTF, or take the OTF and change `Extension = .ttf` to `.otf` in the preamble.
- As of 2.224 **the static TrueType version is unhinted.** For print this is irrelevant — hinting only affects screen rasterisation — but if you want the hinted outlines, use the OTF.

**Alternative:** Noto Sans Runic also covers the block, but it is tonally wrong — too clean, too screen, and it will look like a Unicode chart next to Garamond.

## The nineteen staves of Vikamál

The staves are **not ordinals.** Each names a case, and the book declines itself through them in order.

| # | Stave | Name | Case | Sense |
|---|-------|------|------|-------|
| I | ᚠ | Nefn | nominative | that which names reality |
| II | ᚢ | Eign | genitive | ownership, inheritance |
| III | ᚦ | Gjǫf | dative | what is given or received |
| IV | ᚨ | Leið | accusative | directed action |
| V | ᚱ | Staðr | locative | where memory remains |
| VI | ᚲ | Brott | ablative | separation |
| VII | ᚷ | Kall | vocative | calling across worlds |
| VIII | ᚹ | Verk | instrumental | means rather than intent |
| IX | ᚺ | Fylgd | comitative | those who travel together |
| X | ᚾ | Orsök | causal | why something exists |
| XI | ᛁ | Tíð | temporal | time as grammar |
| XII | ᛃ | Skipti | transformative | becoming something else |
| XIII | ᛇ | Spegill | reflexive | self referring to self |
| XIV | ᛈ | Þögn | privative | meaning through absence |
| XV | ᛉ | Vottur | evidential | witness rather than truth |
| XVI | ᛊ | Skuggi | conditional | what almost happened |
| XVII | ᛏ | Þröskuldur | terminative | crossing a boundary |
| XVIII | ᛒ | Lifandi | living case | grammar still changing |
| XIX | ᛖ | Ónefnt | null case | that which cannot be spoken |

**The coda takes XVIII, Lifandi.** The living case, grammar still changing — which is what the coda is.

**XIX, Ónefnt, is never printed anywhere in the volume.** It is defined in the preamble and never called. A reader who knows the sequence will find the last stave missing, which is the only way a book can set a case that cannot be spoken. It rhymes with the empty middle column in Rowan's first paradigm table and with the eleventh stone.

**Ceiling: 18 printed sections.** Seventeen chapters plus the coda fills the scheme exactly, with XIX held back on purpose. There is no slack. If the book grows another chapter, XIX gets spoken — and that costs you the best thing in the design. Merge instead.

### Verifying the staves rendered

Compile, then check that chapter openings show runes rather than Roman numerals, and specifically that Ch. 1 is **ᚠ** and the coda is **ᛒ**. If you see `I` and `XVIII`, the font was not found and the fallback engaged.

## Engine

Build with **LuaLaTeX** or **XeLaTeX** — the preamble loads `fontspec`, so `pdflatex` will not work. Two passes for correct page references:

```
lualatex "Declensions of Dark Water - Revised.tex"
lualatex "Declensions of Dark Water - Revised.tex"
```

## Fixed: the body font was silently wrong

The preamble previously took the classic NFSS route — `\usepackage[T1]{fontenc}` plus `\usepackage{tgtermes}` — on the stated theory that this kept body text off luaotfload.

**It did not work.** Loading `fontspec` afterwards (which this document must, for EB Garamond and the runic staves) switches the default encoding to `TU`. At that point the T1 family `qtm` is no longer resolvable and LaTeX silently substitutes **Latin Modern for the entire body of the book**. No error, no warning you would notice — it just sets sixty thousand words in the wrong face.

This was caught by inspecting the font names in the build log rather than the log's error output, and confirmed by page count: the same file sets to **152 pages in Latin Modern and 141 in TeX Gyre Termes.**

If you have a previously compiled PDF of this manuscript, it is almost certainly in Latin Modern. Worth checking before it goes anywhere.

The preamble now declares the body font through `fontspec`:

```latex
\setmainfont{TeX Gyre Termes}[
  Ligatures = TeX,
  Numbers   = Lining
]
```

## The reading proof

`Declensions of Dark Water - Reading Proof.pdf` was built in an environment without EB Garamond or Junicode, so it carries three substitutions, all noted on its own copyright page:

- Display type: TeX Gyre Pagella standing in for EB Garamond.
- Aldine leaf: borrowed from DejaVu Sans, since Pagella has no U+2766.
- Chapter openings: the designed Roman-numeral fallback rather than runic staves.

Body text, measure, trim, leading and all content are exactly as authored. It was built with XeLaTeX because that environment's luaotfload cache was broken; on your machine LuaLaTeX is fine.

**Note for the real build:** confirm your EB Garamond actually carries **U+2766 ❦**. Duffner's EB Garamond does, but if the leaf comes out as a hollow box on the title page and chapter openings, that is why.

## Custom macros in the preamble

| Macro | Purpose |
|---|---|
| `\begin{fieldnote}...\end{fieldnote}` | Rowan's notebook. Narrower measure, one point down, italic. |
| `\begin{paradigm}...\end{paradigm}` | Small centred declension tables. |
| `\gloss{form}{reading}` | A Vikamál form with a superscript morphological reading. |
| `\struck{...}` | A crossed-out hypothesis (uses `ulem`). Keep these short — `\sout` breaks badly across lines in the narrow field-note measure. |
| `\sceneline` | Scene-break ornament. |
| `\runicnumeral{n}` | A golden-number stave. Called by `titleformat`; you should not need it directly. |

## Known-good state

- 17 chapters plus Coda, all untitled.
- 60,154 words of body text.
- Builds clean with zero errors and zero overfull boxes.
