/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("field_notes");

  const record0 = new Record(collection);
    record0.set("fieldNoteNumber", "002.11");
    record0.set("title", "FIELD NOTE 002.11 \u2014 On Administrative Silence");
    record0.set("classification", "INSTITUTIONAL PROTOCOLS");
    record0.set("status", "PARTIAL RECONSTRUCTION");
    record0.set("recoverySource", "Hospital Foundation Records");
    record0.set("excerpt", "Silence is not absence. It is a form of documentation.");
    record0.set("relatedBooks", ["what_survives"]);
    record0.set("relatedNotes", ["004.24", "004.25"]);
    record0.set("subjects", ["BUREAUCRACY", "SILENCE", "INSTITUTIONAL SYSTEMS"]);
    record0.set("translationStatus", "complete");
    record0.set("archiveDamage", "Multiple pages missing. Reconstruction based on cross-references.");
    record0.set("authorialCertainty", 65);
    record0.set("isPublic", true);
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
    record1.set("fieldNoteNumber", "003.08");
    record1.set("title", "FIELD NOTE 003.08 \u2014 Municipal Memory Degradation");
    record1.set("classification", "ARCHIVAL SYSTEMS");
    record1.set("status", "RECOVERED");
    record1.set("recoverySource", "Millfield Municipal Archive");
    record1.set("excerpt", "When records are simplified, what is lost is not information but texture.");
    record1.set("relatedBooks", ["glass_bees", "what_survives"]);
    record1.set("relatedNotes", ["004.03", "004.26"]);
    record1.set("subjects", ["MEMORY", "ARCHIVES", "EFFICIENCY"]);
    record1.set("translationStatus", "complete");
    record1.set("archiveDamage", "Original document shows signs of deliberate alteration.");
    record1.set("authorialCertainty", 78);
    record1.set("isPublic", true);
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
    record2.set("fieldNoteNumber", "004.03");
    record2.set("title", "FIELD NOTE 004.03 \u2014 Evidence Retention Protocols");
    record2.set("classification", "MUNICIPAL LEXICON");
    record2.set("status", "PARTIAL RECONSTRUCTION");
    record2.set("recoverySource", "Brynjav\u00edk Municipal Archive");
    record2.set("excerpt", "Evidence persists not through preservation but through careful non-completion.");
    record2.set("relatedBooks", ["declensions", "what_survives"]);
    record2.set("relatedNotes", ["002.11", "004.24"]);
    record2.set("subjects", ["EVIDENCE", "LANGUAGE", "INSTITUTIONAL SYSTEMS"]);
    record2.set("coordinates", "{'lat': 65.9, 'lng': 21.8, 'accuracy': 'approximate'}");
    record2.set("translationStatus", "partial");
    record2.set("archiveDamage", "Text partially water-damaged. Translation uncertain in sections 3-4.");
    record2.set("authorialCertainty", 72);
    record2.set("isPublic", true);
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
    record3.set("fieldNoteNumber", "004.17");
    record3.set("title", "FIELD NOTE 004.17 \u2014 Nominative Avoidance");
    record3.set("classification", "UNSAFE CONSTRUCTION EXAMPLES");
    record3.set("status", "RECOVERED");
    record3.set("recoverySource", "Brynjav\u00edk Municipal Archive");
    record3.set("excerpt", "The sea must never receive subjecthood.");
    record3.set("relatedBooks", ["declensions"]);
    record3.set("relatedNotes", ["004.18", "004.19", "004.25"]);
    record3.set("subjects", ["LANGUAGE", "GRAMMAR", "SAFETY PROTOCOLS"]);
    record3.set("coordinates", "{'lat': 65.9, 'lng': 21.8, 'accuracy': 'approximate'}");
    record3.set("translationStatus", "complete");
    record3.set("archiveDamage", "None visible. Original appears well-preserved.");
    record3.set("authorialCertainty", 95);
    record3.set("isPublic", true);
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
    record4.set("fieldNoteNumber", "004.18");
    record4.set("title", "FIELD NOTE 004.18 \u2014 Accusative Case");
    record4.set("classification", "CONDITIONAL USE");
    record4.set("status", "RECOVERED");
    record4.set("recoverySource", "Brynjav\u00edk Municipal Archive");
    record4.set("excerpt", "Direct impact is permitted. Invitation is not.");
    record4.set("relatedBooks", ["declensions"]);
    record4.set("relatedNotes", ["004.17", "004.19", "004.20"]);
    record4.set("subjects", ["LANGUAGE", "GRAMMAR"]);
    record4.set("coordinates", "{'lat': 65.9, 'lng': 21.8, 'accuracy': 'approximate'}");
    record4.set("translationStatus", "complete");
    record4.set("archiveDamage", "Handwritten annotations in margin. Translator identity unknown.");
    record4.set("authorialCertainty", 88);
    record4.set("isPublic", true);
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
    record5.set("fieldNoteNumber", "004.19");
    record5.set("title", "FIELD NOTE 004.19 \u2014 Dative Case");
    record5.set("classification", "EVERYDAY SPEECH");
    record5.set("status", "RECOVERED");
    record5.set("recoverySource", "Brynjav\u00edk Municipal Archive");
    record5.set("excerpt", "The safest case. Endurance, adjacency, shared burden.");
    record5.set("relatedBooks", ["declensions"]);
    record5.set("relatedNotes", ["004.17", "004.18", "004.20"]);
    record5.set("subjects", ["LANGUAGE", "GRAMMAR"]);
    record5.set("coordinates", "{'lat': 65.9, 'lng': 21.8, 'accuracy': 'approximate'}");
    record5.set("translationStatus", "complete");
    record5.set("archiveDamage", "Multiple versions of this entry exist. Inconsistencies preserved as recovered.");
    record5.set("authorialCertainty", 82);
    record5.set("isPublic", true);
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
    record6.set("fieldNoteNumber", "004.20");
    record6.set("title", "FIELD NOTE 004.20 \u2014 Genitive Case");
    record6.set("classification", "MEMORIAL RECORDS");
    record6.set("status", "RECOVERED");
    record6.set("recoverySource", "Brynjav\u00edk Municipal Archive");
    record6.set("excerpt", "Possession destabilized. Relationship preserved without metaphysical binding.");
    record6.set("relatedBooks", ["declensions"]);
    record6.set("relatedNotes", ["004.17", "004.19", "004.22"]);
    record6.set("subjects", ["LANGUAGE", "GRAMMAR", "FUNERARY PROTOCOLS"]);
    record6.set("coordinates", "{'lat': 65.9, 'lng': 21.8, 'accuracy': 'approximate'}");
    record6.set("translationStatus", "complete");
    record6.set("archiveDamage", "Handwriting suggests multiple hands. Dating uncertain.");
    record6.set("authorialCertainty", 76);
    record6.set("isPublic", true);
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
    record7.set("fieldNoteNumber", "004.21");
    record7.set("title", "FIELD NOTE 004.21 \u2014 Aflending (The Unbinding)");
    record7.set("classification", "RITUAL CASE");
    record7.set("status", "PARTIAL RECONSTRUCTION");
    record7.set("recoverySource", "Brynjav\u00edk Municipal Archive");
    record7.set("excerpt", "Preventing manifestation through grammatical incompletion.");
    record7.set("relatedBooks", ["declensions"]);
    record7.set("relatedNotes", ["004.17", "004.24", "004.31"]);
    record7.set("subjects", ["LANGUAGE", "GRAMMAR", "RITUAL PROTOCOLS"]);
    record7.set("coordinates", "{'lat': 65.9, 'lng': 21.8, 'accuracy': 'approximate'}");
    record7.set("translationStatus", "partial");
    record7.set("archiveDamage", "This entry was heavily redacted in original archive. Reconstruction based on three separate sources.");
    record7.set("authorialCertainty", 68);
    record7.set("isPublic", true);
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
    record8.set("fieldNoteNumber", "004.22");
    record8.set("title", "FIELD NOTE 004.22 \u2014 S\u00e6fangi (Sea-Holding)");
    record8.set("classification", "FUNERARY CASE");
    record8.set("status", "RECOVERED");
    record8.set("recoverySource", "Brynjav\u00edk Municipal Archive");
    record8.set("excerpt", "Binding names to place. Preventing dissolution.");
    record8.set("relatedBooks", ["declensions"]);
    record8.set("relatedNotes", ["004.20", "004.23", "004.26"]);
    record8.set("subjects", ["LANGUAGE", "GRAMMAR", "FUNERARY PROTOCOLS", "MEMORY"]);
    record8.set("coordinates", "{'lat': 65.9, 'lng': 21.8, 'accuracy': 'approximate'}");
    record8.set("translationStatus", "complete");
    record8.set("archiveDamage", "Original document shows signs of water damage and age. Multiple hands visible in margins.");
    record8.set("authorialCertainty", 85);
    record8.set("isPublic", true);
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
    record9.set("fieldNoteNumber", "004.23");
    record9.set("title", "FIELD NOTE 004.23 \u2014 Hrimfall (Winter-Falling)");
    record9.set("classification", "SEASONAL CASE");
    record9.set("status", "RECOVERED");
    record9.set("recoverySource", "Brynjav\u00edk Municipal Archive");
    record9.set("excerpt", "Protective suspension. Temporal slowing.");
    record9.set("relatedBooks", ["declensions"]);
    record9.set("relatedNotes", ["004.21", "004.24", "004.44"]);
    record9.set("subjects", ["LANGUAGE", "GRAMMAR", "SEASONAL PROTOCOLS"]);
    record9.set("coordinates", "{'lat': 65.9, 'lng': 21.8, 'accuracy': 'approximate'}");
    record9.set("translationStatus", "complete");
    record9.set("archiveDamage", "This entry appears in three different versions in the archive. Inconsistencies preserved as recovered.");
    record9.set("authorialCertainty", 79);
    record9.set("isPublic", true);
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
    record10.set("fieldNoteNumber", "004.24");
    record10.set("title", "FIELD NOTE 004.24 \u2014 Silence as Syntax");
    record10.set("classification", "STRUCTURAL FEATURE");
    record10.set("status", "RECOVERED");
    record10.set("recoverySource", "Brynjav\u00edk Municipal Archive");
    record10.set("excerpt", "Pauses are syntactic components. Silence is structurally active.");
    record10.set("relatedBooks", ["declensions"]);
    record10.set("relatedNotes", ["004.21", "004.25", "002.11"]);
    record10.set("subjects", ["LANGUAGE", "GRAMMAR", "SILENCE"]);
    record10.set("coordinates", "{'lat': 65.9, 'lng': 21.8, 'accuracy': 'approximate'}");
    record10.set("translationStatus", "complete");
    record10.set("archiveDamage", "Original document contains blank spaces. Unclear if intentional or damage.");
    record10.set("authorialCertainty", 71);
    record10.set("isPublic", true);
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
    record11.set("fieldNoteNumber", "004.25");
    record11.set("title", "FIELD NOTE 004.25 \u2014 Taboo Rules");
    record11.set("classification", "CRITICAL SAFETY RULES");
    record11.set("status", "RECOVERED");
    record11.set("recoverySource", "Brynjav\u00edk Municipal Archive");
    record11.set("excerpt", "Practical survival protocols. Not superstition.");
    record11.set("relatedBooks", ["declensions"]);
    record11.set("relatedNotes", ["004.17", "004.24", "004.31"]);
    record11.set("subjects", ["LANGUAGE", "GRAMMAR", "SAFETY PROTOCOLS"]);
    record11.set("coordinates", "{'lat': 65.9, 'lng': 21.8, 'accuracy': 'approximate'}");
    record11.set("translationStatus", "complete");
    record11.set("archiveDamage", "This entry was heavily annotated in original. Annotations partially illegible.");
    record11.set("authorialCertainty", 89);
    record11.set("isPublic", true);
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
    record12.set("fieldNoteNumber", "004.26");
    record12.set("title", "FIELD NOTE 004.26 \u2014 Structural Features");
    record12.set("classification", "LINGUISTIC PHILOSOPHY");
    record12.set("status", "PARTIAL RECONSTRUCTION");
    record12.set("recoverySource", "Brynjav\u00edk Municipal Archive");
    record12.set("excerpt", "How Vikam\u00e1l shapes reality.");
    record12.set("relatedBooks", ["declensions", "glass_bees", "terms"]);
    record12.set("relatedNotes", ["003.08", "004.03", "004.24"]);
    record12.set("subjects", ["LANGUAGE", "GRAMMAR", "PHILOSOPHY"]);
    record12.set("coordinates", "{'lat': 65.9, 'lng': 21.8, 'accuracy': 'approximate'}");
    record12.set("translationStatus", "complete");
    record12.set("archiveDamage", "This section appears to be a synthesis of multiple archival sources. Original authorship unclear.");
    record12.set("authorialCertainty", 64);
    record12.set("isPublic", true);
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
    record13.set("fieldNoteNumber", "004.31");
    record13.set("title", "FIELD NOTE 004.31 \u2014 Interrupted Constructions");
    record13.set("classification", "SPEECH PROTOCOLS");
    record13.set("status", "RECOVERED");
    record13.set("recoverySource", "Brynjav\u00edk Municipal Archive");
    record13.set("excerpt", "Incomplete sentences as containment mechanisms.");
    record13.set("relatedBooks", ["declensions"]);
    record13.set("relatedNotes", ["004.24", "004.25", "002.11"]);
    record13.set("subjects", ["LANGUAGE", "GRAMMAR", "SILENCE"]);
    record13.set("coordinates", "{'lat': 65.9, 'lng': 21.8, 'accuracy': 'approximate'}");
    record13.set("translationStatus", "complete");
    record13.set("archiveDamage", "Text partially obscured. Multiple interpretations possible.");
    record13.set("authorialCertainty", 73);
    record13.set("isPublic", true);
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
    record14.set("fieldNoteNumber", "004.44");
    record14.set("title", "FIELD NOTE 004.44 \u2014 Shoreline Errors During Winter");
    record14.set("classification", "WEATHER CORRELATION");
    record14.set("status", "UNDER RESTORATION");
    record14.set("recoverySource", "Brynjav\u00edk Municipal Archive");
    record14.set("excerpt", "Linguistic anomalies correlate with seasonal instability.");
    record14.set("relatedBooks", ["declensions"]);
    record14.set("relatedNotes", ["004.23", "004.25"]);
    record14.set("subjects", ["LANGUAGE", "WEATHER", "SEASONAL PROTOCOLS"]);
    record14.set("coordinates", "{'lat': 65.9, 'lng': 21.8, 'accuracy': 'approximate'}");
    record14.set("translationStatus", "partial");
    record14.set("archiveDamage", "Large sections missing. Reconstruction speculative.");
    record14.set("authorialCertainty", 52);
    record14.set("isPublic", true);
  try {
    app.save(record14);
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