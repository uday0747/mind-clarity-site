import { defineConfig } from 'vite';
export default defineConfig({
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  build: { lib: { entry: 'app.js', name: 'MindClarityHome', formats: ['iife'], fileName: () => 'home-react.js' }, outDir: 'dist-home', emptyOutDir: true }
});
