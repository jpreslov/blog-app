/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/dyxfzorto/image/upload'
  }
}

module.exports = nextConfig
