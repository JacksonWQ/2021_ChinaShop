<template>
    <li :style="{background: bgColor}" @mouseenter="handleShow(true)" @mouseleave="handleShow(false)">
      <label>
        <input type="checkbox" v-model="todo.complete">
        <span>{{todo.title}}</span>
      </label>
      <button v-show="isShow" @click="del">Delete</button>
    </li>
</template>

<script>
export default {
  name: "ItemList",
  props:["todo","delTodo","index"],
  data(){
    return{
      isShow: false,
      bgColor: "#fff"
    }
  },
  methods:{
    del(){
      this.delTodo(this.index)
    },
    handleShow(bool){
        this.isShow = bool
        this.bgColor = bool ? "#ddd" : "#fff"
    }
  }
}
</script>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
li{
  list-style: none;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  height: 36px;
  line-height: 36px;
}
button{
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
button:hover{
  background: #950f27;
}
li:last-child {
  border-bottom: none;
}
</style>
