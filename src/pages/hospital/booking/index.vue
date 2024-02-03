<template>
  <div class="booking">
    <!-- 标题部分 -->
    <div class="top1">
      <div class="left">济宁医学院附属医院</div>
      <div class="right">
        <svg
          t="1706942079135"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4249"
          width="16"
          height="16"
        >
          <path
            d="M190.193225 471.411583c14.446014 0 26.139334-11.718903 26.139334-26.13831 0-14.44499-11.69332-26.164916-26.139334-26.164916-0.271176 0-0.490164 0.149403-0.73678 0.149403l-62.496379 0.146333c-1.425466-0.195451-2.90005-0.295735-4.373611-0.295735-19.677155 0-35.621289 16.141632-35.621289 36.114522L86.622358 888.550075c0 19.949354 15.96767 35.597753 35.670407 35.597753 1.916653 0 3.808746 0.292666 5.649674 0l61.022819 0.022513c0.099261 0 0.148379 0.048095 0.24764 0.048095 0.097214 0 0.146333-0.048095 0.24457-0.048095l0.73678 0 0-0.148379c13.413498-0.540306 24.174586-11.422144 24.174586-24.960485 0-13.55983-10.760065-24.441669-24.174586-24.981974l0-0.393973-50.949392 0 1.450025-402.275993L190.193225 471.409536z"
            fill="#9a4733"
            p-id="4250"
          ></path>
          <path
            d="M926.52241 433.948343c-19.283182-31.445176-47.339168-44.172035-81.289398-45.546336-1.77032-0.246617-3.536546-0.39295-5.380544-0.39295l-205.447139-0.688685c13.462616-39.059598 22.698978-85.58933 22.698978-129.317251 0-28.349675-3.193739-55.962569-9.041934-82.542948l-0.490164 0.049119c-10.638291-46.578852-51.736315-81.31498-100.966553-81.31498-57.264215 0-95.466282 48.15065-95.466282 106.126063 0 3.241834-0.294712 6.387477 0 9.532097-2.996241 108.386546-91.240027 195.548698-196.23636 207.513194l0 54.881958-0.785899 222.227314 0 229.744521 10.709923 0 500.025271 0.222057 8.746198-0.243547c19.35686 0.049119 30.239721-4.817726 47.803749-16.116049 16.682961-10.761088 29.236881-25.50079 37.490869-42.156122 2.260483-3.341095 4.028757-7.075139 5.106298-11.20111l77.018118-344.324116c1.056052-4.053316 1.348718-8.181333 1.056052-12.160971C943.643346 476.446249 938.781618 453.944769 926.52241 433.948343zM893.82573 486.837924l-82.983993 367.783411-0.099261-0.049119c-2.555196 6.141884-6.879688 11.596106-12.872169 15.427364-4.177136 2.727111-8.773827 4.351098-13.414521 4.964058-1.49812-0.195451-3.046383 0-4.620227 0l-477.028511-0.540306-0.171915-407.408897c89.323375-40.266076 154.841577-79.670527 188.596356-173.661202 0.072655 0.024559 0.124843 0.049119 0.195451 0.072655 2.99931-9.137101 6.313799-20.73423 8.697079-33.164331 5.551436-29.185716 5.258771-58.123792 5.258771-58.123792-4.937452-37.98001 25.940812-52.965306 44.364417-52.965306 25.304316 0.860601 50.263777 33.656541 50.263777 52.326762 0 0 5.600555 27.563776 5.649674 57.190537 0.048095 37.366026-4.6673 56.847729-4.6673 56.847729l-0.466628 0c-5.872754 30.879288-16.214287 60.138682-30.464849 86.964654l0.36839 0.342808c-2.358721 4.815679-3.709485 10.220782-3.709485 15.943111 0 19.922748 19.088754 21.742187 38.765909 21.742187l238.761895 0.270153c0 0 14.666024 0.465604 14.690584 0.465604l0 0.100284c12.132318-0.638543 24.221658 5.207605 31.100322 16.409738 5.504364 9.016351 6.437619 19.6045 3.486404 28.988218L893.82573 486.837924z"
            fill="#9a4733"
            p-id="4251"
          ></path>
          <path
            d="M264.827039 924.31872c0.319272 0.024559 0.441045 0.024559 0.295735-0.024559 0.243547-0.048095 0.367367-0.074701-0.295735-0.074701s-0.539282 0.026606-0.271176 0.074701C264.43409 924.343279 264.532327 924.343279 264.827039 924.31872z"
            fill="#9a4733"
            p-id="4252"
          ></path>
        </svg>
        <span>三级乙等</span>
      </div>
    </div>

    <!-- 基本介绍 -->
    <div class="content1">
      <div class="left">
        <img src="@/assets/images/logo.png" alt="" />
      </div>
      <div class="right">
        <div class="color">挂号规则</div>
        <div>
          <span>预约周期: 10天</span>
          <span>房号时间: 08:00</span>
          <span>停挂时间: 12:30</span>
        </div>
        <div>具体地址: {{ DeatilStore.hospitalData[0] }}</div>
        <div>
          具体路线:
          首先，你可以前往曲阜市区乘坐K112路公交车，确保你上车时确认目的地是济宁市区。在济宁市区下车后，你可以再次乘坐K112路或其他前往济宁医学院附属医院的公交车，确保你下车时就在医院附近。请在公交车上向司机或其他乘客询问确切的站点和下车位置。如果可能的话，使用导航应用确认具体的步行路线，以确保你能够安全、准确地到达医院。祝你一路顺利，安全到达目的地！
        </div>
        <div class="color">医院预约规则</div>
        <ul>
          <li>
            1.通过医院官网、手机App或电话线上预约，或亲临医院前台线下预约。
          </li>
          <li>2.患者需在规定时间内完成预约，注意科室或医生的不同规定。</li>
          <li>
            3.允许患者在规定时间内取消或更改预约，超时可能产生相应费用或影响后续预约权益。
          </li>
        </ul>
      </div>
    </div>

    <!-- 部门门诊 -->
    <div class="department">
      <div class="navleft">
        <ul>
          <li
            v-for="(item, index) in DeatilStore.departmentData"
            :key="index"
            class="leftdepartment"
            :class="curIndex === index ? 'active' : ''"
            @click="changeIndex(index)"
          >
            <!-- @vue-expect-error -->
            {{ item.depname }}
          </li>
        </ul>
      </div>
      <div class="navright">
        <ul
          v-for="(itemFirst, index) in DeatilStore.departmentData"
          :key="index"
        >
          <h1 class="departmentName cur">
            <!-- @vue-expect-error -->
            {{ itemFirst.depname }}
          </h1>
          <li
            class="departmentNamebottom"
            v-for="(item, index) in itemFirst.children"
            :key="index"
          >
            {{ item.depname }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useDeatilStore from "@/store/modules/hospitalDeatil";
// @ts-ignore
import { ref } from "vue";

let DeatilStore = useDeatilStore();

// 选中的li的索引, 默认为0
let curIndex = ref(0);

const changeIndex = (index: number) => {
  // 选中li高亮
  curIndex.value = index;
  console.log(index);

  // 滚动条滚动到指定位置
  let allName = document.querySelectorAll(".cur");
  allName[curIndex.value].scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped lang="scss">
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.booking {
  margin-left: 50px;
  .top1 {
    display: flex;
    width: 500px;
    .left {
      font-size: 30px;
      font-weight: 800;
      margin-right: 20px;
      color: #333;
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin-left: 5px;
      }
    }
  }

  .content1 {
    margin-top: 40px;
    display: flex;
    width: 1000px;
    .left {
      width: 10%;
      border-radius: 25%;

      img {
        width: 80px;
        height: 80px;
      }
    }

    .right {
      width: 88%;
      font-size: 14px;
      div {
        margin-bottom: 10px;
        line-height: 16px;
      }
      span {
        margin-right: 20px;
      }
      .color {
        color: #333;
      }
      ul li {
        margin-bottom: 8px;
      }
    }
  }

  .department {
    display: flex;
    margin-top: 40px;
    .navleft {
      width: 10%;
      .leftdepartment {
        width: 100%;
        height: 100%;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
        &.active {
          border-left: 2px solid #7db2f5;
          color: #7db2f5;
        }
      }
      .leftdepartment:hover {
        cursor: pointer;
        color: #7db2f5;
        background-color: #7db1f566;
      }
    }
    .navright {
      width: 90%;
      padding-left: 20px;
      height: 360px;
      overflow: auto;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .departmentName {
        width: 100%;
        font-size: 20px;
        font-weight: 600;
        color: #7db2f5;
        margin: 20px 0;
        text-align: center;
      }

      .departmentNamebottom {
        float: left;
        font-size: 16px;
        width: 20%;
        line-height: 30px;
        text-align: center;
      }
      .departmentNamebottom:hover {
        background-color: #7db1f568;
        cursor: pointer;
        color: #7db2f5;
      }
    }
  }
}
</style>
