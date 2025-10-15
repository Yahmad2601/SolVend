import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // This tells Vite that your frontend application lives in the 'client' folder.
  root: "client",

  plugins: [react()],

  resolve: {
    alias: {
      // This is the crucial fix. It correctly defines the "@" alias
      // to point to the 'client/src' directory.
      "@": path.resolve(__dirname, "./client/src"),
    },
  },

  build: {
    // This tells Vite to place the build output in a 'dist' folder at the project root.
    outDir: "../dist",
    emptyOutDir: true,
  },

  // This section is for local development and helps mimic the production setup.
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
