<template>
  <div class="create_item_main">
    <div class="create_item_title">
      <el-button :icon="Close" circle @click="hideCreateItem" /><span>添加条目</span>
    </div>
    <div class="create_item_body">
      <el-radio-group v-model="typeSelection" class="create_item_item">
        <el-radio :label="1">游戏</el-radio>
        <el-radio :label="2">动画</el-radio>
        <el-radio :label="3">电影</el-radio>
        <el-radio :label="4">电视剧</el-radio>
        <el-radio :label="5">书籍</el-radio>
        <el-radio :label="6">音乐</el-radio>
      </el-radio-group>
      <el-radio-group v-model="courseSelection" class="create_item_item">
        <el-radio :label="11">在玩</el-radio>
        <el-radio :label="12">想玩</el-radio>
        <el-radio :label="13">期待</el-radio>
        <el-radio :label="14">玩过</el-radio>
        <el-radio :label="15">搁置</el-radio>
      </el-radio-group>
      <div class="item_img-uploader">
        <image-uploader class="img-uploader"></image-uploader>
        <div>
          <div class="create_item_item">
            <span>游戏名: </span><el-input v-model="nameInput" />
          </div>
          <div class="create_item_item">
            <span>游戏简介: </span><el-input v-model="introduceInput" />
          </div>
          <div class="create_item_item">
            <span>我的评分: </span>
            <el-rate class="el-rate" v-model="rateValue" allow-half> </el-rate>
          </div>
          <div class="create_item_item">
            <span>我的标签: </span
            ><el-input v-model="tagInput" placeholder="//请以空格分隔每个标签" />
          </div>
        </div>
      </div>
      <div class="create_item_item">
        <span>我的评价: </span
        ><el-input
          v-model="commentsInput"
          :rows="3"
          type="textarea"
          placeholder="Please input"
          maxlength="40"
        />
      </div>
      <el-button type="primary" round class="submit_create_item" @click="saveCreateItem"
        >保存</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Close } from "@element-plus/icons-vue";
import { ref } from "vue";

const nameInput = ref(""),
  introduceInput = ref(""),
  tagInput = ref(""),
  typeSelection = ref(1),
  courseSelection = ref(11),
  rateValue = ref(),
  commentsInput = ref("");
</script>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import ImageUploader from "./imageUploader.vue";
import { defineComponent } from "vue";
import { ElRadio, ElRadioGroup, ElInput, ElRate, ElButton } from "element-plus";
export default defineComponent({
  name: "CreateItem",
  data() {
    return {};
  },
  methods: {
    saveCreateItem() {
      if (this.typeSelection === 1 && this.courseSelection === 11) {
        if (document.getElementsByClassName("el-upload-list__item-thumbnail")[0]) {
          const imgCanvas = document.createElement("canvas"),
            imgContext = imgCanvas.getContext("2d");
          // 确保canvas元素的大小和图片尺寸一致
          const img = document.getElementsByClassName(
            "el-upload-list__item-thumbnail"
          )[0];
          imgCanvas.width = img.width;
          imgCanvas.height = img.height;
          // 渲染图片到canvas中
          imgContext.drawImage(img, 0, 0, img.width, img.height);
          // 用data url的形式取出
          const imgAsDataURL = imgCanvas.toDataURL("image/png");
          localStorage.setItem("img", imgAsDataURL);
        }
        this.$store.commit("animeDonePropsCountChange");
        this.$store.commit("animeDonePropsChange", {
          id: this.$store.state.animeDoneCount,
          name: this.nameInput,
          introduce: this.introduceInput,
          tag: this.tagInput,
          value: this.rateValue,
          textarea: this.commentsInput,
          url: localStorage.getItem("img"),
        });
      }
      this.$store.commit("commonPropsCountChange");
      this.$store.commit("commonPropsChange", {
        id: this.$store.state.commonPropsCount,
        name: this.nameInput,
        introduce: this.introduceInput,
        tag: this.tagInput,
        value: this.rateValue,
        textarea: this.commentsInput,
        url: localStorage.getItem("img"),
      });

      window.localStorage.setItem(
        "animeDoneProps",
        JSON.stringify(this.$store.state.animeDoneProps)
      );
      window.localStorage.setItem(
        "commonProps",
        JSON.stringify(this.$store.state.commonProps)
      );
      window.localStorage.setItem(
        "animeDonePropsCount",
        this.$store.state.animeDoneCount
      );
      window.localStorage.setItem("commonPropsCount", this.$store.state.commonPropsCount);
      //以下皆为保存后还原,用于隐藏添加框,将input输入,图片复位为初始状态
      const createItem = document.getElementsByClassName(
        "create_item_main"
      )[0] as HTMLElement;
      createItem.style.display = "none";
      this.nameInput = "";
      this.introduceInput = "";
      this.tagInput = "";
      this.rateValue = 0;
      this.commentsInput = "";
      const handle = document.getElementsByClassName(
          "el-upload-list el-upload-list--picture-card"
        )[0] as HTMLElement,
        handleChild = document.getElementsByClassName(
          "el-upload-list__item is-ready"
        )[0] as HTMLElement;
      handle.removeChild(handleChild);
      const handleDisplay = document.getElementsByClassName(
        "el-upload el-upload--picture-card"
      )[0] as HTMLElement;
      handleDisplay.style.display = "block";
    },
    hideCreateItem() {
      const createItem = document.getElementsByClassName(
        "create_item_main"
      )[0] as HTMLElement;
      createItem.style.display = "none";
    },
  },
});
</script>

<style lang="scss" scoped>
.create_item_main {
  display: none;
  width: 600px;
  height: 485px;
  background-color: #fff;
  border: 1px solid rgb(195, 188, 188);
  box-shadow: 0px 5px 20px rgba(185, 181, 181, 0.5);
  border-radius: 10px;
  .el-input {
    width: 250px;
  }
  .create_item_body {
    display: flex;
    flex-direction: column;
    .create_item_item {
      &:nth-child(-n + 2) {
        margin-top: 6px;
        margin-left: 55px;
      }
      &:nth-child(1) {
        .el-input {
          margin-left: 21px;
        }
      }
      &:nth-child(3),
      &:nth-child(3) {
        .el-rate {
          margin-left: 20px;
        }
        margin-top: 6px;
      }
      margin-top: 16px;
      margin-left: 55px;
      text-align: left;
      .el-input {
        margin-left: 5px;
      }
      .el-textarea {
        margin-left: 30px;
        margin-top: 15px;
        width: 90%;
      }
    }
  }
  .submit_create_item {
    width: 75px;
    margin-left: 44%;
    margin-top: 15px;
  }
}
.create_item_title {
  position: relative;
  line-height: 40px;
  text-align: left;
  width: 100%;
  height: 40px;
  background-color: #f09199;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  span {
    color: #fff;
    margin-left: 10px;
  }
  .el-button {
    position: absolute;
    right: -5px;
    top: -8px;
  }
}
.item_img-uploader {
  display: flex;
  margin-top: 15px;
  ::v-deep .el-upload {
    margin-top: 5px;
    margin-left: 25px;
    width: 110px;
    height: 150px;
  }
  ::v-deep .el-upload-list__item.is-ready {
    margin-top: 5px;
    margin-left: 25px;
    width: 110px;
    height: 150px;
  }
}
</style>
