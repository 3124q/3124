<template>
    <div id="PersonalCenterMyhotel">
      <div class="Info-title">
        <div class="basic-info">
          我的酒店
        </div>
      </div>
      <el-tabs  @tab-click="handleClick">
        <el-tab-pane label="全部" name="first"></el-tab-pane>
        <el-tab-pane label="未入住" name="second"></el-tab-pane>
        <el-tab-pane label="已入住" name="third"></el-tab-pane>
        <el-tab-pane label="退款" name="fourth"></el-tab-pane>
      </el-tabs>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="订单号"
          width="150">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="酒店"
          width="150">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="预订日期"
          width="100">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="预订价格"
          width="80">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="状态"
          width="80">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="姓名"
          width="80">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
        name: "PersonalCenterMyhotel"
    }
</script>

<style scoped>
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
  .el-tab-pane{
    display: ;
  }
</style>
