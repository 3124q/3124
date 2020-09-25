<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xpersonal"> 后台管理</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>酒店管理</el-breadcrumb-item>
        <el-breadcrumb-item>酒店发布</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <div>
        <span class="el-title">酒店发布</span>
        <el-divider></el-divider>
        <el-row>
          <el-col class="pulish_info" :span="7">
            <el-card :body-style="{ padding: '0px' }" shadow="never">
              <img src="https://youimg1.c-ctrip.com/target/tg/878/257/036/6b6fb9e7db6543b282a314e5060d5fc3.jpg" class="image">
            </el-card>
          </el-col>
          <el-col class="pulish_detail" :span="16" :offset="1">
            <el-form ref="form" label-width="120px" size="mini" class="my_info info_from" label-position="left">
              <span>酒店信息</span>
              <el-divider></el-divider>

              <el-divider></el-divider>
              <el-button type="primary" plain style="width: 90%;">提交信息</el-button>
              <el-divider></el-divider>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "hotel_pulish"
  }
</script>

<style scoped>
  .el-header{
    margin: 10px;
  }
  .el-main{
    border-radius: 5px;
    border: 1px solid #bfbdbd;
    background-color: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .image {
    width: 100%;
    height: 170px;
    display: block;
  }
  .pulish_info{
    padding: 10px;
    border: 1px solid #B3C0D1;
    background-color: #eaeaea;
  }
  .pulish_detail{
    position: relative;
  }
  /* 地图容器必须设置宽和高属性 */
  .map {
    width: 90%;
    height: 50vh;
    margin: 0px auto;
  }
  /*三角*/
  .info_from{
    position: relative;
    padding:20px;
    background-color: #FFFFFF;
    border: 1px solid #B3C0D1;
    border-radius: 3px;
  }
  .info_from:before{
    box-sizing: content-box;
    width: 0px;
    height: 0px;
    position: absolute;
    top: 23px;;
    left: -16px;
    padding:0;
    border-right: 8px solid #FFFFFF;
    border-top:8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left:8px solid transparent;
    display: block;
    content:'';
    z-index: 12;
  }
  .info_from:after{
    box-sizing: content-box;
    width: 0px;
    height: 0px;
    position: absolute;
    top: 22px;;
    left: -18px;
    padding:0;
    border-right: 9px solid #B3C0D1;
    border-top:9px solid transparent;
    border-bottom:9px solid transparent;
    border-left:9px solid transparent;
    display: block;
    content:'';
    z-index:10
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
