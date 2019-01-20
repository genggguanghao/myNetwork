<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in imgList" :key="item.imgUrl">
      <div> <img :src="item.imgUrl" v-bind:style="imgStyle" alt=""> </div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data(){
    return{
      imgStyle:{
        width:"100%",
        height:"100%"
      },
      imgList:[
          {
            "imgUrl":"img/slider/slide1.jpg"
          },
          {
            "imgUrl":"img/slider/slide2.jpg"
          },
          {
            "imgUrl":"img/slider/slide3.jpg"
          },{
            "imgUrl":"img/slider/slide4.jpg"
          }
      ]
    }
  }
}
</script>


<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>