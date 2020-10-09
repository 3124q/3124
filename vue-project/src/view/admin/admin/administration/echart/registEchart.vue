
<template>
  <div id="registEchart" :style="{width: '600px', height: '300px'}"></div>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  export default {
    name: 'echart',
    data() {
      return {
        msg: ''
      }
    },
    created() {

    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('registEchart'))
        // 绘制图表
        this.$axios.get("admin/registcount").then(
          res=>{
            var ydata=[0,0,0,0,0,0,0,0,0,0,0,0];
            for (var i=0;i<res.data.length;i++){
              ydata[res.data[i].months-1]=res.data[i].data;
            };
            console.log(ydata);
            myChart.setOption({
              title: { text: '月注册用户量报表统计' },
              tooltip: {},
              xAxis: {
                data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月","9月","10月","11月","12月"]
              },
              yAxis: {},
              series: [{
                name: '注册量',
                type: 'bar',
                data: ydata
              }]
            });
          }
        )
        // myChart.setOption({
        //   title: { text: '月销量报表统计' },
        //   tooltip: {},
        //   xAxis: {
        //     data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月","9月","10月","11月","12月"]
        //   },
        //   yAxis: {},
        //   series: [{
        //     name: '销量',
        //     type: 'bar',
        //     data: [5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20,15,8]
        //   }]
        // });
      }
    }
  }
</script>

<style>
