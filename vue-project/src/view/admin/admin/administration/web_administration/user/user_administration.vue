<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xtongzhi"> 后台管理</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <el-table
        :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        :default-sort = "{prop: 'date', order: 'descending'}"
        style="width: 100%"
        v-loading="loading">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="用户账号">
                <span>{{ props.row.userAcc }}</span>
              </el-form-item>
              <el-form-item label="用户昵称">
                <span>{{ props.row.userName }}</span>
              </el-form-item>
              <el-form-item label="姓名">
                <span>{{ props.row.userFullname }}</span>
              </el-form-item>
              <el-form-item label="性别">
                <span>{{ props.row.userSex }}</span>
              </el-form-item>
              <el-form-item label="生日">
                <span>{{ props.row.userBirthday }}</span>
              </el-form-item>
              <el-form-item label="常住地">
                <span>{{ props.row.userAddress }}</span>
              </el-form-item>
              <el-form-item label="手机号">
                <span>{{ props.row.userPhoneNum }}</span>
              </el-form-item>
              <el-form-item label="邮箱">
                <span>{{ props.row.userEmail }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="用户 ID"
          prop="userID"
          sortable>
        </el-table-column>
        <el-table-column
          label="用户账号"
          prop="userAcc">
        </el-table-column>
        <el-table-column
          label="用户状态"
          prop="userState">
        </el-table-column>
        <el-table-column label="操作">
          <template slot="header" slot-scope="scope">
            操作
            <el-input
              style="float: right;width: 85%;"
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
            <el-button
              size="mini"
              @click="searchuser">搜索</el-button>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="primary"
              v-on:click="open(scope.row.userID)">{{buttonState}}</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">注销</el-button>
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
    name: "user_administration",
    data() {
      return {
        buttonState:"",
        total: 0,
        pageSize: 5,
        currentPage: 1,
        search: '',
        loading: false,
        tableData:[],
      }
    },
    mounted() {
      this.loading=true
    },
    created() {
      var that=this;
      this.$axios.get("admin/userlist").then(
        res=>{
          that.loading=false;
          console.log(res.data);
          that.tableData=res.data;
          that.total=res.data.length;
          for (var i=0;i<res.data.length;i++){
            if (res.data[i].userState=="正常"){
              that.buttonState="禁用";
            }else{
              that.buttonState="解锁"
            }
          }

        }
      )
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
      },
      searchuser(){
        var that=this;
        that.loading=true;
        this.$axios.post("admin/searchuser",{key:that.search}).then(res=>{
          if (res.data.code==1000){
            that.loading=false;
            console.log(res.data);
            that.tableData=res.data.data;
            that.total=res.data.data.length;
          }else{
            that.loading=false;
            alert(res.data.msg);
          }
        })
      },
      open(id) {
        var that=this;
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '您的操作将限制该用户的所有操作 '),
            h('i', { style: 'color: teal' }, '是否继续？')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              this.$axios.post("admin/banuser",{"userID":id}).then(
                res=>{
                  console.log(res);
                  instance.confirmButtonLoading = false;
                  alert(res.data.msg);

                  console.log(res.data.code);
                  if (res.data.code=="1000"){
                    done();
                    for (var i=0;i<res.data.data.length;i++){
                      if (res.data.data[i].userState=="正常"){
                        that.buttonState="禁用";
                      }else{
                        that.buttonState="解锁"
                      }
                    }

                    that.tableData=res.data.data;
                  }
                }
              );
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      },
      // banuser(id){
      //   var that=this
      // }
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
