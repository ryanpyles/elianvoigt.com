/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("field_notes", "fieldNoteNumber='004.17'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("classification", "{'primary': 'UNSAFE CONSTRUCTION EXAMPLES', 'archive_variant': 'PARTIAL RECONSTRUCTION', 'timeline_variant': 'MUNICIPAL LEXICON'}");
    try {
      app.save(record);
    } catch (e) {
      if (e.message.includes("Value must be unique")) {
        console.log("Record with unique value already exists, skipping");
      } else {
        throw e;
      }
    }
  }
}, (app) => {
  // Rollback: original values not stored, manual restore needed
})