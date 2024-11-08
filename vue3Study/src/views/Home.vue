<template>
  <div class="common-layout">
    <el-container>
      <SideMenu></SideMenu>
      <el-container direction="vertical">
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import SideMenu from '../components/mainbox/SideMenu.vue';
</script>
<style lang="scss" scoped>
.el-main {
  overflow: auto;
  height: calc(100vh - 64px);
}
</style>
