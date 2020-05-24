<template>
  <div class="sidebar">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      :router="true"
      :default-active="activeIndex"
    >
      <el-menu-item v-for="(item, index) in menuList" :key="index" :index="item.path">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { menuList } from '@/config/config'

export default {
  name: 'Sidebar',

  data() {
    return {
      menuList,
      activeIndex: this.$route.path
    }
  },

  watch: {
    $route: {
      handler(val) {
        this.activeIndex = '/' + val.path.split('/')[1]
      },
      immediate: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.sidebar
  width 260px
  height 100%

  .el-menu
    height 100%
    overflow-y scroll
</style>
