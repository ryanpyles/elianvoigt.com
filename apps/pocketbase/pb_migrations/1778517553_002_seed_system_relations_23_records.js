/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("system_relations");

  const record0 = new Record(collection);
    record0.set("source", "declensions");
    record0.set("target", "language_instability");
    record0.set("relation", "thematic_core");
    record0.set("confidence", 100);
    record0.set("hidden", false);
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
    record1.set("source", "declensions");
    record1.set("target", "004.17");
    record1.set("relation", "primary_source");
    record1.set("confidence", 95);
    record1.set("hidden", false);
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
    record2.set("source", "declensions");
    record2.set("target", "what_survives");
    record2.set("relation", "thematic_echo");
    record2.set("confidence", 75);
    record2.set("hidden", false);
    record2.set("description", "Both explore how language/evidence persists after loss");
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
    record3.set("source", "what_survives");
    record3.set("target", "evidentiary_persistence");
    record3.set("relation", "thematic_core");
    record3.set("confidence", 100);
    record3.set("hidden", false);
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
    record4.set("source", "what_survives");
    record4.set("target", "002.11");
    record4.set("relation", "primary_source");
    record4.set("confidence", 90);
    record4.set("hidden", false);
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
    record5.set("source", "what_survives");
    record5.set("target", "glass_bees");
    record5.set("relation", "institutional_systems");
    record5.set("confidence", 80);
    record5.set("hidden", true);
    record5.set("description", "Both examine how institutions simplify/erase memory");
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
    record6.set("source", "glass_bees");
    record6.set("target", "municipal_memory_simplification");
    record6.set("relation", "thematic_core");
    record6.set("confidence", 100);
    record6.set("hidden", false);
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
    record7.set("source", "glass_bees");
    record7.set("target", "003.08");
    record7.set("relation", "primary_source");
    record7.set("confidence", 92);
    record7.set("hidden", false);
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.set("source", "glass_bees");
    record8.set("target", "terms");
    record8.set("relation", "bureaucratic_erasure");
    record8.set("confidence", 70);
    record8.set("hidden", true);
    record8.set("description", "Both explore how systems erase identity");
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.set("source", "terms");
    record9.set("target", "bureaucratic_identity_erosion");
    record9.set("relation", "thematic_core");
    record9.set("confidence", 100);
    record9.set("hidden", false);
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record10 = new Record(collection);
    record10.set("source", "terms");
    record10.set("target", "004.25");
    record10.set("relation", "thematic_connection");
    record10.set("confidence", 65);
    record10.set("hidden", true);
    record10.set("description", "Contracts as linguistic constraints");
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.set("source", "004.17");
    record11.set("target", "004.18");
    record11.set("relation", "sequential");
    record11.set("confidence", 100);
    record11.set("hidden", false);
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    record12.set("source", "004.18");
    record12.set("target", "004.19");
    record12.set("relation", "sequential");
    record12.set("confidence", 100);
    record12.set("hidden", false);
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    record13.set("source", "004.19");
    record13.set("target", "004.20");
    record13.set("relation", "sequential");
    record13.set("confidence", 100);
    record13.set("hidden", false);
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record14 = new Record(collection);
    record14.set("source", "004.20");
    record14.set("target", "004.21");
    record14.set("relation", "sequential");
    record14.set("confidence", 100);
    record14.set("hidden", false);
  try {
    app.save(record14);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record15 = new Record(collection);
    record15.set("source", "004.21");
    record15.set("target", "004.22");
    record15.set("relation", "sequential");
    record15.set("confidence", 100);
    record15.set("hidden", false);
  try {
    app.save(record15);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record16 = new Record(collection);
    record16.set("source", "004.22");
    record16.set("target", "004.23");
    record16.set("relation", "sequential");
    record16.set("confidence", 100);
    record16.set("hidden", false);
  try {
    app.save(record16);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record17 = new Record(collection);
    record17.set("source", "004.23");
    record17.set("target", "004.24");
    record17.set("relation", "sequential");
    record17.set("confidence", 100);
    record17.set("hidden", false);
  try {
    app.save(record17);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record18 = new Record(collection);
    record18.set("source", "004.24");
    record18.set("target", "004.25");
    record18.set("relation", "sequential");
    record18.set("confidence", 100);
    record18.set("hidden", false);
  try {
    app.save(record18);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record19 = new Record(collection);
    record19.set("source", "004.25");
    record19.set("target", "004.26");
    record19.set("relation", "sequential");
    record19.set("confidence", 100);
    record19.set("hidden", false);
  try {
    app.save(record19);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record20 = new Record(collection);
    record20.set("source", "002.11");
    record20.set("target", "004.24");
    record20.set("relation", "thematic_parallel");
    record20.set("confidence", 75);
    record20.set("hidden", false);
    record20.set("description", "Both explore silence as active force");
  try {
    app.save(record20);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record21 = new Record(collection);
    record21.set("source", "003.08");
    record21.set("target", "004.26");
    record21.set("relation", "thematic_parallel");
    record21.set("confidence", 80);
    record21.set("hidden", false);
    record21.set("description", "Both examine how systems shape reality");
  try {
    app.save(record21);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record22 = new Record(collection);
    record22.set("source", "004.03");
    record22.set("target", "002.11");
    record22.set("relation", "institutional_echo");
    record22.set("confidence", 70);
    record22.set("hidden", true);
    record22.set("description", "Both about evidence/silence in bureaucratic systems");
  try {
    app.save(record22);
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