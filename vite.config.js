/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dynamicImportVariables from '@rollup/plugin-dynamic-import-vars';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dynamicImportVariables({
      include: ['./src/'],
    }),
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
});
