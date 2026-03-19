// @ts-check
import { defineConfig, fontProviders, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  base: "/",
  image: {
    service: passthroughImageService(),
    domains: ['res.cloudinary.com'],
    remotePatterns: [{ protocol: "https" }]
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Poppins",
      cssVariable: "--font-poppins",
      weights: [400, 700]
    },
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-poppins",
      weights: [400, 500, 600, 700]
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      weights: [400, 700]
    }
  ]
});
