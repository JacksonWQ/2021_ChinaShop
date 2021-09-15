<template>
  <header class="header">
    <slot name="search"></slot>
    <span class="title ellipsis">{{title}}</span>
    <slot name="login"></slot>
  </header>
</template>

<script>
export default {
  name: "HeaderTop",
  props:{
    title: String
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.header
  position fixed
  top 0
  left 0
  width 100%
  height 40px
  background-color $green
  text-align center
  line-height 40px
  color $bc
  display flex
  justify-content space-between
  z-index 200
  .header_search
    margin-left 10px
    .iconfont
      font-size 18px
  .title
    flex 1
    font-size 18px
    width 180px
    margin 0 50px
  .header_login
    font-size 14px
    margin-right 10px

</style>
