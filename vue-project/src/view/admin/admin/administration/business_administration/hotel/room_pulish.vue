<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xpersonal"> 后台管理</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>酒店管理</el-breadcrumb-item>
        <el-breadcrumb-item>房间发布</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <span class="el-title">房间发布</span>
      <el-divider></el-divider>
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
          <span>发布房间</span>
          <el-divider></el-divider>
          <el-form-item label="房间名称：">
            <el-input></el-input>
          </el-form-item>
          <el-row style="text-align: left">
            <el-col :lg="8" :xl="8">
              <div class="block" >
                <span class="demonstration" >床数：</span>
                <el-input-number v-model="room_count" :min="1"></el-input-number>
              </div>
            </el-col>
            <el-col :lg="16" :xl="16" style="line-height: 40px">
              <div class="block" >
                <span class="demonstration" >床型：</span>
                <el-radio v-model="Bed_type" label="1">大床</el-radio>
                <el-radio v-model="Bed_type" label="2">双人床</el-radio>
                <el-radio v-model="Bed_type" label="3">双人床</el-radio>
              </div>
            </el-col>
          </el-row>
          <el-form-item label="早餐:" style="margin-top: 10px;text-align: left;">
            <el-radio-group v-model="breakfast">
              <el-radio :label="1">无</el-radio>
              <el-radio :label="2">
                有
                <el-input-number v-model="breakfast_num" :min="1"></el-input-number>
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="入住人数:" style="margin-top:10px;text-align: left">
            <el-input-number v-model="check_in_num " :min="1"></el-input-number>
          </el-form-item>
          <el-form-item label="政策：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="面积：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="价格：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="政策：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="房间设施" style="margin-top: 10px; text-align: left;">
            <el-checkbox :indeterminate="isIndeterminate" v-model="facilities_checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="取消方式" style="margin-top: 10px; text-align: left;">
            <div class="block" >
              <el-radio v-model="Bed_type" label="1">免费取消</el-radio>
              <el-radio v-model="Bed_type" label="2">取消扣全款</el-radio>
              <el-radio v-model="Bed_type" label="3">30分钟免费取消</el-radio>
            </div>
          </el-form-item>
          <el-divider></el-divider>
          <el-button type="primary" plain style="width: 90%;">提交信息</el-button>
          <el-divider></el-divider>
        </el-form>
      </el-col>
    </el-main>
  </el-container>
</template>

<script>
  const Hotel_facilities = ['室内泳池','SPA','商务中心','健身房','停车场','温泉','棋牌室','咖啡房','图书馆','无烟房','室外游泳'];
    export default {
        name: "room_pulish",
      data(){
          return{
            fileList: [{name: 'famously_1.jpeg', url: 'https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_710x360_86c9a116.jpg'},
              {name: 'famously_2.jpeg', url: 'https://imgs.qunarzz.com/sight/p0/1911/d1/d1675680d2c2f6b8a3.img.jpg_710x360_d9294b5d.jpg'}
            ],
            Bed_type:0,
            room_count:0,
            breakfast:0,
            breakfast_num:0,
            check_in_num:0,
            facilities_checkAll: false,
            checkedCities: [],
            cities: Hotel_facilities,
            isIndeterminate: true,
          }
      },
      methods:{
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
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
  .pulish_info{
    padding: 10px;
    border: 1px solid #B3C0D1;
    background-color: #eaeaea;
  }
  .image {
    width: 100%;
    height: 170px;
    display: block;
  }
  .pulish_detail{
    position: relative;
  }
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
