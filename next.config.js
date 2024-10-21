/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Enables static export
  basePath: process.env.NODE_ENV === 'production' ? '/anshgwash.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/anshgwash.github.io/' : '',
};

module.exports = nextConfig;