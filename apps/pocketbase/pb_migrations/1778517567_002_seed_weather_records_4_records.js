/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("weather_records");

  const record0 = new Record(collection);
    record0.set("coordinates", "{'lat': 65.9, 'lng': 21.8}");
    record0.set("conditions", "severe storm");
    record0.set("anomalies", "Unusual wave patterns. Tidal surge 2m above normal.");
    record0.set("relatedFieldNotes", ["004.44"]);
    record0.set("linguisticEvents", ["Nominative constructions reported in speech", "Multiple speakers reported interrupted sentences"]);
    record0.set("severity", 92);
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("coordinates", "{'lat': 65.9, 'lng': 21.8}");
    record1.set("conditions", "fog");
    record1.set("anomalies", "Visibility <50m. Fog persisted for 18 hours.");
    record1.set("relatedFieldNotes", ["004.24"]);
    record1.set("linguisticEvents", ["Silence protocols observed", "Dative constructions predominant"]);
    record1.set("severity", 78);
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("coordinates", "{'lat': 65.9, 'lng': 21.8}");
    record2.set("conditions", "winter conditions");
    record2.set("anomalies", "Temperature -15\u00b0C. Ice formation on harbor.");
    record2.set("relatedFieldNotes", ["004.23"]);
    record2.set("linguisticEvents", ["Hrimfall constructions observed", "Temporal slowing in speech patterns"]);
    record2.set("severity", 85);
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("coordinates", "{'lat': 65.9, 'lng': 21.8}");
    record3.set("conditions", "clear");
    record3.set("anomalies", "None recorded");
    record3.set("relatedFieldNotes", []);
    record3.set("linguisticEvents", []);
    record3.set("severity", 15);
  try {
    app.save(record3);
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