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
  data: function() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      iconList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        },
        {
          id: '0003',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '上海必游'
        },
        {
          id: '0004',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
          desc: '游乐场'
        },
        {
          id: '0005',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/ea/01d081dacb03cc02.png',
          desc: '赏秋色'
        },
        {
          id: '0006',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1805/57/1e29afd06f881102.png',
          desc: '普陀山'
        },
        {
          id: '0007',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
          desc: '上海欢乐谷'
        },
        {
          id: '0008',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          desc: '动物园'
        },
        {
          id: '0009',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
          desc: '上海迪士尼'
        }
      ]
    };
  },
  computed: {
    pages: function() {
      const pages = [];
      this.iconList.forEach((item, index) => {
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
