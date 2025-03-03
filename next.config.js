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
    async redirects() {
      return [
        {
          source: '/(life|rate|database)/:path*',
          destination: '/',
          permanent: true,
        },
      ]
    }
}

module.exports = nextConfig
