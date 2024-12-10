import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "public/manifest.json", dest: "." },
        { src: "public/devtools.html", dest: "." },
        { src: "public/panel.html", dest: "." },
        { src: "public/popup.html", dest: "." },
      ],
    }),
  ],
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        popup: "./src/popup/Popup.tsx",
        devtools: "./src/devtools.ts",
        panel: "./src/panel/Panel.tsx",
        content: "./src/content.ts",
        background: "./src/background.ts",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
