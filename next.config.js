/**
 * @type {import('next').NextConfig}
 */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = withBundleAnalyzer(nextConfig)