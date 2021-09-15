
<template>
  <div id="app">
    <h1>My Task</h1>
    <div class="container">
      <Header></Header>
      <Item></Item>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Item from "./components/Item";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Item,
    Footer
  },
  /*watch:{
    todos:{
      deep: true,
      handler: storageUtils.saveTodos
    }
  }*/
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
