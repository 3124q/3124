<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xpersonal"> 后台管理</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>酒店管理</el-breadcrumb-item>
        <el-breadcrumb-item>酒店发布</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <div>
        <span class="el-title">酒店发布</span>
        <el-divider></el-divider>
        <el-row>
          <el-col class="pulish_info" :span="7">
            <el-card :body-style="{ padding: '0px' }" shadow="never">
              <img src="https://youimg1.c-ctrip.com/target/tg/878/257/036/6b6fb9e7db6543b282a314e5060d5fc3.jpg" class="image">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-card>
          </el-col>
          <el-col class="pulish_detail" :span="16" :offset="1">
            <el-form ref="form" label-width="120px" size="mini" class="my_info info_from" label-position="left">
              <span>酒店信息</span>
              <el-divider></el-divider>
                <el-form-item label="酒店名称：">
                  <el-input></el-input>
                </el-form-item>
                <el-row>
                  <el-col :span="3">
                    <el-form-item label="酒店地点："></el-form-item>
                  </el-col>
                  <el-col :span="19" :offset="2">
                    <div class="v-distpicker">
                      <v-distpicker @selected="sel" ></v-distpicker>
                    </div>
                  </el-col>
                </el-row>
              <el-form-item label="详细地址：" style="margin-top: 10px;">
                <el-row>
                  <el-col :span="4">
                    <el-button size="mini" type="primary" plain @click="dialogVisible = true">选择地点</el-button>
                  </el-col>
                  <el-dialog
                    title="请选择景点地址"
                    :visible.sync="dialogVisible"
                    width="60%"
                    :before-close="handleClose">
                    <el-row style="margin-bottom: 10px">
                      <el-col :span="12" :offset="6">
                        <el-input v-model="addressKeyword" placeholder="请输入地址来直接查找相关位置"></el-input>
                      </el-col>
                    </el-row>
                    <baidu-map :zoom="zoom"
                               :center="location"
                               :scroll-wheel-zoom="true">
                      <bm-view class="map"></bm-view>
                      <bm-local-search
                        style="display: none"
                        :keyword="addressKeyword"
                        :auto-viewport="true">
                      </bm-local-search>
                    </baidu-map>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                    </span>
                  </el-dialog>
                  <el-col :span="18" :offset="2">
                    <el-input v-model="form.message"></el-input>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="酒店星级：" style="margin-top: 10px; margin-left: 0">
                <el-radio-group v-model="radio">
                  <el-radio :label="1">经济型</el-radio>
                  <el-radio :label="2">二星</el-radio>
                  <el-radio :label="3">三星</el-radio>
                  <el-radio :label="4">四星</el-radio>
                  <el-radio :label="5">五星</el-radio>
                  <el-radio :label="6">暂无</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-row style="margin-bottom: 10px;">
                <el-col :span="3">
                  <el-form-item label="封面图："></el-form-item>
                  <el-row style="margin-top: 20px;">
                    <el-button size="mini" type="primary" plain>更改封面图</el-button>
                    <el-button size="mini" type="danger" plain style="margin-top: 3vh;margin-left: 0">取消封面图</el-button>
                  </el-row>
                </el-col>
                <el-col :span="19" :offset="2">
                  <div class="block">
                    <el-image :src="src"></el-image>
                  </div>
                </el-col>
              </el-row>

                <el-row :gutter="10" style="text-align: left;">
                  <el-col :lg="7" :xl="7">
                    <div class="block" >
                      <span class="demonstration" >开业时间：</span>
                      <el-date-picker
                        v-model="date1"
                        align="right"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions" style="width: 0px;">
                      </el-date-picker>
                    </div>
                  </el-col>
                  <el-col :lg="7" :xl="7">
                    <div class="block">
                      <span class="demonstration" >最近装修：</span>
                      <el-date-picker
                        v-model="date2"
                        align="right"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions" style="width: 0px;">
                      </el-date-picker>
                    </div>
                  </el-col>
                  <el-col :lg="7" :xl="7">
                    <div class="block" >
                      <span class="demonstration" >房间总数：</span>
                      <el-input  v-model="room_count" style="width: 5vw"></el-input>
                    </div>
                  </el-col>
                </el-row>
              <el-form-item label="酒店设施" style="margin-top: 10px; text-align: left;">
                <el-checkbox :indeterminate="isIndeterminate" v-model="facilities_checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                  <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="服务设施" style="margin-top: 10px; text-align: left;">>
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange2">全选</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedCities2" @change="handleCheckedCitiesChange2">
                  <el-checkbox v-for="city in cities2" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>

              <el-form-item label="早餐" style="margin-top: 10px;text-align: left;">
                <el-radio-group v-model="breakfast">
                  <el-radio :label="1">无</el-radio>
                  <el-radio :label="2">免费</el-radio>
                  <el-radio :label="3">
                    收费
                    <el-input placeholder="请输入早餐价格"></el-input>
                  </el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="入离时间：">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="酒店电话：">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="酒店详情：">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 4}"
                  placeholder="请输入内容"
                  >
                </el-input>

              </el-form-item>
              <el-divider></el-divider>
              <el-button type="primary" plain style="width: 90%;">提交信息</el-button>
              <el-divider></el-divider>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  const Hotel_facilities = ['室内泳池','SPA','商务中心','健身房','停车场','温泉','棋牌室','咖啡房','图书馆','无烟房','室外游泳'];
  const cityOptions = ['室内泳池','SPA','商务中心','健身房','停车场','温泉','棋牌室','咖啡房','图书馆','无烟房','室外游泳'];
  import VDistpicker from "v-distpicker";
  export default {
    name: "hotel_pulish",
    components:{
      VDistpicker
    },
    data(){
      return{
        fileList: [{name: 'famously_1.jpeg', url: 'https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_710x360_86c9a116.jpg'},
                    {name: 'famously_2.jpeg', url: 'https://imgs.qunarzz.com/sight/p0/1911/d1/d1675680d2c2f6b8a3.img.jpg_710x360_d9294b5d.jpg'}
                  ],
        dialogVisible: false,
        addressKeyword: "厦门",
        zoom: 12.8,
        radio: 0,
        date1:'',
        date2:'',
        date3:'',
        facilities_checkAll: false,
        checkedCities: [],
        cities: Hotel_facilities,
        isIndeterminate: true,
        checkAll: false,
        checkedCities2: [],
        cities2: cityOptions,
        isIndeterminate2: true,
        breakfast:0,
        room_count:0,
        form: {
          end: '',
          begin: '',
          message: '',
        },
        location: {
          lng: 116.404,
          lat: 39.915
        },
        src:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
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
        }
      }
    },
    methods:{
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      sel(data) {
        this.citydata = data.province.value + data.city.value + data.area.value;
        console.log(this.citydata);
      },
      handleCheckAllChange(val) {
        this.checkedCities = val ? Hotel_facilities : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.facilities_checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      handleCheckAllChange2(val) {
        this.checkedCities2 = val ? cityOptions : [];
        this.isIndeterminate2 = false;
      },
      handleCheckedCitiesChange2(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities2.length;
        this.isIndeterminate2 = checkedCount > 0 && checkedCount < this.cities2.length;
      }
    }
  }
</script>

<style scoped>
  .el-header{
    margin: 10px;
  }
  .el-main{
    border-radius: 5px;
    border: 1px solid #bfbdbd;
    background-color: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .image {
    width: 100%;
    height: 170px;
    display: block;
  }
  .pulish_info{
    padding: 10px;
    border: 1px solid #B3C0D1;
    background-color: #eaeaea;
  }
  .pulish_detail{
    position: relative;
  }
  /* 地图容器必须设置宽和高属性 */
  .map {
    width: 90%;
    height: 50vh;
    margin: 0px auto;
  }
  /*三角*/
  .info_from{
    position: relative;
    padding:20px;
    background-color: #FFFFFF;
    border: 1px solid #B3C0D1;
    border-radius: 3px;
  }
  .info_from:before{
    box-sizing: content-box;
    width: 0px;
    height: 0px;
    position: absolute;
    top: 23px;;
    left: -16px;
    padding:0;
    border-right: 8px solid #FFFFFF;
    border-top:8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left:8px solid transparent;
    display: block;
    content:'';
    z-index: 12;
  }
  .info_from:after{
    box-sizing: content-box;
    width: 0px;
    height: 0px;
    position: absolute;
    top: 22px;;
    left: -18px;
    padding:0;
    border-right: 9px solid #B3C0D1;
    border-top:9px solid transparent;
    border-bottom:9px solid transparent;
    border-left:9px solid transparent;
    display: block;
    content:'';
    z-index:10
  }
  /*修改滚动条样式*/
  .el-main::-webkit-scrollbar{
    width:5px;
    height:10px;
    cursor: pointer;
    /**/
  }
  .el-main::-webkit-scrollbar-track{
    background: rgb(239, 239, 239);
    border-radius:2px;
  }
  .el-main::-webkit-scrollbar-thumb{
    background: #bfbfbf;
    border-radius:10px;
  }
  .el-main::-webkit-scrollbar-thumb:hover{
    background: #333;
  }
  .el-main::-webkit-scrollbar-corner{
    background: #179a16;
  }
</style>
