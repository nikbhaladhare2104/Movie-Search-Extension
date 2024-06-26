import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: './src/main.tsx',
        background: './src/background.ts',
        contentScript: './src/contentScript.ts',
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
})
