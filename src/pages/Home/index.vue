<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>
<script>
import ListContainer from "@/pages/Home/ListContainer";
import Rank from "./Rank/index.vue";
import Recommend from "./Recommend/index.vue";
import Like from "./Like/index.vue";
import Floor from "./Floor/index.vue";
import Brand from "./Brand/index.vue";
export default {
  components: {
    ListContainer,
    Rank,
    Recommend,
    Like,
    Floor,
    Brand,
  },
};
</script>
<style lang="">
</style>