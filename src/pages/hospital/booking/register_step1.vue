<template>
  <div class="register">
    <div class="registerTop">
      <div>{{ DeatilStore.workdate.hospital }}</div>
      <div>|</div>
      <div>{{ DeatilStore.workdate.type }}</div>
      <div>·</div>
      <div>{{ DeatilStore.workdate.department }}</div>
    </div>
    <div class="registerTitle">2023年06月</div>
    <div class="registerContent">
      <div
        class="item"
        v-for="(item, index) in DeatilStore.workdate.work"
        :key="index"
        :class="item.availableNumber === 1 ? 'active' : ''"
      >
        <div class="itemTop">{{ item.workDateMd }} {{ item.dayOfWeek }}</div>
        <div class="itemBot">
          <div v-if="item.status === 1">
            <div v-if="item.availableNumber === 1">可约</div>
            <div v-else>已经约满</div>
          </div>
          <div v-else-if="item.status === 0">无号</div>
          <div v-else-if="item.status === -1">即将放号</div>
        </div>
      </div>
    </div>
    <el-pagination
      :page-size="10"
      :pager-count="10"
      layout="prev, pager, next"
      :total="20"
    />
  </div>
</template>

<script lang="ts" setup>
//@ts-ignore
import { onMounted } from "vue";

import useDeatilStore from "@/store/modules/hospitalDeatil";

// 导入token信息
import userStore from "@/store/modules/user";

let user = userStore();
let DeatilStore = useDeatilStore();

onMounted(() => {
  // 如果用户登录了, 才获取请求(虚假模拟登录, 后期修复)
  if (user.userinfo.token) {
    DeatilStore.getWork();
  }
});
</script>

<style lang="scss">
.register {
  display: flex;
  flex-direction: column;
  padding: 30px 0 0 50px;
  .registerTop {
    display: flex;
    div {
      margin-right: 10px;
    }
  }
  .registerTitle {
    margin-top: 50px;
    font-weight: 600;
    text-align: center;
  }
  .registerContent {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .item {
      flex: 1;
      margin: 30px 20px 0 0;
      display: flex;
      flex-direction: column;
      border: 2px solid #ccc;
      .itemTop {
        padding: 10px;
        font-weight: 600;
        font-size: 14px;
        background-color: #cccccc;
      }
      .itemBot {
        font-size: 16px;
        line-height: 50px;
      }
    }
    .item:hover {
      cursor: pointer;
      transform: scale(1.1);
      border: 2px solid #ccc;
    }
  }

  .el-pagination {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }

  .active {
    .itemTop {
      background-color: #8cbcef35 !important;
    }
    background-color: #8cbcef35;
    border: 2px solid #5993d1ad !important;
  }
}
</style>
