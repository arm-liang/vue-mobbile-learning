<template>
  <div class="container">
    <mt-header title="Vue移动端项目" fixed>
      <router-link v-show="isBack" to slot="left">
        <mt-button icon="back" @click="prevWeb">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="app-container">
      <!-- 添加过渡效果 -->
      <transition>
        <!-- 主应用的路由视图 -->
        <router-view></router-view>
      </transition>
    </div>
    <!-- 底部的导航栏 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/home" class="my-mui-tab-item">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="/member" class="my-mui-tab-item">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link to="/shopcar" class="my-mui-tab-item">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link to="/search" class="my-mui-tab-item">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  methods: {
    show() {
      new Toast("提示消息");
    },
    prevWeb() {
      this.$router.go(-1);
    }
  },
  computed: {
    // 顶部的浏览器是否返回
    isBack() {
      // 如果路由地址不是 /home 就出现返回按钮
      return this.$route.path != "/home";
    }
  }
};
</script>

<style scoped>
.container {
  /* 顶上的状态蓝固定定位 */
  padding-top: 40px;
  /* 底线的nav绝对定位 */
  padding-bottom: 50px;
}
/* 解决 mui scroll 会造成底部无法滚动的问题 */
.my-mui-tab-item {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .my-mui-tab-item.mui-active {
  color: #007aff;
}
.mui-icon {
  padding: 0;
}
span.mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.app-container {
  /* 组件在左侧动画溢出的时候隐藏 */
  overflow-x: hidden;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  /* 组件从右侧进来 */
  transform: translate(100%);
}

.v-leave-to {
  /* 组件从左侧出去 */
  transform: translate(-100%);
}

.v-leave-active {
  /* 组件离开的时候绝对定位让后面的元素可以出现在它上方 */
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>