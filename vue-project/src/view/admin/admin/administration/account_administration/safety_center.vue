<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xpersonal"> 账户管理</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>安全中心</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <el-table
        :page-size="pageSize"
        :current-page="currentPage"
        :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        style="width: 100%">
        <el-table-column
          label="登录时间"
          prop="date">
        </el-table-column>
        <el-table-column
          label="登录地址"
          prop="address">
        </el-table-column>
        <el-table-column
          align="right">
          <template slot="header" slot-scope="scope">
            <el-button
              size="mini">冻结账号</el-button>
            <el-button
              size="mini">修改密码</el-button>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "safety_center",
    data() {
      return {
        total: 9,
        pageSize: 5,
        currentPage: 1,
        tableData: [{
          date: '2020-9-20 00:00',
          name: '王小虎',
          address: '117.28.132.83'
        }, {
          date: '2020-9-20 01:00',
          name: '王小虎',
          address: '117.28.132.83'
        }, {
          date: '2020-9-20 02:00',
          name: '王小虎',
          address: '117.28.132.83'
        }, {
          date: '2020-9-20 03:00',
          name: '王小虎',
          address: '117.28.132.83'
        }, {
          date: '2020-9-20 04:00',
          name: '王小虎',
          address: '117.28.132.83'
        }, {
          date: '2020-9-20 05:00',
          name: '王小虎',
          address: '117.28.132.83'
        }, {
          date: '2020-9-20 06:00',
          name: '王小虎',
          address: '117.28.132.83'
        }, {
          date: '2020-9-20 07:00',
          name: '王小虎',
          address: '117.28.132.83'
        }, {
          date: '2020-9-20 08:00',
          name: '王小虎',
          address: '117.28.132.83'
        }]
      }
    },
    methods: {
      handleSizeChange(val) {
        this.pageSize = val
      },
      handleCurrentChange(val) {
        this.currentPage = val
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
