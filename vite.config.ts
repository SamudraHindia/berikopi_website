import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'three',
              test: /node_modules[\\/](three|@react-three[\\/](fiber|drei))[\\/]/,
            },
            {
              name: 'motion',
              test: /node_modules[\\/]framer-motion[\\/]/,
            },
          ],
        },
      },
    },
  },
})
