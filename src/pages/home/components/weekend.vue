<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul >
      <li class="item border-bottom " v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper"><img class="item-img" :src="item.imgUrl" ></div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title: '上海必游TOP10',
          desc: '中西合璧，现代和传统各有各的精彩'
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_200x200_46052773.jpg',
          title: '上海杜莎夫人蜡像馆',
          desc: '上海杜莎夫人蜡像馆'
        },
        {
          id: '0003',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_200x200_46052773.jpg',
          title: '上海杜莎夫人蜡像馆',
          desc: '上海杜莎夫人蜡像馆'
        },
        {
          id: '0004',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_200x200_46052773.jpg',
          title: '上海杜莎夫人蜡像馆',
          desc: '上海杜莎夫人蜡像馆'
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend-title
  margin-top 0.2rem
  line-height 0.8rem
  background #eee
  text-indent 0.2rem
.item-img-wrapper
  height 0
  overflow hidden
  padding-bottom 33.9%
  .item-img
    width 100%
.item-info
  flex 1
  padding 0.1rem
  min-width 0
  .item-title
    line-height 0.54rem
    font-size 0.32rem
    ellipsis()
  .item-desc
    line-height 0.4rem
    color #ccc
    ellipsis()
</style>
