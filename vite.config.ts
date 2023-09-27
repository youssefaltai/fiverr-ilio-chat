import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  // add this to cache all the imports
  workbox: {
    globPatterns: ["**/*"],
  },
  // add this to cache all the
  // static assets in the public folder
  includeAssets: ["**/*"],
  manifest: {
    name: "Vino",
    short_name: "Vino",
    description: "An app that can show dogs.",
    icons: [
      {
        src: "/maskable_icon.png",
        sizes: "196x196",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/icon-384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
  resolve: {
    alias: [{ find: "~", replacement: "/src" }],
  },
});
