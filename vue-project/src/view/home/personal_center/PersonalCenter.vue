<template>
  <div>
  <el-container>
    <public_back_top/>
    <el-header style="height: 40px;line-height: 40px">
      <public_head_nav/></el-header>
    <el-header class="centerHead" style="height: 80px;line-height: 80px">
      <public_search/></el-header>
    <el-container class="content">
      <el-aside width="300px">
        <PersonalCenterAside/></el-aside>
      <el-main>
        <router-view/></el-main>

    </el-container>
  </el-container>
<public_foot></public_foot>
  </div>
</template>


<script>
  import PersonalCenterAside from "./PersonalCenterAside";
  import public_head_nav from "../public/public_head_nav";
  import public_search from "../public/public_search";
  import public_back_top from "../public/public_back_top";
  import public_foot from "../public/public_foot";
    export default {
        name: "PersonalCenter",
      components:{
          public_head_nav,
          PersonalCenterAside,
        public_search,
        public_back_top,
        public_foot

      }
    }
</script>

<style scoped>

  .el-header, .el-footer {
    padding: 0;
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    /*background-color: #D3DCE6;*/
    color: #333;
    text-align: center;
    line-height: 200px;
    margin-top: 20px;
    margin-right: 30px;
  }
  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    /*text-align: center;*/
    padding: 0;
    /*line-height: 160px;*/
    margin-top: 20px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .content{
    padding: 0 50px;
  }
  .el-container{
    width: 1200px;
    height: 650px;
    margin: 0 auto;
    min-width: 1200px;

  }


</style>
