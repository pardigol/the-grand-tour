import { defineConfig } from 'vite';

export default defineConfig({
  // './' = relative Pfade, damit das Spiel auch unter https://<name>.github.io/<projekt>/ läuft
  base: './',
  server: { port: 5173 },
  build: { chunkSizeWarningLimit: 1200 },
});
