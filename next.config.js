/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  output: process.env.NODE_ENV === 'development' ? undefined : 'export',
  basePath: '/new',
  trailingSlash: true,
};

module.exports = nextConfig;
