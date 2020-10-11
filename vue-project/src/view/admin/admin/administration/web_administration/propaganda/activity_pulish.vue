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
              <!-- 本地预览需要上传处理的图片-->
              <el-row v-if="isShowImgUpload">
                <el-col :span="24">
                  <div style="position:relative;">
                    <el-image
                      :src="form.localUrl"
                      :preview-src-list="[form.localUrl]"
                      style="width:100%;height:400px;"
                      fit="scale-down"
                    ></el-image>
                  </div>
                </el-col>
              </el-row>
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
                    v-model="form.time"
                    type="daterange"
                    align="right"
                    unlink-panels
                    value-format="timestamp"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions">
                  </el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="活动宣传">
                <el-col :span="20" :offset="1">
                  <!-- 图片上传控件-->
                  <el-upload
                    ref="upload"
                    v-if="isShowUpload"
                    class="upload-demo"
                    drag
                    action=""
                    :show-file-list="false"
                    list-type="picture"
                    :auto-upload="false"
                    :on-change="imgSaveToUrl"
                    :accept="'image/*'"
                    :http-request="httpRequest"
                  >
                    <i class="el-icon-upload" style="color:#409EFF"></i>
                    <div class="el-upload__text text">
                      将图片拖到此处，或
                      <em>点击上传</em>
                    </div>
                    <div
                      class="el-upload__tip text"
                      slot="tip"
                    >提示：可支持PNG、JPG、BMP</div>
                  </el-upload>
                </el-col>
              </el-form-item>
              <el-form-item label="活动网址">
                <el-input placeholder="请输入内容" v-model="form.web">
                  <template slot="prepend">Http://</template>
                </el-input>
              </el-form-item>
              <el-form-item label="活动介绍">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
              <el-col :span="24">
                <el-button type="primary" style="width: 100%;" @click="pulish">立即发布</el-button>
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
          time: '',
          web: '',
          desc: '',
          localUrl: '',
          imgName: '',
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
        isShowUpload: true,
        isShowImgUpload: false
      }
    },
    methods: {
      // 错误提示
      alertErr (msg, type) {
        this.$message({
          message: msg,
          type: type
        })
      },
      // 发布活动
      pulish() {
        // 数据有效性判断
        if(this.form.name==''){
          return this.alertErr('请输入活动名称',"error");
        }
        if(this.form.time==''){
          return this.alertErr('请选择活动时间',"error");
        }
        if(this.form.web==''){
          return this.alertErr('请输入活动网址',"error");
        }
        if(this.form.desc==''){
          return this.alertErr('请输入活动详情',"error");
        }
        if(this.form.localUrl==''){
          return this.alertErr('请选择活动图片',"error");
        }
        this.$refs.upload.submit();
      },
      httpRequest(param) {
        const file = param.file;
        // 根据后台需求数据格式
        const form = new FormData();
        // 文件对象
        form.append("file", file);
        // 利用axios封装的请求
        this.$axios.post('/admin/AdminActivity/pulish',form).then(res => {
          this.loading = false
          if (res.data.code === 0) {
            this.$message.error('系统错误，上传失败')
          } else {
            // this.$message({message: '上传成功', type: 'success'})
            this.form.imgName = res.data.fileName
            this.saveInfo()
          }
        }).catch((res) => {
          this.$message({message: '上传失败，请检查网络是否流畅', type: 'error'})
          this.$message({message: '请刷新页面重试', type: 'error'})
        })
      },
      // 保存数据
      saveInfo() {
        var that = this;
        this.$axios.post('/admin/AdminActivity/savePulish', { formInfo: that.form }).then(res => {
          if(res.data.code=='20421'){
            this.alertErr(res.data.msg,"success");
            this.$router.push("/admin/activityAdministration");
          }
          this.alertErr(res.data.msg,"error");
        })
      },
      // 图片预览
      imgSaveToUrl(event) {
        // 获取上传图片的本地URL，用于上传前的本地预览
        var URL = null;
        if (window.createObjectURL != undefined) {
          // basic
          URL = window.createObjectURL(event.raw);
        } else if (window.URL != undefined) {
          // mozilla(firefox)
          URL = window.URL.createObjectURL(event.raw);
        } else if (window.webkitURL != undefined) {
          // webkit or chrome
          URL = window.webkitURL.createObjectURL(event.raw);
        }
        // 转换后的地址为 blob:http://xxx/7bf54338-74bb-47b9-9a7f-7a7093c716b5
        this.form.localUrl = URL;
        this.isShowImgUpload = true;//呈现本地预览组件
        // this.isShowUpload = false;//隐藏上传组件
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
