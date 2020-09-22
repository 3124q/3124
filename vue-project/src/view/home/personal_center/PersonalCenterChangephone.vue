<template>
    <div id="PersonalCenterChangephone">
      <div class="Info-title">
        <div class="basic-info">
          修改手机
        </div>
      </div>
      <div class="changephone">
        <div class="steps">
          <el-steps :active="1" align-center>
            <el-step title="步骤1" description="身份验证"></el-step>
            <el-step title="步骤2" description="输入新手机"></el-step>
            <el-step title="步骤3" description="完成"></el-step>
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
          <ul>
            <li class="font-12"><label>我的新手机：</label><input type="text"placeholder="请输入手机号"></li>
            <li class="font-12"><label>验证码：</label><input type="text"placeholder="不区分大小写"><span class="code"></span><span v-bind:class="{'hide':codetip,'font-12':true}">请输入正确的验证码</span><span class="changecode">看不清，<a
              href="#">换一张</a></span></li>
            <li class="font-12"><label>手机验证码：</label><input type="text"placeholder="请输入手机号"><a href="#" class="getphonecode">获取手机验证码</a></li>



          </ul>
          <div class="nextBtn">
            <button>下一步</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "PersonalCenterChangephone",
      data(){
          return{
            codetip:true,
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
    color: #666;
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
  .changephone{
    width: 100%;
    height: 300px;
    background-color: #dddddd;
  }
  .cheakarea{

    padding-left: 80px;
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
    width: 95px;
    text-align: center;
  }
  .sendtip{
    margin:0 auto;
    color: #999;
    font-size: 12px;
    text-align: center;
    padding-left: 10%;
  }
  .sendtipTime{
    color: #2e9900;
  }
  .nextBtn{
    height: 30px;
  }
  .nextBtn button{
    width: 80px;
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
  .secondstep ul{
    padding-left: 10px;
  }
  .secondstep ul li{
    margin-bottom: 20px;
    text-align: left;
  }
  .secondstep ul li label{
    display: inline-block;
    text-align: right;
    width: 19%;
  }
  .secondstep ul li span,.secondstep ul li a{
    margin-left: 10px;
  }
</style>
