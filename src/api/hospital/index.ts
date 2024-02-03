// 统一处理医院详情API
import require from "@/utils/require"

enum API {
	// 测试接口, 后续替换
	HOSPITAL_DETAIL__API = "/cmn/dict/findByDictCode/",
}

export const reqHospitalDetail = (dictCode: string) => 
	require.get<any>(
		API.HOSPITAL_DETAIL__API + dictCode
	)


