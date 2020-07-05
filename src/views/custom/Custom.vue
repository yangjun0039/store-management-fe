<template>
  <div class="custom main-content" v-loading="loading">
    <div class="head">
      <h2 class="name">会员管理</h2>

      <div class="operation">
        <el-button
          type="primary"
          icon="el-icon-plus"
          @click="$router.push('/custom/add')"
          >添加会员</el-button
        >
      </div>
    </div>

    <div class="options">
      <el-form ref="form">
        <el-row :gutter="20">
          <el-col :xs="{ span: 24 }" :sm="{ span: 12 }" :xl="{ span: 8 }">
            <el-form-item>
              <el-input
                placeholder="请输入搜索内容"
                v-model="searchStr"
                class="input-with-select"
              >
                <!-- <el-select
                  v-model="searchType"
                  slot="prepend"
                  placeholder="搜索类型"
                  class="search-type"
                >
                  <el-option
                    v-for="(item, index) in searchTypes"
                    :key="index"
                    :label="item.title"
                    :value="item.value"
                  ></el-option>
                </el-select> -->
              </el-input>
            </el-form-item>
          </el-col>

          <el-col :xs="{ span: 24 }" :sm="{ span: 12 }" :xl="{ span: 8 }">
            <el-form-item>
              <el-button type="primary" @click="getData">搜 索</el-button>
              <el-button @click="reset">清 空</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="detail">
      <div class="table">
        <el-table border stripe height="100%" :data="list">
          <el-table-column prop="id" label="会员卡号" />
          <el-table-column prop="name" label="姓名" />
          <el-table-column prop="id" label="性别">
            <template slot-scope="scope">
              {{
                scope.row.sex.toString() === "1"
                  ? "男"
                  : scope.row.sex.toString() === "2"
                  ? "女"
                  : "未知"
              }}
            </template>
          </el-table-column>
          <el-table-column prop="" label="出生日期" />
          <el-table-column prop="position" label="职业" />
          <el-table-column prop="" label="证件号码" />
          <el-table-column prop="phone" label="联系电话" />
          <el-table-column prop="addr" label="联系地址" />
          <el-table-column prop="" label="会员类型" />
          <el-table-column prop="" label="会员等级" />
          <el-table-column prop="" label="优惠方式" />
          <el-table-column prop="" label="卡内余额" />
          <el-table-column prop="" label="剩余次数" />
          <el-table-column prop="" label="累计消费" />
          <el-table-column prop="" label="其他" />
          <el-table-column prop="" label="会员积分" />
          <el-table-column prop="" label="电子邮件" />
          <el-table-column label="操作" fixed="right" width="130">
            <template>
              <el-button type="text" size="small">编辑</el-button>
              <el-button type="text" size="small">删除</el-button>
              <el-button type="text" size="small">续费</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <el-pagination
        :current-page="page"
        :page-sizes="[10, 25, 50, 100]"
        :page-size="pageSize"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        background
      ></el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Form } from "element-ui";

export default Vue.extend({
  name: "Custom",

  data() {
    return {
      loading: false,
      searchTypes: [
        { title: "会员卡号", value: "1" },
        { title: "会员姓名", value: "2" }
      ],
      searchType: "",
      searchStr: "",
      page: 1,
      pageSize: 10,
      total: 0,
      list: [] as any[]
    };
  },

  created() {
    this.getData();
  },

  methods: {
    getData() {
      this.loading = true;

      this.$axios
        .get("/user/member-info", {
          params: {
            page: this.page,
            num: this.pageSize,
            cond: this.searchStr
          }
        })
        .then(res => {
          console.log(res);
          if (Array.isArray(res)) {
            this.list = res;
          }
        })
        .finally(() => (this.loading = false));
    },

    reset() {
      (this.$refs.form as Form).resetFields();
    }
  }
});
</script>

<style lang="stylus" scoped>
.search-type
  width 8em
</style>
