<template>
  <ul class="shop_list">
    <li class="shop">
      <div class="shop_img">
        <img src="../../components/ShopList/images/shop/2.jpg">
      </div>
      <div class="shop_info">
        <section class="first_line">
          <span class="shop_flag">品牌</span>
          <span class="shop_title ellipsis">锄禾日当午</span>
          <ul>
            <li>保</li>
            <li>准</li>
            <li>票</li>
          </ul>
        </section>
        <section class="second_line">
          <div class="star star-24">
            <span class="star_item on"></span>
            <span class="star_item on"></span>
            <span class="star_item on"></span>
            <span class="star_item half"></span>
            <span class="star_item off"></span>
          </div>
          <span class="star_rating">3.5</span>
          <span class="mouth_sale">月售99单</span>
          <span class="delivery_style delivery_right">准时达</span>
          <span class="delivery_style delivery_left">XX专送</span>
        </section>
        <section class="third_line">
          <span class="min_sale">￥20</span>
          <span class="and">/</span>
          <span class="delivery_sale">配送费约￥5</span>
        </section>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ShopList"
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.shop_list
  background-color #ffffff
  .shop
    bottom-border-1px(@bc)
    width 100%
    height 120px
    display flex
    justify-content flex-start
    align-items center
    .shop_img
      width 120px
      margin-left 5px
      flex 0
      img
        width  100px
    .shop_info
      margin-left 8px
      flex 1
      height 80%
      display flex
      flex-direction column
      justify-content space-between
      .first_line
        .shop_flag
          font-size 14px
          padding 1px
          font-weight bolder
          border-radius 2px
          background-color #e2c240
        .shop_title
          display inline-block
          font-size 20px
          font-weight bolder
          width 100px
          margin-left 3px
        ul
          display inline-block
          font-size 14px
          text-align right
          float right
          margin-right 10px
          line-height 25px
          li
            display inline-block
      .second_line
        .star
          display inline-block
          font-size 0px
          .star_item
            display inline-block
            background-repeat no-repeat
        .star-24
          .star_item
            box-sizing border-box
            width 10px
            height 10px
            background-size 10px 10px
            margin-right 2px
            &:last-child
              margin-right 0px
            &.on
              bg-image('./images/stars/star24_on')
            &.half
              bg-image('./images/stars/star24_half')
            &.off
                bg-image('./images/stars/star24_off')
        .star-36
          .star_item
            box-sizing border-box
            width 15px
            height 15px
            background-size 15px 15px
            margin-right 3px
            &:last-child
              margin-right 0px
            &.on
              bg-image('./images/stars/star36_on')
            &.half
              bg-image('./images/stars/star36_half')
            &.off
              bg-image('./images/stars/star36_off')
        .star-48
          .star_item
            box-sizing border-box
            width 20px
            height 20px
            background-size 20px 20px
            margin-right 6px
            &:last-child
              margin-right 0px
            &.on
              bg-image('./images/stars/star48_on')
            &.half
              bg-image('./images/stars/star48_half')
            &.off
              bg-image('./images/stars/star48_off')
        .star_rating
          color $yellow
          font-size 15px
        .mouth_sale
          color #999999
          font-size 12px
        .delivery_style
          float right
          margin-right 6px
          font-size 12px
          border-radius 2px
          padding 3px
          &.delivery_left
            background-color $green
            color #ffffff
          &.delivery_right
            border 1px solid #999999
            padding 2px
            color $green
      .third_line
        color #999999
        font-size 12px
        .and
          margin 0 2px

</style>
