import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
// Supports weights 100-900


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), ],
  
})
