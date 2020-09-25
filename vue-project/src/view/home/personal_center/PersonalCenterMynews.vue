<template>
  <div id="PersonalCenterMynews">

      <div class="Info-title">
        <div class="basic-info">
          我的消息
        </div>
      </div>

    <el-main>

      <el-tabs :tab-position="tabPosition" style="height: 100%;">
        <el-tab-pane label="已读消息" name="first">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="内容"
              width="300">
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
                  @click="handleEdit(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

        </el-tab-pane>
        <el-tab-pane label="未读消息" name="second">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="内容"
              width="300">
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
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-row style="margin-top: 20px;">
            <el-button class="read_btn" type="primary">全部标为已读</el-button>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="消息回收站" name="third"> <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="内容"
            width="300">
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
                @click="handleEdit(scope.$index, scope.row)">彻底删除</el-button>
            </template>
          </el-table-column>
        </el-table>
          <el-row style="margin-top: 20px;">
            <el-button class="read_btn" type="primary">全部清空</el-button>
          </el-row></el-tab-pane>
      </el-tabs>
    </el-main>
  </div>
</template>

<script>
    export default {
      name: "PersonalCenterMynews",
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

  el-header{
    margin: 10px;
  }
  .el-main{
    overflow: auto;
    border-radius: 5px;
    border: 1px solid #bfbdbd;
    background-color: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .Info-title{
    width: 100%;
    height: 46px;
    border-bottom: 1px solid #ddd;
  }
  .basic-info{
    float: left;
    height: 100%;
    line-height: 46px;
    font-size: 16px;
    font-weight: 600;
  }
  .read_btn{
    float: left;
  }
</style>
