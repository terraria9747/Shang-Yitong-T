<template>
  <div class="top">
    <div class="container">
      <div class="left">
        <img src="@/assets/images/logo.png" alt="" />
        <p>尚医通 预约挂号统一平台</p>
      </div>
      <div class="right">
        <span>帮助中心</span>
        <span @click="isShow" class="login">登录/注册</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
