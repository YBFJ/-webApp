<template>
<div class="wrapper">
   <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id"><img class="swiper-img" :src="item.imgUrl" ></swiper-slide>
    <!-- class="swiper-img"图片尺寸适应 -->

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- 轮播的左右箭头 -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
</div>

</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data: function() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background white !important
.wrapper
  background #eee
  overflow hidden
  width 100%
  height 0
  padding-bottom 26.66%
  .swiper-img
    width 100%
</style>
