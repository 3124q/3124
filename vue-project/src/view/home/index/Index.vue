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
            <el-col :span="6">
              <el-button class="enroll_btn" type="primary" round>注册账号</el-button>
            </el-col>
          </el-col>
        </el-row>
      </el-row>
      <div class="scroll_img" :style="{'background-image':'url('+background_1+')','background-position-y':positionY1+'px'}" ref="img1"></div>
      <div class="scroll_text">
        <el-carousel height="200px" direction="vertical" :autoplay="false">
          <el-carousel-item v-for="item in 3" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="scroll_img" :style="{'background-image':'url('+background_2+')','background-position-y':positionY2+'px'}" ref="img2"></div>
      <div class="scroll_text">
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
            <el-col class="accordion__li" v-for="(item,i) in tableData" :key="i" :class="item.open ? 'accordion_hover' : 'accordion_leave'">
              <el-col class="accordion_img_box">
                <img :src= item.image_url class="accordion_img" @mouseenter="enter(i)">
              </el-col>
              <el-col>
                <transition name="el-zoom-in-center">
                  <div class="accordion_info" :class="item.open ? 'show' : 'hidden'" v-show="item.open">
                    <el-row class="accordion_center">
                      <el-col class="accordion_item_1">
                        <span>￥ 2000</span>
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
                    <el-col :span="17" :offset="1"> 【尊享西藏】西藏七日游线路：拉萨+布达拉宫+八角街+巴松措+鲁朗林海+苯日神山+卡定沟+羊卓雍措 </el-col>
                    <el-col :span="5" :offset="1">
                      <el-button type="primary" plain>立即报名</el-button>
                    </el-col>
                  </div>
                </transition>
              </el-col>
              <el-col>
                <div class="accordion_mini_title" :class="item.open ? 'hidden' : 'show'" @mouseenter="enter(i)">
                  <el-col :span="24" style="position: absolute;bottom: 0;">
                    <p style="font-size: 130%;font-weight: 600">西藏·拉萨</p>
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
              <img src="https://cdn.gootoai.com/skin/pc/static/picture/52711533544787.jpg">
            </el-col>
            <el-col :span="11">
              <img src="https://cdn.gootoai.com/skin/pc/static/picture/86091533544014.jpg">
            </el-col>
            <el-col :span="11" :offset="1">
              <img src="https://cdn.gootoai.com/skin/pc/static/picture/36101516960903.jpg">
            </el-col>
            <el-col :span="11">
              <img src="https://cdn.gootoai.com/skin/pc/static/picture/26351533612380.png">
            </el-col>
          </el-col>
        </el-row>
      </div>
      <div class="scroll_img" :style="{'background-image':'url('+background_3+')','background-position-y':positionY3+'px'}" ref="img3"></div>
      <div class="scroll_text"></div>
      <div class="scroll_img" :style="{'background-image':'url('+background_4+')','background-position-y':positionY4+'px'}" ref="img4"></div>
      <div class="scroll_text" style="height: 110vh;background: #3c3c3c;">
      <publicfoot></publicfoot>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  import publicfoot from "../public/public_foot";
export default {
  name: 'Index',
  components:{
    publicfoot
  },
  data () {
    return {
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
      activeName: 'second',
      // 手风琴效果
      tableData: [{
        open: true,
        image_url: 'https://cdn.gootoai.com/files/5uimg/line/Thailand/190220/21-1Z220130214G5.jpg'
      }, {
        open: false,
        image_url: 'https://cdn.gootoai.com/files/5uimg/line/chongqing/200616/12-200616102405403.jpg'
      }, {
        open: false,
        image_url: 'https://cdn.gootoai.com/files/5uimg/line/yunnan/200602/1-200602140Q9158.jpg'
      }, {
        open: false,
        image_url: 'https://cdn.gootoai.com/files/5uimg/line/sichuan/200528/12-20052Q1331L42.jpg'
      }, {
        open: false,
        image_url: 'https://cdn.gootoai.com/files/5uimg/line/sichuan/200526/12-200526120Q4Z6.jpg'
      }],
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
  methods: {
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
      for(var i=0;i<this.tableData.length;i++){
        this.tableData[i].open = false
      }
      this.tableData[open_i].open = true
    }
  },
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
</style>
