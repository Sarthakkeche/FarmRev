import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),
],
 build: {
    outDir: 'dist',
     target: 'esnext',
  },
  server: {
    fs: {
      strict: false,
    },
  },
  esbuild: {
    target: 'esnext' // ✅ allow top-level await
  },
})
