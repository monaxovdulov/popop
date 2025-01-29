import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { execSync } from "child_process";

// Get the Git commit hash
const commitHash = execSync("git rev-parse --short HEAD").toString().trim();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  define: {
    "import.meta.env.VITE_COMMIT_HASH": JSON.stringify(commitHash), // Add commit hash to env variables
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: "hidden",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // React libraries grouped as "vendor"
          i18n: [
            "i18next",
            "react-i18next",
            "i18next-http-backend",
            "i18next-browser-languagedetector",
          ], // i18n libraries grouped as "i18n"
          query: ["@tanstack/react-query"], // React Query grouped as "query"
        },
        chunkFileNames: (chunkInfo) => {
          // Libraries to exclude from commit hash
          const excludedLibraries = [
            "react",
            "react-dom",
            "@tanstack/react-query",
            "i18next",
            "react-i18next",
            "i18next-http-backend",
            "i18next-browser-languagedetector",
          ];

          // Check if the chunk includes any of the excluded libraries
          const isExcludedChunk = chunkInfo.moduleIds.some((id) =>
            excludedLibraries.some((lib) => id.includes(lib))
          );

          // Exclude commit hash for excluded libraries
          if (isExcludedChunk) {
            return "assets/[name].js";
          }

          // Append commit hash for all other chunks
          return `assets/[name]-[hash].js`;
        },
      },
    },
  },
});
