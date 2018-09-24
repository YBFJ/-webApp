<template>
<div class="header">
  <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
  <div class="header-input">
    <span class="iconfont">&#xe632;</span>
    输入城市/景点/游玩主题</div>
  <div class="header-right">{{this.city}}
    <span class="iconfont arrow-icon">&#xe64a;</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibels.styl'
.header
  display flex
  line-height 0.86 rem
  background $bgColor
  color #fff
  .header-left
    width 0.64 rem
    float left
    .back-icon
      text-align center
      font-size 0.4rem
  .header-input
    flex 1
    line-height 0.64 rem
    margin-top 0.12 rem
    margin-left 0.2 rem
    padding-left 0.2 rem
    background #fff
    border-radius 0.1 rem
    color #ccc
  .header-right
    width 1.24 rem
    float right
    text-align center
    .arrow-icon
      font-size 0.24 rem
      margin-left -0.04 rem
</style>
