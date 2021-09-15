<template>
  <footer class="footer_guide border-1px">
    <div class="guide_item" @click="goTo('/home')" :class="{on: isCurrent('/home')}">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" @click="goTo('/search')" :class="{on: isCurrent('/search')}">
      <span class="item_icon">
        <i class="iconfont icon-sousuo_2"></i>
      </span>
      <span>搜索</span>
    </div>
    <div class="guide_item" @click="goTo('/order')" :class="{on: isCurrent('/order')}">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </div>
    <div class="guide_item" @click="goTo('/person')" :class="{on: isCurrent('/person')}">
      <span class="item_icon">
        <i class="iconfont icon-777"></i>
      </span>
      <span>我</span>
    </div>
  </footer>
</template>

<script>

export default {
  name: "FooterGuide",
  methods:{
    goTo(path){
      this.$route.path === path || this.$router.replace(path)
    },
    isCurrent(path){
      return this.$route.path === path
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    display flex
    top-border-1px(@bc)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #ffffff
    width 100%
    height 50px
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 3px
        .iconfont
          font-size 22px
</style>
