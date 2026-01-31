/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoSubpath = 'specBB';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: isProd ? `/${repoSubpath}/` : '',
  basePath: isProd ? `/${repoSubpath}` : '',
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    removeConsole: isProd,
  },
};

module.exports = nextConfig;

module.exports = nextConfig;
