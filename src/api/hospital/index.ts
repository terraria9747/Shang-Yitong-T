// 统一处理医院详情API
import require from "@/utils/require"

// @ts-ignore
import { Weixinlogin, WXLoginResponse } from "@/api/hospital/types.ts"

enum API {
	// 医院详情数据
	// 测试接口, 后续替换
	HOSPITAL_DETAIL__API = "/cmn/dict/findByDictCode/",

	// 医院部门数据
	// DEPARTMENT_API = "@/Static/department/index.ts"

	// 获取手机验证码
	TELEPHONE_CODE = "/sms/send/",

	// 用户登录
	USER_LOGIN = "/user/login",

	// 微信扫码登录
	WEICHAT_LOGIN = "/user/weixin/getLoginParam/",

	// 获取可预约的排班数据
	// 测试接口, 后续替换
	WORKDATE = "..."
}

export const reqHospitalDetail = (dictCode: string) => 
	require.get<any>(
		API.HOSPITAL_DETAIL__API + dictCode
	)


// 医院部门数据
// export const reqDepartment = () => {
// 	require.get(API.DEPARTMENT_API)
// }

// 获取手机验证码
export const reqCode = (phone: string) => 
	require.get<any, any>(
		API.TELEPHONE_CODE + phone
	)

// 用户登录
export const login = (data: string) => 
	require.post<any, any>(
		API.USER_LOGIN, data
	)

// 微信扫码登录
export const weiXinLogin = (wxRedirectUri: Weixinlogin) => 
	require.get<any, WXLoginResponse>(
		API.WEICHAT_LOGIN + `?wxRedirectUri=${wxRedirectUri}`
	)

// 获取可预约的排班数据
// 测试接口, 后续替换
// WORKDATE = "..."
export const workDate = () => 
	require.get<any, any>(
		API.WORKDATE + `...`
	)
