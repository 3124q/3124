<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xtongzhi"> 后台管理</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>商家管理</el-breadcrumb-item>
        <el-breadcrumb-item>商家审核</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        :default-sort = "{prop: 'date', order: 'descending'}"
        style="width: 100%">
        <el-table-column
          fixed
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          fixed
          label="编号"
          prop="id"
          sortable
          width="200">
        </el-table-column>
        <el-table-column
          label="企业名称"
          prop="name"
          width="200">
        </el-table-column>
        <el-table-column
          label="企业管理员"
          prop="administor"
          width="200">
        </el-table-column>
        <el-table-column
          label="审核状态"
          prop="state"
          width="200">
        </el-table-column>
        <el-table-column
          label="审核内容"
          prop="detail"
          width="200">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>公司: {{ scope.row.name }}</p>
              <p>管理员: {{ scope.row.administor }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.administor }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          label="审核时间"
          prop="time"
          sortable
          width="200">
        </el-table-column>
        <el-table-column
          label="审核人员"
          prop="examine_user"
          width="200">
        </el-table-column>
        <el-table-column label="审核操作" fixed="right" width="200">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)">通过</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">驳回</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row style="margin-top: 15px;">
        <el-button
          size="mini"
          type="primary">批量通过</el-button>
        <el-button
          size="mini"
          type="danger">批量驳回</el-button>
      </el-row>
      <el-row style="margin-top: 15px;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "business_examine",
    data() {
      return {
        total: 4,
        pageSize: 5,
        currentPage: 1,
        search: '',
        tableData: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          administor: '张三',
          state: '已通过',
          time: '2020/9/21',
          examine_user: 'Admin'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          administor: '李四',
          state: '未审核',
          time: '2020/9/21',
          examine_user: 'Admin'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          administor: '王五',
          state: '已驳回',
          time: '2020/9/21',
          examine_user: 'Admin'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          administor: '赵六',
          state: '已驳回',
          time: '2020/9/21',
          examine_user: 'Admin'
        }]
      }
    },
    methods: {
      handleSizeChange(val) {
        this.pageSize = val
      },
      handleCurrentChange(val) {
        this.currentPage = val
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
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
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
