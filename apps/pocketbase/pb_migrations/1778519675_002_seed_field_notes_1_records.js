/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("field_notes");

  const record0 = new Record(collection);
    record0.set("fieldNoteNumber", "004.31");
    record0.set("title", "[RESTRICTED]");
    record0.set("status", "INACCESSIBLE");
    record0.set("isPublic", false);
  try {
    app.save(record0);
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