<template>
  <div class="sidebar">
    <el-menu
      class="el-menu-vertical-demo"
      text-color="#fff"
      :router="true"
      :default-active="activeIndex"
    >
      <template v-for="(item, index) in menuList">
        <el-submenu v-if="item.children" :key="index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>

          <el-menu-item
            v-for="(inner, i) in item.children"
            :key="i"
            :index="inner.path"
          >
            <i :class="inner.icon"></i>
            <span slot="title">{{ inner.title }}</span>
          </el-menu-item>
        </el-submenu>

        <el-menu-item v-else :key="index" :index="item.path">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { menuList } from "@/config/config";

export default {
  name: "Sidebar",

  data() {
    return {
      menuList,
      activeIndex: this.$route.path
    };
  },

  watch: {
    $route: {
      handler(val) {
        this.activeIndex = "/" + val.path.split("/")[1];
      },
      immediate: true
    }
  }
};
</script>

<style lang="stylus">
.sidebar
  width 260px
  height 100%
  background-color dark-bgc
  overflow hidden

  .el-menu
    height 100%
    margin-right -17px
    overflow-y scroll
    overflow-x hidden
    color light-color
    background-color inherit
    border-right 1px

    .el-menu-item
    .el-submenu__title
      font-size 100%
      letter-spacing 1px
      color light-color

      .el-menu
        background-color dark-bgc

      &:focus
      &:hover
        background-color hover-bgc

      &.is-active
        color active-color
</style>
