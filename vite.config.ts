import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const cherryPickedKeys = [
  "REACT_APP_PUBLIC_URL",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_PUBLIC_URL': JSON.stringify(env.REACT_APP_PUBLIC_URL)
    },
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
  }
})
