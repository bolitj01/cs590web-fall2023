import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  

  server: {
    proxy: {
      '/api': 'http://localhost:3000' // Add any necessary proxy configuration
    },
    host: '0.0.0.0', // Allow access from all hosts
    open: true // Open the browser automatically when starting Vite
  }


})
