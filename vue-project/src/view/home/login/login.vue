<template>
  <div>
    <el-row id="enroll_left" hidden-sm-and-down>
      <div id="left_top">
        <el-row :gutter="10" id="txt_box">
          <el-col :xs="8" :sm="2" :md="2" :lg="6" class="hidden-xs-only txt">logo</el-col>
          <el-col :xs="8" :sm="2" :md="2" :lg="6" class="txt">首页</el-col>
          <el-col :xs="8" :sm="2" :md="2" :lg="6" class="txt">注册</el-col>
          <el-col :xs="8" :sm="2" :md="2" :lg="6" class="txt">联系我们</el-col>
        </el-row>
      </div>
      <el-row id="left_txt" class="hidden-xs-only">
        <el-col class="hidden-xs-only"><h2>登陆或者创建一个新账户</h2></el-col>
      </el-row>
    </el-row>
    <el-row id="enroll_right">
      <el-col id="bg_img" class="hidden-xs-only"></el-col>
      <div id="enroll_box">
          <div id="tab_wx" :style="{wx_tab}" @click="tab_wx" ></div>
          <el-form v-if="tabState" :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm" id="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="ruleForm.acc"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="name">
              <el-input type="password" v-model="ruleForm.pwd"></el-input>
            </el-form-item>
            <el-form-item size="large">
              <el-button type="primary">登陆</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>

        <div v-else class="wx_box">
            <p>微信扫码登陆</p>
          <div class="wx_img">

          </div>
        </div>

      </div>
      <el-row id="bottom" class="hidden-xs-only">
        <el-col><h2 style="color: white">没有账号？点击注册</h2></el-col>
        <el-col><el-button type="primary" round>注册</el-button></el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        widowHeight: window.innerHeight,
        ruleForm:{
          name: '',
          acc:'',
          querenmima: '',
          pwd: '',
          yanzm: '',
          phone: '',
        },
        tabState:true,
        wx_tab:'background-position: 0px 0px;',
      }
    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      tab_wx(){
        if(this.tabState){
          this.wx_tab='background-position: -58px -59px;'
        }else{
          this.wx_tab='background-position: 0px 0px;'
        }
        console.log(this.wx_tab)

        return this.tabState=!this.tabState
      }
    },
    mounted () {

    }
  }
</script>
<style scoped>
  body{
    height: 100%;
  }
  #enroll_left{
    width: 25%;
    height: 100%;
    /*border: 1px solid black;*/
    position: fixed;
    font-size: 1rem;
    display:table-cell;
  }
  #left_top{
    margin-top: 10%;
  }
  #left_txt{
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
  #enroll_right{
    width: 75%;
    height: 1200px;
    /*border: 1px solid black;*/
    float: right;
  }
  #bg_img{
    width: 100%;
    height: 40%;
    background: url(http://47.104.241.112/static/img/bg.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  #enroll_box{
    width: 30%;
    /*border: 1px solid black;*/
    height: 300px;
    /*margin: 0 auto;*/
    display: inline-block;
    text-align: center;
    margin-top: 5%;
    position: relative;
    background-color: #F6F6F6;

  }

  .wx_box{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    height: 90%;
    transform: translateY(-50%) translateX(-50%);
    /*border: 1px solid black;*/

  }
  .wx_img{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 74%;
    transform: translateY(-50%) translateX(-50%);
    border: 1px solid black;
  }

  #tab_wx{
    /*border: 1px solid black;*/
    width: 13%;
    height: 15%;
    position: absolute;
    right: 0;
    top: 0;
    background: url(http://47.104.241.112/static/img/qr-2.png);
  }
  #bottom{
    width: 100%;
    height: 21%;
    background-color: #15777b;
  }
  #demo-ruleForm{
    position: absolute;
    top: 50%;
    left: 1px;
    transform: translateY(-50%);
  }
  @media(max-width: 1200px){
    #enroll_left{
      /*position: static;*/
      width: 100%;
      height: 30%;
      border: 1px solid black;
      font-size: 1rem;
    }
    #left_top{
      margin-top: 0;
    }
    #enroll_right{

      width:100%;
      height: 1200px;
      margin-top: 10%;
    }
    #left_txt{
      width: 90%;
      text-align: left;
      position: absolute;
      margin-left: 2%;
      top: 50%;
      left: 1px;
      transform: translateY(-50%);
    }
  }
  @media(max-width: 768px){
    #enroll_left{
      /*position: static;*/
      width: 100%;
      height: 10%;
      /*border: 1px solid black;*/
      z-index: 99;
      background-color: #15777B;
      color: white;
      position: fixed;
      bottom: 0;
      font-size: 1rem;
    }
    #enroll_right{
      height: 600px;
      /*border: 1px solid black;*/
    }
    #left_top{
      height: 100%;
      line-height: 100%;
    }
    #txt_box{
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }

  }
</style>
