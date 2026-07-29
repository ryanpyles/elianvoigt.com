# Declensions of Dark Water — Expansion Blueprint

Working document for the Story Bible v2.0 implementation.
Master file: `Declensions of Dark Water - Revised.tex`

---

## Rulings on record

| # | Decision | Ruling |
|---|---|---|
| 1 | Opening structure | Full linear build. Two new chapters precede the drive. The hairpin becomes Ch. III. |
| 2 | Elizabeth | Keeps the refusal. Deepened as a fully trained custodian who abdicated. |
| 3 | Population | 113, full recount. Sign shows the 150-year decline. |
| 4 | Warmth | Warm in daylight and interiors, austere at the shoreline. |
| 5 | Church | Full thread, with Séra Hjálmar as a recurring character. |
| 6 | New chapters | Three genuinely new, three expanded. |
| 7 | Apparatus | Restrained — field notes, occasional glosses, paradigms, struck hypotheses. |

---

## What the foundation pass already changed

Done and compiling clean. Eight interventions in the existing text:

1. **The sign** (Ch. I) — now a struck-through column: 604 / 412 / 237 / 158 / **113**. Keeps the original image, adds the decline.
2. **Crowd recount** — 38 → **89** heads at Magnús's committal; 42 → **110** chairs in the hall; 36 → **68** at Edda's. The drop from 89 to 68 in a single season is now explicitly the western houses that stopped being spoken, not emigration.
3. **Séra Hjálmar introduced** (Ch. II) via Sigrún, with the parsonage, the 1732 continuity, and her warning: *he will talk to you longer than anyone else will; do not mistake that for telling you more.*
4. **The liturgical drift, first sighting** (Ch. II) — `verði að þínum vilja` (dat.) where every hymnal in Iceland reads `verði þinn vilji` (nom.). First field note, with two struck hypotheses.
5. **The two-part funeral** (Ch. IV) — Lutheran burial in the churchyard, then the whole congregation turns west and climbs to the rock. Hjálmar's *"I have stopped regarding that as a failure of scholarship."*
6. **Midpoint escalation** (Ch. VII) — eleven hymnals, eleven for eleven, including two bought retail in Reykjavík. Carries the warmth beat too: Halla's kitchen, the failed card trick, the school bus to Húsavík.
7. **The Grammar Harbours** (Ch. X) — Edda's six-harbour history: ash, modernization, emigration, and the one that simply put it down and is still applying for grant money. *"It is luck… that looks exactly like stubbornness from the outside."*
8. **Elizabeth's drills** (Ch. I) — the tin's scraps are re-read as rehearsal paradigms, no glosses, in a fluent hand, with three columns running off the torn edge.
9. **The Keeping, seeded** (Ch. V) — Arnar mentions it as a schedule, not a rite. Rowan files it under folk custom.
10. **Payoff scene** (Ch. XI) — Rowan and Hjálmar in the church before the platform. The dative is not impiety; it is consistency. *"We did not make God smaller. We stopped shouting His name across the water."*

New LaTeX macros in the preamble: `fieldnote`, `gloss`, `paradigm`, `struck`.

---

## New chapter order

**Correction:** the draft has **12** chapters plus the Coda, not 11 — I miscounted on the first pass. The map below is right.

Chapters are now untitled and marked with runic golden numbers, so nothing needs renumbering by hand. Working names below are for our reference only; they do not appear in the book.

| Stave | New | Old | Working name | Status |
|---|---|---|---|---|
| ᚠ | 1 | — | Cambridge | **drafted — 2,569 w** |
| ᚢ | 2 | — | The Reading Room | **drafted — 4,052 w** |
| ᚦ | 3 | 1 | The Last Road | revised |
| ᚬ | 4 | 2 | The House of Borrowed Words | revised |
| ᚱ | 5 | 3 | Edda | expand |
| ᚴ | 6 | 4 | The Funeral Case | revised |
| ᚼ | 7 | 5 | Arnar | revised |
| ᚾ | 8 | 6 | Schoolhouse Without Lessons | expand |
| ᛁ | 9 | — | The Day of Keeping | **drafted — 3,375 w** |
| ᛅ | 10 | — | The Cartographer | **drafted — 3,115 w** |
| ᛋ | 11 | 7 | The Hall Meeting | revised |
| ᛏ | 12 | — | Elizabeth's Archive | **drafted — 3,239 w** |
| ᛒ | 13 | 8 | Brynja | expand |
| ᛘ | 14 | 9 | Magnús / the Aflending | expand |
| ᛚ | 15 | 10 | Edda's Death | revised |
| ᛦ | 16 | 11 | The Platform | revised |
| ᛮ | 17 | 12 | Maintenance | revised |
| — | — | — | Coda | revised |

Five new chapters, four substantial expansions. Estimated final length **80,000–86,000 words**, from 34,000.

**Ceiling warning:** the runic golden-number system has exactly 19 staves. At 17 chapters you have **two left**. If the book needs to grow past 19, the options are to merge chapters, promote some breaks to Part divisions with their own staves, or abandon the system — so it is worth deciding before drafting rather than after.

---

## Typography: runic golden numbers

Chapter titles are gone. Each chapter now opens with a single large runic stave and the Aldine leaf.

The staves are **runic calendar golden numbers** — the sixteen Younger Fuþark runes as used on Scandinavian and Icelandic *primstafir* to number the nineteen years of the Metonic cycle, with three later invented staves (arlaug, tvimadur, belgthor) for 17–19. This is not decorative pseudo-runic; it is a real historical system for keeping time by maintaining a carved wooden object, still in use in Iceland into the eighteenth century. For a novel whose argument is that reality is held together by scheduled maintenance, it is close to the perfect numbering scheme.

**One thing you need to do:** drop `Junicode-Regular.ttf` into `decl-fonts/`. Junicode is free, cut for medievalists, covers the full Runic block including U+16EE–U+16F0, and sits comfortably beside EB Garamond. Noto Sans Runic also works but is tonally wrong — too clean, too screen.

The preamble uses `\IfFontExistsTF`, so **if the font is missing the book still compiles** and falls back to Roman numerals. A missing font degrades the design without breaking the build.

---

## The five new chapters

### I — Cambridge
**~3,200 words. Act I, curiosity.**

Eight months after the crematorium. The Grantchester flat, mostly emptied. Rowan is not grieving; he is cataloguing, which is the same activity performed by a man who has decided not to notice what he is doing.

Beats:
- The flat, room by room, in his field method. Labelling. Boxing. The coat still on the back of the door.
- The tin. The envelope. The photograph he does not recognise as his mother until the eyes give her away.
- **The drills.** On the floor between two boxes, he works out that the scraps are rehearsal paradigms — and does not write it down. This is the novel's first withheld observation, and it is his, not hers.
- The department. He pitches the grant in the clinical register, and it is granted, and nobody asks him a question he would have had to lie to answer.
- A colleague who *does* ask, lightly, at the end of a corridor: *isn't your mother Icelandic?* And the smooth grey surface he has inherited, deployed for the first time on the page, so the reader sees the mechanism before they see it in Brynjavík.

Ends on the booking confirmation. No foreshadowing of weather. Nothing strange has happened yet, and the point is that nothing has.

**Drafted.** 2,569 words — shorter than specced, deliberately. It is the quietest chapter in the book and length would have hurt it.

What the draft does:

- **The labelling opening.** He arrives with bin bags, a marker pen, and eighteen archive boxes from the departmental supplier, and catches himself writing `BEDROOM 2 / TEXTILE / NO PROVENANCE` on a box of his mother's cardigans. He stops. Then he finishes writing it, "because the alternative is a box with nothing on it."
- **The realisation, stated once and plainly.** Standing over her life laid out chronologically on the duvet: *I have never once made her tell me.*
- **The coat.** He leaves it until last, takes it off the hook, finds the door feels different in the room, and hangs it back up. He hands the keys to the agent with the coat still on the door and does not mention it — "the single most uncharacteristic act of his adult life."
- **Mrs. Ogilvie.** The neighbour of nineteen years who once asked Elizabeth where she was from, remembers thinking what a nice answer it was, and cannot recall a word of it. Rowan recognises the technique — correct affective shape, no informational content, *warmth as a sealant* — and then performs the identical manoeuvre on her, in the same room, the same afternoon, and does not correct it.
- **The drills.** The centrepiece, and it lands harder here than in summary because we watch him be *good* at it: four seconds on his own carpet, glasses pushed up, forty scraps torn along the same margin. He knows exactly what a paradigm drilled past the living language means; he has a monograph on the shelf above him about precisely this; he has given the plenary. Then: *He does not write it down.* Then he makes tea, puts the tin in the wardrobe, and is on excellent form at a supervision the next morning.
- **The grant proposal contains no lie.** Every claim supportable, every citation real, methodology sound, costed to the pound. "It is simply that the document does not contain the reason." He rehearsed an answer to the question nobody asked — *My mother was born there* — and is not sure afterwards whether he would have used it.
- **Marianne in the corridor.** *"Isn't your mother Icelandic?"* → *"She left a long time ago."* He stands in the corridor afterwards admiring the sentence "the way one admires a joint in wood." True, answering, closing, and omitting that she is dead, that he has her photograph in a drawer twenty feet away, and that he is going to the village she was born in.
- **The closing insistence.** The chapter states outright that nothing has happened, and rehearses the entirely ordinary version of events — a woman died at seventy-seven, her son found a tin under a bed, he is a linguist and applied for a grant. Then he wraps the tin in a wool sock and buries it at the bottom of the duffel where the bag would have to be fully emptied to reach it, thinks *for the padding*, "hears the sentence do its work, and goes to bed."

**Consequential edit to Ch. 3.** The hairpin chapter opened with ~470 words summarising the flat, the reticence, the scraps, the photograph and the grant. All of it is now dramatised, so that block is cut to two paragraphs — the childhood *before Cambridge* deflections (which Ch. 1 does not stage) and a tightened statement of what he still refuses to conclude. Ch. 3 is down from 2,860 to 2,388 words and starts moving much faster now that it is not carrying exposition.

### II — The Reading Room
**~4,500 words. The threshold chapter — the bible's most valuable structural addition.**

Reykjavík. Everything is normal. That is the horror.

Beats:
- **Arrival.** Keflavík, the bus, a hotel on Laugavegur. Rowan's Icelandic works. It works well. He is pleased with himself in a way the reader will later find unbearable.
- **The taxi driver.** *Brynjavík? Didn't the harbour close?* Said with mild certainty. The harbour did not close.
- **The hotel clerk.** *My grandmother grew up there.* She has never been. She cannot say why not.
- **Árnastofnun.** A professor — call her **Dr. Ragnheiður Ólafsdóttir**, dialectologist, sixties, generous and slightly bored. She is genuinely helpful. She calls the dialect "interesting." She has never done fieldwork there and has no reason not to have. She recommends two articles; one does not exist at the volume she cites.
- **The catalogue.** Seventeen holdings listed for Brynjavík parish. Six retrievable. The librarian is apologetic and unbothered — retrocon errors, a flood in the seventies, you would not believe the state of the district records. No conspiracy. Administrative fog.
- **The map shop.** He buys three maps of the same coast at three scales. Population figures disagree: 41, 96, 113. Road classifications disagree. On one, the connector road is dashed; on another it is solid; on the 1987 sheet it is not drawn at all. He photographs all three side by side and files it under *cartographic lag*, which is a real phenomenon and is not what this is.
- **The parish office.** A church administrator confirms the parish still exists, has a resident pastor, and files its returns on time. Every year. Without fail. He finds this reassuring for reasons he does not examine.

Ends with him in the rental car at the edge of the city with a full tank and a survey map on the passenger seat — and the reader crosses the threshold with him into the existing Chapter I.

**Craft note:** nothing supernatural. Every oddity has a boring explanation available, and Rowan takes each one. The dread is entirely in the accumulation.

**Drafted.** 4,052 words. Notes on what the draft does beyond the spec:

- **The six things.** The chapter's oddities are counted, and Rowan counts them himself in the car and dismisses all six with correct professional reasoning — because a researcher who hears signal in institutional noise "is not a researcher, he is a man with a hobby." The reader is left holding six things he has put down. The chapter closes on him declining *sex hlutir* aloud to the windscreen out of a childhood habit, and finding the genitive sits oddly: *of six things*, as though the six things owned something.
- **Two long-range plants.** Ragnheiður names **Hvalsker** as one of four parishes in the article that does not exist, attached to a specific sensory memory — a guesthouse with a tailless cat. That is where Brynja is living in Ch. 18. And Rowan checks **page nine** of a Reykjavík hymnal out of "a habit he does not yet have a reason for," finds *verði þinn vilji*, standard and correct, and thinks nothing about it — so the reader has seen the undamaged text before Brynjavík damages it.
- **Ragnheiður's near-misses.** She almost did the fieldwork twice and it came off the list both times, and she cannot remember why the second time. She delivers this as a rueful career aphorism: *a career is the list of things that came off the list.* It reads as charm. It is the first thing in the novel that is not.
- **The parish returns.** Gerður's four cancelled Sundays since 1732, with reasons logged, is played as a *good* detail — the kind that makes a funding body sit up. Rowan walks out smiling, and the chapter says so: this is the last afternoon of his life in which *careful* means what he currently thinks it means.
- **Fluency established as an asset**, explicitly, so the later dismantling has something to dismantle: *he does not know yet that this is the last week of his life in which he will regard his own fluency as an asset.*
- The 1874 visitation report complains about damp, poor attendance in fishing season, and the state of the pastor's fence — nine pages of the utterly ordinary, which Rowan reads "with something close to affection." Brynjavík is likeable here before it is anything else.

### 9 — The Day of Keeping
**~4,000 words. The warmth chapter. Load-bearing for the whole rewrite.**

**Now placed after the schoolhouse, not before.** This changes what the chapter means, and improves it. The reader arrives at the Keeping having just heard Sigrún explain that the containment forms were dropped in the eighties and nineties because a tired teacher could not defend them to bored twelve-year-olds. So the reader watches these people repoint walls, mend nets, and patiently teach a child a dative — while knowing the curriculum was gutted thirty years ago and the fragment she is being taught is a fragment.

The warmth stops being merely warm. Every competent, cheerful, unhurried thing they do is being done with a hole already cut in it, and only the reader can see the hole. That is a much better chapter than the one I originally specced.

Fourth Saturday. Rowan expects a folk festival and gets a work roster.

Beats:
- **06:00, the hall.** Lists on the wall. Names against tasks. Children have tasks. The two Sigurjónsdóttir sisters are assigned to opposite ends of the village, which everyone understands and nobody mentions.
- **The work.** Walls repointed. Nets mended. Roofs checked. Boundary stones visited in order. A ten-year-old is taught the correct dative for a gatepost by her grandfather, badly and with much patience, and gets it wrong twice and right once and is praised.
- **The copying.** In the back room, four people copy old texts by hand onto new paper. The old copies are not destroyed; they are stacked. Rowan asks why they do not photocopy and receives four different answers from four people, none of which agree, all of which are held with total confidence.
- **The reading of names.** Late afternoon. Everyone assembles. A list is read aloud — not the dead exactly, and not a census. It takes forty minutes. Children are quiet for all forty. Rowan cannot determine the ordering principle and this bothers him more than anything supernatural has.
- **Coffee and kleinur.** Gossip. A birthday. Someone's terrible fishing story that everyone has heard. Hjálmar in shirtsleeves on a ladder with a paintbrush, entirely unremarkable. Rowan laughs — actually laughs — for the first time in the novel.
- **The last beat.** Walking back in the dark, pleasantly tired, he realises he has spent fourteen hours doing manual labour and has enjoyed it, and that not one person all day used the word *ritual*, or *tradition*, or *heritage*, or explained anything to anyone.

**This chapter is why the ending hurts.** The reader must want this place to survive.

**Drafted.** 3,375 words. Departures from the spec, all deliberate:

- **The name-reading is not in it.** That belongs to the Great Keeping, which stays off the page. The monthly Keeping is walls, roofs, nets, copying and boundary stones — and the chapter is stronger for having no ceremony in it at all.
- **Rowan is put on the roster without being asked.** `Hale, R. — north wall w/ Ingi & Steinunn`, typed between Guðjón and Halla in a font somebody chose in 2004. He identifies the feeling on the walk up as "the specific warm foolish pleasure of being picked for a team," and the chapter says outright that he never once examines what it means that he did not have to be asked. **This is where the binding starts** — not on the rock. It is the quietest and most important thing in the chapter.
- **The eleventh stone.** The chapter's spine, and the payoff of the schoolhouse. Ten boundary stones get the physical maintenance and a short flat spoken form; the eleventh gets the maintenance and silence. Þórunn had it. She died in 1991 or 1992. Ingi shrugs "the shrug of a man discussing a part that is no longer manufactured" and says *the stone is most of it.* Nobody on that hill under fifty has ever heard the eleventh stone spoken to. Sigrún, twenty metres downslope, sees exactly which stone Rowan is standing next to, and neither says anything — "that shared discipline is the most intimate thing that has passed between them since the schoolhouse."
- **The four answers.** Guðjón: *the machine makes a picture of a copy.* The woman opposite: *because then nobody has read it.* The young man: *I don't know, this is how we do it, it's four hours.* Halla: *the hand has to go the same way the hand went.* Nobody amends anybody. Rowan copies for two and a half hours and finds, to his irritation, that the second answer was correct.
- **The case ending taught as a physical location.** Halla puts her hand over Kári's on the gatepost, he gets it wrong twice, and she does not correct the word — she moves his hand an inch to the left. Not *say it like this*; *stand here and it will be like this.* Rowan writes nothing down and is not sure afterwards whether that was respect or reluctance to be a man with a notebook in that minute. **This is the image the coda re-runs with Sóley.**
- **The closing arithmetic.** Walking home, ruined, happy, he registers that in eleven hours nobody said *tradition, custom, heritage, the old ways,* or *ritual*; nobody explained anything to anybody; no adult took a child aside and told it why. He has done fieldwork in eleven communities and in every one of them somebody started explaining the culture within the hour. Then he does the sum he was not looking for — what a village would have to be maintaining to justify eleven hours a month, from every adult, for three hundred years, without exemption and without anyone ever being told what it was for. Then he thinks about the eleventh stone.
- **Warmth delivered as specifics, not atmosphere:** Ólöf Magnúsdóttir's sixtieth sung in four keys and two sets of words; the running gearbox argument; the 1998 fence dispute that ends *and that is why we do not ask Þórarinn about fences*; dogs flat under the tables "like dropped coats"; Hjálmar heckled about a paint colour he has defended word-for-word every year for forty years. Rowan laughs properly for the first time in the novel, is aware of being happy while it is happening, and nobody in the room requires anything of him except that he pass the milk.
- **The Sigurjónsdóttir feud pays off** from Ch. 6: the sisters are rostered nine hundred metres apart around a headland. Steinunn: *"I do not have an opinion."* Four-second pause. *"Kristín was wrong."*

**Consequential edit to Ch. 11.** Kári and Halla now precede the hymnal-collection scene, so that passage was rewritten: the card trick has been cracked since Saturday, works twice, and Kári accepts the applause "as no more than the settlement of an outstanding debt." Steinunn's bus opinions carry through as a running joke.

### X — The Cartographer
**~3,800 words. Thorsteinn's chapter, before he breaks.**

Currently he shouts *"It's water!"* and is destroyed, and the reader has had one office scene with him. Give him a chapter first so the breaking costs something.

Beats:
- Rowan comes for maps and gets a man. The overlay wall, layer on layer, in a hand growing less confident.
- **His history.** Not from here. Came for two years in 2009. Married a local woman; she left; he stayed. He has no grammar and no standing and has been administering a place whose central fact he is structurally excluded from.
- **The survey.** He shows Rowan the discrepancies himself, and he has documented them meticulously, and he is the only person in the village doing so. He is *right about everything*. He simply cannot draw the conclusion, because the conclusion would require him to accept that his competence is irrelevant here.
- **The stakes.** Kilometre 47. The eight-hundred-metre error from Chapter III, explained — he set that stake himself, correctly, three times, and it has moved three times, and he has stopped reporting it because the third report generated an inspection that found nothing.
- **The plea.** He asks Rowan, an outsider with credentials, to co-sign the erosion map. To be a second name. Rowan hesitates — and does not sign, and the refusal is quiet and reasonable and is the last door closing before the man goes into the hall and names the water.

Ends with Thorsteinn alone at the wall, adding a layer.

**Drafted.** 3,115 words. What the draft found:

- **He is the best empiricist in the book.** The file — `KORT — FRÁVIK`, 311 entries since 2011, on a form he designed — is genuinely superb: sources cited to edition and printing, re-checks logged at intervals, negative results recorded as carefully as positive ones, and two entries where he wrote *my error — misread scale bar* and left them in. Rowan has sat on three funding panels and would have funded it. The handwriting tightens year by year until it is "the hand of a man who has decided that his handwriting is one of the things he can still control."
- **The Reading Room pays off directly.** Rowan puts his three map sheets on the desk and Thorsteinn glances at them for four seconds and recites the numbers before being asked — *one-one-three, ninety-six, forty-one* — then produces the file. Best detail: the district resurfaced the connector road every year from 1961 without ever having built it, and when queried, called it a legacy budget line whose coding predates the current system. Which is true. *Everything here predates the current system.*
- **The stake.** Entry 214: found 810 m south, concrete collar at the set position **intact and empty**. Thorsteinn's honest conclusion is that somebody in the village is very good at concrete — he considered it seriously, identified four men capable of it, and could never find a motive. The third time he reported it, an inspector came from Akureyri, measured it three times, found it correctly positioned, and wrote that the reporting officer might be under strain. Thorsteinn re-measured the morning the man left: 800 m south. That is the last thing he ever notified anyone about. Eighty-five entries since.
- **Vigdís.** She left in 2016 because he would not learn it. Not the words — she didn't care about the words. She wanted him to *believe* it. His account is scrupulously fair to her: *I do not think she was stupid. I want to be clear about that. She is the least stupid person I have ever met.*
- **The nine days.** The tide gauge diverges from the tables on about nine occasions a year and Thorsteinn has checked every meteorological variable and found no pattern — *some of them are funerals, some of them are Tuesdays.* Rowan could hand him the answer in one sentence: cross-reference against the fourth Saturday and the turn of the year. He says *"It's a good dataset"* instead, and the withholding is smooth and practised and exactly the shape of every silence he was raised inside. Thorsteinn: *"It is a very good dataset, of an effect that does not exist"* — and laughs, "the worst sound Rowan has heard in Brynjavík."
- **He does the Keeping.** Every month, on the curing house roof. He has costed it at eleven million krónur a year of free labour and would fight anybody who tried to stop it. The boundary stones "take forty minutes and keep the old people happy." He has been performing the Keeping for sixteen years in a register with no power in it — maintaining a boundary by documentation, without exemption, because he cannot bear the alternative. Rowan sees this and does not say it.
- **The refusal.** Rowan's stated reason is correct and genuinely protective: an unqualified linguist certifying a landform survey would weaken the file, not strengthen it, and discredit sixteen years of work. Thorsteinn's reply is the sharpest line in the chapter — *"That is a good argument." "It's a true one." "I did not say it was not true. I said it was good. There is a difference and you know it better than anybody who has ever come here."* Then: *"Is there a second reason?"* There is. Rowan no longer believes any line of any date describes where this coast ends. He says there isn't one.
- **The last image.** Through a half-open door at ten past five: Thorsteinn pinning fresh tracing paper over eleven or twelve existing overlays, squaring it up, beginning this year's edge over last year's edge — "every single line on it correct, and not one of them holding anything." Rowan assembles his justification on the walk home and it holds all the way to the Annex door. Then: *cross-reference the nine days.* He stands with his hand on the latch and goes in without lighting the lamp.

The chapter opens on the observation that the maps are the only thing in Brynjavík anyone has ever tried to explain to him — which lands because the Day of Keeping just closed on nobody explaining anything — and he now suspects that what he took for administrative courtesy on his first evening was loneliness.

### XII — Elizabeth's Archive
**~4,200 words. The emotional hinge of the back half.**

Placed after the hall meeting, before Brynja. Rowan has begun to lose English. He goes looking for his mother.

Beats:
- **The house that is not there.** Edda told him where Bryndís was born. He walks to the western nothing and stands where a kitchen was, and there is only unbroken grass.
- **The parish register.** With Hjálmar. *Bryndís Ásta Brynjarsdóttir*, b. 1948. Confirmed 1962. And then, in 1966, an entry that is not a death and not an emigration — a marginal notation in the pastor's hand of the period that Hjálmar has to translate for him, because the abbreviation is not standard and is not ecclesiastical: **the line is recorded as unfinished.**
- **Edda's box.** Given, not found. Letters that Bryndís wrote and did not send — plural. Eleven of them, spanning 1969 to 1994, all addressed, none stamped. Edda kept the tin; she never had the letters; the letters were in a drawer in Grantchester and Rowan has had them in a box in his flat for eight months without opening it, and he opens it now, here, in a cottage on the coast.
- **The recording.** The one artefact. A reel, 1965, a schools broadcast collecting regional speech. A seventeen-year-old girl reciting a paradigm. Rowan plays it and hears his mother's voice before the accent flattened, and she is fluent, and she is fast, and she is *good* — and at the seventh column she goes wrong, deliberately, audibly, and the recording engineer does not notice and she does not correct it.
- **What that means.** She sabotaged her own audition. At seventeen. On tape. Forty years before she made a son who would come and finish it.
- **The last beat.** He does not open the sealed envelope. He is not finished enough. But he understands now that his whole vocation is a symptom, and he sits with that in a cold room until the candle is done.

**Craft note:** the two lines of the letter quoted in the Coda must not be echoed here. Keep the powder dry.

**Drafted.** 3,239 words. Two spec items had to be dropped, and the chapter is better for it:

- **No eleven unsent letters.** Cambridge established that the flat contained *no letters, no diaries, no address book older than the current one* — and Edda's Ch. 15 speech says Bryndís *never wrote, except once.* Both doors were already shut. So the archive is not what she wrote after; it is **what she left behind at seventeen**, which is stronger. Total silence for forty years stays intact.
- **The chapter withholds the interpretation.** Edda explains the refusal in Ch. 15. So Ch. 12 gives Rowan the evidence and denies him the reading, and ends on an ambiguity Edda later resolves.

What it contains:

- **The house site.** He triangulates from the church tower and the northern headland, stands on the coordinate, and finds unbroken moor — no foundation darkening, no rubble, no nettles or elder, "because human ground is rich" and this land has not remembered it at all. He does not photograph it, and suspects afterwards it is because a photograph of nothing documents the wrong thing.
- **The register.** `3. mars 1948. Bryndís Ásta Guðmundsdóttir.` The first time his mother's name has been written in front of him by somebody who was not her. Two names she did not use for fifty-seven years. Then the 1966 margin: four words meaning *the line is not finished* — not `brottflutt`, not a death, not a transfer. Hjálmar has checked: it appears nine times in 293 years, three of them in hands from before 1800, and it is not ecclesiastical and not in any handbook. He has written it twice himself, both times because he was asked, both times by someone who did not explain. Crucially he reads out what became of the other eight, and every one is an ordinary life, several of them long. *It is not a curse. It records something that was left open.*
- **The 1965 ledger — the best material in the chapter,** and it was already planted. Rowan read this ledger in Ch. 9 for the curriculum and skimmed the personal notes as texture. Now: *Bryndís Á. has the length. Better than mine at that age — she does not push it from the throat, it simply arrives.* Then week 36, the second clause at the north stones, fifteen and a half seconds, nobody had to carry her, *Guðmundur cried, which he will deny.* Then week 38: the broadcast people are coming and Þórdís has chosen her. *I am proud enough to be ashamed of myself.* Then week 39, entire: **`Þórdís has withdrawn her.`** Four words, in a ledger that has explained the weather and the price of chalk for thirty-eight weeks. Week 40 is about a broken window and is entirely normal. She never appears again.
- **The reel.** A 1965 dialect-survey recording, second copy left with the school per the standard arrangement. The machine has been oiled — recently, by somebody, in a building nobody has taught in for thirty-one years. Rowan runs it off a battery pack; Sigrún makes him lace the tape twice.
- **The voice.** It does not sound like his mother — high, quick, unguarded, a coast in it. No recognition at all. Except the fifth of a second before *ára*, which is not hesitation but placement, and which he has heard ten thousand times across a kitchen table. She gives four cases, then a fifth, then a sixth, "and the recordist says nothing because the recordist has no idea." Then the seventh, where she produces a wrong form cleanly, in tempo, with the same bored competence — and he knows it is wrong "the way he knows a bell is cracked, from the shape of the sound and not from any rule he could cite, because there is no published description of the seventh case of anything."
- **The unresolvable.** Two accounts fit the evidence equally: a brilliant girl failing at the outer limit in front of the village and leaving eight weeks later, which is the oldest story there is — or deliberate sabotage. The tape cannot choose, because *a deliberate error produced by someone that good would sound exactly like an error produced by someone that good.* In the room tone, an older woman says one short word that is not on the transcript sheet; Rowan rewinds eleven times and cannot get it. Sigrún: *"That is Þórdís, and she is not surprised."*
- **The envelope stays with Edda** — six weeks on her table, never mentioned. Rowan wants it and says so plainly, and understands that Edda was never deciding whether to accept a letter but whether the man who brought it could hold what is in it, "and it is six weeks later and she has not decided yet."
- **Sigrún's last gift**, at her door, unprompted: *"She used to carry me on the boundary walk when my legs gave out, and she sang, which nobody does. I thought you should have one thing about her that is not in a book."*

**Names fixed:** Bryndís is **Guðmundsdóttir**, not Brynjarsdóttir — she and Edda are explicitly *not sisters* in Ch. 15, so they cannot share a patronymic. Þórdís is the custodian who taught them both at the same table in the same winter.

---

## The four expansions — all complete

### Ch. 5 — Edda → **3,854 w**
- **Folklore absorbed, not replaced.** *The country has the stories… ask a man in Selfoss why you do not move the rock and he will say it is bad luck. He has the instruction and he has lost the reason, so he keeps it as a story, because a story is what an instruction turns into when nobody remembers what it was for.* Hidden people are a rule about what may be given a house. The four landvættir are four boundaries and a rule about approach — *somebody put a face on each one so it could be remembered by people who were not going to be taught the grammar.* Second sight is noticing which case a thing is in before it has finished arriving. Dream-names are a workaround: you may not speak a dead man's name, so he comes and says it himself — *you have committed nothing, because you did not say it, you were told it.*
- **The naming taboo is inverted.** Not a prohibition on reuse but an *obligation*: eleven keeping names, in order, no skipping. *When one goes out of use we are short, and being short is a thing we notice.*
- **The meal** — unasked and undeclinable. Fish stew, mismatched bowls, rye bread, over-salted butter, and a looser silence than the interview had.
- **Her mother's winter, 1934.** Eleven days in which the village doubled in length, by degrees. *Nobody was frightened, because everybody was busy* — water carried further, boats further off, old people cut off from the hall, "eleven days of extremely tedious inconvenience and everyone was too tired at the end of it to be afraid." The sting: the useful part is not the eleven days, it is the boundary argument that ran until 1961, *because both families were right.*
- **First paradigm table**, using the new `paradigm` environment — surface / column / floor, middle cell empty. The field note kills the attrition hypothesis on correct grounds: attrition leaves debris, doublets, hypercorrection, disputed usage among the elderly. There is none. *That is not a hole in a system. That is a system with a designed hole.* And she did not say *we have no word* — she said *we do not speak of the middle.*

### Ch. 7 — Arnar → **4,243 w**
- **Eleven knots in sequence**, laid left to right with related pairs offset, and the shape that accumulates on the pine is a **stemma** — the exact diagram Rowan has drawn on whiteboards in three countries. One per winter, eleven winters: *you do not get the next one until the last one holds in weather.* A boy starting at seven has the set at eighteen, which is when he is first put in a boat alone. Not folk pedagogy — a costed syllabus held to for four centuries. *"And if a boy is quick?" "Then he waits. The quick ones are the ones you lose."*
- **The sea trip**, placed before the cottage scene. Quota politics in full active sentences with no hedging, "because the Ministry of Fisheries is not listening from below." Four boats in 1994, one now; a man in the south who owns the right to fish a bay he will never see.
- **Weather-reading as differential.** Four looks at the water — not the sky — then he turns for home under a flat sky, and the squall lands forty minutes later. *The chop was wrong for the wind. More coming in than the wind was making.* Rowan crosses out *intuition* and writes **differential**: inferring a third quantity from the gap between two, which is exactly what he does with attested and unattested forms.
- **Kristbjörg in pieces**, never from Arnar: her name on the 2011 harbour rota still pinned in the shed; a slipway photograph, second from the left, laughing at something outside the frame; six mugs of which four are chipped in the same place and two are not chipped at all.
- **The hooks.** The reveal isn't the empty hook — Rowan clocked that on his first visit. It's that Arnar uses the **left** hook, behind the door swing and four inches too low, leaning and turning his shoulder for it twice a day for years, while the right hook sits at shoulder height, perfectly placed, empty. *He is simply not using it… the way a man does not use a word.* Rowan has no distance from this, because of a navy coat on a door in Grantchester, and stops calling that grief: *Leave the hook empty. Leave the noun out of the sentence. Carry the cost yourself, quietly, forever, rather than let the thing be handled.*

### Ch. 9 — Schoolhouse → **4,178 w**
- **The child has a name: Ásdís Helgadóttir.** Second row, by the radiator, because she felt the cold. Not a difficult child — *serious children ask the serious question,* and the question was **"Miss, if it worked, wouldn't somebody outside know?"** Thirty-one years and Sigrún has never found a flaw in it. The true answer — that they *did* know, in six places, and five stopped — cannot be given to eleven-year-olds, because the evidence is a hundred and fifty years of nothing happening here and things happening elsewhere, *and no method on earth can turn that into a proof.* She told her it was a very good question, "which is what a teacher says when she has lost." Ásdís is a radiographer in Reykjavík now, comes at Easter, brings her children, has no idea, *and I would sooner cut my hand off than tell her.*
- **The recent cut.** A chart at the dark end of the corridor, bottom third removed — and the cut edge is *wrong*: no oxidation, paler fibre, standing edges under raking light. Two or three years old, not thirty, in a locked building with one key. Two readings, no way between them: somebody is still quietly removing the dangerous parts of the grammar, or somebody came up in the dark and rescued the one panel carrying a form nobody living could otherwise reproduce. **Suppression or rescue — the same blade, the same wall, the same two inches of missing paper.**

### Ch. 14 — Magnús / the Aflending → **4,116 w**
- **Hjálmar on the shingle**, not praying over the body, not contradicting Edda, refusing both comfortable positions: *there will be a physical cause… and whatever the doctor writes will be true, and it will not be the whole of the truth, and I have no method for the remainder and neither does he. That is not evasion. That is the actual position, and I have held it for nineteen years, and it is more uncomfortable than either of the two comfortable positions available.*
- **The blank.** The doctor gives drowning, correctly, on the evidence. Hjálmar records the burial and leaves the circumstance column empty. He cannot write *drowning* — *he was dry, I was there, there was not one wet stone, and I am not going to put a word into a book that will sit in that cupboard for three hundred years and tell somebody in 2325 a thing I know to be false.* Nor the other thing, because the diocese would send somebody kind who would conclude that a rural incumbent has become isolated.
- **The other four blanks: 1783, 1918, 1934, 1991.** Burial recorded, circumstance not, hand perfectly steady in every case — no blot, no hesitation, no scratching out. Rowan reads them against what he now knows: the ash and the harbour that walked east; the winter the village doubled; Þórunn and the eleventh stone. Hjálmar: *"I find I am not lonely about it in the way I expected. Four men across three hundred years, none of whom I can ask anything, and I know precisely what each of them was doing on the day he picked up the pen."*
- Placement: the vestry scene sits **after** the Aflending, not before the tarp — the doctor comes out on the Thursday.

---

## Continuity ledger — do not break these

- **Rowan is already fluent in Icelandic.** He is *not* fluent in Vikamál. The arc is fluency → dialect failure → recognition that Icelandic is the surface of something older. Never write him as a beginner.
- **Elizabeth = Bryndís.** Chosen, trained, refused. Never held the boundary. This is non-negotiable; the Coda letter depends on it.
- **The envelope stays sealed** until the Coda. Edda's condition: *you are not finished enough to read it.*
- **Bjarni** is the young smoker saved at the quay in Ch. VI. **Einar** is the glass-eyed fisherman who survives to the end and holds the second clause. They are different men — the current Ch. XI text calls the survivor "Einar, who was once nearly lost in a harbour," which conflates them. **Flag: needs fixing.**
- **Three women are spent** for the boundary: Edda (voice), Sigrún (nerve), Brynja (driven out unnamed). Rowan's refusal to look away from that is the moral spine. Do not add a fourth casually.
- **The sea is never described as malevolent.** It is a creditor, an auditor, a level finding a level. Grief in the only grammar it has.
- **Nobody in Brynjavík calls anything magic, ritual, tradition, or heritage.** Only outsiders use those words. Rowan uses them early and stops.
- **Population:** 113 at arrival → 89 at the first committal → 68 at Edda's → smaller still in the Coda.

---

## Resolved — second round

**1. Chapter titles → abandoned.** All twelve stripped. Runic staves only. See the typography section above.

**2. Brynja's fate → the devastating version.** Written into Ch. 17. The visiting doctoral candidate mentions, in passing, the producer who drew her the last part of the route on the back of a receipt: Brynja Þórhallsdóttir, living in **Hvalsker** — the harbour that put the grammar down two generations ago and has now lost its sea wall three times in forty years and is still writing grant applications. She is alive, divorced, well, and has a view. She sent a message she has learned to deliver as a joke about the roads: *tell them I did get out, if there's anyone left who'd know what that means.*

The knife is that **she was right**. She was right to go, she is happier than anyone in Brynjavík, and the price of her being right is only that the wall at Hvalsker goes again in the spring and nobody there will connect the two facts. It also closes the Reading Room loop — Brynja has become one of the people who cannot quite remember Brynjavík correctly.

**3. The Coda footprints → a named child.** The smaller print is **Sóley Bjarnadóttir**, eleven, daughter of Bjarni — the boy hauled off the harbour wall by a rope in Ch. 6 because nobody could find the case that would let them use his name. Rowan knows the tread from eleven years of fourth Saturdays, and saw it most recently at the north gatepost, where she got the dative wrong twice and right once and was told she was clever and went pink.

Why this and not a nameless print: it makes the **Day of Keeping chapter load-bearing rather than decorative** — the exact scene that makes the reader love Brynjavík is the scene that damns it. And it converts Rowan's moral spine from a consolation into a defeat. He kept his promise to carry the knowledge awake; the coda is where he learns that carrying it awake was never the same as being able to do anything, and that nobody will *choose* her — there will simply come a morning when his voice fails on the third case and hers does not.

Bjarni is now planted earlier in Ch. 17 (*"He has a daughter now — small, grave, better at the boundary walk than her father was at twice her age"*) so the coda is earned rather than sprung. His age reference has been removed to keep the timeline elastic.

**4. The Keeping → monthly, plus an annual Great Keeping.** Seeded in Ch. 7. Arnar confirms the monthly cadence flatly (*the way a man confirms that the bins go out on a Tuesday*), then volunteers the Great Keeping at the turn of the year: the whole boundary, every stone, and the reading of the names. Rowan files the whole thing under folk custom.

This also gives the novel a **midwinter structural anchor** if it ever spans more than one season, and it lets the Day of Keeping chapter show the ordinary monthly version — which is the more unsettling choice, because a festival is a thing people believe in and a work roster is a thing people just do.

---

## Still open

**Drafting is complete.** Five new chapters written, four expanded, one foundation pass, one seam audit. **34,353 → 60,154 words.** Builds clean, zero overfull boxes.

---

## Seam audit — done

Ran a repeated-n-gram scan across all seventeen chapters, a chapter-junction check, a numeric/date sweep, and a character-roster first-appearance table. Most repeats were deliberate callbacks and were left alone — the *dream is not a narrative* parallel, the *wood between the salt and the tea*, the `verði að þínum vilja` triple, *Jónas struggles with the vocal length* (Ch. 8 read, Ch. 12 re-read), and the Ch. 16 → Coda promise callback.

Seven genuine seams found and fixed:

1. **The Grantchester coat, doubled.** The original text already had Rowan seeing Arnar's empty hook and thinking of the coat on his own door. My Ch. 7 expansion re-staged the same recognition. Rewritten so the expansion *revises* the earlier reading instead of repeating it: he had it filed as sentiment, and it is not — *he had been telling himself for eight months that what he could not do was give the coat away. That is not what he could not do. He could not take it down and hang his own there.*
2. **Edda's sweater**, described in identical words at both her door-openings (Ch. 3 and Ch. 5). Second occurrence now: *the same undyed wool she wore on the first day, and Rowan suspects it is not the same garment but the only kind she owns.*
3. **"I want to be clear about that"** given to both Thorsteinn and Hjálmar. Hjálmar's changed.
4. **Bjarni's vowel-in-the-throat**, written twice in near-identical words (Ch. 17 and Coda). The Coda version now carries new information instead: he has never said his daughter's name where the bay could hear it.
5. **"Hand flat on"** as a gesture three times (photograph, hymnal, map). Reduced to two.
6. **Thorsteinn announced the Tuesday inspector twice, on the same day.** Ch. 10 was set on Monday and Ch. 11's hall meeting also read as Monday. Ch. 10 moved to Sunday — he is in the office on a Sunday with four signatures and an inspector coming, which characterises him rather than costing anything, and Rowan climbs the steps with a back that has opinions about the Keeping.
7. **Hjálmar introduced twice.** Gerður names him in Reykjavík (Ch. 2, *installed two thousand and six*), then Sigrún introduced him in Ch. 4 as news and Rowan was surprised a resident pastor existed. Now Rowan supplies the name himself and Sigrún's hands go still on the buckle for a second — which is better, because it is the first time the village registers that he arrived having already looked them up.

One near-collision resolved rather than fixed: Gerður's cancelled Sundays and Hjálmar's blank circumstance columns were **both** "four since 1732," which would have read as an error. The cancelled Sundays are now **three**, with reasons — a blizzard, a funeral in another parish, and one in 1918 that says only *illness*, "which will have been the influenza and which I find rather awful in three letters."

Also softened: the narration in Ch. 9 asserted Þórunn died in 1991 when Ingi had just said *ninety-one? Ninety-two.* It now carries his uncertainty, and Hjálmar's register supplies the date in Ch. 14 — an uncertainty planted and later confirmed, rather than a fact stated twice.

---

## Optional, not blocking

1. **Ásdís Helgadóttir could return.** The radiographer in Reykjavík who comes at Easter and does not know she is the reason. She exists only in Sigrún's account. One short appearance in the late material would be devastating.
2. **The cut chart stays unresolved by design** — suppression or rescue. Ch. 12 or 15 could answer it. My recommendation is to leave it.
3. **Junicode** into `decl-fonts/` — see `BUILD-NOTES.md`.

---

## Resolved — third round

**5. Day of Keeping → moved to 9**, after the schoolhouse. See the chapter entry above for what this changes.

**6. The Great Keeping → stays off the page.** No sixth new chapter. It is now handled in a single retrospective passage in Ch. 17. The reasoning is structural, not budgetary, and is worth recording:

- **Withholding is the book's own method.** A novel whose central rule is *names are addresses, you do not say them near the water* should not stage its one ceremony that consists entirely of saying every name aloud. The reader wanting to know how they get away with it is worth more than the reader being shown.
- **It would compete with the climax.** The novel's peak is one man alone on a rock declining a coastline. A midwinter set piece with sixty people and lamps is a bigger *scene* and a smaller *event*, sitting only a few chapters away.
- **It would become the ritual set piece the book has spent its whole length refusing to be.** The bible is emphatic that nobody in Brynjavík calls any of this magical. The monthly Keeping unsettles precisely because it is a work roster. Dramatising the Great Keeping risks tipping into folk-horror pageantry — robed figures on a headland — which is the one register this book has avoided for 39,000 words.
- **Rowan's narrative season ends before midwinter.** He arrives, is bound, and takes the platform inside roughly one season. He never sees a Great Keeping *during the main action*. The absence is not a gap; it is a fact about where the story stops.

**What went in instead** (Ch. 17, ~200 words): Rowan has now stood eleven of them. The first was four hours in the dark with hurricane lamps, a woman complaining without interruption about her hip, a boy sent home at the halfway stone for laughing, and coffee that had gone cold by the second hour and was drunk anyway. And the one thing he took from it, never written down because no colleague would accept the sentence:

> The names are not said *to* the water. They are said *in front of* it. There is a difference, and the difference is the entire practice, and it is the reason a village can stand on a cliff in the dark and speak every name it has and be safe — and the reason one man, saying one name, in the wrong case, at the wrong hour, is not.

That last clause retro-explains Magnús, the funeral stutter, and the core mechanic of the novel in a single line, spoken from inside the practice rather than from Rowan's notebook.

**Reversible.** If you later want it staged, that passage is one block to cut and the midwinter slot is still free — but you would be at 18 of 19 staves.
