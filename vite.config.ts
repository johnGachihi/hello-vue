import { defineConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";
import vue from '@vitejs/plugin-vue'

export default defineVitestConfig({
  plugins: [vue()],
  resolve: { alias: { "@": "/src" } },
  test: {
    globals: true,
    environment: "jsdom"
  }
})