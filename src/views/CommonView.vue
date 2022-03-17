<template>
  <ItemView
    v-for="item of commonProps"
    :name="item.name"
    :introduce="item.introduce"
    :tag="item.tag"
    :value="item.value"
    :textarea="item.textarea"
    :key="item.id"
    :imgUrl="item.url"
  ></ItemView>
</template>

<script>
import ItemView from "../components/item.vue";
export default {
  name: "CommonView",
  components: {
    ItemView,
  },
  data() {
    return {
      commonProps: this.$store.state.commonProps,
    };
  },
};
</script>
<style lang="scss" scoped></style>
