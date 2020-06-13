<template>
  <div class="custom-add main-content">
    <div class="head">
      <h2 class="name">添加会员</h2>
    </div>

    <div class="form">
      <el-form :model="form" label-width="6em">
        <el-row :gutter="20">
          <el-col :xs="{ span: 24 }" :sm="{ span: 12 }" :xl="{ span: 8 }">
            <el-form-item label="会员卡号" required>
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="{ span: 24 }" :sm="{ span: 12 }" :xl="{ span: 8 }">
            <el-form-item label="会员姓名" required>
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>

          <el-col :xs="{ span: 24 }" :sm="{ span: 12 }" :xl="{ span: 8 }">
            <el-form-item label="当前状态" required>
              <el-select v-model="form.name" placeholder="请选择">
                <el-option
                  v-for="item in []"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :xs="{ span: 24 }" :sm="{ span: 12 }" :xl="{ span: 8 }">
            <el-form-item label="优惠方式" required>
              <el-select v-model="form.name" placeholder="请选择">
                <el-option
                  v-for="item in []"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :xs="{ span: 24 }" :sm="{ span: 12 }" :xl="{ span: 8 }">
            <el-form-item label="会员等级" required>
              <el-select v-model="form.name" placeholder="请选择">
                <el-option
                  v-for="item in []"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <div>
          <el-button type="success">立即创建</el-button>
          <el-button>返 回</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CustomAdd",

  data() {
    return {
      form: {
        name: ""
      }
    };
  }
});
</script>

<style lang="stylus" scoped></style>
