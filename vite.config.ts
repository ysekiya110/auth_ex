import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/~ysekiya/auth_ex1/",
  publicDir: "public/~ysekiya/auth_ex1/",
  build: {
    rollupOptions: {
      input: {
        auth: resolve(__dirname, 'src/ysekiya/index.html'),
        inputUser: resolve(__dirname, 'src/inputUser/index.html'),
        Login: resolve(__dirname, 'src/Login/index.html'),
      }
    },
    outDir: 'auth_ex1',
  },

  server: {
    host: "0.0.0.0"
  },



})