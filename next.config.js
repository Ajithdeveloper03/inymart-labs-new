/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/new',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
