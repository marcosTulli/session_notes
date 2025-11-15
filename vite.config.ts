import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import topLevelAwait from 'vite-plugin-top-level-await';
import { version } from './package.json';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
    topLevelAwait(),
  ],
  resolve: {
    alias: [
      { find: /^~(.*)$/, replacement: '$1' },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@models', replacement: path.resolve(__dirname, 'src/models') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@store', replacement: path.resolve(__dirname, 'src/store') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles/index.scss') },
      {
        find: '@services',
        replacement: path.resolve(__dirname, 'src/services'),
      },
      { find: '@theme', replacement: path.resolve(__dirname, 'src/theme') },
      { find: '@config', replacement: path.resolve(__dirname, 'src/config') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
    ],
  },
  server: {
    port: 3000,
    host: true,
    strictPort: true,
  },
  define: {
    'window.APP_VERSION': JSON.stringify(version),
  },
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
      include: ['**/models/*.js'],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
});
