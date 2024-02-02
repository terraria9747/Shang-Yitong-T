import { createRouter, createWebHistory, } from "vue-router"

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
			component: () => import("@/pages/hospital/index.vue"),
			children: [
				{
					path: "booking",
					component:() => import("@/pages/hospital/booking/index.vue"),
				},
				{
					path: "close",
					component:() => import("@/pages/hospital/close/index.vue"),
				},
				{
					path: "detail",
					component:() => import("@/pages/hospital/detail/index.vue"),
				},
				{
					path: "notice",
					component:() => import("@/pages/hospital/notice/index.vue"),
				},
				{
					path: "search",
					component:() => import("@/pages/hospital/search/index.vue"),
				},
				{
					path: '',
					redirect: '/hospital/booking'
				}
			]
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