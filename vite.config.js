/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dynamicImportVariables from '@rollup/plugin-dynamic-import-vars';

import autoprefixer from 'autoprefixer';
import VirtualRoutes from './src/plugins/vite-plugin-virtual-routes';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dynamicImportVariables({
      include: ['./src/'],
    }),
    VirtualRoutes(),
  ],
  base: '/app/',
  server: {
    port: 7200,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
