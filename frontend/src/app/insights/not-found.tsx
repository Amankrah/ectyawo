import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getLatestPosts } from '@/lib/sanity';

export default async function NotFound() {
  // Get some recent posts to suggest as alternatives
  const recentPosts = await getLatestPosts(3);
  
  return (
    <div className="container max-w-3xl py-24 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-6">Blog Post Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Sorry, we couldn't find the blog post you're looking for. It may have been moved or deleted.
      </p>
      
      <Link href="/insights">
        <Button className="mb-12">
          Return to All Insights
        </Button>
      </Link>
      
      {recentPosts.length > 0 && (
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-6">You might be interested in these posts</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {recentPosts.map(post => (
              <div key={post._id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-2 line-clamp-2">{post.title}</h3>
                <Link href={`/insights/${post.slug}`}>
                  <Button variant="outline" size="sm">Read Post</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 