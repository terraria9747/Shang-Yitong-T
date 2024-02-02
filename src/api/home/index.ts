// 统一处理接口API
import require from "@/utils/require"
//@ts-ignore
import { HospitalResponseData } from "@/api/home/type"

// ts 枚举接口
enum API {
	// 获取医院数据的接口
	HOME_HOSPITAL_API = "/hosp/hospital/"
}

// 进行发送get请求获取医院数据
// 对请求的数据进行ts限制
export const reqHospital = (page: number, limit: number) => require.get<any, HospitalResponseData>(API.HOME_HOSPITAL_API + `${page}/${limit}`)

