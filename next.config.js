const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
  images: {
    disableStaticImages: true,
    formats: ['image/avif', 'image/webp'],
    domains: ['loremflickr.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
