<template>
  <div id="search">
    <HeaderTop title="搜索"/>
    <div class="container">
      <input type="text" placeholder="请输入商家或者美食名称">
      <button class="submit_btn">提交</button>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
export default {
  name: "Search",
  components:{
    HeaderTop
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #search
    position absolute
    width 100%
    .container
      height 60px
      width 100%
      background-color #ffffff
      position relative
      top 40px
      text-align center
      line-height 60px
      input
        width 70%
        background-color #e4e4e4
        height 30px
        padding 5px
        box-sizing border-box
        border-radius 2px
      .submit_btn
        margin-left 5px
        height 30px
        width 15%
        background-color $green
        color #ffffff
        border none
        border-radius 2px
        &:active
          background-color #027955
</style>
