import {createRouter, createWebHistory, } from "vue-router"

export default createRouter({
	// 路由模式 hash模式
	history: createWebHistory(),

	routes: [
		{
			path: "/home",
			component: () => import("@/pages/home/index.vue") // 路由懒加载
		},
		{
			path: "/hospital",
			component: () => import("@/pages/hospital/index.vue")
		},
		{
			path: "/",
			// 路由重定向
			redirect: "/home",
		}
	],

	// 滚动行为: 控制滚动条的位置
	scrollBehavior() {
		return {
			left: 0,
			top: 0
		}
	}
})