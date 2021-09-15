<template>
  <div id="order">
    <HeaderTop title="订单列表"/>
    <div class="container">
      <img src="./images/person.png">
      <p class="prompt">登录后查看外卖订单</p>
      <button class="login">立即登录</button>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
export default {
  name: "Order",
  components:{
    HeaderTop
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #order
    height 100%
    .container
      height 100%
      display flex
      flex-direction column
      align-items center
      justify-content flex-start
      img
        margin-top 50px
        width 300px
      .prompt
        color #999999
        margin-top 10px
        font-size 18px
      .login
        margin-top 15px
        font-size 16px
        padding 10px
        background-color $green
        color #ffffff
        border-radius 5px
        border none
        &:active
          background-color #027955
</style>
