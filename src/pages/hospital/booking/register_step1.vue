<template>
  <div class="register">
    <div class="registerTop">
      <div>济宁医学院附属医院</div>
      <div>|</div>
      <div>专科</div>
      <div>·</div>
      <div>多发性硬化专科门诊</div>
    </div>
    <div class="registerTitle">2023年06月</div>
    <div class="registerContent">
      <div class="item">
        <div class="itemTop">2023-06-02 周五</div>
        <div class="itemBot">停止挂号</div>
      </div>
      <div class="item">
        <div class="itemTop">2023-06-02 周五</div>
        <div class="itemBot">停止挂号</div>
      </div>
      <div class="item">
        <div class="itemTop">2023-06-02 周五</div>
        <div class="itemBot">停止挂号</div>
      </div>
      <div class="item">
        <div class="itemTop">2023-06-02 周五</div>
        <div class="itemBot">停止挂号</div>
      </div>
      <div class="item">
        <div class="itemTop">2023-06-02 周五</div>
        <div class="itemBot">停止挂号</div>
      </div>
      <div class="item">
        <div class="itemTop">2023-06-02 周五</div>
        <div class="itemBot">停止挂号</div>
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

<script lang="ts" setup></script>

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
      border: 2px solid #5993d1;
    }
  }

  .el-pagination {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
}
</style>
