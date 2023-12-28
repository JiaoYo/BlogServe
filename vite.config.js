import { defineConfig } from 'vite'
import path from 'path' 
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
        "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
    }
  },
  css: {
    preprocessorOptions: {
        scss: {
            additionalData: '@use "@/assets/css/vars.scss" as *;'
        }
    }
}


})
