/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
// BASE_PATH is set by GitHub Actions workflow, or defaults based on environment
// For GitHub Pages: empty string if repo is username.github.io, otherwise /repo-name
const basePath = process.env.BASE_PATH || (isProd ? '' : '')

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

