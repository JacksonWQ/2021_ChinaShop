<template>
<div id="footer">
  <label>
    <slot name="selectAll"></slot>
    <slot name="size"></slot>
  </label>
  <slot name="delete"></slot>

</div>
</template>

<script>
export default {
  name: "Footer",
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
