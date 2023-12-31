import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Guanaco_Tickets/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/tailwind.css";`,
      },
    },
  },
  resolve: {
    alias: {
      '@material-tailwind/react': resolve(__dirname, 'node_modules/@material-tailwind/react'),
    },
  },
  experimental: {
    renderBuiltUrl(filename, hostType) {
      if (hostType === 'js') {
        return { runtime: `window.__toCdnUrl(${JSON.stringify(filename)})` }
      } else {
        return { relative: true }
      }
    }
  }
});