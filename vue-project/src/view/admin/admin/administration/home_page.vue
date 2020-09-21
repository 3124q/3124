<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xzhuye"> 系统主页</i>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <el-row class="web_info" :gutter="20">
        <el-col :span="8">
          <el-col class="my_info hover" :span="24">
            <div class="user_info">
              <img class="user_head_img" src="https://lin-xin.gitee.io/example/work/static/img/img.146655c9.jpg">
              <div class="user-info-cont">
                <h2 class="user-info-name">Admin</h2>
                <p class="user-info-role">超级管理员</p>
              </div>
            </div>
            <div class="user-info-list">
              上次登录时间：<span class="used_login_time">2020-9-20</span>
            </div>
            <div class="user-info-list">
              上次登录地址：<span class="used_login_add">117.28.132.83</span>
            </div>
          </el-col>
          <el-col class="others hover" :span="24">1-2</el-col>
        </el-col>
        <el-col :span="16">
          <el-col class="news" :span="24" style="padding: 0px;">
            <el-col class="news_box" style="padding-left: 0px;">
              <div class="hover">
                <i class="iconfont el-ico-xren" style="background-color: #0077aa;"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-col>
            <el-col class="news_box" style="padding: 0px;">
              <div class="hover">
                <i class="iconfont el-ico-xtongzhi" style="background-color: #0077aa;"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>系统通知</div>
                </div>
              </div>
            </el-col>
            <el-col class="news_box" style="padding-right: 0px;">
              <div class="hover">
                <i class="iconfont el-ico-xgouwu" style="background-color: #0077aa;"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>旅游成交单数</div>
                </div>
              </div>
            </el-col>
          </el-col>
          <el-col class="my_plan hover" :span="24">2-2</el-col>
        </el-col>
      </el-row>
      <el-row class="web_forms" :gutter="20">
        <el-col :span="24">
          <el-col :span="12" style="padding-left: 0px;">
            <el-col class="report_forms hover" :span="24">3-1</el-col>
          </el-col>
          <el-col :span="12" style="padding-right: 0px;">
            <el-col class="report_forms hover" :span="24">3-2</el-col>
          </el-col>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "home_page"
  }
</script>

<style scoped>
  .el-header {
    margin: 10px;
  }
  .web_info{
    height: 550px;
  }
  .my_info,.others{
    height: 250px;
    margin-bottom: 20px;
    background-color: #ffffff;
    border-radius: 5px;
    border: 1px solid #bfbdbd;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .user_info{
    display: flex;
    box-align: center;
    flex-align: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
  }
  .user_head_img{
    width: 120px;
    height: 120px;
    padding-left: 10px;
    border-radius: 50%;
  }
  .user-info-cont{
    padding-left: 50px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 14px;
    color: #999;
  }
  .user-info-list{
    float: left;
    font-size: 15px;
    color: #999;
    line-height: 25px;
  }
  .user-info-list span{
    margin-left: 100px;
  }
  .news{
    height: 100px;
    margin-bottom: 20px;
  }
  .news_box{
    width: 33.3%;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
  .news_box>div{
    height: 100%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #bfbdbd;
  }
  .news_box div i{
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
    border-radius: 5px;
  }
  .grid-cont-right{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 14px;
    color: #999;
  }
  .grid-num{
    font-size: 30px;
    font-weight: 700;
  }
  .my_plan{
    height: 400px;
    margin-bottom: 20px;
    background-color: #ffffff;
    border-radius: 5px;
    border: 1px solid #bfbdbd;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .hover:hover{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
  }
  .web_forms{
    height: 300px;
  }
  .report_forms{
    height: 260px;
    background-color: #ffffff;
    border-radius: 5px;
    border: 1px solid #bfbdbd;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  /*修改滚动条样式*/
  .el-main::-webkit-scrollbar{
    width:5px;
    height:10px;
    cursor: pointer;
    /**/
  }
  .el-main::-webkit-scrollbar-track{
    background: rgb(239, 239, 239);
    border-radius:2px;
  }
  .el-main::-webkit-scrollbar-thumb{
    background: #bfbfbf;
    border-radius:10px;
  }
  .el-main::-webkit-scrollbar-thumb:hover{
    background: #333;
  }
  .el-main::-webkit-scrollbar-corner{
    background: #179a16;
  }
</style>
