/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translations");

  const record0 = new Record(collection);
    record0.set("sourceLanguage", "Vikam\u00e1l");
    record0.set("originalText", "Hafi\u00f0 tekur mennina.");
    record0.set("translatedText", "The sea takes the men.");
    record0.set("translator", "Unknown");
    record0.set("certainty", 45);
    record0.set("notes", "Dangerous construction. Literal translation may not capture full semantic weight. Alternative: \"The sea is taking the men\" (less direct agency).");
    record0.set("relatedFieldNote", "004.17");
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
    record1.set("sourceLanguage", "Vikam\u00e1l");
    record1.set("originalText", "Menn hurfu vi\u00f0 sj\u00f3inn.");
    record1.set("translatedText", "Men disappeared by the sea.");
    record1.set("translator", "Unknown");
    record1.set("certainty", 78);
    record1.set("notes", "Standard safe construction. Agency diffused through preposition.");
    record1.set("relatedFieldNote", "004.18");
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
    record2.set("sourceLanguage", "Vikam\u00e1l");
    record2.set("originalText", "Sj\u00f3rinn komandi-und.");
    record2.set("translatedText", "The sea entering unfinished state.");
    record2.set("translator", "Unknown");
    record2.set("certainty", 62);
    record2.set("notes", "Aflending suffix prevents completion. Translation speculative. Alternative: \"The sea in process of becoming\" (less precise).");
    record2.set("relatedFieldNote", "004.21");
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
    record3.set("sourceLanguage", "Vikam\u00e1l");
    record3.set("originalText", "Me\u00f0 s\u00e6fangingu lifir nafni\u00f0.");
    record3.set("translatedText", "Under Sea-Holding the name survives.");
    record3.set("translator", "Unknown");
    record3.set("certainty", 85);
    record3.set("notes", "Funerary construction. S\u00e6fangi case binds memory to place.");
    record3.set("relatedFieldNote", "004.22");
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
    record4.set("sourceLanguage", "Vikam\u00e1l");
    record4.set("originalText", "Sporin hurfnu\u00f0u \u00ed hrimfalli.");
    record4.set("translatedText", "The tracks disappeared under winter-falling.");
    record4.set("translator", "Unknown");
    record4.set("certainty", 71);
    record4.set("notes", "Hrimfall construction. Temporal slowing effect. Not erased, suspended.");
    record4.set("relatedFieldNote", "004.23");
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
    record5.set("sourceLanguage", "Icelandic");
    record5.set("originalText", "Hinn sj\u00f3rinn hlusta\u00f0.");
    record5.set("translatedText", "[Untranslated]");
    record5.set("translator", "Unknown");
    record5.set("certainty", 0);
    record5.set("notes", "Fragmentary. Appears in marginalia. Meaning unclear. Possibly \"The sea listens\" or \"The listening sea\".");
    record5.set("relatedFieldNote", null);
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
    record6.set("sourceLanguage", "Old Norse");
    record6.set("originalText", "[Partially obscured]");
    record6.set("translatedText", "[Reconstruction uncertain]");
    record6.set("translator", "Unknown");
    record6.set("certainty", 35);
    record6.set("notes", "Heavily damaged. Multiple interpretations possible. Archive damage prevents confident translation.");
    record6.set("relatedFieldNote", null);
  try {
    app.save(record6);
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