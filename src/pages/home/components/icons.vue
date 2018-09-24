<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
      <div class="icon"
      v-for="item of page"
      :key="item.id">
        <div class="icon-img">
          <img  class="icon-img-content"
        :src="item.imgUrl">
  </div>
          <p class="icon-dec">{{item.desc}}</p>
      </div>
    </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data: function() {
    return {
      swiperOption: {
        autoplay: false
      }
    };
  },
  computed: {
    pages: function() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibels.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-pagination-bullet-active
  background red !important
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icons
  margin-top 0.1 rem
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 25%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 0.44 rem
      box-sizing border-box
      padding 0.1 rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-dec
      position absolute
      bottom 0
      left 0
      right 0
      height 0.44 rem
      line-height 0.44 rem
      text-align center
      color $darkTextColor
      ellipsis()
</style>
