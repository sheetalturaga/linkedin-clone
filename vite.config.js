import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupOptions: {
    external: [
      "react",
      "nonid",
      "polished",
      "react-dom",
      "react-router-dom",
      "sytled-components",
      "vite-plugin-svgr",
    ],
  },
})
