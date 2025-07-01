import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? 'https://github.com/FoundationForYouthInitiative/ethio-sudan/blob/main/vite.config.ts' : '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))

