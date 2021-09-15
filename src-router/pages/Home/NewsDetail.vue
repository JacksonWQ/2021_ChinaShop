<template>
  <ul>
    <li>id: {{ $route.params.id }}</li>
    <li>title:{{ detail.title }}</li>
    <li>content:{{ detail.content }}</li>
  </ul>
</template>

<script>
const NewsDetail = [
  {id: 1, title: 'Message001', content: 'message content00111....'},
  {id: 3, title: 'Message003', content: 'message content00222....'},
  {id: 5, title: 'Message005', content: 'message content00333....'}
]
export default {
  name: "NewsDetail",
  data() {
    return {
      detail: []
    }
  },
  mounted() {
    const id =this.$route.params.id
    this.detail = NewsDetail.find(d => d.id === id*1)
  },

  watch:{
    $route:function (){
      console.log(this.$router)
      const id =this.$route.params.id
      this.detail = NewsDetail.find(d => d.id === id*1)
    }
  }
}
</script>

<style scoped>

</style>
