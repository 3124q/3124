<template>
    <div id="PersonalCenterSetEmail">
      <div class="Info-title">
        <div class="basic-info">
          邮箱设置
        </div>
      </div>
      <div class="set_password">
        <div class="steps">
          <el-steps :space="200" :active="1" finish-status="success">
            <el-step title="已完成"></el-step>
            <el-step title="进行中"></el-step>
            <el-step title="步骤 3"></el-step>
          </el-steps>
        </div>
        <div class="firststep">
          <ul class="cheakarea">
            <li><label>已验证手机:</label><span>0086-{{phoneNum}}</span></li>
            <li><label>验证码:</label><input type="text" placeholder="不区分大小写" class=" codeinput"><span class="code"></span><span v-bind:class="{'hide':codetip,'font-12':true}">请输入正确的验证码</span><span class="changecode">看不清，<a
              href="#">换一张</a></span></li>
            <li><label>手机验证码:</label><input type="text"placeholder="请输入6位验证码" class="phonecodeinput"><a href="#" class="getphonecode">获取手机验证码</a></li>
          </ul>
          <div class="sendtip">
            验证码已发出，请注意查收短信，如果没有收到，您可在
            <span class="sendtipTime">60</span>
            秒后要求系统重新发送
          </div>
          <div class="nextBtn">
            <button>下一步</button>
          </div>
        </div>
        <div class="secondstep">
          <div class="secondcontent">
            <p><label class="font-12">我的邮箱</label><input type="text"></p>
            <p v-bind:class="{'emailtip':true,'hide':emailtip}" >
              <i class="iconfont el-ico-xcuowu"></i>
              请输入正确的邮箱，例如：12345678@qq.com
            </p>
            <p class="sendBtn"><button>发送验证邮箱</button></p>
          </div>
        </div>
        <div class="thirdstep">
          <i class="iconfont el-ico-xzhengque--"></i>
          <div class="sendcontent">
            <p class="first">已发送验证邮箱至：42905****@qq.com</p>
            <p class="second">验证邮件24小时内有效，请尽快登录您的邮箱点击验证链接完成验证。</p>
          </div>
        </div>

      </div>



    </div>
</template>

<script>
    export default {
        name: "PersonalCenterSetEmail",
      data(){
          return{
            codetip:true,
            emailtip:true,
            phoneNum:"13547595214"
          }
      }
    }
</script>

<style scoped>
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  .font-12{
    font-size: 12px;
  }
  .hide{
    display: none;
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
  .set_password{
    width: 100%;
    height: 300px;
    background-color: #dddddd;
  }
  .el-steps{
    width: 50%;
    margin: 10px auto;
    text-align: center;
  }
  .el-step{
    width: 33.3%;
    text-align: left;
    display: inline-block;
  }
  .el-step__head,.el-step__main{
    text-align: center;
  }
  .cheakarea{

    padding-left: 200px;
    display: flex;
    text-align: left;
    justify-content: center;
    flex-direction: column;


    width: 75%;
    height: 140px;
    margin: 5px auto;
    /*background-color: #7e5d7f*/
  }
  .cheakarea li{
    padding-left: 40px;
    margin-top:20px;
    height: 25px;
    line-height: 25px;

  }
  .cheakarea li label{
    line-height: 25px;
    font-size: 12px;
    color: #666;
    display: inline-block;
    width: 10%;
    text-align: right;
  }
  .cheakarea li span,.cheakarea li input{
    margin-left: 15px;
  }

.codeinput{
  width: 20%;
}
.changecode{
  font-size: 12px;
}
.changecode a{
  color: #2e9900;
}
  .phonecodeinput{
    width: 15%;
    margin-right: 10px;
  }
  .code{
    display: inline-block;
    width: 10%;
    height: 25px;
    background-color: #2c3e50;
    vertical-align: top;
    /*border: 1px solid  black;*/

  }
  .getphonecode{
    display: inline-block;
    height: 24px;
    line-height: 24px;
    border: 1px solid #dddddd;
    background-color: #f9f9f9;
    color: #404040;
    font-size: 12px;
    width: 15%;
    text-align: center;
  }
  .sendtip{
    margin:0 auto;
    color: #999;
    font-size: 12px;
    text-align: center;
    padding-left: 23%;
  }
  .sendtipTime{
    color: #2e9900;
  }
  .nextBtn{
    height: 30px;
  }
  .nextBtn button{
    width: 10%;
    height: 100% ;
    border: none;
    background-color: #ff9419;
    color: #ffffff;
    font-weight: 700;
    font-size: 16px;
    margin-left: -30%;
  }
  .secondstep{
    width: 60%;
    height: 100px;
    background-color: darkcyan;
    margin: 0 auto;
  }
  .secondcontent{
    margin-left: 40px;
    height: 100%;
  }
  .secondcontent p{
    text-align: left;
  }
  .secondcontent p label{
    display: inline-block;
    width: 19%;
    text-align: right;
    color: #666;
    margin-right: 10px;
  }
  .secondcontent p i{
    color: red;
  }
  .email-tip{
    margin-left: 20%;
    margin-top: 10px;
    font-size: 12px;

    /*background: url("../../../../static/image/err.png") no-repeat 0 50%;*/
    /*background-image: url("../../../static/image/err.png");*/
    /*background-repeat: no-repeat;*/
    padding-left: 20px;
  }
  .sendBtn{
    height: 40px;
    line-height: 40px;
  }
  .secondcontent button{
    width: 30%;
    height: 100% ;
    border: none;
    background-color: #ff9419;
    color: #ffffff;
    font-weight: 700;
    font-size: 16px;
    margin-left: 10%;
  }
  .thirdstep{
    box-sizing: border-box;
    width: 60%;
    margin: 0 auto;
    height: 50px;
    padding-left: 40px;
    /*background-color: #B3C0D1;*/
  }
  .thirdstep i{
    font-size: 24px;
    line-height: 24px;
    color: #2e9900;
    float: left;
    margin-right: 10px;
  }
  .sendcontent{
    margin: 0;
    /*font-size: 12px;*/
   width: 80%;
    height: 100%;
    float: left;
    text-align: left;
  }
  .sendcontent .first{
    margin: 0;
    font-size: 16px;
  }
  .sendcontent .second{
    font-size: 12px;
    margin: 0;
    color: #999999;
  }


</style>
