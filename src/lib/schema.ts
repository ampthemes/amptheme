
import { SITE } from "./site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url()}#organization`,
  name: SITE.name,
  url: SITE.url(),
  logo: SITE.imageUrl(SITE.image),
  image: SITE.imageUrl(SITE.image)
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url()}#website`,
  name: SITE.title,
  url: SITE.url(),
  publisher: {
    "@id": `${SITE.url()}#organization`
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url("search")}?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export function articleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: SITE.imageUrl(post.image || SITE.image),
    author: {
      "@type": "Person",
      name: SITE.author
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name
    },
    mainEntityOfPage: SITE.blog(post.slug)
  };
}
