/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/portfolio-w-tailwind-nextjs",
  
  assetPrefix: "/portfolio-w-tailwind-nextjs",
  swcMinify: true,
};

module.exports = nextConfig;
