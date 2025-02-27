import { createClient } from '@sanity/client';
import { Post } from './types';

// Determine if we're in a production environment
const isProduction = process.env.NODE_ENV === 'production';
console.log('Environment:', process.env.NODE_ENV);
console.log('Using production config:', isProduction);

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-02-20',
  useCdn: isProduction, // Enable CDN in production for better performance
  token: process.env.SANITY_API_TOKEN, // Always include token if available
  perspective: 'published', // Always use published perspective
  // Development-specific options
  stega: !isProduction ? {
    enabled: true,
    studioUrl: '/studio',
  } : undefined,
});

export async function getLatestPosts(limit = 5): Promise<Post[]> {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc)[0...${limit}] {
      _id,
      title,
      "slug": slug.current,
      "excerpt": pt::text(body),
      "category": categories[0]->title,
      "author": author->name,
      "imageUrl": mainImage.asset->url,
      publishedAt
    }
  `);
}

export async function getFeaturedPost(): Promise<Post | null> {
  return client.fetch(`
    *[_type == "post"][0] {
      _id,
      title,
      "slug": slug.current,
      "excerpt": pt::text(body),
      "category": categories[0]->title,
      "author": author->name,
      "imageUrl": mainImage.asset->url,
      publishedAt
    }
  `);
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  return client.fetch(`
    *[_type == "post" && categories[0]->title == $category] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      "excerpt": pt::text(body),
      "category": categories[0]->title,
      "author": author->name,
      "imageUrl": mainImage.asset->url,
      publishedAt
    }
  `, { category });
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    console.log('Attempting to fetch post with slug:', slug);
    console.log('Environment:', process.env.NODE_ENV);
    console.log('API Token available:', !!process.env.SANITY_API_TOKEN);
    
    if (!slug) {
      console.error('Invalid slug provided:', slug);
      return null;
    }
    
    // Normalize the slug to handle encoding/case issues
    const normalizedSlug = decodeURIComponent(slug.toLowerCase().trim());
    console.log('Normalized slug for query:', normalizedSlug);
    
    // First try exact match
    let post = await client.fetch(`
      *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        "category": categories[0]->title,
        "author": author->name,
        body[] {
          ...,
          _type == "image" => {
            ...,
            "url": asset->url,
            "alt": alt
          }
        },
        "imageUrl": mainImage.asset->url,
        publishedAt
      }
    `, { slug: normalizedSlug });
    
    // If no exact match, try case-insensitive match
    if (!post) {
      console.log('No exact match found, trying case-insensitive match');
      post = await client.fetch(`
        *[_type == "post" && lower(slug.current) == lower($slug)][0] {
          _id,
          title,
          "slug": slug.current,
          "category": categories[0]->title,
          "author": author->name,
          body[] {
            ...,
            _type == "image" => {
              ...,
              "url": asset->url,
              "alt": alt
            }
          },
          "imageUrl": mainImage.asset->url,
          publishedAt
        }
      `, { slug: normalizedSlug });
    }
    
    console.log('Sanity query completed for slug:', normalizedSlug);
    console.log('Post found:', !!post);
    
    if (!post) {
      console.log('No post found with slug:', normalizedSlug);
    }
    
    return post;
  } catch (error) {
    console.error('Error fetching post with slug:', slug, error);
    return null;
  }
} 