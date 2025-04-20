import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true, // Optional: make the SVG an icon component
          },
        },
      ],
    })
    return config
  },
}

export default nextConfig
