import { defineConfig } from 'vite';

export default defineConfig({
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  build: {
    lib: { entry: 'site-entry.js', name: 'MindClarity', formats: ['iife'], fileName: () => 'site.js' },
    outDir: 'dist-bundle',
    emptyOutDir: true,
    // React renders HTML at build time; only navigation enhancement reaches visitors.
  }
});
