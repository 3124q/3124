<template>
  <div class="login-container" style="height: 100vh;">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">后台管理系统</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <i class="iconfont el-ico-xuser"></i>
        </span>
        <el-input
          id="account"
          placeholder="username"
          name="username"
          type="text"
          v-model="loginForm.username"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <i class="iconfont el-ico-xpassword"></i>
        </span>
        <el-input
          id="psw"
          ref="password"
          placeholder="Password"
          name="password"
          v-model="loginForm.password"
          :key="passwordType"
          :type="passwordType"
        />
        <span class="show-pwd" v-on:click="showPwd">
          <i class="iconfont el-ico-xeye" :class="passwordType === 'password' ? 'el-ico-xeye1' : 'el-ico-xeye'"></i>
        </span>
      </el-form-item>

      <el-button
        id="login_btn"
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click.native.prevent="handleLogin"
      >登录</el-button>
    </el-form>
    <div class="info" style="bottom: 40px;">Beta: 1.0</div>
    <div class="info">Technical Support: XXX</div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error('账号不能少于3个字符'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 4) {
        callback(new Error('密码不能少于4个字符'))
      } else {
        callback()
      }
    }
    // 数据绑定
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      },
      passwordType: 'password'
    }
  },
  methods: {
    // 密码明文显示
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    // 登录验证
    handleLogin () {
      if (this.loginForm.username.length > 3 && this.loginForm.password.length > 4) {
        this.$axios.
          post("admin/adminlogin",{
          username:this.loginForm.username,
          password: this.loginForm.password
        }).then(res=>{
         alert(res.data.msg);
         if (res.data.code=="1000"){
           this.$router.replace({path: '/admin'})
         }
        })
      } else {
        this.alertErr('请检查账号密码输入是否符合规范', 'error')
      }
    },
    // 错误提示
    alertErr (msg, type) {
      this.$message({
        message: msg,
        type: type
      })
    }
  }
}
</script>

<style lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
  .info {
    position: fixed;
    bottom: 20px;
    width: 100%;
    text-align: center;
    color: gainsboro;
  }
  $bg: #283443;
  $light_gray: #fff;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input {
      color: $cursor;
    }
  }

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>

<style lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;

  .login-container {
    min-height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;

    .login-form {
      position: relative;
      width: 500px;
      max-width: 100%;
      padding: 160px 35px 0;
      margin: 0 auto;
      overflow: hidden;
    }

    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 20px;
      display: inline-block;
    }

    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
  }
</style>
