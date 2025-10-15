import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // This correctly tells Vite that your frontend application lives in the 'client' folder.
  root: "client",

  plugins: [react()],

  resolve: {
    alias: {
      // This correctly defines the "@" alias to point to the 'client/src' directory.
      "@": path.resolve(__dirname, "./client/src"),

      // This is the CRUCIAL ADDITION that fixes the error.
      // It defines the "@assets" alias to point to your assets folder.
      "@assets": path.resolve(__dirname, "./client/src/assets"),
    },
  },

  build: {
    // This correctly tells Vite to place the build output in a 'dist' folder at the project root.
    outDir: "../dist",
    emptyOutDir: true,
  },
});
