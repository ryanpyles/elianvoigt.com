/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("books");

  const record0 = new Record(collection);
    record0.set("archiveEntry", "002");
    record0.set("title", "Declensions of Dark Water");
    record0.set("status", "ACTIVE RECORD");
    record0.set("classification", "RESTRICTED CIRCULATION");
    record0.set("themes", ["language", "grief", "ritual", "coastal folklore", "grammar as infrastructure", "silence", "avoidance", "environmental linguistics"]);
    record0.set("subjects", ["LANGUAGE", "WEATHER", "RITUAL", "SEA", "GRAMMAR"]);
    record0.set("locations", ["brynjavik", "north_coast", "harbor_district"]);
    record0.set("relatedFieldNotes", ["004.17", "004.18", "004.19", "004.20", "004.21", "004.22", "004.23", "004.24", "004.25", "004.26"]);
    record0.set("relatedBooks", ["what_survives"]);
    record0.set("atmosphericProfile", "coastal/damp/linguistic/weather-beaten/inhabited");
    record0.set("timelinePosition", 2);
    record0.set("hiddenLines", ["Storms arrived after misdeclensions.", "The sea listens\u2014not to meaning, but to form."]);
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
    record1.set("archiveEntry", "001");
    record1.set("title", "What Survives Is Proof");
    record1.set("status", "ACTIVE RECORD");
    record1.set("classification", "ACTIVE RECORD");
    record1.set("themes", ["evidence", "memory", "grief", "institutional erasure", "marriage", "truth", "bureaucracy", "ledgers", "relays"]);
    record1.set("subjects", ["EVIDENCE", "MEMORY", "GRIEF", "BUREAUCRACY", "INSTITUTIONAL SYSTEMS"]);
    record1.set("locations", ["hospital_foundation", "archive_district"]);
    record1.set("relatedFieldNotes", ["002.11", "003.08", "004.03"]);
    record1.set("relatedBooks", ["declensions", "glass_bees", "terms"]);
    record1.set("atmosphericProfile", "forensic/restrained/clinical/evidence-oriented/emotionally-compressed");
    record1.set("timelinePosition", 1);
    record1.set("hiddenLines", ["What Evan leaves behind is not grief in any ordinary sense. It's a trail.", "A relay."]);
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
    record2.set("archiveEntry", "003");
    record2.set("title", "Summer of the Glass Bees");
    record2.set("status", "ACTIVE RECORD");
    record2.set("classification", "ACTIVE RECORD");
    record2.set("themes", ["memory", "grief", "efficiency", "erasure", "archives", "standardization", "loss", "municipal systems", "clarity vs. friction"]);
    record2.set("subjects", ["MEMORY", "ARCHIVES", "GRIEF", "EFFICIENCY", "MUNICIPAL SYSTEMS"]);
    record2.set("locations", ["millfield", "municipal_archive"]);
    record2.set("relatedFieldNotes", ["003.08", "004.03"]);
    record2.set("relatedBooks", ["what_survives", "terms"]);
    record2.set("atmosphericProfile", "museum-like/fragile/preserved/overclean/unnervingly-orderly");
    record2.set("timelinePosition", 3);
    record2.set("hiddenLines", ["Memory can be archived without being kept. The data survives. The texture does not.", "The shelves empty. The air grows light."]);
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
    record3.set("archiveEntry", "004");
    record3.set("title", "Terms of Unbeing");
    record3.set("status", "FORTHCOMING TRANSMISSION");
    record3.set("classification", "FORTHCOMING TRANSMISSION");
    record3.set("themes", ["identity", "bureaucracy", "memory", "loss", "existential erasure", "loyalty", "contracts", "dissolution", "administrative systems"]);
    record3.set("subjects", ["BUREAUCRACY", "IDENTITY", "MEMORY", "EXISTENTIAL SYSTEMS", "CONTRACTS"]);
    record3.set("locations", ["faust_residences"]);
    record3.set("relatedFieldNotes", ["004.25", "004.26"]);
    record3.set("relatedBooks", ["what_survives", "glass_bees"]);
    record3.set("atmosphericProfile", "contractual/bureaucratic/dissolving/overprocessed/administratively-hostile");
    record3.set("timelinePosition", 4);
    record3.set("hiddenLines", ["Each choice has a fee; each refusal risks foreclosure of the self.", "What he will die to keep."]);
  try {
    app.save(record3);
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