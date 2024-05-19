import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  publicDir: resolve(__dirname, "public"),
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        "js/index": resolve(__dirname, "src/js/index.mjs"),
        "css/style.css": resolve(__dirname, "src/css/tailwind.css"),
        main: resolve(__dirname, "src/index.html"),
        register: resolve(__dirname, "src/register/index.html"),
        login: resolve(__dirname, "src/login/index.html"),
        newListing: resolve(__dirname, "src/newListing/index.html"),
        product: resolve(__dirname, "src/product/index.html"),
        profile: resolve(__dirname, "src/profile/index.html"),
      },
      output: {
        entryFileNames: "[name].mjs",
        assetFileNames: "[name][extname]",
      },
    },
    outDir: "../dist",
  },
});
