/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("field_notes");

  const existing = collection.fields.getByName("shadowRecordStatus");
  if (existing) {
    if (existing.type === "select") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("shadowRecordStatus"); // exists with wrong type, remove first
  }

  collection.fields.add(new SelectField({
    name: "shadowRecordStatus",
    required: false,
    values: ["NONE", "MUNICIPAL_HOLD", "ACCESS_RESTRICTED", "WITHHELD", "REMOVED_FOLLOWING_REVIEW"]
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("field_notes");
    collection.fields.removeByName("shadowRecordStatus");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})