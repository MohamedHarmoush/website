/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
// BASE_PATH is set by GitHub Actions workflow
// For custom domain: empty string (no basePath needed)
// For GitHub Pages subdomain: /repo-name if not username.github.io
const basePath = process.env.BASE_PATH || ''

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true,
}

module.exports = nextConfig

