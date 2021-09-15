<template>
  <div id="item">
    <ItemList v-for="(todo,index) in todos" :key="index" :delTodo="delTodo" :todo="todo" :index="index"></ItemList>
  </div>
</template>

<script>
import ItemList from "./ItemList";
export default {
  name: "Item",
  props:{
    todos:{
      type: Array,
      required: true
    },
    delTodo: {
      type: Function,
      required: true
    }
  },
  components:{
    ItemList
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
