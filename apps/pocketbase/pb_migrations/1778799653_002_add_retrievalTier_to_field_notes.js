/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("field_notes");

  const existing = collection.fields.getByName("retrievalTier");
  if (existing) {
    if (existing.type === "select") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("retrievalTier"); // exists with wrong type, remove first
  }

  collection.fields.add(new SelectField({
    name: "retrievalTier",
    required: false,
    values: ["VERIFIED_RETRIEVAL", "PARTIAL_RECOVERY", "UNSTABLE_SEQUENCE", "REFERENTIAL_CONFLICT"]
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("field_notes");
    collection.fields.removeByName("retrievalTier");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})