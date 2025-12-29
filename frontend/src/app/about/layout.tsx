import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Etornam C. Tsyawo, a Food Systems Research Engineer with expertise in consumer food systems, nutrient optimization, and sustainable farming practices. Over a decade of experience working with rural farmers, food processing, and consumer kitchens to transform food systems.",
  keywords: [
    "Etornam Tsyawo",
    "food systems researcher",
    "food science engineer",
    "agricultural researcher",
    "food safety expert",
    "nutrition scientist",
    "sustainable agriculture expert",
    "food processing expert",
    "consumer food systems",
    "environmental nutrition"
  ],
  openGraph: {
    title: "About Etornam C. Tsyawo | Food Systems Expert",
    description: "Food Systems Research Engineer with over a decade of experience in consumer food systems, sustainable agriculture, and nutrition science.",
    url: "https://ectsyawo.com/about",
    type: "profile",
    images: [
      {
        url: "/images/about-etornam-tsyawo.jpg",
        width: 1200,
        height: 630,
        alt: "Etornam C. Tsyawo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Etornam C. Tsyawo | Food Systems Expert",
    description: "Food Systems Research Engineer with expertise in consumer food systems and sustainable practices.",
    images: ["/images/about-etornam-tsyawo.jpg"],
  },
  alternates: {
    canonical: "https://ectsyawo.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
