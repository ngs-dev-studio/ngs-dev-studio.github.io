import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' => rutas relativas: funciona en la raíz o en un subdirectorio de GitHub Pages.
export default defineConfig({
  base: './',
  plugins: [react()],
});
