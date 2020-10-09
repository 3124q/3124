<template>
  <el-container>
    <el-header style="height: 40px"><public_head_nav></public_head_nav></el-header>
    <el-main>
      <div id="helpercontent">
        <h1 class="helptitle">帮助中心</h1>
        <div class="helppage">
          <el-tabs type="border-card"  v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户须知" name="1">用户须知</el-tab-pane>
            <el-tab-pane label="意见投诉" name="2">
              <p style="color: #fb0000bd;padding-top: 12px">欢迎您使用xx旅游网</p>
              <p style="color: #fb0000bd">有任何宝贵的建议或者有任何的不满都可以在此进行建议或投诉，我们将对意见进行采纳，对投诉进行受理</p>
              <div class="detail">
              <ul >
                <li class="row">
                  <ul>
                    <li><span class="row_title">xx网账号</span></li>
                    <li><input type="text" v-model="complaint.account" placeholder="请输入您在本网站注册的账号"></li>
                    <li><span>还没有注册账号？点击 </span><router-link to="" style="color: #00a3d2">注册</router-link></li>
                  </ul>
                </li>
                <li class="row">
                  <ul>
                    <li><span class="row_title">类型</span></li>
                    <li><select name="" id="" v-model="complaint.type">
                      <option value="酒店产品">酒店产品</option>
                      <option value="旅行团产品">旅行团产品</option>
                      <option value="门票产品">门票产品</option>
                    </select></li>
                    <li><span>（请选择要反馈或投诉的问题类型，方便我们进行处理 ）</span></li>
                  </ul>
                </li>
                <li class="row">
                  <ul>
                      <li>
                        <span class="row_title" >联系人</span>
                      </li>
                    <li>
                      <input type="text" v-model="complaint.contact" placeholder="请输入您的姓名">
                    </li>
                    <li>
                      <span class="row_title">联系方式</span>
                    </li>
                    <li>
                      <input type="text"  v-model="complaint.phonenum" placeholder="请输入可以联系到您的手机号">
                    </li>
                    <li>
                      <span class="row_title">联系邮箱</span>
                    </li>
                    <li>
                      <input type="text" v-model="complaint.email" placeholder="请输入您的邮箱">
                    </li>
                  </ul>
                </li>
                <li class="row" style="height: 130px">
                  <ul>
                    <li ><span class="row_title">内容</span></li>
                    <li >
                      <div class="maincontent">
                        <div class="limitword">
                          还可输入 <span class="num">1000</span>字
                        </div>
                        <textarea name="" id=""  cols="30" rows="10" v-model="complaint.content" placeholder="请输入您想要反馈的内容">

                        </textarea>
                    </div>
                    </li>
                  </ul>

                </li>
              </ul>
                <div class="submit"><button v-on:click="sendcomplaint">提交</button></div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="联系客服" name="3">联系客服</el-tab-pane>
          </el-tabs>
        </div>
      </div>

    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
  import public_head_nav from "../public/public_head_nav";
    export default {
      name: "HelperCenter",
      components:{
      public_head_nav
      },
      data() {
        return {
          activeName: '2',
          complaint:{
            account:"",
            type:"",
            contact:"",
            phonenum:"",
            email:"",
            content:""
          }
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        sendcomplaint(){
          var that=this;
          console.log(this.complaint);
          this.$axios.post("index/sendcomplaint",that.complaint).then(
            res=>{
              console.log(res.data);
              alert(res.data.msg)
            }
          )
        }
      },
      mounted() {
        this.activeName=this.$route.params.id
      }

    }
</script>

<style scoped>
  a{
   text-decoration: none;
  }
  ul{
    list-style: none;
  }
  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: center;
    line-height: 40px;
    padding: 0;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
  }
  .el-container{
    padding: 0;
    width: 980px;
    margin: 0 auto;
    /*min-width: 980px;*/

  }

  #helpercontent{
    width: 100%;


    /*height: 500px;*/
  }
  .helptitle{
    text-align: left;
    color: #00a3d2;
    font-weight: 700;
    font-size: 30px;
  }
  .helppage{
    width: 100%;
    /*background-color: #6283bf85;*/
    /*height: 400px;*/
    /*background-color: #df5000;*/
  }
  .el-tab-pane{
    background-color: #6283bf85;
    box-shadow: 10px 10px 5px #888888;
  }
  .detail{
    width: 100%;
    height:320px;

  }
  .detail .row{
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .detail .row ul{
    padding: 0;
    width: 100%;
    float: left;
  }
  .detail .row ul li{
    height: 30px;
    line-height: 30px ;
    margin-right: 10px;
    float: left;
    vertical-align: middle;
    padding-bottom: 10px;
    font-size: 12px;
  }
  .detail .row .row_title{
    display: block;
    width: 80px;
    padding-right: 10px;
    color: #555;
    text-align: right;
  }
  .detail .row ul li input,detail .row ul li .el-input{
    height:20px;
  }
  .maincontent{
    width: 750px;
    height: 155px;
  }
  .maincontent .limitword{
    font-size: 12px;
    /*font-family: 宋体;*/
    float: right;
    color: #b1b1b1;
    margin: 5px 5px 5px 0;
    line-height: 12px;
  }
  .maincontent .limitword .num{
    font-family: 宋体;
    font-size: 14px;
  }
  .maincontent textarea{
    width: 740px;
    height: 116px;
    border: 1px solid #BABABA;
    font-size: 12px;
    padding: 2px 2px;
    color: #b1b1b1;
    resize: vertical;
  }
.submit{
  height: 50px;
  line-height: 50px;
}
  .submit button{
    width: 120px;
    height: 30px;
    background-color:  #df5000;
    border: none;
    color: #fff;
  }
</style>
