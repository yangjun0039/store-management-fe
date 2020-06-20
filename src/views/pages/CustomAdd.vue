<template>
  <div class="custom-add main-content">
    <div class="head">
      <h2 class="name">会员管理 / 添加会员</h2>
    </div>

    <div class="form">
      <el-form
        :model="form"
        label-width="6em"
        width="500"
        ref="form"
        :rules="rules"
      >
        <el-form-item label="姓 名" prop="name" required>
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>

        <el-form-item label="手机号" prop="phone" required>
          <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>

        <el-form-item label="性 别" prop="sex" required>
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option
              v-for="item in sexOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="会员等级" prop="level" required>
          <el-select v-model="form.level" placeholder="请选择会员等级">
            <el-option
              v-for="item in levelOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="有效期" prop="effect" required>
          <el-date-picker
            v-model="form.effect"
            type="date"
            placeholder="选择有效日期"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item label="电子邮箱" prop="email">
          <el-input
            v-model="form.email"
            placeholder="请输入电子邮箱"
          ></el-input>
        </el-form-item>

        <el-form-item label="地 址" prop="address">
          <el-input v-model="form.address" placeholder="请输入地址"></el-input>
        </el-form-item>

        <el-form-item label="职 业" prop="address">
          <el-input v-model="form.job" placeholder="请输入职业"></el-input>
        </el-form-item>

        <el-form-item label="身份证号" prop="idNo">
          <el-input v-model="form.idNo" placeholder="请输入身份证号"></el-input>
        </el-form-item>

        <el-form-item label="推荐人" prop="introducer">
          <el-input
            v-model="form.introducer"
            placeholder="请输入推荐人"
          ></el-input>
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
            >立即创建</el-button
          >
          <el-button @click="reset" :disabled="loading">重 置</el-button>
        </el-form-item>
      </el-form>
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
        phone: "",
        sex: "",
        level: "",
        effect: "",
        email: "",
        address: "",
        job: "",
        idNo: "",
        introducer: "",
        note: ""
      },
      sexOptions: [
        { label: "男", value: 1 },
        { label: "女", value: 2 }
      ],
      levelOptions: [
        { label: "VIP 1", value: 1 },
        { label: "VIP 2", value: 2 }
      ],
      pickerOptions: {
        disabledDate(time: Date) {
          return time.getTime() < Date.now();
        },
        shortcuts: [
          {
            text: "一个月",
            onClick(picker: any) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 30);
              picker.$emit("pick", date);
            }
          },
          {
            text: "三个月",
            onClick(picker: any) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 30 * 3);
              picker.$emit("pick", date);
            }
          },
          {
            text: "六个月",
            onClick(picker: any) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 30 * 6);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一年",
            onClick(picker: any) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 365);
              picker.$emit("pick", date);
            }
          },
          {
            text: "两年",
            onClick(picker: any) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 365 * 2);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入会员姓名",
            trigger: ["blur", "change"]
          },
          {
            min: 2,
            max: 30,
            message: "姓名长度在 2 到 30 个字符之间",
            trigger: ["blur", "change"]
          }
        ],
        phone: [
          {
            required: true,
            message: "请输入手机号",
            trigger: ["blur", "change"]
          },
          {
            pattern: /^((13|14|15|17|18)[0-9]{1}\d{8})$/,
            message: "请输入正确的手机号",
            trigger: ["blur", "change"]
          }
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
        level: [{ required: true, message: "请选择会员等级", trigger: "blur" }],
        effect: [{ required: true, message: "请选择有效日期", trigger: "blur" }]
      }
    };
  },

  methods: {
    submit() {
      (this.$refs.form as Form).validate((valid: boolean) => {
        if (valid) {
          this.loading = true;

          this.$axios
            .post("/user/add-member", {
              name: this.form.name,
              phone: this.form.phone,
              sex: this.form.sex,
              // eslint-disable-next-line
              member_level: this.form.level,
              email: this.form.email,
              addr: this.form.address,
              position: this.form.job,
              // eslint-disable-next-line
              id_card_num: this.form.idNo,
              introducer: this.form.introducer,
              note: this.form.note,
              // eslint-disable-next-line
              effect_time: Math.round(
                new Date(this.form.effect).getTime() / 1000
              )
            })
            .then(res => {
              this.$message.success("添加会员成功");
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
