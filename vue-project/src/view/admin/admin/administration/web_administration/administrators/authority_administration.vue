<template>
  <div>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xtongzhi"> 后台管理</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
        <el-breadcrumb-item>管理员权限</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        border
        v-loading="loading"
        style="width: 100%">
        <el-table-column
          prop="positionName"
          label="职位名称">
        </el-table-column>
        <el-table-column
          prop="positionDescribe"
          label="职位描述">
        </el-table-column>
        <el-table-column
          prop="operate"
          label="操作">
          <template slot="header" slot-scope="scope">
            操作<i class="add_role el-icon-circle-plus-outline"  @click="dialogFormVisible = true"></i>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"   @click=getAuthority(scope.row.positionID)>修改权限</el-button>
            <el-button
              size="mini" @click= getAuthority2(scope.row.positionID) >修改职位</el-button>
            <el-button
              size="mini" @click= getAuthority3(scope.row.positionID)>移除职位</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-dialog title="增加职位" :visible.sync="dialogFormVisible">
      <el-form >
        <el-form-item label="职位名称" :label-width="formLabelWidth">
          <el-input v-model="positionname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="职位描述" :label-width="formLabelWidth">
          <el-input v-model="positiondescribe" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addPosition">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改职位" :visible.sync="dialogFormVisible2" >
      <el-form >
        <el-form-item label="职位名称" :label-width="formLabelWidth">
          <el-input v-model="newposition.positionName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="职位描述" :label-width="formLabelWidth">
          <el-input v-model="newposition.positionDescribe" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="changePosition">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible2"
      width="30%"
      :before-close="handleClose">
      <span>是否移除该职位</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible2 = false">取 消</el-button>
    <el-button type="primary" @click="moveoutPosition(positionID)">确 定</el-button>
  </span>
    </el-dialog>

  </el-container>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-tree
        :data="data"
        show-checkbox
        default-expand-all
        node-key="id"
        ref="tree"
        highlight-current
        :props="defaultProps"
      >
      </el-tree>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click=" getCheckedKeys">确 定</el-button>
  </span>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: "authority_administration",
    data() {
      return {
        // visible: false,
        dialogVisible: false,
        dialogVisible2: false,
        dialogFormVisible: false,
        dialogFormVisible2: false,
        formLabelWidth: '120px',
        positionname:'',
        positiondescribe:"",
        newposition:{
          positionName:"",
          positionDescribe:""
        },
        tableData:[],
        loading: false,
        positionID:"",
        data: [],
        checkkeys:[],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        count: 1
      }
    },
    methods:{
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },

      getAuthority(id){
        this.dialogVisible = true;
        this.positionID=id;
        var that= this;
        this.$axios.post("admin/getpower",{positionID:id}).then(res=>{
          if(res.data.code=="1000"){
            that.$refs.tree.setCheckedNodes([]);
            for (var i=0;i<res.data.data.length;i++){
              var node=that.$refs.tree.getNode(res.data.data[i].powerID);
              if (node.isLeaf){
                that.$refs.tree.setChecked(node, true);
              }
            }
          }else {
            that.$refs.tree.setCheckedNodes([]);
          }

          // that.$refs.tree.setCheckedKeys(CheckedKeys);
        })
      },
      getAuthority2(id){
        this.dialogFormVisible2 = true;
        for (var i=0;i<this.tableData.length;i++){
          this.positionID=id;
          if (this.tableData[i].positionID==id){
            this.newposition.positionName=this.tableData[i].positionName;
            this.newposition.positionDescribe=this.tableData[i].positionDescribe;
          }
        }
      },
      getAuthority3(id){
        this.dialogVisible2 = true;
        this.positionID=id;
      },

      getCheckedKeys() {
        var that=this;
        console.log(this.$refs.tree.getCheckedKeys());
        this.checkkeys=this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys());
        console.log(this.checkkeys);
        this.$axios.post("admin/setpower",{
          id:that.positionID,
          key:that.checkkeys
        }).then(res=>{
         alert(res.data);
        })


      },
      addPosition(){
        var that=this;
        this.dialogFormVisible = false;
        this.$axios.post("admin/addposition",{
          positionName:that.positionname,
          positionDescribe:that.positiondescribe
        }).then(res=>{
          alert(res.data.msg);
          if (res.data.code==1000){
            that.tableData=res.data.data;
          }
        })
      },
      changePosition(){
        var  that=this;
        this.$axios.post("admin/changePosition",{
          positionID:that.positionID,
          newposition:that.newposition
        }).then(
          res=>{
            alert(res.data.msg);
            this.dialogFormVisible2 = false;
            if (res.data.code==1000){
              that.tableData=res.data.data;
            }
        }
        )
      },
      moveoutPosition(){
        this.dialogVisible2 = false;
        var that=this;
        this.$axios.post("admin/moveoutposition",{positionID:that.positionID}).then(res=>{
          alert(res.data.msg);
          if (res.data.code==1000){
            that.tableData=res.data.data;
          }
        })
      }

    },
    mounted() {
      this.loading=true;
    },
    created() {
      var that =this;
      this.$axios.get("admin/powerlist").then(res=>{
        that.tableData=res.data;
        that.loading=false;
      });
      this.$axios.get("admin/allpower").then(res=>{
        console.log(res.data);
        var menu=[];
        for (var i=0;i<res.data.length;i++){
          if (res.data[i].belongPower==0){
            var obj={
              id:res.data[i].powerID,
              label:res.data[i].powerName,
            };
            var children=[];
            for (var j=0;j<res.data.length;j++){
              if (res.data[j].belongPower==res.data[i].powerID){
                var obj2={
                  id:res.data[j].powerID,
                  label:res.data[j].powerName,
                };
                var children2=[];
                for (var k=0;k<res.data.length;k++){
                  if (res.data[k].belongPower==res.data[j].powerID){
                    var obj3={
                      id:res.data[k].powerID,
                      label:res.data[k].powerName
                    };
                    children2.push(obj3);
                  }
                }
                obj2.children=children2;
                children.push(obj2);
              }
            }
            obj.children=children;
            menu.push(obj);
          }
        }
        console.log(menu);
        that.data=menu;
      })

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
  .add_role{
    margin: 5px;
    font-size: 130%;
  }
</style>
