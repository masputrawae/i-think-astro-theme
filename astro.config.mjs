// @ts-check
import { defineConfig, fontProviders, passthroughImageService } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import sitemap from '@astrojs/sitemap'

import mdx from '@astrojs/mdx'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  base: '/',

  image: {
    service: passthroughImageService(),
    domains: ['res.cloudinary.com'],
    remotePatterns: [{ protocol: 'https' }]
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Poppins',
      cssVariable: '--font-poppins',
      weights: [400, 600],
      fallbacks: [
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600, 700],
      fallbacks: [
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      weights: [400, 700]
    }
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(), mdx(), icon()]
})
