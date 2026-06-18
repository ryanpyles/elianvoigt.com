/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quotes");

  const record0 = new Record(collection);
    record0.set("bookTitle", "Summer of the Glass Bees");
    record0.set("quoteText", "Cold air came out before anything else.");
    record0.set("whyItWorks", "Immediate sensory disturbance. Suggests sequence, emergence, and hidden space without explanation.");
    record0.set("bestUse", "TikTok teaser, opening trailer line, animated typography reel");
    record0.set("toneEffect", "Uncanny / tactile dread");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("bookTitle", "Summer of the Glass Bees");
    record1.set("quoteText", "The stamp landed heavy, then made a faint tack sound when she lifted it.");
    record1.set("whyItWorks", "Hyper-specific procedural detail creates intimacy and realism. Makes ritual feel sacred.");
    record1.set("bestUse", "Quote card, literary promo graphic, ARC material");
    record1.set("toneEffect", "Archival / observational");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("bookTitle", "Summer of the Glass Bees");
    record2.set("quoteText", "A bee hovered above the flowers. Its body was clear enough that the color of the petunias showed through it.");
    record2.set("whyItWorks", "Distinct visual identity. Beautiful and physically wrong at the same time.");
    record2.set("bestUse", "Cover promo, Instagram carousel, cinematic teaser");
    record2.set("toneEffect", "Lyrical uncanny");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("bookTitle", "Summer of the Glass Bees");
    record3.set("quoteText", "She opened it. The pages resisted, then eased apart with a sound like paper breathing.");
    record3.set("whyItWorks", "Gives material objects presence and implied memory. Appeals directly to book-oriented readers.");
    record3.set("bestUse", "Book trailer text card, email header, literary ad");
    record3.set("toneEffect", "Intimate / haunted");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.set("bookTitle", "Summer of the Glass Bees");
    record4.set("quoteText", "They take the need to remember.");
    record4.set("whyItWorks", "Distills the entire moral and metaphysical premise into one sentence.");
    record4.set("bestUse", "Back cover, bookmarks, website hero text");
    record4.set("toneEffect", "Existential / chilling");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.set("bookTitle", "Summer of the Glass Bees");
    record5.set("quoteText", "It was beautiful, in the way a spreadsheet is beautiful.");
    record5.set("whyItWorks", "Prevents tonal monotony. Dry intelligence makes the world feel administratively real.");
    record5.set("bestUse", "Literary audience ads, review graphics");
    record5.set("toneEffect", "Wry / procedural");
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.set("bookTitle", "Summer of the Glass Bees");
    record6.set("quoteText", "The Glass Child itself was smaller than most people expected.");
    record6.set("whyItWorks", "Suggests myth, ritual, reverence, and disappointment simultaneously.");
    record6.set("bestUse", "Teaser image captions, website copy");
    record6.set("toneEffect", "Mythic / restrained");
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.set("bookTitle", "Summer of the Glass Bees");
    record7.set("quoteText", "No one really knows where they came from.");
    record7.set("whyItWorks", "Creates communal uncertainty and folkloric atmosphere.");
    record7.set("bestUse", "Supporting promo copy, atmospheric trailers");
    record7.set("toneEffect", "Folkloric / mysterious");
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.set("bookTitle", "Summer of the Glass Bees");
    record8.set("quoteText", "The bee made the act of signing feel inevitable.");
    record8.set("whyItWorks", "Combines seduction, coercion, bureaucracy, and surrender in one gesture.");
    record8.set("bestUse", "Trailer VO line, premium teaser graphics");
    record8.set("toneEffect", "Seductive / ominous");
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.set("bookTitle", "Summer of the Glass Bees");
    record9.set("quoteText", "She stood at the glass case with her hand pressed flat against the surface, and the night continued around her, neither ending nor beginning, simply persisting in its quiet, unremarkable way.");
    record9.set("whyItWorks", "Long-form literary cadence that proves prose quality and emotional control.");
    record9.set("bestUse", "Email campaigns, review graphics, website landing page");
    record9.set("toneEffect", "Elegiac / literary");
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record10 = new Record(collection);
    record10.set("bookTitle", "Terms of Unbeing");
    record10.set("quoteText", "Clause 4.17 appeared mid-signature. It wasn't there when I started.");
    record10.set("whyItWorks", "Turns paperwork into active horror immediately. Efficient premise delivery.");
    record10.set("bestUse", "TikTok slides, teaser ads, opening trailer text");
    record10.set("toneEffect", "Contractual dread");
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.set("bookTitle", "Terms of Unbeing");
    record11.set("quoteText", "Clause 4.17 \u2013 The act of signing this document constitutes retroactive consent to all prior revisions, witnessed or unwitnessed, perceived or occluded, conscious or subliminal.");
    record11.set("whyItWorks", "High-concept legal horror rendered with oppressive specificity.");
    record11.set("bestUse", "Back-cover pull quote, metadata copy");
    record11.set("toneEffect", "Bureaucratic horror");
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    record12.set("bookTitle", "Terms of Unbeing");
    record12.set("quoteText", "You'll find the silence comforting.");
    record12.set("whyItWorks", "Reads simultaneously as reassurance and threat. Minimal and memorable.");
    record12.set("bestUse", "Minimalist posters, black-screen trailer text");
    record12.set("toneEffect", "Quiet menace");
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    record13.set("bookTitle", "Terms of Unbeing");
    record13.set("quoteText", "THANK YOU FOR YOUR FIRST PAYMENT.");
    record13.set("whyItWorks", "Brutally clean formatting line that feels institutional and predatory.");
    record13.set("bestUse", "Motion graphics, social ads, trailer interruption");
    record13.set("toneEffect", "Corporate horror");
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record14 = new Record(collection);
    record14.set("bookTitle", "Terms of Unbeing");
    record14.set("quoteText", "Existential Equity is harvested at a rate proportional to the tenant's emotional output. The more you feel, the more you pay.");
    record14.set("whyItWorks", "Sells the entire metaphysical economy of the novel instantly.");
    record14.set("bestUse", "Amazon A+ copy, ad graphics, elevator pitch");
    record14.set("toneEffect", "Philosophical / systemic");
  try {
    app.save(record14);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record15 = new Record(collection);
    record15.set("bookTitle", "Terms of Unbeing");
    record15.set("quoteText", "Congratulations,' he says. 'Welcome to the family.'");
    record15.set("whyItWorks", "Familiar phrase weaponized through context. Feels ritualistic and irreversible.");
    record15.set("bestUse", "Trailer VO, teaser reels");
    record15.set("toneEffect", "Polite menace");
  try {
    app.save(record15);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record16 = new Record(collection);
    record16.set("bookTitle", "Terms of Unbeing");
    record16.set("quoteText", "I wonder how much I'll owe next month. I wonder what's left to give. I wonder who I'll be when it's all gone.");
    record16.set("whyItWorks", "Humanizes the abstraction. Emotional exhaustion replaces spectacle.");
    record16.set("bestUse", "Character-focused promos, ARC copy");
    record16.set("toneEffect", "Melancholic / intimate");
  try {
    app.save(record16);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record17 = new Record(collection);
    record17.set("bookTitle", "Terms of Unbeing");
    record17.set("quoteText", "Section 45: 'The building is the contract. The contract is the building. There is no outside.'");
    record17.set("whyItWorks", "Encapsulates the novel's recursive metaphysics perfectly.");
    record17.set("bestUse", "Pull quotes, PR copy, hardcover interior");
    record17.set("toneEffect", "Claustrophobic / metaphysical");
  try {
    app.save(record17);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record18 = new Record(collection);
    record18.set("bookTitle", "Terms of Unbeing");
    record18.set("quoteText", "There was no final reckoning. Just a line of code with no return, a sigil etched in a hand that no longer existed.");
    record18.set("whyItWorks", "Merges occult imagery and systems language into one terminal image.");
    record18.set("bestUse", "Closing trailer line, prestige promo copy");
    record18.set("toneEffect", "Apocalyptic / elegiac");
  try {
    app.save(record18);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record19 = new Record(collection);
    record19.set("bookTitle", "Terms of Unbeing");
    record19.set("quoteText", "The ink remembers. It writhes when you're not looking, revising itself with every breath you take.");
    record19.set("whyItWorks", "Strong tactile horror tied directly to the book's thematic engine.");
    record19.set("bestUse", "Social quote cards, teaser campaigns");
    record19.set("toneEffect", "Living-document horror");
  try {
    app.save(record19);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record20 = new Record(collection);
    record20.set("bookTitle", "Declensions of Dark Water");
    record20.set("quoteText", "The sentence stopped before the shore did.");
    record20.set("whyItWorks", "Compresses grammar and landscape into one uncanny relationship.");
    record20.set("bestUse", "Literary teaser graphics");
    record20.set("toneEffect", "Linguistic uncanny");
  try {
    app.save(record20);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record21 = new Record(collection);
    record21.set("bookTitle", "Declensions of Dark Water");
    record21.set("quoteText", "People here spoke like they were trying not to wake the weather.");
    record21.set("whyItWorks", "Makes language feel physically consequential. Strong atmospheric hook.");
    record21.set("bestUse", "Book trailers, social reels");
    record21.set("toneEffect", "Environmental dread");
  try {
    app.save(record21);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record22 = new Record(collection);
    record22.set("bookTitle", "Declensions of Dark Water");
    record22.set("quoteText", "Arnar J\u00f3nsson never corrected anyone completely.");
    record22.set("whyItWorks", "Suggests hidden rules, restraint, and social fear through behavior alone.");
    record22.set("bestUse", "Literary audience promo");
    record22.set("toneEffect", "Procedural tension");
  try {
    app.save(record22);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record23 = new Record(collection);
    record23.set("bookTitle", "Declensions of Dark Water");
    record23.set("quoteText", "The endings disappeared first.");
    record23.set("whyItWorks", "Minimal line with enormous conceptual implication.");
    record23.set("bestUse", "Website hero copy, bookmarks");
    record23.set("toneEffect", "Linguistic erosion");
  try {
    app.save(record23);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record24 = new Record(collection);
    record24.set("bookTitle", "Declensions of Dark Water");
    record24.set("quoteText", "Some words held the cliffs together longer than others.");
    record24.set("whyItWorks", "Elegant articulation of the novel's central metaphysical premise.");
    record24.set("bestUse", "Back-cover copy, ARC material");
    record24.set("toneEffect", "Mythic / geological");
  try {
    app.save(record24);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record25 = new Record(collection);
    record25.set("bookTitle", "Declensions of Dark Water");
    record25.set("quoteText", "No one in Brynjav\u00edk finished a sentence unless they meant it.");
    record25.set("whyItWorks", "Builds civic behavior, tension, and world logic in one sentence.");
    record25.set("bestUse", "Trailer text, quote graphics");
    record25.set("toneEffect", "Social / ritualistic");
  try {
    app.save(record25);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record26 = new Record(collection);
    record26.set("bookTitle", "Declensions of Dark Water");
    record26.set("quoteText", "The sea kept the parts grammar could not.");
    record26.set("whyItWorks", "Strong poetic compression with thematic depth.");
    record26.set("bestUse", "Prestige literary ads");
    record26.set("toneEffect", "Lyrical / elemental");
  try {
    app.save(record26);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record27 = new Record(collection);
    record27.set("bookTitle", "Declensions of Dark Water");
    record27.set("quoteText", "He spoke in fragments, as though completion itself carried risk.");
    record27.set("whyItWorks", "Explains character psychology and cosmology simultaneously.");
    record27.set("bestUse", "Character spotlights");
    record27.set("toneEffect", "Psychological tension");
  try {
    app.save(record27);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record28 = new Record(collection);
    record28.set("bookTitle", "Declensions of Dark Water");
    record28.set("quoteText", "Every correction cost the village something measurable.");
    record28.set("whyItWorks", "Turns grammar into economy and sacrifice.");
    record28.set("bestUse", "Concept-driven marketing");
    record28.set("toneEffect", "Systems horror");
  try {
    app.save(record28);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record29 = new Record(collection);
    record29.set("bookTitle", "Declensions of Dark Water");
    record29.set("quoteText", "The silence after a completed sentence lasted longer than it should have.");
    record29.set("whyItWorks", "Simple, eerie, memorable. Suggests the world listening back.");
    record29.set("bestUse", "Atmospheric teaser cards");
    record29.set("toneEffect", "Existential unease");
  try {
    app.save(record29);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})