import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // The root is correctly set to your frontend's directory
  root: "client",
  plugins: [react()],

  resolve: {
    alias: {
      // The aliases are now corrected to be relative to the 'client' root
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared"), // Corrected path to go up one level
      "@assets": path.resolve(__dirname, "src/assets"), // Corrected path
    },
  },

  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },

  // The server proxy is useful for local development but can be removed if you prefer
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
