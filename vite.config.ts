import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import { viteMockServe as mock } from 'vite-plugin-mock'
import mkcert from 'vite-plugin-mkcert'
import svgLoader from 'vite-svg-loader'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint'
import visualizer from 'rollup-plugin-visualizer'
import inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    react(),
    legacy(),
    mock(),
    mkcert(),
    svgLoader(),
    eslint({
      cache: true,
      cacheLocation: 'node_modules/.eslint/.eslintcache',
    }),
    stylelint({
      cache: true,
      cacheLocation: 'node_modules/.stylelint/.stylelintcache',
    }),
    visualizer({
      filename: 'report.html',
      title: 'report',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    inspect(),
  ],
  resolve: {
    alias: {
      '~': __dirname,
      '@': path.resolve(__dirname, './src/'),
    },
  },
  css: {
    devSourcemap: true,
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    https: true,
    open: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true,
    https: true,
    open: true,
  },
})
