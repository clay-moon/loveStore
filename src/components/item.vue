<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="110px" class="img_overflow_hidden"
        ><img :src="imgUrl" alt="load falied"
      /></el-aside>
      <el-main>
        <div class="name">{{ name }}</div>
        <div class="introduce">{{ introduce }}</div>
        <div class="star">
          <el-rate class="el-rate" v-model="rate" allow-half disabled> </el-rate>
        </div>
        <div class="tag">标签: {{ tag }}</div>
        <div class="comment">
          <el-input v-model="text" rows="1" type="textarea" readonly />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
</script>

<script lang="ts">
import { defineComponent } from "vue";
import { ElAside, ElMain, ElContainer, ElRate, ElInput } from "element-plus";
export default defineComponent({
  name: "ItemView",
  props: {
    name: String,
    introduce: String,
    tag: String,
    value: Number,
    textarea: String,
    imgUrl: String,
  },
  data(): { rate: number | undefined; text: string | undefined } {
    return {
      rate: this.value,

      text: this.textarea,
    };
  },
  components: {
    ElAside,
    ElMain,
    ElContainer,
    ElRate,
  },
});
</script>

<style lang="scss" scoped>
img {
  object-fit: contain;
  border-radius: 2.5px;
}
.common-layout {
  margin-top: 30px;
  background-color: #ffbead;
  padding: 0.625rem;
  width: 40%;
  div {
    text-align: left;
    margin-top: 0.5rem;
    font-size: 0.8125rem;
    .el-rate {
      height: 1rem;
      margin-top: 0;
    }
  }
  .img_overflow_hidden {
    overflow: hidden;
    height: 150px;
  }
  .star {
    margin-top: 0.5rem;
  }
  .name {
    margin-top: 0;
    font-size: 1rem;
  }
  height: 9.375rem;
  border: 0.0625rem solid #ffbead;
  border-radius: 0.25rem;
  &:last-child::after {
    content: "";
    flex-grow: 1;
  }
  &:nth-child(2n-1):last-child {
    margin-right: 47.1%;
  }
}
.el-main {
  padding: 0;
  margin-left: 0.8516rem;
  white-space: nowrap;
  overflow: hidden;
}
.el-rate {
  ::v-deep .el-rate__icon {
    margin-right: 0;
    font-size: 0.9375rem;
  }
}
</style>
