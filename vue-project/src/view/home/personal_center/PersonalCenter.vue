<template>
  <el-container>
    <el-header style="height: 40px;line-height: 40px">Header</el-header>
    <el-header class="centerHead" style="height: 80px;line-height: 80px">Header</el-header>
    <el-container class="content">
      <el-aside width="300px"><PersonalCenterAside></PersonalCenterAside></el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
  import PersonalCenterAside from "./PersonalCenterAside";
    export default {
        name: "PersonalCenter",
      components:{
          PersonalCenterAside
      }
    }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
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
    /*padding: 0 30px;*/

  }


</style>
