// 项目的入口文件
import Vue from 'vue';
// 导入Mint的css文件
import 'mint-ui/lib/style.css';
// 导入 Mui css文件
import './lib/mui/css/mui.css';
// 导入 Mui 的额外样式
import './lib/mui/css/icons-extra.css';
// 导入日期格式化的插件
import dateFormat from 'dateformat';

// 导入路由组件
import router from './router.js';
import App from './App.vue';

// 导入 Vue-resource，异步请求
import VueResource from 'vue-resource';

Vue.use(VueResource);

// 设置获取Ajax获取数据的默认路径
Vue.http.options.root = 'http://localhost:3000/api';
// 设置以 post 方式发送数据时候采用表单格式提交
Vue.http.options.emulateJSON = true;
Vue.http.options.headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
};
// 导入轮播图组件和顶部组件
import {
  Swipe,
  Header,
  SwipeItem,
  Button,
  Lazyload
} from 'mint-ui';

Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.use(Lazyload);

// 导入 图片预览模块
import preview from 'vue-photo-preview';
import 'vue-photo-preview/dist/skin.css';
Vue.use(preview);

// 定义全局多滤器用于格式化时间
Vue.filter('dateFormat', dateFormat);

// 创建一个Vue的实例
window.app = new Vue({
  el: '#app',
  render: c => c(App),
  router,
});