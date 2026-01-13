const nextConfig = {
  output: 'standalone',
  experimental: {
    authInterrupts: true,
  },
  // Improved ISR and dynamic route handling
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
    qualities: [75, 85, 90],
  },
  // Ensure Studio is statically generated
  typescript: {
    // Needed for Sanity Studio
    ignoreBuildErrors: true,
  },
  eslint: {
    // Needed for Sanity Studio
    ignoreDuringBuilds: true,
  },
  // Add custom 404 page handling
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN"
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff"
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block"
        }
      ]
    }
  ]
};

export default nextConfig;
