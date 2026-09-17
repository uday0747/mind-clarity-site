import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: { entry: 'bundle-entry.js', name: 'MindClarity', formats: ['iife'], fileName: () => 'react-app.js' },
    outDir: 'dist-bundle',
    emptyOutDir: true,
    rollupOptions: { output: { inlineDynamicImports: true, assetFileNames: 'assets/[name][extname]' } }
  }
});
