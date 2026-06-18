import React from 'react';
import { Helmet } from 'react-helmet';

export default function ArticleSchema({ headline, description, author, datePublished, dateModified, articleBody, keywords, isPartOf }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "author": {
      "@type": "Organization",
      "name": author || "FORMÆTRIX Imprint"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FORMÆTRIX Imprint"
    },
    "datePublished": datePublished || new Date().toISOString(),
    "dateModified": dateModified || datePublished || new Date().toISOString(),
    "keywords": keywords ? keywords.join(", ") : "",
    "articleBody": articleBody || description
  };

  if (isPartOf) {
    schema.isPartOf = {
      "@type": "CreativeWork",
      "name": isPartOf.name,
      "url": `https://elianvoigt.com${isPartOf.url}`
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}