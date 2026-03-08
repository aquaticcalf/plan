import { defineConfig } from "vite"
import solid from "vite-plugin-solid"
import path from "node:path"
import Unfonts from "unplugin-fonts/vite"

export default defineConfig({
  plugins: [
    solid(),
    Unfonts({
      google: {
        families: ["Concert One"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
    },
  },
})
