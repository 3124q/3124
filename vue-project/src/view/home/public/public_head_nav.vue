<template>
    <div id="public_head_nav">
      <div class="headnav">
        <ul>
          <li style="padding-right: 0 " v-if="!isLogin"><span>请</span><router-link to="" class="logBtn">登录</router-link></li>
          <li style="padding-left: 5px" v-if="!isLogin"><span>或</span><router-link to="" class="regBtn">免费注册</router-link></li>
          <li v-if="isLogin"><span>欢迎您,</span><router-link to=""  class="nowuser" >{{nowuser}}</router-link></li>
            <li><span>|</span><router-link to=""><i class="iconfont">&#xe70f;</i><span>消息</span></router-link>  </li>
          <li><span>|</span><router-link to="">
            <el-dropdown>
  <span class="el-dropdown-link">
    查看订单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>景点门票订单</el-dropdown-item>
                <el-dropdown-item>酒店预订订单</el-dropdown-item>
                <el-dropdown-item>旅行团订单</el-dropdown-item>

              </el-dropdown-menu>
            </el-dropdown>



          </router-link></li>
          <li><span>|</span><router-link to=""><span>我的账户</span></router-link></li>
          <li><span>|</span><router-link to=""><span>联系客服</span></router-link></li>
          <li><span>|</span><i class="iconfont" style="padding-right: 21px ;color: #00bcd4">&#xe72f;</i><i class="iconfont" style="color: #55a532">&#xe614;</i></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "public_head_nav",
        data(){
          return{
            isLogin:false,
            nowuser:'123456'
          }
        }
    }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  .headnav ul li a:hover{
    color:#00a3d2;
  }
  #public_head_nav{
    /*box-sizing: border-box;*/
    width: 100%;
    margin: 0 auto;
    height:42px;
    /*background-color: #55a532;*/
  }
  .headnav{
    width: 75%;
    height: 36px;
    float: right;
    /*background-color: #ee9900;*/
  }
  .headnav ul{
    list-style: none;
    padding: 0;
    width: 60%;
    height: 100%;
    float: right;
    margin: 0;
    font-size: 12px;
    font-weight: 400;
  }
  .headnav ul li{
    /*box-sizing: border-box;*/
    float: left;
    padding: 0 11px 0 0;
  }
  .headnav ul li .logBtn,.headnav ul li .regBtn,.headnav ul li .nowuser{
    color: #00a3d2;
  }
  .headnav ul li span{
    color: #666;
    margin-right: 5px;
    vertical-align: top;
  }
  .headnav ul li a{
    color: #666;
  }
  .el-dropdown{
    font-size: 12px;
  }
  .el-dropdown-link:hover {
    color:#00a3d2;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
