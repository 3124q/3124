<template>
    <div id="PersonalCenterPwdchange">
      <div class="Info-title">
        <div class="basic-info">
          密码设置
        </div>
      </div>
      <div>
        <el-steps :active="2" align-center>
          <el-step title="步骤1" description="身份验证"></el-step>
          <el-step title="步骤2" description="输入新密码"></el-step>
          <el-step title="步骤3" description="修改完成"></el-step>
        </el-steps>
      </div>
      <div class="firststep">
        <div><label >短信验证码</label><input type="text"><button>获取验证码</button></div>
        <div><button>下一步，设置密码</button></div>
      </div>
      <div class="secondstep">
      <div><label >输入密码</label><input type="password" placeholder="请输入6-16位字符"></div>
      <div><label >确认输入</label><input type="password"placeholder="请再次输入"></div>
      <div><button>完成设置</button></div>
    </div>
      <div class="thirdstep">

        <div><i class="el-ico-xzhengque-- iconfont"></i><h3>修改成功</h3></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "PersonalCenterPwdchange"
    }
</script>

<style scoped>
  #PersonalCenterPwdchange{
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
  .Info-title{
    width: 100%;
    height: 46px;
    border-bottom: 1px solid #ddd;
  }
  .basic-info{
    float: left;
    height: 100%;
    line-height: 46px;
    font-size: 16px;
    font-weight: 600;
  }
  .firststep{
    width: 60%;
    margin: 0 auto;
    /*height: 100px;*/
    background-color: #00f8ff24;
  }
  .firststep div,.secondstep div{
    height: 40px;
    line-height: 40px;
    margin-bottom: 10px;
  }
  .firststep div input,.secondstep div input{
    height: 100%;
    margin-left: 10px;
    padding: 8px;
    box-sizing: border-box;
  }
  .firststep div button,.secondstep div button{
    height: 100%;
    margin-left: 10px;
    background-color: #ff9419;
    color: #fff;
    border: none;
  }
  .secondstep{
    width: 60%;
    margin: 0 auto;
    /*height: 100px;*/
    background-color: #00f8ff;
  }
  .thirdstep{
    width: 60%;
    margin: 0 auto;
    height: 100px;
    background-color: #00f4ff;
  }
  .thirdstep h3{
    margin: 0;
  }
  .thirdstep i{
  font-size: 24px;
    color: #2e9900;
  }
</style>
