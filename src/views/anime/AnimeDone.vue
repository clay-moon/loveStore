<template>
  <ItemView
    v-for="item of animeDoneProps"
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
import ItemView from "../../components/item.vue";
export default {
  name: "AnimeDone",
  components: {
    ItemView,
  },
  data() {
    return {
      animeDoneProps: this.$store.state.animeDoneProps,
    };
  },
};
</script>
<style lang="scss" scoped></style>
