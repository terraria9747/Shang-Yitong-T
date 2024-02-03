import { defineStore } from "pinia"
// 导入请求医院详情的接口
import { reqHospitalDetail } from "@/api/hospital/index.ts"
import department from "@/Static/department/index.ts"

const useDeatilStore = defineStore("Detail", {
	state() {
			return {
				hospitalData: [],
				departmentData: {},
			}
	},
	actions: {
		async getHospital(address: string) {
  		console.log("获取医院数据~~~");
			let result = await reqHospitalDetail(address);
			this.hospitalData = result.data
		},
		// 获取医院科室或者部门信息
		getDepartment() {
			// 模拟数据, 这里需要发请求获取数据
			this.departmentData = department.data
		}
	},
	getters: {},
})

export default useDeatilStore