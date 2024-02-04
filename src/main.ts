// vue3提供的方法, 可以用来创建应用实例方法
import { createApp } from 'vue'

// 清除默认样式
import "@/style/reset.scss"

// 导入根组件APP
import App from './App.vue'

// 引入全局组件 -- 顶部和底部 -- 登录
import HospitalTop from "@/components/hospital_top/index.vue"
import HospitalBottom from "@/components/hospital_bottom/index.vue"
import Login from "@/components/login/index.vue"

// 导入路由
import router from './router'

// 导入element-UI插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// element-UI中文国际化的配置
// 忽略ts校验
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 导入pinia
import createPinia from "@/store/index"

// 利用createApp方法创建应用实例, 将应用实例挂载到挂载点上
const app = createApp(App)

// 安装路由
app.use(router)

// 全局注册组件
app.component("HospitalTop", HospitalTop)
app.component("HospitalBottom", HospitalBottom)
app.component("Login", Login)

// 安装element-UI插件
app.use(ElementPlus, {
  locale: zhCn, // 中文
})

// 安装pinia仓库
app.use(createPinia)

// 挂载
app.mount('#app')
