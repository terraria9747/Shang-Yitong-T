import { defineStore } from "pinia"
// @ts-ignore
import { reqCode } from "@/api/hospital/index.ts"

const userStore = defineStore("user", {
	state() {
			return {
				dialogVisible: false,
				phoneCode: ""
			}
	},

	actions: {
		async getCode(phone: string) {
			const result =  await reqCode(phone)
			this.phoneCode = result.data
		}
	},

	getters: {

	}
})

export default userStore
