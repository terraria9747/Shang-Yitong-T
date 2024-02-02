// 导入aixos
import axios from "axios"
import { ElMessage } from 'element-plus'

// 利用create方法创建axios实例
const request = axios.create({
	baseURL: "/api",
	timeout: 5000
})

// 请求拦截器
request.interceptors.request.use((config) => {
	// console.log("请求拦截器", config);
	// 这里可以配置请求参数, 请求头, token等信息
	return config
})

// 响应拦截器
request.interceptors.response.use((response) => {
	// 处理响应的数据
	// console.log("响应拦截器", response);
	return response.data
}, (error) => {
	// 处理错误信息
	console.log("错误信息", error);
	const status = error.response.status
	switch (status) {
		case 404:
			ElMessage({
				message: '数据不存在, 请检查网络',
				type: 'error',
			})
			break;
	
		case 500||501||502||503||504||505:
			ElMessage({
				message: '服务器不存在, 请联系管理员',
				type: 'error',
			})
			break;
		default:
			break;
	}
	return error
})

// 向外暴露request
export default request