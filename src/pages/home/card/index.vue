<template>
  <el-card class="box-card">
    <div class="left">
      <div class="hospital_name">{{ hospitalInfo?.hosname }}</div>
      <!-- <div class="hospital_name">济宁医学院附属医院</div> -->
      <div class="tip">
        <span>
          <svg
            t="1706762837681"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7234"
            width="16"
            height="16"
          >
            <path
              d="M768 256a32 32 0 0 1 32 32v512a32 32 0 0 1-64 0v-512A32 32 0 0 1 768 256zM512 576a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0v-192A32 32 0 0 1 512 576zM256 384a32 32 0 0 1 32 32v384a32 32 0 0 1-64 0v-384A32 32 0 0 1 256 384z"
              fill="#999999"
              p-id="7235"
            ></path>
          </svg>
          <p>{{ hospitalInfo.param.hostypeString }}</p>
          <!-- <p>三级甲等</p> -->
        </span>
        <span>
          <svg
            t="1706762629121"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4449"
            width="16"
            height="16"
          >
            <path
              d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667zM533.333333 362.666667a21.333333 21.333333 0 0 0-42.666666 0v170.666666a21.333333 21.333333 0 0 0 6.250666 15.082667l128 128a21.333333 21.333333 0 0 0 30.165334-30.165333L533.333333 524.501333V362.666667z"
              fill="#999999"
              p-id="4450"
            ></path>
          </svg>
          <p>每天{{ hospitalInfo.bookingRule?.releaseTime }}放号</p>
          <!-- <p>每天8:00放号</p> -->
        </span>
      </div>
    </div>
    <div class="right">
      <img :src="`data:image/jpeg;base64,${hospitalInfo.logoData}`" alt="" />
      <!-- <img src="@/assets/images/logo.png" alt="" /> -->
    </div>
  </el-card>
</template>

<script setup lang="ts">
//@ts-ignore
defineProps(["hospitalInfo"]);
</script>

<style scoped lang="scss">
.box-card {
  ::v-deep .el-card__body {
    display: flex;
    justify-content: space-between;

    .left {
      width: 60%;
      .hospital_name {
        margin-bottom: 20px;
        font-weight: 900;
      }

      .tip {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #999999;
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          svg {
            margin-right: 5px;
          }
        }
      }
    }
    .right {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
}
</style>
