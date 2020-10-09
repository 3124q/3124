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
        ref="filterTable"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="评论用户"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="评论时间"
          sortable
          width="180"
          column-key="date"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="评论内容"
          :formatter="formatter">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="评分"
          width="100"
          :filters="[{ text: '差评（1星）', value: '差评（1星）' }, { text: '良好(2-4星)', value: '良好(2-4星)' }, { text: '好评(5星)', value: '好评(5星)' }]"
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
              size="mini">回复</el-button>
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
    name: "famously_comment",
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
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
