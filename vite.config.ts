import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { webfontDownload } from "vite-plugin-webfont-dl";
import { VitePWA } from "vite-plugin-pwa";
import AutoImport from "unplugin-auto-import/vite";
import { barrel } from "vite-plugin-barrel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    barrel({
      packages: ["lucide-react"],
    }),
    tailwindcss(),
    webfontDownload(),
    VitePWA({ registerType: "autoUpdate", injectRegister: "auto" }),
    AutoImport({
      include: [/\.[tj]sx?$/],
      imports: ["react", "react-router"],
      dirs: ["./src/components/@kirakit"],
      dts: "./auto-imports.d.ts",
      viteOptimizeDeps: true,
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/lib": path.resolve(__dirname, "./src/lib"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
      "@/store": path.resolve(__dirname, "./src/store"),
    },
  },
});
