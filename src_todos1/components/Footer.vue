<template>
<div id="footer">
  <label>
    <input type="checkbox" v-model="isSelectAll">
    <span>Completed{{completedTodos}} / All{{todos.length}}</span>
  </label>
  <button v-show="completedTodos > 0" @click="delAllCompletedTodo">DEL All Completed</button>
</div>
</template>

<script>
export default {
  name: "Footer",
  props:{
    todos: Array,
    delCompletedTodo: Function,
    selectAllTodos: Function
  },
  computed:{
    completedTodos(){
      let i = 0
      this.todos.forEach(todo =>{
        if(todo.complete){
          i++
        }
      })
      return i
    },
    isSelectAll: {
      get(){
        return this.todos.length===this.completedTodos && this.completedTodos >0
      },
      set(value){
        this.selectAllTodos(value)
      }
    }
  },
  methods:{
    delAllCompletedTodo(){
      if(confirm("Are you sure to del all completed tasks?")){
        this.delCompletedTodo()
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
#footer{
  margin: 30px;
}
#footer button{
  font-size: 1em;
  float: right;
  padding: 5px;
  margin-top: 1px;
  background: #c91435;
  border-width: 1px;
  border-color: #2c3e50;
  border-radius: 2px;
  color: #ddd;
  cursor: pointer;
}
#footer button:hover {
  background: #950f27;
}
</style>
