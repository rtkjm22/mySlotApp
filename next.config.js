/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'placehold.jp',
    //   },
    // ],
    domains: ['placehold.jp']
  }
}

module.exports = nextConfig
