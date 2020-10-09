<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xpersonal"> 平台通知</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>发布系统消息</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <span class="el-title">系统消息</span>
      <el-divider></el-divider>
      <el-col :span="14" :offset="5">
        <el-form ref="form" label-width="80px">
          <el-form-item label="消息对象">
            <el-select v-model="form.region" placeholder="请选择接收对象">
              <el-option label="网站全员" value="1"></el-option>
              <el-option label="管理员全员" value="2"></el-option>
              <el-option label="商家全员" value="3"></el-option>
              <el-option label="用户全员" value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="消息标题">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="消息内容">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-col :span="24">
            <el-button type="primary" style="width: 100%">立即发布</el-button>
          </el-col>
        </el-form>
      </el-col>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "notice_pulish",
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
        }
      }
    },
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
