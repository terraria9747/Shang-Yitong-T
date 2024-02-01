<template>
  <div class="level">
    <div class="left">等级:</div>
    <ul class="right">
      <li class="active">全部</li>
      <li>三级甲等</li>
      <li>三级甲等</li>
      <li>三级甲等</li>
      <li>三级甲等</li>
      <li>三级甲等</li>
      <li>三级甲等</li>
      <li>三级甲等</li>
      <li>三级甲等</li>
      <li>三级甲等</li>
      <li>三级甲等</li>
      <li>三级甲等</li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.level {
  color: #999999;
  display: flex;
  font-size: 14px;
  .left {
    width: 50px;
  }

  .right {
    display: flex;
    flex-wrap: wrap;
    li {
      margin: 0px 20px 20px 0;
      &.active {
        color: #4490f1;
      }
    }
    li:hover {
      color: #4490f1;
      cursor: pointer;
    }
  }
}
</style>
