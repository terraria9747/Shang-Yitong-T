<template>
  <div class="search">
    <!-- 搜索框 -->
    <el-autocomplete
      placeholder="请输入您要查询的医院"
      v-model="keyword"
      :fetch-suggestions="querySearch"
      :trigger-on-focus="false"
      @select="goDetail"
    />

    <!-- 按钮 -->
    <el-button type="primary" :icon="Search">搜索</el-button>
  </div>
</template>

<script lang="ts" setup>
//@ts-ignore
import { Search } from "@element-plus/icons-vue";
//@ts-ignore
import { ref } from "vue";
//@ts-ignore 搜索API
import { reqSearch, reqHospitalAndLevel } from "@/api/home/index.ts";
//@ts-ignore
import { SearchResponseData } from "@/api/home/type.ts";
// 路由跳转
import { useRouter } from "vue-router";

// nanoid模拟请求参数
//@ts-ignore
import { nanoid } from "nanoid/non-secure";

// 创建一个路由器
const $router = useRouter();

// 搜索关键词
let keyword = ref<string>("");

// 获取搜索关键词
const querySearch = async (keyword: string, cb: any) => {
  // let result = await reqSearch(keyword);

  // =======================================
  // =======================================
  // =======================================
  // 测试数据, 后期修改
  let result = await reqHospitalAndLevel(keyword);
  const showItem = result.data.map((item: any) => {
    return {
      value: item.name,
    };
  });
  console.log(result);
  cb(showItem);
};

// 去详情页
const goDetail = () => {
  // 跳转时携带参数 -- nanoid模拟请求参数
  $router.push({ path: "/hospital/booking/", query: { id: nanoid() } });
};
</script>

<script lang="ts">
export default {
  name: "Search",
};
</script>

<style lang="scss" scoped>
// 深度选择器: >>> /deep/ ::v-deep
// 应用的场景: css  less	 scss
.search {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  ::v-deep .el-input {
    width: 700px;
    height: 40px;
    margin-right: 10px;
  }

  .el-button {
    height: 40px;
  }
}
</style>
