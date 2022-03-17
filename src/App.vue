<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<!-- <p> -->
<!--使用 router-link 组件进行导航 -->
<!--通过传递 `to` 来指定链接 -->
<!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
<!-- <router-link to="/">Go to Home</router-link>
      <router-link to="/login">Go to login</router-link>
      <router-link to="/ui">Go to UI</router-link>
    </p> -->
<!-- <UIView></UIView> -->
<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// import UIView from "./components/ui.vue";
export default {
  name: "app",
  components: {},
  beforeCreate() {
    if (window.localStorage.getItem("animeDoneProps")) {
      this.$store.commit(
        "animeDonePropsChange",
        JSON.parse(window.localStorage.getItem("animeDoneProps"))
      );
    }
    if (window.localStorage.getItem("commonProps")) {
      this.$store.commit(
        "commonPropsChange",
        JSON.parse(window.localStorage.getItem("commonProps"))
      );
    }
    if (window.localStorage.getItem("animeDonePropsCount")) {
      this.$store.commit(
        "animeDonePropsCountChange",
        window.localStorage.getItem("animeDonePropsCount")
      );
    }
    if (window.localStorage.getItem("commonPropsCount")) {
      this.$store.commit(
        "commonPropsCountChange",
        window.localStorage.getItem("commonPropsCount")
      );
    }
  },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
html {
  font-size: 1em;
}
body {
  font-size: 100%;
}
a img,
:link img,
:visited img {
  border: 0px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
