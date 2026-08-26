export const SITE = {
  name: "AI Mr Ferdy",

  title: "AI Mr Ferdy | Website Resmi Platform AI Indonesia",

  description:
    "Website resmi AI Mr Ferdy. Akses platform AI Indonesia untuk produktivitas digital, pembuatan konten, dan solusi otomatisasi modern.",

  author: "AI Mr Ferdy",

  locale: "id-ID",

  themeColor: "#0b0f19",

  image: "/images/og-cover.jpg",

  baseUrl: import.meta.env.SITE,

  url(path = "") {
    return `${this.baseUrl}/${path}`.replace(/([^:]\/)\/+/g, "$1");
  },

  product(slug = "") {
    return this.url(`product/${slug}`);
  },

  tools(slug = "") {
    return this.url(`tools/${slug}`);
  },

  blog(slug = "") {
    return this.url(`blog/${slug}`);
  },

  blogAmp(slug = "") {
    return this.url(`blog/${slug}/amp`);
  },

  imageUrl(path = "") {
    return this.url(path);
  },

  social: {
    twitter: "@ai_mr_ferdy",
    github: "https://github.com/aimrferdy",
  },
};
