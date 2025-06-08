import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // tailwindcss(),
    Components({
      /* options */
    }),
    AutoImport({
      imports: ["vue", "vue-router"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  // resolve: {
  //   alias: {
  //     "@": fileURLToPath(new URL("./src", import.meta.url)),
  //   },
  // },
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
});
