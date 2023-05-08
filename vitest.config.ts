import { defineConfig } from 'vitest/config'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import { viteMockServe as mock } from 'vite-plugin-mock'
import mkcert from 'vite-plugin-mkcert'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [react(), legacy(), mock(), mkcert(), svgLoader()],
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
  test: {
    root: '.',
    watch: false,
    environment: 'jsdom',
    include: ['tests/{unit,components}/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    reporters: ['default', 'html'],
    coverage: {
      provider: 'c8',
      enabled: true,
    },
    cache: {},
  },
})
