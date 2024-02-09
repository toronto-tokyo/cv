import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: '/src/app',
      assets: '/src/assets',
      components: '/src/components',
      context: '/src/context',
      hoc: '/src/hoc',
      hook: '/src/hook',
      layouts: '/src/layouts',
      locales: '/src/locales',
      pages: '/src/pages',
      store: '/src/store',
      router: '/src/router',
      types: '/src/types',
      shared: '/src/shared',
      test: '/src/test',
      utils: '/src/utils',
    },
  },
})
