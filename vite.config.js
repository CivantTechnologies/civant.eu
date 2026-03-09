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

  plugins: [react()],
});
