<template>
  <div id="search">
    <h1>Search Github Users</h1>
    <input type="text" placeholder="enter the name you search" v-model="searchName">
    <button @click="search">Search</button>
  </div>
</template>

<script>
import PubSub from "pubsub-js"
export default {
  name: "Search",
  data(){
    return{
      searchName: ""
    }
  },
  methods:{
    search(){
      const searchName = this.searchName.trim()
      if (searchName){
        PubSub.publish("search", searchName)
      }
    }
  }
}
</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
  }
  #search{
    margin: 0;
    background: aquamarine;
    padding: 50px 60px 15px;
  }
  input{
    border-radius: 3px;
    border: 1px solid black;
  }
  button{
    padding: 0px 5px;
    border-radius: 2px;
  }
  h1{
    margin-bottom: 20px;
  }
</style>
