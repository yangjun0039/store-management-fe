<template>
  <div class="header">
    <div class="user">
      <el-dropdown>
        <el-avatar :size="50" fit="cover" />

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><span @click="logout">退出</span></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",

  methods: {
    logout() {
      this.$store.dispatch('changeToken', '')
      this.$router.push('/login')
    }
  }
};
</script>

<style lang="stylus" scoped>
.header
  height 60px
  background dark-bgc

  .user
    height 100%
    float right
    margin-right margin-size
    display flex
    align-items center
    cursor pointer
</style>
