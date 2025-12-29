import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Etornam C. Tsyawo for speaking engagements, research collaborations, consulting services, or media inquiries. Expert in food systems, nutrition science, and sustainable agriculture.",
  keywords: [
    "contact food systems expert",
    "book speaker",
    "food systems consultant",
    "nutrition expert contact",
    "speaking engagement inquiry",
    "research collaboration",
    "food science consulting"
  ],
  openGraph: {
    title: "Contact Etornam C. Tsyawo | Food Systems Expert",
    description: "Get in touch for speaking engagements, research collaborations, or consulting services in food systems and nutrition science.",
    url: "https://ectsyawo.com/contact",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Etornam C. Tsyawo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Etornam C. Tsyawo | Food Systems Expert",
    description: "Get in touch for speaking engagements, research collaborations, or consulting services.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ectsyawo.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
