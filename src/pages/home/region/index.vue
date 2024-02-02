<template>
  <div class="region">
    <div class="left">地区:</div>
    <ul class="right">
      <li :class="regionFlag === '' ? 'active' : ''" @click="changeRegion('')">
        全部
      </li>
      <li
        v-for="region in regionArr"
        :key="region.value"
        @click="changeRegion(region.value)"
        :class="regionFlag === region.value ? 'active' : ''"
      >
        {{ region.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import { onMounted, ref, defineEmits } from "vue";
// @ts-ignore
import { reqHospitalAndLevel } from "@/api/home/index.ts";
import {
  LevelAndRegionArr,
  LevelAndRegionResponseData,
  // @ts-ignore
} from "@/api/home/type.ts";

// 存储医院等级
let regionArr = ref<LevelAndRegionArr>([]);

// 是否高亮
let regionFlag = ref<string>("");

onMounted(() => {
  getRegion();
});

// 获取医院地区
const getRegion = async () => {
  let result: LevelAndRegionResponseData = await reqHospitalAndLevel("Beijin");
  if (result.code === 200) {
    regionArr.value = result.data;
  }
};

// 点击地区高亮显示
const changeRegion = (value: string) => {
  regionFlag.value = value;
  // console.log("地区", value);
  $emit("getRegionData", value);
};

let $emit = defineEmits(["getRegionData"]);
</script>

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
