/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("field_notes");

  const existing = collection.fields.getByName("temporalAnomalies");
  if (existing) {
    if (existing.type === "json") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("temporalAnomalies"); // exists with wrong type, remove first
  }

  collection.fields.add(new JSONField({
    name: "temporalAnomalies",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("field_notes");
    collection.fields.removeByName("temporalAnomalies");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})