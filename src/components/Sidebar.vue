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
  background-color dark-bgc
  overflow hidden

  .el-menu
    height 100%
    margin-right -17px
    overflow-y scroll
    color light-color
    background-color inherit
    border-right 1px

    .el-menu-item
      font-size 100%
      letter-spacing 1px

      &:focus
      &:hover
        background-color hover-bgc

      &.is-active
        color active-color
</style>
