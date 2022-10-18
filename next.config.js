/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/portfolio-w-tailwind-nextjs",
    domains: ["https://kmlbss.github.io/portfolio-w-tailwind-nextjs"],
  },
  basePath: "/portfolio-w-tailwind-nextjs",
  assetPrefix: "/portfolio-w-tailwind-nextjs",
  swcMinify: true,
};

module.exports = nextConfig;
