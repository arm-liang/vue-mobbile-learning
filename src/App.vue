<template>
  <div class="container">
    <mt-header title="Vue移动端项目" fixed></mt-header>
    <!-- 底部的导航栏 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/member" class="mui-tab-item">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/shopcar" class="mui-tab-item">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/search" class="mui-tab-item">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    <!-- 主应用的路由视图 -->
    <router-view></router-view>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
  methods: {
    show(){
      new Toast('提示消息');
    }
  }
};
</script>

<style>
  .v-enter,
  .v-leave-to{
      opacity: 0;
      transform: translateX(-80px);
  }

  .v-enter-active,
  .v-leave-active{
      transition: all 1s;
  }

  .container{
    padding-top: 40px;
  }
</style>