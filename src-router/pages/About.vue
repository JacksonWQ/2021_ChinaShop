<template>
  <div>
    <h1>{{msg}}</h1>
    <p>Hello World</p>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    msg: String
  }
}
</script>

<style scoped>
p{
  font-size: 100px;
}
</style>
