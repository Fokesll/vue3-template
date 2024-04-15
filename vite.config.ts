import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import tailwindcss from  'tailwindcss'
import autoprefixer from 'autoprefixer'


export default defineConfig({
  plugins: [vue()],
  server:{
    proxy:{
      '/test':{
          target: 'http://localhost:3000',
          changeOrigin: true,
      }
    }
  },
  resolve:{
    alias:{
      "@": path.resolve(__dirname, "./src"),
      "@c":path.resolve(__dirname, "./src/components"),
      "@a":path.resolve(__dirname, "./src/assets"),
      "@v":path.resolve(__dirname, "./src/view"),
      "@r":path.resolve(__dirname, "./src/router"),
      "@s":path.resolve(__dirname,"./src/pinia")
    }
  },
  css:{
    postcss: {
      plugins: [
        tailwindcss, 
        autoprefixer,
      ]
    }
  },
  build:{
    outDir: "dist",
    assetsDir: "assets",

  }
})