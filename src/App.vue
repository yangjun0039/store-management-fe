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
  color dark-color

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
    margin-top margin-size
    padding margin-size
    background light-bgc
    border-radius 5px
    overflow scroll

  .options
    flex 0 0 auto
    margin-top margin-size
    padding margin-size
    padding-bottom 0
    background light-bgc
    border-radius 5px
    overflow hidden

  .detail
    flex 1
    display flex
    flex-direction column
    margin-top margin-size
    padding margin-size
    background light-bgc
    border-radius 5px
    overflow scroll

    .action
      flex 0 0 auto
      margin-bottom margin-size

    .table
      flex  0 0 auto
      overflow scroll

    .el-pagination
      flex 0 0 auto
      margin-top margin-size
      text-align right
</style>
