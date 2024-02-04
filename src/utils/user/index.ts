// 本地存储信息

export const GET_TOKEN =  () => {
	return localStorage.getItem("USER_TOKEN")
}

export const SET_TOKEN =  (userInfo: string) => {
	localStorage.setItem("USER_TOKEN", userInfo)
}