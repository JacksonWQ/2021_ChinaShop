<template>
  <div id="app">
    <div class="title">
      <h1>Jackson</h1>
      <div class="routers">
        <ul>
          <li v-for="(item,index) in myRouters">
            <router-link :to="item.path" :key="index">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="view">
      <div class="container">
        <router-view msg="About111111"></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      myRouters: [{name: "Home", path: "/home"},
        {name: "Suggestion", path: "/suggestion"},
        {name: "About", path: "/about"}
      ]
    }
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

.view {
  background: #42b983;
  height: 700px;
  width: 100%;
  padding: 20px 20px 20px 220px;
  box-sizing: border-box;
}

h1 {
  color: #fff;
  height: 60px;
  border-bottom: 3px solid black;
  line-height: 60px;
}

.title {
  float: left;
  height: 700px;
  width: 200px;
  background: #4da4bf;
  text-align: center;
}

li {
  height: 50px;
  line-height: 50px;
  border-bottom: 2px solid antiquewhite;
  cursor: pointer;
}

li:hover {
  background: #377a8e;
}

li:active {
  color: white;
}
</style>
