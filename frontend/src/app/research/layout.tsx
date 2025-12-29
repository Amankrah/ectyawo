import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description: "Explore research by Etornam C. Tsyawo on consumer food systems, nutrient optimization in home food processing, digital decision support systems, and environmental nutrition. Published research benefiting health-conscious consumers, food technology, personalized nutrition organizations, and food-focused NGOs.",
  keywords: [
    "food systems research",
    "consumer food systems",
    "nutrient optimization",
    "home food processing",
    "digital decision support systems",
    "environmental nutrition",
    "personalized nutrition",
    "food processing technology",
    "kitchen equipment technology",
    "food science research publications",
    "sustainable food research",
    "nutrition research"
  ],
  openGraph: {
    title: "Research | Etornam C. Tsyawo",
    description: "Explore research on consumer food systems, nutrient optimization, and sustainable food practices that benefit health-conscious consumers and food organizations.",
    url: "https://ectsyawo.com/research",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Food Systems Research by Etornam C. Tsyawo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research | Etornam C. Tsyawo",
    description: "Research on consumer food systems, nutrient optimization, and sustainable food practices.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ectsyawo.com/research",
  },
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
