<template>
  <div id="public_head">
    <public_head_nav></public_head_nav>
  </div>
</template>

<script>
  import public_head_nav from "./public_head_nav";
    export default {
        name: "public_head",
        components:{
          public_head_nav
        }

    }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  #public_head_nav{
    width: 1200px;
    height: 116px;
    margin: 0 auto;
  }
</style>
