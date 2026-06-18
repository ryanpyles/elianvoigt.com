/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("field_notes");

  const existing = collection.fields.getByName("shadowRecordReason");
  if (existing) {
    if (existing.type === "text") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("shadowRecordReason"); // exists with wrong type, remove first
  }

  collection.fields.add(new TextField({
    name: "shadowRecordReason",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("field_notes");
    collection.fields.removeByName("shadowRecordReason");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})