<template>
<div id="home">
  <h1>Home</h1>
  <div class="router">
    <router-link to="/home/news" class="r-link">News</router-link>
    <router-link to="/home/love" class="r-link">Love</router-link>
    <router-link to="/home/me" class="r-link">Me</router-link>
  </div>
  <div>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.router{
  height: 40px;
  line-height: 40px;
  border-bottom:2px solid white;
  text-align: center;
}

.r-link{
  padding: 0 50px;
}
</style>
