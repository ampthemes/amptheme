// src/lib/home-schema.ts

import { SITE } from "./site";

const siteUrl = SITE.url("/");
const imageUrl = SITE.imageUrl(SITE.image);

export const homeSchema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      "name": SITE.name,
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "@id": `${imageUrl}#logo`,
        "url": imageUrl,
        "contentUrl": imageUrl,
        "width": 1200,
        "height": 630
      },
      "image": {
        "@id": `${imageUrl}#image`
      },
      "description": SITE.description,
      "knowsAbout": [
        "Artificial Intelligence",
        "SEO",
        "AI Tools",
        "Automation",
        "Web Development"
      ],
      "sameAs": [
        "https://www.youtube.com/@ai-mr-ferdy",
        "https://medium.com/@aimrferdy",
        "https://github.com/aimrferdy",
        "https://web.facebook.com/groups/aimrferdyofficial",
        "https://heylink.me/mrferdy"
      ]
    },

    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      "url": siteUrl,
      "name": SITE.title,
      "alternateName": SITE.name,
      "description": SITE.description,
      "publisher": {
        "@id": `${siteUrl}#organization`
      },
      "inLanguage": SITE.locale
    },

    {
      "@type": "WebPage",
      "@id": `${siteUrl}#webpage`,
      "url": siteUrl,
      "name": SITE.title,
      "description": SITE.description,
      "isPartOf": {
        "@id": `${siteUrl}#website`
      },
      "publisher": {
        "@id": `${siteUrl}#organization`
      },
      "primaryImageOfPage": {
        "@id": `${imageUrl}#image`
      },
      "about": {
        "@id": `${siteUrl}#organization`
      },
      "inLanguage": SITE.locale
    },

    {
      "@type": "ImageObject",
      "@id": `${imageUrl}#image`,
      "url": imageUrl,
      "contentUrl": imageUrl,
      "caption": SITE.name,
      "width": 1200,
      "height": 630
    }
  ]
};
