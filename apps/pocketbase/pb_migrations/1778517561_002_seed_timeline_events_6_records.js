/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("timeline_events");

  const record0 = new Record(collection);
    record0.set("title", "Shoreline Collapse Report");
    record0.set("classification", "INCIDENT RECORD");
    record0.set("summary", "Structural failure along north coast. Linguistic anomalies noted in preceding weeks.");
    record0.set("relatedEntries", ["declensions", "004.44"]);
    record0.set("confidence", 85);
    record0.set("redacted", false);
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
    record1.set("title", "Municipal Archive Simplification Order");
    record1.set("classification", "ADMINISTRATIVE DIRECTIVE");
    record1.set("summary", "Directive to streamline municipal records. Implementation begins.");
    record1.set("relatedEntries", ["glass_bees", "003.08"]);
    record1.set("confidence", 72);
    record1.set("redacted", true);
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
    record2.set("title", "Third Harbor Incident");
    record2.set("classification", "INCIDENT RECORD");
    record2.set("summary", "Unexplained event at harbor. Details unclear. Archive entry incomplete.");
    record2.set("relatedEntries", ["declensions", "004.22"]);
    record2.set("confidence", 45);
    record2.set("redacted", true);
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
    record3.set("title", "Foundation Denial Audit");
    record3.set("classification", "INSTITUTIONAL INVESTIGATION");
    record3.set("summary", "Investigation into patient record discrepancies. Findings disputed.");
    record3.set("relatedEntries", ["what_survives", "002.11"]);
    record3.set("confidence", 68);
    record3.set("redacted", true);
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
    record4.set("title", "Glass Bee Arrival (Early)");
    record4.set("classification", "ENVIRONMENTAL PHENOMENON");
    record4.set("summary", "Translucent glass bees arrive earlier than historical precedent.");
    record4.set("relatedEntries", ["glass_bees", "003.08"]);
    record4.set("confidence", 92);
    record4.set("redacted", false);
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
    record5.set("title", "Ledger Standardization Initiative");
    record5.set("classification", "ADMINISTRATIVE DIRECTIVE");
    record5.set("summary", "Municipal records converted to standardized digital format. Texture loss noted.");
    record5.set("relatedEntries", ["glass_bees", "003.08"]);
    record5.set("confidence", 78);
    record5.set("redacted", false);
  try {
    app.save(record5);
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