import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // optional
  images: {
    domains: ['via.placeholder.com'], // ✅ external image domains
  },
  webpack(config) {
    // For PDF support
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    });
    return config;
  },
};

export default nextConfig;
