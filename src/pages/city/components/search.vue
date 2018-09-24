<template>

  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名字或者拼音">
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
</div>
</template>

<script>
export default {
  name: 'CitySearch'
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibels.styl'
.search
  height 0.72rem
  padding 0.1 rem
  background $bgColor
  .search-input
    box-sizing border-box
    width 100%
    height 0.62rem
    padding 0 0.1rem
    line-height 0.62rem
    text-align center
    border-radius 0.06rem
    color #666
</style>
