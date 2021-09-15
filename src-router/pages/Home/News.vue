<template>
  <div>
    <ul>
      <li v-for="(m,index) in message" :key="index">
        <router-link :to="`/home/news/details/${m.id}`">{{ m.title }}</router-link>
        <button @click="pushShow(m.id)">Push</button>
        <button @click="replaceShow(m.id)">Replace</button>
      </li>
    </ul>
    <button @click="$router.back()">Back</button>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      message: []
    }
  },
  mounted() {
    setTimeout(() => {
      const message = [
        {id: 1, title: 'New-001'},
        {id: 3, title: 'New-003'},
        {id: 5, title: 'New-005'}]
      this.message = message
    }, 1000)
  },
  methods: {
    pushShow(id) {
      this.$router.push(`/home/news/details/${id}`)
    },
    replaceShow(id) {
      this.$router.replace(`/home/news/details/${id}`)
    }
  }
}
</script>

<style scoped>

</style>
