<template>
  <div>
    <mt-swipe :auto="4000" class="swipe">
      <mt-swipe-item v-for="img in images" :key="img">
        <img :src="img">
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <router-link to="/home/news">
          <img src="../../assets/images/menu/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <img src="../../assets/images/menu/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <img src="../../assets/images/menu/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <img src="../../assets/images/menu/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <img src="../../assets/images/menu/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <img src="../../assets/images/menu/menu5.png" alt="">
          <div class="mui-media-body">联系我们</div>
          
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui';
export default {
  data(){
    return {
      images: []
    }
  },
  created(){
    this.getImages()
  },
  methods: {
    getImages(){
      // 从服务器获取封面的数据
      this.$http.get('getcover').then(res => {
        this.images = res.body.imgs;
      }, err => {
        if(err)
          Toast('非常抱歉数据获取失败');
      })
    }
  }
};
</script>

<style scoped>
  .mint-swipe.swipe img{
    width: 100%;
  }
  .mui-table-view.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: none;
  }

  .mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3{
    background-color: #fff;
    border: none;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
  }
  
  .swipe {
    height: 200px;
  }
  /* .mint-swipe-item:nth-child(1){
    background-color: lightgreen;
  }

  .mint-swipe-item:nth-child(2){
    background-color: lightblue;
  }

  .mint-swipe-item:nth-child(3){
    background-color: lightcoral;
  } */

  .mui-table-view-cell img{
    width: 100%;
  }


</style>