import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
     "@": path.resolve(__dirname, 'src')
    }
  },

  // 处理跨域问题, 使用跨域代理
  // 本地服务器与接口的协议一致, 但是域名和端口不一致
  server: {
    proxy: {
      '/api': {
        target: 'http://syt.atguigu.cn',
        changeOrigin: true,
      },
    }
  }
})
