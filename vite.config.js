import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Choose an available port other than 5173
    host: 'localhost' // Use 'localhost' instead of the default `::1` (IPv6)
  }
})


