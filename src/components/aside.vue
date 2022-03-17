<template>
  <el-aside class="el-aside" width="200px">
    <el-row class="tac">
      <el-col :span="24">
        <div class="s-category">
          <h5 class="mb-2">分类</h5>
        </div>
        <el-menu
          unique-opened
          :router="true"
          active-text-color="#ffd04b"
          background-color="#626c70"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon
                ><svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-94"></use></svg
              ></el-icon>
              <span>游戏</span>
            </template>
            <el-menu-item index="1-1" @click="toAnimeDone">
              <span>在玩</span>
            </el-menu-item>
            <el-menu-item index="1-2" @click="toAnimeDone">想玩</el-menu-item>
            <el-menu-item index="1-3" @click="toAnimeDone">期待</el-menu-item>
            <el-menu-item index="1-4" @click="toAnimeDone">玩过</el-menu-item>
            <el-menu-item index="1-5" @click="toAnimeDone">搁置</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="2">
            <template #title>
              <el-icon
                ><svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dongman"></use></svg
              ></el-icon>
              <span>动画</span>
            </template>
            <el-menu-item index="2-1" @click="toAnimeDone">在看</el-menu-item>
            <el-menu-item index="2-2" @click="toAnimeDone">想看</el-menu-item>
            <el-menu-item index="2-3" @click="toAnimeDone">看过</el-menu-item>
            <el-menu-item index="2-4" @click="toAnimeDone">期待</el-menu-item>
            <el-menu-item index="2-5" @click="toAnimeDone">搁置</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>
              <el-icon
                ><svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dianying"></use></svg
              ></el-icon>
              <span>电影</span>
            </template>
            <el-menu-item index="/home/AnimeDone">在看</el-menu-item>
            <el-menu-item index="3-2" @click="toAnimeDone">想看</el-menu-item>
            <el-menu-item index="3-3" @click="toAnimeDone">看过</el-menu-item>
            <el-menu-item index="3-4" @click="toAnimeDone">期待</el-menu-item>
            <el-menu-item index="3-5" @click="toAnimeDone">搁置</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="4">
            <template #title>
              <el-icon
                ><svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dianshiju"></use></svg
              ></el-icon>
              <span>电视剧</span>
            </template>
            <el-menu-item index="4-1" @click="toAnimeDone">在看</el-menu-item>
            <el-menu-item index="4-2" @click="toAnimeDone">想看</el-menu-item>
            <el-menu-item index="4-3" @click="toAnimeDone">看过</el-menu-item>
            <el-menu-item index="4-4" @click="toAnimeDone">期待</el-menu-item>
            <el-menu-item index="4-5" @click="toAnimeDone">搁置</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>
              <el-icon
                ><svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-shuji"></use></svg
              ></el-icon>
              <span>书籍</span>
            </template>
            <el-menu-item index="5-1" @click="toAnimeDone">在看</el-menu-item>
            <el-menu-item index="5-2" @click="toAnimeDone">想看</el-menu-item>
            <el-menu-item index="5-3" @click="toAnimeDone">看过</el-menu-item>
            <el-menu-item index="5-4" @click="toAnimeDone">期待</el-menu-item>
            <el-menu-item index="5-5" @click="toAnimeDone">搁置</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="6" @click="toAnimeDone">
            <el-icon
              ><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yinle"></use></svg
            ></el-icon>
            <span>音乐</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>

<script lang="ts" setup>
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<script lang="ts">
import {
  ElAside,
  ElMenu,
  ElSubMenu,
  ElRow,
  ElCol,
  ElIcon,
  ElMenuItem,
} from "element-plus";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeAside",
  components: {
    ElAside,
  },
  methods: {
    toAnimeDone() {
      this.$router.push("/home/AnimeDone");
    },
  },
});
</script>

<style lang="scss" scoped>
.s-category {
  overflow: hidden;
  background-color: (340.37, 59.78%, 64.9%);
}
.el-menu {
  border-right: none;
}

.el-menu.el-menu-vertical-demo {
  min-height: 110vh;
}

.tac {
  width: 200px;
}
</style>
