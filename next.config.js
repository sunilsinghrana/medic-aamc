/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/medicines",
        destination: "http://localhost:3001/api/medicines",
      },
    ];
  },
}

module.exports = nextConfig

module.exports = {
    experimental :{
        serverActions: true,
        serverComponentsExternalPackages: ['mongoose']
    }
}
