<template>
  <el-container>
    <el-header>

    </el-header>
    <el-row>
      <!--  面包屑导航-->
      <div id="crumbs">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index' }">北京酒店</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/index' }">北京瑰丽酒店</el-breadcrumb-item>
          <el-breadcrumb-item>酒店详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    <el-row>
      <div class="imgBox">
      <!--  轮播图功能-->
      <div class="leftPart">
          <!--轮播图-->
          <div class="grid-content bg-purple" id="benner">
            <template>
              <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="item in 4" :key="item">
                </el-carousel-item>
              </el-carousel>
            </template>
          </div>
        <div class="cardBoxfoot">
          <p class="sc">☆收藏酒店</p>
        </div>
      </div>

      <div class="rightPart">
        <div class="rightTop" style="padding: 15px 0;">
          <div class="comm_box clearfix">
            <p class="total">
              98%好评 <!-- -->3109条评论 <!-- -->29条问答
              <span class="iconfont">></span>
            </p>
            <div class="score_box">
              <p class="score">
                4.7
                <span class="spec">分</span>
              </p>
              <p class="desc">很好</p>
            </div>
          </div>
          <ul class="comm_list clearfix">
            <li class="item">服务贴心</li>
            <li class="item">早餐很赞</li>
            <li class="item">环境舒适</li>
          </ul>
          <ul class="comm_list">
            <li class="item1">√停车服务</li>
            <li class="item1">√停车服务</li>
            <li class="item1">√停车服务</li>
          </ul>
          <p class="decro">
            <span>开业时间：
            <span class="date">2014年</span>
            </span>
          </p>
        </div>
        <div class="rightDown">
          <h3>地图</h3>
        </div>
      </div>
    </div>
    </el-row>
      <el-row>
        <div>
        <div class="tab_box "><div>
          <div class="tab_bar">
            <div class="cont clearfix">
              <a href="javascript:void(0)" class="item cur" @click="goAnchor('#contone')">
                <span class="inner">房型预订</span>
              </a>
              <a href="javascript:void(0)" class="item" @click="goAnchor('#conttwo')">
                <span class="inner">位置交通</span>
              </a>
              <a href="javascript:void(0)" class="item" @click="goAnchor('#contthree')">
                <span class="inner">酒店详情</span>
              </a>
              <a href="javascript:void(0)" class="item" @click="goAnchor('#contfour')">
                <span class="inner">点评问答</span>
              </a>
 <!--             <el-tabs>

                <el-tab-pane label="房型预订"  @click="goAnchor('#contone')"></el-tab-pane>

                <el-tab-pane label="位置交通"  @click="goAnchor('#conttwo')"></el-tab-pane>

                <el-tab-pane label="酒店详情"  @click="goAnchor('#contthree')"></el-tab-pane>

                <el-tab-pane label="点评问答"  @click="goAnchor('#contfour')"></el-tab-pane>

              </el-tabs>-->
            </div>
          </div>
        </div>
          <section class="G_section_1200 patch_MB20 G_blockBG G_blockBG_bott" id="contone">
            <div class="searchWrapper">
              <div class="live_box clearfix">
                <div style="float:left;position:relative">
                  <div class="G_input clearfix">
                    <div class="live clearfix input_container">
                      <div class="check">
                        <span class="icon iconfont"></span>
                        <span class="name">入住</span>
                        <div class="text clearfix">
                          <input type="date" class="inputText date" tabindex="2" maxlength="10" value="2020-09-20" v-model="input1">
                          <span class="week">今天</span>
                        </div>
                      </div>
                      <div class="check">
                        <span class="icon iconfont"></span>
                        <span class="name">离店</span>
                        <div class="text clearfix">
                          <input type="date" class="inputText date" tabindex="3" maxlength="10" value="2020-09-21" v-model="input2">
                          <span class="week">明天</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span class="desc fl_left">共<!-- -->1<!-- -->晚</span>
                <span class="btn fl_left researchBtn">重新搜索</span>
              </div>
            </div>
            <div class="poi_tab">
              <div class="boolToolWrapper">
                <div class="room_sele clearfix"></div>
                <div class="room_type clearfix">
                  <div class="item fl_left clearfix">
                    <span class="name">床型</span>
                    <span class="sele ">大床</span>
                    <span class="sele ">双床</span>
                    <span class="sele ">单人床</span>
                  </div>
                  <div class="item fl_left clearfix">
                    <span class="name">早餐</span>
                    <span class="sele ">无餐食</span>
                    <span class="sele ">含早餐</span>
                  </div>
                  <div class="item fl_left clearfix">
                    <span class="name">支付方式</span>
                    <span class="sele ">到店支付</span>
                    <span class="sele ">在线支付</span>
                  </div>
                  <div class="item fl_left clearfix">
                    <span class="name">取消方式</span>
                    <span class="sele ">免费取消</span>
                  </div>
                  <div class="item fl_left clearfix">
                    <span class="name">窗户</span>
                    <span class="sele ">有窗</span>
                  </div>
                  <div class="item fl_left clearfix">
                    <span class="name">wifi</span>
                    <span class="sele ">免费wifi</span>
                  </div>
                </div>
                <div class="G_typeBox clearfix">
                  <span class="room fl_left">房型</span>
                  <span class="bed fl_left">床型</span>
                  <span class="breadfast fl_left">早餐</span>
                  <span class="man fl_left">入住人数</span>
                  <span class="gov fl_left">政策</span>
                  <span class="price fl_left">房价</span>
                </div>
                <div class="hotel_type_item clearfix">
                  <div class="hotel_main fl_left clearfix">
                    <div class="img_box">
                      <img alt="物理房型图片" src="../../../assets/img/2.jpg">
                      <span class="img_num">3张</span>
                    </div>
                    <div class="names">
                      <div class="words">豪华大床房</div>
                      <div class="roomInforList" style="cursor: default;">45-50㎡ 1张1.8m大床 有窗 </div>
                      <div class="infor">查看详情
                        <span class="iconfont">↓</span>
                      </div>
                    </div>
                  </div>
                  <div class="G_bedType fl_right">
                    <div class="subj clearfix">
                      <div class="bed_area sub_item">
                        <div class="name">大床</div>
                        <div class="tags clearfix"></div>
                      </div>
                      <div class="bread_fast sub_item" style="color: rgb(33, 33, 33);">无餐食</div>
                      <div class="man sub_item" style="cursor: default;">
                        <span class="iconfont">1</span>
                      </div>
                      <div class="gov sub_item" style="position: relative;">
                        <p class="normal">
                          <span class="gov_words" style="color: rgb(33, 33, 33); cursor: default;">取消扣全款</span>
                        </p>
                        <p class="normal">
                          <span class="gov_words" style="color: rgb(0, 202, 216); cursor: default;">立即确认</span>
                        </p>
                      </div>
                      <div class="price_box sub_item">
                        <div class="price_new clearfix" style="display: flex; align-items: center; justify-content: flex-end; margin-top: 4px; border-bottom: 0px;">
                          <div style="border-bottom: 1px dotted rgb(255, 112, 74); margin-left: 4px; white-space: nowrap;">
                            <span class="y" style="color: rgb(255, 112, 74);">¥</span>
                            <span style="color: rgb(255, 112, 74); cursor: default;">1946</span>
                          </div>
                        </div>
                      </div>
                      <div class="btn_order sub_item">
                        <p class="btn_item">预订•
                          <span class="type">在线付</span>
                        </p>
                      </div>
                    </div>
                    <div class="subj clearfix">
                      <div class="bed_area sub_item">
                        <div class="name">大床</div>
                        <div class="tags clearfix"></div>
                      </div>
                      <div class="bread_fast sub_item" style="color: rgb(0, 202, 216);">1份早餐</div>
                      <div class="man sub_item" style="cursor: default;">
                        <span class="iconfont">2</span>
                      </div>
                      <div class="gov sub_item" style="position: relative;">
                        <p class="normal">
                          <span class="gov_words" style="color: rgb(33, 33, 33); cursor: default;">取消扣全款</span>
                        </p>
                        <p class="normal">
                          <span class="gov_words" style="color: rgb(33, 33, 33); cursor: default;">约15分钟确认</span>
                        </p>
                      </div>
                      <div class="price_box sub_item">
                        <div class="price_new clearfix" style="display: flex; align-items: center; justify-content: flex-end; margin-top: 4px; border-bottom: 0px;">
                          <div style="border-bottom: 1px dotted rgb(255, 112, 74); margin-left: 4px; white-space: nowrap;">
                            <span class="y" style="color: rgb(255, 112, 74);">¥</span>
                            <span style="color: rgb(255, 112, 74); cursor: default;">2067</span>
                          </div>
                        </div>
                      </div>
                      <div class="btn_order sub_item">
                        <p class="btn_item">预订•<span class="type">在线付</span></p>
                      </div>
                    </div>
                    <div class="subj clearfix">
                      <div class="bed_area sub_item">
                        <div class="name">大床</div>
                        <div class="tags clearfix"></div>
                      </div>
                      <div class="bread_fast sub_item" style="color: rgb(0, 202, 216);">2份早餐</div>
                      <div class="man sub_item" style="cursor: default;">
                        <span class="iconfont">2</span>
                      </div>
                      <div class="gov sub_item" style="position: relative;">
                        <p class="normal">
                          <span class="gov_words" style="color: rgb(33, 33, 33); cursor: default;">取消扣全款</span>
                        </p>
                        <p class="normal">
                          <span class="gov_words" style="color: rgb(33, 33, 33); cursor: default;">约15分钟确认</span>
                        </p>
                      </div>
                      <div class="price_box sub_item">
                        <div class="price_new clearfix" style="display: flex; align-items: center; justify-content: flex-end; margin-top: 4px; border-bottom: 0px;">
                          <div style="border-bottom: 1px dotted rgb(255, 112, 74); margin-left: 4px; white-space: nowrap;">
                            <span class="y" style="color: rgb(255, 112, 74);">¥</span>
                            <span style="color: rgb(255, 112, 74); cursor: default;">2067</span>
                          </div>
                        </div>
                      </div>
                      <div class="btn_order sub_item">
                        <p class="btn_item">预订•<span class="type">在线付</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      </el-row>
    </el-row>
    <el-row>
      <div class="mapBox" id="conttwo" >
        <div class="mapLefe" >
          <p style="font-size: 26px;padding: 0;margin: 0;text-align: left;">位置交通</p>
          <div class="map" style="width: 60%;height: 300px;border: 1px solid;display: inline-block;">
            <span>地图接口</span>
          </div>
          <div class="jiaoton" style="width: 39%;border: 1px solid;height: 300px;float: right;display: inline-block;vertical-align: top;">

          </div>
        </div>
        <div class="mapright">
          <p>浏览记录</p>
          <ul class="history_box patch_MB20 history_detail">
            <li class="item"><div class="outter">
              <a href="/cn/beijing_city/dt-23394/" title="北京瑰丽酒店" class="inner clearfix">
                <span class="close iconfont"></span>
                <img alt="北京瑰丽酒店" class="hotel_img" src="https://userimg.qunarzz.com/imgs/201812/12/C._M0DCii9a-kvyicki120.jpg">
                <div class="cont1">
                  <p class="name text-elli-one">北京瑰丽酒店</p>
                  <p class="infor">
                    <span >4.7</span>分
                    <span class="comm">3113条评论</span>
                  </p>
                  <p class="price">
                    <span class="y rmb">¥</span>2332
                    <span class="qi">起</span>
                  </p>
                </div>
              </a>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </el-row>
    <el-row>
      <div class="xqq" id="contthree">
        <div class="xq" style="border: 1px solid;width: 80%;display: inline-block;margin-left: -1%;">
          <h3 style="float:left;">酒店详情</h3>
          <!--列表-->
          <div class="linkageTatbl">
            <div class="details" >
              <div class="fuwuName">
                <span class="name1">酒店亮点</span>
              </div>

              <div class="juti">
                <span class="words">内部采用花园式设计，拥有绿植环绕的露天泳池。地处国贸商务中心，方便商旅出行与商务合作。 备品优质，允许携带宠物入住。</span>
              </div>
            </div>
            <div class="details" >
              <div class="fuwuName">
                <span class="name1">联系方式</span>
              </div>
              <div class="juti">
                <span class="words">010-65978888</span>
              </div>
            </div>
            <div class="details" >
              <div class="fuwuName">
                <span class="name1">酒店简介</span>
              </div>
              <div class="juti">
                <span class="words">北京瑰丽酒店坐落于北京朝阳区中心位置，正对京城地标——中央电视台，出行便利。酒店拥有两百余间客房，设有6间餐厅和酒廊，包括怡庭餐厅、怡庭大堂吧、“赤”时尚火锅餐厅、休闲酒吧-魅、乡味小厨中餐厅和龙庭私人宴会中餐厅。酒店的会议及宴会场地占地近2,750平方米，包括一间无柱式大宴会厅及具住宅风格的会议与活动场所丽府。首次于亚洲亮相的Sense水疗中心设有室内泳池、健身房、瑜伽室等设施，另尊贵的行政廊瑞阁为客人提供优雅的专属礼遇。内部采用花园式设计，拥有绿植环绕的露天泳池。地处国贸商务中心，方便商旅出行与商务合作。备品优质，允许携带宠物入住。</span>
              </div>
            </div>
            <div class="details" >
              <div class="fuwuName">
                <span class="name1">基本信息</span>
              </div>
              <div class="juti">
                <span class="words">283间客房</span>
              </div>
            </div>
            <div class="details" >
              <div class="fuwuName">
                <span class="name1">入离时间</span>
              </div>
              <div class="juti">
              <span class="words">
                入住时间：入住当天14:00后
                离店时间：离店当天12:00前
              </span>
              </div>
            </div>
            <div class="details" >
              <div class="fuwuName">
                <span class="name1">儿童政策</span>
              </div>
              <div class="juti">
              <span class="words">
                每间客房最多容纳2名0至6岁儿童与成人共用现有床铺
              </span>
              </div>
            </div>
            <div class="details" >
              <div class="fuwuName">
                <span class="name1">宠物</span>
              </div>
              <div class="juti">
              <span class="words">
                允许携带宠物，不收取额外费用。
              </span>
              </div>
            </div>
            <div class="details" >
              <div class="fuwuName">
                <span class="name1">外宾</span>
              </div>
              <div class="juti">
              <span class="words">
                接待外宾。
              </span>
              </div>
            </div>
            <div class="details" >
              <div class="fuwuName">
                <span class="name1">膳食安排</span>
              </div>
              <div class="juti">
              <span class="words">
                提供自助餐早餐，早餐价格210RMB。
              </span>
              </div>
            </div>
            <div class="details">
              <span class="name1">前台服务</span>
              <div class="juti">
                <ul class="xuanxiang">
                  <li class="neiron">√行李寄存</li>
                  <li class="neiron">√24小时前台</li>
                  <li class="neiron">√唤醒服务</li>
                  <li class="neiron">√专职行李员</li>
                  <li class="neiron">√24小时大堂经理</li>
                  <li class="neiron">√快速办理入住/退房手续</li>
                  <li class="neiron">√一次性账单结算服务</li>
                  <li class="neiron">√接收信用卡</li>
                  <li class="neiron">√旅游票务专柜</li>
                  <li class="neiron">√办理私人登记入住/退房手续</li>
                  <li class="neiron">√专职门童</li>
                  <li class="neiron">√邮政服务</li>
                  <li class="neiron">√礼宾服务</li>
                </ul>
              </div>
            </div>
            <div class="details">
              <span class="name1">交通服务</span>
              <div class="juti">
                <ul class="xuanxiang">
                  <li class="neiron">√接机服务</li>
                  <li class="neiron">√接站服务</li>
                  <li class="neiron">√租车</li>
                  <li class="neiron">√叫车服务</li>
                  <li class="neiron">√自行车租赁服务</li>
                </ul>
              </div>
            </div>
            <div class="details">
              <span class="name1">通用设施</span>
              <div class="juti">
                <ul class="xuanxiang">
                  <li class="neiron">√电梯</li>
                  <li class="neiron">√空调</li>
                  <li class="neiron">√24小时热水</li>
                  <li class="neiron">√吹风机</li>
                  <li class="neiron">√自动提款机</li>
                  <li class="neiron">√公共区域闭路电视监控</li>
                  <li class="neiron">√所有场所禁烟</li>
                  <li class="neiron">√无烟楼层</li>
                  <li class="neiron">√行政楼层</li>
                  <li class="neiron">√无障碍设施</li>
                  <li class="neiron">√无烟房</li>
                  <li class="neiron">√无障碍客房</li>
                  <li class="neiron">√公共音响系统</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="tuijian" style="width: 19%;border: 1px solid;height: 300px;float: right;display: inline-block;vertical-align: top;">
          <p>为你推荐</p>
          <ul class="history_box patch_MB20 history_detail">
            <li class="item"><div class="outter">
              <a href="/cn/beijing_city/dt-23394/" title="北京瑰丽酒店" class="inner clearfix">
                <span class="close iconfont"></span>
                <img alt="北京瑰丽酒店" class="hotel_img" src="https://userimg.qunarzz.com/imgs/201812/12/C._M0DCii9a-kvyicki120.jpg">
                <div class="cont1">
                  <p class="name text-elli-one">北京瑰丽酒店</p>
                  <p class="infor">
                    <span >4.7</span>分
                    <span class="comm">3113条评论</span>
                  </p>
                  <p class="price">
                    <span class="y rmb">¥</span>2332
                    <span class="qi">起</span>
                  </p>
                </div>
              </a>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </el-row>
    <el-row>
      <div class="el-tabs__content" id="contfour">
        <div data-v-60e8e980="" role="tabpanel" id="pane-first" aria-labelledby="tab-first" class="el-tab-pane" aria-hidden="true" style="display: none;"><div data-v-60e8e980="" id="driving"><div data-v-60e8e980="" id="drivingNav">云南·自驾游</div> <div data-v-60e8e980="" id="drivingTu"><img data-v-60e8e980="" src="/static/img/u.9f7a751.jpg" alt=""></div> <div data-v-60e8e980="" id="drivText">行程更灵活，不跟团，不自助，独立成团更省心</div> <button data-v-60e8e980="" type="button" class="el-button el-button--text is-plain" id="pathBtn"><!----><!----><span><a data-v-60e8e980="" href="/Main" class="" id="jump">路线规划</a></span></button></div> <div data-v-60e8e980="" id="plan"><span data-v-60e8e980="">路线导航</span></div> <div data-v-60e8e980="" id="planBox"><div data-v-60e8e980="" id="planLine"><div data-v-60e8e980="" id="start"><div data-v-60e8e980="" class="el-input el-input-group el-input-group--prepend"><div class="el-input-group__prepend">出发地</div><input type="text" autocomplete="off" placeholder="请输入出发地" class="el-input__inner"><!----><!----><!----><!----></div></div> <div data-v-60e8e980="" id="bourn"><div data-v-60e8e980="" class="el-input el-input-group el-input-group--prepend"><div class="el-input-group__prepend">目的地</div><input type="text" autocomplete="off" placeholder="请输入目的地" class="el-input__inner"><!----><!----><!----><!----></div></div> <div data-v-60e8e980="" id="startTime"><div data-v-60e8e980="" class="el-col el-col-11" style="width: 100%;"><div data-v-60e8e980="" class="el-date-editor el-input el-input--prefix el-input--suffix el-date-editor--date" style="width: 100%;"><!----><input type="text" autocomplete="off" name="" placeholder="出发时间" class="el-input__inner"><span class="el-input__prefix"><i class="el-input__icon el-icon-date"></i><!----></span><span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-input__icon"></i><!----><!----><!----><!----></span><!----></span><!----><!----></div></div></div> <div data-v-60e8e980="" id="bournTime"><div data-v-60e8e980="" class="el-col el-col-11" style="width: 100%;"><div data-v-60e8e980="" class="el-date-editor el-input el-input--prefix el-input--suffix el-date-editor--date" style="width: 100%;"><!----><input type="text" autocomplete="off" name="" placeholder="返回时间" class="el-input__inner"><span class="el-input__prefix"><i class="el-input__icon el-icon-date"></i><!----></span><span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-input__icon"></i><!----><!----><!----><!----></span><!----></span><!----><!----></div></div></div> <div data-v-60e8e980="" id="renshu"><div data-v-60e8e980="" class="el-select"><!----><div class="el-input el-input--suffix"><!----><input type="text" readonly="readonly" autocomplete="off" placeholder="成人" class="el-input__inner"><!----><span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-select__caret el-input__icon el-icon-arrow-up"></i><!----><!----><!----><!----><!----></span><!----></span><!----><!----></div><div class="el-select-dropdown el-popper" style="display: none; min-width: 0px;"><div class="el-scrollbar" style=""><div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;"><ul class="el-scrollbar__view el-select-dropdown__list"><!----><li data-v-60e8e980="" class="el-select-dropdown__item"><span>1</span></li> <li data-v-60e8e980="" class="el-select-dropdown__item"><span>2</span></li> <li data-v-60e8e980="" class="el-select-dropdown__item"><span>3</span></li> <li data-v-60e8e980="" class="el-select-dropdown__item"><span>4</span></li> <li data-v-60e8e980="" class="el-select-dropdown__item"><span>5</span></li></ul></div><div class="el-scrollbar__bar is-horizontal"><div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div></div><div class="el-scrollbar__bar is-vertical"><div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div></div></div><!----></div></div></div> <div data-v-60e8e980="" id="xiaohai"><div data-v-60e8e980="" class="el-select"><!----><div class="el-input el-input--suffix"><!----><input type="text" readonly="readonly" autocomplete="off" placeholder="儿童" class="el-input__inner"><!----><span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-select__caret el-input__icon el-icon-arrow-up"></i><!----><!----><!----><!----><!----></span><!----></span><!----><!----></div><div class="el-select-dropdown el-popper" style="display: none; min-width: 0px;"><div class="el-scrollbar" style=""><div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;"><ul class="el-scrollbar__view el-select-dropdown__list"><!----><li data-v-60e8e980="" class="el-select-dropdown__item"><span>1</span></li> <li data-v-60e8e980="" class="el-select-dropdown__item"><span>2</span></li> <li data-v-60e8e980="" class="el-select-dropdown__item"><span>3</span></li> <li data-v-60e8e980="" class="el-select-dropdown__item"><span>4</span></li> <li data-v-60e8e980="" class="el-select-dropdown__item"><span>5</span></li></ul></div><div class="el-scrollbar__bar is-horizontal"><div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div></div><div class="el-scrollbar__bar is-vertical"><div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div></div></div><!----></div></div></div> <div data-v-60e8e980="" id="age">（2-12岁）</div> <div data-v-60e8e980="" id="soso"><div data-v-60e8e980="" class="el-row"><button data-v-60e8e980="" type="button" class="el-button el-button--info is-plain" id="sosoBtn"><!----><!----><span>立即搜索</span></button></div></div></div></div> <div data-v-60e8e980="" id="platBox">
          地图
        </div></div> <div data-v-60e8e980="" role="tabpanel" aria-hidden="true" id="pane-second" aria-labelledby="tab-second" class="el-tab-pane" style="display: none;"><div data-v-60e8e980="" id="feature"><span data-v-60e8e980="">景区特色</span></div> <div data-v-60e8e980="" id="featureBox"><ul data-v-60e8e980=""><li data-v-60e8e980=""><img data-v-60e8e980="" src="/static/img/u.9f7a751.jpg" style="margin-top: 5px;"></li> <li data-v-60e8e980=""><img data-v-60e8e980="" src="/static/img/u.9f7a751.jpg"></li> <li data-v-60e8e980=""><img data-v-60e8e980="" src="/static/img/u.9f7a751.jpg"></li> <li data-v-60e8e980=""><img data-v-60e8e980="" src="/static/img/u.9f7a751.jpg"></li> <li data-v-60e8e980=""><img data-v-60e8e980="" src="/static/img/u.9f7a751.jpg"></li> <li data-v-60e8e980=""><img data-v-60e8e980="" src="/static/img/u.9f7a751.jpg"></li> <li data-v-60e8e980=""><img data-v-60e8e980="" src="/static/img/u.9f7a751.jpg"></li> <li data-v-60e8e980=""><img data-v-60e8e980="" src="/static/img/u.9f7a751.jpg"></li> <li data-v-60e8e980=""><img data-v-60e8e980="" src="/static/img/u.9f7a751.jpg"></li> <li data-v-60e8e980=""><img data-v-60e8e980="" src="/static/img/u.9f7a751.jpg"></li> <li data-v-60e8e980=""><img data-v-60e8e980="" src="/static/img/u.9f7a751.jpg"></li> <li data-v-60e8e980=""><img data-v-60e8e980="" src="/static/img/u.9f7a751.jpg"></li> <li data-v-60e8e980=""><img data-v-60e8e980="" src="/static/img/u.9f7a751.jpg"></li> <li data-v-60e8e980=""><img data-v-60e8e980="" src="/static/img/u.9f7a751.jpg"></li> <li data-v-60e8e980=""><img data-v-60e8e980="" src="/static/img/u.9f7a751.jpg"></li> <li data-v-60e8e980=""><img data-v-60e8e980="" src="/static/img/u.9f7a751.jpg"></li> <li data-v-60e8e980=""><img data-v-60e8e980="" src="/static/img/u.9f7a751.jpg"></li> <li data-v-60e8e980=""><img data-v-60e8e980="" src="/static/img/u.9f7a751.jpg"></li></ul></div></div> <div data-v-60e8e980="" role="tabpanel" id="pane-third" aria-labelledby="tab-third" class="el-tab-pane" style=""><div data-v-60e8e980="" id="discussBox">
        <div data-v-60e8e980="" id="discussNav">点评问答</div>
        <div data-v-60e8e980="" id="discussTu">
          <img data-v-60e8e980="" src="" alt="">
        </div>
        <div data-v-60e8e980="" id="discussText" class="block">
          <span data-v-60e8e980="" class="demonstration">评分：</span>
          <div data-v-60e8e980="" role="slider" aria-valuenow="5" aria-valuetext="5" aria-valuemin="0" aria-valuemax="5" tabindex="0" class="el-rate">
          <span class="el-rate__item" style="cursor: auto;">
            <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i>
          </span>
            <span class="el-rate__item" style="cursor: auto;">
            <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i>
          </span>
            <span class="el-rate__item" style="cursor: auto;">
            <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i>
          </span>
            <span class="el-rate__item" style="cursor: auto;">
            <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i>
          </span>
            <span class="el-rate__item" style="cursor: auto;">
            <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i>
          </span>
            <span class="el-rate__text" style="color: rgb(255, 153, 0);">5</span>
          </div>
          <span data-v-60e8e980="" class="demonstration">1911条评论</span>
        </div>
        <div data-v-60e8e980="" class="el-row"><button data-v-60e8e980="" type="button" class="el-button el-button--text is-plain" id="dianBtn"><!----><!----><span>写点评</span></button></div></div> <div data-v-60e8e980="" class="el-dialog__wrapper" style="display: none;"><div role="dialog" aria-modal="true" aria-label="大众点评" class="el-dialog" style="margin-top: 15vh;"><div class="el-dialog__header"><span class="el-dialog__title">大众点评</span><button type="button" aria-label="Close" class="el-dialog__headerbtn"><i class="el-dialog__close el-icon el-icon-close"></i></button></div><!----><div class="el-dialog__footer"><span data-v-60e8e980="" class="dialog-footer">
      <button data-v-60e8e980="" type="button" class="el-button el-button--default"><!----><!---->
        <span>取 消</span></button> <button data-v-60e8e980="" type="button" class="el-button el-button--primary"><!----><!----><span>确 定</span></button></span></div></div></div> <div data-v-60e8e980="" id="remark"><div data-v-60e8e980="" class="fff"><div data-v-60e8e980="" class="el-row" style="width: 100%;"><div data-v-60e8e980="" class="userInfo el-col el-col-2"><span data-v-60e8e980="">mofnZ</span></div> <div data-v-60e8e980="" class="addData el-col el-col-2"><span data-v-60e8e980="">2020-9-21</span></div> <div data-v-60e8e980="" class="markBox el-col el-col-4"><div data-v-60e8e980="" role="slider" aria-valuenow="5" aria-valuetext="5" aria-valuemin="0" aria-valuemax="5" tabindex="0" class="el-rate"><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__text" style="color: rgb(255, 153, 0);">5</span></div></div></div> <div data-v-60e8e980="" class="neirong el-row">
        云南是一个适合来旅游的地方，第一天接机感觉接机小伙很不错，服务态度很好，
        给我们安排的很好，我们也很满意，感觉很温馨，在云南玩的这段时间，深深的被这边的风景迷住，
        也拍了很多的照片感觉很美丽，全程导游也不错的，也很幽默让我们有一个初步的了解，感觉很赞，
        全程客服大美女随时都在关心我们，出门在外感觉很温馨，这几天，我们感觉很好！
        <div data-v-60e8e980="" class="el-divider el-divider--horizontal"><!----></div></div></div> <div data-v-60e8e980="" class="fff"><div data-v-60e8e980="" class="el-row" style="width: 100%; margin-top: -30px;"><div data-v-60e8e980="" class="userInfo el-col el-col-2"><span data-v-60e8e980="">mofnZ</span></div> <div data-v-60e8e980="" class="addData el-col el-col-2"><span data-v-60e8e980="">2020-9-21</span></div> <div data-v-60e8e980="" class="markBox el-col el-col-4"><div data-v-60e8e980="" role="slider" aria-valuenow="5" aria-valuetext="5" aria-valuemin="0" aria-valuemax="5" tabindex="0" class="el-rate"><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__text" style="color: rgb(255, 153, 0);">5</span></div></div></div> <div data-v-60e8e980="" class="neirong el-row">
        泸沽湖湖水可清了，洱海的要稍微差一点。带我们的导游人挺好的，给我们介绍他们当地的一些云南当地的文化，
        还有当地的一些民间故事，感觉很好。现在感觉还好，没有过度的开发，挺原生态的，自然风光不错。
        云南的7天之行玩的很开心！
        <div data-v-60e8e980="" class="el-divider el-divider--horizontal"><!----></div></div></div> <div data-v-60e8e980="" class="fff"><div data-v-60e8e980="" class="el-row" style="width: 100%; margin-top: -30px;"><div data-v-60e8e980="" class="userInfo el-col el-col-2"><span data-v-60e8e980="">mofnZ</span></div> <div data-v-60e8e980="" class="addData el-col el-col-2"><span data-v-60e8e980="">2020-9-21</span></div> <div data-v-60e8e980="" class="markBox el-col el-col-4"><div data-v-60e8e980="" role="slider" aria-valuenow="5" aria-valuetext="5" aria-valuemin="0" aria-valuemax="5" tabindex="0" class="el-rate"><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__text" style="color: rgb(255, 153, 0);">5</span></div></div></div> <div data-v-60e8e980="" class="neirong el-row">
        行程很不错，很喜欢在古城里的感觉，找一个小酒吧，坐在里面喝风花雪月，还可以上台去唱歌，又或者走在四方街，
        看店里的人打鼓，行程中我感觉丽江是导游讲解的最赞的一段啦，
        历史文化、风土人情、导游和工作人员讲解的都很好，很有文化历史背景，很有历史
        内容，还能够很全面的了解白族人的生活习性，历史传说以及信仰，真的很赞
        <div data-v-60e8e980="" class="el-divider el-divider--horizontal"><!----></div></div></div> <div data-v-60e8e980="" class="fff"><div data-v-60e8e980="" class="el-row" style="width: 100%; margin-top: -30px;"><div data-v-60e8e980="" class="userInfo el-col el-col-2"><span data-v-60e8e980="">mofnZ</span></div> <div data-v-60e8e980="" class="addData el-col el-col-2"><span data-v-60e8e980="">2020-9-21</span></div> <div data-v-60e8e980="" class="markBox el-col el-col-4"><div data-v-60e8e980="" role="slider" aria-valuenow="5" aria-valuetext="5" aria-valuemin="0" aria-valuemax="5" tabindex="0" class="el-rate"><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__item" style="cursor: auto;"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i></span><span class="el-rate__text" style="color: rgb(255, 153, 0);">5</span></div></div></div> <div data-v-60e8e980="" class="neirong el-row">
        云南是一个适合来旅游的地方，第一天接机感觉接机小伙很不错，服务态度很好，
        给我们安排的很好，我们也很满意，感觉很温馨，在云南玩的这段时间，深深的被这边的风景迷住，
        也拍了很多的照片感觉很美丽，全程导游也不错的，也很幽默让我们有一个初步的了解，感觉很赞，
        全程客服大美女随时都在关心我们，出门在外感觉很温馨，这几天，我们感觉很好！
        <div data-v-60e8e980="" class="el-divider el-divider--horizontal"><!----></div></div></div></div></div></div>
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
  name: 'hotel_details',
  data () {
    return {
      urls: [
        '../../../assets/img/u.jpg'
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
      activeName: 'first',
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
      formLabelWidth: '120px'
    }
  },
  methods: {
    goAnchor (selector) {
      var anchor = this.$el.querySelector(selector) // 参数为要跳转到的元素id
      document.body.scrollTop = anchor.offsetTop; // chrome
      document.documentElement.scrollTop = anchor.offsetTop; // firefox
    },

    // 模态框
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
/*导航栏*/
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
  /*导航栏*/
  #bennerBox {
    margin-top: 20px;
  }
  .imgBox{
    width: 90%;
    height: 400px;
    margin-left: 5%;
  }

  /*图片*/
  ul li{
    list-style: none;
  }
  img{
    border: 0;
  }
  /* 垂直居中 */

  .clearfix:after{
    display: table;
    line-height: 0;
    content: "";
  }
  .magnifier{
    width: 41%;
    height: 100%;
    float: left;
    display: inline-block;
  }
  .magnifier-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    float: left;
    border: 1px solid #ddd;
  }
  .move-view{
    width: 100px;
    height: 100px;
    position: absolute;
    background-image: url('../../../assets/img/move-box.png');
  }
  .images-cover{
    height: 100%;
    width: 100%;
    float: left;
  }
  .images-cover img{
    position: absolute;
  }
  .magnifier-btn span{
    line-height: 80px;
    height: 80px;
    width: 20px;
    background-color: #6e6e6e;
    color: #fff;
    display: block;
    z-index: 9998;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    border-radius: 3px;
  }
  .magnifier-btn .magnifier-btn-left{
    float: left;
  }
  .magnifier-btn .magnifier-btn-right{
    float: right;
  }

  .magnifier-view{
    width: 100%;
    height: 100%;
    position: absolute;
    right: -105%;
    top: 0;
    z-index: 9999;
    background-color: #fff;
    display: none;
    overflow: hidden;
  }
  .magnifier-view img{
    display: block;
  }
  .animation03{
    transition: all 0.3s ease-in 0.1s;
    -ms-transition: all 0.3s ease-in 0.1s;
    -moz-transition: all 0.3s ease-in 0.1s;
    -webkit-transition: all 0.3s ease-in 0.1s;
    -o-transition: all 0.3s ease-in 0.1s;
  }
  .fl_right {
    float: right;
  }
  .public2{
    border: 1px solid;
    height: 60px;
    width: 100%
  }
  .rightPart{
    width: 33%;
    height: 100%;
    display: inline-block;
/*    border: 1px solid red;*/
  }
  .rightTop{
    width: 100%;
    height: 41%;
/*    border: 1px solid yellow;*/
  }
  .rightDown{
    width: 100%;
    height: 50%;
  }
  .detail_top .infor_box .infor_bar .comm_box {
    height: 38px;
    padding: 15px 0;
  }

  .total {
    float: right;
    font-size: 12px;
    color: #212121;
    line-height: 17px;
    margin-top: 15px;
    cursor: pointer;
  }
  .score_box{
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }
  .score {
    font-size: 30px;
    font-weight: bold;
    color: #00afc7;
    margin-right: 7px;
    margin-top: 9px;
    float: left;
  }
  .score .spec {
    font-size: 13px;
  }
  .detail_top .infor_box .infor_bar .comm_box .total {
    float: right;
    font-size: 12px;
    color: #212121;
    line-height: 17px;
    margin-top: 15px;
    cursor: pointer;
  }
  .iconfont {
    font-size: 13px;
    vertical-align: -2px;
  }
  .score_box .desc {
    background: #03bed8;
    border-radius: 8px 8px 8px 2px;
    height: 24px;
    line-height: 24px;
    color: #fff;
    padding: 0 10px;
    font-size: 16px;
    float: left;
    margin-top: 5px;
  }
  .comm_box {
    height: 38px;
    padding: 15px 0;
  }
  .comm_list {
    height: 28px;
    margin-bottom: 30px;
    margin: 0;
  }
  .comm_list .item {
    float: left;
    height: 28px;
    line-height: 28px;
    padding: 0 15px;
    background: rgba(10, 196, 221, 0.1);
    border-radius: 4px;
    color: #2fa2b2;
    font-size: 13px;
    margin-right: 8px;
  }
  .decro{
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }
  .tab_box {
    width: 90%;
    margin-left: 5%;
    padding-top: 10px;
  }
  .live_box .check .text {
    float: left;
    position: relative;
    width: auto;
  }
  .room_type .item {
    float: left;
    height: 28px;
    padding: 0 9px 0 0;
    border-right: 1px #f7f7f7 solid;
    margin: 0 15px 16px 0;
  }
  .searchWrapper .live_box .researchBtn {
    margin-left: 20px;
  }
  .live_box .researchBtn {
    cursor: pointer;
    background: #0ac4dd;
    margin-top: 3px;
  }
  .fl_left {
    float: left;
  }
  .live_box .btn {
    width: 96px;
    height: 34px;
    text-align: center;
    line-height: 34px;
    color: #fff;
    border-radius: 17px;
    background: #0ac4dd;
    font-size: 14px;
  }
  .live_box .check {
    width: 218px;
    height: 20px;
    padding: 8px 10px;
    border-radius: 2px;
    float: left;
    background: #fff;
    border: 1px solid #e6e6e6;
    margin-right: 10px;
  }
  .date {
    line-height: 20px;
    font-size: 16px;
    color: #212121;
    margin-right: 25px;
  }
  .searchWrapper .live_box .check .text {
    float: left;
    position: relative;
    width: auto;
  }
  .live .check {
    width: 228px;
  }
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .G_typeBox {
    width: 100%;
    height: 34px;
    line-height: 34px;
    color: #9e9e9e;
    font-size: 12px;
    background: #f7f7f7;
    margin: 0 auto;
  }
  .G_typeBox .room {
    width: 310px;
    margin-left: 10px;
  }
  .G_typeBox .bed {
    width: 120px;
    margin-left: 30px;
  }
  .G_typeBox .breadfast {
    width: 60px;
    margin-left: 105px;
  }
  .G_typeBox .man {
    width: 60px;
    margin-left: 48px;
  }
  .G_typeBox .gov {
    width: 60px;
    margin-left: 53px;
  }
  .G_typeBox .price {
    width: 120px;
    margin-left: 34px;
    text-align: right;
  }
  .hotel_type_item {
    margin: 0 20px;
    border-bottom: 1px solid #eee;
    padding: 15px 0 0 0;
  }
  .hotel_type_item .hotel_main {
    width: 23%;
    padding-bottom: 15px;
    padding-top: 15px;
  }
  .hotel_type_item .hotel_main .img_box {
    float: left;
    width: 140px;
    height: 100px;
    position: relative;
    cursor: pointer;
  }
  .hotel_type_item .hotel_main .img_box img {
    width: 140px;
    height: 100px;
    border-radius: 4px;
  }
  .hotel_type_item .hotel_main .img_box .img_num {
    position: absolute;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 4px 0 4px 0;
    padding: 0 5px;
    height: 20px;
    line-height: 20px;
    color: #fff;
    font-size: 12px;
  }
  .hotel_type_item .hotel_main .names {
    margin: 0 0 0 150px;
    width: 160px;
  }
  .hotel_type_item .G_bedType {
    box-sizing: border-box;
    width: 76%;
  }
  .hotel_type_item .G_bedType .subj {
    padding: 19px 0 19px 8px;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
  }
  .G_bedType .bed_area {
    width: 226px;
  }
  .hotel_type_item .G_bedType .sub_item {
    display: table-cell;
    vertical-align: middle;
  }
  .hotel_type_item .G_bedType .bed_area .name {
    font-size: 14px;
    color: #212121;
    line-height: 20px;
    margin: 0 0 2px 2px;
    width: 180px;
  }
  .hotel_type_item .G_bedType .bed_area .tags {
    width: 190px;
  }
  .hotel_type_item .G_bedType .bread_fast {
    width: 108px;
    color: #08b2cc;
    font-size: 14px;
    line-height: 20px;
  }
  .G_bedType .man {
    width: 113px;
    font-size: 12px;
    line-height: 16px;
  }
  .hotel_type_item .G_bedType .man .iconfont {
    margin-right: 2px;
    color: #616161;
    font-size: 14px;
    vertical-align: -2px;
  }
  .hotel_type_item .G_bedType .gov {
    width: 100px;
    font-size: 14px;
    line-height: 20px;
  }
  .hotel_type_item .G_bedType .gov .normal {
    color: #212121;
    margin-bottom: 5px;
  }
  G_bedType .gov .normal .gov_words {
    border-bottom: 1px #9e9e9e dotted;
  }
  .hotel_type_item .G_bedType .price_box {
    width: 116px;
    text-align: right;
  }
  .hotel_type_item .G_bedType .price_box .price_new {
    font-size: 24px;
    color: #ff704a;
    line-height: 22px;
    margin-bottom: 4px;
    display: inline-block;
    border-bottom: 1px #ff714a dotted;
  }
  .price_box .price_new .y {
    font-size: 14px;
    font-family: Arial;
  }
  .hotel_type_item .G_bedType .btn_order {
    width: 145px;
    text-align: right;
  }
  .hotel_type_item .G_bedType .btn_order .btn_item {
    display: inline-block;
    width: 110px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    border-radius: 18px;
    background: #ff714a;
    cursor: pointer;
  }
  .hotel_type_item {
    width: 90%;
    margin-left: 5%;
    margin: 0 20px;
    border-bottom: 1px solid #eee;
    padding: 15px 0 0 0;
  }
  .room_type .item .sele {
    float: left;
    height: 26px;
    line-height: 26px;
    border: 1px solid #e6e6e6;
    border-radius: 14px;
    font-size: 12px;
    color: #333;
    padding: 0 15px;
    margin-right: 6px;
    cursor: pointer;
  }
  .tab_box .tab_bar {
    width: 100%;
    height: 40px;
    background: #0ac4dd;
    border-radius: 8px 8px 0 0;
  }
  .cont {
    width: 1180px;
    padding: 0 20px;
    margin: 0 auto;
  }
  .cont .item {
    float: left;
    width: 124px;
    height: 40px;
    margin-right: 10px;
    position: relative;
  }
  .item.cur .inner {
    background: no-repeat left bottom;
    color: #00afc7;
  }
  .tab_box .tab_bar .cont .item .inner {
    position: absolute;
    top: -13px;
    width: 53%;
    height: 53px;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    color: #fff;
    overflow: hidden;
  }
  .searchWrapper {
    position: relative;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }
  .G_input .live {
    width: 450px;
    margin: 0 auto 15px;
    height: 40px;
  }
  .live_box {
    height: 36px;
    padding: 20px 0 16px 20px;
  }
  .clearfix {
    zoom: 1;
  }
  .live_box .live {
    width: auto;
  }
  .G_input .live .check {
    width: 235px;
    height: 18px;
    padding: 10px;
    border: 1px #e6e6e6 solid;
    border-radius: 4px;
    float: left;
  }
  .G_input .live .check .icon {
    width: 18px;
    height: 18px;
    float: right;
    color: #6ccad6;
    font-size: 18px;
  }
  .G_input .live .check .name {
    float: left;
    font-size: 14px;
    line-height: 20px;
    color: #9e9e9e;
    margin-right: 18px;
  }
  .live_box .check .text {
    float: left;
    position: relative;
    width: auto;
  }
  .searchWrapper .live_box .check .text .date {
    color: #212121;
    font-size: 16px;
    background: none;
    border: 0 none;
    float: left;
    margin-right: 5px;
    width: 136px;
  }
  .live_box .check .text .date {
    color: #212121;
    font-size: 16px;
    background: none;
    border: 0 none;
    float: left;
    margin-right: 5px;
    width: 120px;
  }
  .G_input .live .check .text .week {
    float: left;
    line-height: 20px;
    font-size: 14px;
    color: #999;
  }
  .searchWrapper .live_box .desc {
    display: inline-block;
    color: #9e9e9e;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0 0;
    width: 50px;
  }
  .fl_left {
    float: left;
  }
  .live_box {
    height: 36px;
    padding: 20px 0 16px 20px;
  }
  .boolToolWrapper{
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
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
    width: 100%;
    height: 350px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-image: url("../../../assets/img/bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .el-carousel__item:nth-child(3n+1) {
    background-image: url("../../../assets/img/bg.jpg");
    background-repeat: no-repeat;
  }
  .el-carousel__item:nth-child(4n+1) {
    background-image: url("../../../assets/img/bg.jpg");
    background-repeat: no-repeat;
  }
  .el-carousel__item:nth-child(5n+1) {
    background-image: url("../../../assets/img/bg.jpg");
    background-repeat: no-repeat;
  }
  .el-carousel__item:nth-child(6n+1) {
    background-image: url("../../../assets/img/bg.jpg");
    background-repeat: no-repeat;
  }
  .el-carousel__item:nth-child(7n+1) {
    background-image: url("../../../assets/img/bg.jpg");
    background-repeat: no-repeat;
  }
  .el-breadcrumb {
    font-size: 12px;
  }
/*  .el-row {
    float: left;
  }*/
  .el-rate {
    float: left;
  }
  .el-upload-dragger {
    width: 393px;
  }
  .cardBoxfoot{
    float: left;
    width: 100%;
  }
  .leftPart{
    width: 45%;
    height: 100%;
    vertical-align: top;
    display: inline-block;
  }
  .item1{
    width: 77px;
    float: left;
    margin-left: 7px;
  }
  .mapBox{
    width: 90%;
    margin-left: 5%;
    padding-top: 10px;
  }
  .mapLefe{
    width: 80%;
    height: 400px;
    border: 1px solid red;
    float: left;
  }
  .mapright{
    width: 19%;
    height: 400px;
    border: 1px solid red;
    float: right;
    display: inline-block;
  }
  .xqq{
    width: 90%;
    margin-left: 5%;
    padding-top: 10px;
  }
  .linkageTatbl{
    width: 100%;
    background: #fff;
    border: 1px solid #ddd;
  }
  .details{
    width: 100%;
    padding: 0 0;
    float: left;
/*    border: 1px solid black;*/
  }
  .problem{
    float: left!important;
    padding-top: 7px;
  }
  .xuanxiang{
    list-style: none;
    float: left;
    margin: 0 0;
    text-align: center;
  }
  .neiron{
    float: left;
    margin-left: 23px;
  }
  .words{
    margin-top: 0px;
  }
  .name1{
    float: left;
    width: 100px;
    font-size: 14px;
    color: #212121;
    font-weight: bold;
    line-height: 20px;
  }
  .fuwuName{
    width: 100px;
    height: 40px;
    display: inline-block;
    float: left;
  }
  .juti{
    margin-left: 100px;
    display: table;
  }
  .patch_MB20 {
    margin-bottom: 20px;
    padding: 0;
  }
  .item {
    height: 98px;
    border-bottom: 1px #e6e6e6 dashed;
    margin: 0 10px;
  }
  .item .outter {
    padding: 0 10px;
  }
  .item .inner {
    height: 70px;
    padding: 14px 0;
  }
  .item .inner .close {
    position: absolute;
    right: 0;
    top: 20px;
    width: 13px;
    font-size: 13px;
    color: #9e9e9e;
    height: 13px;
    display: none;
  }
  .hotel_img {
    width: 90px;
    height: 70px;
    float: left;
  }
  .cont1 {
    margin: 0 49px 0 100px;
  }
  .item .inner .cont1 .name {
    /* padding: 2px 0 4px; */
    /* line-height: 17px; */
    font-size: 12px;
    color: #212121;
    /* width: 100%; */
    text-align: left;
    height: 28px;
    width: 127px;
    margin:0;
  }
  .infor {
    padding: 0 0 4px;
    font-size: 12px;
    color: #616161;
    width: 127px;
    text-align: left;
    margin:0;
  }
  .infor .comm {
    margin-left: 3px;
  }
  .price {
    color: #ff714a;
    font-size: 14px;
    line-height: 20px;
    margin:0;
  }
  .price .y {
    font-size: 10px;
    margin-right: 1px;
  }
  .price .qi {
    font-size: 12px;
    margin-left: 1px;
  }
  .name{
    float: left;
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
</style>
