<template>
  <div id="daohang">
    <el-header style="padding: 0">
      <!--顶部导航-->
      <div id="topBg">
          <el-col :span="12" :offset="12">
            <!--标头部分-->
            <div class="grid-content bg-purple">
                <span>请</span>
                <span><el-button type="text" to="">登录</el-button></span>
                <span>或</span>
                <span><el-button type="text" to="">免费注册</el-button></span>
                <span>|</span>
                <span>
                  <i class="el-icon-chat-line-round"></i>
                  <el-button type="text" to="">消息</el-button>
                </span>
                <span>|</span>
                <span>
                  <i class="el-icon-bicycle"></i>
                  <el-dropdown>
                    <span class="el-dropdown-link">
                      我的行程<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>景点预订</el-dropdown-item>
                      <el-dropdown-item>酒店预订</el-dropdown-item>
                      <el-dropdown-item>跟团旅游</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </span>
                <span>|</span>
                <i class="el-icon-coin"></i>
                <span>
                  <el-button type="text" to="">我的账号</el-button>
                </span>
                <span>|</span>
                <i class="el-icon-service"></i>
                <span><el-button type="text" to="">联系客服</el-button></span>
                <span>|</span>
            </div>
          </el-col>
        </div>
      <!--搜索框-->
      <div id="soso">
        <el-col :span="10" :offset="7">
          <el-input placeholder="请输入内容" v-model="input2" class="anniBtn">
            <el-button slot="append" icon="el-icon-search" id="btnB"></el-button>
          </el-input>
        </el-col>
      </div>
      <!--导航栏-->
      <el-row>
        <div id="bennerBox">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="rgba(90, 45, 5, 1)"
            text-color="#fff"
            active-text-color="#ffd04b"
            line-height="50px">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">景区</el-menu-item>
            <el-menu-item index="3">酒店</el-menu-item>
            <el-menu-item index="4">个人中心</el-menu-item>
          </el-menu>
        </div>
      </el-row>
    </el-header>
  </div>
</template>
<script>
  export default {
    name: "publicZ",
    data() {
      return {
        // 搜索框
        input1: '',
        input2: '',
        input3: '',
        select: '',
        // 导航栏
        activeIndex2: '1',
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  /*头部*/
  #topBg {
    width: 100%;
    height: 70px;
    color: #000;
    line-height: 70px;
    background-image: url("../../../assets/benner1.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  /*下拉菜单*/
  .el-dropdown-link {
    cursor: pointer;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  #soso {
    width: 99.7%;
    height: 80px;
    border: 2px solid #3b150c;
  }
  .anniBtn {
    border: 2px solid rgb(213, 163, 114);
    margin-top: 20px;
  }
  #btnB {
    width: 100px;
    background-color: #c99667;
    color: #fff;
  }
</style>
