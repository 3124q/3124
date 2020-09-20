<template>
  <el-container style="height: 100vh">
    <el-header>
      <el-col :span="4">
        <h2 id="logo"> 电子旅游后台 </h2>
      </el-col>
      <el-col :span="16">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="rgb(55, 58, 62)"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">主页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">后台管理</template>
            <el-menu-item index="2-1">用户管理</el-menu-item>
            <el-menu-item index="2-2">文档管理</el-menu-item>
            <el-menu-item index="2-3">其他管理</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">个人中心</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4" style="background-color: rgb(55, 58, 62)">
        <el-dropdown>
          <el-button type="text">
            管理员：Admin<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>首页</el-dropdown-item>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>基本信息</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item><router-link to="/Login">退出登录</router-link></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-header>
    <el-container>
      <el-aside width="228px">
        <el-menu style="height: 100%;"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">主页</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">后台管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/User">
                <el-menu-item index="2-1">用户管理</el-menu-item>
              </router-link>
              <router-link to="/File">
                <el-menu-item index="2-2">文档管理</el-menu-item>
              </router-link>
              <el-menu-item index="2-3">其他管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">设置</span>
            </template>
            <el-menu-item-group>
              <template slot="title">个人设置</template>
              <el-menu-item index="3-1">设置密保</el-menu-item>
              <el-menu-item index="3-2">修改密码</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">系统设置</template>
              <el-menu-item index="3-3">网站设置</el-menu-item>
              <el-menu-item index="3-4">邮件服务</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer>
          <div class="info">Beta: 1.0</div>
          <div class="info">Technical Support: XXX</div>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Admin',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleClick () {
      alert('button click')
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  a{
    color: #a3aab1;
    text-decoration:none;
  }
  .el-container{
    height: 100%;
  }
  .el-header, .el-footer {
    color: #333;
    padding: 0px;
    line-height: 60px;
    text-align: center;
    background-color: #B3C0D1;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  #logo{
    margin:0px;
    color: #c7c6c6;
    background-color: rgb(55, 58, 62);
  }
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .info {
    width: 100%;
    height: 30%;
    line-height: 45px;
    color: gainsboro;
    text-align: center;
  }
</style>
