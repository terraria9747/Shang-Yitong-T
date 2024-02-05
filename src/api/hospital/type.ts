// 这里对首页 获取的医院数据类型进行限制

// 定义一个接口, 用来限制ts类型 -- 公共数据
export interface ResponseData {
	"code": number,
	"message": string,
	"ok": boolean
}

// 用户登录请求携带的参数
export interface loginData  {
	phone: string,
	code: string,
}

// 用户登录请求响应的数据
export interface loginResponse {
	"code": number,
	"data": {},
	"message": string,
	"ok": boolean
}

// 微信登录类型限制
export interface Weixinlogin {
	"redirect_uri": string,
	"appid": string,
	"state": string,
	"scope": string,
}

export interface WXLoginResponse extends ResponseData {
	data: Weixinlogin
}

