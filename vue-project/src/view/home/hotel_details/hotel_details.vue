<template>
  <el-container>
    <el-header style="padding: 0;height: 220px;">
      <publicZ></publicZ>
      <el-menu
        v-if="show"
        :default-active="activeIndex"
        class="hotel_menu"
        mode="horizontal"
        background-color="rgb(247, 247, 247)"
        text-color="rgb(161, 199, 241)"
        active-text-color="rgb(161, 199, 241)">
        <el-menu-item index="1"><a href="#hotel_room">房间预定</a></el-menu-item>
        <el-menu-item index="2"><a href="#hotel_details">酒店信息</a></el-menu-item>
        <el-menu-item index="3"><a href="#hotel_server">服务设施</a></el-menu-item>
        <el-menu-item index="4"><a href="#hotel_notice">入住须知</a></el-menu-item>
        <el-menu-item index="5"><a href="#hotel_comment">用户点评</a></el-menu-item>
      </el-menu>
    </el-header>
    <el-main style="background: #ddd;padding-bottom: 120px;">
      <el-row>
        <el-col :span="22" :offset="1">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>酒店</el-breadcrumb-item>
            <el-breadcrumb-item>xxx酒店</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col class="details_items" :span="22" :offset="1" style="height: 330px;">
          <el-col class="details_img_box" :span="16">
            <el-col :span="16" style="height: 100%;">
              <div class="details_img_item">
                <el-image
                  class="details_main_img"
                  src="https://himg1.qunarzz.com/imgs/202005/11/C.HQaS1aY_u4tiXIOvv480s.jpg"
                  :preview-src-list="srcList">
                </el-image>
                <p class="details_title">喆啡酒店(北京三里屯店)</p>
                <p class="images_num">酒店图片共 10张</p>
              </div>
            </el-col>
            <el-col :span="8" style="height: 100%;">
              <el-col class="details_mini_box" :span="12" v-for="(item,i) in 6" :key="i">
                <el-image
                  class="details_mini_img"
                  :src="url"
                  :preview-src-list="srcList">
                </el-image>
              </el-col>
            </el-col>
          </el-col>
          <el-col class="details_info_box" :span="8">
            <el-col :span="24">
              <h2 class="details_info_title">喆啡酒店(北京三里屯店)</h2>
            </el-col>
            <el-col :span="24" style="border-bottom: 1px dotted #0194a9;">
              <el-col :span="10">
                <el-col :span="14">
                  <p class="details_score">5.0分</p>
                </el-col>
                <el-col :span="10">
                  <p class="details_spec">不错</p>
                </el-col>
              </el-col>
              <el-col :span="10" :offset="4" style="margin-top: 20px;">
                <span class="comment_num">406条评论</span>
                <svg t="1601181992787" class="icon inco_go_comment" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3327" width="200" height="200"><path d="M769.11 512l-448 448-60.417-60.33 448-448L769.11 512z m-60.758 60.672L254.891 119.467l60.586-60.416 453.12 453.376-60.33 60.33z" fill="#1296db" p-id="3328"></path></svg>
              </el-col>
            </el-col>
            <el-col class="details_map_box" :span="22" :offset="1">
              <p style="color: #69625e;">酒店地址：鼓浪屿安海路4号</p>
            </el-col>
          </el-col>
        </el-col>
        <el-col id="hotel_room" class="details_items" :span="22" :offset="1">
          <el-col :span="24" style="margin-top: 10px;">
            <el-col :span="22" :offset="1" style="border-bottom: 1px dotted rgb(1, 148, 169);">
              <h3 class="hotel_info_title">房间预定</h3>
            </el-col>
            <el-col :span="10" style="margin-top: 10px;">
              <el-date-picker
                v-model="value2"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="入住日期"
                end-placeholder="离店日期"
                :picker-options="pickerOptions">
              </el-date-picker>
            </el-col>
            <el-col :span="4" :offset="6" style="margin-top: 10px;">
              <el-button type="primary" plain>重新搜索</el-button>
            </el-col>
          </el-col>
          <el-col :span="22" :offset="1" style="margin-top: 10px;">
            <el-col :span="24" class="details_sort">
              <el-select v-model="value" filterable placeholder="床型">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="value" filterable placeholder="早餐">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="value" filterable placeholder="宽带">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="value" filterable placeholder="支付方式">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col class="details_room" :span="24">
              <el-table
                :data="tableData"
                style="width: 100%;margin-bottom: 20px;"
                row-key="id"
                default-expand-all
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
                <el-table-column
                  prop="date"
                  label="房型"
                  sortable
                  width="180">
                  <el-col :span="12">123</el-col>
                  <el-col :span="12">456</el-col>
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="床型"
                  sortable
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="早餐">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="入住人数">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="房价">
                </el-table-column>
                <el-table-column>
                  <el-button type="primary" plain>预定</el-button>
                </el-table-column>
              </el-table>
            </el-col>
          </el-col>
        </el-col>
        <el-col id="hotel_details" class="details_items" :span="22" :offset="1" style="padding-bottom: 20px;">
          <el-col :span="22" :offset="1">
            <h3 class="hotel_info_title">酒店信息</h3>
          </el-col>
          <el-col :span="22" :offset="1">
            <el-col class="hotel_info_details" :span="24">酒店电话：+86-592-2023333</el-col>
            <el-col class="hotel_info_details" :span="24">厦门海景千禧大酒店坐落于著名的中山路旁，位于商业及金融中心，酒店周边旅游景点环绕，毗邻鼓浪屿、南普陀寺、厦门大学、胡里山炮台、环岛路、万石植物园等著名的旅游景点，除中山路步行街外，酒店附近还有中华城、家乐福、巴黎春天等大型购物商场，可便捷购得厦门特色产品。</el-col>
            <el-col class="hotel_info_details" :span="24">酒店位于万石岩-轮渡-厦大片区，客房可眺东南亚海滨之城的浪漫风情及瑰丽风光。房内全面导入时尚新颖的现代化设备，如宽敞舒适的工作桌、高速宽带上网、卫星电视、迷你酒吧、电热水壶，咖啡和茶包、烫衣板等。</el-col>
            <el-col class="hotel_info_details" :span="24">温馨典雅的海景咖啡厅、传承粤菜经典的龙苑中餐厅和樱花日本餐厅等餐饮服务让您享受味觉盛宴。大堂酒吧是您娱乐休闲放松的好去处；健身房、游泳池、桑拿和足浴按摩中心等将让您的旅途倍加舒适惬意。</el-col>
          </el-col>
        </el-col>
        <el-col id="hotel_server" class="details_items" :span="22" :offset="1" style="padding-bottom: 20px;">
          <el-col :span="22" :offset="1">
            <h3 class="hotel_info_title">服务设施</h3>
          </el-col>
          <el-col :span="22" :offset="1" v-for="(item,i) in 5" :key="i" style="margin-top: 5px;">
            <el-col :span="24">
              <el-col :span="4">
                <span class="hotel_server_main">前台服务</span>
              </el-col>
              <el-col :span="20">
                <el-col class="hotel_server_details" :span="4">行李寄存</el-col>
                <el-col class="hotel_server_details" :span="4">24小时前台</el-col>
                <el-col class="hotel_server_details" :span="4">前台贵重物品保险柜</el-col>
                <el-col class="hotel_server_details" :span="4">唤醒服务</el-col>
                <el-col class="hotel_server_details" :span="4">快速办理入住/退房手续</el-col>
                <el-col class="hotel_server_details" :span="4">24小时大堂经理</el-col>
                <el-col class="hotel_server_details" :span="4">24小时大堂经理</el-col>
              </el-col>
            </el-col>
          </el-col>
        </el-col>
        <el-col id="hotel_notice" class="details_items" :span="22" :offset="1" style="padding-bottom: 20px;">
          <el-col :span="22" :offset="1">
            <h3 class="hotel_info_title">入住须知</h3>
          </el-col>
          <el-col :span="22" :offset="1" style="margin-top: 5px;">
            <el-col :span="24">
              <el-col :span="4">
                <span class="hotel_server_main">入离时间</span>
              </el-col>
              <el-col :span="20">
                <el-col class="hotel_server_info" :span="24">入住时间：14:00以后      离店时间：12:00以前</el-col>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="4">
                <span class="hotel_server_main">餐食政策</span>
              </el-col>
              <el-col :span="20">
                <el-col class="hotel_server_info" :span="24">自助早餐 RMB 161</el-col>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="4">
                <span class="hotel_server_main">宠物政策</span>
              </el-col>
              <el-col :span="20">
                <el-col class="hotel_server_info" :span="24">不可携带宠物。</el-col>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="4">
                <span class="hotel_server_main">酒店提示</span>
              </el-col>
              <el-col :span="20">
                <el-col class="hotel_server_info" :span="24">1、根据公安机关规定，中国公民16岁以下未成年人的家长携带好未成年人的身份证或《户口簿》办理登记入住（其他证件不适用），未携带以上有效证件的，请到酒店属地派出所开具身份证明（婴幼儿家长请携带好婴幼儿的出生证明及户口簿办理登记入住）。2、根据厦门市应对新冠肺炎疫情工作指挥部办公室公告：自6月8日起，所有福建省外入厦人员继续实施网上预登记制度，通过“闽政通”App内的“i厦门”应用进入“入厦登记”页面提前自主申报相关信息后领取“八闽健康码”。酒店、旅店等凭省外入厦人员完成登记后申领的“八闽健康码”绿码办理入住手续。3、每间房仅限入住两位成人，及一位12岁以下小孩。如需加床，敬请提前与酒店确认，电话0592-2023333转预订部。</el-col>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="4">
                <span class="hotel_server_main">儿童政策</span>
              </el-col>
              <el-col :span="20">
                <el-col class="hotel_server_info" :span="24">不接受18岁以下客人单独入住。 。 加床政策、儿童人数请参见您所选定的客房政策，若超过房型限定人数，可能需收取额外费用。提出的任何要求均需获得酒店的确认，所有服务详情以酒店告知为准。</el-col>
              </el-col>
            </el-col>
          </el-col>
        </el-col>
        <el-col id="hotel_comment" class="details_items" :span="22" :offset="1" style="padding-bottom: 20px;">
          <el-col :span="22" :offset="1">
            <h3 class="hotel_info_title">用户点评</h3>
          </el-col>
          <el-col :span="24">
            <el-col :span="22" :offset="1" style="border-bottom: 2px solid #dcd6d6;">
              <el-col :span="10">
                <h4 class="hotel_info_title" style="margin: 10px;color: #4db46a;">综合评分：4.4不错!</h4>
              </el-col>
              <el-col :span="14" style="text-align: right;">
                <el-button type="success" size="small" round>全部评论</el-button>
                <el-button size="small" round>带图点评</el-button>
              </el-col>
            </el-col>
            <el-col class="hotel_comment" :span="22" :offset="1" v-for="(item,i) in 5" :key="i">
              <el-col class="hotel_comment_item" :span="24">
                <el-col class="hotel_comment_user" :span="24">
                  <el-col class="hotel_comment_user_head" :span="2">
                    <img class="user_head" src="http://img.qqzhi.com/uploads/2018-12-01/050320468.jpg">
                  </el-col>
                  <el-col class="hotel_comment_user_name" :span="4">
                    <span class="user_name">张三</span>
                  </el-col>
                  <el-col class="hotel_comment_time" :span="4" :offset="14">
                    <span class="comment_time" style="float: right;">2020/9/27</span>
                  </el-col>
                </el-col>
                <el-col class="hotel_comment_details" :span="24">
                  <div class="triangle"></div>
                  <el-col :span="22" :offset="1">
                    <span>
                      酒店位置非常好，邻近步行街附近吃的东西选择多。服务态度好，早餐比较丰富。就是设施老旧一看就很有时代沧桑感！
                    </span>
                    <div class="hotel_comment_img_box">
                      <img class="hotel_comment_img" src="https://m.tuniucdn.com/fb2/t1/G5/M00/32/A7/Cii-tF1c5iKIfloqAAPI1XruuscAAY_pgPgYqsAA8jt519_w640_h320_c1_t0_q70.jpg">
                    </div>
                    <div class="hotel_comment_img_box">
                      <img class="hotel_comment_img" src="https://m.tuniucdn.com/fb2/t1/G5/M00/32/A7/Cii-s11c5iGIOrSzAANdC5bstNkAAY_pgPOiQUAA10j289_w640_h320_c1_t0_q70.jpg">
                    </div>
                    <div class="hotel_comment_img_box">
                      <img class="hotel_comment_img" src="https://m.tuniucdn.com/fb2/t1/G5/M00/32/A7/Cii-sl1c5iOIcy_OAAG3_kYLbe8AAY_pgPlL14AAbgW473_w640_h320_c1_t0_q70.jpg">
                    </div>
                    <div class="hotel_comment_img_box">
                      <img class="hotel_comment_img" src="https://m.tuniucdn.com/fb2/t1/G5/M00/32/A8/Cii-sl1c5ieIdmcyAARGdpsRX7EAAY_pwAaJVsABEaO335_w640_h320_c1_t0_q70.jpg">
                    </div>
                  </el-col>
                </el-col>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="100">
              </el-pagination>
            </el-col>
          </el-col>
        </el-col>
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
    name: "hotel_details",
    data() {
      return {
        // 页头
        activeIndex: '1',
        show: false,
        // 日期选择
        value1: '',
        value2: '',
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        // 房间列表
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
            id: 31,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            id: 32,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        // 条件筛选
        value: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        // 大图查看
        url: 'https://himg1.qunarzz.com/imgs/202005/11/C.p_tN0_jgH922IlNN_120.jpg',
        srcList: [
          'https://himg1.qunarzz.com/imgs/202005/11/C.yYzogvz-SgA78h9PY120.jpg',
          'https://himg1.qunarzz.com/imgs/202005/13/C.aJUX420YvbPQQNRvA120.jpg',
          'https://himg1.qunarzz.com/imgs/202005/11/C.p_tN0_jgH922IlNN_120.jpg',
          'https://himg1.qunarzz.com/imgs/202001/24/C.GzBqDYuHYWdKhG889120.jpg',
          'https://himg1.qunarzz.com/imgs/202001/24/C.ut6VJcQQPQK5d3T4c120.jpg',
          'https://himg1.qunarzz.com/imgs/202001/24/C.wM5KSHL1m4HUF_WYr120.jpg'
        ]
      }
    },
    components: {
      publicZ,
      public_foot
    },
    mounted: function () {
      window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
    },
    methods: {
      handleScroll: function () {
        if(document.documentElement.scrollTop>600){
          this.show=true
        }else{
          this.show=false
        }
      }
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
    }
  }
</script>

<style scoped>
  /*去除a标签样式*/
  /*包含以下四种的链接*/
  a {
    text-decoration: none;
  }
  /*正常的未被访问过的链接*/
  a:link {
    text-decoration: none;
  }
  /*已经访问过的链接*/
  a:visited {
    text-decoration: none;
  }
  /*鼠标划过(停留)的链接*/
  a:hover {
    text-decoration: none;
  }
  /* 正在点击的链接*/
  a:active {
    text-decoration: none;
  }
  .hotel_menu{
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    border-bottom: none;
    box-shadow: 0 5px 5px 0 rgba(0,0,0,.15);
  }
  .details_items{
    margin-top: 15px;
    border-radius: 15px;
    background-color: #fff;
  }
  .details_img_box{
    height: 100%;
    overflow: hidden;
    border-radius: 15px;
  }
  .details_img_item{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .details_main_img{
    width: 100%;
    height: 100%;
  }
  .details_mini_box{
    height: 33.3%;
    padding: 2px;
  }
  .details_mini_img{
    width: 100%;
    height: 100%;
  }
  .details_title{
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    height: 30px;
    padding: 0 10px;
    line-height: 30px;
    border-radius: 8px 0 12px 0;
    color: #fff5cc;
    font-size: 13px;
    background-image: linear-gradient(141deg, #fa7b68 0%, #f96468 52%, #f95568 100%, #f83652 100%);
  }
  .images_num{
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0;
    height: 28px;
    color: #fff;
    line-height: 28px;
    padding: 0 8px;
    font-size: 12px;
    border-radius: 2px 0 0 0;
    background: rgba(0, 0, 0, 0.5);
  }
  .inco_go_comment{
    width: 20px;
    height: 20px;
    margin: -4px;
  }
  .details_score{
    float: left;
    margin: 3px 10px;
    font-size: 30px;
    color: #00afc7;
    font-weight: bold;
  }
  .details_spec{
    float: left;
    color: #fff;
    padding: 0 10px;
    font-size: 16px;
    line-height: 24px;
    background: #03bed8;
    border-radius: 8px 8px 8px 2px;
  }
  .comment_num{
    color: #03bed8;
    cursor: pointer;
  }
  .details_info_title{
    color: #3b3b42;
    text-align: left;
    padding-left: 10px;
  }
  .details_map_box{
    height: 140px;
    cursor: pointer;
    margin-top: 40px;
    border-radius: 6px;
    background-size: cover;
    background: url("http://img1.tuniucdn.com/img/201907251038/hotel_2019/map.png") no-repeat 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .details_sort{
    text-align: left;
    padding-left: 23px;
  }
  .hotel_info_title{
    text-align: left;
  }
  .hotel_info_details{
    margin-top: 10px;
    color: #656667;
    text-align: left;
  }
  .hotel_server_main{
    float: left;
    color: #3c3c3c;
    font-weight: 600;
  }
  .hotel_server_details{
    color: #656667;
    font-size: 90%;
    padding-top: 5px;
  }
  .hotel_server_info{
    color: #656667;
    font-size: 90%;
    padding-top: 10px;
    text-align: left;
  }
  .hotel_comment_item{
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .user_head{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .user_name,.comment_time{
    float: left;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
  }
  .comment_time{
    color: #383838;
    padding: 0px 6px;
    border-radius: 3px;
    border: 1px solid #dfe1f2;
  }
  .hotel_comment_details{
    padding: 10px;
    margin-top: 10px;
    text-align: left;
    position: relative;
    border-radius: 5px;
    background-color: #fafafa;
    border: 1px solid #f5f5f5;
  }
  .triangle{
    position: absolute;
    left: 35px;
    top: -6px;
    width: 10px;
    height: 10px;
    border-radius: 3px;
    background: #fafafa;
    transform: rotate(45deg);
    border-top: 1px solid #f5f5f5;
    border-left: 1px solid #f5f5f5;
  }
  .hotel_comment_img_box{
    float: left;
    width: 220px;
    height: 150px;
    overflow: hidden;
    margin-right: 10px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 3px;
  }
  .hotel_comment_img{
    width: 100%;
    height: 100%;
    transition: 0.2s;
  }
  .hotel_comment_img:hover{
    transform: scale(1.1);
    filter: brightness(1.2);
  }
</style>
