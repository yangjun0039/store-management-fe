<template>
  <div class="project-add main-content">
    <div class="head">
      <h2 class="name">服务管理 / 项目管理 / 添加项目</h2>
    </div>

    <div class="form-wrapper">
      <div class="form">
        <el-form
          :model="form"
          label-width="6em"
          width="500"
          ref="form"
          :rules="rules"
        >
          <el-form-item label="项 目" prop="name" required>
            <el-input
              v-model="form.name"
              placeholder="请输入项目名称"
            ></el-input>
          </el-form-item>

          <el-form-item label="类 型" prop="type" required>
            <el-select
              v-model="form.type"
              placeholder="请选择项目类型"
              class="full"
            >
              <el-option
                v-for="item in typeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="成本价" prop="cost" required>
            <el-input v-model="form.cost" placeholder="请输入成本价"></el-input>
          </el-form-item>

          <el-form-item label="单 价" prop="price" required>
            <el-input v-model="form.price" placeholder="请输入单价"></el-input>
          </el-form-item>

          <el-form-item label="服务时间" prop="time">
            <el-input-number
              v-model="form.time"
              :min="1"
              :max="100"
              label="请输入服务时间"
            ></el-input-number>
          </el-form-item>

          <el-form-item label="服务频率" prop="freq">
            <el-input-number
              v-model="form.freq"
              :min="1"
              :max="100"
              label="请输入服务频率"
            ></el-input-number>
          </el-form-item>

          <el-form-item label="备 注" prop="note">
            <el-input
              v-model="form.note"
              type="textarea"
              :rows="4"
              placeholder="请输入备注信息"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submit" :loading="loading"
              >立即添加</el-button
            >
            <el-button @click="reset" :disabled="loading">重 置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Form } from "element-ui";

export default Vue.extend({
  name: "CustomAdd",

  data() {
    return {
      loading: false,
      form: {
        name: "",
        type: "",
        cost: "",
        price: "",
        time: "",
        freq: "",
        note: ""
      },
      typeOptions: [
        { label: "1", value: 1 },
        { label: "2", value: 2 }
      ],
      rules: {
        name: [
          {
            required: true,
            message: "请输入项目名称",
            trigger: ["blur", "change"]
          },
          {
            min: 2,
            max: 30,
            message: "项目名称长度在 2 到 30 个字符之间",
            trigger: ["blur", "change"]
          }
        ],
        type: [
          {
            required: true,
            message: "请选择项目类型",
            trigger: "blur"
          }
        ],
        cost: [
          {
            required: true,
            message: "请输入成本价",
            trigger: ["blur", "change"]
          },
          {
            pattern: /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/,
            message: "请输入正确的金额",
            trigger: ["blur", "change"]
          }
        ],
        price: [
          {
            required: true,
            message: "请输入单价",
            trigger: ["blur", "change"]
          },
          {
            pattern: /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/,
            message: "请输入正确的金额",
            trigger: ["blur", "change"]
          }
        ],
        time: [
          {
            pattern: /^[1-9][0-9]*$/,
            message: '服务时间只能是整数',
            trigger: ['blur', 'change']
          }
        ],
        freq: [
          {
            pattern: /^[1-9][0-9]*$/,
            message: '服务频率只能是整数',
            trigger: ['blur', 'change']
          }
        ]
      }
    };
  },

  methods: {
    submit() {
      (this.$refs.form as Form).validate((valid: boolean) => {
        if (valid) {
          this.loading = true;

          this.$axios
            .post("/server/add-project", {
              // eslint-disable-next-line
              project_name: this.form.name,
              // eslint-disable-next-line
              project_type: this.form.type,
              cost: Math.round(parseFloat(this.form.cost) * 100),
              price: Math.round(parseFloat(this.form.price) * 100),
              // eslint-disable-next-line
              server_time: this.form.time,
              // eslint-disable-next-line
              server_freq: this.form.freq,
              note: this.form.note
            })
            .then(() => {
              this.$message.success("项目添加成功");
              this.reset();
            })
            .finally(() => (this.loading = false));
        }
      });
    },

    reset() {
      (this.$refs.form as Form).resetFields();
    }
  }
});
</script>
