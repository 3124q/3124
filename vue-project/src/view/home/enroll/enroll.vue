<template>
  <el-container>
    <el-header height="30px" class="login_head">
      <public_head></public_head>
    </el-header>
    <el-main class="enroll_form">
      <el-row>
        <el-col class="login_form_item" :span="10" :offset="7">
          <el-col :span="22" :offset="1">
            <h2>注册</h2>
            <img class="logo" src="http://47.105.158.199/3124/16pic_5211757_s.png">
          </el-col>
          <el-col :span="20" :offset="2">
            <el-steps :active="active" finish-status="success" style="text-align: left;">
              <el-step title="步骤 1"></el-step>
              <el-step title="步骤 2"></el-step>
              <el-step title="步骤 3"></el-step>
            </el-steps>
          </el-col>
          <el-row v-if="active==0">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="55px" class="demo-ruleForm">
              <el-form-item prop="age" style="width: 90%;">
                <el-input v-model.number="ruleForm.age" prefix-icon="iconfont el-ico-xuser" autocomplete="off" placeholder="请输入账号"></el-input>
              </el-form-item>
              <el-form-item prop="pass" style="width: 90%;">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" prefix-icon="iconfont el-ico-xpassword" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item prop="checkPass" style="width: 90%;">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" prefix-icon="iconfont el-ico-xpassword" placeholder="请再次确认密码"></el-input>
              </el-form-item>
              <el-col :span="20" :offset="2" style="margin-top: 20px;">
                <el-button style="width: 100%;margin-top: 12px;" @click="next">下一步</el-button>
              </el-col>
            </el-form>
          </el-row>
          <el-row v-if="active==1">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
              <el-col :span="20" :offset="2" style="margin-top: 30px;">
                <el-form-item prop="enroll_phone">
                  <el-input
                    placeholder="请输入手机号"
                    v-model="ruleForm.enroll_phone"
                    clearable
                    autocomplete="off">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="20" :offset="2" style="margin-top: 10px;">
                <el-input placeholder="请输入验证码" v-model="ruleForm.VC_code" prefix-icon="icon svg-icon el-ico-xyanzhengma2">
                  <el-button slot="append">发送验证码</el-button>
                </el-input>
              </el-col>
            </el-form>
            <el-col :span="20" :offset="2" style="margin-top: 20px;">
              <el-col :span="24">
                <el-button-group>
                  <el-button type="primary" icon="el-icon-arrow-left" @click="prev" style="width: 50%">上一页</el-button>
                  <el-button type="primary" @click="next" style="width: 50%">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
              </el-col>
            </el-col>
          </el-row>
          <el-row v-if="active==2">
            <el-col :span="20" :offset="2" style="margin-top: 60px;">
              <h2>注册成功</h2>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
    <el-footer class="login_foot">
      <public_foot></public_foot>
    </el-footer>
  </el-container>
</template>

<script>
  import public_head from "../public/public_head";
  import public_foot from "../public/public_foot";
  export default {
    name: "enroll",
    data() {
      // 正则判断
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入纯数字'));
          } else {
            if (value.toString().length < 8) {
              callback(new Error('账号长度必须大于8个字符'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
          if (!reg.test(value)) {
            callback(new Error('密码至少8-16个字符，至少1个大写字母，1个小写字母和1个数字'));
          } else {
            if (this.ruleForm.checkPass !== '') {
              this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
          }
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var checkPhone = (rule, value, callback) => {
        var reg = /^1[3456789]\d{9}$/;
        if (value == ''){
          callback(new Error('请输入手机号'));
        } else if (!reg.test(value)){
          callback(new Error('请正确输入手机号'));
        } else {
          callback();
        }
      };
      return {
        // 步骤条
        active: 0,
        // 用户数据
        ruleForm: {
          pass: '',
          checkPass: '',
          age: '',
          VC_code: '',
          enroll_phone: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ],
          enroll_phone: [
            { validator: checkPhone, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      prev() {
        this.active = 0;
      },
      next() {
        if (this.active == 0) {
          // 数据有效性判断
          var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
          if(this.ruleForm.age==''){
            this.alertErr("账号不能为空","error")
            return
          }else if(this.ruleForm.pass==''){
            this.alertErr("密码不能为空","error")
            return
          }else if(this.ruleForm.checkPass==''){
            this.alertErr("请再次输入密码","error")
            return
          }else if(this.ruleForm.age.toString().length<8||!Number.isInteger(this.ruleForm.age)){
            this.alertErr("请按规范输入账号","error")
            return
          }else if(!reg.test(this.ruleForm.pass)){
            this.alertErr("请按规范输入密码","error")
            return
          }else if(this.ruleForm.pass!=this.ruleForm.checkPass){
            this.alertErr("请检查两次输入的密码","error")
            return
          }
          this.active+=1;
        }else if(this.active == 1){
          // 数据有效性判断
          var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
          if (reg.test(this.ruleForm.enroll_phone)) {
            this.alertErr('请正确输入手机号',"error");
            return
          }
          // 手机验证码校验
          // ajax请求后端
          this.enroll();
        }
      },
      // 错误提示
      alertErr (msg, type) {
        this.$message({
          message: msg,
          type: type
        })
      },
      // 注册ajax
      enroll (){
        var that = this;
        this.$axios.post('/index/enroll/enroll',{userInfo:that.ruleForm}).then(response => {
          if(response.data.code=='10111'){
            this.active+=1;
            that.alertErr(response.data.msg,'success');
          }else{
            that.alertErr(response.data.msg,'error');
          }
        })
      }
    },
    components: {
      public_head,
      public_foot
    }
  }
</script>

<style scoped>
  .login_head{
    height: 28px;
    background: #f8f8f8;
    padding-top: 8px;
    border-bottom: 2px solid #eee;
  }
  .enroll_form{
    min-height: 100vh;
    position: relative;
    background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601289103725&di=b8dcad2a02e18cfea54aaa477e185848&imgtype=0&src=http%3A%2F%2F01.minipic.eastday.com%2F20161220%2F20161220000043_7759ae5ae449bef7d892b20c24bd0731_1.jpeg");
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
  }
  .login_foot{
    padding: 0;
    position: relative;
    box-shadow: -10px -40px 50px #000000f2;
  }
  .logo{
    margin: -20px;
    height: 100px;
    position: absolute;
    top: 0;
    left: -30px;
    filter: drop-shadow(3px 0px 1px #fff);
  }
  .login_form_item{
    height: 430px;
    padding: 20px;
    position: relative;
    overflow: hidden;
    margin-top: 100px;
    color: #fff;
    background: rgba(20, 20, 20, 0.7);
  }
  .login_btn{
    width: 100%;
  }
  .login_choose{
    color: #e5e5e5;
    font-size: 14px;
  }
</style>
