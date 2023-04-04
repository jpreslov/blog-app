// const { withAxiom } = require('next-axiom')

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gravatar.com'
      },
      {
        protocol: 'https',
        hostname: 'images.clerk.dev'
      }
    ]
  }
}

module.exports = {...nextConfig}

// module.exports = withAxiom({
//   ...nextConfig
// })
