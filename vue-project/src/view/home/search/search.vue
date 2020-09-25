<template>
  <el-container>
    <!--头部公共区-->
    <el-header>

    </el-header>
    <!--  面包屑导航-->
    <el-row>
      <div id="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/search' }">索引页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    </el-row>
    <el-row>
      <!--搜索框-->
      <div class="searchPart">
      <input type="text" class="SearchBox"  placeholder="请输入目的地、主题或关键词">
      <div id="shoSuo">
        <i id="sSanNiu"></i>
      </div>
    </div>
    </el-row>
    <el-row>
      <!--联动部分-->
      <div class="linkagePart">
        <div class="left">
          <!--头部栏-->
          <ul class="tab " id="type-box"><li data-value="all" class="active">
            <a href="javascript:void(0);" class="box">
              <span class="nm">全部<em class="num">(2200)</em></span>
              <i class="line"></i>
            </a>
          </li>
            <li title="北京到厦门" data-value="travel">
              <a href="javascript:void(0);" class="box">
                <span class="nm">北京到厦门<em class="num">(935)</em></span>
                <i class="line"></i>
              </a>
            </li>
            <li title="厦门当地游" data-value="around">
              <a href="javascript:void(0);" class="box">
                <span class="nm">厦门当地游<em class="num">(1265)</em></span>
                <i class="line"></i>
              </a>
            </li>
            <li data-value="subject">
              <a href="javascript:void(0);" class="box">
                <span class="nm">主题游<em class="num">(8)</em></span>
                <i class="line"></i>
              </a>
            </li>
          </ul>
          <!--列表-->
          <div class="linkageTatbl">
            <div class="details">
              <span class="problem">搜索类型</span>
              <ul class="xuanxiang">
                <li class="neiron"><input type="checkbox">酒店</li>
                <li class="neiron"><input type="checkbox">景点</li>
              </ul>
            </div>
            <div class="details">
              <span class="problem">旅游时间</span>
              <ul class="xuanxiang">
                <li class="neiron"><input type="checkbox">不限</li>
                <li class="neiron"><input type="checkbox">1天</li>
                <li class="neiron"><input type="checkbox">2天</li>
                <li class="neiron"><input type="checkbox">3天</li>
                <li class="neiron"><input type="checkbox">4天</li>
                <li class="neiron"><input type="checkbox">5天</li>
              </ul>
            </div>
            <div class="details">
              <span class="problem">旅游费用</span>
              <ul class="xuanxiang">
                <li class="neiron"><input type="checkbox">不限</li>
                <li class="neiron"><input type="checkbox">1000以下</li>
                <li class="neiron"><input type="checkbox">1000-1500</li>
                <li class="neiron"><input type="checkbox">1500-2000</li>
                <li class="neiron"><input type="checkbox">2000-2500</li>
                <li class="neiron"><input type="checkbox">2500-3000</li>
              </ul>
            </div>
            <div class="details">
              <span class="problem">旅游距离</span>
              <ul class="xuanxiang">
                <li class="neiron"><input type="checkbox">不限</li>
                <li class="neiron"><input type="checkbox">最近</li>
                <li class="neiron"><input type="checkbox">最优</li>
              </ul>
            </div>
            <div class="details">
              <span class="problem">出行方式</span>
              <ul class="xuanxiang">
                <li class="neiron"><input type="checkbox">不限</li>
                <li class="neiron"><input type="checkbox">跟团游</li>
                <li class="neiron"><input type="checkbox">自驾游</li>
                <li class="neiron"><input type="checkbox">半自助游</li>
                <li class="neiron"><input type="checkbox">包车游</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="smallBox">
              <span class="titltTxt">为你推荐</span>
              <span class="ckgd">查看更多</span>
              <img src="../../../assets/img/u.jpg" alt="" class="smallImg">
              <span class="wenzi">云南特惠</span>
            <img src="../../../assets/img/u.jpg" alt="" class="smallImg">
            <span class="wenzi">云南特惠</span>
            <img src="../../../assets/img/u.jpg" alt="" class="smallImg">
            <span class="wenzi">云南特惠</span>
            <img src="../../../assets/img/u.jpg" alt="" class="smallImg">
          </div>
          <div class="smallBox">
            <span class="titltTxt">热门景点</span>
            <span class="ckgd">查看更多</span>
            <img src="../../../assets/img/u.jpg" alt="" class="smallImg">
            <span class="wenzi">云南特惠</span>
            <img src="../../../assets/img/u.jpg" alt="" class="smallImg">
            <span class="wenzi">云南特惠</span>
            <img src="../../../assets/img/u.jpg" alt="" class="smallImg">
            <span class="wenzi">云南特惠</span>
            <img src="../../../assets/img/u.jpg" alt="" class="smallImg">
          </div>
        </div>
      </div>
    </el-row>
    <el-row>
      <!--结果-->
      <div class="result">
        <div class="head">
          <span class="jieguo">
            <span class="num">123</span>
            <span class="guding">个产品满足条件</span>
          </span>
        </div>
        <div class="gudungqu">
          <p class="paixu">
            <span>评分</span>
            <span>收藏量</span>
            <span>浏览量</span>
          </p>
        </div>
        <div class="resultbf">
          <div class="jutixq">
            <div class="imgXqBox">
              <img src="../../../assets/img/5a.jpg" class="imgXq">
              <span class="type">一日游</span>
            </div>
            <div class="wenziBox">
              <div class="headWenzi">
                <span class="biaoti">探秘千年古城！厦门+鼓浪屿+泉州少林寺+洛阳桥4日 打卡网红醉美转角笔山公园</span>
              </div>
              <div class="infoBox">
                <ul class="infodl">
                  <li class="c" >
                    <span class="txt ">北京出发</span>
                    <i class="divide">|</i>
                    <span class="txt">4天3晚</span>
                  </li>
                  <li class="c">
                    <span class="txt">飞机往返  (含税)</span>
                  </li>
                  <li class="c">
                    <span class="txt red">国庆</span>
                    <i class="divide">|</i>
                    <span class="txt">低价团期: 2020-09-24 出行</span>
                    <span class="txt">
                      <a href="/?ts=1600715323654_925&amp;tp=1600701051371_468" target="_blank" class="js-trigger-open hide">
                        <!--<span class="js-trigger-open-content">团期日历</span>-->
                      </a>
                      <div class="js-check-calendar price-calendar">全部团期
                        <span class="arrow"></span>
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="price">
              <span class="js_djCount" >
                <i class="yen">¥</i>
                <span class="va">2010</span>
                <span class="pt">起/人</span>
                <span class="arr"><i class="ao"></i><i class="ai"></i></span>
              </span>
              <div class="evaluate">
                <div class="integral">
                  <var>10.0</var>
                  <em>分</em>
                </div>
                <div class="discuss">
                  <em>已售 436</em>
                  <a class="js_djCount discuss-info">130 条点评<small>&gt;</small></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="resultbf">
          <div class="jutixq">
            <div class="imgXqBox">
              <img src="../../../assets/img/5a.jpg" class="imgXq">
              <span class="type">一日游</span>
            </div>
            <div class="wenziBox">
              <div class="headWenzi">
                <span class="biaoti">探秘千年古城！厦门+鼓浪屿+泉州少林寺+洛阳桥4日 打卡网红醉美转角笔山公园</span>
              </div>
              <div class="infoBox">
                <ul class="infodl">
                  <li class="c" >
                    <span class="txt ">北京出发</span>
                    <i class="divide">|</i>
                    <span class="txt">4天3晚</span>
                  </li>
                  <li class="c">
                    <span class="txt">飞机往返  (含税)</span>
                  </li>
                  <li class="c">
                    <span class="txt red">国庆</span>
                    <i class="divide">|</i>
                    <span class="txt">低价团期: 2020-09-24 出行</span>
                    <span class="txt">
                      <a href="/?ts=1600715323654_925&amp;tp=1600701051371_468" target="_blank" class="js-trigger-open hide">
                        <!--<span class="js-trigger-open-content">团期日历</span>-->
                      </a>
                      <div class="price-calendar" data-id="1284236982" data-tuid="">全部团期
                        <span class="arrow"></span>
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="price">
              <span class="js_djCount" >
                <i class="yen">¥</i>
                <span class="va">2010</span>
                <span class="pt">起/人</span>
                <span class="arr"><i class="ao"></i><i class="ai"></i></span>
              </span>
              <div class="evaluate">
                <div class="integral">
                  <var>10.0</var>
                  <em>分</em>
                </div>
                <div class="discuss">
                  <em>已售 436</em>
                  <a class="js_djCount discuss-info">130 条点评<small>&gt;</small></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="resultbf">
          <div class="jutixq">
            <div class="imgXqBox">
              <img src="../../../assets/img/5a.jpg" class="imgXq">
              <span class="type">一日游</span>
            </div>
            <div class="wenziBox">
              <div class="headWenzi">
                <span class="biaoti">探秘千年古城！厦门+鼓浪屿+泉州少林寺+洛阳桥4日 打卡网红醉美转角笔山公园</span>
              </div>
              <div class="infoBox">
                <ul class="infodl">
                  <li class="c" >
                    <span class="txt ">北京出发</span>
                    <i class="divide">|</i>
                    <span class="txt">4天3晚</span>
                  </li>
                  <li class="c">
                    <span class="txt">飞机往返  (含税)</span>
                  </li>
                  <li class="c">
                    <span class="txt red">国庆</span>
                    <i class="divide">|</i>
                    <span class="txt">低价团期: 2020-09-24 出行</span>
                    <span class="txt">
                      <a href="/?ts=1600715323654_925&amp;tp=1600701051371_468" target="_blank" class="js-trigger-open hide">
                        <!--<span class="js-trigger-open-content">团期日历</span>-->
                      </a>
                      <div class="js-check-calendar price-calendar">全部团期
                        <span class="arrow"></span>
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
              <div class="taggroup">
                <span class="tiptag">
                  <span class="tagnm-b" title="">特色客栈</span>
                </span>
              </div>
            </div>
            <div class="price">
              <span class="js_djCount" >
                <i class="yen">¥</i>
                <span class="va">2010</span>
                <span class="pt">起/人</span>
                <span class="arr"><i class="ao"></i><i class="ai"></i></span>
              </span>
              <div class="evaluate">
                <div class="integral">
                  <var>10.0</var>
                  <em>分</em>
                </div>
                <div class="discuss">
                  <em>已售 436</em>
                  <a class="js_djCount discuss-info">130 条点评<small>&gt;</small></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-row>
    <el-footer>
      <div class="public2" >
        <h1>底部公共部分</h1>
      </div>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  name: 'search'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*  text-align: center;*/
    color: #2c3e50;
    /*  margin-top: 60px;*/
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
  .clean{
    clear: left;
  }
  .searchPart{
    text-align: center;
    width: 100%;
  }
  .SearchBox{
    width: 37%;
    height: 40px;
  }
  .public2{
    border: 1px solid;
    height: 60px;
    width: 100%
  }
  .anNiu i{
    /*background-position: -60px -140px!important;*/
    float: left;
    margin: 3px 5px 0 0;
    width: 16px;
    height: 16px;
    background-image: url(../../../assets/img/qqwx.jpg);
    background-position: -60px -110px!important;
  }
  #shoSuo{
    height: 46px;
    display: inline-block;
    width: 46px;
    background: linear-gradient(116deg,#00d0d4 5%,#00c5c3 51%,#9effa4 100%);
    border-radius: 4px;
    vertical-align: top
  }
  #sSanNiu{
    display: inline-block;
    margin-top: 11px;
    width: 24px;
    height: 24px;
    background-image: url(../../../assets/img/qqwx.jpg);
    background-position: 0 -110px!important;
    /* overflow: hidden; */
  }
  .linkagePart{
    width: 90%;
    height: 300px;
    background: #fff;
    margin-left: 5%;
/*    border: 1px solid red;*/
  }
  .left{
    width: 75%;
    height: 100%;
    padding: 0 0;
    margin: 0 0;
    float: left;
/*    border: 1px solid blueviolet;*/
  }
  .right{
    width: 270px;
    height: 900px;
    display: inline-block;
  }
  .tab {
    display: block;
    background: #00afc7;
    height: 38px;
    list-style: none;
    margin: 0 0;
  }
  .tab li {
    float: left;
    display: inline-block;
  }
  .tab li a {
    float: left;
    display: block;
    zoom: 1;
    padding: 10px 0;
    height: 16px;
    border: 1px solid #00afc7;
    color: #fff;
    text-decoration: none;
    font: bold 14px/16px \5fae\8f6f\96c5\9ed1,"helvetica light",sans-serif;
  }
  .tab li a span {
    border-left: 1px solid #4dc7d8;
    padding: 0 19px;
  }
  .tab li.active a .line {
    display: block;
    width: 100%;
    height: 3px;
    font-size: 0;
    overflow: hidden;
    border: 1px solid #ddd;
    border-bottom: 0;
    border-radius: 2px 2px 0 0;
    position: absolute;
    top: -5px;
    left: -1px;
    background: #0089a1;
  }
  .tab li.active a span {
    border-left-color: #fff;
  }
  .linkageTatbl{
    width: 100%;
    height: 262px;
    background: #fff;
    border: 1px solid #ddd;
  }
  .details{
    width: 100%;
    height: 38px;
/*    border: 1px solid;*/
    padding: 0 0;
    margin: 0 0;
    float: left;
  }
  .problem{
    float: left!important;
    padding-top: 7px;
  }
  .xuanxiang{
    list-style: none;
    float: left;
    margin: 0 0;
    /* padding: 0 0; */
    width: 70%;
    height: 31px;
    padding-top: 8px;
    text-align: center;
  }
  .neiron{
    float: left;
    width: 110px;
  }
  .result{
    margin-left: 5%;
    width: 67%;
    height: 700px;
    border: 1px solid blue;
  }
  .smallBox{
    width: 100%;
    height: 500px;
  }
  .titltTxt{
    font-size: 18px;
    float: left;
  }
  .ckgd{
    font-size: 12px;
    float: right;
  }
.smallImg{
  width: 270px;
  height: 100px;
}
  .wenzi{
    font-size: 12px;
    float: left;
  }
  .head{
    width: 100%;
    height: 50px;
    background-color: #e2e2e2;
  }
  .jieguo{
    width: 150px;
    height: 80%;
    text-align: center;
    float: left;
    margin-top: 10px;
  }
  .num{
    color: #ff714a;
  }
  .gudungqu{
    width: 100%;
    height: 20px;
    float: left;
  }
  .paixu{
    width: 100%;
    height: 20px;
    float: left;
    margin: 0 0;
    padding: 0 0;
    text-align: left;
  }
  .resultbf{
    height: 152px;
    clear: left;
  }
  .jutixq{
    width: 100%;
    height: 150px;
    border: 1px solid #e2e2e2;
  }
  .imgXqBox{
    position: relative;
    float: left;
    width: 150px;
    height: 100px;
    padding: 6px 16px 0 0;
  }
  .imgXq{
    width: 150px;
    height: 100px;
  }
  .type{
    color: darkblue;
  }
  .headWenzi{
    height: 25px;
    text-align: left;
    width: 100%;
  }
  .wenziBox{
    height: 100%;
    vertical-align: top;
    display: inline-block;
  }
  .biaoti{
    color: #00bcd4;
  }

  .infoBox {
    float: left;
    width: 100%;
  }
  .infodl{
    list-style: none;
    text-align: left;
    margin: 0 0;
    padding: 0 0;
  }
  .c{
    font-size: 0;
    line-height: 20px;
    color: #333;
    position: relative;
    text-align: left;
    margin: 0 0;
    padding: 0 0;
  }
  .txt {
    white-space: nowrap;
  }
  .c * {
    font-size: 12px;
  }
  .divide {
    margin: 0 5px;
    height: 10px;
    width: 1px;
    overflow: hidden;
    background: #ddd;
    color: #ddd;
  }
  .price {
    text-align: right;
    color: #ff3d00;
    line-height: 1;
    vertical-align: top;
    display: inline-block;
    width: 151px;
    height: 150px;
    float: right;
  }
  .yen {
    font-family: Arial,sans-serif;
    font-size: 18px;
    font-style: normal;
    bottom: -3px;
  }
  .evaluate {
    width: 150px;
    margin-top: 15px;
    padding: 4px 0;
    height: 30px;
    background: #f8f8f8;
    /* position: absolute; */
    /* right: 0; */
    float: right;
    margin-right: 1px;
  }
  .integral {
    width: 58px;
    height: 31px;
    border-right: 1px solid #e2e2e2;
    float: left;
    text-align: center;
    padding: 2px 0 0 0;
  }
  .integral var {
    font-size: 16px;
    top: 2px;
    position: relative;
    color: #000;
    font-weight: bold;
  }
  .integral em {
    color: #666;
    font-size: 12px;
    padding-top: 6px;
    padding-left: 1px;
    position: absolute;
  }
  .discuss {
    width: 77px;
    height: 33px;
    float: left;
    color: #666;
    font-size: 14px;
    float: left;
  }
  .js_djCount{
    float: right;
  }
  .price-calendar {
    margin-left: 10px;
    color: #000;
    cursor: pointer;
    white-space: normal;
    width: 70px;
    display: inline;
  }
  .red{
    color: red;
  }
  .taggroup {
    font-size: 0;
    padding-top: 3px;
    width: 500px;
    height: 18px;
  }
  .tiptag {
    position: relative;
    cursor: default;
  }
  .tagnm-b {
    background: #fff;
    border-color: #00bcd4;
    color: #00bcd4;
  }
  /*头部*/
  #topBg {
    width: 100%;
    height: 70px;
    color: #000;
    line-height: 70px;
    background-repeat: no-repeat;
  }
  /*下拉菜单*/
  .el-dropdown-link {
    cursor: pointer;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
