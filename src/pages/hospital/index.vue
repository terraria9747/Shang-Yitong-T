<template>
  <div class="menu">
    <el-row>
      <el-col :span="4">
        <div class="title">
          <el-icon><HomeFilled /></el-icon>
          <div>/ 医院信息</div>
        </div>
        <div class="grid-content ep-bg-purple">
          <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
            <el-menu-item
              index="/hospital/booking"
              @click="changePage('/hospital/booking')"
            >
              <el-icon><icon-menu /></el-icon>
              <span>预约挂号</span>
            </el-menu-item>
            <el-menu-item
              index="/hospital/close"
              @click="changePage('/hospital/close')"
            >
              <el-icon><Tickets /></el-icon>
              <span>医院详情</span>
            </el-menu-item>
            <el-menu-item
              index="/hospital/detail"
              @click="changePage('/hospital/detail')"
            >
              <el-icon><Setting /></el-icon>
              <span>预约通知</span>
            </el-menu-item>
            <el-menu-item
              index="/hospital/notice"
              @click="changePage('/hospital/notice')"
            >
              <el-icon><Warning /></el-icon>
              <span>停诊信息</span>
            </el-menu-item>
            <el-menu-item
              index="/hospital/search"
              @click="changePage('/hospital/search')"
            >
              <el-icon><Search /></el-icon>
              <span>查询/取消</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content ep-bg-purple">
          <router-view />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import {
  Menu as IconMenu,
  Tickets,
  Setting,
  Search,
  Warning,
  HomeFilled,
  // @ts-ignore
} from "@element-plus/icons-vue";

// 导入路由器
import { useRouter, useRoute } from "vue-router";
let $router = useRouter();

// 获取当前 路由信息
let $route = useRoute();
// console.log($route.path);

// 路由跳转
const changePage = (path: string) => {
  // 跳转到对应的二级路由
  $router.push({ path });
};
</script>

<style scoped lang="scss">
.menu {
  color: #7f7f7f;
  margin-top: 20px;
  .title {
    display: flex;
    margin: 0 0 10px 24px;
    div {
      margin-left: 6px;
    }
  }
}
</style>
