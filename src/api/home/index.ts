// 统一处理接口API
import require from "@/utils/require"

// ts 枚举接口
enum API {
	// 获取医院数据的接口
	HOME_HOSPITAL_API = "/hosp/hospital/"
}

// 进行发送get请求获取医院数据
export const reqHospital = (page: number, limit: number) => require.get(API.HOME_HOSPITAL_API + `${page}/${limit}`)

