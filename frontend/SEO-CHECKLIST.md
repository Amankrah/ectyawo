# SEO Pre-Launch Checklist

## 🔴 Critical (Must Do Before Launch)

- [ ] **Update Google Search Console Verification Code**
  - Location: `src/app/layout.tsx` line 89
  - Replace: `"google-site-verification-code"` with actual code
  - Get code from: [Google Search Console](https://search.google.com/search-console)

- [ ] **Verify Twitter Handle**
  - Location: `src/app/layout.tsx` line 75
  - Current: `@etornamtsyawo`
  - Confirm this is correct

- [ ] **Test Build Process**
  ```bash
  npm run build
  ```
  - Verify sitemap.xml is generated in public folder
  - Verify robots.txt is generated
  - Check for any build errors

- [ ] **Create Icon Files**
  - Add `/public/icon-192.png` (192x192px)
  - Add `/public/icon-512.png` (512x512px)
  - Ensure favicon.ico exists at `/public/favicon.ico`

---

## 🟡 Important (Do Within First Week)

- [ ] **Submit Sitemaps**
  - Google Search Console: Submit `https://ectsyawo.com/sitemap.xml`
  - Bing Webmaster Tools: Submit sitemap
  - Check `https://ectsyawo.com/server-sitemap.xml` is accessible

- [ ] **Validate Structured Data**
  - Test with: https://validator.schema.org/
  - Test with: https://search.google.com/test/rich-results
  - Fix any errors found

- [ ] **Test Social Sharing**
  - Facebook/LinkedIn: https://www.opengraph.xyz/
  - Twitter: https://cards-dev.twitter.com/validator
  - Fix any preview issues

- [ ] **Run Lighthouse Audit**
  - Target: 90+ SEO score
  - Fix critical issues
  - Document findings

---

## 🟢 Nice to Have (Do Within First Month)

- [ ] **Set Up Monitoring**
  - Enable Google Search Console alerts
  - Review Vercel Analytics dashboard
  - Set up rank tracking for key terms

- [ ] **Content Optimization**
  - Review all alt text on images
  - Check internal linking structure
  - Ensure keyword density is natural

- [ ] **Technical Checks**
  - Verify all pages are indexable
  - Check page load speeds
  - Test mobile responsiveness
  - Verify canonical URLs

- [ ] **Advanced Setup**
  - Consider adding FAQ schema where applicable
  - Add HowTo schema for relevant content
  - Set up event schema for speaking engagements

---

## 📋 Quick Test URLs (After Deployment)

Visit these URLs to verify everything works:

```
https://ectsyawo.com/sitemap.xml
https://ectsyawo.com/robots.txt
https://ectsyawo.com/manifest.webmanifest
https://ectsyawo.com/server-sitemap.xml
https://ectsyawo.com/opengraph-image
https://ectsyawo.com/speaking/opengraph-image
```

All should return valid responses.

---

## 🎯 Target Keywords to Track

### Primary Keywords
- [ ] food systems expert
- [ ] food systems speaker
- [ ] nutrition speaker
- [ ] sustainable food systems

### Secondary Keywords
- [ ] evidence-based nutrition speaker
- [ ] food systems transformation
- [ ] consumer food empowerment
- [ ] keynote speaker food systems

### Long-tail Keywords
- [ ] food systems expert Ghana
- [ ] sustainable agriculture speaker
- [ ] nutrition research engineer
- [ ] food processing optimization expert

---

## 🔄 Monthly Maintenance Tasks

- [ ] Review Search Console for errors
- [ ] Check keyword rankings
- [ ] Update sitemap if needed (automatic on build)
- [ ] Review and update old content
- [ ] Check for broken links
- [ ] Monitor Core Web Vitals

---

## ✅ Completed Implementation

- ✅ Root layout metadata with full OG and Twitter cards
- ✅ Page-specific metadata for all routes
- ✅ Dynamic metadata for blog posts
- ✅ JSON-LD structured data (Person, Organization, Article, etc.)
- ✅ Sitemap configuration with next-sitemap
- ✅ Server-side sitemap for dynamic blog posts
- ✅ Robots.txt generation
- ✅ Open Graph images for home and speaking pages
- ✅ Web app manifest for PWA support
- ✅ Vercel Analytics integration
- ✅ Speed Insights integration

---

**Status**: Ready for launch! Complete the critical items above, then deploy.
