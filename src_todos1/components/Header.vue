<template>
  <div id="header">
    <input type="text" v-model="inputTodo" @keyup.enter="add" placeholder='Please enter the task you will conduct today and press "Enter" to confirm'>
  </div>
</template>

<script>
export default {
  name: "Header",
  props:{
    addTodo:{
      type: Function,
      required: true
    }
  },
  data(){
    return{
      inputTodo: ""
    }
  },
  methods:{
    add(){
      const myInput = this.inputTodo.trim()
      if(myInput){
        const myNewTodo ={title: myInput,complete: false}
        this.addTodo(myNewTodo)
        this.inputTodo = ""
      }else{
        alert("Please enter correct ward again")
      }
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
  #header{
    width: 100%;
  }
  input{
    display: block;
    width: 100%;
    border-radius: 3px;
    padding: 5px;
    border: 1px solid #aaa;
    margin-bottom: 3px;
  }
  #header input:focus{
    outline: none;
    box-shadow: 0 0 5px 0 #5abfd7;
    border-color: #4da4bf;
  }
</style>
