<template>
  <div id="app">
    <div class="box">
      <p>clicked: {{count}} times and count is {{ eventOrOdd }}</p>
      <button @click="add">+</button>
      <button @click="decrement">-</button>
      <button @click="addIfOdd">Add if odd</button>
      <button @click="addAsync">Add async</button>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
  methods: {
    ...mapActions(['add','decrement','addIfOdd','addAsync'])
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['eventOrOdd'])
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

.box {
  margin: 20px auto;
  width: 300px;
}

button {
  padding: 10px;
}

</style>
