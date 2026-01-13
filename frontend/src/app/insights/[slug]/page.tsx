import { getLatestPosts, getPost, getAdjacentPosts } from "@/lib/sanity";
import { Post } from "@/lib/types";
import { notFound } from "next/navigation";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/seo/structured-data";

const components: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({children}) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({children}) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({children}) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
    normal: ({children}) => <p className="mb-4 leading-relaxed">{children}</p>,
  },
  marks: {
    link: ({value, children}) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a 
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-primary hover:underline"
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({value}) => {
      return (
        <div className="my-8">
          <Image
            src={value.url}
            alt={value.alt || ''}
            width={800}
            height={450}
            className="rounded-lg w-full"
          />
          {value.alt && (
            <p className="mt-2 text-sm text-muted-foreground text-center">
              {value.alt}
            </p>
          )}
        </div>
      )
    },
  },
};

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const normalizedSlug = decodeURIComponent(slug.toLowerCase());
    const post = await getPost(normalizedSlug);

    if (!post) {
      return {
        title: "Post Not Found",
        description: "The requested blog post could not be found.",
      };
    }

    const imageUrl = post.imageUrl || "https://ectsyawo.com/og-image.jpg";
    const description = post.excerpt || post.title;

    return {
      title: post.title,
      description: description,
      keywords: [
        post.category || "food systems",
        "nutrition",
        "sustainable agriculture",
        "food science",
        "evidence-based nutrition",
        "consumer food empowerment"
      ],
      authors: [{ name: post.author || "Etornam C. Tsyawo" }],
      openGraph: {
        title: post.title,
        description: description,
        url: `https://ectsyawo.com/insights/${post.slug}`,
        type: "article",
        publishedTime: post.publishedAt,
        authors: [post.author || "Etornam C. Tsyawo"],
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: description,
        images: [imageUrl],
        creator: "@etornamtsyawo",
      },
      alternates: {
        canonical: `https://ectsyawo.com/insights/${post.slug}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Food Insights",
      description: "Insights on food systems, nutrition, and sustainable agriculture.",
    };
  }
}

// Generate static params for known posts
export async function generateStaticParams() {
  try {
    console.log('Generating static paths for insights posts');
    const posts = await getLatestPosts(100); // Fetch more posts to ensure coverage

    console.log(`Generated paths for ${posts.length} posts`);

    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static paths:', error);
    return [];
  }
}

// Set revalidation time for this page - 60 seconds = 1 minute
export const revalidate = 60;

// Use SSG with ISR
export const dynamic = 'force-static';
export const generateStaticParamsLimit = 100;

// Post Navigation Component
function PostNavigation({ nextPost, previousPost }: { nextPost: Post | null, previousPost: Post | null }) {
  return (
    <div className="border-t pt-10 mt-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Continue Reading</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {previousPost && (
          <Link 
            href={`/insights/${previousPost.slug}`}
            className="group block"
          >
            <div className="flex flex-col h-full border rounded-lg overflow-hidden transition-shadow hover:shadow-md">
              {previousPost.imageUrl && (
                <div className="relative h-40 w-full">
                  <Image
                    src={previousPost.imageUrl}
                    alt={previousPost.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              )}
              <div className="p-4 flex flex-col flex-grow">
                <span className="text-sm text-muted-foreground flex items-center mb-2">
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous Post
                </span>
                <h3 className="font-bold line-clamp-2 mb-2">{previousPost.title}</h3>
                {previousPost.excerpt && (
                  <p className="text-muted-foreground line-clamp-2 text-sm mb-4">{previousPost.excerpt.substring(0, 120)}...</p>
                )}
              </div>
            </div>
          </Link>
        )}
        
        {nextPost && (
          <Link 
            href={`/insights/${nextPost.slug}`}
            className="group block"
          >
            <div className="flex flex-col h-full border rounded-lg overflow-hidden transition-shadow hover:shadow-md">
              {nextPost.imageUrl && (
                <div className="relative h-40 w-full">
                  <Image
                    src={nextPost.imageUrl}
                    alt={nextPost.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              )}
              <div className="p-4 flex flex-col flex-grow">
                <span className="text-sm text-muted-foreground flex items-center justify-end mb-2">
                  Next Post
                  <ChevronRight className="h-4 w-4 ml-1" />
                </span>
                <h3 className="font-bold line-clamp-2 mb-2">{nextPost.title}</h3>
                {nextPost.excerpt && (
                  <p className="text-muted-foreground line-clamp-2 text-sm mb-4">{nextPost.excerpt.substring(0, 120)}...</p>
                )}
              </div>
            </div>
          </Link>
        )}
      </div>
      
      <div className="mt-10 text-center">
        <Link href="/insights">
          <Button variant="outline">
            View All Insights
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;

    // Add more detailed logging
    console.log('Fetching post with slug:', slug);

    // Normalize the slug - handle potential case differences or encoding issues
    const normalizedSlug = decodeURIComponent(slug.toLowerCase());
    
    const post = await getPost(normalizedSlug);
    
    console.log('Post found?', !!post);
  
    if (!post) {
      console.log('Post not found, returning 404');
      return notFound();
    }
    
    // Fetch adjacent posts for navigation
    const { nextPost, previousPost } = await getAdjacentPosts(post.slug, post.publishedAt);

    // Generate structured data
    const articleSchema = getArticleSchema({
      title: post.title,
      description: post.excerpt || post.title,
      slug: post.slug,
      publishedAt: post.publishedAt,
      imageUrl: post.imageUrl,
      author: post.author,
      category: post.category
    });

    const breadcrumbSchema = getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Insights", url: "/insights" },
      { name: post.title, url: `/insights/${post.slug}` }
    ]);

    return (
      <>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <article className="container max-w-3xl py-24">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            {post.category && <span>{post.category}</span>}
            {post.author && (
              <>
                <span>•</span>
                <span>By {post.author}</span>
              </>
            )}
            <span>•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString()}
            </time>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-6">{post.title}</h1>
        </header>
  
        {post.imageUrl && (
          <div className="mb-12 relative aspect-video">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="rounded-lg object-cover"
              priority
            />
          </div>
        )}
  
        <div className="prose prose-lg max-w-none">
          {post.body && (
            <PortableText 
              value={post.body}
              components={components}
            />
          )}
        </div>
        
        {/* Post Navigation */}
        {(nextPost || previousPost) && (
          <PostNavigation nextPost={nextPost} previousPost={previousPost} />
        )}
      </article>
      </>
    );
  } catch (error) {
    console.error('Error rendering post page:', error);
    return notFound();
  }
}