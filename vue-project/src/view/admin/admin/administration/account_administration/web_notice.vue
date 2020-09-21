<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xtongzhi"> 系统通知</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>已读消息</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <el-tabs :tab-position="tabPosition" style="height: 100%;">
        <el-tab-pane label="已读消息" name="first">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="内容"
              width="600">
              <template slot-scope="scope">
                <span>{{ scope.row.message }}</span>
              </template>
            </el-table-column>
            <el-table-column
            label="日期">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">标为已读</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-row style="margin-top: 20px;">
            <el-button class="read_btn" type="primary">全部标为已读</el-button>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="未读消息" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="消息回收站" name="third">角色管理</el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "notice",
    data() {
      return {
        tabPosition: 'left',
        tableData: [{
          date: '2016-05-02',
          message: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
        }, {
          date: '2016-05-04',
          message: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
        }, {
          date: '2016-05-01',
          message: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
        }, {
          date: '2016-05-03',
          message: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
        }]
      };
    },
    methods: {
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
    overflow: auto;
    border-radius: 5px;
    border: 1px solid #bfbdbd;
    background-color: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .read_btn{
    float: left;
  }
</style>
