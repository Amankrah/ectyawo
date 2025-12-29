import { getLatestPosts } from "@/lib/sanity";
import { getServerSideSitemap } from "next-sitemap";

export async function GET() {
  try {
    // Fetch all blog posts
    const posts = await getLatestPosts(1000);

    // Generate sitemap entries for blog posts
    const fields = posts.map((post) => ({
      loc: `https://ectsyawo.com/insights/${post.slug}`,
      lastmod: new Date(post.publishedAt).toISOString(),
      changefreq: 'monthly' as const,
      priority: 0.8,
    }));

    return getServerSideSitemap(fields);
  } catch (error) {
    console.error('Error generating server sitemap:', error);
    // Return empty sitemap on error
    return getServerSideSitemap([]);
  }
}
