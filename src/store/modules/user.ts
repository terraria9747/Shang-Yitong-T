import { defineStore } from "pinia"
// @ts-ignore
import { reqCode, login } from "@/api/hospital/index.ts"

import { GET_TOKEN, SET_TOKEN } from "@/utils/user/index.ts"

const userStore = defineStore("user", {
	state() {
			return {
				dialogVisible: false,
				phoneCode: "",
				// userinfo: JSON.parse(localStorage.getItem("USER_TOKEN") as string) || {}
				userinfo: JSON.parse(GET_TOKEN() as string) || {}
			}
	},

	actions: {
		async getCode(phone: string) {
			const result =  await reqCode(phone)
			this.phoneCode = result.data
		},

		async goLogin(loginData: string) {
			let result =  await login(loginData)
			console.log(result);
			if (result.code === 200) {
				this.userinfo = result.data
				// localStorage.setItem("USER_TOKEN", JSON.stringify(result.data))
				SET_TOKEN(JSON.stringify(this.userinfo))
				
				return "ok"
			} else {
				return Promise.reject(new Error(result.message))
			}
		}
	},

	getters: {

	}
})

export default userStore
