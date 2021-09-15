<template>
  <div id="login_container">
    <div class="login_header">中国外卖</div>
    <form class="input_box">
      <div class="input_item">
        <span class="message_login input_item_active">短信登录</span>
        <span class="password_login">密码登录</span>
      </div>
      <div class="message_login_box on">
        <section class="phone_number">
          <input  type="number" maxlength="11" placeholder="手机号">
          <button class="get_verification_code">获取验证码</button>
        </section>
        <input class="verification_code" type="text" maxlength="7" placeholder="验证码">
        <p class="protocol">温馨提示：未注册中国外卖账号的手机号，登录时将自动注册，且代表已同意<a>《用户服务协议》</a></p>
      </div>
      <div class="password_login_box">
        <input class="account" type="text" placeholder="手机/邮箱/用户名">
        <section class="password">
          <input type="password" placeholder="密码">
          <div class="switch" :class={on:isShow,off:!isShow} @click="isShow=!isShow">
            <span class="white_bc"></span>
            <div class="switch_circle"></div>
          </div>
        </section>
        <section class="verification">
          <input type="text" maxlength="7" placeholder="验证码">
          <div class="verification_img">
            <img src="./Images/captcha.svg">
          </div>
        </section>
      </div>
      <button class="login_btn">登 录</button>
    </form>
    <a class="ourInfo" href="javascript:">关于我们</a>
    <span class="router_back" @click="$router.back()">
      <i class="iconfont icon-zuojiantou"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      isShow : false
    }
  }
}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
#login_container
  width 100%
  height 100%
  overflow hidden
  text-align center
  .login_header
    text-align center
    font-size 40px
    color $green
    font-weight bolder
    margin 80px 0px 30px
  .input_box
    text-align center
    .input_item
      margin-bottom 16px
      .message_login, .password_login
        padding 2px 0
      .message_login
        margin-right 30px
        &.input_item_active
          color $green
          border-bottom 2px solid $green
    .message_login_box
      width 100%
      margin-bottom 20px
      .phone_number, .verification_code
        box-sizing border-box
        height 40px
        width 80%
        margin 0 auto 10px
        position relative
        &.phone_number
          input
            box-sizing border-box
            height 100%
            width 100%
            font-size 16px
            padding-left 10px
          .get_verification_code
            border none
            background #ffffff
            color #aaaaaa
            position absolute
            top 50%
            right 10px
            transform translateY(-50%)
            font-size 16px
        &.verification_code
          box-sizing border-box
          font-size 16px
          padding-left 10px
      .protocol
        width 80%
        margin 0 auto
        font-size 13px
        line-height 15px
        color #999999
        a
          color $green

    .password_login_box
      width 100%
      display none
      input
        box-sizing border-box
        height 40px
        width 80%
        margin 0 auto 10px
        position relative
        padding-left 10px
      .password
        box-sizing border-box
        position relative
        width 80%
        height 40px
        margin 0 auto 10px
        >input
          width 100%
        .switch
          width 36px
          height 14px
          background-color $green
          position absolute
          top 50%
          right 10px
          border-radius 7px
          transform translateY(-50%)
          box-shadow 0 0 1px 1px #e4e4e4
          overflow hidden
          .white_bc
            display inline-block
            width 36px
            height 20px
            background-color #ffffff
            position relative
            top -2px
            transition 0.5s
          .switch_circle
            width 16px
            height 16px
            border-radius 50%
            background-color #ffffff
            position absolute
            top 50%
            left 0px
            transform translateY(-50%)
            box-shadow 0 0 1px 1px #e4e4e4
            transition 0.5s
          &.on
            .white_bc
              left 25px
            .switch_circle
              left 20px
          &.off
            .white_bc
              left 0px
            .switch_circle
              left 0px

      .verification
        position relative
        height 40px
        width 80%
        margin 0 auto 20px
        input
          width 100%
        .verification_img
          height 36px
          position absolute
          top 50%
          transform translateY(-50%)
          right 5px
          img
            height 100%
    .login_btn
      display block
      width 80%
      height 36px
      margin 0 auto 6px
      box-sizing border-box
      border-radius 5px
      border none
      background-color $green
      color #ffffff
      font-size 18px
      &:active
        background-color #047954
  .ourInfo
    color #999999
    font-size 14px
  .router_back
    position absolute
    top 15px
    left 15px
</style>
