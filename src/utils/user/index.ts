// 本地存储信息

export const GET_TOKEN =  () => {
	return localStorage.getItem("USER_TOKEN")
}

export const SET_TOKEN =  (userInfo: string) => {
	localStorage.setItem("USER_TOKEN", userInfo)
}

// 清除本地存储数据
export const REMOVE_TOKEN = () => {
	localStorage.removeItem("USER_TOKEN")
}