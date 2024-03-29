// 这里对首页 获取的医院数据类型进行限制

// 定义一个接口, 用来限制ts类型 -- 公共数据
export interface ResponseData {
	"code": number,
	"message": string,
	"ok": boolean
}

// ===================================
// 获取医院数据
// 定义一个接口, 用来限制data中content数据
export interface DataContent {
	"id": string,
	"createTime": string,
	"updateTime": string,
	"isDeleted": number,
	"param": {
		"hostypeString": string,
		"fullAddress": string
	},
	"hoscode": string,
	"hosname": string,
	"hostype": string,
	"provinceCode": string,
	"cityCode": string,
	"districtCode": string,
	"address": string,
	"logoData": string,
	"intro": string,
	"route": string,
	"status": number,
	"bookingRule": {
		"cycle": number,
		"releaseTime": string,
		"stopTime": string,
		"quitDay": number,
		"quitTime": string,
		"rule": string[]
	}
}

// 用来限制data中content数据
export type Content = DataContent[]

// 医院接口返回的所有数据
export interface HospitalResponseData extends ResponseData {
	"data": {
		"content": Content,
		"pageable": {
			"sort": {
				"sorted": boolean,
				"unsorted": boolean,
				"empty": boolean
			},
			"pageNumber": number,
			"pageSize": number,
			"offset": number,
			"paged": boolean,
			"unpaged": boolean
		},
		"totalPages": number,
		"totalElements": number,
		"last": boolean,
		"first": boolean,
		"sort": {
			"sorted": boolean,
			"unsorted": boolean,
			"empty": boolean
		},
		"numberOfElements": number,
		"size": number,
		"number": number,
		"empty": boolean
	},
}

// ===================================
// 获取医院等级和地区数据
export interface LevelAndRegion {
  "id": number,
  "createTime": string,
  "updateTime": string,
  "isDeleted": number,
  "param": {},
  "parentId": number,
  "name": string,
  "value": string,
  "dictCode": string,
  "hasChildren": boolean
}

// 医院等级和地区数据列表
export type LevelAndRegionArr = LevelAndRegion[]

// 医院等级和地区数据所有数据
export interface LevelAndRegionResponseData extends ResponseData {
	data: LevelAndRegionArr
}

// ===================================
// 医院搜索建议
export interface SearchResponseData extends ResponseData {
	data: Content
}