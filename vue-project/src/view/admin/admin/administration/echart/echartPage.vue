
<template>
  <div>
    <sell-count-echart v-if="business"></sell-count-echart>
    <sell-money-echart v-if="business"></sell-money-echart>
    <regist-echart v-if="admin"></regist-echart>
  </div>

</template>

<script>
 import sellCountEchart from "./sellCountEchart";
 import sellMoneyEchart from "./sellMoneyEchart";
 import registEchart from "./registEchart";
  export default {
    name: 'echartPage',
    data() {
      return {
        admin:"",
        business:""
      }
    },
    components:{
      sellCountEchart,
      sellMoneyEchart,
      registEchart
    },
    created() {
      var that=this;
      this.$axios.get("admin/getposition").then(
      res=>{
        if (res.data=="商家"){
          that.admin=false;
          that.business=true;
        }else{
          that.admin=true;
          that.business=false;
        }
      }
      )
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style>
