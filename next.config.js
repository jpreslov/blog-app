const { withAxiom } = require('next-axiom')

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withAxiom({
  ...nextConfig
})
