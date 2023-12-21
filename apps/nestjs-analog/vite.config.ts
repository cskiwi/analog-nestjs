/// <reference types="vitest" />

import analog from '@analogjs/platform';
import { vavite } from 'vavite';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  publicDir: 'src/public',
  build: {
    outDir: '../../dist/client-analog',
  },
  plugins: [
    analog(),
    vavite({
      serverEntry: '/src/server/main.ts',
      serveClientAssetsInDev: true,
    }),
    nxViteTsPaths(),
    splitVendorChunkPlugin(),
  ],
});
