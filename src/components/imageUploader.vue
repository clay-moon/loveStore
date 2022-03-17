<template>
  <el-upload
    action="#"
    list-type="picture-card"
    :auto-upload="false"
    :on-change="handleSuccess"
    class="el-upload"
  >
    <template #default>
      <el-icon><Plus /></el-icon>
    </template>
    <template #file="{ file }">
      <div>
        <div>
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        </div>
        <span class="el-upload-list__item-actions">
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <el-icon><Delete /></el-icon>
          </span>
        </span>
      </div>
    </template>
  </el-upload>
  <el-dialog v-model="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="" />
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { Plus, Delete } from "@element-plus/icons-vue";

import type { UploadFile } from "element-plus";

const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const disabled = ref(false);

const handleRemove = (file: UploadFile) => {
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
};
const handleSuccess = () => {
  const handleDisplay = document.getElementsByClassName(
    "el-upload el-upload--picture-card"
  )[0] as HTMLElement;
  handleDisplay.style.display = "none";
};
</script>
<script lang="ts">
import { ElUpload, ElIcon, ElDialog } from "element-plus";
export default {
  name: "ImageUploader",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
