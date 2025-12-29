import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food Insights",
  description: "Discover practical insights and stories about food systems, nutrition science, sustainable agriculture, consumer food empowerment, and evidence-based food choices. Expert perspectives on modern food environments and healthy eating.",
  keywords: [
    "food insights",
    "nutrition blog",
    "food systems blog",
    "sustainable food",
    "evidence-based nutrition",
    "consumer food empowerment",
    "healthy eating tips",
    "food science articles",
    "sustainable agriculture insights",
    "food safety tips",
    "nutrition education"
  ],
  openGraph: {
    title: "Food Insights | Etornam C. Tsyawo",
    description: "Practical insights and stories about food systems, nutrition, and sustainable practices from food systems expert Etornam C. Tsyawo.",
    url: "https://ectsyawo.com/insights",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Food Insights by Etornam C. Tsyawo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Insights | Etornam C. Tsyawo",
    description: "Practical insights and stories about food systems, nutrition, and sustainable practices.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ectsyawo.com/insights",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
