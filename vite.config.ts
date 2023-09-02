import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueTypeImports from "vite-plugin-vue-type-imports";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(
    {
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.search("lottie-player") === 0
        }
    }
}), VueTypeImports()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  }
})
