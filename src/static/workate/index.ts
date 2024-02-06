// 模拟可预约的排班数据
// availableNumber: 1 可约 | -1 约满了
// status: 1 有号 | 0 无号 | -1 即将放号

export default {
	data:
		{
		"hospital": "济宁医学院附属医院",
		"type": "三级甲等",
		"department": "多发性硬化专科",
		"work": [
			{
				"workDate": "2024-2-6",
				"workDateMd": "2月6日",
				"dayOfWeek": "周二",
				"docCount": 0,
				"availableNumber": 1,
				"status": 1
			},
			{
				"workDate": "2024-2-7",
				"workDateMd": "2月7日",
				"dayOfWeek": "周三",
				"docCount": 0,
				"availableNumber": -1,
				"status": 1
			},
			{
				"workDate": "2024-2-8",
				"workDateMd": "2月8日",
				"dayOfWeek": "周四",
				"docCount": 0,
				"availableNumber": 1,
				"status": 1
			},
			{
				"workDate": "2024-2-9",
				"workDateMd": "2月9日",
				"dayOfWeek": "周五",
				"docCount": 0,
				"availableNumber": -1,
				"status": 1
			},
			{
				"workDate": "2024-2-10",
				"workDateMd": "2月10日",
				"dayOfWeek": "周六",
				"docCount": 0,
				"availableNumber": -1,
				"status": 0
			},
			{
				"workDate": "2024-2-11",
				"workDateMd": "2月11日",
				"dayOfWeek": "周日",
				"docCount": 0,
				"availableNumber": -1,
				"status": -1
			},
			{
				"workDate": "2024-2-12",
				"workDateMd": "2月12日",
				"dayOfWeek": "周一",
				"docCount": 0,
				"availableNumber": -1,
				"status": -1
			},
		]
	}
}