<template>
<div id="PersonalCenterMyImformation">
  <div class="Info-title">
    <div class="basic-info">
      基本信息
    </div>
  </div>
  <div class="show-content">
    <div class="row">
      <span class="imfo-name">
        <span class="important">*&nbsp;</span >头像:
      </span>
      <div class="imfo-content">
        <img src="" alt="">
      </div>
    </div>
    <div class="row">
      <span class="imfo-name">
        <span class="important">*&nbsp;</span >昵称:
      </span>
      <div class="imfo-content" v-bind:class="{hide:ishide}">
          {{userName}}
      </div>
      <input type="text" :value="this.userName"v-bind:class="{hide:!ishide}">
    </div>
    <div class="row">
      <span class="imfo-name">
        <span class="important">*&nbsp;</span >姓名:
      </span>
      <div class="imfo-content"v-bind:class="{hide:ishide}">
        {{fullName}}
      </div>
      <input type="text" :value="this.fullName"v-bind:class="{hide:!ishide}">

    </div>
    <div class="row">
      <span class="imfo-name">
        <span class="important">*&nbsp;</span >手机号:
      </span>
      <div class="imfo-content">
        {{userPhoneNum}}
      </div>
      <router-link to="/changephone" class="changePhone">
          修改手机号>>
      </router-link>

    </div>
    <div class="row">
      <span class="imfo-name">
        生日:
      </span>
      <div class="imfo-content"v-bind:class="{hide:ishide}">
        {{userBirthday}}
      </div>
      <div>
        <el-date-picker
          v-model="date"
          type="date"
          placeholder="选择日期"v-bind:class="{hide:!ishide}">
        </el-date-picker>

      </div>

    </div>
    <div class="row">
      <span class="imfo-name">
        <span class="important">*&nbsp;</span >性别:
      </span>
      <div class="imfo-content"v-bind:class="{hide:ishide}">
        {{userSex}}
      </div>
      <div v-bind:class="{sexchange:true,hide:!ishide}" >
        <el-radio v-model="newsex" label="1">男</el-radio>
        <el-radio v-model="newsex" label="2">女</el-radio>
      </div>
    </div>
    <div class="row">
      <span class="imfo-name">
        邮箱:
      </span>

      <div class="imfo-content">
        {{userEmail}}
      </div>
      <router-link to="/setemail" class="changeEmail">
        绑定邮箱>>
      </router-link>
    </div>
    <div class="row">
      <span class="imfo-name">
        <span class="important">*&nbsp;</span >常住地:
      </span>
      <div class="imfo-content" v-bind:class="{hide:ishide}">
        {{userOffenLive}}
      </div>
      <div class="v-distpicker">
        <v-distpicker @selected="sel" v-bind:class="{hide:!ishide}"></v-distpicker>
      </div>
    </div>
    <div class="row">
      <button  v-bind:class="{ 'edit':true,'hide':ishide}"   v-on:click="editimformation">编辑</button>
      <button v-bind:class="{ 'save':true,'hide':!ishide}" >保存</button>
      <button v-bind:class="{ 'cancel':true,'hide':!ishide}" >取消</button>
    </div>

  </div>
</div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
    export default {
        name: "PersonalCenterMyImformation",
        data(){
          return{
            date:'',
            newsex:'',
            citydata:'',
            userName:"z7",
            fullName:"未设置",
            userPhoneNum:'11111111111',
            userBirthday:'',
            userSex:'未设置',
            userEmail:'未设置',
            userOffenLive:'未设置',
            ishide:false
          }
        },
      components:{
        VDistpicker
      },
      methods:{
        editimformation(){
            this.ishide=!this.ishide
        },
        sel(data) {
          this.citydata = data.province.value + data.city.value + data.area.value;
          console.log(this.citydata);
        },

      }
    }
</script>

<style scoped>
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
  .show-content{
    width: 96%;
    height: auto;
    margin: 10px 2%;
    font-size: 14px;
  }
  .show-content .row{
    /*text-align: left;*/
    width: 100%;
    height: 50px;
    line-height: 50px;
  }
  .show-content .row .imfo-name{
    float: left;
    display: inline-block;
    width: 15%;
    text-align: right;
    margin-right: 10px;
  }
  .show-content .important{
    color: red;
  }
  .show-content .imfo-content{
    float: left;
  }
  .changePhone,.changeEmail {
    float: left;
    margin-left: 20px;
    color: darkgreen;
  }
  show-content .imfo-content img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .row input{
    float: left;
    width: 30%;
    height: 60%;
    line-height: 30px;
    margin-top: 10px;
  }
  .row button{
    width: 13%;
    height: 32px;
    color: #ffffff;
    border: none;
    float: left;
    font-size: 16px;
  }
  .row .el-date-editor{
    float: left;
  }
  .row .sexchange{
    float: left;
  }
  .row  .v-distpicker{
    float: left;
  }
  .row .edit{
    margin: 10px 100px;
    background-color: #42b983;
  }
  .row .save{
    margin: 10px 10px 10px 55px;
    background-color: #2c3e50;
  }
  .row .cancel{
    margin: 10px;
    background-color: #dddddd;
  }
  .hide{
    display: none;
  }
</style>
