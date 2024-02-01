<template>
  <div class="search">
    <!-- 搜索框 -->
    <el-autocomplete placeholder="请输入您要查询的医院" />

    <!-- 按钮 -->
    <el-button type="primary" :icon="Search">搜索</el-button>
  </div>
</template>

<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";
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
