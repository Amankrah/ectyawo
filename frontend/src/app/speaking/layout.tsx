import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speaking Services",
  description: "Book Etornam C. Tsyawo for your next event. Expert speaker on food systems transformation, evidence-based nutrition, and consumer food empowerment. Offering keynote speaking, workshops, corporate training, academic lectures, and panel discussions worldwide.",
  keywords: [
    "food systems speaker",
    "keynote speaker",
    "nutrition speaker",
    "food science speaker",
    "sustainability speaker",
    "workshop facilitator",
    "corporate training food systems",
    "academic lectures food science",
    "panel speaker",
    "conference speaker",
    "professional speaker Ghana",
    "food systems transformation speaker",
    "evidence-based nutrition speaker"
  ],
  openGraph: {
    title: "Speaking Services | Etornam C. Tsyawo",
    description: "Book expert speaking engagements on food systems transformation, evidence-based nutrition, and consumer food empowerment for your conference, workshop, or corporate event.",
    url: "https://ectsyawo.com/speaking",
    type: "website",
    images: [
      {
        url: "/images/speaking.jpg",
        width: 1200,
        height: 630,
        alt: "Etornam C. Tsyawo Speaking at Event",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Speaking Services | Etornam C. Tsyawo",
    description: "Book expert speaking engagements on food systems transformation and sustainable nutrition practices.",
    images: ["/images/speaking.jpg"],
  },
  alternates: {
    canonical: "https://ectsyawo.com/speaking",
  },
};

export default function SpeakingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
