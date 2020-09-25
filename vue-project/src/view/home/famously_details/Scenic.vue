<template>
<div id="app">
  <el-container>
    <el-header style="padding: 0;height: 100%">
      <publicZ></publicZ>
    </el-header>
    <el-main>
      <!--  面包屑导航-->
      <div id="crumbs">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/index' }">丽江</el-breadcrumb-item>
          <el-breadcrumb-item>景点详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!--  轮播图功能-->
      <div id="cardBox">
        <template>
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in 5" :key="item">
            </el-carousel-item>
          </el-carousel>
        </template>
      </div>
      <!--  景点名称-->
      <div id="navBox">
        <h1 id="navTitle">
          【跟团游】机票昆明-丽江+香格里拉+泸沽湖7天【玉龙雪山+赠送丽水金沙+普达措森林公园
        </h1>
      </div>
      <!--  景点特点-->
      <div id="tese">
        <ul>
          <li><div class="teseNav">☆ 【缤纷景点】</div> 束河古镇+泸沽湖+独克宗古城</li>
          <li><div class="teseNav">☆ 【贴心赠送】</div> 丽水金沙表演+香格里拉衣服氧气</li>
          <li><div class="teseNav">☆ 【特色美食】</div> 藏王土司宴+土鸡火锅</li>
          <li><div class="teseNav">☆ 【接送服务】</div> 根据游客到达昆明的时间安排接机</li>
        </ul>
      </div>
      <!--  景点价格-->
      <div id="rateBox">
        <span id="rate">￥3217</span>
        <span id="ren">起/人</span>
        <span id="ertong">(儿童￥2896)</span>
        <span id="qijia">
          <el-tooltip placement="bottom">
            <div slot="content">儿童起价说明<br/>含车位费、半价餐费</div>
            <el-button class="renzheng">起价说明</el-button>
          </el-tooltip>
        </span>
      </div>
      <!--  产品信息-->
      <div id="product">
        <ul>
          <li>产品编号 <span class="chanpin">1164454516</span></li>
          <li>行程套餐
            <el-breadcrumb>
              <el-breadcrumb-item>厦门出发</el-breadcrumb-item>
              <el-breadcrumb-item>6天5晚</el-breadcrumb-item>
              <el-breadcrumb-item>特色餐饮</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/index' }" style="color: #52B7CB;">路程往返</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/index' }">高档型酒店</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/index' }">约27个景点（约含2个经典景点)</el-breadcrumb-item>
            </el-breadcrumb>
          </li>
          <li>浏览城市
            <span chanpin>丽江、云南、大理、昆明、楚雄</span>
          </li>
          <li>产品特色
            <span class="chanpin">
          <el-tag>私人游艇</el-tag>
          <el-tag>赠送旅拍</el-tag>
          <el-tag>当地四星酒店</el-tag>
          <el-tag>赠表演秀</el-tag>
          <el-tag>纳西神山</el-tag>
          <el-tag>玉龙雪山</el-tag>
        </span>
          </li>
        </ul>
        <div id="fuwu">
          <ul>
            <li>服务承诺
              <span class="chanpin">
                <el-tooltip placement="bottom">
                  <div slot="content">认证商家资质</div>
                  <el-button class="renzheng">认证商家</el-button>
                </el-tooltip>
                <el-tooltip placement="bottom">
                  <div slot="content">
                    在消费者与供应商达成退款共识后，经本站网<br/>
                    核实退款申请无误且材料完整，1个工作日内完成<br/>
                    退款操作（根据银行的不同会在3-15个工作日内到账）
                  </div>
                  <el-button class="renzheng">24小时退款保证</el-button>
                </el-tooltip>
                <el-tooltip placement="bottom">
                  <div slot="content">
                    本网站已经通过支付卡产业数据安全标准(PCI-DSS)<br/>
                    全面保护您的资金、交易安全，通过本网站比线下<br/>
                    交易更有保障更可靠
                  </div>
                  <el-button class="renzheng">安全交易</el-button>
                </el-tooltip>
                <el-tooltip placement="bottom">
                  <div slot="content">
                    一旦网上预定并付款后，不管该团期参团人数多少<br/>
                    肯定会发团，保障消费者可以按时出游。
                  </div>
                  <el-button class="renzheng">铁定成团</el-button>
                </el-tooltip>
                 <el-tooltip placement="bottom">
                  <div slot="content">
                    商家承诺与消费者在交易过程中利用400电话/TQ<br/>
                    工具进行沟通时向消费者描述的内容真实有效。
                  </div>
                  <el-button class="renzheng">如实描述</el-button>
                </el-tooltip>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <!--  选项卡-->
      <div id="xuanze">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="路线导航" name="first">
            <!-- 路线规划-->
            <div id="driving">
              <div id="drivingNav">云南·自驾游</div>
              <div id="drivingTu">
                <img src="../../../assets/customized.png" alt="">
              </div>
              <div id="drivText">行程更灵活，不跟团，不自助，独立成团更省心</div>
              <el-button id="pathBtn" type="text" plain><router-link to="/Selfdrive" id="jump">路线规划</router-link></el-button>
            </div>
            <!-- 出行路线-->
            <div id="plan">
              <span>路线导航</span>
            </div>
            <div id="planBox">
              <div id="planLine">
                <div id="start">
                  <el-input placeholder="请输入出发地" v-model="input1">
                    <template slot="prepend">出发地</template>
                  </el-input>
                </div>
                <div id="bourn">
                  <el-input placeholder="请输入目的地" v-model="input2">
                    <template slot="prepend">目的地</template>
                  </el-input>
                </div>
                <div id="startTime">
                  <el-col :span="11" style="width: 100%;">
                    <el-date-picker type="date" placeholder="出发时间" v-model="form.date1" style="width: 100%;"></el-date-picker>
                  </el-col>
                </div>
                <div id="bournTime">
                  <el-col :span="11" style="width: 100%;">
                    <el-date-picker type="date" placeholder="返回时间" v-model="form.date1" style="width: 100%;"></el-date-picker>
                  </el-col>
                </div>
                <div id="renshu">
                  <el-select v-model="form.region" placeholder="成人">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                    <el-option label="3" value="3"></el-option>
                    <el-option label="4" value="4"></el-option>
                    <el-option label="5" value="5"></el-option>
                  </el-select>
                </div>
                <div id="xiaohai">
                  <el-select v-model="form.region" placeholder="儿童">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                    <el-option label="3" value="3"></el-option>
                    <el-option label="4" value="4"></el-option>
                    <el-option label="5" value="5"></el-option>
                  </el-select>
                </div>
                <div id="age">（2-12岁）</div>
                <div id="soso">
                  <el-row>
                    <el-button type="info" plain id="sosoBtn">立即搜索</el-button>
                  </el-row>
                </div>
              </div>
            </div>
            <div id="platBox">
              地图
            </div>
          </el-tab-pane>
          <el-tab-pane label="景区特色" name="second">
            <!--线路特色 -->
            <div id="feature">
              <span>景区特色</span>
            </div>
            <div id="featureBox">
              <ul>
                <li><img src="../../../assets/nav1.png" style="margin-top: 5px;"></li>
                <li><img src="../../../assets/nav2.png"></li>
                <li><img src="../../../assets/nav3.png"></li>
                <li><img src="../../../assets/nav4.png"></li>
                <li><img src="../../../assets/nav5.png"></li>
                <li><img src="../../../assets/nav6.png"></li>
                <li><img src="../../../assets/nav7.png"></li>
                <li><img src="../../../assets/nav8.png"></li>
                <li><img src="../../../assets/nav9.png"></li>
                <li><img src="../../../assets/nav10.png"></li>
                <li><img src="../../../assets/nav11.png"></li>
                <li><img src="../../../assets/nav12.png"></li>
                <li><img src="../../../assets/nav13.png"></li>
                <li><img src="../../../assets/nav14.png"></li>
                <li><img src="../../../assets/nav15.png"></li>
                <li><img src="../../../assets/nav16.png"></li>
                <li><img src="../../../assets/nav17.png"></li>
                <li><img src="../../../assets/nav18.png"></li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="大众点评" name="third">
            <!-- 大众点评-->
            <div id="discussBox">
              <div id="discussNav">大众点评</div>
              <div id="discussTu">
                <img src="../../../assets/customized.png" alt="">
              </div>
              <div id="discussText" class="block">
                <span class="demonstration">评分：</span>
                <el-rate v-model="value" disabled show-score text-color="#ff9900"
                         score-template="{value}">
                </el-rate>
                <span class="demonstration">0条评论</span>
              </div>
              <el-row>
<!--                模态框-->
                <el-button type="text" plain id="dianBtn" @click="dialogFormVisible = true">写点评</el-button>
              </el-row>
            </div>
            <el-dialog title="大众点评" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="评分:" :label-width="formLabelWidth">
                    <el-rate v-model="value2" :colors="colors" id="pattDemon">
                  </el-rate>
                  <span id="pattern">点击星星进行评价</span>
                </el-form-item>
                <el-form-item label="评价:" :label-width="formLabelWidth" id="inpBox">
                  <el-input type="textarea" :rows="4" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item label="上传:" :label-width="formLabelWidth">
                  <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
            <div id="remark">
              <div class="fff">
                <el-row style="width: 100%;margin-top: -30px;">
                  <el-col :span="2" class="userInfo">
                    <span>mofnZ</span>
                  </el-col>
                  <el-col :span="2" class="addData">
                    <span>2020-9-21</span>
                  </el-col>
                  <el-col :span="4" class="markBox">
                    <el-rate v-model="value" disabled show-score
                             text-color="#ff9900"
                             score-template="{value}">
                    </el-rate>
                  </el-col>
                </el-row>
                <el-row class="neirong">
                  云南是一个适合来旅游的地方，第一天接机感觉接机小伙很不错，服务态度很好，
                  给我们安排的很好，我们也很满意，感觉很温馨，在云南玩的这段时间，深深的被这边的风景迷住，
                  也拍了很多的照片感觉很美丽，全程导游也不错的，也很幽默让我们有一个初步的了解，感觉很赞，
                  全程客服大美女随时都在关心我们，出门在外感觉很温馨，这几天，我们感觉很好！
                  <el-divider></el-divider>
                </el-row>
              </div>
              <div class="fff">
                <el-row style="width: 100%;margin-top: -30px;">
                  <el-col :span="2" class="userInfo">
                    <span>mofnZ</span>
                  </el-col>
                  <el-col :span="2" class="addData">
                    <span>2020-9-21</span>
                  </el-col>
                  <el-col :span="4" class="markBox">
                    <el-rate v-model="value" disabled show-score
                             text-color="#ff9900"
                             score-template="{value}">
                    </el-rate>
                  </el-col>
                </el-row>
                <el-row class="neirong">
                  泸沽湖湖水可清了，洱海的要稍微差一点。带我们的导游人挺好的，给我们介绍他们当地的一些云南当地的文化，
                  还有当地的一些民间故事，感觉很好。现在感觉还好，没有过度的开发，挺原生态的，自然风光不错。
                  云南的7天之行玩的很开心！
                  <el-divider></el-divider>
                </el-row>
              </div>
              <div class="fff">
                <el-row style="width: 100%;margin-top: -30px;">
                  <el-col :span="2" class="userInfo">
                    <span>mofnZ</span>
                  </el-col>
                  <el-col :span="2" class="addData">
                    <span>2020-9-21</span>
                  </el-col>
                  <el-col :span="4" class="markBox">
                    <el-rate v-model="value" disabled show-score
                             text-color="#ff9900"
                             score-template="{value}">
                    </el-rate>
                  </el-col>
                </el-row>
                <el-row class="neirong">
                  行程很不错，很喜欢在古城里的感觉，找一个小酒吧，坐在里面喝风花雪月，还可以上台去唱歌，又或者走在四方街，
                  看店里的人打鼓，行程中我感觉丽江是导游讲解的最赞的一段啦，
                  历史文化、风土人情、导游和工作人员讲解的都很好，很有文化历史背景，很有历史
                  内容，还能够很全面的了解白族人的生活习性，历史传说以及信仰，真的很赞
                  <el-divider></el-divider>
                </el-row>
              </div>
              <div class="fff">
                <el-row style="width: 100%;margin-top: -30px;">
                  <el-col :span="2" class="userInfo">
                    <span>mofnZ</span>
                  </el-col>
                  <el-col :span="2" class="addData">
                    <span>2020-9-21</span>
                  </el-col>
                  <el-col :span="4" class="markBox">
                    <el-rate v-model="value" disabled show-score
                             text-color="#ff9900"
                             score-template="{value}">
                    </el-rate>
                  </el-col>
                </el-row>
                <el-row class="neirong">
                  云南是一个适合来旅游的地方，第一天接机感觉接机小伙很不错，服务态度很好，
                  给我们安排的很好，我们也很满意，感觉很温馨，在云南玩的这段时间，深深的被这边的风景迷住，
                  也拍了很多的照片感觉很美丽，全程导游也不错的，也很幽默让我们有一个初步的了解，感觉很赞，
                  全程客服大美女随时都在关心我们，出门在外感觉很温馨，这几天，我们感觉很好！
                  <el-divider></el-divider>
                </el-row>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-main>
    <div>
      <publicF></publicF>
    </div>
  </el-container>
</div>
</template>
<script>
  import publicZ from "../public/publicZ";
  import publicF from '../public/public_foot';

  export default {
    data() {
      return {
        urls: [
          '../../../assets/nav1.png',
        ],
        // 出行路线
        input1: '',
        input2: '',
        select: '',
        // 评分
        value: 5.0,
        value2: null,
        colors: [
          '#99A9BF', '#F7BA2A', '#FF9900'
        ],
        // 选项卡
        activeIndex: '1',
        activeName: "first",
        // 模态框
        dialogTableVisible: false,
        dialogFormVisible: false,
        dialogImageUrl: '',
        dialogVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
      formLabelWidth: '120px',
      };
    },
    name:"Scenic",
    components: {
      publicZ,
      publicF,
    },
    methods: {
      // 模态框
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
    },
  }
</script>
<style scoped>
  p {
    margin: 0;
    padding: 0;
  }
  h2 {
    margin: 0;
    padding: 0;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  #app {
    display: inline;
  }
  /*导航栏*/
  #navigation {
    width: 100%;
    height: 50px;
    border: 1px solid black;
  }
  /*面包屑导航*/
  #crumbs {
    width: 100%;
    height: 30px;
    border: 2px solid #ff8300;
    background-color: #fffbf5;
  }
  .el-breadcrumb {
    font-size: 14px;
    line-height: 30px;
    margin-left: 20px;
  }
  /*卡片轮播*/
  #cardBox {
    float: left;
    width: 45%;
    height: 310px;
  }
  /*页头、页尾部分*/
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-breadcrumb {
    font-size: 12px;
  }
  .el-row {
    float: left;
  }
  .el-rate {
    float: left;
  }
  .el-upload-dragger {
    width: 393px;
  }
  /*轮播图*/
  .el-carousel__item:nth-child(2n+1) {
    background-image: url("../../../assets/scenic1.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .el-carousel__item:nth-child(3n+1) {
    background-image: url("../../../assets/scenic2.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .el-carousel__item:nth-child(4n+1) {
    background-image: url("../../../assets/scenic3.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .el-carousel__item:nth-child(5n+1) {
    background-image: url("../../../assets/scenic4.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .el-carousel__item:nth-child(6n+1) {
    background-image: url("../../../assets/scenic5.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  #benner {
    margin-top: 10px;
    margin-left: 10px;
  }
  /*景点介绍部分*/
  #navBox {
    float: left;
    width: 53%;
    height: 30px;
    margin-left: 20px;
  }
  /*景点名称*/
  #navTitle {
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 30px;
  }
/*景点特色*/
  #tese {
    float: left;
    width: 53%;
    height: 100px;
    margin-left: 20px;
  }
  #tese li {
    text-align: left;
    margin-left: 20px;
    margin-top: 2px;
  }
  .teseNav {
    float: left;
    color: #FF8300;
  }
  /*景点价格*/
  #rateBox {
    float: left;
    width: 53%;
    height: 60px;
    margin-left: 20px;
    border: 1px dashed #FF8300;
    background-color: #FFFDF5;
    text-align: left;
    line-height: 60px;
  }
  #rate {
    font-size: 25px;
    color: #FF4600;
    margin-left: 15px;
  }
  #ren {
    font-size: 13px;
    color: #FF4600;
  }
  #ertong {
    font-size: 13px;
  }
  #qijia {
    font-size: 13px;
    color: #DCDFE6;
    margin-left: 10px;
  }
  #pingfen {
    width: 10%;
    height: 20px;
  }
  /*产品信息*/
  #product {
    float: left;
    width: 53%;
    height: 210px;
    margin-left: 20px;
    text-align: left;
  }
  #product li {
    font-size: 13px;
    color: #999999;
    margin-top: 10px;
    margin-left: 20px;
  }
  .chanpin {
    margin-left: 10px;
  }
  #fuwu {
    margin-top: 20px;
    border-top: 1px dashed #B3B5B3;
  }
  .renzheng {
    margin: 0;
    padding: 0;
    font-size: 12px;
    margin-left: 10px;
    border: 1px solid transparent;
  }
  /*自驾游路线规划*/
  #driving {
    float: left;
    width: 99%;
    height: 80px;
    margin-top: 20px;
    border: 2px solid #FF8300;
    background-color: #fffbf5;
  }
  #drivingNav {
    width: 20%;
    height: 50px;
    font-size: 28px;
    color: #FF8300;
    line-height: 50px;
  }
  #drivingTu {
    width: 20%;
    height: 28px;
  }
  #drivText {
    width: 40%;
    height: 30px;
    font-size: 21px;
    position: relative;
    bottom: 0;
    top: -50px;
    left: 350px;
  }
  #pathBtn {
    background-color: red;
    width: 218px;
    height: 50px;
    font-size: 20px;
    position: relative;
    bottom: 0;
    left: 470px;
    top: -94px;
  }
  #jump {
    text-decoration: none;
    color: #fff;
  }
  /*出行路线*/
  #plan {
    float: left;
    width: 100%;
    height: 30px;
    font-size: 20px;
    text-align: left;
    line-height: 25px;
    margin-top: 20px;
    border-bottom: 3px solid #B3B5B3;
  }
  #plan span {
    margin-left: 20px;
  }
  #planBox {
    float: left;
    width: 60%;
    height: 330px;
    margin-top: 20px;
    border: 5px solid #FF8300;
  }
  #planLine {
    width: 94%;
    height: 285px;
    margin-top: 20px;
    margin-left: 20px;
    border: 2px solid #FF8300;
  }
  #platBox {
    float: left;
    width: 38%;
    height: 338px;
    margin-top: 20px;
    margin-left: 10px;
    background-image: url("../../../assets/advertis.jpg");
  }
  /*选项卡功能*/
  #xuanze {
    float: left;
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
  #start {
    float: left;
    width: 40%;
    height: 40px;
    margin-left: 60px;
    margin-top: 40px;
  }
  #bourn {
    float: left;
    width: 40%;
    height: 40px;
    margin-left: 25px;
    margin-top: 40px;
  }
  #startTime {
    float: left;
    width: 40%;
    height: 40px;
    margin-left: 60px;
    margin-top: 20px;
  }
  #bournTime {
    float: left;
    width: 40%;
    height: 40px;
    margin-left: 25px;
    margin-top: 20px;
  }
  #renshu {
    float: left;
    width: 18%;
    height: 40px;
    margin-left: 60px;
    margin-top: 20px;
  }
  #xiaohai {
    float: left;
    width: 18%;
    height: 40px;
    margin-left: 27px;
    margin-top: 20px;
  }
  #age {
    float: left;
    font-size: 14px;
    margin-top: 32px;
  }
  #sosoBtn {
    background-color: red;
    width: 218px;
    height: 50px;
    font-size: 20px;
    color: #fff;
    margin-top: 20px;
    margin-left: 25px;
  }
  /*线路特色*/
  #feature {
    float: left;
    width: 100%;
    height: 30px;
    font-size: 20px;
    text-align: left;
    line-height: 25px;
    margin-top: 20px;
    border-bottom: 3px solid #B3B5B3;
  }
  #featureBox {
    float: left;
    width: 80%;
    height: auto;
    margin-top: 20px;
    border: 2px solid #B3B5B3;
  }
  #featureBox li {
    margin-top: -4px;
  }
  /*大众点评*/
  #discussBox {
    float: left;
    width: 99%;
    height: 80px;
    margin-top: 20px;
    border: 2px solid #FF8300;
    background-color: #fffbf5;
  }
  #discussNav {
    width: 20%;
    height: 50px;
    font-size: 28px;
    color: #FF8300;
    line-height: 50px;
  }
  #discussTu {
    width: 20%;
    height: 28px;
  }
  #discussText {
    width: 35%;
    height: 30px;
    font-size: 21px;
    position: relative;
    bottom: 0;
    top: -50px;
    left: 350px;
  }
  #dianBtn {
    background-color: red;
    width: 218px;
    height: 50px;
    font-size: 20px;
    color: #fff;
    position: relative;
    bottom: 0;
    left: 980px;
    top: -94px;
  }
  .demonstration {
    float: left;
    font-size: 15px;
    line-height: 27px;
    margin-left: 20px;
  }
  #remark {
    width: 100%;
    height: auto;
  }
  .remarkBox {
    margin-top: 10px;
  }
  .userInfo {
    margin-top: 50px;
    margin-left: 20px;
  }
  .addData {
    width: 20%;
    height: 20px;
    margin-left: -100px;
    margin-top: 50px;
    font-size: 13px;
  }
  .markBox {
    margin-top: 50px;
    margin-left: -60px;
  }
  .userMark {
    float: left;
    text-align: left;
    width: 87%;
    margin-top: -11px;
    margin-left: 78px;
    font-size: 15px;
  }
  .neirong {
    text-align: left;
    width: 93%;
    margin-left: 50px;
  }
  /*模态框*/
  .textarea {
    width: 40%;
    height: 80px;
  }
  #inpBox {
    width: 80%;
  }
  #pattern {
    font-size: 13px;
    margin-left: -200px;
    color: #B3B5B3;
  }
  #pattDemon {
    margin-top: 10px;
  }
  .upload-demo {
    width: 75%;
  }
</style>
