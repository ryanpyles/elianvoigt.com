import React from 'react';
import { Helmet } from 'react-helmet';
import { ENTITY_RELATIONSHIPS } from '@/lib/relationshipMaps.js';

export default function KnowledgeGraphSchema() {
  try {
    if (!ENTITY_RELATIONSHIPS) {
      console.warn("[KnowledgeGraphSchema] ENTITY_RELATIONSHIPS is undefined.");
      return null;
    }

    const booksGraph = Object.entries(ENTITY_RELATIONSHIPS?.books || {}).map(([slug, data]) => ({
      "@type": "Book",
      "@id": `https://elianvoigt.com/archive/${slug}`,
      "name": slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      "author": { "@id": "https://elianvoigt.com/#person" },
      "publisher": { "@id": "https://elianvoigt.com/#organization" },
      "about": (data?.primaryThemes || []).map(theme => ({
        "@type": "Thing",
        "name": theme
      })),
      "genre": data?.genres || []
    }));

    const authorData = ENTITY_RELATIONSHIPS?.authors?.["Elian Voigt"];
    const publisherData = ENTITY_RELATIONSHIPS?.publishers?.["FORMÆTRIX Imprint"];

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://elianvoigt.com/#person",
          "name": "Elian Voigt",
          "url": "https://elianvoigt.com",
          "worksFor": { "@id": "https://elianvoigt.com/#organization" },
          "knowsAbout": authorData?.knowledgeAreas || []
        },
        {
          "@type": "Organization",
          "@id": "https://elianvoigt.com/#organization",
          "name": "FORMÆTRIX Imprint",
          "url": "https://formatrix.press",
          "founder": {
            "@type": "Person",
            "name": "Ryan J. Pyles"
          },
          "knowsAbout": publisherData?.knowledgeAreas || []
        },
        {
          "@type": "WebSite",
          "@id": "https://elianvoigt.com/#website",
          "name": "Elian Voigt — Literary Archive",
          "url": "https://elianvoigt.com",
          "publisher": { "@id": "https://elianvoigt.com/#organization" },
          "author": { "@id": "https://elianvoigt.com/#person" },
          "hasPart": booksGraph
        },
        ...(booksGraph || [])
      ]
    };

    return (
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    );
  } catch (error) {
    console.error("[KnowledgeGraphSchema] Error generating schema:", error);
    return null;
  }
}