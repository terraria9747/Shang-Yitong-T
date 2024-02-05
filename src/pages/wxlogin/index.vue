<template></template>

<script setup lang="ts">
import { SET_TOKEN } from "@/utils/user/index";
import { useRoute } from "vue-router";
let $route = useRoute();

// 存储登录的token信息
SET_TOKEN(JSON.stringify($route.query));

let html: any = document.querySelector("html");
html.style.display = "none";
</script>

<style></style>
