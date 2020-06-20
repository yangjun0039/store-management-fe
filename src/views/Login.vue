<template>
  <div class="login">
    <div class="section">
      <div class="title">系统登录</div>

      <el-form>
        <el-form-item>
          <el-input
            v-model="username"
            prefix-icon="el-icon-user"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-input
            v-model="password"
            type="password"
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" :loading="loading" @click="login"
            >登 录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Login",

  data() {
    return {
      loading: false,
      username: "",
      password: ""
    };
  },

  methods: {
    login() {
      this.loading = true;

      this.$axios
        .post("/authentication/login", {
          // eslint-disable-next-line
          delegate_code: "10001",
          name: this.username,
          password: this.password
        })
        .then(res => {
          if (res.token) {
            localStorage.setItem("token", res.token);
            this.$router.replace("/dashboard");
          }
        })
        .finally(() => (this.loading = false));
    }
  }
});
</script>

<style lang="stylus" scoped>
.login
  width 100%
  height 100%
  display flex
  align-items center
  justify-content center
  background dark-bgc

  .section
    width 450px
    background light-bgc
    padding margin-size
    border-radius 5px

    .title
      font-size 150%

    .el-form
      margin-top margin-size

      .el-button
        width 100%
</style>
