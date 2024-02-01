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
        <Level />

        <!-- 地区部分 -->
        <Region />

        <!-- 医院展示--卡片 -->
        <div class="hospitalCard">
          <Card v-for="item in 13" :key="item" class="card" shadow="hover" />
        </div>

        <!-- 分页器 -->
        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          :background="true"
          layout="prev, pager, next, jumper, ->, sizes, total"
          :total="13"
        />
      </el-col>
      <el-col :span="5.5">2</el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
// 走马灯组件
// ignore vue.
import Carousel from "@/pages/home/carousel/index.vue";

// 搜索框组件
//@ts-ignore
import Search from "@/pages/home/search/index.vue";

// 等级组件
import Level from "@/pages/home/level/index.vue";

// 地区组件
import Region from "@/pages/home/region/index.vue";

// 卡片
import Card from "@/pages/home/card/index.vue";

//@ts-ignore
import { ref } from "vue";

// 分页器数据
// 默认选择第一页
let pageNo = ref<number>(1);
// 一页显示多少条数据
let pageSize = ref<number>(10);
</script>

<style scoped lang="scss">
.el-col {
  margin-right: 10px;
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
