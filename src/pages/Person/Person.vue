<template>
  <div id="person">
    <HeaderTop title="我的"/>
    <router-link class="login" to="/login">
      <i class="iconfont icon-geren2"></i>
      <div class="name_phone">
        <div class="name">登录 / 注册</div>
        <div class="phone">
          <i class="iconfont icon-shouji1"></i>
          <span class="phone_number">暂无绑定手机号</span>
        </div>
      </div>
      <i class="iconfont icon-youjiantou"></i>
    </router-link>
    <div class="wealth">
      <div class="balance">
        <p class="number">0.00<span class="unit">元</span></p>
        <p class="prompt">我的余额</p>
      </div>
      <div class="coupon">
        <p class="number">0<span class="unit">个</span></p>
        <p class="prompt">我的余额</p>
      </div>
      <div class="integral">
        <p class="number">0<span class="unit">个</span></p>
        <p class="prompt">我的积分</p>
      </div>
    </div>
    <div class="other_service">
      <div class="my_order">
        <i class="iconfont icon-dingdan1"></i>
        <span>我的订单</span>
        <i class="iconfont icon-youjiantou"></i>
      </div>
      <div class="integral_shop">
        <i class="iconfont icon-jifen"></i>
        <span>积分商城</span>
        <i class="iconfont icon-youjiantou"></i>
      </div>
      <div class="my_vip">
        <i class="iconfont icon-VIP"></i>
        <span>我的会员卡</span>
        <i class="iconfont icon-youjiantou"></i>
      </div>
      <div class="service_center">
        <i class="iconfont icon-fuwuzhongxin"></i>
        <span>服务中心</span>
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
export default {
  name: "Person",
  components:{
    HeaderTop
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
#person
  overflow hidden
  .login
    top-border-1px(#bbbbbb)
    background-color $green
    margin-top 40px
    padding-left 15px
    height 100px
    display flex
    justify-content flex-start
    align-items center
    .icon-geren2
      font-size 70px
      color #cccccc
    .name_phone
      flex 1
      margin-left 15px
      .name
        color #ffffff
        font-size 20px
      .phone
        color #ffffff
        margin-top 15px
        .icon-shouji1
          font-size 16px
        .phone_number
          font-size 16px

    .icon-youjiantou
      margin-right 15px
      color #ffffff
      font-size 20px
  .wealth
    width 100%
    display flex
    justify-content space-between
    text-align center
    height 80px
    .balance
      .number
        color $yellow
    .coupon
      .number
        color orangered
    .integral
      .number
        color #7ab625
    .balance,.coupon,.integral
      width 33%
      background-color #ffffff
      .number
        margin-top 10px
        font-size 30px
        font-weight bolder
        .unit
          font-size 16px
          color #999999
      .prompt
        margin-top 10px
        color #999999
  .other_service
    width 100%
    margin-top 15px
    .icon-dingdan1
      color #8bbe09
    .icon-jifen
      color orangered
    .icon-VIP
      color $yellow
    .icon-fuwuzhongxin
      color #02a774
    .my_order,.integral_shop,.my_vip,.service_center
      height 50px
      line-height 50px
      background-color #ffffff
      bottom-border-1px(#e4e4e4)
      .iconfont
        font-size 18px
        margin-left 15px
      span
        margin-left 5px
        font-size 18px
        color #666666
      .icon-youjiantou
        float right
        margin-right 15px
        color #666666
</style>
