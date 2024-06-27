import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // popup: './src/main.tsx',
        popup: './index.html',
        background: './src/background.ts',
        contentScript: './src/contentScript.ts',
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
})
