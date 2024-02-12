const path = require('path');
const stylexPlugin = require('@stylexjs/nextjs-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-**",
      },
    ],
  },
};

module.exports = stylexPlugin({
  aliases: {
    '@/*': [path.join(__dirname, '*')],
  },
  rootDir: __dirname,
})(nextConfig);