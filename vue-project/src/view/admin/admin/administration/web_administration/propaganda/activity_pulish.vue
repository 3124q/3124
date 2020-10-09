<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xpersonal"> 推广活动</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>平台活动</el-breadcrumb-item>
        <el-breadcrumb-item>活动发布</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="24">
          <span>活动发布</span>
          <el-divider></el-divider>
        </el-col>
        <el-col :span="24">
          <el-col :span="9" :offset="2">
            <span class="activity_pulish_propaganda_img">活动宣传图</span>
            <el-col :span="20" :offset="4">
              <el-image
                style="width: 100%"
                :src="url"
                :preview-src-list="srcList">
              </el-image>
            </el-col>
          </el-col>
          <el-col :span="13" style="padding: 10px 50px;">
            <el-col :span="24">
              <span class="activity_pulish_propaganda_title">活动信息</span>
            </el-col>
            <el-form ref="form" :model="form" label-width="80px" style="margin-top: 40px;">
              <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-col :span="20" :offset="1">
                  <el-date-picker
                    v-model="value2"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions">
                  </el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="活动宣传">
                <el-col :span="20" :offset="1">
                  <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  </el-upload>
                </el-col>
              </el-form-item>
              <el-form-item label="活动网址">
                <el-input placeholder="请输入内容" v-model="input1">
                  <template slot="prepend">Http://</template>
                </el-input>
              </el-form-item>
              <el-form-item label="活动介绍">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
              <el-col :span="24">
                <el-button type="primary" style="width: 100%;">立即发布</el-button>
              </el-col>
            </el-form>
          </el-col>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "activity_pulish",
    data() {
      return {
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
        input1: '',
        value1: '',
        value2: '',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601403220926&di=a7ecc3d69e43e925d23814118d277f9b&imgtype=0&src=http%3A%2F%2Fimg.daimg.com%2Fuploads%2Fallimg%2F181007%2F1-1Q00H30014.jpg',
        srcList: [
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601403220926&di=a7ecc3d69e43e925d23814118d277f9b&imgtype=0&src=http%3A%2F%2Fimg.daimg.com%2Fuploads%2Fallimg%2F181007%2F1-1Q00H30014.jpg',
        ]
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
  .activity_pulish_propaganda_img{
    color: #333;
    float: left;
    margin: 10px 40px;
    text-align: left;
    padding: 0 8px 0 10px;
    font-size: 16px;
    font-weight: bold;
    vertical-align: middle;
    border-left: solid 3px #0088a4;
  }
  .activity_pulish_propaganda_title{
    color: #333;
    float: left;
    margin: 3px 0px;
    text-align: left;
    padding: 0 8px 0 10px;
    font-size: 16px;
    font-weight: bold;
    vertical-align: middle;
    border-left: solid 3px #0088a4;
  }
</style>
