/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("books");

  const record0 = new Record(collection);
    record0.set("title", "What Survives Is Proof");
    record0.set("slug", "what-survives-is-proof");
    record0.set("status", "RECONSTRUCTION REQUIRED");
    record0.set("classification", "ARCHIVE FRAGMENT");
    record0.set("excerpt", "[Original content unavailable - record requires restoration]");
    record0.set("blurb", null);
    record0.set("longline", null);
    record0.set("relatedFieldNotes", null);
    record0.set("relatedBooks", null);
    record0.set("subtitle", null);
    record0.set("archiveEntry", null);
    record0.set("themes", null);
    record0.set("subjects", null);
    record0.set("locations", null);
    record0.set("timelinePosition", null);
    record0.set("publicationDate", null);
    record0.set("editions", null);
    record0.set("coverImage", null);
    record0.set("atmosphericProfile", null);
    record0.set("metadataFragments", null);
    record0.set("hiddenLines", null);
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