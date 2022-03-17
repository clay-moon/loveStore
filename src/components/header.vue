<template>
  <el-header class="el-header">
    <el-row>
      <el-col :span="3.8"
        ><div class="grid-content bg-purple">
          <img @click="mainJoin" src="../assets/logo.png" alt="load failed" />
          <span @click="mainJoin" class="manage-system">管理系统</span>
          <div class="s-acount">
            <div class="user-name">{{ userName }}</div>
            <div class="s-setting">修改密码 | 设置 | 注销</div>
          </div>
        </div></el-col
      >
      <el-col :span="10"
        ><div class="grid-content bg-purple-light">
          <div class="login-time">登陆时间: {{ loginTime }}</div>
          <div>
            <el-input
              :suffix-icon="Search"
              v-model="input"
              placeholder="search"
              class="search"
            >
            </el-input>
          </div></div
      ></el-col>
    </el-row>
  </el-header>
</template>

<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
const input = ref("");
</script>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { ElHeader, ElRow, ElCol, ElInput } from "element-plus";

export default {
  name: "HomeHeader",
  components: {
    ElHeader,
    ElRow,
    ElCol,
    ElInput,
  },
  data() {
    return {
      loginTime: new Date().toLocaleString(),
      userName: this.$store.state.userName,
    };
  },
  methods: {
    mainJoin() {
      this.$router.push("/home/love");
    },
  },
};
</script>

<style lang="scss" scoped>
.s-acount {
  margin-left: 0.625rem;
}
.user-name {
  margin-left: 0.625rem;
  margin-top: 0.75rem;
  font-size: 1rem;
  text-align: left;
  color: orange;
}
.s-setting {
  margin-left: 0.625rem;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  text-align: left;
}

.manage-system {
  font-size: 2rem;
  text-align: center;
  line-height: 3.75rem;
}
img {
  height: 3.75rem;
}

.el-header {
  .el-row {
    justify-content: space-between;
  }
  padding: 0;
  overflow: hidden;
  background-color: aliceblue;
}

.grid-content.bg-purple {
  display: flex;
  img,
  span {
    cursor: pointer;
  }
}

.search {
  margin-right: 12.5rem;
  width: 12.5rem;
}
.login-time {
  margin-left: 30.5rem;
  font-size: 0.875rem;
  height: 1.11rem;
}
</style>
