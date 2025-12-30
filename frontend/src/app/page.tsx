'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { LogoCarousel } from "@/components/ui/carousel";
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { getPersonSchema, getOrganizationSchema } from "@/lib/seo/structured-data";

const DesktopHero = () => (
  <section className="relative w-full min-h-[100svh] overflow-hidden">
    <div className="absolute inset-0">
      <Image
        src="/images/ectsyawo.png"
        alt="Etornam Tsyawo Hero Background"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60" />
    </div>
    <div className="container relative h-full min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[800px] space-y-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tighter text-white animate-fade-in">
          Inspire Your Audience to Action
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 animate-fade-in-up max-w-[600px] mx-auto">
          At Your Next Event
        </p>
        <div className="flex justify-center gap-4 animate-fade-in-up delay-300 pt-6">
          <Link href="/speaking">
            <Button 
              size="lg" 
              variant="default" 
              className="text-base hover:scale-105 transition-transform px-6 py-6 h-auto"
            >
              Discover How
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const MobileHero = () => (
  <section className="relative w-full min-h-[100svh] overflow-hidden bg-black">
    <div className="absolute inset-0">
      <Image
        src="/images/ectsyawo-mobile.png"
        alt="Etornam Tsyawo Hero Background"
        fill
        className="object-cover object-[30%_center] opacity-80"
        priority
        sizes="(max-width: 768px) 100vw"
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
    </div>
    <div className="relative h-full min-h-[100svh] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-[85%] space-y-4 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter text-white animate-fade-in">
            Inspire Your Audience to Action
          </h1>
          <p className="text-base text-white/90 animate-fade-in-up">
            At Your Next Event
          </p>
          <div className="flex justify-center animate-fade-in-up delay-300 pt-6">
            <Link href="/speaking" className="w-[200px]">
              <Button 
                size="lg" 
                variant="default" 
                className="w-full text-sm hover:scale-105 transition-transform py-4 h-auto"
              >
                Discover How
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Add this type definition
type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  imageUrl?: string;
  category?: string;
  author?: string;
  publishedAt: string;
};

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [latestPost, setLatestPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestPost() {
      try {
        const response = await fetch('/api/latest-post');
        if (!response.ok) throw new Error('Failed to fetch latest post');
        const data = await response.json();
        setLatestPost(data);
      } catch (error) {
        console.error('Error fetching latest post:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestPost();
  }, []);

  
  const organizationLogos = [
    { src: "/logos/resolutionproject.png", alt: "Resolution Project", sizes: "(max-width: 768px) 33vw, 20vw", priority: true },
    { src: "/logos/centreforgreengrowth.png", alt: "Centre for Green Growth", sizes: "(max-width: 768px) 33vw, 20vw", priority: true },
    { src: "/logos/graffiland.png", alt: "GraffiLand", sizes: "(max-width: 768px) 33vw, 20vw", priority: true },
    { src: "/logos/womeninengineeringGhIE.png", alt: "Women in Engineering GhIE", sizes: "(max-width: 768px) 33vw, 20vw", priority: true },
    { src: "/logos/mcfalumniknust.png", alt: "MCF Alumni KNUST", sizes: "(max-width: 768px) 33vw, 20vw", priority: true },
    { src: "/logos/greenafricayouthorganization.png", alt: "Green Africa Youth Organization", sizes: "(max-width: 768px) 33vw, 20vw", priority: true },
    { src: "/logos/thefooddiscourse.png", alt: "The Food Discourse", sizes: "(max-width: 768px) 33vw, 20vw", priority: true },
  ];

  const mediaGallery = [
    {
      type: "image",
      src: "/gallery/farmer-training.jpg",
      alt: "Farmers training",
      title: "Farmers trained on sustainable farming practices",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/resource-persons.jpg",
      alt: "Facilitators of farmers training",
      title: "Some facilitators of farmers training program",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/lnjfoods-team.jpg",
      alt: "LnJ Foods team",
      title: "The LnJ Foods team",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/pork-research.jpg",
      alt: "Lab work during pork research",
      title: "Lab work during pork research",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/teaching.jpg",
      alt: "Taught concepts in food science",
      title: "Taught concepts in food science",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/field-studies-western.jpg",
      alt: "Field studies in Western Ghana",
      title: "Field studies in Western Ghana",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/field-studies-volta.jpg",
      alt: "Field studies in Volta Ghana",
      title: "Field studies in Volta Ghana",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/bucket-garden.jpg",
      alt: "My thriving bucket garden",
      title: "My thriving bucket garden",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/food-safety-labwork.jpg",
      alt: "Food safety lab work",
      title: "Food safety lab work",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/research-poster-presentation.jpg",
      alt: "Research poster presentation",
      title: "Research poster presentation",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/published-research.jpg",
      alt: "Published research",
      title: "Published research",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/panel-speaking.jpg",
      alt: "Panel speaking",
      title: "Panel speaking",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    }
  ];

  const personSchema = getPersonSchema();
  const organizationSchema = getOrganizationSchema();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="flex flex-col items-center">
        {isDesktop ? <DesktopHero /> : <MobileHero />}

      {/* Speaking Section with Logo Carousel */}
      <section className="container py-8 md:py-16">
        <div className="space-y-6 md:space-y-8 animate-fade-in-up px-4 md:px-0">
          <h2 className="mb-4 md:mb-8 text-center text-2xl md:text-3xl font-bold">Speaking Engagements</h2>
          <div className="mb-4 md:mb-8 text-center">
            <p className="max-w-[800px] mx-auto text-base md:text-lg text-muted-foreground">
              
            </p>
          </div>
          <LogoCarousel logos={organizationLogos} />

          {/* Testimonials */}
          <div className="text-center mb-4 md:mb-8">
            <h3 className="text-lg md:text-xl text-muted-foreground font-bold mb-4">
              Trusted by notable organizations to deliver impactful talks
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <TestimonialCard
              quote="The high level of engagement during Etornam's portion of the discussion was a testament to the relevance and depth of her insights."
              author="Somaly Tum"
              role="Program Organizer"
              organization="Resolution Project"
              linkedinUrl="https://www.linkedin.com/in/somalytum"
              headshot="/images/testimonials/somaly-tum.jpg"
            />
            
            <TestimonialCard
              quote="Etornam's collaborative spirit, professionalism and effective communication significantly contributed to the success of the event"
              author="Nana Minta Asiedu"
              role="Program Lead"
              organization="Green Africa Youth Organization"
              linkedinUrl="https://www.linkedin.com/in/nana-minta-asiedu"
              headshot="/images/testimonials/nana-minta-asiedu.jpg"
            />
            
          </div>

          {/* Speaking Style Card */}
          <div className="mt-8 md:mt-16 max-w-3xl mx-auto">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-primary/20 rounded-3xl blur-2xl opacity-50" />
              
              {/* Content */}
              <div className="relative p-6 md:p-8 bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-lg space-y-6">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="space-y-6 text-center">
                  <p className="text-xl md:text-2xl font-medium leading-relaxed">
                    My speaking style is engaging and informative, offering practical insights your audience can implement almost immediately.
                  </p>
                  
                  <div className="h-px w-1/4 mx-auto bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                  
                  <p className="text-lg text-muted-foreground">
                    If your goal is to ensure your audience are able to act on what&apos;s shared at the event, then you&apos;re at the right place.
                  </p>

                  <div className="pt-4">
                    <p className="text-lg font-medium text-primary">
                      Want to inspire your audience to action at your next event?
                    </p>
                  </div>
                </div>

                <div className="flex justify-center pt-6">
                  <Link href="/speaking" className="group">
                    <Button 
                      size="lg" 
                      className="relative overflow-hidden px-8 py-6 h-auto text-base hover:scale-105 transition-all duration-300"
                    >
                      <span className="relative z-10">Yes, I want to</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section with Hover Effect */}
      <section className="container py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center animate-fade-in-up px-4 md:px-0">
          <div className="relative aspect-square max-w-[400px] md:max-w-[600px] w-full mx-auto group">
            <Image
              src="/images/about-etornam-tsyawo.jpg"
              alt="Etornam C. Tsyawo"
              fill
              priority
              className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              quality={90}
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              Hi, I&apos;m Etornam. I&apos;m a Food Systems Research Engineer with a generous passion for healthy food. 
              I got started in food in the weirdest of ways about a decade ago. And spent part of that decade with rural farmers, in food processing and in consumers home kitchens.You can read my full story here <Link href="http://buymeacoffee.com/etornamctsyawo/how-my-food-journey-began" 
                target="_blank" 
                rel="noopener noreferrer"
              >here</Link>.
            </p>
            <Link 
              href="/about"
            >
              <Button className="w-full md:w-auto hover:scale-105 transition-transform group">
                <span>Read my story here</span>
                
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Research & Insights with Gradient */}
      <section className="container py-8 md:py-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-[800px] mx-auto text-center animate-fade-in-up px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Research Highlight</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
          My research explores consumer food systems, including nutrient optimization in 
          home food processing with associated technologies and digital decision support systems. 
          The insights benefit health-conscious consumers, kitchen equipment technology and personalized 
          nutrition organizations, food-focused NGOs and researchers in the field of environmental nutrition. 
            
          </p>
          <Link href="/research">
            <Button className="w-full md:w-auto hover:scale-105 transition-transform">
              Explore my research
            </Button>
          </Link>
        </div>
      </section>

      {/* Insights Section with Gradient and Latest Post */}
      <section className="container py-8 md:py-16 bg-gradient-to-r from-background via-muted/30 to-background">
        <div className="max-w-[1000px] mx-auto text-center animate-fade-in-up px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Food Insights</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-10">
            Discover practical and stories about topics beyond just food and food systems. 
          </p>
          
          {/* Latest Post Card */}
          {!loading && latestPost && (
            <div className="mb-8 md:mb-10 overflow-hidden bg-card rounded-xl shadow-md transition-all hover:shadow-lg">
              <div className="md:flex">
                {latestPost.imageUrl && (
                  <div className="relative w-full md:w-2/5 aspect-video md:aspect-square">
                    <Image
                      src={latestPost.imageUrl}
                      alt={latestPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 md:p-8 w-full md:w-3/5 text-left flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    {latestPost.category && <span>{latestPost.category}</span>}
                    {latestPost.author && (
                      <>
                        <span>•</span>
                        <span>By {latestPost.author}</span>
                      </>
                    )}
                    <span>•</span>
                    <time dateTime={latestPost.publishedAt}>
                      {new Date(latestPost.publishedAt).toLocaleDateString()}
                    </time>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{latestPost.title}</h3>
                  {latestPost.excerpt && (
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {latestPost.excerpt}
                    </p>
                  )}
                  <div className="mt-auto">
                    <Link href={`/insights/${latestPost.slug}`}>
                      <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors group">
                        <span>Read full article</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none" 
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <Link href="/insights">
            <Button className="w-full md:w-auto hover:scale-105 transition-transform group">
              <span>Browse all insights</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Button>
          </Link>
        </div>
      </section>

      

      {/* FoodPulse Platform with Card Effect */}
      <section className="container py-8 md:py-16">
        <div className="text-center max-w-[800px] mx-auto bg-muted/50 p-6 md:p-8 rounded-2xl shadow-lg animate-fade-in-up mx-4 md:mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">FoodPulse</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
            Your hub for consumer-focused food education, bringing together 
            insights, research, and practical knowledge. If you want reliable, practical
            and highly engaging information on your food choices as a consumer, FoodPulse is for you.
          </p>
          <Link href="https://foodpulse.co/" target="_blank" rel="noopener noreferrer">
            <Button className="w-full md:w-auto hover:scale-105 transition-transform">
              Explore FoodPulse here
            </Button>
          </Link>
        </div>
      </section>

      {/* Media Gallery with Hover Effects */}
      <section className="container py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center animate-fade-in-up px-4 md:px-0">Media Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0">
          {mediaGallery.map((item, index) => (
            <div 
              key={index}
              className="group relative aspect-video rounded-lg overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
                quality={85}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 md:transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                  <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
              {/* Mobile-only title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/60 md:hidden">
                <h3 className="text-base text-white font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
