<template>
  <div id="users_main">
    <h2 v-show="viewFlag">{{ viewFlag }}</h2>
    <div class="card" v-show="users.length>0">
      <div class="card-inner" v-for="(user,index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatarUrl">
        </a>
        <p>{{user.username}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PubSub from "pubsub-js"
import axios from "axios"

export default {
  name: "UsersMain",
  data() {
    return {
      viewFlag: "Please enter the name you want to find",
      users: []
    }
  },
  mounted() {
    PubSub.subscribe("search", (message, searchName) => {
      this.viewFlag = "Loading"
      this.users = []
      const url = `https://api.github.com/search/users?q=${searchName}`
      axios.get(url).then(value => {
        this.viewFlag = ""
        this.users = value.data.items.map(item => ({
          url: item.html_url,
          avatarUrl: item.avatar_url,
          username: item.login
        }))
      }).catch(error => {
          this.viewFlag = "Request Fail"
      })
    })
  }
}
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
.card{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-between;
}
.card-inner{
  width: 300px;
  margin: 10px;
  text-align: center;
  border: 1px solid black;
}
img{
  width: 200px;
}

</style>
