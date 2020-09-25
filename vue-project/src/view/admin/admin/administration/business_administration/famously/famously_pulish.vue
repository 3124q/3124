<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xpersonal"> 后台管理</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>景点管理</el-breadcrumb-item>
        <el-breadcrumb-item>景点发布</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <div>
        <span class="el-title">景点发布</span>
        <el-divider></el-divider>
        <el-row>
          <el-col class="pulish_info" :span="7">
            <el-card :body-style="{ padding: '0px' }" shadow="never">
              <img src="https://youimg1.c-ctrip.com/target/tg/878/257/036/6b6fb9e7db6543b282a314e5060d5fc3.jpg" class="image">
              <div style="padding: 14px;">
                <span>布拉诺岛</span>
                <el-divider style="margin: 10px;"></el-divider>
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
                <el-divider style="margin: 10px;"></el-divider>
                <el-table
                  :data="tableData"
                  stripe
                  style="width: 100%">
                  <el-table-column
                    prop="date"
                    label="操作">
                    <template slot-scope="scope">
                      <el-popconfirm title="您确定删除吗？">
                        <el-button slot="reference">删除</el-button>
                      </el-popconfirm>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="景点信息">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <p>景点名称: {{ scope.row.name }}</p>
                        <p>景点简介: {{ scope.row.address }}</p>
                        <el-image
                          style="width: 100px; height: 80px"
                          :src= scope.row.image_url
                          fit="scale-down"></el-image>
                        <div slot="reference" class="name-wrapper">
                          <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-card>
          </el-col>
          <el-col class="pulish_detail" :span="16" :offset="1">
            <el-form ref="form" label-width="120px" size="mini" class="my_info info_from" label-position="left">
              <span>景点信息</span>
              <el-divider></el-divider>
              <el-form-item label="景点名称：">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="景点别名：">
                <el-input placeholder="方便游客搜索"></el-input>
              </el-form-item>
              <el-row style="margin-bottom: 10px;">
                <el-col :span="3">
                  <el-form-item label="封面图："></el-form-item>
                  <el-row style="margin-top: 20px;">
                    <el-button size="mini" type="primary" plain>更改封面图</el-button>
                  </el-row>
                </el-col>
                <el-col :span="19" :offset="2">
                  <div class="block">
                    <el-image :src="src"></el-image>
                  </div>
                </el-col>
              </el-row>
              <el-form-item label="景区开放时间：">
                <el-col :span="11">
                  <el-time-picker placeholder="选择时间" v-model="form.begin" style="width: 100%;"></el-time-picker>
                </el-col>
                <el-col class="line" :span="2">—</el-col>
                <el-col :span="11">
                  <el-time-picker placeholder="选择时间" v-model="form.end" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-row>
                <el-form-item
                  v-for="(domain, index) in dynamicValidateForm.domains"
                  :label="'景区门票_' + (index+1)"
                  :key="domain.key"
                  :prop="'domains.' + index + '.value'"
                  :rules="{
                      required: true, message: '信息不能为空', trigger: 'blur'
                    }"
                >
                  <el-col :span="18">
                    <el-col :span="10">
                      <el-input v-model="domain.value" placeholder="请输入门票类型"></el-input>
                    </el-col>
                    <el-col :span="10" :offset="2">
                      <el-input v-model="domain.value" placeholder="请输入入场票价"></el-input>
                    </el-col>
                  </el-col>
                  <el-col :span="6">
                    <el-button @click.prevent="removeDomain(domain)">删除</el-button>
                  </el-col>
                </el-form-item>
              </el-row>
              <el-form-item>
                <el-button @click="addDomain" style="float: left;">添加门票类型</el-button>
              </el-form-item>
              <el-row>
                <el-col :span="3">
                  <el-form-item label="景区地点："></el-form-item>
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
              <el-form-item label="服务热线：">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="景区简介：">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="景点详情：">
                <el-input type="textarea" v-model="form.desc"></el-input>
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
  import VDistpicker from 'v-distpicker';
  export default {
    name: "famously_pulish",
    components:{
      VDistpicker
    },
    data() {
      return {
        form: {
          end: '',
          begin: '',
          message: '',
        },
        location: {
          lng: 116.404,
          lat: 39.915
        },
        zoom: 12.8,
        addressKeyword: "厦门",
        dialogVisible: false,
        currentDate: new Date(),
        tableData: [{
          image_url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          image_url: 'http://pic39.photophoto.cn/20160619/1155116336321787_b.jpg',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          image_url: 'http://pic40.photophoto.cn/20160718/1155116325321184_b.jpg',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          image_url: 'http://sc.jb51.net/uploads/allimg/150710/14-150G0150KV52.jpg',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        fileList: [{name: 'famously_1.jpeg', url: 'https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_710x360_86c9a116.jpg'}, {name: 'famously_2.jpeg', url: 'https://imgs.qunarzz.com/sight/p0/1911/d1/d1675680d2c2f6b8a3.img.jpg_710x360_d9294b5d.jpg'}],
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
        }
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      },
      sel(data) {
        this.citydata = data.province.value + data.city.value + data.area.value;
        console.log(this.citydata);
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
    top: 22px;
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
