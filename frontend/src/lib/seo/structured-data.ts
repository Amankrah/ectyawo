import { Person, WithContext, Article, BreadcrumbList, Organization } from 'schema-dts';

export function getPersonSchema(): WithContext<Person> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Etornam C. Tsyawo",
    jobTitle: "Food Systems Research Engineer",
    description: "Food Systems Research Engineer specializing in consumer food systems, nutrient optimization, and sustainable food practices.",
    url: "https://ectsyawo.com",
    image: "https://ectsyawo.com/images/about-etornam-tsyawo.jpg",
    sameAs: [
      "https://twitter.com/etornamtsyawo",
      "https://linkedin.com/in/etornamtsyawo",
      "https://foodpulse.co"
    ],
    knowsAbout: [
      "Food Systems",
      "Consumer Food Systems",
      "Household Food Processing",
      "Food Decision Support Systems",
      "Food Systems Education",
      "Food Engineering",
      "Nutrition Science",
      "Sustainable Agriculture",
      "Food Safety",
      "Environmental Nutrition",
      "Consumer Food Empowerment",
      "Food Processing Optimization"
    ],
    alumniOf: {
      "@type": "Organization",
      name: "KNUST"
    },
    email: "contact@ectsyawo.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Ghana"
    }
  };
}

export function getOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Etornam C. Tsyawo",
    url: "https://ectsyawo.com",
    logo: "https://ectsyawo.com/images/about-etornam-tsyawo.jpg",
    description: "Food Systems Research Engineer specializing in consumer food systems, nutrient optimization, and sustainable food practices.",
    founder: {
      "@type": "Person",
      name: "Etornam C. Tsyawo"
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@ectsyawo.com",
      contactType: "Professional Services"
    },
    sameAs: [
      "https://twitter.com/etornamtsyawo",
      "https://linkedin.com/in/etornamtsyawo"
    ]
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  imageUrl?: string;
  author?: string;
  category?: string;
}): WithContext<Article> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.imageUrl || "https://ectsyawo.com/og-image.jpg",
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author || "Etornam C. Tsyawo",
      url: "https://ectsyawo.com/about"
    },
    publisher: {
      "@type": "Organization",
      name: "Etornam C. Tsyawo",
      logo: {
        "@type": "ImageObject",
        url: "https://ectsyawo.com/images/about-etornam-tsyawo.jpg"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ectsyawo.com/insights/${article.slug}`
    },
    articleSection: article.category || "Food Systems",
    keywords: "food systems, nutrition, sustainable agriculture, food science, consumer food systems, household food processing, food decision support systems, food systems education, food engineering, nutrition science, sustainable agriculture, food safety, environmental nutrition, consumer food empowerment, food processing optimization"
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://ectsyawo.com${item.url}`
    }))
  };
}

export function getProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Etornam C. Tsyawo - Speaking Services",
    description: "Professional speaking services on food systems transformation, evidence-based nutrition, and consumer food empowerment.",
    provider: {
      "@type": "Person",
      name: "Etornam C. Tsyawo"
    },
    areaServed: "Worldwide",
    serviceType: [
      "Keynote Speaking",
      "Workshop Facilitation",
      "Corporate Training",
      "Academic Lectures",
      "Panel Discussion"
    ],
    url: "https://ectsyawo.com/speaking",
    priceRange: "$$"
  };
}
