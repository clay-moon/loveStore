<template>
  <div class="header">
    <img src="../../assets/logo.png" alt="loder failed" />

    <div class="acount">
      <el-input
        class="acount-input"
        v-model="acount"
        placeholder="用户名"
        :prefix-icon="User"
      />
    </div>

    <div class="password">
      <el-input
        class="password-input"
        v-model="password"
        placeholder="密码"
        type="password"
        show-password
        :prefix-icon="Lock"
      />
    </div>
    <VerifySlide @submit-verify-result="receive" class="verifySlide"></VerifySlide>
    <div class="forget">忘记密码</div>
    <div class="s-button">
      <el-button class="button" type="primary" @click="verifyLogin">登录</el-button>
      <el-button class="button" type="primary">注册</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Lock, User } from "@element-plus/icons-vue";
import { ref } from "vue";
import VerifySlide from "@/components/verify.vue";
const acount = ref("");
const password = ref("");
</script>
scr
<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// import { useRouter } from "vue-router";
import { ElInput, ElButton } from "element-plus";
// app.vue
export default {
  name: "LoginView",
  data() {
    return {
      verify: false,
    };
  },
  methods: {
    receive(data: boolean) {
      this.verify = data;
    },
    verifyLogin() {
      if (this.acount === "") {
        document.getElementsByClassName("el-input__inner")[0].focus();
      } else if (this.password === "") {
        document.getElementsByClassName("el-input__inner")[1].focus();
      } else {
        document.getElementsByClassName("el-input__inner")[2].focus();
        if (this.verify === true) {
          this.$router.push("/home/love");
          this.$store.commit("userNameChange", this.acount);
        } else {
          alert("验证错误!");
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.acount,
.password,
.forget {
  width: 25rem;
  margin: 0 auto;
}
.forget {
  text-align: right;
  line-height: 20px;
  color: grey;
  font-size: 14px;
  cursor: pointer;
}
.s-button {
  margin: 0 auto;
  margin-top: 5px;
  width: 25rem;
  display: flex;
  justify-content: space-between;
}
.button {
  width: 11.25rem;
}
.acount,
.password,
.verifySlide {
  margin-top: 10px;
}
.header {
  margin-top: 80px;
}
</style>
