// 项目的入口文件
import Vue from 'vue';
// 导入Mint的css文件
import 'mint-ui/lib/style.css';
// 导入 Mui css文件
import './lib/mui/css/mui.css'
// 导入 Mui 的额外样式
import './lib/mui/css/icons-extra.css'

// 导入路由组件
import router from './router.js';
import App from './App.vue'; 

// 导入轮播图组件和顶部组件
import { Swipe, Header, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);


// 创建一个Vue的实例
new Vue({
  el: '#app',
  render: c => c(App),
  router,
});
