<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xpersonal"> 后台管理</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
        <el-breadcrumb-item>新增管理员</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <div>
        <span class="el-title">新增管理员</span>
        <el-divider></el-divider>
        <el-form ref="form" label-width="120px" size="mini" class="my_info" label-position="left">
          <el-row>
            <el-form-item label="用户名">
              <el-input></el-input>
            </el-form-item>
            <el-col :span="16">
              <el-form-item label="账号">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col class="head_box" :span="8">
              <el-avatar class="head_image" :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
              <el-button size="mini" type="primary">上传头像<i class="el-icon-upload el-icon--right"></i></el-button>
            </el-col>
          </el-row>
          <el-form-item label="管理员职位">
            <el-select v-model="form.region" placeholder="请选择管理员职位">
              <el-option label="超级管理员" value="1"></el-option>
              <el-option label="经理" value="2"></el-option>
              <el-option label="商家" value="3"></el-option>
              <el-option label="客服" value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="管理员性别">
            <el-radio-group v-model="sizeForm.resource" size="medium">
              <el-radio border label="男"></el-radio>
              <el-radio border label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input></el-input>
          </el-form-item>
          <el-button type="primary" plain>添加管理员</el-button>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "new_administrator",
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
        sizeForm: {
          name: '',
          region: '',
        }
      };
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
  .my_info{
    width: 45%;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .head_box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .head_image{
    margin: 5px;
  }
</style>
