/// <reference types="vitest" />

import analog from '@analogjs/platform';
import { vavite } from 'vavite';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    publicDir: 'src/public',
    build: {
      target: ['es2020'],
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

    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      cache: {
        dir: `../../node_modules/.vitest`,
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
    optimizeDeps: {
      // Vite does not work well with optionnal dependencies,
      // mark them as ignored for now
      // see: https://github.com/axe-me/vite-plugin-node/blob/main/examples/nest/vite.config.ts
      exclude: [
        '@nestjs/microservices',
        '@nestjs/websockets',
        'cache-manager',
        'class-transformer',
        'class-validator',
        'fastify-swagger',
      ],
    },
  };
});
