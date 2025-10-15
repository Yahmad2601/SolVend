import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "client",
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },

  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },

  // This is the new section to add
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001", // This should match the port your local server would run on
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
