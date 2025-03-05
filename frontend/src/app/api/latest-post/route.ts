import { NextResponse } from 'next/server';
import { getLatestPosts } from '@/lib/sanity';

export async function GET() {
  try {
    // Fetch just one latest post
    const posts = await getLatestPosts(1);
    const latestPost = posts[0] || null;
    
    return NextResponse.json(latestPost);
  } catch (error) {
    console.error('Error fetching latest post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch latest post' },
      { status: 500 }
    );
  }
} 