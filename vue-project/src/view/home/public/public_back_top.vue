<template>
  <div id="public_back_top">
    <el-backtop  :bottom="100">
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #5cff0b85;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
        border-radius: 50%;
      }"
      >
        Top
      </div>
    </el-backtop>
</div>
</template>



<script>
  export default {
    name: 'public_back_top',
    data() {
      return {

        }
      }
  }
</script>

<style scoped>

</style>
