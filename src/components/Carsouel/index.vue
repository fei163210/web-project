<template >
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="bl in carsouel" :key="bl.id">
        <img :src="bl.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "Carsouel",
  props: ["carsouel"],
  watch: {
    carsouel: {
      immediate: true,
      handler() {
        // v-for执行完毕才有结构，刚获取到数据时，v-for可能还没有执行完毕
        // 下一次dom更新后执行回调z
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.mySwiper, {
            autoplay: true,
            loop: true,
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              // 点击小球切换图片
              clickable: true,
            },
            // 如果需要前后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>
<style lang="less">
</style>