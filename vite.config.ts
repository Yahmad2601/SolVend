import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // This new 'root' property tells Vite where your frontend code and index.html are located.
  root: "client",

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "client/src/assets"),
    },
  },

  build: {
    outDir: "../dist", // The output directory is now relative to the 'client' root.
    emptyOutDir: true,
  },
});
