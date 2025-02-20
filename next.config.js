/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.resolve.extensions = ['.js', '.jsx', '.json'];
    return config;
  },
  experimental: {
    esmExternals: 'loose'
  }
}

module.exports = nextConfig
