/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    clientRouterFilter: true,
    clientRouterFilterRedirects: true,
  },
};

export default nextConfig;
