import { getCollection } from "astro:content";

export async function getFooterData() {
  const posts = await getCollection("blog");
  const tools = await getCollection("tools");
  const products = await getCollection("product");

  const latestPosts = [...posts]
    .sort(
      (a, b) =>
        b.data.pubDate.getTime() -
        a.data.pubDate.getTime()
    )
    .slice(0, 4);

  const popularTools = tools
    .filter((tool) => tool.data.popular)
    .slice(0, 4);

  const featuredProducts = products
    .filter((product) => product.data.featured)
    .slice(0, 4);

  return {
    latestPosts,
    popularTools: popularTools.length
      ? popularTools
      : tools.slice(0, 4),
    featuredProducts,
  };
}
