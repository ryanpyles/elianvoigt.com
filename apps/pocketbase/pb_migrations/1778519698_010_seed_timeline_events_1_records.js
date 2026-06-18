/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("timeline_events");

  const record0 = new Record(collection);
    record0.set("eventDate", null);
    record0.set("title", "Eighth Declension Incident");
    record0.set("classification", "RESTRICTED CIRCULATION");
    record0.set("summary", "[REDACTED]");
    record0.set("relatedEntries", []);
    record0.set("confidence", 0);
    record0.set("redacted", true);
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