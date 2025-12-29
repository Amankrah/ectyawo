# Etornam C. Tsyawo - Personal Website

[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red)]()

Professional personal website for Etornam C. Tsyawo, a Food Systems Research Engineer specializing in consumer food systems, nutrient optimization, and sustainable food practices.

🌐 **Live Site**: [ectsyawo.com](https://ectsyawo.com)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [SEO Optimization](#seo-optimization)
- [Content Management](#content-management)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)

---

## ✨ Features

### Core Functionality
- 🎯 **Professional Portfolio** - Showcase expertise, research, and speaking engagements
- 📝 **Blog Platform** - Food insights powered by Sanity CMS
- 🎤 **Speaking Services** - Detailed speaking services and booking system
- 📊 **Research Showcase** - Highlight academic research and publications
- 📧 **Contact System** - Professional contact and inquiry handling

### Technical Features
- ⚡ **Next.js 15** - App Router with React Server Components
- 🎨 **Modern UI** - Tailwind CSS with custom design system
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Dark Mode** - Theme switching with next-themes
- 🖼️ **Image Optimization** - Next.js Image component for optimal performance
- 📈 **Analytics** - Vercel Analytics and Speed Insights
- 💰 **AdSense Integration** - Monetization ready

### SEO & Performance
- 🔍 **Advanced SEO** - Comprehensive metadata, Open Graph, Twitter Cards
- 🏆 **Schema.org Markup** - JSON-LD structured data for rich results
- 🗺️ **Sitemap Generation** - Automatic XML sitemap creation
- 🤖 **Robots.txt** - Search engine crawling optimization
- 📊 **Core Web Vitals** - Optimized for performance metrics
- 🎯 **AI-Era SEO** - Optimized for ChatGPT, Perplexity, and modern search

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.1.7 (App Router)
- **UI Library**: React 19.0.0
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.4.1
- **Components**: Radix UI primitives
- **Animations**: Framer Motion 12.5.0
- **Icons**: Lucide React

### CMS & Content
- **Headless CMS**: Sanity.io 3.75.1
- **Rich Text**: Portable Text
- **Image Handling**: Sanity Image URL

### SEO & Analytics
- **Sitemap**: next-sitemap 4.2.3
- **Analytics**: Vercel Analytics
- **Performance**: Vercel Speed Insights
- **Schema Markup**: Custom JSON-LD implementation

### Development
- **Linting**: ESLint 9.x with Next.js config
- **Package Manager**: npm/pnpm
- **Build Output**: Standalone (optimized for Docker/serverless)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Amankrah/ectyawo.git
   cd ectyawo/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Add your Sanity configuration:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_api_token
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
frontend/
├── public/                 # Static assets
│   ├── images/            # Image assets
│   ├── logos/             # Partner/organization logos
│   ├── gallery/           # Media gallery images
│   ├── manifest.webmanifest
│   └── favicon.ico
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── insights/      # Blog listing & posts
│   │   │   └── [slug]/    # Dynamic blog post routes
│   │   ├── research/      # Research page
│   │   ├── speaking/      # Speaking services page
│   │   ├── studio/        # Sanity Studio
│   │   ├── api/           # API routes
│   │   ├── layout.tsx     # Root layout with metadata
│   │   ├── page.tsx       # Home page
│   │   ├── opengraph-image.tsx  # OG image generation
│   │   └── globals.css    # Global styles
│   ├── components/        # React components
│   │   ├── ui/            # Reusable UI components
│   │   └── layout/        # Layout components (Navbar, Footer)
│   ├── lib/               # Utilities and helpers
│   │   ├── sanity.ts      # Sanity client configuration
│   │   ├── types.ts       # TypeScript type definitions
│   │   └── seo/           # SEO utilities
│   │       └── structured-data.ts  # Schema.org helpers
│   └── hooks/             # Custom React hooks
├── next-sitemap.config.js # Sitemap configuration
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

---

## 🔍 SEO Optimization

This site implements enterprise-grade SEO optimized for both traditional search engines and AI-powered search (ChatGPT, Perplexity, Google SGE).

### Implemented Features

✅ **Metadata**
- Dynamic page-specific metadata
- Open Graph tags for social sharing
- Twitter Card optimization
- Canonical URLs

✅ **Structured Data (JSON-LD)**
- Person schema (professional profile)
- Organization schema
- Article schema (blog posts)
- Breadcrumb schema
- ProfessionalService schema

✅ **Sitemaps**
- Automatic XML sitemap generation
- Server-side sitemap for dynamic blog posts
- Custom priorities per page type
- Search engine submission ready

✅ **Performance**
- Optimized Core Web Vitals
- Image optimization with Next.js
- ISR for blog posts (60s revalidation)
- Edge runtime for OG images

✅ **Content**
- Keyword-optimized copy
- Natural language for AI understanding
- E-E-A-T principles (Experience, Expertise, Authoritativeness, Trust)
- Comprehensive topic coverage

### SEO Documentation

Comprehensive SEO documentation is available in:
- Implementation guide (excluded from repo via .gitignore)
- Pre-launch checklist (excluded from repo via .gitignore)
- Content guidelines (excluded from repo via .gitignore)

---

## 📝 Content Management

### Sanity Studio

Access the Sanity Studio at `/studio` to manage:
- Blog posts (title, content, images, categories)
- Author information
- Publication dates
- SEO metadata per post

### Adding New Blog Posts

1. Navigate to `/studio`
2. Click "Create new" → "Post"
3. Fill in:
   - Title
   - Slug (auto-generated or custom)
   - Excerpt (for SEO)
   - Content (rich text with Portable Text)
   - Featured image
   - Category
   - Author
   - Publication date
4. Publish

### Content Guidelines

- Write in natural, conversational language
- Include expertise signals and specific examples
- Optimize for questions (FAQ-style headings)
- Use descriptive alt text for all images
- Include internal links to related content

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Import project to Vercel
   - Connect GitHub repository: `Amankrah/ectyawo`

2. **Configure Environment Variables**
   - Add all required env variables from `.env.local`
   - Include Sanity configuration

3. **Deploy**
   - Vercel will automatically build and deploy
   - Production URL: `ectsyawo.com`

### Build Configuration

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

### Post-Deployment

1. **Submit Sitemaps to Search Engines**
   - Google Search Console: `https://ectsyawo.com/sitemap.xml`
   - Bing Webmaster Tools: Same URL

2. **Verify Integrations**
   - Google Search Console verification
   - AdSense integration
   - Analytics tracking

3. **Test**
   - Run Lighthouse audit (target: 90+ SEO score)
   - Validate structured data
   - Test social sharing previews

---

## 🔐 Environment Variables

Required environment variables:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Site Configuration
SITE_URL=https://ectsyawo.com

# Optional
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

---

## 📜 Scripts

```bash
# Development
npm run dev          # Start dev server with Turbopack
npm run build        # Build for production + generate sitemap
npm run start        # Start production server
npm run lint         # Run ESLint

# Sitemap Generation
npm run postbuild    # Automatically runs after build
```

---

## 🤝 Contributing

This is a private repository for Etornam C. Tsyawo's personal website.

For issues, suggestions, or inquiries:
- Email: contact@ectsyawo.com
- Website: [ectsyawo.com/contact](https://ectsyawo.com/contact)

---

## 📄 License

Copyright © 2025 Etornam C. Tsyawo. All rights reserved.

This is private, proprietary software. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited.

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Vercel** - For hosting and analytics
- **Sanity** - For the headless CMS
- **Tailwind CSS** - For the styling framework
- **Radix UI** - For accessible component primitives

---

## 📞 Contact & Support

**Etornam C. Tsyawo**
- Website: [ectsyawo.com](https://ectsyawo.com)
- Email: contact@ectsyawo.com
- Twitter: [@etornamtsyawo](https://twitter.com/etornamtsyawo)
- LinkedIn: [Etornam Tsyawo](https://linkedin.com/in/etornamtsyawo)

**Project Repository**: [github.com/Amankrah/ectyawo](https://github.com/Amankrah/ectyawo)

---

Built with ❤️ using Next.js, React, and TypeScript
