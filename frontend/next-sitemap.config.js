/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ectsyawo.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/studio', '/studio/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio', '/api'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/studio', '/api'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://ectsyawo.com/server-sitemap.xml', // For dynamic blog posts
    ],
  },
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/speaking') {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/insights/')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path === '/insights') {
      priority = 0.9;
      changefreq = 'daily';
    } else if (path === '/about' || path === '/research') {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path === '/contact') {
      priority = 0.7;
      changefreq = 'yearly';
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
    };
  },
};
