/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output static files for GitHub Pages
  output: 'export',
  // Ensure paths work under a subpath (for project pages)
  reactStrictMode: true,
  // Set base path for GitHub Pages repository
  basePath: "/Wedding-Hall",
  assetPrefix: "/Wedding-Hall/",
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
