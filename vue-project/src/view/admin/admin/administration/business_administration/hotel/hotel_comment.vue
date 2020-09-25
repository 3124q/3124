<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xtongzhi"> 后台管理</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>景点管理</el-breadcrumb-item>
        <el-breadcrumb-item>景点评论</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="评论内容">
                <span>{{ props.row.content }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="日期："
          prop="date">
        </el-table-column>
        <el-table-column
          label="评论人："
          prop="name">
        </el-table-column>
        <el-table-column
          label="账号"
          prop="account">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="标签"
          width="100"
          :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag === '家' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini">编辑</el-button>
            <el-button
              size="mini"
              type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
        name: "hotel_comment",
      data() {
        return {
          currentPage: 1,
          total: 4,
          pageSize: 5,
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            account: 'HX200313',
            tag: '家',
            content:'真好'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            account: 'HX200313',
            tag: '公司',
            content:'真好'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            account: 'HX200313',
            tag: '家',
            content:'真好'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            account: 'HX200313',
            tag: '公司',
            content:'真好'
          }, {
              date: '2016-05-03',
              name: '王小虎',
              account: 'HX200313',
              tag: '公司',
              content:'真好'
            }]
        }
      },
      methods: {
        resetDateFilter() {
          this.$refs.filterTable.clearFilter('date');
        },
        clearFilter() {
          this.$refs.filterTable.clearFilter();
        },
        formatter(row, column) {
          return row.address;
        },
        filterTag(value, row) {
          return row.tag === value;
        },
        filterHandler(value, row, column) {
          const property = column['property'];
          return row[property] === value;
        },
        handleSizeChange(val) {
          this.pageSize = val
        },
        handleCurrentChange(val) {
          this.currentPage = val
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
</style>
