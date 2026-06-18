/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quotes");

  const record0 = new Record(collection);
    record0.set("bookTitle", "What Survives Is Proof");
    record0.set("quoteText", "They called it a record, but it was only a surface. The truth lived in the marks left by pressure\u2014what bent, what broke, what refused to disappear.");
    record0.set("whyItWorks", "This is the intellectual spine of the novel. It transforms records into physical evidence of emotional and institutional pressure.");
    record0.set("bestUse", "Website hero, hardcover flap, literary review outreach");
    record0.set("toneEffect", "Literary / forensic");
    record0.set("classification", "CORE THEMATIC");
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
    record1.set("bookTitle", "What Survives Is Proof");
    record1.set("quoteText", "That's what breaks me up from the half-dream. I hold my breath, waiting for his.");
    record1.set("whyItWorks", "Immediate intimacy and grief without explanation. Human-scale entry point into the mystery.");
    record1.set("bestUse", "Social reels, Instagram typography, opening trailer VO");
    record1.set("toneEffect", "Intimate / devastating");
    record1.set("classification", "EMOTIONAL HOOK");
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
    record2.set("bookTitle", "What Survives Is Proof");
    record2.set("quoteText", "Time of death, 6:42 A.M.");
    record2.set("whyItWorks", "Brutal simplicity. Reads like an institutional record while carrying enormous emotional force.");
    record2.set("bestUse", "Trailer cut-to-black, ad hook, chapter teaser");
    record2.set("toneEffect", "Clinical / cinematic");
    record2.set("classification", "STARK REVELATION");
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
    record3.set("bookTitle", "What Survives Is Proof");
    record3.set("quoteText", "BEFORE 40.");
    record3.set("whyItWorks", "Minimal and mysterious. Functions almost like an artifact label or classified folder title.");
    record3.set("bestUse", "Promo posters, metadata overlays, teaser graphics");
    record3.set("toneEffect", "Cryptic / procedural");
    record3.set("classification", "ARCHIVE OBJECT");
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
    record4.set("bookTitle", "What Survives Is Proof");
    record4.set("quoteText", "None of these were solo ambitions. They were a pair's itinerary, a romance built in quiet margins. L.E.\u2014not me, never me.");
    record4.set("whyItWorks", "Reveals emotional displacement and hidden history simultaneously.");
    record4.set("bestUse", "Literary audience ads, relationship-focused promo");
    record4.set("toneEffect", "Melancholic / intimate");
    record4.set("classification", "RELATIONAL FRACTURE");
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
    record5.set("bookTitle", "What Survives Is Proof");
    record5.set("quoteText", "Under the first item he'd written in smaller letters: Take the picture, if you make it.");
    record5.set("whyItWorks", "Feels like a message surviving its sender. Quietly haunting.");
    record5.set("bestUse", "Book trailers, motion graphics, bookmarks");
    record5.set("toneEffect", "Haunting / archival");
    record5.set("classification", "POSTHUMOUS INSTRUCTION");
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
    record6.set("bookTitle", "What Survives Is Proof");
    record6.set("quoteText", "Return the favor. \u2026 He won't suspect.");
    record6.set("whyItWorks", "Compact and dangerous. Suggests hidden systems already in motion.");
    record6.set("bestUse", "Suspense ads, teaser sequences");
    record6.set("toneEffect", "Suspicious / procedural");
    record6.set("classification", "CONSPIRATORIAL TENSION");
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
    record7.set("bookTitle", "What Survives Is Proof");
    record7.set("quoteText", "Grief sharpens into arithmetic.");
    record7.set("whyItWorks", "Probably the cleanest literary line in the set. Compresses the novel's emotional logic into a single sentence.");
    record7.set("bestUse", "Literary journals, quote cards, book club material");
    record7.set("toneEffect", "Literary / analytical");
    record7.set("classification", "PHILOSOPHICAL COMPRESSION");
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
    record8.set("bookTitle", "What Survives Is Proof");
    record8.set("quoteText", "Evan, you think all systems want to be fixed? Most of them just want to survive.");
    record8.set("whyItWorks", "Encapsulates the novel's critique of institutions and self-preserving systems.");
    record8.set("bestUse", "Interviews, metadata pages, prestige promo");
    record8.set("toneEffect", "Institutional / critical");
    record8.set("classification", "INSTITUTIONAL THESIS");
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
    record9.set("bookTitle", "What Survives Is Proof");
    record9.set("quoteText", "If anything ever happens, the list will\u2014");
    record9.set("whyItWorks", "Excellent because it refuses completion. Lets the reader finish the sentence mentally.");
    record9.set("bestUse", "Email subject lines, teaser graphics, trailers");
    record9.set("toneEffect", "Unresolved / ominous");
    record9.set("classification", "MINIATURE CLIFFHANGER");
  try {
    app.save(record9);
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