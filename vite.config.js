import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    eslint(),
    react(),
    tailwindcss(),
  ],
  base: `/${path.basename(path.resolve())}/`,
})
