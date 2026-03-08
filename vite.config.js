import base44 from "@base44/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  // Keep build output predictable + ensure /public is copied
  publicDir: "public",
  css: {
    // Keep legacy SPA Tailwind/PostCSS pipeline isolated from Next.js App Router build.
    postcss: "./postcss.vite.config.cjs",
  },

  build: {
    outDir: "dist",
  },

  plugins: [
    base44({
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === "true",
      hmrNotifier: true,
      navigationNotifier: true,
      visualEditAgent: true,
    }),
    react(),
  ],
});
