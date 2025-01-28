import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',  // Assurez-vous que Vite génère le build dans le répertoire "dist"
  },
  plugins: [react()],
})
