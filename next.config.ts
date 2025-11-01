import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable compression for faster transfers
  compress: true,

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Experimental optimizations
  experimental: {
    // Optimize package imports to reduce bundle size
    optimizePackageImports: [
      'react-icons',
      'react-bootstrap',
      'framer-motion',
      'lucide-react',
      'react-select',
      'aos',
      'gsap',
      'swiper',
      'slick-carousel',
      'react-slick',
      'glightbox'
    ],
    // Enable optimized CSS
    optimizeCss: true,
    // Optimize font loading
    optimizeServerReact: true,
    // Speed up builds with parallel processing
    webpackBuildWorker: true,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    // Remove React properties in production
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },

  // Performance and security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
      // Cache static assets aggressively
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache images
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Enable React strict mode for better optimization
  reactStrictMode: true,

  // Use SWC minifier (faster than Terser)
  swcMinify: true,

  // Remove X-Powered-By header
  poweredByHeader: false,

  // Production source maps for debugging (disable for smaller builds)
  productionBrowserSourceMaps: false,

  // Enable standalone output for smaller Docker images
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,

  // Optimize for production builds
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
    'react-bootstrap': {
      transform: 'react-bootstrap/{{member}}',
    },
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
    },
  },
};

export default nextConfig;
