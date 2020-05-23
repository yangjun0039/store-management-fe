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

<script>
export default {
  name: "Home",

  components: {
    Header: () => import("@/components/Header"),
    Sidebar: () => import("@/components/Sidebar")
  }
};
</script>

<style lang="stylus" scoped>
.home
  width 100%
  height 100%
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

    .content
      flex 1
</style>
