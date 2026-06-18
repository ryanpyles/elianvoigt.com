/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translations");

  const record0 = new Record(collection);
    record0.set("originalText", "S\u00e6fangi");
    record0.set("translatedText", "Sea-Holding");
    record0.set("certainty", 85);
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
    record1.set("originalText", "S\u00e6fangi");
    record1.set("translatedText", "Held Within the Sea");
    record1.set("certainty", 82);
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
    record2.set("originalText", "S\u00e6fangi");
    record2.set("translatedText", "Retention Against Drowning");
    record2.set("certainty", 72);
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
    record3.set("originalText", "S\u00e6fangi");
    record3.set("translatedText", "Binding to the Sea");
    record3.set("certainty", 68);
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