// 项目的入口文件
import Vue from 'vue';
import MintUi from 'mint-ui';
// 导入Mint的css文件
import 'mint-ui/lib/style.css';
// 导入Mui css文件
import './lib/mui-master/dist/css/mui.css'

import router from './router.js';
import App from './App.vue'; 

Vue.component(MintUi.Header.name, MintUi.Header);

new Vue({
  el: '#app',
  render: c => c(App),
  router,
});
