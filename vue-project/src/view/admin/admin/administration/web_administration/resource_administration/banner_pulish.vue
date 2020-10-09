<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xtongzhi"> 后台管理</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>资源管理</el-breadcrumb-item>
        <el-breadcrumb-item>广告发布</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="24">
          <span>广告发布</span>
          <el-divider></el-divider>
        </el-col>
        <el-col :span="20" :offset="2">
          <el-form ref="form" :model="form" label-width="80px">
            <el-image
              style="width: 100%; height: 300px"
              :src="src"
              :preview-src-list="srcList">
            </el-image>
            <el-col :span="22" :offset="1" style="margin-top: 20px;">
              <el-form-item label="广告主">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="广告名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="单次费用">
                <el-input v-model="form.name" style="width: 80%;">
                  <template slot="prepend">￥</template>
                  <template slot="append">.00/次</template>
                </el-input>
              </el-form-item>
              <el-form-item label="广告类型">
                <el-select v-model="form.region" placeholder="请选择广告类型">
                  <el-option label="CPM（Cost Per Mille）" value="shanghai"></el-option>
                  <el-option label="CPC（Cost Per Click）" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="上架时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
            </el-col>
          </el-form>
          <el-button style="width: 94%;" type="primary">立即发布</el-button>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "banner_pulish",
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
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        srcList: [
          'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
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
</style>
