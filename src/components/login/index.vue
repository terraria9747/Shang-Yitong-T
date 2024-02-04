<template>
  <div class="login-contianer">
    <el-dialog v-model="user.dialogVisible" title="用户登录" width="800">
      <el-row>
        <!-- 左侧登录 -->
        <el-col :span="12" class="left">
          <!-- 手机号登录 -->
          <div class="left-content" v-show="index === 0">
            <div class="form">
              <el-form-item>
                <el-input
                  :prefix-icon="User"
                  placeholder="请输入手机号码"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  :prefix-icon="Lock"
                  placeholder="请输入手机验证码"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button>获取验证码</el-button>
              </el-form-item>
            </div>
            <div class="bottom1">
              <el-button type="primary" style="width: 100%">用户登录</el-button>
              <p @click="changeIndex" class="change">微信扫码登录</p>
              <svg
                t="1707020573684"
                class="icon change"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4311"
                width="32"
                height="32"
                @click="changeIndex"
              >
                <path
                  d="M512 1024C229.23 1024 0 794.77 0 512S229.23 0 512 0s512 229.23 512 512-229.23 512-512 512z m107.91-626.371H640c-20.09-94.744-115.566-162.962-225.304-162.962-124.002 0-222.696 86.04-222.696 198.607 0 65.097 34.572 115.492 89.43 156.94l-23.114 71.12 77.995-41.448a354.748 354.748 0 0 0 77.97 11.8h20.114a133.608 133.608 0 0 1-5.851-47.47 193.122 193.122 0 0 1 57.466-134.412 181.37 181.37 0 0 1 133.096-52.175h0.804z m-115.273-56.296c15.848 0 28.696 14.288 28.696 31.915s-12.848 31.915-28.696 31.915c-17.652 1.95-33.402-12.313-35.304-31.94 0-22.284 17.457-31.89 34.719-31.89h0.585z m-171.032 63.878c-17.555 1.463-33.012-12.653-34.938-31.89 1.926-19.212 17.383-33.329 34.938-31.89 16.042 0 29.062 14.287 29.062 31.915 0 17.603-13.02 31.89-29.062 31.89zM832 574.805c0-92.233-90.136-169.472-192-169.472-107.764 0-192 77.24-192 169.448 0 92.257 84.456 169.496 192 169.496a264.24 264.24 0 0 0 66.828-11.873L767.586 768l-17.408-59.538c49.42-35.596 81.017-83.286 81.017-133.852l0.805 0.195zM573.562 554.52c-10.435 0-18.895-9.484-18.895-21.187s8.46-21.211 18.895-21.211c11.727-1.39 22.308 7.997 23.771 21.114-1.39 13.214-11.97 22.698-23.771 21.284z m128 0.098c-10.435 0-18.895-9.509-18.895-21.212 0-11.751 8.46-21.26 18.895-21.26 11.727-1.414 22.308 7.997 23.771 21.139-2.194 12.921-12.58 22.04-24.259 21.333h0.488z"
                  fill="#0ABC64"
                  p-id="4312"
                ></path>
              </svg>
            </div>
          </div>

          <!-- 验证码登录 -->
          <div class="left-content" v-show="index === 1">验证码登录</div>
        </el-col>

        <!-- 右侧扫码 -->
        <el-col :span="12" class="right">
          <div class="right-content">
            <div class="item">
              <img src="../../assets/images/code_login_wechat.png" alt="" />
              <svg
                t="1707020573684"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4311"
                width="16"
                height="16"
              >
                <path
                  d="M512 1024C229.23 1024 0 794.77 0 512S229.23 0 512 0s512 229.23 512 512-229.23 512-512 512z m107.91-626.371H640c-20.09-94.744-115.566-162.962-225.304-162.962-124.002 0-222.696 86.04-222.696 198.607 0 65.097 34.572 115.492 89.43 156.94l-23.114 71.12 77.995-41.448a354.748 354.748 0 0 0 77.97 11.8h20.114a133.608 133.608 0 0 1-5.851-47.47 193.122 193.122 0 0 1 57.466-134.412 181.37 181.37 0 0 1 133.096-52.175h0.804z m-115.273-56.296c15.848 0 28.696 14.288 28.696 31.915s-12.848 31.915-28.696 31.915c-17.652 1.95-33.402-12.313-35.304-31.94 0-22.284 17.457-31.89 34.719-31.89h0.585z m-171.032 63.878c-17.555 1.463-33.012-12.653-34.938-31.89 1.926-19.212 17.383-33.329 34.938-31.89 16.042 0 29.062 14.287 29.062 31.915 0 17.603-13.02 31.89-29.062 31.89zM832 574.805c0-92.233-90.136-169.472-192-169.472-107.764 0-192 77.24-192 169.448 0 92.257 84.456 169.496 192 169.496a264.24 264.24 0 0 0 66.828-11.873L767.586 768l-17.408-59.538c49.42-35.596 81.017-83.286 81.017-133.852l0.805 0.195zM573.562 554.52c-10.435 0-18.895-9.484-18.895-21.187s8.46-21.211 18.895-21.211c11.727-1.39 22.308 7.997 23.771 21.114-1.39 13.214-11.97 22.698-23.771 21.284z m128 0.098c-10.435 0-18.895-9.509-18.895-21.212 0-11.751 8.46-21.26 18.895-21.26 11.727-1.414 22.308 7.997 23.771 21.139-2.194 12.921-12.58 22.04-24.259 21.333h0.488z"
                  fill="#0ABC64"
                  p-id="4312"
                ></path>
              </svg>
              <p>微信扫一扫关注</p>
              <p>快速预约挂号</p>
            </div>
            <div class="item">
              <img src="../../assets/images/code_login_wechat.png" alt="" />
              <svg
                t="1707020978223"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5653"
                width="16"
                height="16"
              >
                <path
                  d="M746.666667 85.333333c64.8 0 117.333333 52.533333 117.333333 117.333334v618.666666c0 64.8-52.533333 117.333333-117.333333 117.333334H277.333333c-64.8 0-117.333333-52.533333-117.333333-117.333334V202.666667c0-64.8 52.533333-117.333333 117.333333-117.333334h469.333334zM597.333333 778.666667H426.666667a32 32 0 0 0 0 64h170.666666a32 32 0 0 0 0-64z m149.333334-629.333334H277.333333a53.333333 53.333333 0 0 0-53.333333 53.333334v480h576V202.666667a53.333333 53.333333 0 0 0-53.333333-53.333334z"
                  fill="#000000"
                  p-id="5654"
                ></path>
              </svg>
              <p>扫一扫下载</p>
              <p>“预约挂号”APP</p>
            </div>
          </div>
          <h1>商医通官方指定平台</h1>
          <h1>快速挂号 安全放心</h1>
        </el-col>
      </el-row>

      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="user.dialogVisible = false">
            关闭页面
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
// UI图标
// @ts-ignore
import { User, Lock } from "@element-plus/icons-vue";

// @ts-ignore
import { ref } from "vue";

// Pinia仓库
import userStore from "@/store/modules/user";
let user = userStore();

// 控制显示手机号登录还是验证码登录
let index = ref(0); // 0 手机号 | 1 验证码

const changeIndex = () => {
  index.value = 1;
};
</script>

<script lang="ts">
export default {
  name: "Login",
};
</script>

<style lang="scss" scoped>
.login-contianer {
  ::v-deep(.el-dialog) {
    min-height: 450px;
    max-height: 700px;
  }
  ::v-deep(.el-dialog__header) {
    border-bottom: 1px solid #ccc;
  }
  .left {
    .left-content {
      padding: 20px;
      border: 1px solid #ccc;
    }
  }
  .bottom1 {
    text-align: center;

    p {
      margin: 16px 0;
    }

    .change:hover {
      cursor: pointer;
    }
  }
  .right {
    .right-content {
      padding: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 130px;
          height: 130px;
        }
        svg {
          margin: 5px 0;
        }
        p {
          margin-bottom: 5px;
          font-size: 12px;
        }
      }
    }
    h1 {
      margin: 10px;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      color: #626262;
    }
  }
}
</style>
