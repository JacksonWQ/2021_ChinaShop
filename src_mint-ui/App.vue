
<template>
  <div id="app">
    <mt-button @click="showToast">Toast</mt-button><hr>
    <mt-button @click="showIndicator" >Indicator</mt-button>
    <hr>
    <h1>Load More</h1>
    <hr>
    <mt-loadmore :auto-fill="false" @top-status-change="handleTopChange" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="load_more">
      <ul>
        <li v-for="(item,index) in loadMoreData" :key="index">{{item}}</li>
      </ul>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">Loading...</span>
      </div>
    </mt-loadmore>
    <hr>
  </div>
</template>

<script>
import {Toast, Indicator} from "mint-ui"

export default {
  name: 'App',
  data(){
    return{
      loadMoreData: [1,2,3,4,5,6],
      allLoaded: false,
      topStatus: ""
    }
  },
  methods:{
    handleTopChange(status){
      this.topStatus = status
    },
    loadTop(){
      setTimeout(()=>{
        this.loadMoreData.unshift(this.loadMoreData[0]-1)
        this.$refs.load_more.onTopLoaded()
      },500)
    },
    loadBottom(){
      setTimeout(()=>{
        const len = this.loadMoreData.length - 1
        this.$refs.load_more.onBottomLoaded()
        this.loadMoreData.push(this.loadMoreData[len]+1)
      },500)
    },
    showToast(){
      Toast({
        message: "Toast",
        position: "bottom",
        duration: 1000
      })
    },
    showIndicator(){
      Indicator.open({
        text: "Loading",
        spinnerType: 'triple-bounce'
      })
      setTimeout(function (){
        Indicator.close()
      },3000)
    }
  }
}
</script>

<style>
#app{
  text-align: center;
  overflow: scroll;
}
ul{
  padding: 5px 30px;
}
ul > li{
  list-style: none;
  text-align: center;
  border-bottom: 1px solid black;
  margin: 10px auto;
}
</style>
