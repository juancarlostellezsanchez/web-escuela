import { defineConfig } from 'vite'

export default defineConfig({
  // Base relativa: funciona en Vercel, GitHub Pages y local
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: './index.html'
    }
  },
  // Para desarrollo local, asegura que los assets se sirvan correctamente
  server: {
    open: true
  }
})
