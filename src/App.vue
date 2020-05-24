<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="stylus">
html
body
#app
  margin 0
  padding 0
  width 100%
  height 100%
  overflow hidden

.el-select
  width 100%

.main-content
  height 100%
  display flex
  flex-direction column

  .head
    flex 0 0 auto
    display flex
    justify-content space-between
    align-items center

    .name
      margin 0

  .form
    flex 1
    margin-top 20px
    padding 20px
    background #ffffff
    border-radius 5px
    overflow scroll

  .options
    flex 0 0 auto
    margin-top 20px
    padding 20px
    padding-bottom 0
    background #fff
    border-radius 5px
    overflow hidden

  .detail
    flex 1
    display flex
    flex-direction column
    margin-top 20px
    padding 20px
    background #ffffff
    border-radius 5px
    overflow scroll

    .action
      flex 0 0 auto
      margin-bottom 20px

    .table
      flex  0 0 auto
      overflow scroll

    .el-pagination
      flex 0 0 auto
      margin-top 20px
      text-align right
</style>
