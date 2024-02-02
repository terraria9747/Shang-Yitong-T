// 统一处理接口API
import require from "@/utils/require"
//@ts-ignore
import { HospitalResponseData, LevelAndRegionResponseData } from "@/api/home/type"

// ts 枚举接口
enum API {
	// 获取医院数据的接口
	HOME_HOSPITAL_API = "/hosp/hospital/",

	// 获取医院等级和地区数据
	HOSPITAL_LEVEL_REGION_API = "/cmn/dict/findByDictCode/",
}

// 进行发送get请求获取医院数据
// 对请求的数据进行ts限制
export const reqHospital = (page: number, limit: number) => require.get<any, HospitalResponseData>(API.HOME_HOSPITAL_API + `${page}/${limit}`)

// 获取医院等级和地区数据
export const reqHospitalAndLevel = (dictCode: string) => require.get<any, LevelAndRegionResponseData>(API.HOSPITAL_LEVEL_REGION_API + dictCode)

