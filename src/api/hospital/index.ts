// 统一处理医院详情API
import require from "@/utils/require"

enum API {
	// 医院详情数据
	// 测试接口, 后续替换
	HOSPITAL_DETAIL__API = "/cmn/dict/findByDictCode/",

	// 医院部门数据
	// DEPARTMENT_API = "@/Static/department/index.ts"
}

export const reqHospitalDetail = (dictCode: string) => 
	require.get<any>(
		API.HOSPITAL_DETAIL__API + dictCode
	)


// 医院部门数据
// export const reqDepartment = () => {
// 	require.get(API.DEPARTMENT_API)
// }


