import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  
  resolve: {
    alias: {
      //set gobal path config
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [vue()],
  server: {
    port: 8080,
    hmr: {
      overlay: false
    },
    proxy: {
      '/get': {
        target: 'http://127.0.0.1:3000',	//实际请求地址
        changeOrigin: true,
      },
    }
 },
  //set gobal css file
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${resolve(__dirname, 'src/assets/constant.less')}";`
      }
    }
  },
  //打包配置
  build:{
    assetsDir:"static",
    rollupOptions:{
      
      input:{
        index:resolve(__dirname,"index.html"),
      },
      output:{
        chunkFileNames:'js/[name]-[hash].js',
        entryFileNames:"js/[name]-[hash].js",
        assetFileNames:"[ext]/name-[hash].[ext]"
      }
    },
  },
})
