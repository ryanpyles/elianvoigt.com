/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("locations", "name='Brynjavík'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("coordinates", "{'primary': {'lat': 65.9, 'lng': 21.8}, 'variant_weather': {'lat': 65.92, 'lng': 21.8}, 'variant_offshore': {'lat': 65.88, 'lng': 21.75}, 'variant_archive': {'lat': 65.95, 'lng': 21.8}}");
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