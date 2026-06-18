/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("weather_records");

  const record0 = new Record(collection);
    record0.set("recordDate", "2025-06-15");
    record0.set("coordinates", "{'lat': 65.9, 'lng': 21.8}");
    record0.set("conditions", "unknown");
    record0.set("anomalies", "unobserved");
    record0.set("linguisticEvents", []);
    record0.set("severity", null);
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