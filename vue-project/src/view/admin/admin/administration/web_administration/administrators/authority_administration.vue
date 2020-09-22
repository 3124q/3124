<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xtongzhi"> 后台管理</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
        <el-breadcrumb-item>管理员权限</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="职位名称">
        </el-table-column>
        <el-table-column
          prop="detail"
          label="职位描述">
        </el-table-column>
        <el-table-column
          prop="operate"
          label="操作">
          <template slot="header" slot-scope="scope">
            操作<i class="add_role el-icon-circle-plus-outline"></i>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini">修改权限</el-button>
            <el-button
              size="mini">修改职位</el-button>
            <el-button
              size="mini">移出职位</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "authority_administration",
    data() {
      return {
        tableData: [{
          name: '超级管理员',
          detail: '网站权限最高的管理员'
        }, {
          name: '经理',
          detail: '查看报表'
        }, {
          name: '商家',
          detail: '发布景点/酒店/活动'
        }, {
          name: '客服',
          detail: '负责在线解决用户遇到的问题'
        }]
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
  .add_role{
    margin: 5px;
    font-size: 130%;
  }
</style>
