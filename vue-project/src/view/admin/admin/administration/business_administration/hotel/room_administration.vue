<template>
  <el-container>
    <el-header height="30px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="iconfont el-ico-xpersonal"> 后台管理</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>酒店管理</el-breadcrumb-item>
        <el-breadcrumb-item>房间管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        :default-sort = "{prop: 'date', order: 'descending'}"
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="房间名称：">
                <span>{{ props.row.room_name }}</span>
              </el-form-item>
              <el-form-item label="所属酒店：">
                <span>{{ props.row.hotel }}</span>
              </el-form-item>
              <el-form-item label="床数：">
                <span>{{ props.row.bed_num }}</span>
              </el-form-item>
              <el-form-item label="早餐：">
                <span>{{ props.row.breakfast }}</span>
              </el-form-item>
              <el-form-item label="床型：">
                <span>{{ props.row.bet_type }}</span>
              </el-form-item>
              <el-form-item label="入住人数：">
                <span>{{ props.row.check_in_num }}人</span>
              </el-form-item>
              <el-form-item label="房间设施：" >
                <span v-for="city in facilities" :key="city">{{city}}、</span>
              </el-form-item>
              <el-form-item label="取消方式:">
                <span>{{ props.row.cancel_mode }}</span>
              </el-form-item>
              <el-form-item label="价格：">
                <span>{{ props.row.price}}元</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="房间名称"
          prop="room_name"
          sortable>
        </el-table-column>
        <el-table-column
          label="所属酒店"
          prop="hotel">
        </el-table-column>
        <el-table-column label="操作">
          <template slot="header" slot-scope="scope">
            操作
            <el-input
              style="float: right;width: 85%;"
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="dialogVisible=true">编辑</el-button>
            <el-button
              size="mini"
              @click="changeImg(scope.$index, scope.row)">编辑图片</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">移出</el-button>
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
      <el-dialog
        title="修改房间信息"
        :visible.sync="dialogVisible"
        width="60%"
        :before-close="handleClose">
        <el-form ref="form" label-width="120px" size="mini" class="my_info info_from" label-position="left">
          <el-form-item label="房间名称：">
            <el-input></el-input>
          </el-form-item>
          <el-row style="text-align: left">
            <el-col :lg="8" :xl="8">
              <div class="block" >
                <span class="demonstration" >床数：</span>
                <el-input-number v-model="room_count" :min="1"></el-input-number>
              </div>
            </el-col>
            <el-col :lg="16" :xl="16" style="line-height: 40px">
              <div class="block" >
                <span class="demonstration" >床型：</span>
                <el-radio v-model="Bed_type" label="1">大床</el-radio>
                <el-radio v-model="Bed_type" label="2">双人床</el-radio>
                <el-radio v-model="Bed_type" label="3">双人床</el-radio>
              </div>
            </el-col>
          </el-row>
          <el-form-item label="早餐:" style="margin-top: 10px;text-align: left;">
            <el-radio-group v-model="breakfast">
              <el-radio :label="1">无</el-radio>
              <el-radio :label="2">
                有
                <el-input-number v-model="breakfast_num" :min="1"></el-input-number>
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="入住人数:" style="margin-top:10px;text-align: left">
            <el-input-number v-model="check_in_num " :min="1"></el-input-number>
          </el-form-item>
          <el-form-item label="政策：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="面积：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="价格：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="政策：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="房间设施" style="margin-top: 10px; text-align: left;">
            <el-checkbox :indeterminate="isIndeterminate" v-model="facilities_checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="取消方式" style="margin-top: 10px; text-align: left;">
            <div class="block" >
              <el-radio v-model="Bed_type" label="1">免费取消</el-radio>
              <el-radio v-model="Bed_type" label="2">取消扣全款</el-radio>
              <el-radio v-model="Bed_type" label="3">30分钟免费取消</el-radio>
            </div>
          </el-form-item>
          <el-divider></el-divider>
          <el-button type="primary" plain style="width: 90%;">提交信息</el-button>
          <el-divider></el-divider>
        </el-form>
        <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                    </span>
      </el-dialog>
      <el-drawer
        title="编辑图片"
        :visible.sync="drawer"
        :before-close="handleClose">

        <el-upload
          action="#"
          list-type="picture-card"
          :auto-upload="false">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}" style="width: 100%;height: 100%">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url" alt="">
            <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)">
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)">
                  <i class="el-icon-download"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)">
                  <i class="el-icon-delete"></i>
                </span>
             </span>
          </div>
        </el-upload>
        <el-dialog :modal="false" :visible.sync="dialogVisible2">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>

      </el-drawer>
    </el-main>
  </el-container>
</template>

<script>
  const Hotel_facilities = ['室内泳池','SPA','商务中心','健身房','停车场','温泉','棋牌室','咖啡房','图书馆','无烟房','室外游泳'];
    export default {
        name: "room_administration",
      data(){
          return{
            total: 4,
            pageSize: 5,
            currentPage: 1,
            search: '',
            dialogVisible:false,
            room_count:0,
            Bed_type:'',
            breakfast:'',
            breakfast_num:'',
            check_in_num:0,
            facilities_checkAll: false,
            checkedCities: [],
            cities: Hotel_facilities,
            isIndeterminate: true,
            drawer:false,
            dialogImageUrl: '',
            dialogVisible2: false,
            disabled: false,
            facilities:['室内泳池','SPA','商务中心','健身房','停车场','温泉','棋牌室','咖啡房','图书馆','无烟房','室外游泳'],
            tableData: [{
              id: '12987122',
              room_name: '大床房',
              hotel: '沙县大酒店',
              bed_num: '2',
              breakfast:'无',
              bet_type: '双人床',
              check_in_num: '2',
              cancel_mode: '取消扣全款',
              room_facilities:this.facilities,
              price:200
            }, {
              id: '12987122',
              room_name: '大床房',
              hotel: '沙县大酒店',
              bed_num: '2',
              bet_type: '双人床',
              check_in_num: '2',
              cancel_mode: '取消扣全款',
              room_facilities:this.facilities,
              price:200
            }, {
              id: '12987122',
              room_name: '大床房',
              hotel: '沙县大酒店',
              bed_num: '2',
              bet_type: '双人床',
              check_in_num: '2',
              cancel_mode: '取消扣全款',
              room_facilities:this.facilities,
              price:200
            }, {
              id: '12987122',
              room_name: '大床房',
              hotel: '沙县大酒店',
              bed_num: '2',
              bet_type: '双人床',
              check_in_num: '2',
              cancel_mode: '取消扣全款',
              room_facilities:this.facilities,
              price:200
            }]
          }
      },
      methods:{
        handleSizeChange(val) {
          this.pageSize = val
        },
        handleCurrentChange(val) {
          this.currentPage = val
        },
        handleEdit(index, row) {

        },
        handleDelete(index, row) {
          console.log(index, row);
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        handleCheckAllChange(val) {
          this.checkedCities = val ? Hotel_facilities : [];
          this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
          let checkedCount = value.length;
          this.facilities_checkAll = checkedCount === this.cities.length;
          this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        },
        changeImg(){
          this.drawer=true
        },
        handleClose(done){
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        handleRemove(file) {
          console.log(file);
        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible2 = true;
        },
        handleDownload(file) {
          console.log(file);
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
