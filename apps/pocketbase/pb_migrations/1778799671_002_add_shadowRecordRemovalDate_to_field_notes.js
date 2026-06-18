/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("field_notes");

  const existing = collection.fields.getByName("shadowRecordRemovalDate");
  if (existing) {
    if (existing.type === "date") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("shadowRecordRemovalDate"); // exists with wrong type, remove first
  }

  collection.fields.add(new DateField({
    name: "shadowRecordRemovalDate",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("field_notes");
    collection.fields.removeByName("shadowRecordRemovalDate");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})