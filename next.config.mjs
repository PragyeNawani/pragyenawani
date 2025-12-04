/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    appDir: true, // Only needed for App Router
  },
  images: {
    domains: [], // Add image domains if needed
  },
};

export default nextConfig;
