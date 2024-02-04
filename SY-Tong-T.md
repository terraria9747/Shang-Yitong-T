# 一.项目初始化
## 1.npm i 初始化

## 2.浏览器自动打开配置

## 3.src @ 别名配置


# 二.项目初始化
## 1.分析
	顶部和底部是公共组件, 中间部分为路由跳转部分

## 2.清除默认样式
	reset.scss (npm)

## 3.公共组件
	hospital_bottom
	hospital_top


# 三.配置路由
## 1.安装插件 vue-router

## 2.创建路由组件

## 3.配置路由 route
	1.路由懒加载
	2.路由重定向
	3.hash路由模式
	4.路由跳转滚动条最顶部


# 四.首页静态
## 1.插件: Element-plus

## 2.处理banner部分
	拆分成 carousel 组件, 使用走马灯组件

## 3.搜索框部分
	拆分成 search 组件, 使用`Autocomplete自动补全输入框组件`和`图标组件`

## 4.展示医院结构
	1.栅格布局
	2.等级组件 level
	3.地区组件 region
	4.医院信息展示 card 卡片视图
	5.分页器 pagination


# 五.请求获取数据
## 1.axios二次封装
对axios进行二次封装
目的: 
- 1.利用aixos请求, 响应拦截器功能
- 2.请求拦截器, 可以在请求头中携带公共参数: token
- 3.响应拦截器, 可以简化服务器返回的数据, 处理htto网络错误

## 2.跨域代理
- 项目和接口的协议一致, 但是域名和端口不一致
- vite --> server.proxy 进行跨域处理的配置

## 3.新建api文件夹, 对请求接口进行统一管理
- ts 枚举接口
- enum API {...}

## 4.首页组件发请求, 页面展示数据

## 5.切换分页时重新发起请求获取数据


# 六.首页医院数据ts类型限制
## 1.新建type.ts, 对请求后的所有数据进行ts限制

## 2.在响应的组件和请求文件中, 应用ts限制


# 七.获取医院等级与地区数据展示
## 1.处理API, 参数 HosType(等级) | Beijin(地区)

## 2.对数据进行ts限制
- 包括返回的数据, 定义的数据

## 3.获取数据, 页面展示

## 4.高亮效果响应式数据 -- 点击誰, 誰高亮

## 5.根据等级和地区获取响应的医院
- 子组件点击某一等级或者某一地区时, 把对应的参数传给父组件
  - 自定义事件
  - 父组件给子组件传递一个方法, 当子组件触发该方法时, 把该数据传递给父组件
```ts
// 父组件
<Level @getLevelData="getLevelData" />
...
// 获取等级
const getLevelData = (value: string) => {
  // console.log("获取等级", value);
  level.value = value;
  getHospitalInfo();
};

// 子组件
const changeLevel = (value: string) => {
  levelFlag.value = value;
  console.log("等级", value);
  $emit("getLevelData", value);
};

let $emit = defineEmits(["getLevelData"]);
```
- 父组件拿到参数时, 重新发请求, 获取指定等级或地区的数据

## 6.没有医院数据 展示空信息 

# 八.关键词搜索医院
- 1.收集搜索的关键字 - 15
- 2.利用关键字发送联想建议的请求
- 3.选中建议项进行路由跳转
- 4.点击卡片进行路由跳转
- 5.点击logo跳转到主页

# 九.首页右侧静态部分
- 常见科室
- 平台公告
- 听诊公告

# 十.医院详情菜单与子路由
- 1.左侧导航 menu
- 2.右侧路由 content
- 3.配置hospital的二级路由 - 路由懒加载
- 4.获取路由信息

```ts
$route.path
```

# 十一.Pinia仓库存储医院数据
## 1.```搜索和单击卡片时携带医院的query参数```

## 2.配置API接口

## 3.ts对响应数据进行限制

## 4.由于五个二级路由用的同一套数据, 所以用Pinia对数据进行统一管理
- 1.创建store/index.ts文件
- 2.在该文件中导入创建pinia的方法, 并向外暴露
- 3.mian.ts中安装pinia仓库
- 4.创建store/hospitalDetail.ts文件
- 5.创建pinia仓库, useDetailStore, 并向外暴露
- 6.详情页 获取仓库对象
```
let detailStore = useDetailStore()
```
- 7.组件挂载完毕后, 通知pinia仓库发请求并存储数据

# 十二.二级路由静态搭建
- 1.预约挂号 | 医院详情 | 预约通知 | 停诊信息 搭建
- 2.静态页面搭建
- 3.从store中读取数据, 渲染到前端页面中(数据有误, 等接口修复修改代码)
- 4.二级路由切换时```携带医院的query参数```(暂时未携带)21
获取url路径中的query参数
```
$route.query
```

# 十三.预约挂号部分
- 1.配置接口
- 2.ts限制数据类型
- 3.在进入hospital页面发一次请求, 通过store进行管理(虚假数据)
- 4.预约挂号静态搭建
- 5.显示数据
- 6.页面丝滑滚动 scrollIntoView
```ts
// 滚动条滚动到指定位置
let allName = document.querySelectorAll(".cur");
allName[curIndex.value].scrollIntoView({ behavior: "smooth" });
```

# 十四.登录页
## 1.静态搭建
- 1.把登陆页面封装为全局组件
- 2.把控制登录的数据进行pinia数据管理
- 3.点击挂号与登录按钮触发
- 4.登录页弹出框静态搭建

## 2.请求验证码
- 1.封装发送验证码的接口
- 2.收集表单信息(手机号), 计算属性验证手机号是否正确(表单验证|正则)
- 3.如果手机号合法, 可以点击```发送验证码```按钮(否则禁用按钮), 携带手机号参数发送验证码请求
- 4.验证码存储到pinia仓库中
