<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xpersonal"> 账户管理</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>基本信息</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <div>
        <span class="el-title">我的信息</span>
        <el-divider></el-divider>
        <el-form ref="form" label-width="80px" size="mini" class="my_info">
          <el-row>
            <el-col :span="16">
              <el-form-item label="用户名">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="我的账号">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col class="head_box" :span="8">
              <el-avatar class="head_image" :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
              <el-button size="mini" type="primary">修改头像<i class="el-icon-upload el-icon--right"></i></el-button>
            </el-col>
          </el-row>
          <el-form-item label="我的职位">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="sizeForm.resource" size="medium">
              <el-radio border label="男"></el-radio>
              <el-radio border label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input></el-input>
          </el-form-item>
          <el-button type="primary" plain>修改信息</el-button>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "personal_center",
    data() {
      return {
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
    width: 40%;
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
