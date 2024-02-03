import { defineStore } from "pinia"
// 导入请求医院详情的接口
import { reqHospitalDetail } from "@/api/hospital/index.ts"

const useDeatilStore = defineStore("Detail", {
	state() {
			return {
				hospitalData: []
			}
	},
	actions: {
		async getHospital(address: string) {
  		console.log("获取医院数据~~~");
			let result = await reqHospitalDetail(address);
			this.hospitalData = result.data
		}
	},
	getters: {},
})

export default useDeatilStore