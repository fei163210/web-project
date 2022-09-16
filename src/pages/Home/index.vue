<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor, index) in FloorList" :key="floor.id" :floor="floor" />
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
import { mapState } from "vuex";
export default {
  components: {
    ListContainer,
    Rank,
    Recommend,
    Like,
    Floor,
    Brand,
  },
  computed: {
    ...mapState({
      FloorList: (state) => {
        return state.home.FloorList;
      },
    }),
  },
  mounted() {},
};
</script>
<style lang="">
</style>