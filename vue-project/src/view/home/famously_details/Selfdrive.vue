<template>
  <div id="app">
    <el-container>
      <el-header style="height: 100%;padding: 0;">
        <publicZ></publicZ>
      </el-header>
      <el-main>
        <el-row>
          <!--面包屑导航-->
          <el-col :span="24">
            <div id="crumbs">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/index' }">清明上河园</el-breadcrumb-item>
                <el-breadcrumb-item>景点详情</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </el-col>
        </el-row>
        <div id="sicket">
          <el-row :gutter="20">
            <el-col :span="14">
              <!--轮播图-->
              <div class="grid-content bg-purple" id="benner">
                <template>
                  <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="item in 4" :key="item">
                    </el-carousel-item>
                  </el-carousel>
                </template>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="grid-content bg-purple">
                <template>
                  <!--景区信息-->
                  <el-row>
                    <el-col :span="8">
                      <span id="scenicName">清明上河园</span>
                    </el-col>
                    <el-col :span="3">
                      <span id="scenicD">5A景区</span>
                    </el-col>
                  </el-row>
                  <!-- 景区介绍-->
                  <el-row>
                    <el-col :span="14">
                      <span id="biaoyu">穿越宋朝，亲身体验清明上河图</span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <!--景区位置-->
                    <el-col :span="16">
                  <span id="gpsBox">
                    <i class="el-icon-location-outline"></i>
                    <span id="gpsL">位 置:</span>
                    <span id="gpsName">河南省开封市龙亭区龙亭西路5号</span>
                  </span>
                    </el-col>
                    <el-col :span="6">
                      <span id="gpsBtn"><el-button>查看地图</el-button></span>
                    </el-col>
                  </el-row>
                  <!--用户评论-->
                  <el-row>
                    <el-col :span="16">
                  <span id="markBox">
                    <i class="el-icon-edit-outline"></i>
                    <span id="userRemark">用户点评:</span>
                    <span id="rank">4.9</span>
                    <span id="rankB">/5分</span>
                    <router-link to="">0条评论</router-link>
                  </span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <div id="fuwu">
                      <ul>
                        <li>
                          <span style="font-size: 13px;">服务承诺:</span>
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
                  </el-row>
                  <!--购票价格-->
                  <el-row>
                    <el-col :span="10">
                  <span id="rateBox">
                    <span id="jiage">￥113</span>
                    <span id="qi">起</span>
                  </span>
                    </el-col>
                    <el-col :span="10">
                      <span id="order"><el-button type="warning">立即订购</el-button></span>
                    </el-col>
                  </el-row>
                </template>
              </div>
            </el-col>
          </el-row>
        </div>
        <div id="remenBox">
          <el-row :gutter="20">
            <el-col :span="24">
              <div id="remenD">
                <div id="remen">热门推荐</div>
                <div id="remenTu">
                  <img src="../../..//assets/customized.png" alt="">
                </div>
              </div>
            </el-col>
          </el-row>
          <div id="reBox">
            <el-row :gutter="20">
              <!--热门门票-->
              <el-col :span="24">
                <div class="menpiao">
                  <el-col :span="10"><span class="piao">清明上河园日场门票成人票(10人起订)</span></el-col>
                  <el-col :span="4">
                    <span class= "shi">可订9月24日</span>
                  </el-col>
                  <el-col :span="1">
                    <el-tooltip placement="bottom">
                      <div slot="content">可订9月24日<br/>随时退
                      </div>
                      <el-tag size="mini">随时退</el-tag>
                    </el-tooltip>
                  </el-col>
                  <el-col :span="4"><span class="qian">¥113</span></el-col>
                  <el-col :span="4">
                    <span class="dingBtn"><el-button type="warning">预订</el-button></span>
                  </el-col>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="menpiao">
                  <el-col :span="10"><span class="piao">清明上河园日场门票成人票(11:00-15:00)【11:00-15:00】</span></el-col>
                  <el-col :span="4">
                    <span class= "shi">可订明日</span>
                  </el-col>
                  <el-col :span="1">
                    <el-tooltip placement="bottom">
                      <div slot="content">可订明日<br/>随时退
                      </div>
                      <el-tag size="mini">随时退</el-tag>
                    </el-tooltip>
                  </el-col>
                  <el-col :span="4"><span class="qian">¥120</span></el-col>
                  <el-col :span="4">
                    <span class="dingBtn"><el-button type="warning">预订</el-button></span>
                  </el-col>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="menpiao">
                  <el-col :span="10"><span class="piao">逛古都品小吃+开封府+清明上河园1日游（老三环内上门接）</span></el-col>
                  <el-col :span="4">
                    <span class= "shi">可订9月24日</span>
                  </el-col>
                  <el-col :span="1">
                    <el-tooltip placement="bottom">
                      <div slot="content">可订9月24日<br/>条件退
                      </div>
                      <el-tag size="mini">条件退</el-tag>
                    </el-tooltip>
                  </el-col>
                  <el-col :span="4"><span class="qian">¥238</span></el-col>
                  <el-col :span="4">
                    <span class="dingBtn"><el-button type="warning">预订</el-button></span>
                  </el-col>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <!--选项卡-->
        <div id="cardBox">
          <el-row :gutter="20">
            <el-col :span="24">
              <div class="grid-content bg-purple">
                <el-tabs type="border-card" v-model="activeName">
                  <el-tab-pane label="门票预订" name="first">
                    <el-row>
                      <div class="feature">
                        <span>门票预订</span>
                      </div>
                    </el-row>
                    <div id="diyBox">
                      <el-row :gutter="20">
                        <!--日历功能-->
                        <el-col :span="16">
                        <span id="diyBg">
                          <el-calendar v-model="value">
                        </el-calendar>
                        </span>
                        </el-col>
                        <el-col :span="8">
                          <el-row style="margin: 70px 0px 30px;" class="lei">
                            <span id="xzType">选择日期和购票类型</span>
                          </el-row>
                          <el-row class="lei">
                            <span id="gpsLogo">出行日期：</span>
                            <span class="block">
                              <el-date-picker
                                v-model="value"
                                type="date"
                                placeholder="选择日期">
                              </el-date-picker>
                          </span>
                          </el-row>
                          <el-row class="lei">
                            <el-col :span="4">
                              <span>人群：</span>
                            </el-col>
                            <el-col :span="20">
                              <template>
                                <el-checkbox-group v-model="checkboxGroup">
                                  <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                                </el-checkbox-group>
                              </template>
                            </el-col>
                          </el-row>
                          <el-row class="lei">
                            <span>出行人数：</span>
                            <span>
                            <span>成人</span>
                            <template>
                              <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="成人"></el-input-number>
                            </template>
                          </span>
                          </el-row>
                          <el-row class="lei">
                          <span style="margin-left: 70px;">
                            <span>儿童</span>
                            <template>
                              <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="成人"></el-input-number>
                            </template>
                          </span>
                          </el-row>
                          <el-row class="lei">
                            <span>总价：</span>
                            <span id="gola">￥238</span>
                            <el-divider class="fenge"></el-divider>
                            <span>
                            <ul>
                              <li>
                                <span style="font-size: 13px;">服务承诺:</span>
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
                                    商家承诺与消费者在交易过程中利用400电话/TQ<br/>
                                    工具进行沟通时向消费者描述的内容真实有效。
                                  </div>
                                  <el-button class="renzheng">如实描述</el-button>
                                </el-tooltip>
                              </span>
                              </li>
                            </ul>
                          </span>
                          </el-row>
                          <el-row id="btnBox">
                            <el-button type="danger">立即预订</el-button>
                            <el-button type="warning">我的行程</el-button>
                          </el-row>
                        </el-col>
                      </el-row>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="特色看点" name="second">
                    <el-row :gutter="20">
                      <el-col :span="24">
                        <div class="grid-content" bg-purple>
                          <el-row>
                            <div class="feature">
                              <span>特色看点</span>
                            </div>
                          </el-row>
                          <el-row class="neir">
                            <el-col :span="24">
                              <span>
                                清明上河园是一处位于河南省开封市龙亭湖西岸的宋代文化主题公园，同时也是中国国家5A级旅游景区和中国非物质文化遗产展演基地。
                                它是以画家张择端的写实画作《清明上河图》为蓝本，按照《营造法式》为建设标准，以宋朝市井文化、民俗风情、皇家园林和古代娱乐为题材，
                                以游客参与体验为特点的文化主题公园。集中再现原图风物景观的大型宋代民俗风情游乐园，再现了世界闻名的古都汴京千年繁华的胜景。
                                2009年，清明上河园成为中国世界纪录协会中国第一座以绘画作品为原型的仿古主题公园，是国家黄河黄金旅游专线重点历史文化旅游景区。
                              </span>
                            </el-col>
                          </el-row>
                          <el-row class="neir">
                            <span id="oppenData">开放时间：</span>
                          </el-row>
                          <el-row style="text-align: left">
                            <el-row><span>01月01日-12月31日：09:00-22:00；</span></el-row>
                            <el-row>
                              <span>
                                补充说明：东京梦华演出时间：20:10-21:20（请合理安排游玩时间，节假日若加演场次，以当天具体演出时间为准）
                              </span>
                            </el-row>
                          </el-row>
                        </div>
                      </el-col>
                      <el-col :span="24" class="tese">
                        <span>特色</span>
                      </el-col>
                      <el-col :span="24">
                        <span>
                          <ul>
                            <li>
                              <el-row>
                                <el-col :span="24">
                                  <img src="../../../assets/tese1.jpg">
                                </el-col>
                                <el-col :span="4" :offset="17" class="zhec">
                                  <el-row class="fudong"><span>拂云阁</span></el-row>
                                  <el-row>
                                    <span>
                                      拂云阁高31.99米，雄健端庄又不失隽秀舒展，
                                    供放宫廷重要文件及国画书籍，也是园内登高远眺绝佳处。
                                    </span>
                                  </el-row>
                                </el-col>
                              </el-row>
                            </li>
                            <li>
                              <el-row>
                                <el-col :span="24">
                                  <img src="../../../assets/tese2.jpg">
                                </el-col>
                                <el-col :span="4" :offset="17" class="zhec">
                                  <el-row class="fudong"><span>精彩节目</span></el-row>
                                  <el-row>
                                    <span>
                                      每天定时表演节目：包公迎宾、杨志卖刀、
                                      梁山好汉劫囚车、燕青打擂、李师师艺会情公子、
                                      王员外招婿、宋式民俗婚礼、编钟乐舞、马术、气功绝活等20余个。
                                    </span>
                                  </el-row>
                                </el-col>
                              </el-row>
                            </li>
                            <li>
                              <el-row>
                                <el-col :span="24">
                                  <img src="../../../assets/tese3.jpg">
                                </el-col>
                                <el-col :span="4" :offset="17" class="zhec">
                                  <el-row class="fudong"><span>地理条件良好</span></el-row>
                                  <el-row>
                                    <span>
                                      清明上河园地处中原腹地，豫东大平原、黄河下游大冲积扇南翼，
                                      属暖温带大陆性季风气候，四季分明，
                                      光照充足，气候温和，雨量适中。
                                    </span>
                                  </el-row>
                                </el-col>
                              </el-row>
                            </li>
                            <li>
                              <el-row>
                                <el-col :span="24">
                                  <img src="../../../assets/tese4.jpg">
                                </el-col>
                                <el-col :span="4" :offset="17" class="zhec">
                                  <el-row class="fudong"><span>汴河</span></el-row>
                                  <el-row>
                                    <span>
                                      三千八百米汴河，一展半园碧波满目情。
                                    </span>
                                  </el-row>
                                </el-col>
                              </el-row>
                            </li>
                          </ul>
                        </span>
                      </el-col>
                    </el-row>
                  </el-tab-pane>
                  <el-tab-pane label="交通位置" name="third">交通位置</el-tab-pane>
                  <el-tab-pane label="用户评论" name="fourth">
                    <el-row :gutter="20">
                      <el-col :span="24">
                        <div class="grid-content bg-purple">
                          <el-row>
                            <div class="feature">
                              <span>用户点评</span>
                            </div>
                          </el-row>
                          <el-row>
                            <div id="discussBox">
                              <el-col id="discussNav" :span="8">用户点评</el-col>
                              <el-col id="discussTu">
                                <img src="../../../assets/customized.png" alt="">
                              </el-col>
                              <el-col id="discussText" :span="16" :offset="8">
                                <el-row>
                                  <el-col :span="4"><span>评分：</span></el-col>
                                  <el-col :span="6">
                                    <el-rate
                                      v-model="value1"
                                      text-color="#ff9900"
                                      score-template="{value}">
                                    </el-rate>
                                  </el-col>
                                  <el-col :span="4">
                                    0条评论
                                  </el-col>
                                  <el-col :span="6" :offset="4">
                                    <el-button type="danger" @click="dialogFormVisible = true">点击评论</el-button>
                                  </el-col>
                                </el-row>
                              </el-col>
                            </div>
                          </el-row>
                        </div>
                        <div class="grid-content bg-purple">
                          <div class="fff">
                            <el-row style="width: 100%;margin-top: -30px;">
                              <el-col :span="2" class="userInfo">
                                <span>mofnZ</span>
                              </el-col>
                              <el-col :span="2" class="addData">
                                <span>2020-9-21</span>
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
                      </el-col>
                    </el-row>
                  </el-tab-pane>
                </el-tabs>
              <!--模态框-->
                <el-dialog title="大众点评" :visible.sync="dialogFormVisible">
                  <el-form :model="form">
                    <el-form-item label="评分:" :label-width="formLabelWidth">
                      <el-row>
                        <el-rate v-model="value2" :colors="colors" id="pattDemon">
                        </el-rate>
                      </el-row>
                      <el-row id="pattern">点击星星进行评价</el-row>
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
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
      <el-footer>
        <publicF></publicF>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
  import publicZ from '../public/publicZ';
  import publicF from '../public/public_foot';
  const crowdOptions = ['成人', '儿童']
  export default {
    data() {
      return {
        // 选项卡功能
        activeName: 'first',
        // 日历控件
        value: new Date(),
        // 出行日期
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          // 评分
          value3: 3.7,
          // 评分
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
        value1: '',
        value2: '',
        // 购票类型
        checkboxGroup: ['成人'],
        cities: crowdOptions,
        // 购买人数
        num: 1,
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
    name:"Selfdrive",
    components: {
      publicZ,
      publicF,
    },
    methods: {
      // 购买人数
      handleChange(value) {
        console.log(value);
      },
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
    }
  }
</script>
<style>
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
  #sicket {
    width: 100%;
    height: 320px;
    margin-top: 20px;
    border: 2px solid #B3B5B3;
  }
  /*页头、页尾部分*/
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }
  /*页面内容部分*/
  .el-main {
    color: #333;
    text-align: center;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-breadcrumb {
    font-size: 14px;
    line-height: 30px;
    margin-left: 20px;
  }
  /*面包屑导航*/
  #crumbs {
    width: 100%;
    height: 30px;
    border: 2px solid #ff8300;
    background-color: #fffbf5;
  }
  /*轮播图部分*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-image: url("../../../assets/yihe1.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .el-carousel__item:nth-child(3n+1) {
    background-image: url("../../../assets/yihe2.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .el-carousel__item:nth-child(4n+1) {
    background-image: url("../../../assets/yihe3.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .el-carousel__item:nth-child(5n+1) {
    background-image: url("../../../assets/yihe4.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .el-carousel__item:nth-child(6n+1) {
    background-image: url("../../../assets/yihe5.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .el-carousel__item:nth-child(7n+1) {
    background-image: url("../../../assets/yihe6.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  #benner {
    margin-top: 10px;
    margin-left: 10px;
  }
  /*景点信息*/
  #scenicName {
    font-size: 30px;
    color: #ff8300;
  }
  #scenicD {
    font-size: 18px;
    line-height: 55px;
    color: #535353;
  }
  /*景点介绍*/
  #biaoyu {
    margin-left: 10px;
    font-size: 20px;
    color: #535353;
  }
  /*景区位置*/
  #gpsBox {
    margin-left: -60px;
    line-height: 40px;
  }
  #gpsLogo {
    font-size: 13px;
  }
  #gpsName {
    font-size: 13px;
  }
  /*用户点评*/
  #markBox {
    margin-left: -100px;
  }
  #userRemark {
    font-size: 13px;
  }
  #rank {
    color: #ff8300;
    font-size: 20px;
  }
  #rankB {
    font-size: 15px;
  }
  /*服务介绍*/
  .chanpin {
    margin-left: 10px;
  }
  #fuwu {
    margin-top: 20px;
    border-top: 1px dashed #B3B5B3;
  }
  #fuwu li {
    margin-top: 15px;
    margin-left: -40px;
  }
  .renzheng {
    margin: 0;
    padding: 0;
    font-size: 12px;
    margin-left: 10px;
    border: 1px solid transparent;
  }
  /*购票价格*/
  #rateBox {
    line-height: 110px;
    margin-left: 30px;
  }
  #jiage {
    font-size: 40px;
    color: #ff8300;
  }
  #qi {
    font-size: 13px;
  }
  #order {
    line-height: 110px;
    margin-left: 140px;
  }
  /*热门推荐*/
  #remen {
    text-align: left;
    line-height: 50px;
    margin-left: 20px;
  }
  #remenD {
    float: left;
    width: 100%;
    height: 50px;
    margin-top: 20px;
    border: 2px solid #FF8300;
    background-color: #fffbf5;
  }
  #remenTu {
    width: 20%;
    height: 28px;
    text-align: left;
    margin-top: -30px;
  }
  /*热门门票*/
  #reBox {
    width: 100%;
    height: auto;
    border: 2px solid #FF8300;
  }
  .menpiao {
    width: 95%;
    height: 70px;
    margin: 0 auto;
    text-align: left;
    line-height: 70px;
    border-bottom: 1px dashed #FF8300;
  }
  .piao {
    font-size: 16px;
  }
  .shi {
    font-size: 13px;
    margin-left: 50px;
  }
  .qian {
    color: #FF8300;
    font-size: 25px;
    margin-left: 40px;
  }
  .dingBtn {
    margin-left: 60px;
  }
  /*选项卡功能*/
  #cardBox {
    margin-top: 20px;
  }
  /*门票预订*/
  #diyBox {
    width: 100%;
    height: 662px;
    margin-top: 20px;
    border: 2px solid #B3B5B3;
  }
  #diyBg {
    width: 100%;
    height: 300px;
  }
  #xzType {
    width: 100%;
    height: 30px;
    font-size: 20px;
    color: #FF8300;
  }
  .lei {
    margin: 25px 0px 25px;
    text-align: left;
    font-size: 13px;
  }
  #gola {
    font-size: 30px;
    color: #FF8300;
   }
  /*分割线*/
  .fenge {
    width: 90%;
  }
  #btnBox {
    margin: 50px 0px;
    margin-left: -35px;
  }
  /*特色看点*/
  .feature {
    float: left;
    width: 100%;
    height: 30px;
    font-size: 20px;
    text-align: left;
    line-height: 25px;
    margin-top: 20px;
    border-bottom: 3px solid #B3B5B3;
  }
  .neir {
    text-align: left;
    font-size: 18px;
    margin-top: 40px;
  }
  #oppenData {
    font-size: 25px;
  }
  .tese {
    font-size: 20px;
    margin-top: 20px;
  }
  .zhec {
    height: 100%;
    position: absolute;
    left: 45px;
    color: white;
    background-color: rgba(0,0,0,0.5);
  }
  .fudong {
    margin-top: 20px;
  }
  /*用户评论*/
  #discussBox {
    float: left;
    width: 99%;
    height: 80px;
    margin-top: 20px;
    border: 2px solid #FF8300;
    background-color: #fffbf5;
    display: flex;
    align-items: center;
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
    position: absolute;
    bottom: 2px;
  }
  #discussText {
    width: 40%;
    height: 30px;
    font-size: 21px;
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
