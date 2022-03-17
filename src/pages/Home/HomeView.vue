<template>
  <el-scrollbar
    height="100vh"
    @scroll="
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      asideFixed($event.scrollTop)
    "
  >
    <div class="home-view">
      <div class="header">
        <HomeHeader></HomeHeader>
      </div>
      <div class="aside-main">
        <HomeAside class="aside"></HomeAside>
        <div></div>
        <HomeMain class="main"></HomeMain>
      </div>
    </div>
  </el-scrollbar>
</template>

<script lang="ts">
import { ElScrollbar } from "element-plus";
import HomeHeader from "../../components/header.vue";
import HomeAside from "../../components/aside.vue";
import HomeMain from "../../components/main.vue";

export default {
  name: "HomeView",
  components: {
    HomeHeader,
    HomeAside,
    HomeMain,
    ElScrollbar,
  },
  methods: {
    asideFixed(scrollTop: number) {
      const elMenu = document.getElementsByClassName(
        "el-menu el-menu-vertical-demo"
      )[0] as HTMLElement;
      if (scrollTop > 150) {
        elMenu.style.position = "fixed";
        elMenu.style.top = "0px";
        elMenu.style.width = "200px";
        elMenu.style.overflow = "hidden auto";
      } else {
        elMenu.style.position = "static";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home-view {
  padding: 0;
}

.aside-main {
  display: flex;
}
.main {
  min-height: 110vh;
}
</style>
