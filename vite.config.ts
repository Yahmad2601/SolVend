import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
      "@assets": path.resolve(__dirname, "./client/src/assets"),
    },
  },
  build: {
    outDir: "dist",
  },
  server: {
    // This is for local development and is fine to keep
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
