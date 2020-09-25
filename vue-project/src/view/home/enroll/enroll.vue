<template>
  <div>
    <el-row id="enroll_left" hidden-sm-and-down>
       <div id="left_top">
         <el-row :gutter="10" id="txt_box">
           <el-col :xs="8" :sm="2" :md="2" :lg="6" class="hidden-xs-only txt">logo</el-col>
           <el-col :xs="8" :sm="2" :md="2" :lg="6" class="txt">首页</el-col>
           <el-col :xs="8" :sm="2" :md="2" :lg="6" class="txt">登陆</el-col>
           <el-col :xs="8" :sm="2" :md="2" :lg="6" class="txt">联系我们</el-col>
         </el-row>
       </div>
      <el-row id="left_txt">
        <el-col class="hidden-xs-only"><h2>登陆或者创建一个新账户</h2></el-col>
      </el-row>
    </el-row>
    <el-row id="enroll_right">
      <el-col id="bg_img" class="hidden-xs-only"></el-col>
      <div id="enroll_box">
        <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.acc"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="name">
            <el-input type="password" v-model="ruleForm.pwd"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="name">
            <el-input type="password" v-model="ruleForm.querenmima"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="name">
            <el-input v-model="ruleForm.phone" style="float: left;width: 70%"></el-input>
            <el-button style="float: left;">发送验证码</el-button>
          </el-form-item>
          <el-form-item label="验证码" prop="name">
            <el-input v-model="ruleForm.yanzm"></el-input>
            <el-button type="text" style="float:right;margin-right: 3%">忘记密码</el-button>
          </el-form-item>
          <el-form-item size="large">
            <el-button type="primary">注册</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
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
  name: 'enroll',
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
      }
    }
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
    width: 50%;
    height: auto;
    /*margin: 0 auto;*/
    display: inline-block;
    text-align: center;
    margin-top: 5%;
  }
  #bottom{
    width: 100%;
    height: 21%;
    background-color: #15777B;
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
    #enroll_box{
      width: 100%;
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
