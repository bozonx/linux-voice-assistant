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

    //   electron([
    //     {
    //       // Main process entry file
    //       entry: "electron/main.ts",
    //       vite: {
    //         build: {
    //           rollupOptions: {
    //             external: ["electron"],
    //           },
    //         },
    //       },
    //     },
    //     {
    //       entry: "electron/preload.ts",
    //       vite: {
    //         build: {
    //           rollupOptions: {
    //             external: ["electron"],
    //           },
    //         },
    //       },
    //     },
    //     {
    //       entry: "electron/vosk.ts",
    //       vite: {
    //         build: {
    //           rollupOptions: {
    //             external: ["electron"],
    //           },
    //         },
    //       },
    //     },
    //     {
    //       entry: "electron/helper-external.ts",
    //       vite: {
    //         build: {
    //           rollupOptions: {
    //             external: ["electron"],
    //           },
    //         },
    //       },
    //     },
    //     {
    //       entry: "electron/config.ts",
    //       vite: {
    //         build: {
    //           rollupOptions: {
    //             external: ["electron"],
    //           },
    //         },
    //       },
    //     },
    //   ]),
    //   renderer(),
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
