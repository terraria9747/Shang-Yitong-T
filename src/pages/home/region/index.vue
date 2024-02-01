<template>
  <div class="region">
    <div class="left">地区:</div>
    <ul class="right">
      <li class="active">全部</li>
      <li>朝阳区</li>
      <li>朝阳区</li>
      <li>朝阳区</li>
      <li>朝阳区</li>
      <li>朝阳区</li>
      <li>朝阳区</li>
      <li>朝阳区</li>
      <li>朝阳区</li>
      <li>朝阳区</li>
      <li>朝阳区</li>
      <li>朝阳区</li>
      <li>朝阳区</li>
      <li>朝阳区</li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.region {
  color: #999999;
  font-size: 14px;
  display: flex;

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
