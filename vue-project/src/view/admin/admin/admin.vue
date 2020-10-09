<template>
  <el-container style="height: 100vh">
    <el-header>
      <el-col :span="4" class="logo_box">
        <i class="icon el-icon-s-fold" v-on:click="toggleMenu()" style="margin: 20px"></i>
        <h2 id="logo" v-on:click="adminlogout()"> 电子旅游后台 </h2>
      </el-col>
      <el-col :span="15">
        <el-menu
          mode="horizontal"
          text-color="#fff"
          active-text-color="#ffd04b"
          background-color="rgb(55, 58, 62)"
          :default-active="activeIndex2">
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
      <el-col :span="1" style="background-color: rgb(55, 58, 62)">
        <el-popover
          title="标题"
          width="80"
          trigger="hover"
          placement="top-start"
          content="您有10条未读消息">
          <el-button slot="reference" class="hover-box">
            <el-badge :value="10" class="item">
              <i class="icon el-icon-bell"></i>
            </el-badge>
          </el-button>
        </el-popover>
      </el-col>
      <el-col :span="4" style="background-color: rgb(55, 58, 62)">
        <el-dropdown>
          <el-button type="text" >
            管理员：{{nowuser.adminName}}<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>系统首页</el-dropdown-item>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>基本信息</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="LogoutdialogVisible = true"><span>退出登录</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-header>
    <el-container>
      <el-aside width="227px">
        <el-menu style="height: 100%;border: none;"
          :collapse="isCollapse"
          default-active="2"
          text-color="#fff"
          background-color="#545c64"
          active-text-color="#ffd04b">
          <router-link to="/admin/home">
            <el-menu-item index="1" class="one_bar">
              <i class="iconfont el-ico-xzhuye"></i>
              <span slot="title">系统主页</span>
            </el-menu-item>
          </router-link>
<!--                <el-submenu v-for="(one_bar,i) in menuData" :key="i" index="i"   class="one_bar" v-if="one_bar.children.length!=0">-->
<!--                  <template slot="tittle">-->
<!--                    <i class="iconfont el-ico-xguanli"></i>&ndash;&gt;-->
<!--                    <span slot="title">{{one_bar.label}}</span>-->
<!--                  </template>-->
<!--                </el-submenu>-->
          <el-submenu v-for="(one_bar,i) in menuData" :key="i" :index="one_bar.powerName" class="one_bar" v-if="one_bar.lever==1">
            <template slot="title">
              <i v-bind:class="one_bar.icon"></i>
              <span slot="title">{{ one_bar.powerName }}</span>
            </template>
            <el-menu-item-group v-for="(two_bar,j) in menuData" :key="j" v-if="one_bar.powerID==two_bar.belongPower&&two_bar.lever==2">
              <template slot="title">
                {{ two_bar.powerName }}
              </template>
              <router-link :to="forth_bar.menuURL" v-for="(forth_bar,l) in menuData" :key="l" v-if="two_bar.powerID==forth_bar.belongPower">
                <el-menu-item :index="forth_bar.powerName">{{ forth_bar.powerName }}</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <router-link  v-for="(five_bar,l) in menuData" :to="five_bar.menuURL" :key="l" v-if="one_bar.powerID==five_bar.belongPower&&five_bar.lever==3">
              <el-menu-item :index="five_bar.powerName">{{ five_bar.powerName }}</el-menu-item>
            </router-link>
          </el-submenu>
          <router-link :to="six_bar.menuURL" v-for="(six_bar,i) in menuData" :key="i" :index="six_bar.powerName" class="one_bar" v-if="six_bar.belongPower==0&&six_bar.lever==3">
            <el-menu-item >
              <i v-bind:class="six_bar.icon"></i>
              <span slot="title">{{six_bar.powerName}}</span>
            </el-menu-item>
          </router-link>

<!--          <el-submenu index="2" class="one_bar">-->
<!--            <template slot="title">-->
<!--              <i class="iconfont el-ico-xguanli"></i>-->
<!--              <span slot="title">后台管理</span>-->
<!--            </template>-->
<!--            <el-menu-item-group>-->
<!--              <template slot="title">用户管理</template>-->
<!--              <router-link to="/admin/userAdministration">-->
<!--                <el-menu-item index="2-1">用户列表</el-menu-item>-->
<!--              </router-link>-->
<!--              <el-menu-item index="2-2">博客管理</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--            <el-menu-item-group>-->
<!--              <template slot="title">商家管理</template>-->
<!--              <router-link to="/admin/business_examine">-->
<!--                <el-menu-item index="2-3">商家审核</el-menu-item>-->
<!--              </router-link>-->
<!--              <router-link to="/admin/businessAdministration">-->
<!--                <el-menu-item index="2-4">商家列表</el-menu-item>-->
<!--              </router-link>-->
<!--            </el-menu-item-group>-->
<!--            <el-menu-item-group>-->
<!--              <template slot="title">管理员管理</template>-->
<!--              <router-link to="/admin/newAdministrator">-->
<!--                <el-menu-item index="2-5">新增管理员</el-menu-item>-->
<!--              </router-link>-->
<!--              <router-link to="/admin/administrators">-->
<!--                <el-menu-item index="2-6">管理员列表</el-menu-item>-->
<!--              </router-link>-->
<!--              <router-link to="/admin/authority">-->
<!--                <el-menu-item index="2-7">管理员权限</el-menu-item>-->
<!--              </router-link>-->
<!--            </el-menu-item-group>-->
<!--          </el-submenu>-->
<!--          <el-submenu index="3" class="one_bar">-->
<!--            <template slot="title">-->
<!--              <i class="iconfont el-ico-xhuodong"></i>-->
<!--              <span slot="title">推广活动</span>-->
<!--            </template>-->
<!--            <el-menu-item-group>-->
<!--              <template slot="title">平台活动</template>-->
<!--              <el-menu-item index="3-1">活动发布</el-menu-item>-->
<!--              <el-menu-item index="3-2">活动管理</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--            <el-menu-item-group>-->
<!--              <template slot="title">商家活动</template>-->
<!--              <el-menu-item index="3-3">活动审核</el-menu-item>-->
<!--              <el-menu-item index="3-4">活动管理</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--            <el-menu-item-group>-->
<!--              <template slot="title">宣传推广</template>-->
<!--              <el-menu-item index="3-5">广告推广</el-menu-item>-->
<!--              <el-menu-item index="3-6">广告管理</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--          </el-submenu>-->
<!--          <el-submenu index="4" class="one_bar">-->
<!--            <template slot="title">-->
<!--              <i class="iconfont el-ico-xpersonal"></i>-->
<!--              <span slot="title">账户管理</span>-->
<!--            </template>-->
<!--            <router-link to="/admin/personalCenter">-->
<!--              <el-menu-item index="4-1">基本信息</el-menu-item>-->
<!--            </router-link>-->
<!--            <router-link to="/admin/safetyCenter">-->
<!--              <el-menu-item index="4-2">安全中心</el-menu-item>-->
<!--            </router-link>-->
<!--          </el-submenu>-->
<!--          <el-submenu index="5" class="one_bar">-->
<!--            <template slot="title">-->
<!--              <i class="iconfont el-ico-xtongzhi"></i>-->
<!--              <span slot="title">通知</span>-->
<!--            </template>-->
<!--            <router-link to="/admin/notice/1">-->
<!--              <el-menu-item index="5-1">已读消息</el-menu-item>-->
<!--            </router-link>-->
<!--            <router-link to="/admin/notice/2">-->
<!--              <el-menu-item index="5-2">未读消息</el-menu-item>-->
<!--            </router-link>-->
<!--            <router-link to="/admin/notice/3">-->
<!--              <el-menu-item index="5-2">消息回收站</el-menu-item>-->
<!--            </router-link>-->

<!--          </el-submenu>-->
<!--          <el-menu-item index="6" class="one_bar">-->
<!--            <i class="iconfont el-ico-xtubiao"></i>-->
<!--            <span slot="title">报表统计</span>-->
<!--          </el-menu-item>-->
<!--          <el-submenu index="7" class="one_bar">-->
<!--            <template slot="title">-->
<!--              <i class="iconfont el-ico-xjingdian"></i>-->
<!--              <span slot="title">景点管理</span>-->
<!--            </template>-->
<!--            <router-link to="/admin/famously_publish">-->
<!--              <el-menu-item index="7-1">景点发布</el-menu-item>-->
<!--            </router-link>-->
<!--            <router-link to="/admin/famouslyAdministration">-->
<!--              <el-menu-item index="7-2">景点管理</el-menu-item>-->
<!--            </router-link>-->
<!--            <el-menu-item index="7-3">景点活动</el-menu-item>-->
<!--            <router-link to="/admin/famouslyCommnet">-->
<!--              <el-menu-item index="7-4">景点评论</el-menu-item>-->
<!--            </router-link>-->
<!--            <el-menu-item index="7-5">官方博客</el-menu-item>-->
<!--            <el-menu-item index="7-6">景点客服</el-menu-item>-->
<!--            <el-menu-item index="7-7">景点旅游团</el-menu-item>-->
<!--            <router-link to="/admin/famouslyPropaganda">-->
<!--              <el-menu-item index="7-8">宣传广告</el-menu-item>-->
<!--            </router-link>-->
<!--          </el-submenu>-->
<!--          <el-submenu index="8" class="one_bar">-->
<!--            <template slot="title">-->
<!--              <i class="iconfont el-ico-xjiudian-copy"></i>-->
<!--              <span slot="title">酒店管理</span>-->
<!--            </template>-->
<!--            <router-link to="/admin/hotel_pulish">-->
<!--              <el-menu-item index="8-1">酒店发布</el-menu-item>-->
<!--            </router-link>-->
<!--            <el-menu-item index="8-2">酒店管理</el-menu-item>-->
<!--            <router-link to="/admin/roomPulish">-->
<!--              <el-menu-item index="8-3">房间发布</el-menu-item>-->
<!--            </router-link>-->
<!--            <router-link to="/admin/roomAdministration">-->
<!--              <el-menu-item index="8-4">房间管理</el-menu-item>-->
<!--            </router-link>-->
<!--            <el-menu-item index="8-5">酒店活动</el-menu-item>-->
<!--            <router-link to="/admin/hotelOomment">-->
<!--              <el-menu-item index="8-6">酒店评价</el-menu-item>-->
<!--            </router-link>-->
<!--            <el-menu-item index="8-7">酒店客服</el-menu-item>-->
<!--            <el-menu-item index="8-8">宣传广告</el-menu-item>-->
<!--          </el-submenu>-->
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view/>
        </el-main>
        <el-dialog
          title="提示"
          :visible.sync="LogoutdialogVisible"
          width="30%"
          :before-close="handleClose">
          <span>是否退出登录？</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="LogoutdialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="adminlogout">确 定</el-button>
           </span>
        </el-dialog>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Admin',
  data () {
    return {
      menuData: [],
      LogoutdialogVisible: false,
      isCollapse: false,
      activeIndex: '1',
      activeIndex2: '1',
      nowuser: ''
    }
  },
  created() {
    var that=this;
    this.$axios.get("admin/getnowuser").then(res=>{
      if (res.data.code=="1000"){
        that.nowuser=res.data.data[0];
        console.log(res.data);
        that.menuData=res.data.menu;

      }else{
        alert(res.data.msg);
        this.$router.replace({path: '/admin/login'})
      }
    })
  },
  methods: {
    toggleMenu(){
      if(this._data.isCollapse){
        this._data.isCollapse=false
        document.getElementsByClassName("el-aside")[0].style.width = '227px'
      }else{
        this._data.isCollapse=true
        document.getElementsByClassName("el-aside")[0].style.width = '66px'
      }
    },
    adminlogout(){
      var that=this;
      this.$axios.get("admin/adminlogout").then(res=>{
        this.$router.replace({path:res.data.msg})
      })
    }
  }
}
</script>

<style scoped>
  a{
    color: #a3aab1;
    text-decoration:none;
  }
  .icon{
    color: #fff;
    font-size: 130%;
    cursor: pointer;
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
    padding-top: 0px;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  .el-main::-webkit-scrollbar {
    display: none;
  }
  #logo{
    margin:0px;
  }
  .hover-box{
    border: none;
    background-color: rgb(55, 58, 62);
  }
  .logo_box{
    display: flex;
    color: #ffffff;
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
  .one_bar{
    text-align: left;
  }
  /*修改滚动条样式*/
  .el-aside{
    transition: 1s;
    background-color: rgb(84, 92, 100);
    border: none;
  }
  .el-aside::-webkit-scrollbar{
    width:5px;
    height:10px;
    cursor: pointer;
    /**/
  }
  .el-aside::-webkit-scrollbar-track{
    background: rgb(239, 239, 239);
    border-radius:2px;
  }
  .el-aside::-webkit-scrollbar-thumb{
    background: #bfbfbf;
    border-radius:10px;
  }
  .el-aside::-webkit-scrollbar-thumb:hover{
    background: #333;
  }
  .el-aside::-webkit-scrollbar-corner{
    background: #179a16;
  }
</style>
