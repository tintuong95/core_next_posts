/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST,
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    NEXT_PUBLIC_VERCEL_URL_PROTOCOL:
      process.env.NEXT_PUBLIC_VERCEL_URL_PROTOCOL,
  },
};

module.exports = nextConfig
