<template>
  <div class="level">
    <div class="left">等级:</div>
    <ul class="right">
      <li :class="levelFlag === '' ? 'active' : ''" @click="changeLevel('')">
        全部
      </li>
      <li
        v-for="level in levelArr"
        :key="level.value"
        @click="changeLevel(level.value)"
        :class="level.value === levelFlag ? 'active' : ''"
      >
        {{ level.name }}
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
let levelArr = ref<LevelAndRegionArr>([]);

// 是否高亮
let levelFlag = ref<string>("");

onMounted(() => {
  getLevel();
});

// 获取医院等级
const getLevel = async () => {
  let result: LevelAndRegionResponseData = await reqHospitalAndLevel("HosType");
  if (result.code === 200) {
    levelArr.value = result.data;
  }
};

// 选择等级 高亮
const changeLevel = (value: string) => {
  levelFlag.value = value;
  // console.log("等级", value);
  $emit("getLevelData", value);
};

let $emit = defineEmits(["getLevelData"]);
</script>

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
