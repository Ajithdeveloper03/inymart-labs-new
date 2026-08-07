/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  output: 'export',
  basePath: '/new',
  trailingSlash: true,
};

module.exports = nextConfig;
