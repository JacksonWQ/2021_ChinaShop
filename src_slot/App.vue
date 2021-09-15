
<template>
  <div id="app">
    <h1>My Task Today</h1>
    <div class="container">
      <Header :addTodo="addTodo"></Header>
      <Item :todos="todos" :delTodo="delTodo"></Item>
      <Footer>
        <input type="checkbox" v-model="isSelectAll" slot="selectAll">
        <span slot="size">Completed{{completedTodos}} / All{{todos.length}}</span>
        <button v-show="completedTodos > 0" @click="delAllCompletedTodo" slot="delete">DEL All Completed</button>
      </Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Item from "./components/Item";
import Footer from "./components/Footer";
import storageUtils from "./utils/storageUtils";

export default {
  name: 'App',
  components: {
    Header,
    Item,
    Footer
  },
  data(){
    return{
      todos: storageUtils.readTodos()
    }
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
    addTodo(newTodo){
      this.todos.unshift(newTodo)
    },
    delTodo(index){
      this.todos.splice(index,1)
    },
    delCompletedTodo(){
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    selectAllTodos(isSelectAll){
      this.todos.forEach(todo => {
        todo.complete = isSelectAll
      })
    },
    delAllCompletedTodo(){
      if(confirm("Are you sure to del all completed tasks?")){
        this.delCompletedTodo()
      }
    }
  },
  watch:{
    todos:{
      deep: true,
      handler: storageUtils.saveTodos
    }
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
#app{
  width: 800px;
  margin: 50px auto;
  box-shadow: 0px 0px 3px 0px #979797;
  border-radius: 5px;
  padding: 5px 0;
}
#app h1{
  text-align: center;
  margin: 5px;
}
#app .container{
  padding: 0px 30px;
}
</style>
