<template>
  <div id="home">
    <HeaderTop title="中国广东省深圳市龙华区富士康科技有限公司">
      <span class="header_search" slot="search">
        <i class="iconfont icon-sousuo_2"></i>
      </span>
      <span class="header_login" slot="login">登录|注册</span>
    </HeaderTop>
    <nav class="home_nav border-1px">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>甜品饮品</span>
            </div>
            <div class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>商超便利</span>
            </div>
            <div class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.jpg">
              </div>
              <span>美食</span>
            </div>
            <div class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.jpg">
              </div>
              <span>简餐</span>
            </div>
            <div class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/5.jpg">
              </div>
              <span>新店特惠</span>
            </div>
            <div class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/6.jpg">
              </div>
              <span>准时达</span>
            </div>
            <div class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/7.jpg">
              </div>
              <span>预订早餐</span>
            </div>
            <div class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/8.jpg">
              </div>
              <span>土豪推荐</span>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/9.jpg">
            </div>
            <span>XXXX</span>
          </div>
            <div class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/10.jpg">
              </div>
              <span>XXXX</span>
            </div>
            <div class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/11.jpg">
              </div>
              <span>XXXX</span>
            </div>
            <div class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/12.jpg">
              </div>
              <span>XXXX</span>
            </div>
            <div class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/13.jpg">
              </div>
              <span>XX</span>
            </div>
            <div class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/14.jpg">
              </div>
              <span>XXXX</span>
            </div>
            <div class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>XXXX</span>
            </div>
            <div class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>XXXX</span>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <div class="shop_top">
      <div class="shop_header border-1px">
        <i class="iconfont icon-xuanxiang"></i>
        <span>附近商家</span>
      </div>
    </div>
    <ShopList/>
  </div>
</template>

<script>
// import Vue from "vue";
import Swiper,{Pagination} from 'swiper'
import 'swiper/swiper.min.css';

Swiper.use([Pagination])

import HeaderTop from "../../components/HeaderTop/HeaderTop";
import ShopList from "../../components/ShopList/ShopList";

// import { InfiniteScroll } from 'mint-ui';
// Vue.use(InfiniteScroll);

export default {
  name: "Home",
  components:{
    HeaderTop,
    ShopList
  },
  mounted() {
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
#home
  .home_nav
    bottom-border-1px(#e4e4e4)
    margin-top 40px
    height 200px
    background-color #ffffff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            text-align center
            .food_container
              width 100%
              margin-bottom 8px
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              font-size 13px
              color #666

      .swiper-pagination
        position relative
        top -20px
        text-align center
        .swiper-pagination-bullet
          display inline-block
          background-color $green
          height 8px
          width 8px
          opacity 0.2
          border-radius 50%
          margin-left 5px
        .swiper-pagination-bullet-active
          opacity 0.7
  .shop_top
    width 100%
    height 40px
    background-color #ffffff
    margin-top 16px
    .shop_header
      bottom-border-1px(#e4e4e4)
      width 100%
      height 100%
      line-height 40px
      color #999999
      .iconfont
        font-size 16px
        margin-left 10px
      span
        font-size 16px
        margin-left 5px
</style>
