<template>
  <div id="app">
    <!-- 顶部区域 -->
    <HospitalTop />
    <!-- 路由区域 -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 底部区域 -->
    <HospitalBottom />
  </div>
</template>

<script setup lang="ts" name="app"></script>

<style lang="scss">
.top,
.bottom {
  position: fixed;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
  height: 70px;
  width: 100%;
  border-bottom: 2px solid #eee;
  background-color: #fff;

  .container {
    margin: 0 auto;
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
      }
      p {
        font-size: 22px;
        color: #7db2f5;
        margin-left: 10px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      span {
        margin: 0 20px;
        font-size: 14px;
        color: #666666;
      }
    }
  }
}

.content {
  padding-top: 70px;
  padding-bottom: 100px;
  width: 1200px;
  margin: 0 auto;
}
</style>
