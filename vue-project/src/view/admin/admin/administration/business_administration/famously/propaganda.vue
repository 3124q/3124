<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xtongzhi"> 后台管理</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>景点管理</el-breadcrumb-item>
        <el-breadcrumb-item>景点宣传</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>

    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "propaganda"
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
