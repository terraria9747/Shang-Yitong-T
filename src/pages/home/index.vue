<template>
  <div>
    <!-- 走马灯 -->
    <Carousel />

    <!-- 搜索框 -->
    <Search />

    <!-- 底部区域 -- 栅格布局 -->
    <el-row>
      <el-col :span="18">
        <!-- 组件导航区域 -->
        <h1>医院</h1>

        <!-- 等级区域 -->
        <!-- @getLevelData 自定义事件, 等待子组件触发 -->
        <Level @getLevelData="getLevelData" />

        <!-- 地区部分 -->
        <Region @getRegionData="getRegionData" />

        <!-- 医院展示--卡片 -->
        <div class="hospitalCard" v-if="hospitalInfo.length > 0">
          <Card
            v-for="item in hospitalInfo"
            :key="item.id"
            :hospitalInfo="item"
            class="card"
            shadow="hover"
            @click="goDetail"
          />
          <!-- <Card
            v-for="item in 10"
            :key="item"
            :hospitalInfo="item"
            class="card"
            shadow="hover"
            @click="goDetail"
          /> -->
        </div>

        <el-empty v-else description="没有医院信息" />

        <!-- 分页器 -->
        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[10, 15, 20, total]"
          :background="true"
          layout="prev, pager, next, jumper, ->, sizes, total"
          :total="total"
          @current-change="changePageNo"
          @size-change="changeSize"
        />
      </el-col>
      <el-col :span="5">
        <Tip />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup name="home">
//@ts-ignore
import { ref, onMounted } from "vue";

// 导入home_hospital_api
//@ts-ignore
import { reqHospital } from "@/api/home/index.ts";

// 走马灯组件
import Carousel from "@/pages/home/carousel/index.vue";

// 搜索框组件
//@ts-ignore
import Search from "@/pages/home/search/index.vue";

// 等级组件
//@ts-ignore
import Level from "@/pages/home/level/index.vue";

// 地区组件
//@ts-ignore
import Region from "@/pages/home/region/index.vue";

// 卡片
//@ts-ignore
import Card from "@/pages/home/card/index.vue";

// 右侧新闻组件
//@ts-ignore
import Tip from "@/pages/home/tip/index.vue";

// element 弹框组件
//@ts-ignore
import { ElMessage } from "element-plus";

//@ts-ignore
import type { HospitalResponseData, Content } from "@/api/home/type";

// 导入路由器
//@ts-ignore
import { useRouter } from "vue-router";

// nanoid模拟请求参数
//@ts-ignore
import { nanoid } from "nanoid/non-secure";

// 创建路由器
let $router = useRouter();

// 分页器数据
// 默认选择第一页
let pageNo = ref<number>(1);
// 一页显示多少条数据
let pageSize = ref<number>(10);
// 数据条数
let total = ref<number>(20);

// 医院的全部数据
let hospitalInfo = ref<Content>([]);

// 获取子组件传递的等级数据
let level = ref<string>("");
// 获取子组件传递的地区数据
let region = ref<string>("");

// 挂载完成 发起请求
onMounted(() => {
  getHospitalInfo();
});

// 发起请求获取数据
const getHospitalInfo = async () => {
  let result: HospitalResponseData = await reqHospital(
    pageNo.value,
    pageSize.value,
    level.value,
    region.value
  );

  //@ts-ignore
  if (result.code === 200) {
    hospitalInfo.value = result.data.content;
    total.value = result.data.totalElements;
  } else {
    ElMessage({
      message: "请求超时, 请稍等后重试",
      type: "error",
    });
  }
};

// 切换页 数据变化
const changePageNo = () => {
  getHospitalInfo();
};

// 每页显示多少条数据
const changeSize = () => {
  // 页面跳转到第一页
  pageNo.value = 1;
  getHospitalInfo();
};

// 获取等级
const getLevelData = (value: string) => {
  // console.log("获取等级", value);
  level.value = value;
  getHospitalInfo();
};

// 获取地区
const getRegionData = (value: string) => {
  // console.log("获取地区", value);
  region.value = value;
  getHospitalInfo();
};

// 路由跳转 -- 跳转到详情页
const goDetail = () => {
  // nanoid模拟请求参数
  $router.push({
    path: "/hospital/booking",
    query: {
      hoscode: nanoid().slice(0, 5),
      depcode: nanoid().slice(0, 5),
    },
  });
};
</script>

<style scoped lang="scss">
.el-col {
  margin-right: 25px;
  h1 {
    font-weight: 900;
    margin-bottom: 30px;
  }

  // 卡片视图医院信息展示
  .hospitalCard {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    cursor: pointer;

    .card {
      width: 48%;
      margin-bottom: 20px;
    }
  }
}
</style>
