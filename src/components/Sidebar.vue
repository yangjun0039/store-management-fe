<template>
  <div class="sidebar">
    <el-menu
      class="el-menu-vertical-demo"
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
    background-color dark-bgc
    color light-color

    .el-menu-item
      &:focus
      &:hover
        background-color hover-bgc

      &.is-active
        color active-color
</style>
