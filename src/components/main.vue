<template>
  <el-main class="el-main">
    <div class="header">
      <span>目录</span>
      <el-button :icon="Plus" round @click="displayCreateItem">添加</el-button>
    </div>
    <div>
      <div class="item_main">
        <router-view name="AnimeDone"></router-view>
        <router-view name="CommonView"></router-view>
      </div>
      <div style="height: 30px"></div>
    </div>
    <div class="create_item"><create-item></create-item></div>
  </el-main>
</template>

<script setup lang="ts">
import { Plus } from "@element-plus/icons-vue";
</script>

<script lang="ts">
import { defineComponent } from "vue";
import { ElMain, ElButton } from "element-plus";
import CreateItem from "./createItem.vue";

export default defineComponent({
  name: "HomeMain",
  components: {
    ElMain,
    ElButton,
    CreateItem,
  },
  data() {
    return {};
  },
  methods: {
    displayCreateItem() {
      const createItem = document.getElementsByClassName(
        "create_item_main"
      )[0] as HTMLElement;
      createItem.style.display = "block";
    },
  },
});
</script>

<style lang="scss" scoped>
.el-main {
  .header {
    position: relative;
    height: 3.834rem;
    line-height: 3.834rem;
    background-color: #3388b6;
    span {
      font-size: 1.5rem;
      color: orange;
      vertical-align: middle;
    }
    .el-button {
      top: 15px;
      right: 280px;
      position: absolute;
    }
  }
  .item_main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    column-gap: 1px;
  }
  padding: 0;
  background-color: #eee;
}
.item {
  margin-bottom: 1.5rem;
}
.item:nth-child(-n + 2) {
  margin-top: 1.5rem;
}
.create_item {
  top: 250px;
  left: 40%;
  position: fixed;
}
</style>
