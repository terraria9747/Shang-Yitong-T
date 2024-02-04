<template>
  <div class="top">
    <div class="container">
      <div class="left">
        <img src="@/assets/images/logo.png" alt="" />
        <p>尚医通 预约挂号统一平台</p>
      </div>
      <div class="right">
        <span>帮助中心</span>
        <span class="login">
          <span v-if="!user.userinfo.name" @click="isShow">登录/注册</span>
          <el-dropdown v-else>
            <span class="el-dropdown-link">
              Terraria
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>实名认证</el-dropdown-item>
                <el-dropdown-item>挂号订单</el-dropdown-item>
                <el-dropdown-item>就诊人管理</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDown } from "@element-plus/icons-vue";
import userStore from "@/store/modules/user";
let user = userStore();

const isShow = () => {
  console.log("点击了登录");
  user.dialogVisible = true;
};
</script>

<style lang="scss" scoped>
.top {
  .left {
    cursor: pointer;
  }
  .login:hover {
    cursor: pointer;
    color: #4490f1;
  }
}
</style>
