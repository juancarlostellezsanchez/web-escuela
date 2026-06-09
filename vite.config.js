import { defineConfig } from 'vite'

export default defineConfig({
  // Base para GitHub Pages: usa el nombre del repositorio
  base: '/web-escuela/',
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
