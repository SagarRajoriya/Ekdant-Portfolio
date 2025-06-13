/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placehold.co"],
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
