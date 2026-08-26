function clean(value = "") {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();
}

export function generateFaqSchema(html = "") {
  const faqBlocks = [
    ...html.matchAll(
      /<div\b[^>]*class=["'][^"']*\bfaq-item\b[^"']*["'][^>]*>([\s\S]*?)<\/div>/gi
    ),
    ...html.matchAll(
      /<details\b[^>]*class=["'][^"']*\bfaq-item\b[^"']*["'][^>]*>([\s\S]*?)<\/details>/gi
    )
  ];

  const unique = new Set<string>();

  const entities = faqBlocks
    .map((block) => {
      const source = block[1];

      const question =
        source.match(/<h3\b[^>]*>([\s\S]*?)<\/h3>/i)?.[1] ||
        source.match(/<summary\b[^>]*>([\s\S]*?)<\/summary>/i)?.[1] ||
        "";

      const answer =
        source.match(/<p\b[^>]*>([\s\S]*?)<\/p>/i)?.[1] ||
        source.match(
          /<div\b[^>]*class=["'][^"']*\banswer\b[^"']*["'][^>]*>([\s\S]*?)<\/div>/i
        )?.[1] ||
        "";

      const q = clean(question);
      const a = clean(answer);

      if (!q || !a) {
        return null;
      }

      const key = q.toLowerCase();

      if (unique.has(key)) {
        return null;
      }

      unique.add(key);

      return {
        "@type": "Question",
        "name": q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": a
        }
      };
    })
    .filter(
      (
        item
      ): item is {
        "@type": "Question";
        name: string;
        acceptedAnswer: {
          "@type": "Answer";
          text: string;
        };
      } => item !== null
    );

  if (!entities.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": entities
  };
}
