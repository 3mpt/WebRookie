<template>
  <el-aside width='200px'>
    <el-menu
      :router="true"
      :default-active="$route.path"
    >
      <el-menu-item index="/index">
        <el-icon><HomeFilled /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/center">
        <el-icon><Avatar /></el-icon>
        <span>个人中心</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup>
import router from '@/router';
import {
  HomeFilled,
  Avatar,
  UserFilled,
  MessageBox,
  Reading,
  Pointer,
} from '@element-plus/icons-vue';
</script>
<style lang="scss" scoped>
.el-aside {
  height: 100vh;

  .el-menu {
    height: 100vh;
  }
}
</style>
