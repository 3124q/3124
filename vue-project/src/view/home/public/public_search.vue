<template>
    <div id="public_search">
      <div class="search_input">
        <input type="text">
      </div>
      <i class="iconfont">&#xe647;</i>
    </div>
</template>

<script>
    export default {
        name: "public_search"
    }
</script>

<style scoped>
    #public_search{
      width: 568px;
      height: 42px;
      position: relative;
      left: 300px ;
      top:30px;
      /*border: 1px solid black;*/
    }
  .search_input{
    width: 480px;
    height: 42px;
    padding-left: 16px;
    border: 2px solid rgb(50, 162, 165);
    border-radius: 5px 0 0 5px;
    /*display: inline-block;*/

  }
    .search_input input{
      width: 100%;
      outline-width: 0px ;

      /*display: inline-block;*/
      height: 20px;
      border: none;
      margin-top: -40px;
      font-size: 14px;
      color: #9e9e9e;
      vertical-align: middle;
    }
  i{
    display: inline-block;
    font-size: 16px;
    width: 68px;
    height: 46px;
    border-radius: 0 5px 5px 0;
    font-size: 20px;
    color: #ffffff;
    position: absolute;
    text-align: center;
    line-height: 46px;
    left: 500px;
    top: 0;
    background: linear-gradient(116deg,#092f2f 5%,#00c5c3 51%,#9effa4 100%);
  }
</style>
