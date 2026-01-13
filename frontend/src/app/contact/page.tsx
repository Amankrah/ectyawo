"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group rounded-lg border border-primary/10 bg-background/80 backdrop-blur-sm hover:border-primary/20 transition-colors">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex w-full items-center justify-between p-4 md:p-6"
      >
        <h3 className="text-lg font-semibold text-left">{question}</h3>
        <svg
          className={`h-5 w-5 text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`grid transition-all duration-200 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="px-4 md:px-6 pb-4 md:pb-6">
            <p className="text-muted-foreground">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function ContactPage() {
  const handleContactClick = () => {
    const subject = "General Inquiry";
    const body = `
Dear Etornam,

I am reaching out to connect with you.

CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:         [Your Name]
Email:        [Your Email]
Organization: [Your Organization (if applicable)]
Topic:        [What is this regarding?]

MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Your message here...]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I look forward to hearing from you.

Best regards,
[Your Name]
    `.trim();

    const mailtoLink = `mailto:contact@ectsyawo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative container flex flex-col gap-6 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <div className="absolute h-[40rem] w-[40rem] bg-sage-900/30 blur-[100px] rounded-full" />
        </div>
        <div className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start space-y-6 flex-1">
            <h1 className="text-center md:text-left text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Get in Touch
            </h1>
            <p className="max-w-[42rem] text-center md:text-left text-lg text-muted-foreground sm:text-xl">
              Whether you are interested in booking a speaking engagement, want to collaborate on research or learn more on
              how my expertise can benefit you, I&apos;d love to hear from you.
            </p>
            <div className="flex justify-center md:justify-start w-full">
             <Link href="#contact-form" className="w-[200px]">
              <Button size="lg" className="mt-2"> 
                Contact Me
              </Button>
            </Link>
            </div>
          </div>
          <div className="flex-1 w-full md:w-auto">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted">
              <Image
                src="/gallery/food-safety-labwork.jpg"
                alt="Etornam Tsy-Awo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* FAQ Section */}
      <section className="container py-12 md:py-24">
        <div className="max-w-[58rem] mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Common questions about getting in touch</p>
          </div>

          <div className="grid gap-4">
            <FAQItem 
              question="What&apos;s the best way to contact you for speaking engagements?"
              answer="You can use the contact form below or visit my speaking page for more information about my speaking services. "
            />
            <FAQItem 
              question="Do you offer consulting services?"
              answer="Yes, I provide consulting services related to food systems, sustainability, and research. Please reach out via the contact form with details about your project, and we can discuss how I might help."
            />
            <FAQItem 
              question="How quickly do you respond to inquiries?"
              answer="I aim to respond to all inquiries within 48 hours during weekdays. For urgent matters, please indicate so in your message subject."
            />
            <FAQItem 
              question="Can I connect with you on social media?"
              answer="Yes, you can find me on LinkedIn. Links to my social media profiles are available in the website footer."
            />
            <FAQItem 
              question="Are you available for interviews or media appearances?"
              answer="Yes, I'm available for interviews, podcasts and media appearances related to my areas of expertise. Please include details about your publication or platform when reaching out."
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="container py-12 md:py-24">
        <div className="max-w-[58rem] mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <p className="text-muted-foreground">Send me a message and I&apos;ll get back to you within 48hrs</p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-primary/20 rounded-3xl blur-2xl opacity-50" />

            <div className="relative p-8 md:p-12 bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-lg">
              <div className="space-y-6 text-center">
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Ready to connect? Click the button below to compose an email. Your default email client will open with a pre-filled template.
                </p>

                <Button onClick={handleContactClick} size="lg" className="min-w-[200px]">
                  Send Email
                </Button>

                <p className="text-sm text-muted-foreground">
                  This will open your email client with a pre-filled message template
                </p>

                <div className="mt-8 pt-8 border-t border-primary/10">
                  <p className="text-sm text-muted-foreground">
                    Or email me directly at{" "}
                    <a
                      href="mailto:contact@ectsyawo.com"
                      className="text-primary hover:underline font-medium"
                    >
                      contact@ectsyawo.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 