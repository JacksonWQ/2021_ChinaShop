
<template>
  <div id="app">
    <Search></Search>
    <UsersMain></UsersMain>
  </div>
</template>

<script>
import Search from "./components/Search"
import UsersMain from "./components/UsersMain";

export default {
  name: 'App',
  components: {
    Search,
    UsersMain
  }
}
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }
</style>
