import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// This is the combined and corrected configuration for Vercel deployment.
export default defineConfig({
  // We are only keeping the essential 'react()' plugin.
  // The Replit-specific plugins have been removed.
  plugins: [react()],

  // We are standardizing the path aliases.
  resolve: {
    alias: {
      // "@" will now correctly point to your main source folder.
      "@": path.resolve(__dirname, "client/src"),
      // We keep the "@shared" alias as it might be used in your project.
      "@shared": path.resolve(__dirname, "shared"),
      // We are correcting the "@assets" alias to point to the correct folder.
      "@assets": path.resolve(__dirname, "client/src/assets"),
    },
  },

  // The 'root' property has been removed to allow Vercel to handle the project structure correctly.

  // The build output is simplified to work with Vercel's static-build configuration.
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  // The 'server' configuration is for local development and can be removed for cleaner deployment,
  // but it is harmless to keep.
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
