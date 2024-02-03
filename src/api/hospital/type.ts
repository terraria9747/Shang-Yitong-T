// 这里对首页 获取的医院数据类型进行限制

// 定义一个接口, 用来限制ts类型 -- 公共数据
export interface ResponseData {
	"code": number,
	"message": string,
	"ok": boolean
}

