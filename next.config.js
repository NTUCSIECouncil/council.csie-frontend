// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_BASE_URL || 'http://localhost:3010'}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
