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
      <div class="imfo-content" style="width: 50px;">
        <img v-bind:src="userimg" alt="">
      </div>
      <el-button type="success" round style="vertical-align: center" @click="dialogVisible = true">修改</el-button>

    </div>
    <div class="row">
      <span class="imfo-name">
        <span class="important">*&nbsp;</span >昵称:
      </span>
      <div class="imfo-content" v-bind:class="{hide:ishide}">
          {{userName}}
      </div>
      <input type="text" v-model="newusername" v-bind:class="{hide:!ishide}">
    </div>
    <div class="row">
      <span class="imfo-name">
        <span class="important">*&nbsp;</span >姓名:
      </span>
      <div class="imfo-content"v-bind:class="{hide:ishide}">
        {{fullName}}
      </div>
      <input type="text" v-model="newfullname"v-bind:class="{hide:!ishide}">

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
          value-format="yyyy-MM-dd "
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
        <el-radio v-model="newsex" label="男">男</el-radio>
        <el-radio v-model="newsex" label="女">女</el-radio>
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
        <v-distpicker @selected="sel" v-bind:class="{hide:!ishide}" v-model="newaddress"></v-distpicker>
      </div>
    </div>
    <div class="row">
      <button  v-bind:class="{ 'edit':true,'hide':ishide}"   v-on:click="editimformation">编辑</button>
      <button v-bind:class="{ 'save':true,'hide':!ishide}" v-on:click="submitedit">保存</button>
      <el-popover
        placement="top"
        width="160"
        v-model="visible" v-bind:class="{ 'hide':!ishide}">
        <p>您正在编辑当中，是否放弃编辑？</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="visible = false">取消</el-button>
          <el-button type="primary" size="mini" @click="cancel">确定</el-button>
        </div>
        <el-button slot="reference" class="cancel">取消</el-button>
      </el-popover>
<!--      <button v-bind:class="{ 'cancel':true,'hide':!ishide}" >取消</button>-->
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="true"
        :auto-upload=false
        :on-change="handleAvatarChange"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" v-bind:src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
    export default {
        name: "PersonalCenterMyImformation",
        data(){
          return{
            imageUrl: '',
            tempUrl: '',
            dialogVisible: false,
            userimg:"https://img2.woyaogexing.com/2020/09/24/8d134c18c15a413aadaa52963f587ba4!400x400.jpeg",
            newusername:"",
            newfullname:"",
            date:'',
            newsex:'',
            citydata:'',
            newaddress:"",
            newbirthday:"",
            nowuserID:"1",
            userName:"z7",
            fullName:"未设置",
            userPhoneNum:'11111111111',
            userBirthday:'',
            userSex:'未设置',
            userEmail:'未设置',
            userOffenLive:'未设置',
            ishide:false,
            visible: false,
          }
        },
      components:{
        VDistpicker
      },
      created() {

          var that=this;
          this.$axios.post("index/nowuser",{id:that.nowuserID}).then(
            res=>{
              console.log(that.userName);
              console.log(res);

              that.newusername=that.userName=res.data[0].userName;
              that.newfullname=that.fullName=res.data[0].userFullname;
              that.userPhoneNum=res.data[0].userPhoneNum;
              that.date=that.userBirthday=res.data[0].userBirthday;
              that.userEmail=res.data[0].userEmail;
              that.newsex=that.userSex=res.data[0].userSex;
              that.userOffenLive=res.data[0].userAddress;
            }
          )


      },
      methods:{
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        //将上传图片的原路径赋值给临时路径
        handleAvatarChange(res, file) {
          this.imageUrl = file.raw;
          console.log(file.raw)
        },
        handleAvatarSuccess(res, file) {
          this.imageUrl = file.raw;
        },
        uploadImg(item){
          let app=this;
          let myfile=new FormData();
          myfile.append('file',item.file);
          app.$Api.fileUpload(myfile,function (result) {
            if (result.result=="true"){
              app.$notify.success({
                title: '温馨提示：',
                message: result.message,
              })
              App.imageUrl = App.tempUrl;
              //将后台传来的数据库图片路径赋值给car对象的图片路径
              App.car.carImg = result.imgUrl;
            } else {
              App.$notify.error({
                title: '温馨提示：',
                message: result.message,
              });
            }
          })
        },
        beforeAvatarUpload(res,file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;
          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        },
        editimformation(){
            this.ishide=!this.ishide;

        },
        sel(data) {
          console.log(this.newaddress);
          this.citydata = data.province.value + data.city.value + data.area.value;
          console.log(this.citydata);
        },
        cancel(){
          this.visible = false;
          this.ishide=!this.ishide;
        },
        submitedit(){
          var that=this;
          this.$axios.post("index/edituser",{
            userID:that.nowuserID,
            userName:that.newusername,
            userBirthday:that.date,
            userSex:that.newsex,
            userAddress:that.citydata
          }).then(res=>{
            console.log(res.data);
            alert(res.data.msg);
            console.log(res.data.data);
            that.newusername=that.userName=res.data.data[0].userName;
            that.newfullname=that.fullName=res.data.data[0].userFullname;
            that.userPhoneNum=res.data.data[0].userPhoneNum;
            that.date=that.userBirthday=res.data.data[0].userBirthday;
            that.userEmail=res.data.data[0].userEmail;
            that.newsex=that.userSex=res.data.data[0].userSex;
            that.userOffenLive=res.data.data[0].userAddress;
            that.ishide=!that.ishide;

          })
        }

      }
    }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
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
  .imfo-content{
    /*width: 50px;*/
    height: 50px;
  }
  .imfo-content img{
    width: 40px;
    height: 40px;
    display: inline-block;
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
