<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xtongzhi"> 后台管理</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>资源管理</el-breadcrumb-item>
        <el-breadcrumb-item>广告管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <el-table
        :data="tableData">
        <el-table-column
          prop="date"
          label="编号">
        </el-table-column>
        <el-table-column
          prop="date"
          label="发布时间">
        </el-table-column>
        <el-table-column label="广告信息">
          <el-table-column
            prop="name"
            label="广告主">
          </el-table-column>
          <el-table-column
            prop="name"
            label="广告名称">
          </el-table-column>
          <el-table-column
            prop="name"
            label="广告类型">
          </el-table-column>
          <el-table-column label="广告费用">
            <el-table-column
              prop="province"
              label="广告位单价">
            </el-table-column>
            <el-table-column
              prop="city"
              label="广告收费类型">
            </el-table-column>
            <el-table-column
              prop="address"
              label="总费用">
            </el-table-column>
          </el-table-column>
        </el-table-column>
        <el-table-column label="操作" width="160px">
          <template slot-scope="scope">
            <el-button
              size="mini">编辑</el-button>
            <el-button
              size="mini"
              type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "banner_administration",
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  };
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
