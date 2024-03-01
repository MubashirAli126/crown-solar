/** @type {import('next').NextConfig} */

const withVideos = require('next-videos')

// const nextConfig = {}; // Your current Next Config object
const nextConfig = {
  experimental: {
    appDir: true,
  },
}
module.exports = withVideos(nextConfig,
    {
    distDir: '../../.next',
  },
  );