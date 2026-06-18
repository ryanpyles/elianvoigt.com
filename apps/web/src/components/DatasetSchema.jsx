import React from 'react';
import { Helmet } from 'react-helmet';

export default function DatasetSchema({ name, description, url, keywords }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": name,
    "description": description,
    "url": `https://elianvoigt.com${url}`,
    "creator": {
      "@type": "Organization",
      "name": "FORMÆTRIX Imprint"
    },
    "distribution": {
      "@type": "DataDownload",
      "encodingFormat": "text/html",
      "contentUrl": `https://elianvoigt.com${url}`
    },
    "keywords": keywords,
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://elianvoigt.com/"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}