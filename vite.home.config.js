import { defineConfig } from 'vite';
export default defineConfig({ build: { lib: { entry: 'app.js', name: 'MindClarityHome', formats: ['iife'], fileName: () => 'home-react.js' }, outDir: 'dist-home', emptyOutDir: true } });
