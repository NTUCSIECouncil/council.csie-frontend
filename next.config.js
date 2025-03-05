/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:3010/api/:path*',
        },
      ]
    },
}

module.exports = nextConfig
