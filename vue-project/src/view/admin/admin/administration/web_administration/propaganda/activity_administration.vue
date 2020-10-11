<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xpersonal"> 推广活动</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>平台活动</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <el-table
        ref="filterTable"
        :data="activity"
        style="width: 100%">
        <el-table-column
          prop="activity_name"
          label="活动名称"
          column-key="date"
        >
        </el-table-column>
        <el-table-column
          label="宣传图片"
        >
          <el-image
            style="width: 90px; height: 100px"
            :src="url">
          </el-image>
        </el-table-column>
        <el-table-column
          prop="activity_beginTime"
          sortable
          label="开始时间"
          :formatter="dateFormat">
        </el-table-column>
        <el-table-column
          prop="activity_endTime"
          sortable
          label="结束时间"
          :formatter="dateFormat">
        </el-table-column>
        <el-table-column
          prop="activity_webUrl"
          label="活动链接">
        </el-table-column>
        <el-table-column
          prop="activity_details"
          label="活动简介"
          width="340">
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button
              size="mini">编辑</el-button>
            <el-button
              size="mini"
              type="danger">移除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
  import moment from 'moment'
  export default {
    name: "activity_administration",
    data() {
      return {
        activity: [],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
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
    mounted:function(){
      // 进入页面即需要触发的函数
      this.getActivity();
    },
    methods: {
      // 错误提示
      alertErr (msg, type) {
        this.$message({
          message: msg,
          type: type
        })
      },
      // element-ui表格中的数据转换为时间戳
      dateFormat(row, column) {
        var date = parseInt(row[column.property]);
        if (date == undefined) {
          return "";
        }
        var moment = require("moment");
        return moment(date).format("YYYY-MM-DD");
      },
      getActivity: function () {
        this.$axios.post('/admin/AdminActivity/getActivity').then(res => {
          if(res.data.code=="20431"){
            this.activity = res.data.data;
            console.log(this.activity);
          }else{
            this.activity = [];
          }
        })
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
