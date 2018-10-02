<template>

  <div class="header">
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
   城市选择</div>
</template>

<script>
export default {
  name: 'CityHeader'
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibels.styl'
.header
  position relative
  overflow hidden
  height $HeaderHeight
  line-height $HeaderHeight
  text-align center
  color #ffffff
  background $bgColor
  font-size 0.32rem
  .header-back
    position absolute
    top 0
    left 0
    width 0.64rem
    text-align center
    font-size 0.4rem
    color #ffffff
</style>
