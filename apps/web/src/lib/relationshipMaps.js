export const ENTITY_RELATIONSHIPS = {
  authors: {
    "Elian Voigt": {
      type: "Person",
      publisher: "FORMÆTRIX Imprint",
      books: ["declensions-of-dark-water", "summer-of-the-glass-bees", "terms-of-unbeing", "what-survives-is-proof"],
      themes: ["Language", "Grief", "Institutions", "Memory", "Translation", "Coastal-Records"],
      knowledgeAreas: ["Literary Fiction", "Literary Horror", "Speculative Fiction", "Archives"]
    }
  },
  publishers: {
    "FORMÆTRIX Imprint": {
      type: "Organization",
      founder: "Ryan J. Pyles",
      publications: ["declensions-of-dark-water", "summer-of-the-glass-bees", "terms-of-unbeing", "what-survives-is-proof"],
      knowledgeAreas: ["Experimental Literature", "Systemic Horror", "Archival Systems"]
    }
  },
  books: {
    "declensions-of-dark-water": {
      author: "Elian Voigt",
      publisher: "FORMÆTRIX Imprint",
      genres: ["Literary Fiction", "Coastal Horror"],
      primaryThemes: ["Language", "Translation", "Coastal-Records"],
      secondaryThemes: ["Grief", "Ritual", "Institutions"],
      locations: ["Brynjavík", "Vestfirðir", "Coastal Regions"],
      classifications: ["COASTAL SURVEY", "LINGUISTIC HOLD", "TRANSLATION VARIANT"],
      relatedBooks: ["summer-of-the-glass-bees"]
    },
    "summer-of-the-glass-bees": {
      author: "Elian Voigt",
      publisher: "FORMÆTRIX Imprint",
      genres: ["Speculative Fiction", "Municipal Horror"],
      primaryThemes: ["Institutions", "Memory", "Coastal-Records"],
      secondaryThemes: ["Grief", "Erasure", "Municipal Systems"],
      locations: ["Millfield", "Municipal Sites", "Coastal Regions"],
      classifications: ["MUNICIPAL RECORD", "CONTAINMENT NOTICE", "PRESERVATION LOG"],
      relatedBooks: ["terms-of-unbeing", "declensions-of-dark-water"]
    },
    "terms-of-unbeing": {
      author: "Elian Voigt",
      publisher: "FORMÆTRIX Imprint",
      genres: ["Literary Horror", "Bureaucratic Fiction"],
      primaryThemes: ["Institutions", "Identity", "Memory"],
      secondaryThemes: ["Contracts", "Grief"],
      locations: ["Faust Residences", "Institutional Sites"],
      classifications: ["MUNICIPAL RECORD", "PRESERVATION LOG", "EVIDENTIARY TRANSCRIPT"],
      relatedBooks: ["summer-of-the-glass-bees", "what-survives-is-proof"]
    },
    "what-survives-is-proof": {
      author: "Elian Voigt",
      publisher: "FORMÆTRIX Imprint",
      genres: ["Literary Fiction", "Forensic Horror"],
      primaryThemes: ["Grief", "Memory"],
      secondaryThemes: ["Evidence", "Institutional Erasure"],
      locations: ["Midwestern University Archive", "Institutional Sites"],
      classifications: ["PRESERVATION LOG", "ARCHIVAL FRAGMENT", "EVIDENTIARY TRANSCRIPT"],
      relatedBooks: ["terms-of-unbeing"]
    }
  },
  themes: {
    "Language": {
      primaryBooks: ["declensions-of-dark-water"],
      relatedThemes: [
        { theme: "Grief", explanation: "Linguistic loss and untranslatable absence." },
        { theme: "Translation", explanation: "Structural breach across borders." }
      ],
      classifications: ["LINGUISTIC HOLD", "TRANSLATION VARIANT", "TRANSCRIPTION ANOMALY"],
      locations: ["Brynjavík", "Coastal Regions"]
    },
    "Grief": {
      primaryBooks: ["what-survives-is-proof", "summer-of-the-glass-bees"],
      relatedThemes: [
        { theme: "Memory", explanation: "Flattening of historical continuity." },
        { theme: "Institutions", explanation: "Procedural compression of emotional mass." }
      ],
      classifications: ["PRESERVATION LOG", "WITNESS ACCOUNT", "ARCHIVAL FRAGMENT"],
      locations: ["Midwestern University Archive", "Institutional Sites"]
    },
    "Institutions": {
      primaryBooks: ["terms-of-unbeing", "summer-of-the-glass-bees"],
      relatedThemes: [
        { theme: "Memory", explanation: "Sterilization of civic history." },
        { theme: "Language", explanation: "Bureaucratic containment via syntax." }
      ],
      classifications: ["MUNICIPAL RECORD", "CONTAINMENT NOTICE"],
      locations: ["Millfield", "Faust Residences", "Institutional Sites"]
    },
    "Memory": {
      primaryBooks: ["what-survives-is-proof", "summer-of-the-glass-bees", "terms-of-unbeing"],
      relatedThemes: [
        { theme: "Grief", explanation: "Memory distortion acting as a localized gravity well." },
        { theme: "Institutions", explanation: "Administrative erasure of the past." },
        { theme: "Language", explanation: "Linguistic loss through memory flattening." }
      ],
      classifications: ["PRESERVATION LOG", "ARCHIVAL FRAGMENT", "MUNICIPAL RECORD"],
      locations: ["Institutional Sites", "Millfield", "Midwestern University Archive"]
    },
    "Translation": {
      primaryBooks: ["declensions-of-dark-water"],
      relatedThemes: [
        { theme: "Language", explanation: "Semantic fracture in hostile environments." },
        { theme: "Coastal-Records", explanation: "Salt-degraded syntax." },
        { theme: "Memory", explanation: "Translation loss as memory loss." }
      ],
      classifications: ["TRANSLATION VARIANT", "LINGUISTIC HOLD", "TRANSCRIPTION ANOMALY"],
      locations: ["Brynjavík", "Coastal Regions"]
    },
    "Coastal-Records": {
      primaryBooks: ["declensions-of-dark-water", "summer-of-the-glass-bees"],
      relatedThemes: [
        { theme: "Translation", explanation: "Weather anomaly intersecting with syntax." },
        { theme: "Language", explanation: "Grammar of the drowned." },
        { theme: "Institutions", explanation: "Municipal control of coastal space." }
      ],
      classifications: ["COASTAL SURVEY", "SITE RECORD", "FIELD NOTE"],
      locations: ["Coastal Regions", "Vestfirðir", "Brynjavík"]
    }
  },
  locations: {
    "Brynjavík": { relatedBooks: ["declensions-of-dark-water"], themes: ["Language", "Translation", "Coastal-Records"], classifications: ["COASTAL SURVEY", "FIELD NOTE"] },
    "Coastal Regions": { relatedBooks: ["declensions-of-dark-water", "summer-of-the-glass-bees"], themes: ["Coastal-Records", "Translation"], classifications: ["SITE RECORD", "COASTAL SURVEY"] },
    "Municipal Sites": { relatedBooks: ["summer-of-the-glass-bees", "terms-of-unbeing"], themes: ["Institutions", "Memory"], classifications: ["MUNICIPAL RECORD", "CONTAINMENT NOTICE"] },
    "Institutional Sites": { relatedBooks: ["terms-of-unbeing", "what-survives-is-proof"], themes: ["Institutions", "Grief", "Memory"], classifications: ["PRESERVATION LOG", "EVIDENTIARY TRANSCRIPT"] }
  },
  classifications: {
    "ARCHIVAL FRAGMENT": { tier: 2, relatedThemes: ["Memory", "Grief"], books: ["what-survives-is-proof"] },
    "FIELD NOTE": { tier: 1, relatedThemes: ["Coastal-Records", "Translation", "Language"], books: ["declensions-of-dark-water"] },
    "MUNICIPAL RECORD": { tier: 1, relatedThemes: ["Institutions", "Memory", "Coastal-Records"], books: ["summer-of-the-glass-bees", "terms-of-unbeing"] },
    "LINGUISTIC HOLD": { tier: 3, relatedThemes: ["Language", "Translation"], books: ["declensions-of-dark-water"] },
    "TRANSLATION VARIANT": { tier: 3, relatedThemes: ["Translation", "Language"], books: ["declensions-of-dark-water"] },
    "COASTAL SURVEY": { tier: 1, relatedThemes: ["Coastal-Records"], books: ["declensions-of-dark-water"] },
    "PRESERVATION LOG": { tier: 2, relatedThemes: ["Memory", "Grief", "Institutions"], books: ["what-survives-is-proof", "summer-of-the-glass-bees", "terms-of-unbeing"] },
    "CONTAINMENT NOTICE": { tier: 1, relatedThemes: ["Institutions"], books: ["summer-of-the-glass-bees"] },
    "EVIDENTIARY TRANSCRIPT": { tier: 1, relatedThemes: ["Grief", "Institutions"], books: ["what-survives-is-proof", "terms-of-unbeing"] }
  },
  restrictedSystems: {
    "POST-EIGHTH MATERIAL": { status: "RESTRICTED", definitionAvailability: false, implications: "Total semantic collapse." },
    "THE NORTHERN VARIANTS": { status: "UNDER REVIEW", definitionAvailability: false, implications: "Geographical linguistic hazards." },
    "THE EIGHTH REVIEW": { status: "RESTRICTED", definitionAvailability: false, implications: "Final custodial erasure." },
    "OVERLAY CONDITIONS": { status: "PARTIALLY AVAILABLE", definitionAvailability: true, implications: "Unresolved ontological paradoxes." }
  }
};

export const getEntityRelationship = (category, key) => {
  if (!ENTITY_RELATIONSHIPS || !ENTITY_RELATIONSHIPS[category]) {
    console.warn(`[relationshipMaps] Category '${category}' not found.`);
    return null;
  }
  if (!ENTITY_RELATIONSHIPS[category][key]) {
    console.warn(`[relationshipMaps] Key '${key}' not found in category '${category}'.`);
    return null;
  }
  return ENTITY_RELATIONSHIPS[category][key];
};