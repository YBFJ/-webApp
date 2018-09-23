<template>
<div class="wrapper">
   <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id"><img class="swiper-img" :src="item.imgUrl" ></swiper-slide>
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
  data: function() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1809/3b/7b654a05c9b61e02.jpg_750x200_eb04c4da.jpg'
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1809/9b/8f79dbd1e0941302.jpg_750x200_55829659.jpg'
        }
      ]
    };
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
