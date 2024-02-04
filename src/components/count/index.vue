<template>
  <div>倒计时({{ num }})秒</div>
</template>

<script lang="ts" setup>
import { ref, defineProps, watch, defineEmits } from "vue";

let num = ref(5);
let props = defineProps(["flag"]);
let $emit = defineEmits(["changeFlag"]);

// flag参数发生了变化, 说明开始倒计时
watch(
  () => props.flag,
  () => {
    let timer = setInterval(() => {
      num.value--;
      if (num.value === 0) {
        // 如果定时器为0, 通知父元素, 显示获取验证码按钮
        $emit("changeFlag", false);
        // 清除定时器
        clearInterval(timer);
      }
    }, 1000);
  },
  { immediate: true }
);
</script>

<style></style>
