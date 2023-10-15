/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-**",
      },
    ],
  },
};

module.exports = nextConfig;
