/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("system_relations");

  const record0 = new Record(collection);
    record0.set("source", "004.31");
    record0.set("target", "004.31");
    record0.set("relation", "cross-reference");
    record0.set("hidden", true);
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