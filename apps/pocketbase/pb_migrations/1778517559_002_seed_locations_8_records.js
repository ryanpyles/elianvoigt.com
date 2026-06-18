/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("locations");

  const record0 = new Record(collection);
    record0.set("name", "Brynjav\u00edk");
    record0.set("coordinates", "{'lat': 65.9, 'lng': 21.8, 'accuracy': 'approximate'}");
    record0.set("description", "Isolated Icelandic village. Primary setting of Declensions of Dark Water.");
    record0.set("classification", "COASTAL SETTLEMENT");
    record0.set("weatherProfile", "Storms, fog, extreme cold, unpredictable tides");
    record0.set("instabilityLevel", 85);
    record0.set("relatedBooks", ["declensions"]);
    record0.set("relatedFieldNotes", ["004.17", "004.18", "004.19", "004.20", "004.21", "004.22", "004.23", "004.24", "004.25", "004.26"]);
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
    record1.set("name", "North Coast");
    record1.set("coordinates", "{'lat': 65.95, 'lng': 21.7, 'accuracy': 'approximate'}");
    record1.set("description", "Dangerous shoreline. Site of recurring incidents.");
    record1.set("classification", "HAZARD ZONE");
    record1.set("weatherProfile", "Constant wind, unpredictable waves, fog");
    record1.set("instabilityLevel", 92);
    record1.set("relatedBooks", ["declensions"]);
    record1.set("relatedFieldNotes", ["004.44"]);
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
    record2.set("name", "Harbor District");
    record2.set("coordinates", "{'lat': 65.88, 'lng': 21.82, 'accuracy': 'approximate'}");
    record2.set("description", "Central administrative and maritime hub.");
    record2.set("classification", "ADMINISTRATIVE CENTER");
    record2.set("weatherProfile", "Sheltered but subject to tidal anomalies");
    record2.set("instabilityLevel", 65);
    record2.set("relatedBooks", ["declensions"]);
    record2.set("relatedFieldNotes", ["004.22"]);
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
    record3.set("name", "Hospital Foundation");
    record3.set("coordinates", null);
    record3.set("description", "Medical institution at center of What Survives Is Proof.");
    record3.set("classification", "INSTITUTIONAL SITE");
    record3.set("weatherProfile", "Unknown");
    record3.set("instabilityLevel", 78);
    record3.set("relatedBooks", ["what_survives"]);
    record3.set("relatedFieldNotes", ["002.11", "004.03"]);
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.set("name", "Archive District");
    record4.set("coordinates", null);
    record4.set("description", "Administrative records center.");
    record4.set("classification", "INSTITUTIONAL SITE");
    record4.set("weatherProfile", "Unknown");
    record4.set("instabilityLevel", 45);
    record4.set("relatedBooks", ["what_survives"]);
    record4.set("relatedFieldNotes", ["002.11", "003.08"]);
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.set("name", "Millfield");
    record5.set("coordinates", null);
    record5.set("description", "Town where glass bees arrive. Setting of Summer of the Glass Bees.");
    record5.set("classification", "MUNICIPAL SETTLEMENT");
    record5.set("weatherProfile", "Seasonal, temperate");
    record5.set("instabilityLevel", 72);
    record5.set("relatedBooks", ["glass_bees"]);
    record5.set("relatedFieldNotes", ["003.08", "004.03"]);
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.set("name", "Municipal Archive");
    record6.set("coordinates", null);
    record6.set("description", "Central records repository in Millfield.");
    record6.set("classification", "INSTITUTIONAL SITE");
    record6.set("weatherProfile", "Controlled");
    record6.set("instabilityLevel", 55);
    record6.set("relatedBooks", ["glass_bees"]);
    record6.set("relatedFieldNotes", ["003.08"]);
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.set("name", "Faust Residences");
    record7.set("coordinates", null);
    record7.set("description", "Luxury apartment building. Setting of Terms of Unbeing.");
    record7.set("classification", "INSTITUTIONAL SITE");
    record7.set("weatherProfile", "Unknown");
    record7.set("instabilityLevel", 88);
    record7.set("relatedBooks", ["terms"]);
    record7.set("relatedFieldNotes", ["004.25", "004.26"]);
  try {
    app.save(record7);
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