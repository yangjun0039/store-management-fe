<template>
  <div class="home">
    <Header />

    <main>
      <Sidebar />

      <div class="content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "Home",

  components: {
    Header: () => import("@/components/Header.vue"),
    Sidebar: () => import("@/components/Sidebar.vue")
  }
})
</script>

<style lang="stylus" scoped>
.home
  width 100%
  height 100%
  min-width 600px
  overflow hidden
  display flex
  flex-direction column

  .header
    flex 0 0 auto

  main
    flex 1
    display flex
    overflow hidden

    .sidebar
      flex 0 0 auto
      height 100%

    .content
      flex 1
      height 100%
      padding margin-size
      box-sizing border-box
      background #f5f5f5
      overflow hidden
</style>
