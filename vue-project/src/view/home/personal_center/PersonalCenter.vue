<template>
  <el-container>
    <el-header style="height: 40px;line-height: 40px;background: #f8f8f8;">
      <public_head_nav/>
    </el-header>
    <el-header class="personal_head" height="61px">
      <el-row>
        <el-col :span="24">
          <el-col :span="4" style="position: relative;">
            <img class="logo" src="http://47.105.158.199/3124/16pic_5211757_s.png">
          </el-col>
          <el-col :span="20">
            <el-menu :default-active="activeIndex" mode="horizontal">
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="2">个人中心</el-menu-item>
              <el-menu-item index="3">景点索引</el-menu-item>
              <el-menu-item index="4">服务中心</el-menu-item>
            </el-menu>
          </el-col>
        </el-col>
      </el-row>
    </el-header>
    <el-container style="padding: 80px;padding-top: 20px;">
      <el-aside width="300px">
        <PersonalCenterAside/>
      </el-aside>
      <el-main class="personal_main">
        <router-view/>
      </el-main>
    </el-container>
    <el-footer style="padding: 0;">
      <public_foot></public_foot>
    </el-footer>
  </el-container>
</template>


<script>
  import PersonalCenterAside from "./PersonalCenterAside";
  import public_head_nav from "../public/public_head_nav";
  import public_search from "../public/public_search";
  import public_back_top from "../public/public_back_top";
  import public_foot from "../public/public_foot";
  export default {
    name: "PersonalCenter",
    data() {
      return {
        activeIndex: '1',
      };
    },
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
  .logo{
    margin: -45px;
    height: 140px;
    filter: drop-shadow(3px 0px 1px #fff);
  }
  .personal_head{
    border-bottom: 1px solid #e6e6e6;
  }
  .personal_main{
    margin-left: 30px;
    border: 1px solid #ddd;
  }
  .personal_main:hover{
    background-color: #f9f8f8;
    border: 1px solid #6d97e4bd;
  }
</style>
