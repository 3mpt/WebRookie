<template>
  <div id="container">
    <h1>
      {{ initData }}
    </h1>
  </div>
</template>

<script setup>
import { ref } from "vue";
const initData = ref("vue开发环境✅");
</script>
<style scoped>
#container {
  color: red;
  display: flex;
}
</style>
