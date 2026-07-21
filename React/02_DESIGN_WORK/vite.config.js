import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';               // added this import 

// https://vite.dev/config/npm install tailwindcss @tailwindcss/vite
export default defineConfig({
  plugins: [react(), tailwindcss()],                // added : tailwindcss()
})
