<template>
  <el-container>
    <el-header style="padding: 0;height: 220px;">
      <publicZ></publicZ>
    </el-header>
    <el-main style="background: #ddd;padding-bottom: 120px;">
      <el-row>
        <el-col :span="22" :offset="1">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>主页</el-breadcrumb-item>
            <el-breadcrumb-item>世界探索</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col class="search_menu" :span="22" :offset="1">
          <el-tabs type="border-card" v-model="activeName">
            <el-tab-pane label="景点" name="first">
              <el-row class="search_line">
                <el-col :span="2">
                  <span>行程日期：</span>
                </el-col>
                <el-col :span="22">
                  <span class="search_choose">全部</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">1-3天</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">4-6天</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">7-9天</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">10天以上</span>
                </el-col>
              </el-row>
              <el-row class="search_line">
                <el-col :span="2">
                  <span>出行费用：</span>
                </el-col>
                <el-col :span="22">
                  <span class="search_choose">全部</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">500元以下</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">501-1000元</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">1001-2000元</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">2001-5000元</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">5000元以上</span>
                </el-col>
              </el-row>
              <el-row class="search_line">
                <el-col :span="2">
                  <span>热门主题：</span>
                </el-col>
                <el-col :span="22">
                  <span class="search_choose">全部</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">自由行</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">自驾游</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">亲子游</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">户外游</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">摄影游</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">跟团游</span>
                </el-col>
              </el-row>
              <el-row class="search_line">
                <el-col :span="2">
                  <span>热门地区：</span>
                </el-col>
                <el-col :span="22">
                  <span class="search_choose">全部</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">重庆</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">北京</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">甘肃</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">广州</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">青岛</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">内蒙古</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">安徽</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">西藏</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">湖北</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">江西</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">四川</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">新疆</span>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="酒店" name="third">
              <el-row class="search_line">
                <el-col :span="2">
                  <span>酒店星级：</span>
                </el-col>
                <el-col :span="22">
                  <span class="search_choose">全部</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">二星/二钻</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">三星/三钻</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">四星/四钻</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">五星/五钻</span>
                </el-col>
              </el-row>
              <el-row class="search_line">
                <el-col :span="2">
                  <span>出行费用：</span>
                </el-col>
                <el-col :span="22">
                  <span class="search_choose">全部</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">500元以下</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">501-1000元</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">1001-2000元</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">2001-5000元</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">5000元以上</span>
                </el-col>
              </el-row>
              <el-row class="search_line">
                <el-col :span="2">
                  <span>入住时间：</span>
                </el-col>
                <el-col :span="12" :offset="1">
                  <el-date-picker
                    v-model="value2"
                    type="datetime"
                    placeholder="选择日期时间"
                    align="right"
                    :picker-options="pickerOptions">
                  </el-date-picker>
                </el-col>
              </el-row>
              <el-row class="search_line">
                <el-col :span="2">
                  <span>热门地区：</span>
                </el-col>
                <el-col :span="22">
                  <span class="search_choose">全部</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">重庆</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">北京</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">甘肃</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">广州</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">青岛</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">内蒙古</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">安徽</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">西藏</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">湖北</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">江西</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">四川</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="search_choose">新疆</span>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-row>
          <el-col :span="16" :offset="1" style="margin-top: 20px;">
            <el-tabs type="border-card" v-model="activeName" style="border-top: 3px solid #0077aa;">
              <el-tab-pane label="xxx个产品符合条件" name="first">
                <ul class="search_sort_ul">
                  <li class="search_sort_li">
                    <span>综合</span>
                  </li>
                  <li class="search_sort_li">
                    <span>销量</span>
                  </li>
                  <li class="search_sort_li">
                    <span>价格</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-divider content-position="right">搜索结果</el-divider>
              <el-col :span="24">
                <el-col :span="24">
                  <el-col class="result_item" :span="24" v-for="(item,i) in 5" :key="i">
                    <el-col :span="10" style="height: 100%;position: relative">
                      <span class="result_text"> 四川 | 1个景点 </span>
                      <img class="result_img" src="https://cdn.gootoai.com/files/5uimg/line/sichuan/200525/12-2005251RU9C3.png">
                    </el-col>
                    <el-col :span="14" style="height: 100%;">
                      <el-col :span="24" style="height: 80%;">
                        <h3 class="result_title">观千年世界文化遗产都江堰，逗国宝大熊猫，体验正真的川菜精粹。</h3>
                      </el-col>
                      <el-col class="result_info" :span="24" style="position: relative;">
                        <el-col :span="16">
                          <el-col :span="12">
                            <svg t="1601114482508" class="icon result_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3307" width="200" height="200"><path d="M784.225352 1013.183099c14.422535 0 25.239437-14.422535 28.845071-28.845071V973.521127v-21.633803c0-180.28169-100.957746-338.929577-252.394367-403.830986L542.647887 540.84507l14.422536-10.816901c72.112676-54.084507 118.985915-144.225352 118.985915-237.971831 0-158.647887-118.985915-284.84507-263.211268-284.84507S146.028169 133.408451 146.028169 292.056338c0 97.352113 43.267606 183.887324 118.985916 237.971831l14.422535 10.816901-18.028169 7.211268c-155.042254 64.901408-252.394366 223.549296-252.394366 403.830986V984.338028c0 18.028169 10.816901 32.450704 28.84507 32.450704 14.422535 0 731.943662-3.605634 746.366197-3.605633m-68.507042-443.492958c68.507042 7.211268 133.408451 43.267606 176.676056 100.957746 43.267606 57.690141 68.507042 129.802817 68.507042 209.126761 0 18.028169 14.422535 32.450704 28.845071 32.450704s28.84507-14.422535 28.84507-28.84507c0-147.830986-82.929577-281.239437-212.732394-335.323944l-18.028169-7.211268 14.422535-10.816901C867.15493 479.549296 903.211268 407.43662 903.211268 328.112676c0-111.774648-68.507042-205.521127-165.859155-230.760563h-3.605634c-14.422535 0-28.84507 14.422535-28.845071 32.450704 0 14.422535 10.816901 28.84507 25.239437 32.450704 0 0 3.605634 0 7.211268 3.605634 64.901408 25.239437 108.169014 90.140845 108.169014 162.253521 0 82.929577-54.084507 151.43662-129.802817 169.464789h-3.605634c-18.028169 0-32.450704 18.028169-32.450704 36.056338s14.422535 32.450704 36.056338 36.056338" fill="#e99605" p-id="3308"></path></svg>
                            <span style="vertical-align: super;">报名人数：2346人</span>
                          </el-col>
                          <el-col :span="12">
                            <svg t="1601114569598" class="icon result_icon" viewBox="0 0 1177 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4269" width="200" height="200"><path d="M822.528 451.072H337.408a40.3968 40.3968 0 1 0 0 80.8448h485.3248c22.3232 0 40.448-18.0736 40.448-40.448a40.6016 40.6016 0 0 0-40.6016-40.3456z m0 218.88H337.408a40.3968 40.3968 0 1 0 0 80.8448h485.3248c22.3232 0 40.448-18.1248 40.448-40.448a40.6016 40.6016 0 0 0-40.6016-40.448zM1067.008 72.2944h-149.248V40.448a40.3968 40.3968 0 1 0-80.8448 0v31.8976H323.072V40.448a40.3968 40.3968 0 1 0-80.8448 0v31.8976H93.0304A92.8768 92.8768 0 0 0 0 165.2736V898.56c0 51.3536 41.5744 92.928 92.9792 92.928H1067.008a92.8768 92.8768 0 0 0 92.9792-92.928V165.2736a93.184 93.184 0 0 0-93.0816-92.9792zM92.9792 165.2736h149.3504v20.8896a40.3968 40.3968 0 1 0 80.8448 0v-20.8896h513.8432v20.8896a40.3968 40.3968 0 1 0 80.8448 0v-20.8896h149.3504V291.84H92.9792V165.2736zM1066.9568 898.56H92.9792V372.3264H1067.008v526.2848h-0.1024z" fill="#e99605" p-id="4270"></path></svg>
                            <span style="vertical-align: super;">行程天数：1天</span>
                          </el-col>
                        </el-col>
                        <el-col :span="8" class="result_detaile_btn">
                          <span>￥ 198元/人起</span>
                        </el-col>
                      </el-col>
                    </el-col>
                  </el-col>
                </el-col>
                <el-col :span="24">
                  <el-pagination
                    :total="20"
                    :current-page="5"
                    :page-sizes="[10, 20, 30]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper">
                  </el-pagination>
                </el-col>
              </el-col>
              <el-col :span="24">
                <h2 style="color: #96918d;">暂无相关内容</h2>
                <svg width="250px" height="129px" viewBox="0 0 250 129" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <!-- Generator: Sketch 63.1 (92452) - https://sketch.com -->
                  <title>暂无相关内容</title>
                  <desc>Created with Sketch.</desc>
                  <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                      <stop stop-color="#C1DBFE" offset="0%"></stop>
                      <stop stop-color="#FFFFFF" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="50%" y1="0%" x2="84.3229316%" y2="40.0234628%" id="linearGradient-2">
                      <stop stop-color="#AFC0EF" offset="0%"></stop>
                      <stop stop-color="#6E94E7" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="50%" y1="0%" x2="98.1223959%" y2="40.0234628%" id="linearGradient-3">
                      <stop stop-color="#AFC0EF" offset="0%"></stop>
                      <stop stop-color="#6E94E7" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="23.1257341%" y1="13.3311767%" x2="72.0828806%" y2="86.8787371%" id="linearGradient-4">
                      <stop stop-color="#B9D1F5" offset="0%"></stop>
                      <stop stop-color="#89AFF1" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="50%" y1="0%" x2="37.9345292%" y2="100%" id="linearGradient-5">
                      <stop stop-color="#4B75CC" offset="0%"></stop>
                      <stop stop-color="#8DB1F9" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="95.8914194%" y1="50%" x2="-18.698097%" y2="29.1709077%" id="linearGradient-6">
                      <stop stop-color="#BBCCF8" offset="0%"></stop>
                      <stop stop-color="#7C9BDC" offset="100%"></stop>
                      <stop stop-color="#7C9BDC" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-7">
                      <stop stop-color="#AACEFF" offset="0%"></stop>
                      <stop stop-color="#97B4F6" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g id="2.0" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="空页面" transform="translate(-427.000000, -496.000000)">
                      <g id="暂无相关内容" transform="translate(423.000000, 475.000000)">
                        <rect id="矩形" x="0" y="0" width="253" height="150"></rect>
                        <path d="M253.283495,150 C223.862798,113.493778 176.799938,92 126.264363,92 C77.2903413,92 33.4394504,113.93473 4,148.515879 C4,148.515879 253.283495,150 253.283495,150 Z" id="椭圆形" fill="url(#linearGradient-1)"></path>
                        <g id="编组-2" transform="translate(64.000000, 21.000000)">
                          <polygon id="路径-34" fill="url(#linearGradient-2)" points="13.3406151 33.5236607 57.5965998 23.321311 57.5965998 88.3945272 13.3406151 88.3945272"></polygon>
                          <polygon id="路径-34备份" fill="url(#linearGradient-3)" points="57.5965998 23.321311 109.53353 36.2573349 109.53353 88.3945272 57.1308572 88.3945272"></polygon>
                          <polygon id="路径-32" fill="url(#linearGradient-4)" points="13.3406151 33.5236607 13.3406151 88.3945272 64.7091371 110.819161 64.7091371 49.2156085"></polygon>
                          <polygon id="路径-32备份" fill="url(#linearGradient-5)" points="64.5965998 49.2156085 64.5965998 110.819161 109.53353 87.6210427 109.53353 36.2573349"></polygon>
                          <polygon id="路径-33" fill="url(#linearGradient-6)" points="64.5965998 49.2156085 80.7669655 79.4842097 124.34929 58.024025 109.53353 36.2573349"></polygon>
                          <polygon id="路径-35" fill="url(#linearGradient-7)" points="13.3406151 33.5236607 0 55.8579191 13.3406151 61.3526734"></polygon>
                          <line x1="21.5965998" y1="52" x2="56.2060318" y2="62.9065557" id="路径-36" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                          <line x1="21.9720746" y1="64.5901592" x2="40.6496132" y2="70.476058" id="路径-36备份" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                          <line x1="21.9720746" y1="76.5901592" x2="37.0452173" y2="81.3401958" id="路径-36备份-2" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                          <g id="编组" transform="translate(73.596600, 0.000000)">
                            <polygon id="路径-37" fill="#406AC6" points="7.74740151 11.4004434 7.74740151 23.210794 33.7683889 6.82121026e-13"></polygon>
                            <polygon id="路径-38" fill="#BCD0F1" points="33.7683889 6.74975286e-13 11.9187168 14.1069821 23.5552626 21.9344804"></polygon>
                            <polygon id="路径-39" fill="#BCD0F1" points="1.8189894e-12 4.41736428 7.74740151 11.605397 33.7683889 2.27373675e-13"></polygon>
                          </g>
                          <path d="M78.6097841,15 C68.1172454,23.1217098 62.8709761,28.7781523 62.8709761,31.9693274 C62.8709761,36.7560901 66.23947,38.3172852 69.3195742,38.3172852 C72.3996784,38.3172852 74.7248385,32.8289239 68.7979073,31.9693274 C64.8466198,31.3962631 61.1128507,36.5307589 57.5965998,47.3728146" id="路径-40" stroke="#B7DCFC" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2"></path>
                        </g>
                        <g id="3.通用组件/彩色版/盆栽03" transform="translate(48.000000, 93.000000)">
                          <g id="分组" transform="translate(0.968750, 0.179688)">
                            <g transform="translate(5.875000, 0.000000)" fill="#BAE637" id="Fill-1">
                              <path d="M4.6757776,18.3494157 L0.00187743506,18.3494157 L0.00187743506,2.3360632 C0.00187743506,1.06147112 1.04268506,0.0281925221 2.32660958,0.0281925221 L2.35100893,0.0281925221 C3.63493344,0.0281925221 4.6757776,1.06147112 4.6757776,2.3360632 L4.6757776,18.3494157 Z"></path>
                            </g>
                            <path d="M12.875,22.2690616 L8.1875,22.2690616 L8.1875,13.9072249 C8.1875,12.6662922 9.20534668,11.6603281 10.4609375,11.6603281 L10.6015991,11.6603281 C11.8571533,11.6603281 12.875,12.6662922 12.875,13.9072249 L12.875,22.2690616 Z" id="Fill-3" fill="#389E0D"></path>
                            <path d="M6.5625,18.3410466 L1.84375,18.3410466 L1.84375,9.2496614 C1.84375,8.00170765 2.86426439,6.990011 4.12309505,6.990011 L4.28315495,6.990011 C5.54198561,6.990011 6.5625,8.00170765 6.5625,9.2496614 L6.5625,18.3410466 Z" id="Fill-5" fill="#7CB305"></path>
                            <g transform="translate(0.000000, 17.784320)" fill="#3B68B8" id="Fill-7">
                              <path d="M13.1538246,13.8381958 L0.878524946,13.8381958 C0.393322939,13.8381958 0,13.4489514 0,12.9687806 L0,0.893400207 C0,0.413229429 0.393322939,0.0239849922 0.878524946,0.0239849922 L13.1538246,0.0239849922 C13.6390266,0.0239849922 14.0323495,0.413229429 14.0323495,0.893400207 L14.0323495,12.9687806 C14.0323495,13.4489514 13.6390266,13.8381958 13.1538246,13.8381958"></path>
                            </g>
                          </g>
                        </g>
                        <g id="3.通用组件/彩色版/盆栽03备份" transform="translate(184.000000, 82.000000)">
                          <g id="分组" transform="translate(0.968750, 0.179688)">
                            <g transform="translate(5.875000, 0.000000)" fill="#BAE637" id="Fill-1">
                              <path d="M4.6757776,18.3494157 L0.00187743506,18.3494157 L0.00187743506,2.3360632 C0.00187743506,1.06147112 1.04268506,0.0281925221 2.32660958,0.0281925221 L2.35100893,0.0281925221 C3.63493344,0.0281925221 4.6757776,1.06147112 4.6757776,2.3360632 L4.6757776,18.3494157 Z"></path>
                            </g>
                            <path d="M12.875,22.2690616 L8.1875,22.2690616 L8.1875,13.9072249 C8.1875,12.6662922 9.20534668,11.6603281 10.4609375,11.6603281 L10.6015991,11.6603281 C11.8571533,11.6603281 12.875,12.6662922 12.875,13.9072249 L12.875,22.2690616 Z" id="Fill-3" fill="#389E0D"></path>
                            <path d="M6.5625,18.3410466 L1.84375,18.3410466 L1.84375,9.2496614 C1.84375,8.00170765 2.86426439,6.990011 4.12309505,6.990011 L4.28315495,6.990011 C5.54198561,6.990011 6.5625,8.00170765 6.5625,9.2496614 L6.5625,18.3410466 Z" id="Fill-5" fill="#7CB305"></path>
                            <g transform="translate(0.000000, 17.784320)" fill="#3B68B8" id="Fill-7">
                              <path d="M13.1538246,13.8381958 L0.878524946,13.8381958 C0.393322939,13.8381958 0,13.4489514 0,12.9687806 L0,0.893400207 C0,0.413229429 0.393322939,0.0239849922 0.878524946,0.0239849922 L13.1538246,0.0239849922 C13.6390266,0.0239849922 14.0323495,0.413229429 14.0323495,0.893400207 L14.0323495,12.9687806 C14.0323495,13.4489514 13.6390266,13.8381958 13.1538246,13.8381958"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <el-pagination
                  :total="0"
                  :current-page="5"
                  :page-sizes="[10, 20, 30]"
                  :page-size="10"
                  layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
              </el-col>
            </el-tabs>
          </el-col>
          <el-col :span="6" style="margin-top: 20px;margin-left: 5px;">
            <el-col class="search_box" :span="23" :offset="1">
              <ul class="search_safe_ul">
                <li>
                  <el-col :span="16" :offset="4">
                    <el-col :span="4">
                      <div class="search_safe_icon"></div>
                    </el-col>
                    <el-col :span="20">
                      <p class="search_safe_text" style="font-size: 110%;">全程预订保障</p>
                      <p class="search_safe_text">去哪儿都放心</p>
                    </el-col>
                  </el-col>
                </li>
                <li>
                  <el-col :span="8">
                    <el-col :span="4">
                      <div class="search_safe_mini_icon"></div>
                    </el-col>
                    <el-col :span="20">
                      <p class="search_safe_text">认证商家</p>
                    </el-col>
                  </el-col>
                  <el-col :span="8">
                    <el-col :span="4">
                      <div class="search_safe_mini_icon"></div>
                    </el-col>
                    <el-col :span="20">
                      <p class="search_safe_text">认证商家</p>
                    </el-col>
                  </el-col>
                  <el-col :span="8">
                    <el-col :span="4">
                      <div class="search_safe_mini_icon"></div>
                    </el-col>
                    <el-col :span="20">
                      <p class="search_safe_text">认证商家</p>
                    </el-col>
                  </el-col>
                </li>
              </ul>
            </el-col>
            <el-col class="search_box" :span="23" :offset="1">
              <el-col :span="20" :offset="2">
                <h4 class="hot_scenic">热门推荐</h4>
              </el-col>
              <el-col :span="24" v-for="(item,i) in 5" :key="i">
                <img class="hot_img" src="https://img1.qunarzz.com/qs/2003/91/75bca5fff861e502.jpg">
              </el-col>
            </el-col>
          </el-col>
        </el-row>
      </el-row>
    </el-main>
    <el-footer style="padding: 0;">
      <public_foot></public_foot>
    </el-footer>
  </el-container>
</template>

<script>
  import publicZ from "../public/publicZ";
  import public_foot from "../public/public_foot";
  export default {
    name: "search",
    data() {
      return {
        activeName: 'first',
        pickerOptions: {
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
        value1: '',
        value2: '',
        value3: ''
      };
    },
    components: {
      publicZ,
      public_foot
    }
  }
</script>

<style scoped>
  .search_menu{
    color: #8f9194;
    font-size: 90%;
    text-align: left;
    margin-top: 20px;
    background: #00afc7;
  }
  .search_line{
    padding: 10px;
    border-bottom: 1px dashed #B3C0D1;
  }
  .search_sort_ul{
    margin: 0;
    padding: 0;
    float: left;
    list-style: none;
  }
  .search_sort_li{
    float: left;
    display: inline;
    height: 30px;
    font-size: 90%;
    color: #8f9194;
    padding: 3px 5px;
  }
  .search_box{
    background: #fff;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border: 1px solid #efefef;
    border-top: 2px solid #00afc7;
  }
  .search_safe_ul{
    margin: 0;
    list-style: none;
    padding: 15px 16px;
  }
  .search_safe_text{
    margin: 3px;
    font-size: 90%;
    color: #0085ac;
  }
  .search_safe_icon{
    width: 42px;
    height: 50px;
    margin-right: 5px;
    background: url("http://47.105.158.199/3124/list-icon7.png") no-repeat 0px -310px;
  }
  .search_safe_mini_icon{
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background: url("http://47.105.158.199/3124/list-icon7.png") no-repeat -190px -309px;
  }
  .hot_scenic{
    color: #007092;
    margin: 5px 0px;
    text-align: left;
  }
  .hot_img{
    margin: 5px;
    cursor: pointer;
    transition: 0.5s;
  }
  .hot_img:hover{
    filter: brightness(1.1);
  }
  .result_item{
    margin: 0;
    padding: 0;
    height: 190px;
    margin-bottom: 22px;
    font-size: 12px;
    color: #666;
    cursor: pointer;
    background: #f5f2f2;
    letter-spacing: .5px;
    padding-bottom: 10px;
    border-bottom: 1px #e1e1e1 solid;
  }
  .result_text{
    position: absolute;
    z-index: 10;
    display: block;
    top: 15px;
    left: 15px;
    color: #fff;
    font-size: 12px;
    padding: 5px 11px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.4);
  }
  .result_img{
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: 0.5s;
  }
  .result_img:hover{
    filter: brightness(1.2);
  }
  .result_title{
    margin: 0;
    width: 95%;
    font-size: 15px;
    font-weight: normal;
    padding: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
    white-space: nowrap;/*强制在一行显示*/
    text-overflow:ellipsis;/*设置超出内容显示...*/
    overflow: hidden;/*一定不能少 超出的内容进行隐藏*/
  }
  .result_info{
    position: absolute;
    width: 100%;
    bottom: 0px;
    left: 0px;
    height: 40px;
    border-top: 1px #e1e1e1 solid;
    line-height: 40px;
    font-size: 14px;
  }
  .result_icon{
    width: 20px;
    height: 20px;
    margin-top: 10px;
  }
  .result_detaile_btn{
    height: 96%;
    color: #fff;
    margin-right: 0;
    padding-top: 4px;
    text-align: center;
    font-size: 20px;
    line-height: 30px;
    background-color: #e99605;
  }
</style>
