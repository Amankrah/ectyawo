"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const researchAreas = [
  {
    title: "Consumer Food Systems",
    description: "Investigating how consumers navigate food environments and the complex interactions among key parameters that influence their food practices everyday",
    keyTopics: [
      "Consumer food choices",
      "Behavioral food science",
      "Consumer home food practices",
      "Industry-consumer communication"
    ]
  },
  {
    title: "Nutrient Retention Optimization",
    description: "Developing and evaluating technologies that optimize nutrient retention during home food preparation",
    keyTopics: [
      "Smart kitchen technologies",
      "Optimized home cooking methods",
      "Process-based nutrient retention",
      "Accessible home food processing techniques"
    ]
  },
  {
    title: "Food Decision Support Systems",
    description: "Developing and testing digital tools that can empower consumers to make well-informed, healthier and environmentally conscious food decisions",
    keyTopics: [
      "Effective consumer food education",
      "Technology-mediated food practices",
      "Personalized nutrition technologies",
      "User experience in digital food applications"
    ]
  }
];

const timeline = [
  {
    year: "2024",
    title: "Doctoral Research",
    description: "Researching nutrient retention technologies and decision support systems",
    institution: "McGill University",
    ongoing: true
  },
  {
    year: "2024",
    title: "Context-Appropriate Food Governance",
    description: "Policy-focused manuscript",
    publication: "Under expert review"
  },
  {
    year: "2024",
    title: "Ethnographic Research",
    description: "Studied food practices in consumer homes and small roadside kitchens",
    institution: "Conducted in Ghana"
  },
  {
    year: "2023",
    title: "Published Research",
    description: "Rapid and non-destructive detection of adulterants in food",
    publication: "Journal of Meat Science"
  },
  {
    year: "2022",
    title: "Product Development",
    description: "Developed a functional snack from cassava for iron-deficient cases",
    institution: "KNUST"
  }
];

const collaborationAreas = [
  {
    area: "Academic Research",
    description: "Joint research projects on food systems and consumer food environments",
    opportunities: [
      "Masters supervision",
      "Cross-institutional studies",
      "Research paper collaboration"
    ]
  },
  {
    area: "Industry Research",
    description: "Partnership with companies and institutions focused on consumer food spaces",
    opportunities: [
      "Food education studies",
      "Implementation research",
      "Nutrient optimization tech research"
    ]
  }
];

export default function ResearchPage() {
  const handleCollaborationClick = () => {
    const subject = "Research Collaboration Inquiry";
    const body = `
Dear Etornam,

I am interested in exploring research collaboration opportunities with you.

CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:         [Your Name]
Email:        [Your Email]
Organization: [Your Organization/Institution]
Position:     [Your Position/Role]

RESEARCH INTERESTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Collaboration Type: [Academic Research / Industry Research / Masters Supervision / Other]
Research Area: [Consumer Food Systems / Nutrient Retention / Food Decision Support / Other]

PROJECT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Please describe your research interests, potential collaboration areas, specific project ideas, timeline, and any relevant background information]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I look forward to discussing potential collaboration opportunities.

Best regards,
[Your Name]
    `.trim();

    const mailtoLink = `mailto:contact@ectsyawo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="container flex flex-col items-center gap-6 py-24 md:py-32">
        <h1 className="text-center text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Research & Impact
        </h1>
        <p className="max-w-[42rem] text-center text-lg text-muted-foreground sm:text-xl">
          Cultivating a Healthier Food System by Understanding Consumer Food Systems
        </p>
      </section>

      {/* Current Research Areas */}
      <section id="areas" className="container py-12 md:py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Research Focus Areas</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {researchAreas.map((area) => (
            <Card key={area.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{area.title}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Key Topics:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {area.keyTopics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Research Timeline */}
      <section id="timeline" className="container py-12 md:py-24 bg-sage-50">
        <h2 className="text-3xl font-bold text-center mb-12">Research & Projects</h2>
        <div className="max-w-3xl mx-auto">
          {timeline.map((item) => (
            <div key={item.title} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              {/* Timeline dot */}
              <div className={`absolute left-[-4px] top-0 w-2 h-2 rounded-full ${item.ongoing ? 'bg-primary animate-pulse' : 'bg-muted-foreground'}`} />
              
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.year}
                  </span>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
                <p className="text-sm text-muted-foreground">
                  {item.institution || item.publication}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration Section */}
      <section id="collaboration" className="container py-12 md:py-24">
        <div className="max-w-[58rem] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Research Collaboration</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Interested in collaborating on research projects? Explore our areas of collaboration and get in touch.
          </p>

          <div className="grid gap-8 md:grid-cols-2 text-left mb-16">
            {collaborationAreas.map((collab) => (
              <Card key={collab.area} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{collab.area}</CardTitle>
                  <CardDescription>{collab.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {collab.opportunities.map((opp) => (
                      <li key={opp}>{opp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-primary/20 rounded-3xl blur-2xl opacity-50" />

            <div className="relative p-8 md:p-12 bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-lg">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="space-y-4">
                  <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="h-8 w-8 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold">Start a Collaboration</h3>
                  <p className="text-muted-foreground text-lg">
                    Click the button below to send me an email with your research collaboration inquiry. I&apos;ll provide a pre-filled template to help structure your proposal.
                  </p>
                </div>

                <Button
                  size="lg"
                  onClick={handleCollaborationClick}
                  className="w-full md:w-auto"
                >
                  Send Collaboration Inquiry
                </Button>

                <p className="text-sm text-muted-foreground">
                  This will open your email client with a pre-filled template
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