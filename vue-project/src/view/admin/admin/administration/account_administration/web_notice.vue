<template>
  <div>
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
        <el-tabs :tab-position="tabPosition" style="height: 100%;"type="border-card"  v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="未读消息" name="1" >
            <el-table
              :data="complaintData"
              style="width: 100%"
            v-loading=loading
            >
              <el-table-column
                label="内容"
                width="300">
                <template slot-scope="scope">
                  <span style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{ scope.row.content }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="日期">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.sendtime }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="投诉人">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.contact }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="haveread(scope.row.complaintID)">标为已读</el-button>
                  <el-button
                    size="mini"
                    @click="getdetail(scope.row.complaintID)">查看详情</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-row style="margin-top: 20px;">
              <el-button class="read_btn" type="primary">全部标为已读</el-button>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="已读消息" name="2">
            <el-table
              :data="complaintData"
              style="width: 100%"
              v-loading=loading>
              <el-table-column
                label="内容"
                width="300">
                <template slot-scope="scope" style="white-space: nowrap">
                  <span style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{ scope.row.content }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="日期">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.sendtime }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="投诉人">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.contact }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">

                  <el-button
                    size="mini"
                    @click="getdetail(scope.row.complaintID)">查看详情</el-button>

                  <el-button
                    size="mini"
                    @click="deletecomplaint(scope.row.complaintID)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="消息回收站" name="3">
            <el-table
              :data="complaintData"
              style="width: 100%"
              v-loading=loading>
              <el-table-column
                label="内容"
                width="300">
                <template slot-scope="scope" style="white-space: nowrap">
                  <span style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{ scope.row.content }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="日期">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.sendtime }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="投诉人">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.contact }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">

                  <el-button
                    size="mini"
                    @click="getdetail(scope.row.complaintID)">查看详情</el-button>

                  <el-button
                    size="mini"
                    @click="clearcomplaint(scope.row.complaintID)">彻底删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-main>
  </el-container>
  <el-dialog
    title="投诉详情"
    :visible.sync="detaildialog"
    width="30%"
    :before-close="handleClose">
    <el-card class="box-card">
      <ul>
        <li>投诉类型：<span>{{detailData.type}}</span></li>
        <li>投诉账号：<span>{{detailData.account}}</span></li>
        <li>投诉人：<span>{{detailData.contact}}</span></li>
        <li>投诉人联系方式：<span>{{detailData.phonenum}}</span></li>
        <li>投诉人邮箱：<span>{{detailData.email}}</span></li>
        <li>投诉内容：<span>{{detailData.content}}</span></li>
        <li>投诉时间：<span>{{detailData.sendtime}}</span></li>
      </ul>
    </el-card>
    <span slot="footer" class="dialog-footer">
    <el-button @click="detaildialog = false">取 消</el-button>
    <el-button type="primary" @click="detaildialog = false">确 定</el-button>
  </span>
  </el-dialog>
    </div>

</template>

<script>
  export default {
    name: "notice",
    data() {
      return {
        loading:false,
        detaildialog:false,
        activeName:"1",
        tabPosition: 'left',
        complaintData: [],
        detailData:{
        }
      };
    },
    mounted() {

    },
    created() {
      this.loading=true;
      var that=this;
      this.$axios.get("admin/getunread").then(res=>{
          console.log(res.data);
        this.loading=false;
          that.complaintData=res.data;
      })
      },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
        if(tab.name == '1'){
          this.getunread();
        }else if (tab.name=='2'){
          this.getread();
        }else if(tab.name=='3'){
          this.getdelete();
        }
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      getdetail(id){
        this.detaildialog="true";
        var that=this;
        this.$axios.post("admin/getdetail",{complaintID:id}).then(
          res=>{
            that.detailData=res.data[0];
          }
        );
      },
      haveread(id){
        this.loading=true;
        var that=this;
        this.$axios.post("admin/haveread",{complaintID:id}).then(
          res=>{
            that.detailData=res.data;
            this.loading=false;
          }
        );
      },
      deletecomplaint(id){
        this.loading=true;
        var that=this;
        this.$axios.post("admin/deletecomplaint",{complaintID:id}).then(
          res=>{
            that.detailData=res.data;
            this.loading=false;
          }
        );
      },
      clearcomplaint(id){
        this.loading=true;
        var that=this;
        this.$axios.post("admin/clearcomplaint",{complaintID:id}).then(
          res=>{
            that.detailData=res.data;
            this.loading=false;
          }
        );
      },
      getunread(){
        this.loading=true;
        var that=this;
        this.$axios.get('admin/getunread').then(
          res=>{
            that.complaintData=res.data;
            this.loading=false;
          }
        )
      },
      getread(){
        this.loading=true;
        var that=this;
        this.$axios.get('admin/getread').then(
          res=>{
            that.complaintData=res.data;
            this.loading=false;
          }
        )
      },
      getdelete(){
        this.loading=true;
        var that=this;
        this.$axios.get('admin/getdelete').then(
          res=>{
            that.complaintData=res.data;
            this.loading=false;
          }
        )
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
    text-align: left;
  }
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
