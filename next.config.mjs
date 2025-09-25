/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const assetPrefix = basePath ? `${basePath}/` : undefined

const nextConfig = {
  // Output static files for GitHub Pages
  output: 'export',
  // Ensure paths work under a subpath (for project pages)
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: "/Wedding-Hall/",
  basePath: "/Wedding-Hall",
  assetPrefix,
  // Avoid image optimizer since GH Pages is static hosting
  images: {
    unoptimized: true,
  },
  // Trailing slashes help static hosts resolve to index.html
  trailingSlash: true,
  // Keep existing settings
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
