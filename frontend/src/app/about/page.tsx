'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  const timeline = [
    { year: "2024-present", events: [
      "Doctoral research studying household food environments",
      "Traveled Ghana to study consumer food practices at home and micro scale"
    ]},
    { year: "2023-present", events: "Running FoodPulse, a food education platform providing food education to consumers" },
    { year: "2023", events: 'Pivoted L&J Foods Ltd to FoodPulse after dealing with depression from "failure" of L&J Foods' },
    { year: "2022-present", events: "Speaking on food systems topics at various events" },
    { year: "2021-2023", events: [
      "Pursued a masters in food science and technology with a focus on food safety",
      "Started L&J Foods company Ltd",
      "Led a team to train rural farmers on sustainable farming practices"
    ]},
    { year: "2019", events: "Started another food business with a partner on campus (also failed)" },
    { year: "2018", events: "Started a small food business from my university dorm (later failed)" },
    { year: "2017", events: "Developed a process to extend the shelf life of a highly perishable leafy vegetable from 3 days to 21 days" },
    { year: "2015", events: "Got inspired through an argument with mum and started exploring the food space" }
  ];

  const skills = [
    { category: "Research", items: ["Consumer Food Systems", "Household Food Processing", "Food Decision Support Systems"] },
    { category: "Speaking", items: ["Food Systems Transformation", "Evidence-based Food Choices", "Consumer Food Empowerment"] },
    { category: "Technical", items: ["Food Systems Analysis", "Food Systems Life Cycle Assessment", "Healthy Food Product Development"] }
  ];
  
  const education = [
    { degree: "Ph.D", field: "Consumer Food Systems Research", institution: "McGill University", years: "2024-Present" },
    { degree: "Master's Degree", field: "Food Science and Technology", institution: "KNUST", years: "2022-2023" },
    { degree: "Bachelor's Degree", field: "Chemical Engineering", institution: "KNUST", years: "2016-2020" },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="absolute inset-0">
          <div className="h-[300px] md:h-[400px] w-full bg-gradient-to-r from-primary/30 via-primary/10 to-background"></div>
        </div>
        
        <div className="container relative pt-20 pb-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight animate-fade-in">
                Etornam C. Tsyawo
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in-up">
                Food Systems Research Engineer
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8 animate-fade-in-up delay-200">
                
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Researcher</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Public Speaker</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Food Educator</span>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
                <Link href="/speaking">
                  <Button className="px-6 hover:scale-105 transition-transform">
                    Book me as a Speaker
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-6 hover:scale-105 transition-transform">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative max-w-[300px] md:max-w-[400px] aspect-square mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 blur-xl opacity-50 -z-10 transform scale-90"></div>
              <div className="rounded-full overflow-hidden aspect-square relative border-4 border-background shadow-xl">
                <Image
                  src="/images/about-etornam-tsyawo.jpg"
                  alt="Etornam C. Tsyawo"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 300px, 400px"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">My Story</h2>
            
            <div className="w-full max-w-xl mx-auto mb-8 not-prose">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/about-etornam-tsyawo.jpg"
                  alt="Etornam C. Tsyawo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                />
              </div>
            </div>
            
            <div className="bg-muted/10 p-6 rounded-lg mb-8 border-l-4 border-primary/50">
              <p className="italic text-lg">
                It was a chilly Saturday morning in December. The cold, dry air greeted me as the sun rose 
                high in the sky. My mum called me to take some money and buy tin tomato paste to prepare a 
                stew for lunch later in the day.
              </p>
            </div>
            
            <div className="space-y-5">
              <p>
                &quot;Tin tomato again?!&quot; I shouted, barely masking my frustration with a tone of respect. My 
                frustration was understandable – my dad doesn&apos;t like tin tomato stew, my mom too, and I 
                wasn&apos;t a fan either. It&apos;s nothing close to fresh tomatoes. But when times were tough and 
                fresh tomatoes were hard to come by, we had no choice. Healthy food has always been our go-to.
                We had farms and backyard gardens, but that wasn&apos;t always enough when the seasons 
                changed from rainy June to dry chilly December.
              </p>

              <p>
                My mum noticed my tone and retorted sharply, 
                &quot;Did you say tin tomatoes again?&quot; &quot;Yes,&quot; I replied, my voice rising again. &quot;Yesterday we had 
                tin tomato stew, and the day before that too. I&apos;m really tired of this tin tomatoes thing. What 
                happened to kontomire or other vegetables?&quot;
              </p>

              <div className="my-8 border-l-4 border-primary pl-6 py-2">
                <p className="text-xl font-medium">
                  She shot back, her voice even louder, &quot;Have you seen any vegetables these days? Can&apos;t you see that
                  the weather is dry, and those vegetables are so expensive if you can even find them at all?&quot;
                </p>
              </div>

              <p>
                Frustrated, I shouted, &quot;So what were they doing when all these vegetables were in season? 
                Couldn&apos;t they have stored them somewhere so there would be enough in the off-season?&quot; Pointing 
                at me, she shouted, &quot;Are you saying &apos;they&apos;? How about you? What are you doing about it?&quot; At
                that moment, her words struck me like lightning. I fell into a trance, her voice fading into
                the background. I just kept whispering to myself, &quot;It&apos;s true. What am I doing about it?&quot;
              </p>

              <p>
                She called me back into the moment. And asked me to take the money and go buy the tin tomatoes. If
                you know a typical African household, you&apos;d know it&apos;s not normal to talk to an African parent 
                in such a manner and go scot-free. It&apos;s simply not possible. At best you get a serious warning or 
                scolding. At worst, you get a sound beating for being disrespectful.
              </p>

              <p>
                To my surprise, nothing like that happened to me. I took the money, went to buy the tin tomatoes, and prepared the stew. But 
                the question lingered in my mind all day – &quot;It&apos;s true. What am I doing about it?&quot; It wasn&apos;t just 
                the lack of fresh vegetables - it was the waste of fresh produce I had seen growing up.
              </p>
            </div>

            <div className="my-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6">
              <p>
                Kontomire and other vegetables, when in season, often went to waste. Sometimes even being intentionally thrown 
                away. There were other events leading up to this. I was already wondering why food went to waste.
                This situation extended to other crops like cassava, corn, yam, among others. Inadequate ways of 
                preserving them caused so much waste. Other farmers resorted to using chemicals or selling them cheaply.
              </p>
              <p className="mt-4">
                My hometown is a major agricultural zone, and we had (still have) farms. It seemed absurd that 
                we went through such cycles of abundance and scarcity. It just didn&apos;t make any sense to me!
              </p>
            </div>

            <p>
              At the time, I was also seriously considering what program to study at the university. My dad 
              suggested medicine, a field I had no interest in. But on that Saturday morning, a new path 
              became crystal clear to me. Thanks to mum! That final event set the course of my life. It 
              propelled me to study chemical engineering at the university because I believed that&apos;s how 
              I could do something about the situation.
            </p>

            <div className="h-6"></div>

            <p>
              Every course I took, from Transport Phenomena to Calculus, from Material balance to Plant design, 
              from Reaction engineering to Instrumentation, and even English and Economics. I always asked myself 
              after class, &quot;How will today&apos;s lesson help me solve the problem?&quot; I became obsessed! And questioned 
              if I was losing it.
            </p>

            <div className="h-6"></div>

            
            <p>
            My very first project in my first year was designing a process to preserve kontomire. I worked on this project 
            for two years before taking a break. But during the COVID lockdown, I resumed work on it, using my 
            elder sister&apos;s refrigerator as my lab. This project didn&apos;t get anywhere seemingly. But I can now 
            store kontomire in my refrigerator from a minimum of 2 weeks to a maximum of 6 weeks. Normally, it lasts 5 to 7 days.
            </p>

            <div className="h-6"></div>

            <p>
              After this, I conducted scientific projects on food. I engaged in self-study about food and nutrition. 
              I ran food businesses. I worked with 30 rural farmers. I spoke at esteemed events about food systems. 
              I worked in food companies. I uphold healthy food practices for a more balanced &quot;adult&quot; life. And I 
              share my knowledge and experiences on LinkedIn.
            </p>

            <div className="h-6"></div>

            <div className="my-8 border-l-4 border-primary pl-6 py-2">
              <p className="text-xl">
                From that day to now, it&apos;s been 9 years, and the question, &quot;What are you doing about it?&quot; 
                still rings in my mind. I have never looked back.
              </p>
            </div>

            <p>
              Have you found your passion? Pursue it with resilience, take it day by day. Have you not found 
              your passion? Search for it. It&apos;ll come knowingly or unknowingly, in the grandest of situations or in 
              seemingly insignificant moments. Whatever there may be, you&apos;ll find it.
            </p>

            {/* Newsletter Subscription CTA */}
            <div className="my-8 p-6 rounded-lg border border-muted shadow-sm">
              <p className="text-lg mb-4">
                If you found this inspiring, consider subscribing to my free monthly newsletter. I break down complex 
                food issues into simple, practical insights for your everyday food decisions. There are only 12 issues 
                in a whole year.
              </p>
              <Link 
                href="https://foodpulse.kit.com/0bacd8cebd"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="px-6 group">
                  <span>Subscribe here</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" 
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </Button>
              </Link>
            </div>

           
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="container py-12 md:py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Areas of Expertise</h2>
          
          <Tabs defaultValue="research" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="speaking">Speaking</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
            </TabsList>
            
            {skills.map((skillCategory) => (
              <TabsContent key={skillCategory.category} value={skillCategory.category.toLowerCase()} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skillCategory.items.map((skill, index) => (
                    <div 
                      key={index}
                      className="bg-card p-4 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                        <span>{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Interested in how my expertise can benefit your organization or event?
            </p>
            <Link href="/contact">
              <Button className="px-6">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-primary/20 rounded-3xl blur-xl opacity-30"></div>
            
            {/* Content */}
            <div className="relative p-8 md:p-12 bg-background/90 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">My Philosophy</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-center text-xl md:text-2xl italic text-primary/80 mb-8">
                  &quot;I believe in Good Health through Appropriate Nutrition. I believe  that a Healthy Food is a Happier YOU.
                  &quot;
                </p>
                
                <p>
                  My approach to food systems transformation is grounded in the belief that change happens 
                  at multiple scales; from individual kitchens to global policies. I focus on providing 
                  practical, research-backed insights that empower people to make meaningful changes in 
                  their relationship with food.
                
                  Rather than a one-size-fits-all solution, I recognize the complexity of food 
                  systems and the need for contextual approaches. My work aims to bridge the gap between 
                  research and everyday practice to make food information accessible and applicable 
                  to real people in real contexts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey Timeline */}
      <section className="container py-12 md:py-16 bg-muted/20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Professional Journey</h2>
        <div className="max-w-3xl mx-auto px-4 md:px-0">
          <Timeline items={timeline} />
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Education</h2>
          
          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="text-center mb-8">
                <span className="text-base font-bold block mb-2">{item.degree}</span>
                <h3 className="text-lg font-medium">{item.field}</h3>
                <p className="text-muted-foreground">{item.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Insights */}
      <section className="container py-12 md:py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Beyond the Professional</h2>
          
          <div className="max-w-2xl mx-auto">
            
            <p className="text-muted-foreground mb-4">
              When I&apos;m not conducting research or speaking at events, you&apos;ll find me tending to my 
              bucket garden, trying new recipes, sharing meals 
              with friends and family, reading a book or crocheting. I also love sharing life and career 
              ideas with my friends, discussing the challenges we face and how we can help each other 
              navigate the challenges.
            </p>
            
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-0 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you&apos;re interested in booking me for a speaking engagement, exploring research 
            collaboration or reaching out to discuss food systems, I&apos;d love to hear from you.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/speaking">
              <Button className="px-6 py-6 h-auto text-base hover:scale-105 transition-transform">
                Book as Speaker
              </Button>
            </Link>
            <Link href="/research">
              <Button variant="outline" className="px-6 py-6 h-auto text-base hover:scale-105 transition-transform">
                Research Work
              </Button>
            </Link>
            <Link href="/contact#contact-form">
              <Button variant="secondary" className="px-6 py-6 h-auto text-base hover:scale-105 transition-transform">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 