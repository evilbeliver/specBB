/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === 'production' ? '/specBB' : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: basePath,
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
    removeConsole: process.env.NODE_ENV === 'production',
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
