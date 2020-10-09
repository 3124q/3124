<template>
  <el-container>
    <el-main>
      <el-row style="height: 100vh">
        <video width="100%" height="100%" autoplay="true" style="object-fit: cover;" muted loop>
          <source type="video/mp4" src="http://47.104.241.112/static/video/1287.mp4" >
        </video>
        <el-row class="menu_box">
          <el-col :span="2">
            <span class="web_name">xx旅游</span>
            <img class="logo" src="">
          </el-col>
          <el-col :span="2" :offset="20">
            <img class="open_btn" @click="openHamburger" src="http://47.104.241.112/static/img/menu1.423191ca.svg">
          </el-col>
          <el-row class="menu" :class="hamburger_btn ? 'open' : 'close'">
            <el-col :span="2" :offset="22" style="margin-top: 30px;">
              <img class="close_btn" @click="closeHamburger" src="http://47.104.241.112/static/img/x.svg">
            </el-col>
            <el-row :gutter="10" style="width: 90%;margin: 0 auto">
              <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <i>登陆/注册</i>
                <br>
                <i>Login/enroll</i>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <i>酒店</i>
                <br>
                <i>Hotel</i>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <i>景点</i>
                <br>
                <i>scenic spot</i>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <i>客服</i>
                <br>
                <i>customer service</i>
              </el-col>
            </el-row>
          </el-row>
        </el-row>
        <el-row class="search_box" ref="search_box">
          <el-col :span="24">
            <el-col class="search_title" :span="10" :offset="7">生活的轨迹在此相交。</el-col>
            <el-col class="search_text" :span="14" :offset="5">The trajectory of life intersects here.</el-col>
            <el-col>
              <input type="text" class="search_keyword" placeholder="请输入要搜索信息">
              <svg t="1600880401548" class="icon search_btn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2907" width="200" height="200"><path d="M379.4890625 138.978125A358.59375 358.59375 0 0 1 753.734375 679.484375 379.6875 379.6875 0 0 1 379.4890625 139.0203125z" fill="#7be7dd" p-id="2908"></path><path d="M711.715625 685.221875a295.3125 295.3125 0 1 0-220.6828125 99.05625 42.1875 42.1875 0 0 1 0 84.375 379.6875 379.6875 0 1 1 300.88125-148.078125l97.959375 99.9c19.575 19.9546875 19.40625 51.9328125-0.3375 71.71875l-0.3375 0.3375a50.4140625 50.4140625 0 0 1-71.6765625-0.3796875l-121.9640625-124.36875a50.9203125 50.9203125 0 0 1 0.3375-71.6765625l0.3375-0.3375c4.640625-4.5984375 9.871875-8.1 15.4828125-10.546875z m-385.59375-300.4171875h337.5a42.1875 42.1875 0 1 1 0 84.375h-337.5a42.1875 42.1875 0 1 1 0-84.375z m0 168.75h210.9375a42.1875 42.1875 0 0 1 0 84.375h-210.9375a42.1875 42.1875 0 1 1 0-84.375z" fill="#3c8cff" p-id="2909"></path></svg>
            </el-col>
          </el-col>
        </el-row>
        <el-row class="home_bottom enroll_box" style="background: rgb(90, 90, 90);">
          <el-col :span="20" :offset="2">
            <el-col :span="4">
              <img src="http://demo2.cssmoban.com/cssthemes6/zfsafadsad/images/1111.png">
            </el-col>
            <el-col :span="14">
              <h3>来一次说走走的旅行吧！</h3>
              <p>旅行是一个过程，一次发现。是一个自我发现的过程。真正的旅行让我们直面自我。</p>
            </el-col>
            <el-col :span="6" style="line-height: 20vh">
              <router-link :to="nowUser ? '/home/enroll' : '/personalcenter/home'">
                <el-button class="enroll_btn" type="primary" round>
                  <span v-if="nowUser==false">个人中心</span>
                  <span v-if="nowUser==true">注册账号</span>
                </el-button>
              </router-link>
            </el-col>
          </el-col>
        </el-row>
      </el-row>
      <div class="scroll_img" :style="{'background-image':'url('+background_1+')','background-position-y':positionY1+'px'}" ref="img1"></div>
      <div class="scroll_text" id="1">
        <el-row class="recommend_box">
          <el-col :span="22" :offset="1" style="margin: 10px 5.5%;">
            <el-row>
              <el-col :span="5">
                <span class="recommend_title">热门推荐</span>
              </el-col>
              <el-col :span="14" style="margin: 0 1%;">
                <el-tabs>
                  <el-tab-pane label="自由行" name="first"></el-tab-pane>
                  <el-tab-pane label="自驾游" name="second"></el-tab-pane>
                  <el-tab-pane label="跟团游" name="third"></el-tab-pane>
                </el-tabs>
              </el-col>
              <el-col :span="1" :offset="3">
                <span class="recommend_more">更多></span>
              </el-col>
            </el-row>
            <el-row>
              <el-col class="recommend_item recommend_menu" :span="5">
                <div class="recommend_menu_box" style="height: 100px;">
                  <h3>热门主题</h3>
                  <ul>
                    <li>自由行</li>
                    <li>自驾游</li>
                    <li>亲子游</li>
                    <li>户外游</li>
                    <li>摄影游</li>
                    <li>跟团游</li>
                  </ul>
                </div>
                <div class="recommend_menu_box" style="height: 160px;">
                  <h3>热门目的地</h3>
                  <ul>
                    <li>重庆</li>
                    <li>北京</li>
                    <li>甘肃</li>
                    <li>广州</li>
                    <li>青岛</li>
                    <li>内蒙古</li>
                    <li>安徽</li>
                    <li>西藏</li>
                    <li>湖北</li>
                    <li>江西</li>
                    <li>四川</li>
                    <li>新疆</li>
                  </ul>
                </div>
                <div class="recommend_menu_box">
                  <h3>游玩天数</h3>
                  <ul>
                    <li>1-3天</li>
                    <li>4-6天</li>
                    <li>7-9天</li>
                    <li>10天以上</li>
                  </ul>
                </div>
              </el-col>
              <el-col class="recommend_item" :span="14" style="margin: 0 1%;">
                <el-col class="recommend_first" :span="14">
                  <div style="height: 70%;">
                    <img class="recommend_img" :src="firstScenic.scenic_img_url">
                  </div>
                  <div class="recommend_first_box" style="height: 30%;">
                    <p class="recommend_detail">{{ firstScenic.scenic_name }}</p>
                    <h3 class="recommend_price">￥ {{ firstScenic.scenic_price }} /人</h3>
                  </div>
                </el-col>
                <el-col :span="10" style="height: 100%;">
                  <el-row class="recommend_second">
                    <img class="recommend_img" :src="secondScenic.scenic_img_url">
                    <div class="recommend_second_box" style="height: 30%;">
                      <p class="recommend_detail" style="font-size: 80%">{{ secondScenic.scenic_name }}</p>
                      <h3 class="recommend_price" style="margin: -10px 10px;">￥ {{ secondScenic.scenic_price }}/人</h3>
                    </div>
                  </el-row>
                  <el-col class="recommend_third" :span="12" style="padding-left: 0">
                    <img class="recommend_img" style="height: 100%" :src="thirdScenic.scenic_img_url">
                    <div class="recommend_third_box">
                      <p class="recommend_third_title">{{ thirdScenic.scenic_add }}</p>
                      <p class="recommend_third_price">￥ {{ thirdScenic.scenic_price }}/人</p>
                    </div>
                  </el-col>
                  <el-col class="recommend_third" :span="12" style="padding-right: 0">
                    <img class="recommend_img" style="height: 100%" :src="forthScenic.scenic_img_url">
                    <div class="recommend_third_box">
                      <p class="recommend_third_title">{{ forthScenic.scenic_add }}</p>
                      <p class="recommend_third_price">￥ {{ forthScenic.scenic_price }}/人</p>
                    </div>
                  </el-col>
                </el-col>
              </el-col>
              <el-col class="recommend_item" :span="4">
                <el-carousel direction="vertical" :autoplay="false">
                  <el-carousel-item v-for="(item,i) in activity_array" :key="i">
                    <el-row class="recommend_propaganda">
                      <img class="recommend_medium" :src=item.activity_background>
                      <el-row class="recommend_out_box">
                        <el-row class="recommend_center">
                          <p>活动时间：{{ item.activity_time }}</p>
                          <p>活动详情：{{ item.activity_details }}</p>
                        </el-row>
                      </el-row>
                    </el-row>
                  </el-carousel-item>
                </el-carousel>
              </el-col>
              <el-col :span="17">
                <el-col :span="7">
                  <span class="recommend_title" style="padding: 0 5%;font-size: 100%;">相关博客</span>
                </el-col>
                <el-col :span="2" :offset="15">
                  <span class="recommend_more">更多></span>
                </el-col>
              </el-col>
              <el-col class="recommend_item recommend_blog" :span="17">
                <el-col :span="6" v-for="(item, i) in blog_array" :key="i" style="padding: 0 3px;">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <el-image
                      style="width: 100%; height: 135px"
                      :src=item.blog_img
                      fit="fill"></el-image>
                    <div>
                      <span class="recommend_blog_title">{{ item.blog_name }}</span>
                      <el-row>
                        <el-col :span="10" style="margin-top: 16px">
                          <span class="recommend_blog_read">{{ item.blog_read_num }}人阅读</span>
                        </el-col>
                        <el-col :span="4" :offset="6" style="margin-top: 20px">
                          <span class="recommend_blog_time">{{ item.blog_time }}</span>
                        </el-col>
                      </el-row>
                    </div>
                  </el-card>
                </el-col>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="scroll_img" :style="{'background-image':'url('+background_2+')','background-position-y':positionY2+'px'}" ref="img2"></div>
      <div class="scroll_text" id="2">
        <el-col class="accordion__box" :span="22" :offset="1">
          <el-row>
            <el-tabs v-model="activeName">
              <el-tab-pane label="特惠路线" name="first"></el-tab-pane>
              <el-tab-pane label="新品推荐" name="second"></el-tab-pane>
              <el-tab-pane label="国内热门" name="third"></el-tab-pane>
              <el-tab-pane label="境外热门" name="fourth"></el-tab-pane>
            </el-tabs>
          </el-row>
          <el-row class="accordion__ul">
            <el-col class="accordion__li" v-for="(item,i) in tour_group_array" :key="i" :class="item.open ? 'accordion_hover' : 'accordion_leave'">
              <el-col class="accordion_img_box">
                <img :src= item.tour_group_image_url class="accordion_img" @mouseenter="enter(i)">
              </el-col>
              <el-col>
                <transition name="el-zoom-in-center">
                  <div class="accordion_info" :class="item.open ? 'show' : 'hidden'" v-show="item.open">
                    <el-row class="accordion_center">
                      <el-col class="accordion_item_1">
                        <span>￥ {{ item.tour_group_price }}</span>
                      </el-col>
                      <el-divider class="accordion_divider"></el-divider>
                      <el-col class="accordion_item_2">
                        <span>拉萨集合</span>
                      </el-col>
                    </el-row>
                  </div>
                </transition>
              </el-col>
              <el-col>
                <transition name="el-zoom-in-bottom">
                  <div class="accordion_detail" :class="item.open ? 'show' : 'hidden'" v-show="item.open">
                    <el-col :span="17" :offset="1"> {{ item.tour_group_details }} </el-col>
                    <el-col :span="5" :offset="1">
                      <el-button type="primary" plain>立即报名</el-button>
                    </el-col>
                  </div>
                </transition>
              </el-col>
              <el-col>
                <div class="accordion_mini_title" :class="item.open ? 'hidden' : 'show'" @mouseenter="enter(i)">
                  <el-col :span="24" style="position: absolute;bottom: 0;">
                    <p style="font-size: 130%;font-weight: 600">{{ item.tour_group_add }}</p>
                    <p>拉萨集合</p>
                  </el-col>
                </div>
              </el-col>
            </el-col>
          </el-row>
        </el-col>
        <el-row class="propaganda">
          <el-col class="propaganda_title" :span="23" :offset="1">特色宣传</el-col>
          <el-col style="margin-top: 10px;">
            <el-col :span="11" :offset="1">
              <img src="https://cdn.gootoai.com/skin/pc/static/picture/86091533544014.jpg">
            </el-col>
            <el-col :span="11">
              <img src="https://cdn.gootoai.com/skin/pc/static/picture/26351533612380.png">
            </el-col>
            <el-col :span="11" :offset="1">
              <img src="https://cdn.gootoai.com/skin/pc/static/picture/52711533544787.jpg">
            </el-col>
            <el-col :span="11">
              <img src="https://cdn.gootoai.com/skin/pc/static/picture/36101516960903.jpg">
            </el-col>
          </el-col>
        </el-row>
      </div>
      <div class="scroll_img" :style="{'background-image':'url('+background_3+')','background-position-y':positionY3+'px'}" ref="img3"></div>
      <div class="scroll_text" id="3">
        <el-row>
          <el-col class="hotel_menu" :span="2" :offset="1">
            <el-tabs tab-position="left" style="height: 533px;">
              <el-tab-pane label="国内酒店"></el-tab-pane>
              <el-tab-pane label="国际酒店"></el-tab-pane>
              <el-tab-pane label="客栈公寓"></el-tab-pane>
            </el-tabs>
            <svg id="Layer_1" class="hotel_layer" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 725.98 472.89"><defs><clipPath id="clip-path" transform="translate(84.55 -32.05)"><path d="M89.33,427.88c25,13.14,53.88,16.76,82.08,18.85,46.76,3.46,93.7,3.3,140.59,3.13,27.09-.1,54.77-.3,80.34-9.26,48.78-17.09,81.81-63.48,100.37-111.72C518.83,261,518.49,177.45,478.22,115,454.9,78.78,417.8,50.84,375.6,42.35c-43.08-8.67-87.37,2.8-131.29,4.25-28.28.92-56.58-2.33-84.87-1.44S102,51.51,78.93,67.93c-23.64,16.82-38.6,43.69-46.46,71.62s-9.32,57.19-10.73,86.17c-1.59,32.54-2.63,62.2,2.11,94.68,2.9,19.87,5.35,45,14.6,63.12S71.72,418.64,89.33,427.88Z" fill="none"/></clipPath><linearGradient id="linear-gradient" x1="460.58" y1="161.52" x2="468.73" y2="49.01" gradientUnits="userSpaceOnUse"><stop offset="0.02" stop-color="#fff" stop-opacity="0"/><stop offset="0.49" stop-color="#fff" stop-opacity="0.68"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="linear-gradient-2" x1="426.79" y1="187.79" x2="434.95" y2="75.28" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-3" x1="7875.57" y1="150.51" x2="7883.72" y2="38" gradientTransform="matrix(-1, 0, 0, 1, 7971.87, 0)" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-4" x1="328.5" y1="297.51" x2="358.72" y2="576.3" gradientUnits="userSpaceOnUse"><stop offset="0.01"/><stop offset="0.13" stop-opacity="0.69"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="linear-gradient-5" x1="538.79" y1="262.3" x2="561.53" y2="240.2" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-6" x1="530.14" y1="291.32" x2="593.5" y2="236.41" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-7" x1="408.18" y1="275.39" x2="411.75" y2="331.28" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-8" x1="427.69" y1="206.59" x2="482.93" y2="91.57" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-9" x1="281.33" y1="139.31" x2="282.63" y2="110.71" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-10" x1="534.17" y1="329.07" x2="608.91" y2="301.78" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-11" x1="524.8" y1="315.39" x2="530.65" y2="286.58" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-12" x1="491.93" y1="223.1" x2="558.21" y2="214.87" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-13" x1="521.01" y1="302.75" x2="526.86" y2="103.24" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-14" x1="492.45" y1="-347.74" x2="530.93" y2="845.17" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-15" x1="498.78" y1="-369.18" x2="537.26" y2="823.73" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-16" x1="516.76" y1="-341.02" x2="555.24" y2="851.89" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-17" x1="511.13" y1="-368.75" x2="549.61" y2="824.16" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-18" x1="504.63" y1="-386.73" x2="543.11" y2="806.18" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-19" x1="371.85" y1="287.63" x2="415.18" y2="225.68" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-20" x1="389.82" y1="254.81" x2="396.69" y2="277.54" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-21" x1="382.03" y1="298.58" x2="404.12" y2="247.89" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-22" x1="414.02" y1="269.06" x2="402.65" y2="285.63" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-23" x1="403.53" y1="290.09" x2="420.59" y2="263.6" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-24" x1="357.08" y1="302.09" x2="413.4" y2="294.72" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-25" x1="395.49" y1="288.36" x2="400.69" y2="329.08" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-26" x1="385.13" y1="404.8" x2="453.36" y2="233.89" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-27" x1="379.43" y1="371.49" x2="415.17" y2="278.56" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-28" x1="280.27" y1="147.37" x2="284.6" y2="120.51" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-29" x1="502.2" y1="72.72" x2="475.88" y2="145.83" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-30" x1="456.61" y1="86.47" x2="502.1" y2="180.69" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-31" x1="506.91" y1="102.6" x2="458.17" y2="347.27" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-32" x1="435.9" y1="231.5" x2="543.13" y2="132.07" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-33" x1="469.04" y1="306.42" x2="490.27" y2="252.26" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-34" x1="435.31" y1="378.94" x2="558.78" y2="278.87" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-35" x1="431.41" y1="379.38" x2="554.88" y2="279.3" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-36" x1="486.29" y1="318.69" x2="537.84" y2="224.24" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-37" x1="501.31" y1="268.82" x2="512.52" y2="245.59" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-38" x1="502.5" y1="268.35" x2="513.05" y2="246.48" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-39" x1="489.14" y1="265.22" x2="491.17" y2="256.93" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-40" x1="358.68" y1="209.78" x2="364.77" y2="209.78" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-41" x1="469.91" y1="188.66" x2="421.39" y2="289.6" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-42" x1="383.08" y1="214.12" x2="478.93" y2="267.73" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-43" x1="442.82" y1="190" x2="449.52" y2="190" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-44" x1="356.44" y1="228.74" x2="366.22" y2="228.74" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-45" x1="436.16" y1="205.48" x2="455.33" y2="205.48" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-46" x1="446.23" y1="204.5" x2="446.23" y2="219.67" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-47" x1="403.92" y1="288.19" x2="465.87" y2="285.15" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-48" x1="451.47" y1="255.27" x2="441.72" y2="302.92" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-49" x1="345.3" y1="310.59" x2="358.3" y2="236.51" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-50" x1="372.52" y1="308.34" x2="355.62" y2="210.87" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-51" x1="360.95" y1="281.23" x2="363.55" y2="330.62" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-52" x1="375.09" y1="370.14" x2="510.26" y2="343.5" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-53" x1="450.38" y1="436.82" x2="450.38" y2="274.04" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-54" x1="444.05" y1="381.47" x2="453.52" y2="396.53" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-55" x1="449.04" y1="244.67" x2="452.94" y2="338.9" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-56" x1="444.59" y1="263.23" x2="460.19" y2="405.55" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-57" x1="409.69" y1="329.25" x2="465.79" y2="314.3" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-58" x1="412.52" y1="325.81" x2="447.29" y2="317.37" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-59" x1="413.64" y1="352.55" x2="450.03" y2="335.87" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-60" x1="419.76" y1="353.51" x2="450.74" y2="342.03" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-61" x1="450.51" y1="307.83" x2="450.51" y2="385.81" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-62" x1="403.31" y1="384.39" x2="503.06" y2="449.37" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-63" x1="432.18" y1="369.67" x2="487.74" y2="418.41" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-64" x1="433.66" y1="367.98" x2="489.23" y2="416.72" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-65" x1="429.32" y1="373.83" x2="484.88" y2="422.57" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-66" x1="421.81" y1="382.39" x2="477.37" y2="431.13" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-67" x1="427.42" y1="376" x2="482.98" y2="424.74" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-68" x1="163.05" y1="306.82" x2="293.89" y2="262.2" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-69" x1="186.66" y1="129.65" x2="187.75" y2="208.94" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-70" x1="57.32" y1="307.61" x2="228.02" y2="299.38" gradientUnits="userSpaceOnUse"><stop offset="0.02" stop-color="#fff" stop-opacity="0"/><stop offset="0.62" stop-color="#fff" stop-opacity="0.68"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="linear-gradient-71" x1="211.79" y1="119.76" x2="171.5" y2="165.25" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-72" x1="225.07" y1="160.82" x2="184.94" y2="181.77" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-73" x1="282.02" y1="248.51" x2="279.42" y2="83.01" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-74" x1="281.22" y1="158.8" x2="281.22" y2="129.34" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-75" x1="269.75" y1="194.07" x2="368.09" y2="175.88" xlink:href="#linear-gradient-70"/><linearGradient id="linear-gradient-76" x1="177.1" y1="303.67" x2="234.61" y2="287.75" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-77" x1="156.88" y1="218.95" x2="159.04" y2="185.59" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-78" x1="98.79" y1="367.26" x2="323.97" y2="133.31" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-79" x1="140.67" y1="240.03" x2="122.47" y2="355.71" xlink:href="#linear-gradient-70"/><linearGradient id="linear-gradient-80" x1="147.08" y1="283.14" x2="161.81" y2="283.14" xlink:href="#linear-gradient-70"/><linearGradient id="linear-gradient-81" x1="199.24" y1="332.49" x2="84.22" y2="369.53" xlink:href="#linear-gradient-70"/><linearGradient id="linear-gradient-82" x1="152.5" y1="350.56" x2="167.66" y2="350.56" xlink:href="#linear-gradient-70"/><linearGradient id="linear-gradient-83" x1="140.08" y1="235.84" x2="124.16" y2="312.2" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-84" x1="153.05" y1="240.31" x2="132.58" y2="331.94" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-85" x1="63.11" y1="417.47" x2="234.67" y2="264.11" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-86" x1="106.97" y1="333.12" x2="134.05" y2="285.69" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-87" x1="306.36" y1="239.49" x2="307.22" y2="233.68" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-88" x1="306.36" y1="244.23" x2="307.22" y2="238.43" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-89" x1="306.36" y1="249.32" x2="307.22" y2="243.51" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-90" x1="306.36" y1="254.4" x2="307.22" y2="248.6" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-91" x1="306.36" y1="259.49" x2="307.22" y2="253.68" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-92" x1="306.36" y1="264.57" x2="307.22" y2="258.77" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-93" x1="306.36" y1="269.66" x2="307.22" y2="263.85" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-94" x1="306.36" y1="274.74" x2="307.22" y2="268.94" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-95" x1="306.36" y1="279.83" x2="307.22" y2="274.02" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-96" x1="306.36" y1="284.92" x2="307.22" y2="279.11" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-97" x1="306.36" y1="290" x2="307.22" y2="284.2" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-98" x1="306.36" y1="295.09" x2="307.22" y2="289.28" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-99" x1="306.36" y1="300.17" x2="307.22" y2="294.37" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-100" x1="306.36" y1="305.26" x2="307.22" y2="299.45" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-101" x1="306.36" y1="310.34" x2="307.22" y2="304.54" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-102" x1="306.36" y1="315.43" x2="307.22" y2="309.62" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-103" x1="306.36" y1="320.51" x2="307.22" y2="314.71" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-104" x1="306.36" y1="325.6" x2="307.22" y2="319.79" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-105" x1="306.36" y1="330.68" x2="307.22" y2="324.88" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-106" x1="306.36" y1="335.77" x2="307.22" y2="329.96" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-107" x1="306.36" y1="340.85" x2="307.22" y2="335.05" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-108" x1="306.36" y1="345.94" x2="307.22" y2="340.13" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-109" x1="306.36" y1="351.02" x2="307.22" y2="345.22" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-110" x1="306.36" y1="356.11" x2="307.22" y2="350.3" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-111" x1="306.36" y1="361.19" x2="307.22" y2="355.39" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-112" x1="306.36" y1="366.28" x2="307.22" y2="360.47" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-113" x1="306.36" y1="371.36" x2="307.22" y2="365.56" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-114" x1="306.36" y1="376.45" x2="307.22" y2="370.65" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-115" x1="306.36" y1="381.54" x2="307.22" y2="375.73" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-116" x1="258.69" y1="443.02" x2="275.48" y2="104.97" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-117" x1="264.12" y1="247.21" x2="267.61" y2="223.61" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-118" x1="264.12" y1="251.96" x2="267.61" y2="228.35" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-119" x1="264.12" y1="257.04" x2="267.61" y2="233.44" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-120" x1="264.12" y1="262.13" x2="267.61" y2="238.52" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-121" x1="264.12" y1="267.21" x2="267.61" y2="243.61" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-122" x1="264.12" y1="272.3" x2="267.61" y2="248.69" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-123" x1="264.12" y1="277.38" x2="267.61" y2="253.78" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-124" x1="264.12" y1="282.47" x2="267.61" y2="258.86" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-125" x1="264.12" y1="287.55" x2="267.61" y2="263.95" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-126" x1="264.12" y1="292.64" x2="267.61" y2="269.03" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-127" x1="264.12" y1="297.72" x2="267.61" y2="274.12" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-128" x1="264.12" y1="302.81" x2="267.61" y2="279.21" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-129" x1="264.12" y1="307.89" x2="267.61" y2="284.29" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-130" x1="264.12" y1="312.98" x2="267.61" y2="289.38" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-131" x1="264.12" y1="318.06" x2="267.61" y2="294.46" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-132" x1="264.12" y1="323.15" x2="267.61" y2="299.55" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-133" x1="264.12" y1="328.24" x2="267.61" y2="304.63" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-134" x1="264.12" y1="333.32" x2="267.61" y2="309.72" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-135" x1="264.12" y1="338.41" x2="267.61" y2="314.8" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-136" x1="264.12" y1="343.49" x2="267.61" y2="319.89" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-137" x1="264.12" y1="348.58" x2="267.61" y2="324.97" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-138" x1="264.12" y1="353.66" x2="267.61" y2="330.06" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-139" x1="264.12" y1="358.75" x2="267.61" y2="335.14" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-140" x1="264.12" y1="363.83" x2="267.61" y2="340.23" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-141" x1="264.12" y1="368.92" x2="267.61" y2="345.31" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-142" x1="264.12" y1="374" x2="267.61" y2="350.4" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-143" x1="264.12" y1="379.09" x2="267.61" y2="355.48" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-144" x1="264.12" y1="384.17" x2="267.61" y2="360.57" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-145" x1="264.12" y1="389.26" x2="267.61" y2="365.66" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-146" x1="257.06" y1="360.89" x2="354.54" y2="454.14" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-147" x1="224.74" y1="239.49" x2="225.59" y2="233.68" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-148" x1="224.74" y1="244.23" x2="225.59" y2="238.43" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-149" x1="224.74" y1="249.32" x2="225.59" y2="243.51" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-150" x1="224.74" y1="254.4" x2="225.59" y2="248.6" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-151" x1="224.74" y1="259.49" x2="225.59" y2="253.68" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-152" x1="224.74" y1="264.57" x2="225.59" y2="258.77" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-153" x1="224.74" y1="269.66" x2="225.59" y2="263.85" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-154" x1="224.74" y1="274.74" x2="225.59" y2="268.94" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-155" x1="224.74" y1="279.83" x2="225.59" y2="274.02" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-156" x1="224.74" y1="284.92" x2="225.59" y2="279.11" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-157" x1="224.74" y1="290" x2="225.59" y2="284.2" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-158" x1="224.74" y1="295.09" x2="225.59" y2="289.28" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-159" x1="224.74" y1="300.17" x2="225.59" y2="294.37" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-160" x1="224.74" y1="305.26" x2="225.59" y2="299.45" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-161" x1="224.74" y1="310.34" x2="225.59" y2="304.54" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-162" x1="224.74" y1="315.43" x2="225.59" y2="309.62" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-163" x1="224.74" y1="320.51" x2="225.59" y2="314.71" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-164" x1="224.74" y1="325.6" x2="225.59" y2="319.79" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-165" x1="224.74" y1="330.68" x2="225.59" y2="324.88" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-166" x1="224.74" y1="335.77" x2="225.59" y2="329.96" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-167" x1="224.74" y1="340.85" x2="225.59" y2="335.05" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-168" x1="224.74" y1="345.94" x2="225.59" y2="340.13" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-169" x1="224.74" y1="351.02" x2="225.59" y2="345.22" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-170" x1="224.74" y1="356.11" x2="225.59" y2="350.3" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-171" x1="224.74" y1="361.19" x2="225.59" y2="355.39" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-172" x1="224.74" y1="366.28" x2="225.59" y2="360.47" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-173" x1="224.74" y1="371.36" x2="225.59" y2="365.56" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-174" x1="224.74" y1="376.45" x2="225.59" y2="370.65" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-175" x1="224.74" y1="381.54" x2="225.59" y2="375.73" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-176" x1="179.28" y1="385.37" x2="355.18" y2="208.54" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-177" x1="326.93" y1="292.14" x2="330.83" y2="120.58" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-178" x1="409.35" y1="344" x2="210.5" y2="224.43" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-179" x1="362.51" y1="298.1" x2="296.23" y2="290.3" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-180" x1="360.46" y1="298.18" x2="247.82" y2="323.74" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-181" x1="344.8" y1="273.63" x2="397.45" y2="140.78" xlink:href="#linear-gradient-70"/><linearGradient id="linear-gradient-182" x1="337.65" y1="325.55" x2="407.84" y2="147.93" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-183" x1="363.7" y1="155.72" x2="345.07" y2="222.87" xlink:href="#linear-gradient-70"/><linearGradient id="linear-gradient-184" x1="356.29" y1="171.24" x2="370.42" y2="158.25" xlink:href="#linear-gradient-70"/><linearGradient id="linear-gradient-185" x1="324.01" y1="318.15" x2="405.9" y2="469.78" xlink:href="#linear-gradient-70"/><linearGradient id="linear-gradient-186" x1="350.44" y1="303.02" x2="398.09" y2="346.78" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-187" x1="352.46" y1="317.17" x2="370.01" y2="298.49" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-188" x1="360.29" y1="308.86" x2="375.89" y2="291.15" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-189" x1="383.87" y1="281.96" x2="404.45" y2="304.27" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-190" x1="317.42" y1="390.67" x2="445.12" y2="330.23" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-191" x1="372.66" y1="355.32" x2="373.75" y2="388.9" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-192" x1="372.66" y1="360.41" x2="373.75" y2="393.99" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-193" x1="372.66" y1="365.5" x2="373.75" y2="399.08" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-194" x1="372.66" y1="370.59" x2="373.75" y2="404.17" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-195" x1="368.23" y1="400.56" x2="552.46" y2="208.53" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-196" x1="528.04" y1="312.25" x2="524.79" y2="281.27" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-197" x1="492.24" y1="322.25" x2="529.93" y2="267.67" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-198" x1="519.12" y1="413.33" x2="543.49" y2="203.75" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-199" x1="540.06" y1="432.06" x2="545.91" y2="294.94" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-200" x1="513.67" y1="423.09" x2="519.52" y2="339.91" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-201" x1="348.72" y1="415.91" x2="355.54" y2="369.77" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-202" x1="350.99" y1="398.14" x2="354.03" y2="357.85" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-203" x1="265.41" y1="210.76" x2="265.19" y2="249.53" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-204" x1="281.98" y1="210.76" x2="281.76" y2="249.53" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-205" x1="298.33" y1="210.76" x2="298.12" y2="249.53" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-206" x1="202.57" y1="245.72" x2="203.22" y2="263.05" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-207" x1="209.47" y1="245.72" x2="210.12" y2="263.05" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-208" x1="216.38" y1="245.72" x2="217.03" y2="263.05" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-209" x1="223.28" y1="245.72" x2="223.93" y2="263.05" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-210" x1="230.19" y1="245.72" x2="230.84" y2="263.05" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-211" x1="237.09" y1="245.72" x2="237.74" y2="263.05" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-212" x1="244" y1="245.72" x2="244.65" y2="263.05" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-213" x1="250.9" y1="245.72" x2="251.55" y2="263.05" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-214" x1="257.81" y1="245.72" x2="258.46" y2="263.05" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-215" x1="364.44" y1="222.16" x2="364.03" y2="210.63" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-216" x1="330.13" y1="232.04" x2="328.91" y2="273.02" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-217" x1="330.13" y1="236.79" x2="328.91" y2="277.77" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-218" x1="330.13" y1="241.54" x2="328.91" y2="282.52" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-219" x1="347.08" y1="209.74" x2="346.03" y2="244.63" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-220" x1="347.08" y1="214.49" x2="346.03" y2="249.37" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-221" x1="347.08" y1="219.24" x2="346.03" y2="254.12" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-222" x1="347.08" y1="224.04" x2="346.03" y2="258.92" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-223" x1="347.08" y1="228.84" x2="346.03" y2="263.72" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-224" x1="347.08" y1="233.64" x2="346.03" y2="268.53" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-225" x1="347.08" y1="238.44" x2="346.03" y2="273.33" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-226" x1="347.08" y1="243.24" x2="346.03" y2="278.13" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-227" x1="347.08" y1="248.04" x2="346.03" y2="282.93" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-228" x1="347.08" y1="252.84" x2="346.03" y2="287.73" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-229" x1="347.08" y1="257.65" x2="346.03" y2="292.53" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-230" x1="347.08" y1="262.45" x2="346.03" y2="297.33" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-231" x1="355.6" y1="209.74" x2="354.55" y2="244.63" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-232" x1="355.6" y1="214.49" x2="354.55" y2="249.37" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-233" x1="355.6" y1="219.24" x2="354.55" y2="254.12" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-234" x1="355.6" y1="224.04" x2="354.55" y2="258.92" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-235" x1="355.6" y1="228.84" x2="354.55" y2="263.72" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-236" x1="355.6" y1="233.64" x2="354.55" y2="268.53" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-237" x1="355.6" y1="238.44" x2="354.55" y2="273.33" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-238" x1="355.6" y1="243.24" x2="354.55" y2="278.13" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-239" x1="355.6" y1="248.04" x2="354.55" y2="282.93" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-240" x1="355.6" y1="252.84" x2="354.55" y2="287.73" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-241" x1="355.6" y1="257.65" x2="354.55" y2="292.53" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-242" x1="355.6" y1="262.45" x2="354.55" y2="297.33" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-243" x1="364.11" y1="209.74" x2="363.07" y2="244.63" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-244" x1="364.11" y1="214.49" x2="363.07" y2="249.37" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-245" x1="364.11" y1="219.24" x2="363.07" y2="254.12" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-246" x1="364.11" y1="224.04" x2="363.07" y2="258.92" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-247" x1="364.11" y1="228.84" x2="363.07" y2="263.72" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-248" x1="364.11" y1="233.64" x2="363.07" y2="268.53" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-249" x1="364.11" y1="238.44" x2="363.07" y2="273.33" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-250" x1="364.11" y1="243.24" x2="363.07" y2="278.13" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-251" x1="364.11" y1="248.04" x2="363.07" y2="282.93" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-252" x1="364.11" y1="252.84" x2="363.07" y2="287.73" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-253" x1="364.11" y1="257.65" x2="363.07" y2="292.53" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-254" x1="364.11" y1="262.45" x2="363.07" y2="297.33" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-255" x1="230.32" y1="270.6" x2="233.5" y2="249.13" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-256" x1="230.32" y1="275.15" x2="233.5" y2="253.68" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-257" x1="230.32" y1="280.02" x2="233.5" y2="258.55" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-258" x1="230.32" y1="284.9" x2="233.5" y2="263.43" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-259" x1="230.32" y1="289.77" x2="233.5" y2="268.3" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-260" x1="230.32" y1="294.65" x2="233.5" y2="273.17" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-261" x1="230.32" y1="299.52" x2="233.5" y2="278.05" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-262" x1="230.32" y1="304.39" x2="233.5" y2="282.92" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-263" x1="230.32" y1="309.27" x2="233.5" y2="287.8" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-264" x1="230.32" y1="314.14" x2="233.5" y2="292.67" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-265" x1="230.32" y1="319.02" x2="233.5" y2="297.54" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-266" x1="230.32" y1="323.89" x2="233.5" y2="302.42" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-267" x1="230.32" y1="328.76" x2="233.5" y2="307.29" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-268" x1="230.32" y1="333.64" x2="233.5" y2="312.16" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-269" x1="230.32" y1="338.51" x2="233.5" y2="317.04" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-270" x1="230.32" y1="343.38" x2="233.5" y2="321.91" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-271" x1="230.32" y1="348.26" x2="233.5" y2="326.79" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-272" x1="230.32" y1="353.13" x2="233.5" y2="331.66" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-273" x1="230.32" y1="358.01" x2="233.5" y2="336.53" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-274" x1="230.32" y1="362.88" x2="233.5" y2="341.41" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-275" x1="230.32" y1="367.75" x2="233.5" y2="346.28" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-276" x1="230.32" y1="372.63" x2="233.5" y2="351.16" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-277" x1="230.32" y1="377.5" x2="233.5" y2="356.03" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-278" x1="230.32" y1="382.38" x2="233.5" y2="360.9" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-279" x1="230.32" y1="387.25" x2="233.5" y2="365.78" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-280" x1="230.32" y1="392.12" x2="233.5" y2="370.65" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-281" x1="230.32" y1="397" x2="233.5" y2="375.52" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-282" x1="230.32" y1="401.87" x2="233.5" y2="380.4" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-283" x1="230.32" y1="406.75" x2="233.5" y2="385.27" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-284" x1="194.96" y1="263.67" x2="195.77" y2="258.18" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-285" x1="194.96" y1="268.22" x2="195.77" y2="262.72" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-286" x1="194.96" y1="273.09" x2="195.77" y2="267.6" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-287" x1="194.96" y1="277.96" x2="195.77" y2="272.47" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-288" x1="194.96" y1="282.84" x2="195.77" y2="277.35" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-289" x1="194.96" y1="287.71" x2="195.77" y2="282.22" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-290" x1="194.96" y1="292.58" x2="195.77" y2="287.09" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-291" x1="194.96" y1="297.46" x2="195.77" y2="291.97" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-292" x1="194.96" y1="302.33" x2="195.77" y2="296.84" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-293" x1="194.96" y1="307.21" x2="195.77" y2="301.72" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-294" x1="194.96" y1="312.08" x2="195.77" y2="306.59" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-295" x1="194.96" y1="316.95" x2="195.77" y2="311.46" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-296" x1="194.96" y1="321.83" x2="195.77" y2="316.34" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-297" x1="194.96" y1="326.7" x2="195.77" y2="321.21" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-298" x1="194.96" y1="331.58" x2="195.77" y2="326.09" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-299" x1="194.96" y1="336.45" x2="195.77" y2="330.96" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-300" x1="194.96" y1="341.32" x2="195.77" y2="335.83" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-301" x1="194.96" y1="346.2" x2="195.77" y2="340.71" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-302" x1="194.96" y1="351.07" x2="195.77" y2="345.58" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-303" x1="194.96" y1="355.95" x2="195.77" y2="350.45" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-304" x1="194.96" y1="360.82" x2="195.77" y2="355.33" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-305" x1="194.96" y1="365.69" x2="195.77" y2="360.2" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-306" x1="194.96" y1="370.57" x2="195.77" y2="365.08" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-307" x1="194.96" y1="375.44" x2="195.77" y2="369.95" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-308" x1="194.96" y1="380.31" x2="195.77" y2="374.82" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-309" x1="194.96" y1="385.19" x2="195.77" y2="379.7" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-310" x1="194.96" y1="390.06" x2="195.77" y2="384.57" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-311" x1="194.96" y1="394.94" x2="195.77" y2="389.45" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-312" x1="194.96" y1="399.81" x2="195.77" y2="394.32" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-313" x1="268.8" y1="263.67" x2="269.61" y2="258.18" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-314" x1="268.8" y1="268.22" x2="269.61" y2="262.72" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-315" x1="268.8" y1="273.09" x2="269.61" y2="267.6" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-316" x1="268.8" y1="277.96" x2="269.61" y2="272.47" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-317" x1="268.8" y1="282.84" x2="269.61" y2="277.35" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-318" x1="268.8" y1="287.71" x2="269.61" y2="282.22" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-319" x1="268.8" y1="292.58" x2="269.61" y2="287.09" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-320" x1="268.8" y1="297.46" x2="269.61" y2="291.97" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-321" x1="268.8" y1="302.33" x2="269.61" y2="296.84" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-322" x1="268.8" y1="307.21" x2="269.61" y2="301.72" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-323" x1="268.8" y1="312.08" x2="269.61" y2="306.59" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-324" x1="268.8" y1="316.95" x2="269.61" y2="311.46" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-325" x1="268.8" y1="321.83" x2="269.61" y2="316.34" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-326" x1="268.8" y1="326.7" x2="269.61" y2="321.21" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-327" x1="268.8" y1="331.58" x2="269.61" y2="326.09" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-328" x1="268.8" y1="336.45" x2="269.61" y2="330.96" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-329" x1="268.8" y1="341.32" x2="269.61" y2="335.83" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-330" x1="268.8" y1="346.2" x2="269.61" y2="340.71" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-331" x1="268.8" y1="351.07" x2="269.61" y2="345.58" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-332" x1="268.8" y1="355.95" x2="269.61" y2="350.45" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-333" x1="268.8" y1="360.82" x2="269.61" y2="355.33" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-334" x1="268.8" y1="365.69" x2="269.61" y2="360.2" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-335" x1="268.8" y1="370.57" x2="269.61" y2="365.08" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-336" x1="268.8" y1="375.44" x2="269.61" y2="369.95" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-337" x1="268.8" y1="380.31" x2="269.61" y2="374.82" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-338" x1="268.8" y1="385.19" x2="269.61" y2="379.7" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-339" x1="268.8" y1="390.06" x2="269.61" y2="384.57" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-340" x1="268.8" y1="394.94" x2="269.61" y2="389.45" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-341" x1="268.8" y1="399.81" x2="269.61" y2="394.32" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-342" x1="443.37" y1="362.56" x2="471.64" y2="359.2" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-343" x1="450.53" y1="262.26" x2="452.76" y2="316.1" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-344" x1="372.66" y1="314.6" x2="373.75" y2="348.17" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-345" x1="372.66" y1="319.69" x2="373.75" y2="353.26" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-346" x1="372.66" y1="324.78" x2="373.75" y2="358.35" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-347" x1="372.66" y1="329.87" x2="373.75" y2="363.45" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-348" x1="372.66" y1="334.96" x2="373.75" y2="368.54" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-349" x1="372.66" y1="340.05" x2="373.75" y2="373.63" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-350" x1="372.66" y1="345.14" x2="373.75" y2="378.72" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-351" x1="372.66" y1="350.23" x2="373.75" y2="383.81" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-352" x1="516.43" y1="30.59" x2="536.54" y2="653.92" xlink:href="#linear-gradient-4"/></defs><title>Philadelphia</title><g clip-path="url(#clip-path)"><rect x="55.88" width="574.75" height="385.14" fill="#68e1fd" opacity="0.32" style="isolation:isolate"/><path d="M641.43,187.91v0a236.39,236.39,0,0,1-8,39.7c-55,3.36-110.29-3.31-165.46-5.37-56.8-2.14-113.71.63-170.48-2.2-5-.25-10.79-.89-13.76-5s-1.81-10.1-4-14.76c-1.21-2.53-3.39-4.59-3.95-7.31-.71-3.41,1.25-6.74,3.12-9.63q19.54-30.18,40.38-59.46c3.45-4.83,7.05-9.77,12.12-12.87s12-3.91,16.78-.37a9.92,9.92,0,0,1,9.39-7.4c1.52,0,3.12.35,4.51-.27,1.64-.73,2.39-2.6,3.29-4.16,4-7,14-9.9,21.11-6.13A33.29,33.29,0,0,1,413.68,80.4c12.72.6,24,8.5,36.58,10.5a45.42,45.42,0,0,0,19.42-1.33c3.51-1,7-2.37,10.64-2.64a18,18,0,0,1,9.81,2.16c1.35.73,2.7,1.68,4.24,1.7,1.75,0,3.26-1.18,4.66-2.24a53,53,0,0,1,46.18-8.38c2.5.73,5,1.69,7.63,1.46,3.62-.29,6.63-2.73,9.54-4.87.81-.58,1.64-1.16,2.48-1.72h0A242.72,242.72,0,0,1,593,107.38C611.29,132.78,624.45,161.74,641.43,187.91Z" transform="translate(84.55 -32.05)" fill="url(#linear-gradient)"/><path d="M607.64,214.18v0a236.31,236.31,0,0,1-8,39.71c-55,3.36-110.29-3.31-165.45-5.37-56.81-2.14-113.72.63-170.49-2.2-5.05-.25-10.78-.89-13.76-5s-1.81-10.1-4-14.76c-1.2-2.53-3.39-4.59-3.95-7.31-.71-3.41,1.25-6.74,3.12-9.63q19.55-30.18,40.39-59.46c3.45-4.83,7-9.77,12.11-12.87s12-3.91,16.78-.38a9.94,9.94,0,0,1,9.39-7.4c1.52,0,3.12.36,4.51-.27,1.65-.72,2.39-2.59,3.29-4.15,4-7,14-9.9,21.12-6.13a33.26,33.26,0,0,1,27.16-12.31c12.72.6,24,8.5,36.59,10.5a45.54,45.54,0,0,0,19.41-1.33c3.51-1,7-2.37,10.64-2.64a18,18,0,0,1,9.81,2.16c1.36.73,2.71,1.68,4.24,1.7,1.75,0,3.27-1.18,4.66-2.24a53,53,0,0,1,46.19-8.38c2.49.73,5.05,1.68,7.62,1.46,3.62-.29,6.64-2.73,9.55-4.87.81-.58,1.64-1.16,2.47-1.72h0a242,242,0,0,1,28.1,32.34C577.5,159.06,590.66,188,607.64,214.18Z" transform="translate(84.55 -32.05)" fill="url(#linear-gradient-2)"/><path d="M-84.55,176.9v0a237.38,237.38,0,0,0,8,39.7c55,3.37,110.28-3.3,165.45-5.36,56.81-2.14,113.72.62,170.48-2.21,5.06-.24,10.79-.89,13.76-5s1.81-10.11,4-14.76c1.2-2.54,3.38-4.6,3.95-7.32.7-3.41-1.25-6.73-3.12-9.62q-19.54-30.18-40.39-59.47c-3.45-4.82-7-9.77-12.12-12.87s-12-3.9-16.77-.37a9.93,9.93,0,0,0-9.4-7.4c-1.51,0-3.11.35-4.51-.27-1.64-.73-2.39-2.6-3.28-4.16-4-7-14-9.89-21.12-6.13A33.3,33.3,0,0,0,143.2,69.4c-12.72.6-24,8.5-36.58,10.49a45.37,45.37,0,0,1-19.41-1.33c-3.52-1-7-2.37-10.65-2.64a18.09,18.09,0,0,0-9.81,2.16c-1.35.73-2.7,1.69-4.24,1.71-1.74,0-3.26-1.19-4.65-2.25a53,53,0,0,0-46.19-8.37c-2.49.72-5,1.68-7.63,1.45C.43,70.33-2.59,67.9-5.5,65.76-6.31,65.18-7.14,64.59-8,64h0a242,242,0,0,0-28.1,32.35C-54.41,121.78-67.56,150.73-84.55,176.9Z" transform="translate(84.55 -32.05)" fill="url(#linear-gradient-3)"/><rect x="114.16" y="303.93" width="448.4" height="168.96" fill="#68e1fd"/><rect x="114.16" y="303.93" width="448.4" height="168.96" opacity="0.58" fill="url(#linear-gradient-4)"/><rect x="536.91" y="253.99" width="15.92" height="4.79" fill="#68e1fd"/><rect x="536.91" y="253.99" width="15.92" height="4.79" opacity="0.58" fill="url(#linear-gradient-5)"/><rect x="537.37" y="258.17" width="23.23" height="33.63" fill="#68e1fd"/><rect x="537.37" y="258.17" width="23.23" height="33.63" opacity="0.58" fill="url(#linear-gradient-6)"/><rect x="400.74" y="290.61" width="22.99" height="96.6" fill="#68e1fd"/><rect x="400.74" y="290.61" width="22.99" height="96.6" opacity="0.58" fill="url(#linear-gradient-7)"/><rect x="431.61" y="148.29" width="25.99" height="46.14" fill="#68e1fd"/><rect x="431.61" y="148.29" width="25.99" height="46.14" opacity="0.58" fill="url(#linear-gradient-8)"/><polygon points="205.79 138.22 208.93 162.26 201.67 158.15 205.79 138.22" fill="#68e1fd"/><polygon points="189.62 120.19 186.62 128.31 192.3 128.31 189.62 120.19" fill="#68e1fd"/><polygon points="279.41 130.04 281.12 91.7 284.04 130.53 279.41 130.04" fill="#68e1fd"/><polygon points="279.41 130.8 281.12 92.46 284.04 131.29 279.41 130.8" opacity="0.58" fill="url(#linear-gradient-9)"/><rect x="532.88" y="290.28" width="30.54" height="67.37" fill="#68e1fd"/><rect x="532.88" y="290.28" width="30.54" height="67.37" opacity="0.58" fill="url(#linear-gradient-10)"/><polygon points="498.65 311.08 507.75 311.08 554.97 311.08 540.14 303.77 497.89 303.61 498.65 311.08" fill="#68e1fd"/><polygon points="498.65 311.08 507.75 311.08 554.97 311.08 540.14 303.77 497.89 303.61 498.65 311.08" opacity="0.58" fill="url(#linear-gradient-11)"/><polygon points="519.02 267.86 503.74 267.86 503.74 173.64 519.02 171.6 519.02 267.86" fill="#68e1fd"/><polygon points="519.02 267.86 503.74 267.86 503.74 173.64 519.02 171.6 519.02 267.86" opacity="0.58" fill="url(#linear-gradient-12)"/><polygon points="526.16 171.69 519.02 171.69 519.02 189.01 516.25 189.01 516.25 199.31 512.84 199.31 512.84 209.54 510.4 209.54 510.4 216.04 506.51 216.04 506.51 298.08 538.19 298.08 538.19 217.34 534.83 217.34 534.83 207.54 533.31 207.54 533.31 198.44 531.9 198.44 531.9 189.45 529.41 189.45 529.41 176.24 526.81 176.24 526.16 171.69 526.16 171.69" fill="#68e1fd"/><polygon points="526.16 171.69 519.02 171.69 519.02 189.01 516.25 189.01 516.25 199.31 512.84 199.31 512.84 209.54 510.4 209.54 510.4 216.04 506.51 216.04 506.51 298.08 538.19 298.08 538.19 217.34 534.83 217.34 534.83 207.54 533.31 207.54 533.31 198.44 531.9 198.44 531.9 189.45 529.41 189.45 529.41 176.24 526.81 176.24 526.16 171.69 526.16 171.69" opacity="0.58" fill="url(#linear-gradient-13)"/><rect x="510.54" y="210.89" width="2.31" height="75.71" fill="url(#linear-gradient-14)"/><rect x="516.87" y="189.45" width="2.31" height="75.71" fill="url(#linear-gradient-15)"/><rect x="534.85" y="217.61" width="2.31" height="75.71" fill="url(#linear-gradient-16)"/><rect x="529.22" y="189.88" width="2.31" height="75.71" fill="url(#linear-gradient-17)"/><rect x="522.72" y="171.9" width="2.31" height="75.71" fill="url(#linear-gradient-18)"/><rect x="377.89" y="247.83" width="14.51" height="41.59" rx="3.46" fill="#68e1fd"/><rect x="377.89" y="247.83" width="14.51" height="41.59" rx="3.46" opacity="0.58" fill="url(#linear-gradient-19)"/><polygon points="382.47 265.35 394.81 265.02 406.1 268.84 390.51 269.16 382.47 265.35" fill="#68e1fd"/><polygon points="380.84 264.94 394.81 265.02 406.1 268.84 390.51 269.16 380.84 264.94" opacity="0.58" fill="url(#linear-gradient-20)"/><polygon points="380.6 281.75 405.21 281.75 406.1 268.84 390.51 269.16 380.84 264.94 380.6 281.75" fill="#68e1fd"/><polygon points="380.6 281.75 405.21 281.75 406.1 268.84 390.51 269.16 380.84 264.94 380.6 281.75" opacity="0.58" fill="url(#linear-gradient-21)"/><polygon points="394.27 274.55 410.96 274.17 423.6 278.4 405.14 278.96 394.27 274.55" fill="#68e1fd"/><polygon points="394.27 274.55 410.96 274.17 423.6 278.4 405.14 278.96 394.27 274.55" opacity="0.58" fill="url(#linear-gradient-22)"/><polygon points="393.35 291.34 422.51 290.53 422.92 278.18 405.13 278.91 394.27 274.55 393.35 291.34" fill="#68e1fd"/><polygon points="393.35 291.34 422.51 290.53 422.92 278.18 405.13 278.91 394.27 274.55 393.35 291.34" opacity="0.58" fill="url(#linear-gradient-23)"/><rect x="374.75" y="277.77" width="9.75" height="42.73" fill="#68e1fd"/><rect x="374.75" y="277.77" width="9.75" height="42.73" opacity="0.58" fill="url(#linear-gradient-24)"/><rect x="384.5" y="300.84" width="36.17" height="86.22" fill="#68e1fd"/><rect x="384.5" y="300.84" width="36.17" height="86.22" opacity="0.58" fill="url(#linear-gradient-25)"/><rect x="395.54" y="307.4" width="25.13" height="79.67" fill="#68e1fd"/><rect x="395.54" y="307.4" width="25.13" height="79.67" opacity="0.58" fill="url(#linear-gradient-26)"/><polygon points="384.5 300.84 395.54 307.4 395.54 387.07 384.5 387.07 384.5 300.84" fill="#68e1fd"/><polygon points="384.5 300.84 395.54 307.4 395.54 387.07 384.5 387.07 384.5 300.84" opacity="0.58" fill="url(#linear-gradient-27)"/><polygon points="273.37 144.39 282.09 137.08 289.73 145.04 290.27 135.19 281.6 126.74 273.16 135.19 273.37 144.39" fill="#68e1fd"/><polygon points="273.37 144.39 282.09 137.08 289.73 145.04 290.27 135.19 281.6 126.74 273.16 135.19 273.37 144.39" opacity="0.58" fill="url(#linear-gradient-28)"/><rect x="475.37" y="100.96" width="23.94" height="26.1" fill="#68e1fd"/><rect x="475.37" y="100.96" width="23.94" height="26.1" opacity="0.58" fill="url(#linear-gradient-29)"/><polygon points="475.15 127.71 465.19 127.71 465.19 108.54 475.15 101.39 475.15 127.71" fill="#68e1fd"/><polygon points="475.15 127.71 465.19 127.71 465.19 108.54 475.15 101.39 475.15 127.71" opacity="0.58" fill="url(#linear-gradient-30)"/><rect x="468.98" y="127.17" width="35.53" height="153.36" fill="#68e1fd"/><rect x="468.98" y="127.17" width="35.53" height="153.36" opacity="0.58" fill="url(#linear-gradient-31)"/><polygon points="468.98 280.54 458.25 280.54 458.25 131.07 468.98 127.17 468.98 280.54" fill="#68e1fd"/><polygon points="468.98 280.54 458.25 280.54 458.25 131.07 468.98 127.17 468.98 280.54" opacity="0.58" fill="url(#linear-gradient-32)"/><rect x="472.39" y="261.04" width="13.97" height="38.02" fill="#68e1fd"/><rect x="472.39" y="261.04" width="13.97" height="38.02" opacity="0.58" fill="url(#linear-gradient-33)"/><rect x="467" y="297.65" width="31.66" height="85.56" fill="#68e1fd"/><rect x="467" y="297.65" width="31.66" height="85.56" opacity="0.58" fill="url(#linear-gradient-34)"/><rect x="463.1" y="298.08" width="31.66" height="85.56" opacity="0.58" fill="url(#linear-gradient-35)"/><rect x="486.36" y="263.64" width="40.62" height="35.42" fill="#68e1fd"/><rect x="486.36" y="263.64" width="40.62" height="35.42" opacity="0.58" fill="url(#linear-gradient-36)"/><rect x="495.05" y="257.55" width="20.23" height="6.58" fill="#68e1fd"/><rect x="495.05" y="257.55" width="20.23" height="6.58" opacity="0.58" fill="url(#linear-gradient-37)"/><rect x="497" y="257.55" width="18.24" height="6.58" opacity="0.58" fill="url(#linear-gradient-38)"/><rect x="486.28" y="261.08" width="7" height="3.02" fill="#68e1fd"/><rect x="486.28" y="261.08" width="7" height="3.02" opacity="0.58" fill="url(#linear-gradient-39)"/><path d="M359.7,215a3,3,0,0,0-.28-1.53,2.86,2.86,0,0,1-.33-.59,1.87,1.87,0,0,1,.16-1.08c.71-2.18-.33-4.51-.53-6.79a9.48,9.48,0,0,1,1.32-5.72,2.3,2.3,0,0,1,1-1,1,1,0,0,1,1.24.3c.21.37.06.82.07,1.25a5.33,5.33,0,0,0,.71,1.92c.71,1.66.33,3.58.83,5.31a15.25,15.25,0,0,1,.48,1.59c.14.83-.07,1.68.08,2.5.09.5.31,1,.36,1.48a1.23,1.23,0,0,1-.6,1.28c-.18.08-.4.1-.52.26a.81.81,0,0,0-.09.37l-.09,2.87a8.45,8.45,0,0,0,.44,3.65l-1.56.15-.45,0a4.23,4.23,0,0,1-2,0c-.72-.32-.48-.64-.42-1.45C359.63,218.2,359.69,216.6,359.7,215Z" transform="translate(84.55 -32.05)" fill="#68e1fd"/><path d="M359.7,215a3,3,0,0,0-.28-1.53,2.86,2.86,0,0,1-.33-.59,1.87,1.87,0,0,1,.16-1.08c.71-2.18-.33-4.51-.53-6.79a9.48,9.48,0,0,1,1.32-5.72,2.3,2.3,0,0,1,1-1,1,1,0,0,1,1.24.3c.21.37.06.82.07,1.25a5.33,5.33,0,0,0,.71,1.92c.71,1.66.33,3.58.83,5.31a15.25,15.25,0,0,1,.48,1.59c.14.83-.07,1.68.08,2.5.09.5.31,1,.36,1.48a1.23,1.23,0,0,1-.6,1.28c-.18.08-.4.1-.52.26a.81.81,0,0,0-.09.37l-.09,2.87a8.45,8.45,0,0,0,.44,3.65l-1.56.15-.45,0a4.23,4.23,0,0,1-2,0c-.72-.32-.48-.64-.42-1.45C359.63,218.2,359.69,216.6,359.7,215Z" transform="translate(84.55 -32.05)" opacity="0.58" fill="url(#linear-gradient-40)"/><rect x="433.41" y="194.43" width="24.2" height="90" fill="#68e1fd"/><rect x="433.41" y="194.43" width="24.2" height="90" opacity="0.58" fill="url(#linear-gradient-41)"/><polygon points="433.88 284.44 422.51 284.44 422.51 196.06 433.88 194.27 433.88 284.44" fill="#68e1fd"/><polygon points="433.88 284.44 422.51 284.44 422.51 196.06 433.88 194.27 433.88 284.44" opacity="0.58" fill="url(#linear-gradient-42)"/><rect x="442.82" y="188.7" width="6.7" height="2.6" rx="1.3" fill="#68e1fd"/><rect x="442.82" y="188.7" width="6.7" height="2.6" rx="1.3" opacity="0.58" fill="url(#linear-gradient-43)"/><path d="M356.69,233.87a5.47,5.47,0,0,1,.81-4.87,18.27,18.27,0,0,0,2.4-5.57h3.37a30.21,30.21,0,0,0,2.19,5.57c1.14,1.87.65,5,.65,5Z" transform="translate(84.55 -32.05)" fill="#68e1fd"/><path d="M356.69,233.87a5.47,5.47,0,0,1,.81-4.87,18.27,18.27,0,0,0,2.4-5.57h3.37a30.21,30.21,0,0,0,2.19,5.57c1.14,1.87.65,5,.65,5Z" transform="translate(84.55 -32.05)" opacity="0.58" fill="url(#linear-gradient-44)"/><rect x="436.16" y="202.15" width="19.17" height="6.66" fill="#68e1fd"/><rect x="436.16" y="202.15" width="19.17" height="6.66" opacity="0.58" fill="url(#linear-gradient-45)"/><rect x="439.08" y="208.81" width="14.3" height="6.09" fill="#68e1fd"/><rect x="439.08" y="208.81" width="14.3" height="6.09" opacity="0.58" fill="url(#linear-gradient-46)"/><rect x="421.32" y="266.67" width="47.66" height="38.99" fill="#68e1fd"/><rect x="421.32" y="266.67" width="47.66" height="38.99" opacity="0.58" fill="url(#linear-gradient-47)"/><rect x="421.32" y="266.67" width="47.66" height="38.99" opacity="0.58" fill="url(#linear-gradient-48)"/><path d="M354.54,247s-16.09,20.8-14.46,50.69h17.06l2.43-50.53Z" transform="translate(84.55 -32.05)" fill="#68e1fd"/><path d="M368.83,247s15.76,24.37,13,51H357.14l2.43-50.85Z" transform="translate(84.55 -32.05)" fill="#68e1fd"/><path d="M354.54,247s-16.09,20.8-14.46,50.69h17.06l2.43-50.53Z" transform="translate(84.55 -32.05)" opacity="0.58" fill="url(#linear-gradient-49)"/><path d="M368.83,247s15.76,24.37,13,51H357.14l2.43-50.85Z" transform="translate(84.55 -32.05)" opacity="0.58" fill="url(#linear-gradient-50)"/><path d="M336.75,307.55h15.08s5.2-7.47,16.35-6.4,13.87,8.3,13.87,8.3l5.31-.24V297.48H336.78Z" transform="translate(84.55 -32.05)" fill="#68e1fd"/><path d="M336.75,306.74h15.08s5.2-6.83,16.35-5.85,13.87,7.58,13.87,7.58l5.31-.22V297.53H336.78Z" transform="translate(84.55 -32.05)" opacity="0.58" fill="url(#linear-gradient-51)"/><rect x="421.32" y="305.66" width="47.98" height="101.27" fill="#68e1fd"/><rect x="421.32" y="305.66" width="47.98" height="101.27" opacity="0.58" fill="url(#linear-gradient-52)"/><rect x="433.56" y="276.64" width="33.63" height="28.76" fill="#68e1fd"/><rect x="433.56" y="305.39" width="33.63" height="100.89" fill="#68e1fd"/><rect x="433.56" y="305.39" width="33.63" height="100.89" opacity="0.58" fill="url(#linear-gradient-53)"/><path d="M449.48,315.06h0a3.82,3.82,0,0,1,3.82,3.82v16.41a0,0,0,0,1,0,0h-7.64a0,0,0,0,1,0,0V318.88A3.82,3.82,0,0,1,449.48,315.06Z" fill="#68e1fd"/><rect x="445.58" y="382.29" width="1.62" height="7.47" fill="#68e1fd"/><rect x="445.58" y="381.46" width="1.62" height="7.47" opacity="0.58" fill="url(#linear-gradient-54)"/><rect x="448.99" y="382.29" width="1.62" height="7.47" fill="#68e1fd"/><rect x="452.41" y="382.29" width="1.62" height="7.47" fill="#68e1fd"/><rect x="438.11" y="388.9" width="25.67" height="7.8" fill="#68e1fd"/><rect x="432.91" y="275.66" width="36.07" height="30" fill="#68e1fd"/><rect x="432.91" y="275.66" width="36.07" height="30" opacity="0.58" fill="url(#linear-gradient-55)"/><rect x="433.56" y="305.66" width="35.42" height="36.93" fill="#68e1fd"/><rect x="433.56" y="305.66" width="35.42" height="36.93" opacity="0.58" fill="url(#linear-gradient-56)"/><rect x="428.61" y="305.72" width="4.96" height="35.66" fill="#68e1fd"/><rect x="428.61" y="305.72" width="4.96" height="35.66" opacity="0.58" fill="url(#linear-gradient-57)"/><rect x="421.32" y="305.66" width="7.28" height="34.25" fill="#68e1fd"/><rect x="421.32" y="305.66" width="7.28" height="34.25" opacity="0.58" fill="url(#linear-gradient-58)"/><rect x="421.86" y="339.92" width="6.74" height="14.65" fill="#68e1fd"/><rect x="421.86" y="339.92" width="6.74" height="14.65" opacity="0.58" fill="url(#linear-gradient-59)"/><rect x="428.61" y="341.38" width="5.06" height="15.84" fill="#68e1fd"/><rect x="428.61" y="341.38" width="5.06" height="15.84" opacity="0.58" fill="url(#linear-gradient-60)"/><rect x="433.56" y="342.6" width="33.9" height="15.7" fill="#68e1fd"/><rect x="433.56" y="342.6" width="33.9" height="15.7" opacity="0.58" fill="url(#linear-gradient-61)"/><rect x="421.32" y="393.61" width="12.73" height="13.32" fill="#68e1fd"/><rect x="421.32" y="393.61" width="12.73" height="13.32" opacity="0.58" fill="url(#linear-gradient-62)"/><rect x="443.39" y="396.62" width="2.68" height="9.42" fill="#68e1fd"/><rect x="454.92" y="396.7" width="2.27" height="8.85" fill="#68e1fd"/><rect x="448.99" y="381.4" width="1.62" height="7.47" opacity="0.58" fill="url(#linear-gradient-63)"/><rect x="452.41" y="381.4" width="1.62" height="7.47" opacity="0.58" fill="url(#linear-gradient-64)"/><rect x="438.11" y="388.9" width="25.67" height="7.8" opacity="0.58" fill="url(#linear-gradient-65)"/><line x1="443.39" y1="406.04" x2="443.39" y2="396.62" opacity="0.58" fill="url(#linear-gradient-66)"/><rect x="454.92" y="396.7" width="2.27" height="8.85" opacity="0.58" fill="url(#linear-gradient-67)"/><rect x="160.51" y="192.16" width="56.32" height="211.85" fill="#68e1fd"/><rect x="160.51" y="192.16" width="56.32" height="211.85" opacity="0.58" fill="url(#linear-gradient-68)"/><polygon points="166.58 192.16 166.58 160.96 188.89 128.47 203.84 153.16 203.84 159.23 208.06 163.46 208.06 193.02 166.58 192.16" fill="#68e1fd"/><polygon points="166.58 192.16 166.58 160.96 188.89 128.47 203.84 153.16 203.84 159.23 208.06 163.46 208.06 193.02 166.58 192.16" opacity="0.58" fill="url(#linear-gradient-69)"/><path d="M111.93,430.43V192.58L102,180,91.35,192.15V430.86S111.93,429,111.93,430.43Z" transform="translate(84.55 -32.05)" fill="url(#linear-gradient-70)"/><polygon points="173.62 138.44 172.43 152.62 188.89 128.47 203.84 153.16 205.79 138.22 189.43 126.09 173.62 138.44" fill="#68e1fd"/><polygon points="173.62 138.44 172.43 152.62 188.89 128.47 203.84 153.16 205.79 138.22 189.43 126.09 173.62 138.44" opacity="0.58" fill="url(#linear-gradient-71)"/><polygon points="204.65 147.1 210.72 154.41 211.75 177.1 211.75 192.16 208.06 192.16 208.06 163.46 203.84 159.23 204.65 147.1" fill="#68e1fd"/><polygon points="204.65 147.1 210.72 154.41 211.75 177.1 211.75 192.16 208.06 192.16 208.06 163.46 203.84 159.23 204.65 147.1" opacity="0.58" fill="url(#linear-gradient-72)"/><polygon points="175.81 163.64 185.89 151.7 196.12 164.78 196.47 160.53 186.51 147.97 175.9 160.1 175.81 163.64" fill="#68e1fd"/><rect x="203.84" y="192.97" width="12.51" height="31.03" fill="#68e1fd"/><rect x="203.84" y="159.23" width="4.22" height="33.74" fill="#68e1fd"/><rect x="212.61" y="224.16" width="8.77" height="25.83" fill="#68e1fd"/><rect x="175.89" y="173.64" width="20.31" height="2.76" fill="#68e1fd"/><polygon points="304.35 220.75 257.99 220.75 257.99 167.68 282.25 147.1 297.85 161.83 304.35 167.68 304.35 220.75" fill="#68e1fd"/><polygon points="304.35 220.75 257.99 220.75 257.99 167.68 282.25 147.1 297.85 161.83 304.35 167.68 304.35 220.75" opacity="0.58" fill="url(#linear-gradient-73)"/><polygon points="258.21 176.88 282.09 153 304.46 178.18 305 168.33 281.6 142.66 257.99 167.68 258.21 176.88" fill="#68e1fd"/><polygon points="267.85 157.5 282.09 143.91 294.28 158.15 294.82 148.29 281.6 133.56 267.63 148.29 267.85 157.5" fill="#68e1fd"/><polygon points="267.85 157.5 282.09 143.91 294.28 158.15 294.82 148.29 281.6 133.56 267.63 148.29 267.85 157.5" opacity="0.58" fill="url(#linear-gradient-74)"/><polygon points="270.77 220.43 270.77 173.15 281.82 161.45 291.57 172.17 291.57 220.43 270.77 220.43" fill="#68e1fd"/><polygon points="270.77 220.43 270.77 173.15 281.82 161.45 291.57 172.17 291.57 220.43 270.77 220.43" fill="url(#linear-gradient-75)"/><polygon points="185.21 408.15 173.29 408.15 173.29 198 185.21 203.04 185.21 408.15" fill="#68e1fd"/><polygon points="185.21 408.15 173.29 408.15 173.29 198 185.21 203.04 185.21 408.15" opacity="0.58" fill="url(#linear-gradient-76)"/><rect x="142.59" y="198.65" width="30.54" height="10.24" fill="#68e1fd"/><rect x="142.59" y="198.65" width="30.54" height="10.24" opacity="0.58" fill="url(#linear-gradient-77)"/><rect x="137.88" y="208.4" width="35.67" height="199.43" fill="#68e1fd"/><rect x="137.88" y="208.4" width="35.67" height="199.43" opacity="0.58" fill="url(#linear-gradient-78)"/><rect x="120.17" y="268.51" width="27.13" height="31.19" fill="#68e1fd"/><polygon points="147.09 301.11 161.81 301.11 161.81 265.16 147.09 268.51 147.09 301.11" fill="#68e1fd"/><rect x="120.17" y="268.51" width="27.13" height="31.19" fill="url(#linear-gradient-79)"/><rect x="122.96" y="273.25" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="277.8" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="282.67" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="287.55" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="292.42" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="297.3" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="302.17" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="307.04" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="311.92" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="316.79" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="321.67" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="326.54" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="331.41" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="336.29" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="341.16" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="346.04" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="350.91" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="355.78" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="360.66" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="365.53" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="370.4" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="375.28" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="380.15" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="385.03" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="389.9" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="394.77" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="399.65" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="404.52" width="4.06" height="2.44" fill="#68e1fd"/><rect x="122.96" y="409.4" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="273.25" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="277.8" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="282.67" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="287.55" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="292.42" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="297.3" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="302.17" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="307.04" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="311.92" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="316.79" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="321.67" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="326.54" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="331.41" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="336.29" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="341.16" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="346.04" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="350.91" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="355.78" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="360.66" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="365.53" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="370.4" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="375.28" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="380.15" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="385.03" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="389.9" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="394.77" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="399.65" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="404.52" width="4.06" height="2.44" fill="#68e1fd"/><rect x="129.84" y="409.4" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="273.25" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="277.8" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="282.67" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="287.55" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="292.42" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="297.3" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="302.17" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="307.04" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="311.92" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="316.79" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="321.67" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="326.54" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="331.41" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="336.29" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="341.16" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="346.04" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="350.91" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="355.78" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="360.66" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="365.53" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="370.4" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="375.28" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="380.15" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="385.03" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="389.9" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="394.77" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="399.65" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="404.52" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="409.4" width="4.06" height="2.44" fill="#68e1fd"/><polygon points="147.09 301.11 161.81 301.11 161.81 265.16 147.09 268.51 147.09 301.11" fill="url(#linear-gradient-80)"/><polygon points="154.19 273.6 149.75 275.19 149.75 272.75 154.19 271.16 154.19 273.6" fill="#68e1fd"/><polygon points="154.19 278.15 149.75 279.74 149.75 277.3 154.19 275.71 154.19 278.15" fill="#68e1fd"/><polygon points="154.19 283.02 149.75 284.61 149.75 282.18 154.19 280.58 154.19 283.02" fill="#68e1fd"/><polygon points="154.19 287.9 149.75 289.49 149.75 287.05 154.19 285.46 154.19 287.9" fill="#68e1fd"/><polygon points="154.19 292.77 149.75 294.36 149.75 291.92 154.19 290.33 154.19 292.77" fill="#68e1fd"/><polygon points="154.19 297.64 149.75 299.23 149.75 296.8 154.19 295.21 154.19 297.64" fill="#68e1fd"/><polygon points="154.19 302.52 149.75 304.11 149.75 301.67 154.19 300.08 154.19 302.52" fill="#68e1fd"/><polygon points="154.19 307.39 149.75 308.98 149.75 306.54 154.19 304.95 154.19 307.39" fill="#68e1fd"/><polygon points="154.19 312.26 149.75 313.86 149.75 311.42 154.19 309.83 154.19 312.26" fill="#68e1fd"/><polygon points="154.19 317.14 149.75 318.73 149.75 316.29 154.19 314.7 154.19 317.14" fill="#68e1fd"/><polygon points="154.19 322.01 149.75 323.6 149.75 321.17 154.19 319.58 154.19 322.01" fill="#68e1fd"/><polygon points="154.19 326.89 149.75 328.48 149.75 326.04 154.19 324.45 154.19 326.89" fill="#68e1fd"/><polygon points="154.19 331.76 149.75 333.35 149.75 330.91 154.19 329.32 154.19 331.76" fill="#68e1fd"/><polygon points="154.19 336.63 149.75 338.22 149.75 335.79 154.19 334.2 154.19 336.63" fill="#68e1fd"/><polygon points="154.19 341.51 149.75 343.1 149.75 340.66 154.19 339.07 154.19 341.51" fill="#68e1fd"/><polygon points="154.19 346.38 149.75 347.97 149.75 345.54 154.19 343.95 154.19 346.38" fill="#68e1fd"/><polygon points="154.19 351.26 149.75 352.85 149.75 350.41 154.19 348.82 154.19 351.26" fill="#68e1fd"/><polygon points="154.19 356.13 149.75 357.72 149.75 355.28 154.19 353.69 154.19 356.13" fill="#68e1fd"/><polygon points="154.19 361 149.75 362.59 149.75 360.16 154.19 358.57 154.19 361" fill="#68e1fd"/><polygon points="154.19 365.88 149.75 367.47 149.75 365.03 154.19 363.44 154.19 365.88" fill="#68e1fd"/><polygon points="154.19 370.75 149.75 372.34 149.75 369.9 154.19 368.31 154.19 370.75" fill="#68e1fd"/><polygon points="154.19 375.63 149.75 377.21 149.75 374.78 154.19 373.19 154.19 375.63" fill="#68e1fd"/><polygon points="154.19 380.5 149.75 382.09 149.75 379.65 154.19 378.06 154.19 380.5" fill="#68e1fd"/><polygon points="154.19 385.37 149.75 386.96 149.75 384.53 154.19 382.94 154.19 385.37" fill="#68e1fd"/><polygon points="154.19 390.25 149.75 391.84 149.75 389.4 154.19 387.81 154.19 390.25" fill="#68e1fd"/><polygon points="154.19 395.12 149.75 396.71 149.75 394.27 154.19 392.68 154.19 395.12" fill="#68e1fd"/><polygon points="154.19 400 149.75 401.58 149.75 399.15 154.19 397.56 154.19 400" fill="#68e1fd"/><polygon points="154.19 404.87 149.75 406.46 149.75 404.02 154.19 402.43 154.19 404.87" fill="#68e1fd"/><polygon points="154.19 409.74 149.75 411.33 149.75 408.89 154.19 407.31 154.19 409.74" fill="#68e1fd"/><polygon points="160.35 271.43 155.91 273.02 155.91 270.58 160.35 268.99 160.35 271.43" fill="#68e1fd"/><polygon points="160.35 275.98 155.91 277.57 155.91 275.13 160.35 273.54 160.35 275.98" fill="#68e1fd"/><polygon points="160.35 280.85 155.91 282.44 155.91 280 160.35 278.41 160.35 280.85" fill="#68e1fd"/><polygon points="160.35 285.73 155.91 287.31 155.91 284.88 160.35 283.29 160.35 285.73" fill="#68e1fd"/><polygon points="160.35 290.6 155.91 292.19 155.91 289.75 160.35 288.16 160.35 290.6" fill="#68e1fd"/><polygon points="160.35 295.47 155.91 297.06 155.91 294.63 160.35 293.04 160.35 295.47" fill="#68e1fd"/><polygon points="160.35 300.35 155.91 301.94 155.91 299.5 160.35 297.91 160.35 300.35" fill="#68e1fd"/><polygon points="160.35 305.22 155.91 306.81 155.91 304.37 160.35 302.78 160.35 305.22" fill="#68e1fd"/><polygon points="160.35 310.1 155.91 311.68 155.91 309.25 160.35 307.66 160.35 310.1" fill="#68e1fd"/><polygon points="160.35 314.97 155.91 316.56 155.91 314.12 160.35 312.53 160.35 314.97" fill="#68e1fd"/><polygon points="160.35 319.84 155.91 321.43 155.91 319 160.35 317.4 160.35 319.84" fill="#68e1fd"/><polygon points="160.35 324.72 155.91 326.31 155.91 323.87 160.35 322.28 160.35 324.72" fill="#68e1fd"/><polygon points="160.35 329.59 155.91 331.18 155.91 328.74 160.35 327.15 160.35 329.59" fill="#68e1fd"/><polygon points="160.35 334.46 155.91 336.05 155.91 333.62 160.35 332.03 160.35 334.46" fill="#68e1fd"/><polygon points="160.35 339.34 155.91 340.93 155.91 338.49 160.35 336.9 160.35 339.34" fill="#68e1fd"/><polygon points="160.35 344.21 155.91 345.8 155.91 343.36 160.35 341.77 160.35 344.21" fill="#68e1fd"/><polygon points="160.35 349.09 155.91 350.68 155.91 348.24 160.35 346.65 160.35 349.09" fill="#68e1fd"/><polygon points="160.35 353.96 155.91 355.55 155.91 353.11 160.35 351.52 160.35 353.96" fill="#68e1fd"/><polygon points="160.35 358.83 155.91 360.42 155.91 357.99 160.35 356.4 160.35 358.83" fill="#68e1fd"/><polygon points="160.35 363.71 155.91 365.3 155.91 362.86 160.35 361.27 160.35 363.71" fill="#68e1fd"/><polygon points="160.35 368.58 155.91 370.17 155.91 367.73 160.35 366.14 160.35 368.58" fill="#68e1fd"/><polygon points="160.35 373.45 155.91 375.04 155.91 372.61 160.35 371.02 160.35 373.45" fill="#68e1fd"/><polygon points="160.35 378.33 155.91 379.92 155.91 377.48 160.35 375.89 160.35 378.33" fill="#68e1fd"/><polygon points="160.35 383.2 155.91 384.79 155.91 382.36 160.35 380.77 160.35 383.2" fill="#68e1fd"/><polygon points="160.35 388.08 155.91 389.67 155.91 387.23 160.35 385.64 160.35 388.08" fill="#68e1fd"/><polygon points="160.35 392.95 155.91 394.54 155.91 392.1 160.35 390.51 160.35 392.95" fill="#68e1fd"/><polygon points="160.35 397.82 155.91 399.41 155.91 396.98 160.35 395.39 160.35 397.82" fill="#68e1fd"/><polygon points="160.35 402.7 155.91 404.29 155.91 401.85 160.35 400.26 160.35 402.7" fill="#68e1fd"/><polygon points="160.35 407.57 155.91 409.16 155.91 406.73 160.35 405.13 160.35 407.57" fill="#68e1fd"/><polygon points="152.5 408.23 111.56 408.23 111.56 300.03 153.8 298.95 152.5 408.23" fill="#68e1fd"/><polygon points="152.5 408.23 111.56 408.23 111.56 300.03 153.8 298.95 152.5 408.23" fill="url(#linear-gradient-81)"/><rect x="144.7" y="302.96" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="307.5" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="312.38" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="317.25" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="322.13" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="327" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="331.87" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="336.75" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="341.62" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="346.5" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="351.37" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="356.24" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="361.12" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="365.99" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="370.87" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="375.74" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="380.61" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="385.49" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="390.36" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="395.23" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="400.11" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="404.98" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="409.86" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="414.73" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="419.6" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="424.48" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="429.35" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="434.23" width="4.06" height="2.44" fill="#68e1fd"/><rect x="144.7" y="439.1" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="302.96" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="307.5" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="312.38" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="317.25" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="322.13" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="327" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="331.87" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="336.75" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="341.62" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="346.5" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="351.37" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="356.24" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="361.12" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="365.99" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="370.87" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="375.74" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="380.61" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="385.49" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="390.36" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="395.23" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="400.11" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="404.98" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="409.86" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="414.73" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="419.6" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="424.48" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="429.35" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="434.23" width="4.06" height="2.44" fill="#68e1fd"/><rect x="136.71" y="439.1" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="302.96" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="307.5" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="312.38" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="317.25" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="322.13" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="327" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="331.87" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="336.75" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="341.62" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="346.5" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="351.37" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="356.24" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="361.12" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="365.99" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="370.87" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="375.74" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="380.61" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="385.49" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="390.36" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="395.23" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="400.11" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="404.98" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="409.86" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="414.73" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="419.6" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="424.48" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="429.35" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="434.23" width="4.06" height="2.44" fill="#68e1fd"/><rect x="128.73" y="439.1" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="302.96" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="307.5" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="312.38" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="317.25" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="322.13" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="327" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="331.87" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="336.75" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="341.62" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="346.5" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="351.37" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="356.24" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="361.12" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="365.99" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="370.87" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="375.74" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="380.61" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="385.49" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="390.36" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="395.23" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="400.11" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="404.98" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="409.86" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="414.73" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="419.6" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="424.48" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="429.35" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="434.23" width="4.06" height="2.44" fill="#68e1fd"/><rect x="120.74" y="439.1" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="302.96" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="307.5" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="312.38" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="317.25" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="322.13" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="327" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="331.87" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="336.75" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="341.62" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="346.5" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="351.37" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="356.24" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="361.12" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="365.99" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="370.87" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="375.74" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="380.61" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="385.49" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="390.36" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="395.23" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="400.11" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="404.98" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="409.86" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="414.73" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="419.6" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="424.48" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="429.35" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="434.23" width="4.06" height="2.44" fill="#68e1fd"/><rect x="112.75" y="439.1" width="4.06" height="2.44" fill="#68e1fd"/><polygon points="152.5 408.23 167.61 408.23 167.66 292.88 153.37 299.92 152.5 408.23" fill="#68e1fd"/><polygon points="152.5 408.23 167.61 408.23 167.66 292.88 153.37 299.92 152.5 408.23" fill="url(#linear-gradient-82)"/><polygon points="134.47 257.55 119.03 268.84 147.3 269.16 134.47 257.55" fill="#68e1fd"/><polygon points="134.47 257.55 119.03 268.84 147.3 269.16 134.47 257.55" opacity="0.58" fill="url(#linear-gradient-83)"/><polygon points="162.17 265.43 148.76 255.92 134.47 257.55 147.3 269.16 162.17 265.43" fill="#68e1fd"/><polygon points="162.17 265.43 148.76 255.92 134.47 257.55 147.3 269.16 162.17 265.43" opacity="0.58" fill="url(#linear-gradient-84)"/><polygon points="107.33 407.91 133.33 407.91 133.33 314.33 107.33 324.73 107.33 407.91" fill="#68e1fd"/><polygon points="107.33 407.91 133.33 407.91 133.33 314.33 107.33 324.73 107.33 407.91" opacity="0.58" fill="url(#linear-gradient-85)"/><polygon points="126.02 306.53 126.02 317.42 107.33 324.73 107.33 314.81 126.02 306.53" fill="#68e1fd"/><polygon points="126.02 306.53 126.02 317.42 107.33 324.73 107.33 314.81 126.02 306.53" opacity="0.58" fill="url(#linear-gradient-86)"/><rect x="222.03" y="220.53" width="88.01" height="160.51" fill="#68e1fd"/><rect x="304.47" y="235.7" width="4.52" height="2.54" fill="url(#linear-gradient-87)"/><rect x="304.47" y="240.44" width="4.52" height="2.54" fill="url(#linear-gradient-88)"/><rect x="304.47" y="245.53" width="4.52" height="2.54" fill="url(#linear-gradient-89)"/><rect x="304.47" y="250.61" width="4.52" height="2.54" fill="url(#linear-gradient-90)"/><rect x="304.47" y="255.7" width="4.52" height="2.54" fill="url(#linear-gradient-91)"/><rect x="304.47" y="260.78" width="4.52" height="2.54" fill="url(#linear-gradient-92)"/><rect x="304.47" y="265.87" width="4.52" height="2.54" fill="url(#linear-gradient-93)"/><rect x="304.47" y="270.95" width="4.52" height="2.54" fill="url(#linear-gradient-94)"/><rect x="304.47" y="276.04" width="4.52" height="2.54" fill="url(#linear-gradient-95)"/><rect x="304.47" y="281.12" width="4.52" height="2.54" fill="url(#linear-gradient-96)"/><rect x="304.47" y="286.21" width="4.52" height="2.54" fill="url(#linear-gradient-97)"/><rect x="304.47" y="291.3" width="4.52" height="2.54" fill="url(#linear-gradient-98)"/><rect x="304.47" y="296.38" width="4.52" height="2.54" fill="url(#linear-gradient-99)"/><rect x="304.47" y="301.47" width="4.52" height="2.54" fill="url(#linear-gradient-100)"/><rect x="304.47" y="306.55" width="4.52" height="2.54" fill="url(#linear-gradient-101)"/><rect x="304.47" y="311.64" width="4.52" height="2.54" fill="url(#linear-gradient-102)"/><rect x="304.47" y="316.72" width="4.52" height="2.54" fill="url(#linear-gradient-103)"/><rect x="304.47" y="321.81" width="4.52" height="2.54" fill="url(#linear-gradient-104)"/><rect x="304.47" y="326.89" width="4.52" height="2.54" fill="url(#linear-gradient-105)"/><rect x="304.47" y="331.98" width="4.52" height="2.54" fill="url(#linear-gradient-106)"/><rect x="304.47" y="337.06" width="4.52" height="2.54" fill="url(#linear-gradient-107)"/><rect x="304.47" y="342.15" width="4.52" height="2.54" fill="url(#linear-gradient-108)"/><rect x="304.47" y="347.23" width="4.52" height="2.54" fill="url(#linear-gradient-109)"/><rect x="304.47" y="352.32" width="4.52" height="2.54" fill="url(#linear-gradient-110)"/><rect x="304.47" y="357.4" width="4.52" height="2.54" fill="url(#linear-gradient-111)"/><rect x="304.47" y="362.49" width="4.52" height="2.54" fill="url(#linear-gradient-112)"/><rect x="304.47" y="367.57" width="4.52" height="2.54" fill="url(#linear-gradient-113)"/><rect x="304.47" y="372.66" width="4.52" height="2.54" fill="url(#linear-gradient-114)"/><rect x="304.47" y="377.75" width="4.52" height="2.54" fill="url(#linear-gradient-115)"/><rect x="227.88" y="221.4" width="75.06" height="159.86" fill="#68e1fd"/><rect x="227.88" y="234.1" width="75.06" height="147.16" opacity="0.58" fill="url(#linear-gradient-116)"/><rect x="230.08" y="235.7" width="71.1" height="2.54" fill="url(#linear-gradient-117)"/><rect x="230.08" y="240.44" width="71.1" height="2.54" fill="url(#linear-gradient-118)"/><rect x="230.08" y="245.53" width="71.1" height="2.54" fill="url(#linear-gradient-119)"/><rect x="230.08" y="250.61" width="71.1" height="2.54" fill="url(#linear-gradient-120)"/><rect x="230.08" y="255.7" width="71.1" height="2.54" fill="url(#linear-gradient-121)"/><rect x="230.08" y="260.78" width="71.1" height="2.54" fill="url(#linear-gradient-122)"/><rect x="230.08" y="265.87" width="71.1" height="2.54" fill="url(#linear-gradient-123)"/><rect x="230.08" y="270.95" width="71.1" height="2.54" fill="url(#linear-gradient-124)"/><rect x="230.08" y="276.04" width="71.1" height="2.54" fill="url(#linear-gradient-125)"/><rect x="230.08" y="281.12" width="71.1" height="2.54" fill="url(#linear-gradient-126)"/><rect x="230.08" y="286.21" width="71.1" height="2.54" fill="url(#linear-gradient-127)"/><rect x="230.08" y="291.3" width="71.1" height="2.54" fill="url(#linear-gradient-128)"/><rect x="230.08" y="296.38" width="71.1" height="2.54" fill="url(#linear-gradient-129)"/><rect x="230.08" y="301.47" width="71.1" height="2.54" fill="url(#linear-gradient-130)"/><rect x="230.08" y="306.55" width="71.1" height="2.54" fill="url(#linear-gradient-131)"/><rect x="230.08" y="311.64" width="71.1" height="2.54" fill="url(#linear-gradient-132)"/><rect x="230.08" y="316.72" width="71.1" height="2.54" fill="url(#linear-gradient-133)"/><rect x="230.08" y="321.81" width="71.1" height="2.54" fill="url(#linear-gradient-134)"/><rect x="230.08" y="326.89" width="71.1" height="2.54" fill="url(#linear-gradient-135)"/><rect x="230.08" y="331.98" width="71.1" height="2.54" fill="url(#linear-gradient-136)"/><rect x="230.08" y="337.06" width="71.1" height="2.54" fill="url(#linear-gradient-137)"/><rect x="230.08" y="342.15" width="71.1" height="2.54" fill="url(#linear-gradient-138)"/><rect x="230.08" y="347.23" width="71.1" height="2.54" fill="url(#linear-gradient-139)"/><rect x="230.08" y="352.32" width="71.1" height="2.54" fill="url(#linear-gradient-140)"/><rect x="230.08" y="357.4" width="71.1" height="2.54" fill="url(#linear-gradient-141)"/><rect x="230.08" y="362.49" width="71.1" height="2.54" fill="url(#linear-gradient-142)"/><rect x="230.08" y="367.57" width="71.1" height="2.54" fill="url(#linear-gradient-143)"/><rect x="230.08" y="372.66" width="71.1" height="2.54" fill="url(#linear-gradient-144)"/><rect x="230.08" y="377.75" width="71.1" height="2.54" fill="url(#linear-gradient-145)"/><rect x="268.66" y="378.99" width="44.19" height="28.27" fill="#68e1fd"/><rect x="268.66" y="378.99" width="44.19" height="28.27" fill="url(#linear-gradient-146)"/><rect x="222.85" y="235.7" width="4.52" height="2.54" fill="url(#linear-gradient-147)"/><rect x="222.85" y="240.44" width="4.52" height="2.54" fill="url(#linear-gradient-148)"/><rect x="222.85" y="245.53" width="4.52" height="2.54" fill="url(#linear-gradient-149)"/><rect x="222.85" y="250.61" width="4.52" height="2.54" fill="url(#linear-gradient-150)"/><rect x="222.85" y="255.7" width="4.52" height="2.54" fill="url(#linear-gradient-151)"/><rect x="222.85" y="260.78" width="4.52" height="2.54" fill="url(#linear-gradient-152)"/><rect x="222.85" y="265.87" width="4.52" height="2.54" fill="url(#linear-gradient-153)"/><rect x="222.85" y="270.95" width="4.52" height="2.54" fill="url(#linear-gradient-154)"/><rect x="222.85" y="276.04" width="4.52" height="2.54" fill="url(#linear-gradient-155)"/><rect x="222.85" y="281.12" width="4.52" height="2.54" fill="url(#linear-gradient-156)"/><rect x="222.85" y="286.21" width="4.52" height="2.54" fill="url(#linear-gradient-157)"/><rect x="222.85" y="291.3" width="4.52" height="2.54" fill="url(#linear-gradient-158)"/><rect x="222.85" y="296.38" width="4.52" height="2.54" fill="url(#linear-gradient-159)"/><rect x="222.85" y="301.47" width="4.52" height="2.54" fill="url(#linear-gradient-160)"/><rect x="222.85" y="306.55" width="4.52" height="2.54" fill="url(#linear-gradient-161)"/><rect x="222.85" y="311.64" width="4.52" height="2.54" fill="url(#linear-gradient-162)"/><rect x="222.85" y="316.72" width="4.52" height="2.54" fill="url(#linear-gradient-163)"/><rect x="222.85" y="321.81" width="4.52" height="2.54" fill="url(#linear-gradient-164)"/><rect x="222.85" y="326.89" width="4.52" height="2.54" fill="url(#linear-gradient-165)"/><rect x="222.85" y="331.98" width="4.52" height="2.54" fill="url(#linear-gradient-166)"/><rect x="222.85" y="337.06" width="4.52" height="2.54" fill="url(#linear-gradient-167)"/><rect x="222.85" y="342.15" width="4.52" height="2.54" fill="url(#linear-gradient-168)"/><rect x="222.85" y="347.23" width="4.52" height="2.54" fill="url(#linear-gradient-169)"/><rect x="222.85" y="352.32" width="4.52" height="2.54" fill="url(#linear-gradient-170)"/><rect x="222.85" y="357.4" width="4.52" height="2.54" fill="url(#linear-gradient-171)"/><rect x="222.85" y="362.49" width="4.52" height="2.54" fill="url(#linear-gradient-172)"/><rect x="222.85" y="367.57" width="4.52" height="2.54" fill="url(#linear-gradient-173)"/><rect x="222.85" y="372.66" width="4.52" height="2.54" fill="url(#linear-gradient-174)"/><rect x="222.85" y="377.75" width="4.52" height="2.54" fill="url(#linear-gradient-175)"/><rect x="193.44" y="247.07" width="77.98" height="160.19" fill="#68e1fd"/><rect x="193.44" y="256.62" width="77.98" height="150.64" opacity="0.58" fill="url(#linear-gradient-176)"/><rect x="310.41" y="237.97" width="4.55" height="69.86" fill="#68e1fd"/><rect x="316.59" y="202.55" width="22.09" height="117.3" fill="#68e1fd"/><rect x="316.59" y="202.55" width="22.09" height="117.3" opacity="0.58" fill="url(#linear-gradient-177)"/><rect x="317.24" y="248.69" width="21.77" height="92.93" fill="#68e1fd"/><rect x="317.24" y="248.69" width="21.77" height="92.93" opacity="0.58" fill="url(#linear-gradient-178)"/><polygon points="339.01 248.69 320.16 248.69 324.55 240.73 339.01 240.73 339.01 248.69" fill="#68e1fd"/><rect x="339.66" y="230.17" width="34.12" height="143.94" fill="#68e1fd"/><rect x="335.11" y="229.2" width="4.77" height="131.92" fill="#68e1fd"/><rect x="335.11" y="229.2" width="4.77" height="131.92" opacity="0.58" fill="url(#linear-gradient-179)"/><rect x="326.44" y="267.54" width="17.33" height="72.78" fill="#68e1fd"/><rect x="326.44" y="267.54" width="17.33" height="72.78" opacity="0.58" fill="url(#linear-gradient-180)"/><rect x="339.44" y="180.24" width="38.99" height="134.38" fill="#68e1fd"/><rect x="339.44" y="180.24" width="38.99" height="115.42" fill="url(#linear-gradient-181)"/><rect x="345.45" y="180.27" width="0.93" height="123.66" fill="#fff" opacity="0.48"/><rect x="354.11" y="180.27" width="0.93" height="123.66" fill="#fff" opacity="0.48"/><rect x="362.77" y="180.27" width="0.93" height="123.66" fill="#fff" opacity="0.48"/><rect x="371.43" y="180.27" width="0.93" height="123.66" fill="#fff" opacity="0.48"/><rect x="339.66" y="219.77" width="30.54" height="124.12" fill="#68e1fd"/><rect x="339.66" y="219.77" width="30.54" height="124.12" opacity="0.58" fill="url(#linear-gradient-182)"/><rect x="343.34" y="171.47" width="29.57" height="8.66" fill="#68e1fd"/><polygon points="359.15 155.98 347.24 171.58 369.66 171.58 359.15 155.98" fill="#68e1fd"/><rect x="343.34" y="171.47" width="29.57" height="8.66" fill="url(#linear-gradient-183)"/><polygon points="359.15 155.98 347.24 171.58 369.66 171.58 359.15 155.98" fill="url(#linear-gradient-184)"/><path d="M282.19,168.32" transform="translate(84.55 -32.05)" fill="#68e1fd"/><polygon points="355.33 403.79 342.47 403.79 342.47 309.56 355.33 324.68 355.33 403.79" fill="#68e1fd"/><polygon points="355.33 403.79 342.47 403.79 342.47 309.56 355.33 324.68 355.33 403.79" fill="url(#linear-gradient-185)"/><polygon points="391.21 324.68 376.26 309.56 342.47 309.56 355.33 324.68 391.21 324.68" fill="#68e1fd"/><polygon points="391.21 324.68 376.26 309.56 342.47 309.56 355.33 324.68 391.21 324.68" opacity="0.58" fill="url(#linear-gradient-186)"/><rect x="362.46" y="304.53" width="12.7" height="15.6" fill="#68e1fd"/><polygon points="362.47 320.09 356.2 314 356.57 299.22 362.83 305.31 362.47 320.09" fill="#68e1fd"/><polygon points="362.47 320.09 356.2 314 356.57 299.22 362.83 305.31 362.47 320.09" opacity="0.58" fill="url(#linear-gradient-187)"/><polygon points="356.61 299.23 370.15 299.23 375.68 305.19 362.79 305.3 356.61 299.23" fill="#68e1fd"/><polygon points="356.61 299.23 370.15 299.23 375.68 305.19 362.79 305.3 356.61 299.23" opacity="0.58" fill="url(#linear-gradient-188)"/><polygon points="402.2 300.84 384.5 300.84 384.5 281.84 400.09 281.35 402.2 300.84" fill="#68e1fd"/><polygon points="402.2 300.84 384.5 300.84 384.5 281.84 400.09 281.35 402.2 300.84" opacity="0.58" fill="url(#linear-gradient-189)"/><polygon points="421.05 290.61 400.09 281.35 384.5 281.84 401.64 292.88 421.05 290.61" fill="#68e1fd"/><rect x="355.33" y="324.68" width="35.89" height="79.11" fill="#68e1fd"/><rect x="355.33" y="324.68" width="35.89" height="79.11" opacity="0.58" fill="url(#linear-gradient-190)"/><rect x="355.25" y="371.62" width="35.9" height="0.97" opacity="0.58" fill="url(#linear-gradient-191)"/><rect x="355.25" y="376.71" width="35.9" height="0.97" opacity="0.58" fill="url(#linear-gradient-192)"/><rect x="355.25" y="381.8" width="35.9" height="0.97" opacity="0.58" fill="url(#linear-gradient-193)"/><rect x="355.25" y="386.89" width="35.9" height="0.97" opacity="0.58" fill="url(#linear-gradient-194)"/><rect x="411.47" y="314.33" width="9.21" height="72.74" fill="#68e1fd"/><rect x="411.47" y="314.33" width="9.21" height="72.74" opacity="0.58" fill="url(#linear-gradient-195)"/><polygon points="420.13 319.53 411.46 314.33 420.29 314.33 420.13 319.53" fill="#68e1fd"/><rect x="507.75" y="311.08" width="47.22" height="76.03" fill="#68e1fd"/><polygon points="537.43 307.5 516.52 307.5 516.52 298.19 537.54 297.68 537.43 307.5" fill="#68e1fd"/><polygon points="537.43 307.5 516.52 307.5 516.52 298.19 537.54 297.68 537.43 307.5" opacity="0.58" fill="url(#linear-gradient-196)"/><polygon points="497.89 293.64 497.89 303.61 516.52 307.5 516.58 298.95 497.89 293.64" fill="#68e1fd"/><polygon points="497.89 293.64 497.89 303.61 516.52 307.5 516.58 298.95 497.89 293.64" opacity="0.58" fill="url(#linear-gradient-197)"/><polygon points="497.89 293.64 524.38 292.96 537.54 297.68 516.09 298.95 497.89 293.64" fill="#68e1fd"/><rect x="498.65" y="311.08" width="56.32" height="72.13" fill="#68e1fd"/><rect x="498.65" y="311.08" width="56.32" height="72.13" opacity="0.58" fill="url(#linear-gradient-198)"/><rect x="520.53" y="367.4" width="42.89" height="39.64" fill="#68e1fd"/><rect x="520.53" y="367.4" width="42.89" height="39.64" opacity="0.58" fill="url(#linear-gradient-199)"/><rect x="511.05" y="378.66" width="9.48" height="28.38" fill="#68e1fd"/><rect x="511.05" y="378.66" width="9.48" height="28.38" opacity="0.58" fill="url(#linear-gradient-200)"/><rect x="330.56" y="386.24" width="42.24" height="19.28" fill="#68e1fd"/><rect x="330.56" y="386.24" width="42.24" height="19.28" opacity="0.58" fill="url(#linear-gradient-201)"/><polygon points="364.03 390.47 339.12 390.47 342.15 373.79 361.43 373.79 364.03 390.47" fill="#68e1fd"/><polygon points="364.03 390.47 339.12 390.47 342.15 373.79 361.43 373.79 364.03 390.47" opacity="0.58" fill="url(#linear-gradient-202)"/><polygon points="361.43 373.87 341.77 373.87 350.95 363.31 351.68 363.31 361.43 373.87" fill="#68e1fd"/><rect x="257.83" y="226.81" width="14.95" height="5.2" opacity="0.58" fill="url(#linear-gradient-203)"/><rect x="274.4" y="226.81" width="14.95" height="5.2" opacity="0.58" fill="url(#linear-gradient-204)"/><rect x="290.76" y="226.81" width="14.95" height="5.2" opacity="0.58" fill="url(#linear-gradient-205)"/><rect x="199.94" y="251.94" width="5.85" height="3.25" opacity="0.58" fill="url(#linear-gradient-206)"/><rect x="206.84" y="251.94" width="5.85" height="3.25" opacity="0.58" fill="url(#linear-gradient-207)"/><rect x="213.75" y="251.94" width="5.85" height="3.25" opacity="0.58" fill="url(#linear-gradient-208)"/><rect x="220.65" y="251.94" width="5.85" height="3.25" opacity="0.58" fill="url(#linear-gradient-209)"/><rect x="227.56" y="251.94" width="5.85" height="3.25" opacity="0.58" fill="url(#linear-gradient-210)"/><rect x="234.46" y="251.94" width="5.85" height="3.25" opacity="0.58" fill="url(#linear-gradient-211)"/><rect x="241.37" y="251.94" width="5.85" height="3.25" opacity="0.58" fill="url(#linear-gradient-212)"/><rect x="248.27" y="251.94" width="5.85" height="3.25" opacity="0.58" fill="url(#linear-gradient-213)"/><rect x="255.18" y="251.94" width="5.85" height="3.25" opacity="0.58" fill="url(#linear-gradient-214)"/><rect x="360.09" y="215.88" width="8.37" height="3.01" fill="#68e1fd"/><rect x="360.09" y="215.88" width="8.37" height="3.01" opacity="0.58" fill="url(#linear-gradient-215)"/><rect x="339.77" y="217.5" width="30.98" height="4.66" fill="#68e1fd"/><rect x="319.51" y="252.81" width="19.93" height="2.31" opacity="0.58" fill="url(#linear-gradient-216)"/><rect x="319.51" y="257.56" width="19.93" height="2.31" opacity="0.58" fill="url(#linear-gradient-217)"/><rect x="319.51" y="262.3" width="19.93" height="2.31" opacity="0.58" fill="url(#linear-gradient-218)"/><rect x="343.77" y="227.25" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-219)"/><rect x="343.77" y="232" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-220)"/><rect x="343.77" y="236.74" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-221)"/><rect x="343.77" y="241.54" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-222)"/><rect x="343.77" y="246.35" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-223)"/><rect x="343.77" y="251.15" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-224)"/><rect x="343.77" y="255.95" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-225)"/><rect x="343.77" y="260.75" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-226)"/><rect x="343.77" y="265.55" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-227)"/><rect x="343.77" y="270.35" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-228)"/><rect x="343.77" y="275.15" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-229)"/><rect x="343.77" y="279.95" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-230)"/><rect x="352.29" y="227.25" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-231)"/><rect x="352.29" y="232" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-232)"/><rect x="352.29" y="236.74" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-233)"/><rect x="352.29" y="241.54" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-234)"/><rect x="352.29" y="246.35" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-235)"/><rect x="352.29" y="251.15" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-236)"/><rect x="352.29" y="255.95" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-237)"/><rect x="352.29" y="260.75" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-238)"/><rect x="352.29" y="265.55" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-239)"/><rect x="352.29" y="270.35" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-240)"/><rect x="352.29" y="275.15" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-241)"/><rect x="352.29" y="279.95" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-242)"/><rect x="360.81" y="227.25" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-243)"/><rect x="360.81" y="232" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-244)"/><rect x="360.81" y="236.74" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-245)"/><rect x="360.81" y="241.54" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-246)"/><rect x="360.81" y="246.35" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-247)"/><rect x="360.81" y="251.15" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-248)"/><rect x="360.81" y="255.95" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-249)"/><rect x="360.81" y="260.75" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-250)"/><rect x="360.81" y="265.55" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-251)"/><rect x="360.81" y="270.35" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-252)"/><rect x="360.81" y="275.15" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-253)"/><rect x="360.81" y="279.95" width="5.49" height="2.31" opacity="0.58" fill="url(#linear-gradient-254)"/><polygon points="372.8 393.61 330.64 393.61 330.56 386.25 372.8 386.03 372.8 393.61" fill="#68e1fd"/><rect x="199.78" y="260.07" width="63.85" height="2.44" fill="url(#linear-gradient-255)"/><rect x="199.78" y="264.61" width="63.85" height="2.44" fill="url(#linear-gradient-256)"/><rect x="199.78" y="269.49" width="63.85" height="2.44" fill="url(#linear-gradient-257)"/><rect x="199.78" y="274.36" width="63.85" height="2.44" fill="url(#linear-gradient-258)"/><rect x="199.78" y="279.24" width="63.85" height="2.44" fill="url(#linear-gradient-259)"/><rect x="199.78" y="284.11" width="63.85" height="2.44" fill="url(#linear-gradient-260)"/><rect x="199.78" y="288.98" width="63.85" height="2.44" fill="url(#linear-gradient-261)"/><rect x="199.78" y="293.86" width="63.85" height="2.44" fill="url(#linear-gradient-262)"/><rect x="199.78" y="298.73" width="63.85" height="2.44" fill="url(#linear-gradient-263)"/><rect x="199.78" y="303.61" width="63.85" height="2.44" fill="url(#linear-gradient-264)"/><rect x="199.78" y="308.48" width="63.85" height="2.44" fill="url(#linear-gradient-265)"/><rect x="199.78" y="313.35" width="63.85" height="2.44" fill="url(#linear-gradient-266)"/><rect x="199.78" y="318.23" width="63.85" height="2.44" fill="url(#linear-gradient-267)"/><rect x="199.78" y="323.1" width="63.85" height="2.44" fill="url(#linear-gradient-268)"/><rect x="199.78" y="327.97" width="63.85" height="2.44" fill="url(#linear-gradient-269)"/><rect x="199.78" y="332.85" width="63.85" height="2.44" fill="url(#linear-gradient-270)"/><rect x="199.78" y="337.72" width="63.85" height="2.44" fill="url(#linear-gradient-271)"/><rect x="199.78" y="342.6" width="63.85" height="2.44" fill="url(#linear-gradient-272)"/><rect x="199.78" y="347.47" width="63.85" height="2.44" fill="url(#linear-gradient-273)"/><rect x="199.78" y="352.34" width="63.85" height="2.44" fill="url(#linear-gradient-274)"/><rect x="199.78" y="357.22" width="63.85" height="2.44" fill="url(#linear-gradient-275)"/><rect x="199.78" y="362.09" width="63.85" height="2.44" fill="url(#linear-gradient-276)"/><rect x="199.78" y="366.97" width="63.85" height="2.44" fill="url(#linear-gradient-277)"/><rect x="199.78" y="371.84" width="63.85" height="2.44" fill="url(#linear-gradient-278)"/><rect x="199.78" y="376.71" width="63.85" height="2.44" fill="url(#linear-gradient-279)"/><rect x="199.78" y="381.59" width="63.85" height="2.44" fill="url(#linear-gradient-280)"/><rect x="199.78" y="386.46" width="63.85" height="2.44" fill="url(#linear-gradient-281)"/><rect x="199.78" y="391.34" width="63.85" height="2.44" fill="url(#linear-gradient-282)"/><rect x="199.78" y="396.21" width="63.85" height="2.44" fill="url(#linear-gradient-283)"/><rect x="193.28" y="260.07" width="4.06" height="2.44" fill="url(#linear-gradient-284)"/><rect x="193.28" y="264.61" width="4.06" height="2.44" fill="url(#linear-gradient-285)"/><rect x="193.28" y="269.49" width="4.06" height="2.44" fill="url(#linear-gradient-286)"/><rect x="193.28" y="274.36" width="4.06" height="2.44" fill="url(#linear-gradient-287)"/><rect x="193.28" y="279.24" width="4.06" height="2.44" fill="url(#linear-gradient-288)"/><rect x="193.28" y="284.11" width="4.06" height="2.44" fill="url(#linear-gradient-289)"/><rect x="193.28" y="288.98" width="4.06" height="2.44" fill="url(#linear-gradient-290)"/><rect x="193.28" y="293.86" width="4.06" height="2.44" fill="url(#linear-gradient-291)"/><rect x="193.28" y="298.73" width="4.06" height="2.44" fill="url(#linear-gradient-292)"/><rect x="193.28" y="303.61" width="4.06" height="2.44" fill="url(#linear-gradient-293)"/><rect x="193.28" y="308.48" width="4.06" height="2.44" fill="url(#linear-gradient-294)"/><rect x="193.28" y="313.35" width="4.06" height="2.44" fill="url(#linear-gradient-295)"/><rect x="193.28" y="318.23" width="4.06" height="2.44" fill="url(#linear-gradient-296)"/><rect x="193.28" y="323.1" width="4.06" height="2.44" fill="url(#linear-gradient-297)"/><rect x="193.28" y="327.97" width="4.06" height="2.44" fill="url(#linear-gradient-298)"/><rect x="193.28" y="332.85" width="4.06" height="2.44" fill="url(#linear-gradient-299)"/><rect x="193.28" y="337.72" width="4.06" height="2.44" fill="url(#linear-gradient-300)"/><rect x="193.28" y="342.6" width="4.06" height="2.44" fill="url(#linear-gradient-301)"/><rect x="193.28" y="347.47" width="4.06" height="2.44" fill="url(#linear-gradient-302)"/><rect x="193.28" y="352.34" width="4.06" height="2.44" fill="url(#linear-gradient-303)"/><rect x="193.28" y="357.22" width="4.06" height="2.44" fill="url(#linear-gradient-304)"/><rect x="193.28" y="362.09" width="4.06" height="2.44" fill="url(#linear-gradient-305)"/><rect x="193.28" y="366.97" width="4.06" height="2.44" fill="url(#linear-gradient-306)"/><rect x="193.28" y="371.84" width="4.06" height="2.44" fill="url(#linear-gradient-307)"/><rect x="193.28" y="376.71" width="4.06" height="2.44" fill="url(#linear-gradient-308)"/><rect x="193.28" y="381.59" width="4.06" height="2.44" fill="url(#linear-gradient-309)"/><rect x="193.28" y="386.46" width="4.06" height="2.44" fill="url(#linear-gradient-310)"/><rect x="193.28" y="391.34" width="4.06" height="2.44" fill="url(#linear-gradient-311)"/><rect x="193.28" y="396.21" width="4.06" height="2.44" fill="url(#linear-gradient-312)"/><rect x="267.12" y="260.07" width="4.06" height="2.44" fill="url(#linear-gradient-313)"/><rect x="267.12" y="264.61" width="4.06" height="2.44" fill="url(#linear-gradient-314)"/><rect x="267.12" y="269.49" width="4.06" height="2.44" fill="url(#linear-gradient-315)"/><rect x="267.12" y="274.36" width="4.06" height="2.44" fill="url(#linear-gradient-316)"/><rect x="267.12" y="279.24" width="4.06" height="2.44" fill="url(#linear-gradient-317)"/><rect x="267.12" y="284.11" width="4.06" height="2.44" fill="url(#linear-gradient-318)"/><rect x="267.12" y="288.98" width="4.06" height="2.44" fill="url(#linear-gradient-319)"/><rect x="267.12" y="293.86" width="4.06" height="2.44" fill="url(#linear-gradient-320)"/><rect x="267.12" y="298.73" width="4.06" height="2.44" fill="url(#linear-gradient-321)"/><rect x="267.12" y="303.61" width="4.06" height="2.44" fill="url(#linear-gradient-322)"/><rect x="267.12" y="308.48" width="4.06" height="2.44" fill="url(#linear-gradient-323)"/><rect x="267.12" y="313.35" width="4.06" height="2.44" fill="url(#linear-gradient-324)"/><rect x="267.12" y="318.23" width="4.06" height="2.44" fill="url(#linear-gradient-325)"/><rect x="267.12" y="323.1" width="4.06" height="2.44" fill="url(#linear-gradient-326)"/><rect x="267.12" y="327.97" width="4.06" height="2.44" fill="url(#linear-gradient-327)"/><rect x="267.12" y="332.85" width="4.06" height="2.44" fill="url(#linear-gradient-328)"/><rect x="267.12" y="337.72" width="4.06" height="2.44" fill="url(#linear-gradient-329)"/><rect x="267.12" y="342.6" width="4.06" height="2.44" fill="url(#linear-gradient-330)"/><rect x="267.12" y="347.47" width="4.06" height="2.44" fill="url(#linear-gradient-331)"/><rect x="267.12" y="352.34" width="4.06" height="2.44" fill="url(#linear-gradient-332)"/><rect x="267.12" y="357.22" width="4.06" height="2.44" fill="url(#linear-gradient-333)"/><rect x="267.12" y="362.09" width="4.06" height="2.44" fill="url(#linear-gradient-334)"/><rect x="267.12" y="366.97" width="4.06" height="2.44" fill="url(#linear-gradient-335)"/><rect x="267.12" y="371.84" width="4.06" height="2.44" fill="url(#linear-gradient-336)"/><rect x="267.12" y="376.71" width="4.06" height="2.44" fill="url(#linear-gradient-337)"/><rect x="267.12" y="381.59" width="4.06" height="2.44" fill="url(#linear-gradient-338)"/><rect x="267.12" y="386.46" width="4.06" height="2.44" fill="url(#linear-gradient-339)"/><rect x="267.12" y="391.34" width="4.06" height="2.44" fill="url(#linear-gradient-340)"/><rect x="267.12" y="396.21" width="4.06" height="2.44" fill="url(#linear-gradient-341)"/><path d="M449,351.45h1.31a4.39,4.39,0,0,1,4.39,4.39v15.84a0,0,0,0,1,0,0H444.66a0,0,0,0,1,0,0V355.84a4.39,4.39,0,0,1,4.39-4.39Z" fill="#68e1fd"/><path d="M449,351.45h1.31a4.39,4.39,0,0,1,4.39,4.39v15.84a0,0,0,0,1,0,0H444.66a0,0,0,0,1,0,0V355.84a4.39,4.39,0,0,1,4.39-4.39Z" opacity="0.58" fill="url(#linear-gradient-342)"/><circle cx="451.62" cy="288.53" r="8.99" fill="url(#linear-gradient-343)"/><polygon points="160.87 302.96 156.37 305.89 156.37 303.47 160.87 300.55 160.87 302.96" fill="#68e1fd"/><polygon points="160.87 307.48 156.37 310.4 156.37 307.98 160.87 305.06 160.87 307.48" fill="#68e1fd"/><polygon points="160.87 312.31 156.37 315.23 156.37 312.81 160.87 309.89 160.87 312.31" fill="#68e1fd"/><polygon points="160.87 317.14 156.37 320.06 156.37 317.65 160.87 314.72 160.87 317.14" fill="#68e1fd"/><polygon points="160.87 321.97 156.37 324.9 156.37 322.48 160.87 319.56 160.87 321.97" fill="#68e1fd"/><polygon points="160.87 326.81 156.37 329.73 156.37 327.31 160.87 324.39 160.87 326.81" fill="#68e1fd"/><polygon points="160.87 331.64 156.37 334.56 156.37 332.14 160.87 329.22 160.87 331.64" fill="#68e1fd"/><polygon points="160.87 336.47 156.37 339.39 156.37 336.98 160.87 334.05 160.87 336.47" fill="#68e1fd"/><polygon points="160.87 341.3 156.37 344.23 156.37 341.81 160.87 338.89 160.87 341.3" fill="#68e1fd"/><polygon points="160.87 346.13 156.37 349.06 156.37 346.64 160.87 343.72 160.87 346.13" fill="#68e1fd"/><polygon points="160.87 350.97 156.37 353.89 156.37 351.47 160.87 348.55 160.87 350.97" fill="#68e1fd"/><polygon points="160.87 355.8 156.37 358.72 156.37 356.31 160.87 353.38 160.87 355.8" fill="#68e1fd"/><polygon points="160.87 360.63 156.37 363.56 156.37 361.14 160.87 358.22 160.87 360.63" fill="#68e1fd"/><polygon points="160.87 365.46 156.37 368.39 156.37 365.97 160.87 363.05 160.87 365.46" fill="#68e1fd"/><polygon points="160.87 370.3 156.37 373.22 156.37 370.8 160.87 367.88 160.87 370.3" fill="#68e1fd"/><polygon points="160.87 375.13 156.37 378.05 156.37 375.64 160.87 372.71 160.87 375.13" fill="#68e1fd"/><polygon points="160.87 379.96 156.37 382.88 156.37 380.47 160.87 377.55 160.87 379.96" fill="#68e1fd"/><polygon points="160.87 384.79 156.37 387.72 156.37 385.3 160.87 382.38 160.87 384.79" fill="#68e1fd"/><polygon points="160.87 389.63 156.37 392.55 156.37 390.13 160.87 387.21 160.87 389.63" fill="#68e1fd"/><polygon points="160.87 394.46 156.37 397.38 156.37 394.97 160.87 392.04 160.87 394.46" fill="#68e1fd"/><polygon points="160.87 399.29 156.37 402.21 156.37 399.8 160.87 396.88 160.87 399.29" fill="#68e1fd"/><polygon points="160.87 404.12 156.37 407.05 156.37 404.63 160.87 401.71 160.87 404.12" fill="#68e1fd"/><polygon points="160.87 408.96 156.37 411.88 156.37 409.46 160.87 406.54 160.87 408.96" fill="#68e1fd"/><polygon points="160.87 413.79 156.37 416.71 156.37 414.3 160.87 411.37 160.87 413.79" fill="#68e1fd"/><polygon points="160.87 418.62 156.37 421.54 156.37 419.13 160.87 416.2 160.87 418.62" fill="#68e1fd"/><polygon points="160.87 423.45 156.37 426.38 156.37 423.96 160.87 421.04 160.87 423.45" fill="#68e1fd"/><polygon points="160.87 428.29 156.37 431.21 156.37 428.79 160.87 425.87 160.87 428.29" fill="#68e1fd"/><polygon points="160.87 433.12 156.37 436.04 156.37 433.63 160.87 430.7 160.87 433.12" fill="#68e1fd"/><polygon points="160.87 437.95 156.37 440.87 156.37 438.46 160.87 435.53 160.87 437.95" fill="#68e1fd"/><polygon points="167.12 298.94 162.62 301.87 162.62 299.45 167.12 296.52 167.12 298.94" fill="#68e1fd"/><polygon points="167.12 303.45 162.62 306.38 162.62 303.96 167.12 301.04 167.12 303.45" fill="#68e1fd"/><polygon points="167.12 308.28 162.62 311.21 162.62 308.79 167.12 305.87 167.12 308.28" fill="#68e1fd"/><polygon points="167.12 313.12 162.62 316.04 162.62 313.62 167.12 310.7 167.12 313.12" fill="#68e1fd"/><polygon points="167.12 317.95 162.62 320.87 162.62 318.46 167.12 315.53 167.12 317.95" fill="#68e1fd"/><polygon points="167.12 322.78 162.62 325.7 162.62 323.29 167.12 320.37 167.12 322.78" fill="#68e1fd"/><polygon points="167.12 327.61 162.62 330.54 162.62 328.12 167.12 325.2 167.12 327.61" fill="#68e1fd"/><polygon points="167.12 332.45 162.62 335.37 162.62 332.95 167.12 330.03 167.12 332.45" fill="#68e1fd"/><polygon points="167.12 337.28 162.62 340.2 162.62 337.79 167.12 334.86 167.12 337.28" fill="#68e1fd"/><polygon points="167.12 342.11 162.62 345.03 162.62 342.62 167.12 339.69 167.12 342.11" fill="#68e1fd"/><polygon points="167.12 346.94 162.62 349.87 162.62 347.45 167.12 344.53 167.12 346.94" fill="#68e1fd"/><polygon points="167.12 351.78 162.62 354.7 162.62 352.28 167.12 349.36 167.12 351.78" fill="#68e1fd"/><polygon points="167.12 356.61 162.62 359.53 162.62 357.12 167.12 354.19 167.12 356.61" fill="#68e1fd"/><polygon points="167.12 361.44 162.62 364.36 162.62 361.95 167.12 359.02 167.12 361.44" fill="#68e1fd"/><polygon points="167.12 366.27 162.62 369.2 162.62 366.78 167.12 363.86 167.12 366.27" fill="#68e1fd"/><polygon points="167.12 371.11 162.62 374.03 162.62 371.61 167.12 368.69 167.12 371.11" fill="#68e1fd"/><polygon points="167.12 375.94 162.62 378.86 162.62 376.44 167.12 373.52 167.12 375.94" fill="#68e1fd"/><polygon points="167.12 380.77 162.62 383.69 162.62 381.28 167.12 378.35 167.12 380.77" fill="#68e1fd"/><polygon points="167.12 385.6 162.62 388.53 162.62 386.11 167.12 383.19 167.12 385.6" fill="#68e1fd"/><polygon points="167.12 390.44 162.62 393.36 162.62 390.94 167.12 388.02 167.12 390.44" fill="#68e1fd"/><polygon points="167.12 395.27 162.62 398.19 162.62 395.77 167.12 392.85 167.12 395.27" fill="#68e1fd"/><polygon points="167.12 400.1 162.62 403.02 162.62 400.61 167.12 397.68 167.12 400.1" fill="#68e1fd"/><polygon points="167.12 404.93 162.62 407.86 162.62 405.44 167.12 402.52 167.12 404.93" fill="#68e1fd"/><polygon points="167.12 409.76 162.62 412.69 162.62 410.27 167.12 407.35 167.12 409.76" fill="#68e1fd"/><polygon points="167.12 414.6 162.62 417.52 162.62 415.1 167.12 412.18 167.12 414.6" fill="#68e1fd"/><polygon points="167.12 419.43 162.62 422.35 162.62 419.94 167.12 417.01 167.12 419.43" fill="#68e1fd"/><polygon points="167.12 424.26 162.62 427.19 162.62 424.77 167.12 421.85 167.12 424.26" fill="#68e1fd"/><polygon points="167.12 429.09 162.62 432.02 162.62 429.6 167.12 426.68 167.12 429.09" fill="#68e1fd"/><polygon points="167.12 433.93 162.62 436.85 162.62 434.43 167.12 431.51 167.12 433.93" fill="#68e1fd"/><rect x="355.25" y="330.9" width="35.9" height="0.97" opacity="0.58" fill="url(#linear-gradient-344)"/><rect x="355.25" y="335.99" width="35.9" height="0.97" opacity="0.58" fill="url(#linear-gradient-345)"/><rect x="355.25" y="341.08" width="35.9" height="0.97" opacity="0.58" fill="url(#linear-gradient-346)"/><rect x="355.25" y="346.17" width="35.9" height="0.97" opacity="0.58" fill="url(#linear-gradient-347)"/><rect x="355.25" y="351.26" width="35.9" height="0.97" opacity="0.58" fill="url(#linear-gradient-348)"/><rect x="355.25" y="356.35" width="35.9" height="0.97" opacity="0.58" fill="url(#linear-gradient-349)"/><rect x="355.25" y="361.44" width="35.9" height="0.97" opacity="0.58" fill="url(#linear-gradient-350)"/><rect x="355.25" y="366.53" width="35.9" height="0.97" opacity="0.58" fill="url(#linear-gradient-351)"/><rect x="496.92" y="323.43" width="59.14" height="37.69" fill="url(#linear-gradient-352)"/></g></svg>
          </el-col>
          <el-col class="hotel_box" :span="16">
            <el-row class="hotel_nav">
              <span>入住城市：</span>
              <span>北京</span>
              <el-divider direction="vertical"></el-divider>
              <span>上海</span>
              <el-divider direction="vertical"></el-divider>
              <span>广州</span>
              <el-divider direction="vertical"></el-divider>
              <span>深圳</span>
              <el-divider direction="vertical"></el-divider>
              <span>厦门</span>
              <el-divider direction="vertical"></el-divider>
              <span>杭州</span>
              <el-divider direction="vertical"></el-divider>
              <span>成都</span>
              <el-divider direction="vertical"></el-divider>
              <span>南京</span>
              <el-divider direction="vertical"></el-divider>
              <span>苏州</span>
            </el-row>
            <el-row style="padding: 5px;">
              <el-col :span="6" v-for="(item, i) in hotel_array" :key="i">
                <el-card :body-style="{ padding: '0px' }" shadow="hover" class="hotel_card">
                  <el-image
                    style="width: 100%; height: 115px"
                    :src=item.hotel_img
                    fit="fill"></el-image>
                  <div style="background: #dddddda8;">
                    <span class="hotel_card_title">{{ item.hotel_name }}</span>
                    <el-row style="margin: 5px;">
                      <el-col :span="14" :offset="5">
                        <span class="hotel_card_comment">
                          <svg t="1601019613389" class="icon hotel_card_icon" viewBox="0 0 1031 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3172" width="200" height="200"><path d="M890.092 0H133.908C55.138 0 0 63.015 0 133.908v527.754c0 70.892 63.015 133.907 133.908 133.907H535.63l204.8 212.677c7.877 7.877 15.754 15.754 31.507 15.754 7.877 0 23.631-7.877 31.508-15.754 15.754-15.754 15.754-47.261 0-63.015L590.77 732.554c-15.754-15.754-31.507-23.63-47.261-23.63h-409.6c-23.631 0-47.262-15.755-47.262-39.386v-535.63c0-23.631 15.754-47.262 47.262-47.262h764.061c23.631 0 47.262 23.63 47.262 47.262v527.754c0 23.63-15.754 47.261-47.262 47.261h-102.4c-23.63 0-47.261 23.63-47.261 47.262s15.754 47.261 47.261 47.261h102.4c70.893 0 133.908-63.015 133.908-133.908v-535.63C1024 63.015 960.985 0 890.092 0z" fill="#1296db" p-id="3173"></path></svg>
                          评论数：{{ item.hotel_comment }}条
                        </span>
                      </el-col>
                    </el-row>
                    <el-col :span="16">
                      <span class="hotel_card_price">￥ {{ item.hotel_price }}/人起</span>
                    </el-col>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-col>
          <el-col class="hotel_box hotel_filter" :span="4">
            <el-col class="hotel_filter_box" :span="24">
              <h5 class="hotel_filter_title">价位</h5>
              <ul class="hotel_filter_ul">
                <li class="hotel_filter_li">不限</li>
                <li class="hotel_filter_li">100元以下</li>
                <li class="hotel_filter_li">100-300元</li>
                <li class="hotel_filter_li">300-600元</li>
                <li class="hotel_filter_li">600-1500元</li>
                <li class="hotel_filter_li">1500元以上</li>
              </ul>
            </el-col>
            <el-col class="hotel_filter_box" :span="24">
              <h5 class="hotel_filter_title">商圈</h5>
              <ul class="hotel_filter_ul">
                <li class="hotel_filter_li">外滩</li>
                <li class="hotel_filter_li">人民广场</li>
                <li class="hotel_filter_li">迪士尼度假区</li>
                <li class="hotel_filter_li">徐家汇</li>
                <li class="hotel_filter_li">上海火车站</li>
                <li class="hotel_filter_li">浦东机场区域</li>
              </ul>
            </el-col>
            <el-col class="hotel_filter_box" :span="24">
              <h5 class="hotel_filter_title">品牌</h5>
              <ul class="hotel_filter_ul">
                <li class="hotel_filter_li">菲住</li>
                <li class="hotel_filter_li">OYO</li>
                <li class="hotel_filter_li">汉庭酒店</li>
                <li class="hotel_filter_li">海友酒店</li>
                <li class="hotel_filter_li">格林豪泰</li>
                <li class="hotel_filter_li">锦江之星</li>
              </ul>
            </el-col>
          </el-col>
        </el-row>
      </div>
      <div class="scroll_img" :style="{'background-image':'url('+background_4+')','background-position-y':positionY4+'px'}" ref="img4"></div>
      <div class="scroll_text" style="height: 110vh;background: #3c3c3c;">
        <div class="mod-home-iconNav">
          <ul class="mod-home-iconNav-ul">
            <li class="active" style=""><a href="#1">
              <svg t="1602068951653" class="icon icon_active" viewBox="0 0 1089 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4025" width="200" height="200"><path d="M847.954597 0.001976c13.542764-0.125049 21.583389 5.702216 24.384478 16.13127 0.90035 3.376312 0.587728 7.853052 0.587728 11.979656v20.983156c0 26.91046 4.276662 47.380917-20.007777 51.269929a20.795583 20.795583 0 0 1-12.50486-2.500972 21.108205 21.108205 0 0 1-11.079307-12.955036c-1.137942-3.751458-0.750292-9.128548-0.750291-13.8929V45.532173c0-9.766296-1.475574-25.009721 1.475573-32.212521a22.358691 22.358691 0 0 1 12.867502-12.129714l5.001944-1.175457z m-2.375924 353.762506c29.949141-0.312622 24.547041 26.622848 24.547042 55.271484 0 11.929637 1.563108 27.423159-3.101206 34.888561-3.838992 6.114877-9.678762 9.241092-18.632242 10.34152-4.47674 0.550214-9.016004-1.525593-11.667035-3.101206a21.408321 21.408321 0 0 1-9.466179-10.34152c-1.82571-4.45173-1.475574-11.129326-1.475574-17.44428v-24.884673c0-9.378645-1.438059-24.009332 1.325515-31.037064a22.083584 22.083584 0 0 1 12.717443-12.442336z m111.043162-42.516526a23.571662 23.571662 0 0 1 15.818649 5.314566l31.337181 30.149219c5.001944 4.076585 13.642803 11.70455 16.844047 17.294222 5.689712 10.003888 0.212583 21.833487-6.502528 26.597838-6.465013 4.601789-18.044514 5.339575-25.272323 0.90035-4.176623-2.576001-6.927693-6.752625-10.641636-9.753791L951.619891 356.377998c-5.152003-4.164119-11.729559-9.541209-14.480628-15.968707-5.139498-11.942142 2.788584-23.484128 10.941753-27.048014 2.576001-1.125437 5.589673-0.912855 8.565829-2.063302z m-218.634982-1.875729c14.693211-0.137553 28.2985 13.43022 21.570884 29.111315-2.751069 6.440003-9.328626 11.804588-14.480628 15.968707l-26.160169 25.009721c-4.351691 3.513866-7.502916 8.440781-12.704938 11.091812-7.502916 3.751458-17.994494 2.21336-23.759235-1.913244a21.258263 21.258263 0 0 1-4.576779-29.273879l8.865946-8.578334 9.753791-9.316121 22.92141-21.871001c2.763574-2.225865 4.814371-5.189517 7.978101-7.090256a24.434498 24.434498 0 0 1 7.090256-2.651031z m264.415277-102.139701h47.155829c14.880784 0 23.984323-0.725282 31.487239 6.802644 3.864002 3.901517 7.815538 11.566996 5.314566 19.807699s-8.940975 13.755347-18.182067 15.518532l-16.406377 0.150058h-27.510694c-11.366918 0-25.009721 1.250486-32.062462-3.11371-9.228587-5.589673-14.33057-19.382534-6.364974-30.286772a22.43372 22.43372 0 0 1 11.091811-7.840548l5.464624-1.037903z m-370.844146-2.651031h47.293383c14.718221 0 22.346186-1.062913 30.749452 5.614682a20.307894 20.307894 0 0 1 6.502528 21.133215c-2.425943 8.003111-8.753402 13.442725-17.444281 15.23092-5.089478 1.037903-11.829598 0.287612-17.431775 0.287612h-27.335626c-12.304783 0-25.672479 1.037903-32.962812-3.838992-8.615849-5.764741-12.792472-19.332514-5.327071-29.561491a22.508749 22.508749 0 0 1 10.941753-7.840547l5.001944-1.025399z m211.332144 609.249313h53.508299c10.191461 0 21.733448-0.850331 30.43683 1.025399 22.146108 4.776857 40.015554 14.630687 51.732609 29.861607a66.150713 66.150713 0 0 1 10.003888 18.169562c6.25243 17.606844 0.600233 35.776406-7.102761 47.305888-12.167229 18.244592-31.399705 29.786578-57.047174 34.588444-8.665868 1.625632-19.657641 0.712777-29.411432 0.737787 9.766296 28.348519-7.502916 56.271873-22.621293 67.838869-4.551769 3.501361-9.078529 7.115266-15.518532 8.753402-3.301283 0.825321-7.865557 0.43767-11.817093 0.43767H322.95053c-21.258263 0-44.142158 1.137942-61.786517-2.813593-26.822926-5.977323-49.169112-17.706883-59.110476-40.490739-4.601789-10.516588-7.140275-25.584945-3.101205-39.015165a72.015492 72.015492 0 0 1 7.828043-17.594339c10.991772-17.506805 28.548597-28.873723 50.544646-35.476289 5.727226-1.713166 11.917132-2.163341 18.332126-3.251264l15.218415-0.450175h26.160169c2.350914 0 13.755347 0.575224 14.780745-0.287612l0.737787-5.164507 2.225865-9.316122a92.43593 92.43593 0 0 1 14.193017-27.935858 78.943185 78.943185 0 0 1 44.342235-30.011666c9.803811-2.500972 23.521643-1.613127 35.613843-1.613127h62.661857c0.275107-10.441559 6.452508-20.733059 11.079306-27.198071 8.503305-11.867113 20.783078-20.382923 36.964368-24.547042 7.765518-1.988273 17.506805-1.763185 27.34813-1.763185H715.278026L455.176926 266.968245h-0.150059L163.025868 786.432658l-67.101082 119.421419c-6.915188 11.754569-10.429054 25.872557-26.160169 28.973762a22.671312 22.671312 0 0 1-11.529481-1.037903c-8.4908-3.326293-17.194183-13.155113-13.155114-25.860052 1.625632-5.152003 5.076973-9.766296 7.677985-14.193017l11.254374-20.395427 95.161989-169.190764-71.090132-0.737787c-11.504472-0.712777-23.984323 1.025399-33.988211-1.250486-15.681095-3.438837-29.5865-10.354025-38.139825-20.983156a79.005709 79.005709 0 0 1-12.854997-21.370807c-4.601789-11.792084-3.751458-30.349297 0.587729-41.528642C12.304783 596.446311 28.848713 582.603431 53.770901 577.038768c10.516588-2.325904 25.009721-1.050408 37.101921-1.025399v-0.150058c-6.440003-18.594728 1.813205-39.865496 9.603733-50.844763 8.903461-12.504861 21.570885-21.758457 38.577495-26.160169 13.167618-3.413827 32.162501-1.925749 48.181228-1.925748h88.396859L405.157483 266.655623l22.171118-39.46534c3.751458-6.452508 6.677596-14.605677 11.67954-20.007777 3.55138-3.751458 10.466568-8.428276 18.757291-7.090256 15.305949 2.500972 17.781912 13.117599 24.23442 24.246925l32.812754 61.623953 143.655838 269.804872 1.187962-1.050408 59.860768-69.014326c5.35208-6.702605 12.304783-16.556435 26.01011-14.042958 11.354413 2.075807 15.193406 9.766296 20.695544 17.581834L784.054759 514.814582l96.662573 138.191214 30.149218-29.699044c5.964819-5.964819 10.504083-12.192239 20.845603-13.8929 19.069912-3.13872 27.923354 21.358302 34.588444 32.074967l70.352346 116.295204 46.267984 76.704815c5.302061 8.678373 5.527148 21.258263-2.363418 27.648246a28.761179 28.761179 0 0 1-7.240315 4.576779c-6.002333 2.413438-14.84327 1.513088-19.65764-1.325515-6.465013-3.751458-9.41616-10.466568-13.292667-16.856552l-11.254375-18.619737-99.276088-164.488937-3.838992 3.851498-8.753403 8.565829-14.042958 13.755347c-7.015227 7.015227-11.879618 14.218026-24.221915 16.10626-5.614682 0.862835-11.254375-1.838215-14.343075-3.98905-4.464235-3.13872-7.052741-8.10315-10.203966-12.567385l-16.844048-24.084362-97.375349-139.091564-59.873273 68.876772 84.407809 158.81173c9.478684-0.112544 19.882728-0.612738 27.635742 1.325515 26.710382 6.652586 48.631403 25.709993 50.544647 56.90962z m-289.362474-15.968707l-5.477129 1.250486a20.007777 20.007777 0 0 0-12.11721 12.504861c-1.975768 6.452508 0.912855 11.967152 1.77569 17.894455 1.475574 10.078918-8.328237 18.669757-15.218415 20.833098-7.440392 2.325904-20.883117 1.037903-30.161724 1.037903h-61.473894c-15.756124 0-27.710771-1.513088-37.101922 5.164508-8.4908 6.039848-14.755735 15.881173-17.44428 27.648247-1.550603 6.802644 0.425165 13.392706 1.325515 19.207465 1.700661 10.866724-8.415771 19.345019-15.818649 21.58339-3.188739 0.962874-7.502916 0.737787-11.667035 0.737787h-53.35824c-8.865946 0-17.819426-0.300117-25.009721 1.488078a52.07024 52.07024 0 0 0-18.757291 8.56583c-5.914799 4.351691-16.506416 16.381367-10.341519 27.198071 8.903461 15.631076 33.463007 17.294222 58.085077 17.294223H845.328576c2.113321-2.776079 4.714332-5.001944 6.25243-8.440781l1.625632-5.752236c1.813205-9.678762-3.651419-17.669368-8.565829-21.433331-3.751458-2.876118-7.778023-4.676818-10.491578-8.578335-6.25243-8.853441-3.463846-21.820982 3.751458-27.510693 8.328237-6.577557 20.520476-5.314566 35.326231-5.314566h30.449336c5.514644 0 11.729559 0.475185 16.406377-0.600233a45.017498 45.017498 0 0 0 16.256318-7.240314c4.06408-2.888623 12.317288-9.44117 10.941753-17.294223-1.150447-6.527537-6.089867-10.816704-10.654141-14.042958a45.505188 45.505188 0 0 0-18.757291-7.840548l-26.260207-0.137553h-53.7709c-7.903072 0-18.894844 1.162952-25.860052-0.43767-9.341131-2.163341-15.731115-8.390761-17.444281-18.182067-1.250486-7.402877 2.913633-11.516977 4.139109-16.856553 2.500972-10.891734-5.214527-18.757291-12.11721-21.420826-5.764741-2.26338-15.606066-1.33802-23.346574-1.33802H553.527654zM153.809785 539.19906l-4.42672 0.750291a23.484128 23.484128 0 0 0-9.616238 5.464624 22.958924 22.958924 0 0 0-5.001944 6.952703c-3.964041 9.216082 0.087534 19.745175 5.76474 24.23442 4.226643 3.338798 8.678373 5.327071 11.529482 10.003888 5.477129 9.066024 2.000778 21.108205-4.576779 26.260207-7.190295 5.689712-15.330959 5.327071-28.235975 5.327071h-38.765068c-6.164896 0-13.955424-0.887845-19.357524 0.450175a24.246925 24.246925 0 0 0-9.453675 4.876896c-5.001944 3.901517-9.90385 12.329793-7.102761 21.570884 2.67604 8.753402 9.728782 14.218026 19.657641 15.818649l23.759235 0.150058 94.886882 0.887845 68.876772-122.835245zM843.802983 122.98728c52.758007-0.825321 89.884938 27.035509 105.541023 62.961973 10.979268 25.184789 11.767074 55.484066 0.600234 81.281594-12.392317 28.611121-36.401649 49.431714-67.701315 59.122981-7.828043 2.425943-16.081251 3.188739-25.284829 4.589283h-12.704938l-10.003888-0.750291c-8.303227-1.500583-16.093756-3.076196-23.058963-5.764741-31.337181-12.11721-52.632958-32.200016-64.737664-63.549702-4.764352-12.354802-8.165674-31.587278-5.001944-48.331286a116.445262 116.445262 0 0 1 5.327071-20.695544c11.829598-30.211743 33.925687-50.669695 64.299993-62.374245 6.440003-2.500972 13.580279-3.889012 20.983156-5.32707z m1.250486 42.266429l-6.652586 0.737786a74.47895 74.47895 0 0 0-11.967151 3.113711c-18.019504 7.027732-31.049569 19.295-38.139825 37.239474a70.990094 70.990094 0 0 0-3.101206 12.417327c-1.8007 9.39115 0.237592 20.345408 2.663536 27.198072 6.827654 19.307505 19.882728 31.549763 38.765068 38.877611 6.577557 2.65103 18.707271 5.552158 28.71116 3.901517 5.502139-0.937865 10.491578-1.563108 15.23092-3.101206a62.949468 62.949468 0 0 0 38.427436-34.413376 72.590716 72.590716 0 0 0 4.289168-14.180512c2.851108-13.392706-1.037903-27.685761-5.464625-36.364134-11.004277-21.53337-30.111704-35.563824-62.824419-35.47629z m156.08567-104.040441c15.318454-0.200078 28.923743 12.917521 22.321176 28.973762-2.626021 6.339964-10.829209 13.280162-15.968707 17.431776l-26.897955 25.709993c-3.388817 2.738564-5.83977 6.25243-9.753791 8.578335-6.71511 3.939031-17.681873 3.063691-23.646692-0.887845-8.378257-5.539653-13.242647-18.882339-5.914799-29.261374a55.884222 55.884222 0 0 1 10.34152-10.203966l10.203966-9.753792L982.006702 72.405119c3.001167-2.425943 5.214527-5.739731 8.578335-7.840548a26.147663 26.147663 0 0 1 6.640081-2.813594l3.851497-0.587728z m-305.281162-1.925748c6.790139-0.100039 11.479462 1.375535 15.380979 4.139109l39.452835 37.739669c3.501361 2.826098 7.402877 6.25243 9.753791 10.191461 5.83977 9.691267 1.250486 21.871001-5.614682 26.897955-6.364974 4.689323-17.819426 5.989828-25.422382 1.488079-4.339187-2.576001-7.127771-6.827654-10.941753-9.90385l-26.597838-25.484906c-4.601789-3.751458-11.917132-9.916354-14.33057-15.506027-5.001944-11.416938 1.250486-22.108594 8.853441-26.610343 2.838603-1.675651 6.002333-1.575612 9.466179-2.951147z" p-id="4026"></path></svg>
            </a></li>
            <li class="" style=""><a href="#2">
              <svg t="1602069010874" class="icon icon_active" viewBox="0 0 1241 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6202" width="200" height="200"><path d="M254.758788 505.173333m-147.704243 0a147.704242 147.704242 0 1 0 295.408485 0 147.704242 147.704242 0 1 0-295.408485 0Z" fill="#FFFFFF" p-id="6203"></path><path d="M254.758788 672.73697a167.873939 167.873939 0 1 1 0-335.747879 167.873939 167.873939 0 0 1 0 335.747879z m0-295.098182a127.534545 127.534545 0 1 0 0 255.069091 127.534545 127.534545 0 0 0 0-255.069091z" fill="#2D2D2D" p-id="6204"></path><path d="M475.694545 884.673939a220.935758 220.935758 0 0 0-441.871515 0 69.507879 69.507879 0 0 0 69.818182 69.507879h372.363636l-0.310303-69.507879z" fill="#DADBDB" p-id="6205"></path><path d="M475.694545 974.351515h-372.363636a89.987879 89.987879 0 0 1-89.987879-89.677576 241.105455 241.105455 0 0 1 482.210909 0v69.507879a20.169697 20.169697 0 0 1-19.859394 20.169697zM254.758788 682.666667a200.766061 200.766061 0 0 0-200.766061 200.76606 49.648485 49.648485 0 0 0 49.648485 49.338182h351.883636v-48.09697A200.766061 200.766061 0 0 0 254.758788 682.666667z" fill="#2D2D2D" p-id="6206"></path><path d="M482.210909 401.221818m-197.973333 0a197.973333 197.973333 0 1 0 395.946666 0 197.973333 197.973333 0 1 0-395.946666 0Z" fill="#FFFFFF" p-id="6207"></path><path d="M482.210909 620.606061a217.212121 217.212121 0 1 1 0-434.424243 217.212121 217.212121 0 0 1 0 434.424243z m0-395.636364a177.803636 177.803636 0 1 0 177.803636 177.493333 177.803636 177.803636 0 0 0-177.803636-178.734545v1.241212z" fill="#2D2D2D" p-id="6208"></path><path d="M778.24 910.118788a296.029091 296.029091 0 0 0-592.058182 0 93.090909 93.090909 0 0 0 93.090909 93.090909h405.255758a93.090909 93.090909 0 0 0 93.090909-93.090909h0.620606z" fill="#FFFFFF" p-id="6209"></path><path d="M684.528485 1024H279.272727a113.570909 113.570909 0 0 1-113.570909-113.570909c0-174.638545 141.560242-316.198788 316.198788-316.198788 174.638545 0 316.198788 141.560242 316.198788 316.198788A113.881212 113.881212 0 0 1 684.528485 1024z m-202.317576-389.740606a276.169697 276.169697 0 0 0-275.859394 275.859394A73.231515 73.231515 0 0 0 279.272727 983.350303h405.255758a73.541818 73.541818 0 0 0 73.541818-73.231515 276.169697 276.169697 0 0 0-275.859394-275.859394z" fill="#2D2D2D" p-id="6210"></path><path d="M1210.181818 99.917576l-11.170909 324.576969-122.259394 12.722425-111.398788-53.372122-152.979394-20.169696-31.961212 14.894545 4.03394-306.889697 67.025454-20.48 92.16 9.929697 47.786667 23.58303 53.992727 25.755152 54.613333-0.620606 59.578182-5.275152z" fill="#FFCB55" p-id="6211"></path><path d="M1210.181818 431.010909a20.169697 20.169697 0 0 1-19.549091-20.790303c0-4.033939 9.929697-328.300606 9.929697-328.300606h40.339394s-9.929697 327.059394-9.929697 328.610909a19.859394 19.859394 0 0 1-20.790303 20.48z" fill="#2D2D2D" p-id="6212"></path><path d="M1128.882424 136.533333A142.429091 142.429091 0 0 1 1086.060606 130.327273a445.284848 445.284848 0 0 1-68.266667-28.547879 389.740606 389.740606 0 0 0-64.853333-27.306667 273.37697 273.37697 0 0 0-98.676364-12.412121 240.174545 240.174545 0 0 0-62.060606 15.515152 19.238788 19.238788 0 0 1-19.238788 12.722424 20.169697 20.169697 0 0 1-19.54909-20.790303c0-35.684848 75.093333-45.304242 98.055757-47.476364a306.579394 306.579394 0 0 1 113.881212 13.032727c24.731152 8.316121 48.717576 18.680242 71.68 31.030303 19.952485 10.426182 40.711758 19.238788 62.060606 26.375758a116.053333 116.053333 0 0 0 107.985455-24.513939 20.169697 20.169697 0 0 1 28.547879 1.861818 20.48 20.48 0 0 1-1.861819 28.547879 158.254545 158.254545 0 0 1-104.882424 38.167272zM1119.26303 470.419394a155.151515 155.151515 0 0 1-42.821818-6.206061A460.8 460.8 0 0 1 1008.484848 434.424242a403.393939 403.393939 0 0 0-65.163636-27.306666 265.309091 265.309091 0 0 0-98.986667-11.481212 231.486061 231.486061 0 0 0-62.060606 15.204848 19.238788 19.238788 0 0 1-19.238787 12.722424 20.169697 20.169697 0 0 1-19.549091-20.790303c0-35.995152 75.403636-45.304242 98.055757-47.476363a312.475152 312.475152 0 0 1 113.881212 13.032727c24.731152 8.316121 48.717576 18.680242 71.68 31.030303 19.890424 10.550303 40.649697 19.393939 62.060606 26.375758a114.191515 114.191515 0 0 0 107.985455-24.51394 20.48 20.48 0 1 1 26.686061 31.030303 157.633939 157.633939 0 0 1-104.572122 38.167273z" fill="#2D2D2D" p-id="6213"></path><path d="M771.723636 785.066667h-40.339394s20.790303-710.283636 21.100606-713.69697a19.859394 19.859394 0 0 1 20.169697-19.549091 20.169697 20.169697 0 0 1 19.859394 20.169697l-20.790303 713.076364z" fill="#2D2D2D" p-id="6214"></path></svg>
            </a></li>
            <li class="" style=""><a href="#3">
              <svg t="1602069056269" class="icon icon_active" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7060" width="200" height="200"><path d="M 896 896 h 42.6667 v 42.6667 H 85.3333 v -42.6667 h 42.6667 V 170.731 A 42.6667 42.6667 0 0 1 170.603 128 h 469.461 C 663.595 128 682.667 147.243 682.667 170.731 V 896 h 170.667 V 426.667 h -128 v -42.6667 h 149.333 a 21.3333 21.3333 0 0 1 21.3333 21.3333 v 490.667 Z m -256 0 V 170.731 L 170.603 170.667 L 170.667 896 h 469.333 Z M 277.333 298.667 h 256 v 42.6667 H 277.333 v -42.6667 Z m 0 256 h 256 v 42.6667 H 277.333 v -42.6667 Z m 0 -128 h 256 v 42.6667 H 277.333 v -42.6667 Z m 0 256 h 256 v 42.6667 H 277.333 v -42.6667 Z" fill="#333333" p-id="7061"></path></svg>
            </a></li>
          </ul>
        </div>
        <el-row class="home_bottom">
          <el-col class="bottom_image" :span="8">
            <img src="https://picbed.qunarzz.com/230c19ff7827e754ceb90c1df30662c9.png">
          </el-col>
          <el-col :span="8" :offset="6" style="position: relative">
            <svg @mouseover="show2=true" @mouseleave="show2=false" xmlns="http://www.w3.org/2000/svg" height="50vh" viewBox="0 0 908.062 699.657">
              <g id="Group_19" data-name="Group 19" transform="translate(-169.938 -93)">
                <g id="Group_17" data-name="Group 17" transform="translate(97.619 160.674)">
                  <path id="Path_125" data-name="Path 125" d="M844.4,334.856c-2.19-17.165,4.67-34.834.592-51.639-3.137-12.981-12.43-23.819-15.484-36.823-4.487-19.273,5.777-39.066,18.876-53.864,9.009-10.2,20.315-19.456,33.793-21.309,8.322-1.184,16.875.645,24.558,4.037a62.311,62.311,0,0,1,33.5,36.8c1.776,5.268,2.8,10.779,4.984,15.887,3.759,8.8,10.655,15.9,14.946,24.464a46.418,46.418,0,0,1,1.557,37.533c-4.966,12.395-15.39,22.765-16.929,36.03-1.119,9.559,2.468,20.03-2.19,28.453-3.516,6.357-10.755,9.565-17.609,11.969-15.928,5.54-38.22,14.537-54.2,5.972C856.817,364.878,846.429,350.7,844.4,334.856Z" transform="translate(15.425 168.14)" fill="#e6e6e6"/>
                  <path id="Path_126" data-name="Path 126" d="M931,419.877s17.481-7.052,19.685-11.019,5.289-27.328,5.289-27.328" transform="translate(-26.427 90.318)" fill="none" stroke="#d0cde1" stroke-miterlimit="10" stroke-width="3"/>
                  <line id="Line_2" data-name="Line 2" y1="170.4" x2="0.533" transform="translate(904.348 458.826)" fill="none" stroke="#d0cde1" stroke-miterlimit="10" stroke-width="3"/>
                  <path id="Path_173" data-name="Path 173" d="M846.958,361.09c-2.54-19.911,5.417-40.406.687-59.9-3.639-15.057-14.419-27.629-17.961-42.713-5.2-22.356,6.7-45.316,21.9-62.481,10.45-11.83,23.564-22.569,39.2-24.718,9.654-1.373,19.575.748,28.487,4.683a72.279,72.279,0,0,1,38.862,42.686c2.06,6.111,3.248,12.5,5.781,18.428,4.36,10.21,12.359,18.449,17.337,28.377a53.843,53.843,0,0,1,1.806,43.537c-5.76,14.377-17.852,26.407-19.637,41.793-1.3,11.089,2.863,23.235-2.54,33-4.078,7.374-12.476,11.1-20.426,13.883-18.476,6.427-44.334,16.863-62.872,6.928C861.356,395.914,849.307,379.47,846.958,361.09Z" transform="translate(-74.443 85.754)" fill="#6c63ff"/>
                  <line id="Line_3" data-name="Line 3" y1="236.877" transform="translate(824.155 392.349)" fill="none" stroke="#333" stroke-miterlimit="10" stroke-width="3"/>
                  <path id="Path_174" data-name="Path 174" d="M931,441.264s27.231-10.986,30.664-17.165S969.9,381.53,969.9,381.53" transform="translate(-106.584 19.731)" fill="none" stroke="#333" stroke-miterlimit="10" stroke-width="3"/>
                </g>
                <g id="Group_18" data-name="Group 18" transform="translate(94.149 -64.901)">
                  <path id="Path_102" data-name="Path 102" d="M442.22,351" transform="translate(-13.561 28.063)" fill="none"/>
                  <rect id="Rectangle_50" data-name="Rectangle 50" width="386.018" height="696.763" rx="25" transform="translate(352.851 158.843) rotate(-0.14)" fill="#2f2e41"/>
                  <path id="Path_122" data-name="Path 122" d="M795.818,756.813a14.349,14.349,0,0,1-14.293,14.394l-329.839.8a14.349,14.349,0,0,1-14.369-14.319l-.226-96.917L435.83,138.2a14.349,14.349,0,0,1,14.293-14.395l68.986-.162a30.619,30.619,0,0,0,30.181,25.992l130.34-.313A30.63,30.63,0,0,0,709.8,123.183l70.064-.173a14.349,14.349,0,0,1,14.368,14.319l1.347,523.442Z" transform="translate(-68.979 58.714)" fill="#fff"/>
                  <path id="Path_123" data-name="Path 123" d="M796.987,719.062a14.529,14.529,0,0,1-14.343,14.7l-331,.816a14.525,14.525,0,0,1-14.419-14.62L437,621H796.75Z" transform="translate(-70.149 103.055)" fill="#e6e6e6"/>
                  <rect id="Rectangle_51" data-name="Rectangle 51" width="86.022" height="5.38" rx="2" transform="translate(499.666 184.429) rotate(-0.86)" fill="#fff"/>
                  <circle id="Ellipse_2" data-name="Ellipse 2" cx="3.231" cy="3.231" r="3.231" transform="translate(600.697 181.821) rotate(-0.86)" fill="#fff"/>
                  <g id="Group_11" data-name="Group 11" transform="translate(386.852 271.864)">
                    <rect id="Rectangle_52" data-name="Rectangle 52" width="67.941" height="67.941" rx="10.5" transform="translate(0 0)" fill="#e6e6e6"/>
                    <rect id="Rectangle_53" data-name="Rectangle 53" width="67.941" height="67.941" rx="10.5" transform="translate(83.865 0)" fill="#e6e6e6"/>
                    <rect id="Rectangle_54" data-name="Rectangle 54" width="67.941" height="67.941" rx="10.5" transform="translate(167.73 0)" fill="#e6e6e6"/>
                    <rect id="Rectangle_55" data-name="Rectangle 55" width="67.941" height="67.941" rx="10.5" transform="translate(251.595 0)" fill="#e6e6e6"/>
                  </g>
                  <rect id="Rectangle_56" data-name="Rectangle 56" width="67.917" height="67.917" rx="10.5" transform="translate(386.852 373.708)" fill="#6c63ff"/>
                  <rect id="Rectangle_57" data-name="Rectangle 57" width="67.917" height="67.917" rx="10.5" transform="translate(470.686 373.708)" fill="#e6e6e6"/>
                  <rect id="Rectangle_58" data-name="Rectangle 58" width="67.917" height="67.917" rx="10.5" transform="translate(554.521 373.708)" fill="#e6e6e6"/>
                  <rect id="Rectangle_59" data-name="Rectangle 59" width="67.917" height="67.917" rx="10.5" transform="translate(638.355 373.708)" fill="#e6e6e6"/>
                  <g id="Group_12" data-name="Group 12" transform="translate(386.852 475.687)">
                    <rect id="Rectangle_60" data-name="Rectangle 60" width="67.941" height="67.941" rx="10.5" fill="#e6e6e6"/>
                    <rect id="Rectangle_61" data-name="Rectangle 61" width="67.941" height="67.941" rx="10.5" transform="translate(83.865)" fill="#e6e6e6"/>
                    <rect id="Rectangle_62" data-name="Rectangle 62" width="67.941" height="67.941" rx="10.5" transform="translate(167.73)" fill="#e6e6e6"/>
                    <rect id="Rectangle_63" data-name="Rectangle 63" width="67.941" height="67.941" rx="10.5" transform="translate(251.595)" fill="#e6e6e6"/>
                  </g>
                  <g id="Group_13" data-name="Group 13" transform="translate(386.852 577.599)">
                    <rect id="Rectangle_64" data-name="Rectangle 64" width="67.941" height="67.941" rx="10.5" transform="translate(0 0)" fill="#e6e6e6"/>
                    <rect id="Rectangle_65" data-name="Rectangle 65" width="67.941" height="67.941" rx="10.5" transform="translate(83.865 0)" fill="#e6e6e6"/>
                    <rect id="Rectangle_66" data-name="Rectangle 66" width="67.941" height="67.941" rx="10.5" transform="translate(167.73 0)" fill="#e6e6e6"/>
                    <rect id="Rectangle_67" data-name="Rectangle 67" width="67.941" height="67.941" rx="10.5" transform="translate(251.595 0)" fill="#e6e6e6"/>
                  </g>
                  <g id="Group_15" data-name="Group 15" transform="translate(381.787 746.106)">
                    <rect id="Rectangle_72" data-name="Rectangle 72" width="70.564" height="70.564" rx="10.5" transform="translate(0 0)" fill="#6c63ff"/>
                    <rect id="Rectangle_73" data-name="Rectangle 73" width="70.564" height="70.564" rx="10.5" transform="translate(87.102 0)" fill="#6c63ff"/>
                    <rect id="Rectangle_74" data-name="Rectangle 74" width="70.564" height="70.564" rx="10.5" transform="translate(174.205 0)" fill="#6c63ff"/>
                    <rect id="Rectangle_75" data-name="Rectangle 75" width="70.564" height="70.564" rx="10.5" transform="translate(261.307 0)" fill="#6c63ff"/>
                  </g>
                </g>
                <g id="Group_16" data-name="Group 16" transform="translate(-124.287 259.103)">
                  <path id="Path_159" data-name="Path 159" d="M481.177,321.568v15.466l-18.427,27,18.427,11.994s8.19-31.554,12.606-35.268c0,0,6.935-4.948,10.709-11.753s1.887-30.32-16.389-9.284V322.2Z" transform="translate(107.537 -249.498)" fill="#fda57d"/>
                  <path id="Path_160" data-name="Path 160" d="M334.931,358.353l7.3-14.593a2.7,2.7,0,0,1,2.278-1.5l27.71-1.415a2.7,2.7,0,0,1,2.66,3.673L367.73,363a2.7,2.7,0,0,1-2.76,1.716l-27.851-2.479a2.7,2.7,0,0,1-2.188-3.884Z" transform="translate(110.232 -258.39)" fill="#fda57d"/>
                  <path id="Path_161" data-name="Path 161" d="M196.1,253.4l-4.707,13.8,48.335-1.736-18.567-11.14Z" transform="translate(251.113 -159.699)" fill="#edeef9"/>
                  <path id="Path_163" data-name="Path 163" d="M317.75,502.32a45.977,45.977,0,0,1-3.262,28.323c-6.8,14.232-6.8,29.106,1.857,46.408l2.479,89.725s3.091,42.083,0,50.744,1.214,50.132,1.214,50.132h34.656V739.8l11.753-82.3V615.41l21.076,43.939L363.435,760.838l31.554,13,39.6-113.863s-6.865-89.725-31.615-120.658l-4.657-33.732Z" transform="translate(110.141 -257.802)" fill="#3f3d56"/>
                  <path id="Path_164" data-name="Path 164" d="M319.4,789.583V766.69h35.268s2.479,9.284,18.567,11.14-7.427,13-7.427,13Z" transform="translate(110.177 -258.84)" fill="#3f3d56"/>
                  <path id="Path_165" data-name="Path 165" d="M357.36,775.38,363.5,753.3l30.537,9.7s3.336,9.373,18.34,15.475c10.218,4.156-.913,8.935-.913,8.935l-4.017,1.037Z" transform="translate(111.315 -254.889)" fill="#3f3d56"/>
                  <path id="Path_166" data-name="Path 166" d="M398.292,507.432,317.71,504.17a45.083,45.083,0,0,1,.612,14.613c3.683,8.671,11.592,6.3,11.592,6.3l70.506-2.168Z" transform="translate(110.17 -257.796)" opacity="0.1"/>
                  <path id="Path_167" data-name="Path 167" d="M334,360.68l-3.212,2.178a60.459,60.459,0,0,0-25.563,60.961h0s17.945,35.127,12.375,70.255,12.375,29.708,12.375,29.708L400.83,521.6l5.259-106.536s42.695,6.072,61.884-8.782L483.44,382.65l-23.515-16.229L451.9,377.9s-25.2-5.319-39.042-10.94a59.124,59.124,0,0,0-20.294-4.346Z" transform="translate(110.121 -258.318)" fill="#6c63ff"/>
                  <path id="Path_168" data-name="Path 168" d="M334.511,531.47s-4.336,21.659,20.424,57.549" transform="translate(110.23 -257.696)" opacity="0.1"/>
                  <path id="Path_169" data-name="Path 169" d="M406,414.976s29.7-9.9,42.695-9.9,10.829,5.61,10.829,5.61S438.829,419.924,406,414.976Z" transform="translate(110.492 -258.156)" opacity="0.1"/>
                  <path id="Path_170" data-name="Path 170" d="M372.516,342.1l-11.823,1.415c-.371,0-.713.512-.913,1.244,2.6,4.687,5.851,7.477,9.384,7.477a7.3,7.3,0,0,0,3.583-1l.9-5.47C373.951,343.947,373.349,342,372.516,342.1Z" transform="translate(110.324 -258.386)" opacity="0.1"/>
                  <circle id="Ellipse_3" data-name="Ellipse 3" cx="36.091" cy="36.091" r="36.091" transform="translate(438.499 20.425)" fill="#fda57d"/>
                  <path id="Path_171" data-name="Path 171" d="M395.1,294.729h0l-1.847,1.666a6.243,6.243,0,0,0,1.817,10.368h0s-16.169,16.169-18.417,19.17.371,10.9.371,10.9,7.146,13.158-30.45,10.147c0,0-24.81-5.259-22.18-38.72.261-3.352-5.259-12.044,11.281-16.54h0a22.763,22.763,0,0,1,17.433-19.772,63.1,63.1,0,0,1,19.571-1.716A24.569,24.569,0,0,1,395.1,294.729Z" transform="translate(110.192 -258.648)" opacity="0.1"/>
                  <path id="Path_172" data-name="Path 172" d="M395.884,292.764h0s3.834,1.184,4.015,13.76l-5.45-.371s-12.606,33.722-11.281,29.326c4.888-16.169-4.888-13.158-7.146-10.147s.371,10.9.371,10.9,7.146,13.158-30.45,10.147c0,0-24.81-5.259-22.18-38.72.261-3.352-5.259-12.044,11.281-16.54h0a22.763,22.763,0,0,1,17.4-19.782,63.1,63.1,0,0,1,19.571-1.716C384.744,270.694,395.884,280.038,395.884,292.764Z" transform="translate(110.19 -258.65)" fill="#72351c"/>
                </g>
                <path id="Path_142" data-name="Path 142" d="M987.06,737.56s-15.76-53.5,3-92.88a84.511,84.511,0,0,0,6.83-53,142.133,142.133,0,0,0-7.51-24.88" transform="translate(-779.879 52.35)" fill="none" stroke="#d0cde1" stroke-miterlimit="10" stroke-width="2"/>
                <path id="Path_143" data-name="Path 143" d="M1001,541.88c0,6.56-11.87,25.57-11.87,25.57s-11.87-19-11.87-25.57a11.875,11.875,0,0,1,23.75,0Z" transform="translate(-779.879 52.35)" fill="#e6e6e6"/>
                <path id="Path_144" data-name="Path 144" d="M1020.61,578.2c-3.56,5.5-23.86,15-23.86,15s.37-22.41,3.93-27.92a11.873,11.873,0,0,1,19.93,12.91Z" transform="translate(-778.879 52.35)" fill="#e6e6e6"/>
                <path id="Path_145" data-name="Path 145" d="M1019.76,640.27c-5.85,3-28.18.91-28.18.91s11.63-19.16,17.49-22.12a11.871,11.871,0,0,1,10.69,21.2Z" transform="translate(-779.879 52.35)" fill="#e6e6e6"/>
                <path id="Path_146" data-name="Path 146" d="M1008.53,687.09c-5.27,3.9-27.62,5.66-27.62,5.66s8.23-20.85,13.5-24.75a11.872,11.872,0,1,1,14.12,19.09Z" transform="translate(-779.879 52.35)" fill="#e6e6e6"/>
                <path id="Path_147" data-name="Path 147" d="M971.82,594.49c4.7,4.57,26.62,9.3,26.62,9.3s-5.37-21.77-10.07-26.33a11.87,11.87,0,0,0-16.55,17Z" transform="translate(-779.879 52.35)" fill="#e6e6e6"/>
                <path id="Path_148" data-name="Path 148" d="M959.39,649.41c5.85,3,28.18.91,28.18.91s-11.63-19.16-17.49-22.12a11.871,11.871,0,1,0-10.69,21.2Z" transform="translate(-779.879 52.35)" fill="#e6e6e6"/>
                <path id="Path_149" data-name="Path 149" d="M954.63,704.44c5.27,3.9,27.62,5.66,27.62,5.66s-8.23-20.85-13.5-24.75a11.872,11.872,0,1,0-14.12,19.09Z" transform="translate(-779.879 52.35)" fill="#e6e6e6"/>
                <rect id="Rectangle_22" data-name="Rectangle 22" width="907.576" height="1.627" transform="translate(170 790.34)" fill="#2f2e41"/>
              </g>
            </svg>
            <transition name="el-fade-in-linear">
              <div v-show="show2" class="QR_code">
                <img src="http://47.105.158.199/20200924224406.png">
              </div>
            </transition>
          </el-col>
        </el-row>
        <el-row style="margin-top: 15px;">
          <el-col :span="22" :offset="1">
            <ul class="bottom_news_ul">
              <li class="bottom_news_li" v-for="(item,i) in tableNews" :style="{'background-image': 'url('+item.new_img_url+')','background-position-x': item.new_x+'px'}">
                <h3 style="color: #ffba00;margin: 20px;">{{ item.new_title }}</h3>
                <p style="color: #999;padding: 10px;font-size: 80%;">{{ item.new_detail }}</p>
              </li>
            </ul>
          </el-col>
          <el-col class="friendly_link" :span="22" :offset="1">
            <p style="padding-left: 40px;">友情链接：</p>
            <el-col :span="20" :offset="2">
              <img class="friendly_company">
              <img class="friendly_company">
              <img class="friendly_company">
              <img class="friendly_company">
              <img class="friendly_company">
            </el-col>
          </el-col>
          <el-col class="about_us" :span="22" :offset="1">
            <p>
              <a href="">关于我们</a>
              <a href="">我们的故事</a>
              <a href="">联系我们</a>
              <a href="">旅游招聘</a>
              <a href="">意见反馈</a>
              <a href="">使用协议</a>
              <a href="">隐私政策</a>
              <a href="">交换链接</a>
              <a href="">帮助中心</a>
              <a href="">网站地图</a>
            </p>
            <p>
              <span>© 2020 xxxxxxxx.com 版权所有 xxx公司</span>
              <span> | </span>
              <span>旧故里投诉及紧急事件联系电话：xxx-xxx-xxxx</span>
            </p>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      // 当前用户
      nowUser: true,
      // 二维码
      show2: false,
      Y1: 0, // 背景1Y轴偏移量
      positionY1: 0, // 背景1Y轴偏移量
      background_1: 'https://img-u-2.51miz.com/preview/muban/00/00/50/51/M-505186-A3164035.jpg!/quality/90/unsharp/true/compress/true/fw/840', // 背景1的图片
      Y2: 0, // 背景2Y轴偏移量
      positionY2: 0, // 背景2Y轴偏移量
      background_2: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600927391882&di=1fc733525a3794fec7d8b58b79ec9d5e&imgtype=0&src=http%3A%2F%2Fp2.pccoo.cn%2Fbendi%2F20140917%2F2014091714071171219689.jpg', // 背景2的图片
      Y3: 0, // 背景3Y轴偏移量
      positionY3: 0, // 背景3Y轴偏移量
      background_3: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600928729995&di=0bf19d6b65b8152aee41be4f0c2dcd29&imgtype=0&src=http%3A%2F%2Ffsxf.fangdd.com%2Fxfwf%2FFq1MTNfD_D7TA6UkDp3knbWBuo7J.jpg', // 背景3的图片
      Y4: 0, // 背景4Y轴偏移量
      positionY4: 0, // 背景4Y轴偏移量
      background_4: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600880147358&di=eab06d038cc48b34ac199923c684248b&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161001%2Fc3bddea589d04741893f8abeccf8a1b5_th.jpeg', // 背景4的图片
      // 视差偏移率
      ratio: 0.1,
      // 汉堡按钮开关
      hamburger_btn : true,
      // 选项卡
      activeName: 'first',
      // 博客卡片
      currentDate: new Date(),
      // 景点推荐数据
      firstScenic: {
        scenic_name: 'A11: 2日激情浪漫游 (大峡谷玻璃桥+凤凰古城)',
        scenic_price: '88.00',
        scenic_img_url: 'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg'
      },
      secondScenic: {
        scenic_name: 'A11: 2日激情浪漫游 (大峡谷玻璃桥+凤凰古城)',
        scenic_price: '88.00',
        scenic_img_url: 'https://imgs.qunarzz.com/p/p19/1809/b9/2a3d362aabcbb02.jpg_256x160_28907832.jpg'
      },
      thirdScenic: {
        scenic_add: '北京',
        scenic_price: '88.00',
        scenic_img_url: 'https://img1.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_256x160_6ae804bb.jpg'
      },
      forthScenic: {
        scenic_add: '上海',
        scenic_price: '88.00',
        scenic_img_url: 'https://img1.qunarzz.com/sight/p0/1603/85/85c883189bf7293390.water.jpg_256x160_585de5b5.jpg'
      },
      // 活动展示
      activity_array: [
        {activity_time: '2020/10/1-2020/10/8',activity_details: '国庆中秋小长假进入倒计时，各类促文旅消费新举措纷至沓来，地方频频施展“抢客”大招，线上旅游企业大力促销蓄势待发。',activity_background: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600978669294&di=22984319db252bf7eb51388398285517&imgtype=0&src=http%3A%2F%2Fpic321.nipic.com%2Ffile%2F20200901%2F12086568_091856838083_2.jpg'},
        {activity_time: '2020/10/1-2020/10/8',activity_details: '国庆中秋小长假进入倒计时，各类促文旅消费新举措纷至沓来，地方频频施展“抢客”大招，线上旅游企业大力促销蓄势待发。',activity_background: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600978669294&di=22984319db252bf7eb51388398285517&imgtype=0&src=http%3A%2F%2Fpic321.nipic.com%2Ffile%2F20200901%2F12086568_091856838083_2.jpg'},
        {activity_time: '2020/10/1-2020/10/8',activity_details: '国庆中秋小长假进入倒计时，各类促文旅消费新举措纷至沓来，地方频频施展“抢客”大招，线上旅游企业大力促销蓄势待发。',activity_background: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600978669294&di=22984319db252bf7eb51388398285517&imgtype=0&src=http%3A%2F%2Fpic321.nipic.com%2Ffile%2F20200901%2F12086568_091856838083_2.jpg'},
      ],
      // 博客推荐
      blog_array: [
        {blog_name: '张家界冬季自驾游、自助游攻略',blog_read_num: '99',blog_time: '2020/9/25',blog_img: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/52a5a0f4a4cef3b92ea9dc73288dcc0e.jpg'},
        {blog_name: '云南的诗和远方在不一定在大理丽江 建水蒙自沙溪一样可以很文艺',blog_read_num: '239',blog_time: '2018/11/01',blog_img: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/52a5a0f4a4cef3b92ea9dc73288dcc0e.jpg'},
        {blog_name: '张家界冬季自驾游、自助游攻略',blog_read_num: '99',blog_time: '2020/9/25',blog_img: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/52a5a0f4a4cef3b92ea9dc73288dcc0e.jpg'},
        {blog_name: '张家界冬季自驾游、自助游攻略',blog_read_num: '99',blog_time: '2020/9/25',blog_img: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/52a5a0f4a4cef3b92ea9dc73288dcc0e.jpg'},
      ],
      // 旅游团推荐/手风琴效果
      tour_group_array: [{
        open: true,
        tour_group_add: '西藏·拉萨',
        tour_group_price: '2000.00',
        tour_group_details: '【尊享西藏】西藏七日游线路：拉萨+布达拉宫+八角街+巴松措+鲁朗林海+苯日神山+卡定沟+羊卓雍措',
        tour_group_image_url: 'http://47.105.158.199/3124/12-1Z113150930195.jpg'
      }, {
        open: false,
        tour_group_add: '西藏·拉萨',
        tour_group_price: '2000.00',
        tour_group_details: '【尊享西藏】西藏七日游线路：拉萨+布达拉宫+八角街+巴松措+鲁朗林海+苯日神山+卡定沟+羊卓雍措',
        tour_group_image_url: 'http://47.105.158.199/3124/12-1Z113150930195.jpg'
      }, {
        open: false,
        tour_group_add: '西藏·拉萨',
        tour_group_price: '2000.00',
        tour_group_details: '【尊享西藏】西藏七日游线路：拉萨+布达拉宫+八角街+巴松措+鲁朗林海+苯日神山+卡定沟+羊卓雍措',
        tour_group_image_url: 'http://47.105.158.199/3124/12-1Z113150930195.jpg'
      }, {
        open: false,
        tour_group_add: '西藏·拉萨',
        tour_group_price: '2000.00',
        tour_group_details: '【尊享西藏】西藏七日游线路：拉萨+布达拉宫+八角街+巴松措+鲁朗林海+苯日神山+卡定沟+羊卓雍措',
        tour_group_image_url: 'http://47.105.158.199/3124/12-1Z113150930195.jpg'
      }, {
        open: false,
        tour_group_add: '西藏·拉萨',
        tour_group_price: '2000.00',
        tour_group_details: '【尊享西藏】西藏七日游线路：拉萨+布达拉宫+八角街+巴松措+鲁朗林海+苯日神山+卡定沟+羊卓雍措',
        tour_group_image_url: 'http://47.105.158.199/3124/12-1Z113150930195.jpg'
      }],
      // 酒店推荐
      hotel_array: [
        {hotel_name: '全季上海延安路酒店',hotel_img: 'https://userimg.qunarzz.com/imgs/202005/11/C.HQaS1aY_u4tiXIOvv480.jpg',hotel_comment: '205',hotel_price: '168.00'},
        {hotel_name: '全季上海延安路酒店',hotel_img: 'https://userimg.qunarzz.com/imgs/202005/11/C.HQaS1aY_u4tiXIOvv480.jpg',hotel_comment: '205',hotel_price: '168.00'},
        {hotel_name: '全季上海延安路酒店',hotel_img: 'https://userimg.qunarzz.com/imgs/202005/11/C.HQaS1aY_u4tiXIOvv480.jpg',hotel_comment: '205',hotel_price: '168.00'},
        {hotel_name: '全季上海延安路酒店',hotel_img: 'https://userimg.qunarzz.com/imgs/202005/11/C.HQaS1aY_u4tiXIOvv480.jpg',hotel_comment: '205',hotel_price: '168.00'},
        {hotel_name: '全季上海延安路酒店',hotel_img: 'https://userimg.qunarzz.com/imgs/202005/11/C.HQaS1aY_u4tiXIOvv480.jpg',hotel_comment: '205',hotel_price: '168.00'},
        {hotel_name: '全季上海延安路酒店',hotel_img: 'https://userimg.qunarzz.com/imgs/202005/11/C.HQaS1aY_u4tiXIOvv480.jpg',hotel_comment: '205',hotel_price: '168.00'},
        {hotel_name: '全季上海延安路酒店',hotel_img: 'https://userimg.qunarzz.com/imgs/202005/11/C.HQaS1aY_u4tiXIOvv480.jpg',hotel_comment: '205',hotel_price: '168.00'},
        {hotel_name: '全季上海延安路酒店',hotel_img: 'https://userimg.qunarzz.com/imgs/202005/11/C.HQaS1aY_u4tiXIOvv480.jpg',hotel_comment: '205',hotel_price: '168.00'},
      ],
      // 页底
      tableNews: [{
        new_x: '70',
        new_title: '责任',
        new_detail: '我们提倡责任的旅行对组织和参与者都是如此',
        new_img_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABMCAYAAAAoVToVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOEE1MjVGNUYwQTAxMUU4OTIxMkU3MkQ5Mjc2OUI5MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozOEE1MjVGNkYwQTAxMUU4OTIxMkU3MkQ5Mjc2OUI5MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM4QTUyNUYzRjBBMDExRTg5MjEyRTcyRDkyNzY5QjkwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM4QTUyNUY0RjBBMDExRTg5MjEyRTcyRDkyNzY5QjkwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+d9125QAABtZJREFUeNrsnH9sFEUU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'
      },{
        new_x: '70',
        new_title: '线路',
        new_detail: '强大专业的策划和组织能力纯净美妙的旅游线路',
        new_img_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABBCAYAAACUyynLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1QUVGNUU3NkYwQTAxMUU4QUY5NEYyREEzNEQwNkNCOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1QUVGNUU3N0YwQTAxMUU4QUY5NEYyREEzNEQwNkNCOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVBRUY1RTc0RjBBMDExRThBRjk0RjJEQTM0RDA2Q0I5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVBRUY1RTc1RjBBMDExRThBRjk0RjJEQTM0RDA2Q0I5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+v1AK+QAAEWhJREFUeNrkXHl4FEUW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'
      },{
        new_x: '73',
        new_title: '服务',
        new_detail: '热忱的服务团队，敬业并富有人格魅力的领队导游',
        new_img_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABNCAYAAADjCemwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NjNFOUFFOEYwQTAxMUU4QUFFMkE2QkQ4RTNBN0U0NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NjNFOUFFOUYwQTAxMUU4QUFFMkE2QkQ4RTNBN0U0NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc2M0U5QUU2RjBBMDExRThBQUUyQTZCRDhFM0E3RTQ3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc2M0U5QUU3RjBBMDExRThBQUUyQTZCRDhFM0E3RTQ3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+mKsDxgAADd1JREFUeNrsXAt0FNUZ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'
      },{
        new_x: '60',
        new_title: '体验',
        new_detail: '边走边玩，一路行摄，团队建设，气氛活跃',
        new_img_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABNCAYAAADjCemwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4RDM3MzI4QUYwQTAxMUU4OEVDQ0U3MkQxRUNGODkzMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RDM3MzI4QkYwQTAxMUU4OEVDQ0U3MkQxRUNGODkzMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhEMzczMjg4RjBBMDExRTg4RUNDRTcyRDFFQ0Y4OTMzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhEMzczMjg5RjBBMDExRTg4RUNDRTcyRDFFQ0Y4OTMzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ToWTSAAACNRJREFUeNrsXAuwVVMY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'
      },{
        new_x: '60',
        new_title: '生态',
        new_detail: '珍惜环境，尊重风俗，注重环保，绿色旅行',
        new_img_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABNCAYAAADjCemwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBM0M3QzI3MUYwQTAxMUU4QTM5Rjk5QTU1NEE1OEYzRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBM0M3QzI3MkYwQTAxMUU4QTM5Rjk5QTU1NEE1OEYzRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEzQzdDMjZGRjBBMDExRThBMzlGOTlBNTU0QTU4RjNFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEzQzdDMjcwRjBBMDExRThBMzlGOTlBNTU0QTU4RjNFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6X/ItAAADK9JREFUeNrsXAmQFNUZ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'
      },{
        new_x: '60',
        new_title: '分享',
        new_detail: '一次活动大量照片游记分享领队负责集体照',
        new_img_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABNCAYAAADjCemwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMEE2NTVCOUYwQTAxMUU4ODc4NEE5RjkwNTZEOTdENiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMEE2NTVCQUYwQTAxMUU4ODc4NEE5RjkwNTZEOTdENiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwQTY1NUI3RjBBMDExRTg4Nzg0QTlGOTA1NkQ5N0Q2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwQTY1NUI4RjBBMDExRTg4Nzg0QTlGOTA1NkQ5N0Q2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Lk622gAACrpJREFUeNrsXH+UVUUd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'
      }]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll) // 创建滚动监听，页面滚动回调handleScroll方法
    let img1 = this.$refs.img1
    let img2 = this.$refs.img2
    let img3 = this.$refs.img3
    let img4 = this.$refs.img4
    this.Y1 = img1.offsetTop * this.ratio
    this.Y2 = img2.offsetTop * this.ratio
    this.Y3 = img3.offsetTop * this.ratio
    this.Y4 = img4.offsetTop * this.ratio

    // this.searchBox=this.$refs.search_box.offsetWidth
  },
  mounted:function(){
    // 进入页面即需要触发的函数
    this.getNowUser();
  },
  methods: {
    getNowUser: function (){
      if(localStorage.getItem('nowUser')!=null){
        this.nowUser = true;
      }
    },
    /**
     * 背景视差偏移计算
     * */
    handleScroll: function () {
      // window.pageYOffset  会返回文档当前沿垂直轴（即向上或向下）滚动的像素数
      // document.documentElement.scrollTop 获取滚动条位置
      // document.body.scrollTop 网页被卷去的高度
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.positionY1 = this.Y1 - scrollTop * this.ratio // 原始高度-滚动距离*视差系数
      this.positionY2 = this.Y2 - scrollTop * this.ratio // 原始高度-滚动距离*视差系数
      this.positionY3 = this.Y3 - scrollTop * this.ratio // 原始高度-滚动距离*视差系数
      this.positionY4 = this.Y4 - scrollTop * this.ratio // 原始高度-滚动距离*视差系数
    },
    openHamburger:function () {
      this.hamburger_btn = false
    },
    closeHamburger:function () {
      this.hamburger_btn = true
    },
    //  鼠标移入移出
    enter: function (open_i) {
      for(var i=0;i<this.tour_group_array.length;i++){
        this.tour_group_array[i].open = false
      }
      this.tour_group_array[open_i].open = true
    }
  },
  components: {},
}
</script>

<style>
  /*视差滚动*/
  .el-main{
    padding: 0px;
  }
  .web_name{
    font-size: 120%;
    font-weight: 600;
  }
  .scroll_text{
    height: 100vh;
    background: rgb(221, 221, 221);
  }
  .scroll_img{
     height: 100vh;
     background-size: 100%;
     background-attachment: fixed;
     background-repeat: no-repeat;
     background-position: center center;
   }
  /*搜索框*/
  .search_box{
    width: 40%;
    height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-items: center;
    border-radius: 50%;
    box-shadow: 1px 2px 10px #a3a7a5;
    background-color: rgba(0,0,0,0.3);
    transform: translateY(-50%) translateX(-50%);
  }
  .search_btn{
    width: 40px;
    height: 40px;
    float: right;
    padding: 5px;
    cursor: pointer;
    border-radius: 50%;
    margin-right: -20px;
    background-color: #ececec;
  }
  .search_title{
    color: #fff;
    font-size: 220%;
  }
  .search_text{
    color: #fff;
    font-size: 120%;
  }
  .search_keyword{
    width: 60%;
    margin: 5px;
    height: 30px;
    margin-left: 30px;
    padding-left: 30px;
    border: 2px solid #d0cfcf;
    background-color: rgba(0,0,0,0.3);
  }
  /*导航栏*/
  .menu_box{
    width: 100%;
    position: absolute;
    top: 0;
    margin-top: 30px;
  }
  .menu{
    top: 100vh;
    left: 100vw;
    width: 200vw;
    height: 200vh;
    position: fixed;
    z-index: 5;
    color: white;
    align-items: center;
    justify-items: center;
    border-radius: 50%;
    background-color: black;
    transform: matrix(1, 0, 0, 1, 0, 0);
    transition: all 6s cubic-bezier(1, -0.28, 0.84, 1.41);
  }
  /*汉堡按钮及开关效果*/
  .open{
    animation: close 0.6s;
    animation-fill-mode: forwards;
    animation-timing-function:linear;
  }
  .close{
    animation: open 0.6s;
    animation-fill-mode: forwards;
    animation-timing-function:linear;
  }
  @keyframes open{
     0%{
       top: 100vh;
       left: 100vw;
       border-radius: 50%;
     }
     10%{
       top: 90vh;
       left: 90vw;
       border-radius: 50%;
     }
     20%{
       top: 80vh;
       left: 80vw;
       border-radius: 50%;
     }
     30%{
       top: 70vh;
       left: 70vw;
       border-radius: 50%;
     }
     40%{
       top: 60vh;
       left: 60vw;
       border-radius: 50%;
     }
     50%{
       top: 50vh;
       left: 50vw;
       border-radius: 50%;
     }
     60%{
       top: 40vh;
       left: 40vw;
       border-radius: 50%;
     }
     75%{
       top: 25vh;
       left: 25vw;
       width: 200vw;
       height: 200vh;
       border-radius: 50%;
     }
     90%{
       top: 10vh;
       left: 10vw;
       width: 100vw;
       height: 100vh;
     }
     100%{
       top: 0;
       left: 0;
       width: 100vw;
       height: 100vh;
       border-radius: 0;
     }
   }
  @keyframes close{
    0%{
      top: 0;
      left: 0;
      border-radius: 50%;
    }
    10%{
      top: 10vh;
      left: 10vw;
      border-radius: 50%;
    }
    20%{
      top: 20vh;
      left: 20vw;
      border-radius: 50%;
    }
    30%{
      top: 30vh;
      left: 30vw;
      border-radius: 50%;
    }
    40%{
      top: 40vh;
      left: 40vw;
      border-radius: 50%;
    }
    50%{
      top: 50vh;
      left: 50vw;
      border-radius: 50%;
    }
    60%{
      top: 60vh;
      left: 60vw;
      border-radius: 50%;
    }
    75%{
      top: 75vh;
      left: 75vw;
      width: 100vw;
      height: 100vh;
      border-radius: 50%;
    }
    90%{
      top: 90vh;
      left: 90vw;
      width: 100vw;
      height: 100vh;
    }
    100%{
      top: 100vh;
      left: 100vw;
      width: 200vw;
      height: 200vh;
      border-radius: 50%;
    }
  }
  .open_btn{
    cursor: pointer;
  }
  .close_btn{
    cursor: pointer;
    margin-right: 20px;
  }
  .enroll_box{
    color: #fff;
    display: flex;
    align-items: center;
  }
  .enroll_btn{
    width: 70%;
    height: 40px;
  }
  /*热门推荐*/
  .recommend_title{
    color: #999;
    float: left;
    font-size: 120%;
    line-height: 45px;
  }
  .recommend_more{
    color: #999;
    float: right;
    cursor: pointer;
    font-size: 90%;
    height: 50px;
    line-height: 60px;
    vertical-align: bottom;
  }
  .recommend_item{
    height: 300px;
    position: relative;
    overflow: hidden;
    background-color: #fff;
  }
  .recommend_menu{
    height: 550px;
    border-top: 3px solid #ff9419;
    background: #fff no-repeat center 410px url("https://www.gootoai.com/skin/pc/static/images/bb_1.png");
  }
  .recommend_blog{
    margin: 1%;
    width: 76%;
    height: 200px;
    margin-top: 0px;
  }
  .recommend_medium{
    width: 100%;
    height: 100%;
  }
  .recommend_center{
    width: 160px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -80px;
    color: #fff;
    padding: 10px;
    font-size: 80%;
    border: 1px dashed #c1bebd;
    transform: scaleX(0) rotateX(0deg);
    background: rgba(140, 140, 140, 0.3);
  }
  .recommend_propaganda{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .recommend_out_box{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: none;
    background: rgba(0,0,0,0.6);
  }
  .recommend_propaganda:hover .recommend_out_box{
    display: block;
  }
  .recommend_out_box:hover .recommend_center{
    animation: show 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function:linear;
  }
  @keyframes show{
    0%{
      transform: scaleX(0) rotateX(0deg);
    }
    50%{
      transform: scaleX(0.5) rotateX(90deg);
    }
    100%{
      transform: scaleX(1) rotateX(0deg);
    }
  }
  .recommend_menu_box{
    margin: 0px 10px;
  }
  .recommend_menu_box h3{
    height: 20px;
    margin: 10px;
    line-height: 40px;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    color: rgb(51, 51, 51);
  }
  .recommend_menu_box ul{
    padding: 0;
    list-style: none;
  }
  .recommend_menu_box li{
    width: 30%;
    height: 15px;
    margin: 7px 0px;
    float: left;
    font-size: 80%;
    color: #505050;
    cursor: pointer;
  }
  .recommend_img{
    width: 100%;
    height: 100%;
  }
  .recommend_first{
    height: 100%;
    padding-right: 10px;
    cursor: pointer;
    position: relative;
    background-color: #ddd;
  }
  .recommend_first_box{
    width: 97.6%;
    position: absolute;
    bottom: 0;
    color: #fff;
    background: rgba(0,0,0,0.7);
  }
  .recommend_detail{
    width: 90%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .recommend_price{
    float: left;
    margin: 0 20px;
    color: #ff8a00;
  }
  .recommend_second{
    height: 65%;
    padding-bottom: 10px;
    cursor: pointer;
    position: relative;
    background-color: #ddd;
  }
  .recommend_second_box{
    width: 100%;
    position: absolute;
    bottom: 10px;
    color: #fff;
    background: rgba(0,0,0,0.6);
  }
  .recommend_third{
    height: 35%;
    cursor: pointer;
    position: relative;
    padding: 0 5px;
    background-color: #ddd;
  }
  .recommend_third_box{
    width: 85px;
    height: 30px;
    padding: 30px 5px;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    text-align: center;
    margin: -44px 0 0 -49px;
    background: rgba(0, 0, 0, 0.5);
  }
  .recommend_third_title{
    margin: 0;
    height: auto;
    text-align: center;
    font: 700 18px/1.2 "Microsoft yahei";
    color: #fff;
    margin-bottom: 3px;
  }
  .recommend_third_price{
    color: #ff8a00;
    font-size: 88%;
    margin-top: 3px;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
  }
  .recommend_blog{
    background-color: #ddd;
  }
  .recommend_blog_title{
    width: 90%;
    margin: 0 auto;
    color: #B3C0D1;
    font-size: 90%;
    display: inherit;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .recommend_blog_read{
    color: #ff8a00;
    font-size: 110%;
  }
  .recommend_blog_time{
    color: #B3C0D1;
    font-size: 90%;
  }
  /*手风琴*/
  .accordion__box{
    margin-top: 20px;
  }
  .accordion__ul{
    width: 90vw;
    height: 320px;
    padding: 11px;
  }
  .accordion__li{
    width: 12%;
    height: 100%;
    position: relative;
    overflow: hidden;
    transition: 1s;
  }
  .accordion_img{
    width: 44vw;
    height: 100%;
  }
  .accordion_img_box{
    height: 100%;
    position: relative;
    z-index: 10;
  }
  .accordion_info{
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .accordion_center{
    display: inline-block;
    font-size: 23px;
    color: #fff;
    width: 150px;
    text-align: center;
    height: 75px;
    background-color: rgba(0,0,0,.5);
    padding-top: 5px;
    margin-top: 80px;
    font-weight: 400;
    position: relative;
    z-index: 10;
  }
  .accordion_item_1{
    height: 30px;
    font-size: 18px;
    line-height: 30px;
    padding-top: 6px;
    padding-bottom: 5px;
  }
  .accordion_divider{
    width: 80%;
    margin: 5px auto;
    margin-top: 30px;
    position: relative;
    z-index: 10;
  }
  .accordion_item_2{
    font-size: 16px;
  }
  .accordion_detail{
    bottom: 0;
    color: #fff;
    text-align: left;
    position: absolute;
    z-index: 10;
    padding-bottom: 5px;
    box-shadow: 0px -15px 14px #525252 inset;
  }
  .accordion_mini_title{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    color: #fff;
    font-size: 18px;
    z-index: 10;
    background: rgba(0,0,0,0.4);
  }
  .show{
    display: block;
  }
  .accordion_hover{
    width: 48%;
  }
  .hidden{
    display: none;
  }
  .accordion_leave{
    width: 13%;
  }
  /*酒店推荐*/
  .hotel_menu{
    height: 533px;
    margin-top: 40px;
    position: relative;
  }
  .hotel_box{
    height: 533px;
    margin-top: 40px;
    background: #fff;
  }
  .hotel_layer{
    position: absolute;
    bottom: 0px;
    left: -40px;
    height: 100px;
  }
  .hotel_nav{
    margin: 20px;
    height: 20px;
    padding-left: 16px;
    text-align: left;
    border-left: 4px solid #ff9419;
  }
  .hotel_filter{
    height: 100%;
    margin-left: 5px;
    background-color: #ddd;
  }
  .hotel_filter_box{
    height: 30%;
    background: #fff;
    margin-bottom: 10px;
    padding-bottom: 15px;
  }
  .hotel_filter_title{
    color: #e90;
    margin: 10px;
    font-size: 16px;
    text-align: left;
    padding-top: 10px;
    border-top: 6px solid #ffc900;
  }
  .hotel_filter_ul{
    list-style: none;
    padding-left: 12px;
  }
  .hotel_filter_li{
    float: left;
    width: 50%;
    height: 28px;
    color: #B3C0D1;
    font-size: 85%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    margin-top: 3px;
  }
  .hotel_card{
    margin: 5px;
    cursor: pointer;
  }
  .hotel_card_title{
    width: 90%;
    color: #404040;
    margin: 0 auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .hotel_card_price{
    color: #ff9419;
    font-size: 110%;
    margin-top: 20px;
  }
  .hotel_card_comment{
    font-size: 90%;
  }
  .hotel_card_icon{
    width: 20px;
    height: 20px;
  }
  /*宣传广告*/
  .propaganda_title{
    color: #585757;
    font-size: 110%;
    font-weight: 500;
    text-align: left;
  }
  .propaganda img{
    cursor: pointer;
  }
  /*底部过渡*/
  .home_bottom{
    width: 100%;
    height: 35vh;
    display: flex;
    flex-wrap: wrap-reverse;
    box-shadow: 0px -40px 50px #000000f2;
    background: linear-gradient(90deg,#152d8b 19%,#00c5c3 58%,#59dc94 100%);
  }
  .bottom_image{
    height: 100%;
    padding: 30px;
    vertical-align: bottom;
  }
  .bottom_news_ul{
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    border-bottom: 1px #575a5b solid;
  }
  .bottom_news_li{
    border: 0;
    padding-top: 80px;
    vertical-align: baseline;
    background-repeat: no-repeat;
    background-position: 60px 20px;
  }
  .friendly_link{
    padding: 10px 0;
    text-align: left;
    border-bottom: 1px #575a5b solid;
  }
  .friendly_company{
    margin: 5px;
    width: 110px;
    height: 40px;
    border: 1px solid #fff;
  }
  .about_us{
    padding: 30px 0;
  }
  .about_us *,.friendly_link *{
    font-size: 90%;
    color: rgb(153, 153, 153);
  }
  .QR_code{
    position: absolute;
    top: -10%;
    right: -10%;
  }
  /*消息特效*/
  .QR_code{
    border-radius: 3px;
    background-color: #FFFFFF;
    border: 1px solid #B3C0D1;
  }
  .QR_code:before{
    box-sizing: content-box;
    width: 0px;
    height: 0px;
    position: absolute;
    top: 85%;
    right: 100%;
    padding:0;
    border-right: 8px solid #FFFFFF;
    border-top:8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left:8px solid transparent;
    display: block;
    content:'';
    z-index: 12;
  }
  .QR_code:after{
    box-sizing: content-box;
    width: 0px;
    height: 0px;
    position: absolute;
    top: 85%;
    right: 100%;
    padding:0;
    border-right: 9px solid #B3C0D1;
    border-top:9px solid transparent;
    border-bottom:9px solid transparent;
    border-left:9px solid transparent;
    display: block;
    content:'';
    z-index:10
  }
  .mod-home-iconNav{
    width: 50px;
    height: 240px;
    position: fixed;
    top: 25%;
    right: 10px;
  }
  .mod-home-iconNav-ul{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    list-style: none;
    font-size: 14px;
    float: left;
    padding-top: 50px;
  }
  .mod-home-iconNav-ul li{
    height: 20%;
    line-height: 20%;
  }
  .icon_active{
    width: 20px;
    height: 20px;
  }
</style>
