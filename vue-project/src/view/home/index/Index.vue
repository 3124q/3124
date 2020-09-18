<template>
  <div class="home">
    <div class="a-text">
      <video width="100%" height="100%" autoplay="true" style="object-fit: cover;" muted loop>
        <source type="video/mp4" src="../../../assets/1287.mp4" >
      </video>
    </div>
    <div class="a-img1 bgTest" :style="{'background-position-y':positionY1+'px'}"></div>
    <div class="a-text ">3</div>
    <div class="a-img2 bgTest" :style="{'background-position-y':positionY2+'px'}" id="box"></div>
    <div class="a-text ">5</div>
    <div class="a-img3 bgTest" :style="{'background-position-y':positionY3+'px'}">6</div>
    <div class="a-text ">7</div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      positionY1: 0, // 背景1Y轴偏移量
      Y1: 0, // 背景1Y轴偏移量
      positionY2: 0, // 背景2Y轴偏移量
      Y2: 0, // 背景1Y轴偏移量
      positionY3: 0, // 背景2Y轴偏移量
      Y3: 0, // 背景2Y轴偏移量
      ratio: 0.2 // 视差偏移率
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll) // 创建滚动监听，页面滚动回调handleScroll方法
    let bgTest = document.getElementsByClassName('bgTest')
    this.Y1 = bgTest[0].offsetTop * this.ratio
    this.Y2 = bgTest[1].offsetTop * this.ratio
    this.Y3 = bgTest[2].offsetTop * this.ratio
  },
  methods: {
    /**
     * 背景视差偏移计算
     * */
    handleScroll: function () {
      // window.pageYOffset  会返回文档当前沿垂直轴（即向上或向下）滚动的像素数
      // document.documentElement.scrollTop 获取滚动条位置
      // document.body.scrollTop 网页被卷去的高度
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.positionY1 = this.Y1 - scrollTop * this.ratio // 原始高度-滚动距离*视差系数
      this.positionY2 = this.Y2 - scrollTop * this.ratio // 原始高度-滚动距离*视差系数
      this.positionY3 = this.Y3 - scrollTop * this.ratio // 原始高度-滚动距离*视差系数
    }
  },
  components: {}

}
</script>

<style scoped>
  div {
    height: 100vh;
    background: rgba(0, 0, 0, .7);
    color: #fff;
    line-height: 100vh;
    text-align: center;
    font-size: 20vh;
  }

  .a-img1 {
    background-image: url(../../../assets/img/fisrtbg.jpg);
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
  }

  .a-img2 {
    background-image: url(../../../assets/img/2.jpg);
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
  }

  .a-img3 {
    background-image: url(../../../assets/img/3.jpg);
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
  }
</style>
