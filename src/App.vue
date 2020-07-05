<template>
  <div id="app">
    <router-view ref="page" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  created() {
    this.$store.dispatch("init");

    window.addEventListener("keydown", event => {
      const page: any = this.$refs.page

      if (event.keyCode === 13 && typeof page.enterHandler === 'function') {
        page.enterHandler();
      }
    });
  }
});
</script>

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

.el-table--border th:last-child,
.el-table__body td:last-child
  right -0.5px !important
  top -0.5px !important

.main-content
  height 100%
  display flex
  flex-direction column
  overflow hidden

  .head
    flex 0 0 auto
    display flex
    justify-content space-between
    align-items center

    .name
      margin 0
      font-size 100%
      font-weight 400

  .form-wrapper
    flex 1
    margin-top margin-size
    display flex
    align-items stretch
    background light-bgc
    overflow hidden
    border-radius 6px

  .form
    flex 1
    padding 1.25 * margin-size margin-size
    overflow-y scroll
    margin-right -17px

    .el-form
      width 500px

      .el-form-item
        padding 2px 0

    .el-select.full
    .el-date-editor.el-input.full
      width 100%

  .options
    flex 0 0 auto
    margin-top margin-size
    padding margin-size
    padding-bottom 0
    background light-bgc
    border-radius 6px
    overflow hidden

  .detail
    flex 1
    display flex
    flex-direction column
    margin-top margin-size
    padding margin-size
    background light-bgc
    border-radius 6px
    overflow hidden

    .action
      flex 0 0 auto
      margin-bottom margin-size

    .table
      flex 1
      padding-right 1px
      overflow hidden

    .el-pagination
      flex 0 0 auto
      margin-top margin-size
      text-align right
</style>
