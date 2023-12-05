import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        form1: resolve(__dirname, `src/form1/index.html`),
        form2: resolve(__dirname, `src/form2/index.html`),
        form3: resolve(__dirname, `soc/form3/index.html`)
      }
    }
  }
  
})