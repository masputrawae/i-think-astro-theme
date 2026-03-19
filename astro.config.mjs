// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
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
