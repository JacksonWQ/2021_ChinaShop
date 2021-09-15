<template>
  <div id="item">
    <ItemList v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index"></ItemList>
  </div>
</template>

<script>
import ItemList from "./ItemList";
import {mapState} from 'vuex'
export default {
  name: "Item",
  components:{
    ItemList
  },
  computed:{
    ...mapState(['todos'])
  }
}
</script>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
}
#item{
  width: 100%;
  border: 1px solid #dddddd;
}
</style>
