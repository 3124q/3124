<template>
  <div id="PersonalCenterAside">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          :unique-opened="true"
          :router=true
          style="border: none;">
          <el-menu-item index="/home">
            <template slot="title">
              <i class="iconfont el-ico-xzhuye icon_home"></i>
              <span>主页</span>
            </template>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>个人中心</span>
            </template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="/myimformation">个人资料</el-menu-item>
              <el-menu-item index="/pwdchange" >密码修改</el-menu-item>
              <el-menu-item index="1-3">安全设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-bicycle"></i>
              <span>我的旅途</span>
            </template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="2-1">我的行程</el-menu-item>
              <el-menu-item index="/mycollect">我的收藏</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-bank-card"></i>
              <span>我的账户</span>
            </template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="/mywallet">我的钱包</el-menu-item>
              <el-menu-item index="/recharge">充值中心</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-notebook-1"></i>
              <span>我的攻略</span>
            </template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="4-1">我的博客</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-shopping-cart-1"></i>
              <span>我的订单</span>
            </template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="/myhotel">我的酒店</el-menu-item>
              <el-menu-item index="/myticket">我的门票</el-menu-item>
              <el-menu-item index="/mygroup">我的旅行团</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-notebook-2"></i>
              <span>我的帮助</span>
            </template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="/helpercenter/1">用户须知</el-menu-item>
              <el-menu-item index="/helpercenter/2">意见投诉</el-menu-item>
              <el-menu-item index="/helpercenter/3">联系客服</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/mynews">
            <i class="el-icon-chat-line-round"></i>
            <span slot="title" style="font-size: 14px">我的消息</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "PersonalCenterAside"
  }
</script>

<style scoped>
  #PersonalCenterAside{
    border: 1px solid #ddd;
  }
  #PersonalCenterAside:hover{
    border: 1px solid #6d97e4bd;
  }
  .icon_home{
    margin-right: 30px;
  }
</style>
