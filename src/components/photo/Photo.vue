<template>
  <div>
    <div
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
    >
      <div class="mui-scroll">
        <a class="mui-control-item mui-active" @click="getPhoListByType(true,'')">全部</a>
        <a
          v-for="type in types"
          class="mui-control-item"
          :key="type"
          @click="getPhoListByType(false, type)"
        >{{type}}</a>
      </div>
    </div>
    <ul>
      <li v-for="pho in phoList" :key="pho.phoId">
        <router-link :to="'/home/photo/' + pho.phoId">
          <img v-lazy="pho.phos[parseInt(Math.random() * pho.phos.length || 0)]">
          <div class="intro">{{ pho.intro }}</div>
        </router-link>
      </li>
    </ul>
    <mt-button plain type="primary" size="large" @click.native="getPhoListByType(true)">加载更多</mt-button>
  </div>
</template>

<script>
// 导入mui的js模块
import mui from "../../lib/mui/js/mui.min.js";
import { Toast } from "mint-ui";
export default {
  props: [],
  data() {
    return {
      // 所有的图片分类名称
      types: [],
      // 所有的图片列表信息
      phoList: [],
      // 当前的页码
      pageIdx: 1
      // 当前的类型
    };
  },
  computed: {},
  created() {
    this.getTypes();
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getTypes() {
      this.$http.get("getphotypes").then(
        res => {
          this.types = res.body.types;

          // 分类数据加载完成之后加载全部的数据
          this.getPhoListByType(false, "");
        },
        () => {
          Toast("数据获取失败");
        }
      );
    },
    // 参数 isNewType 判断是否需要分页查找还是换一个分类查找
    getPhoListByType(append, type) {
      // 如果有传入type 则保存旧的type, 如果没有传入type则type就是上一次的type
      if (type != undefined) this.type = type;
      // 如果是获取新的分类图片
      // console.log(type);

      if (append) this.pageIdx = this.pageIdx + 1;
      else this.pageIdx = 1;
      this.$http
        .get("getpho?type=" + this.type + "&pageIdx=" + this.pageIdx)
        .then(res => {
          if (append) {
            if (res.body.status == -1) {
              this.pageIdx = this.pageIdx - 1;
              return Toast("没有更多的数据了");
            }
            this.phoList = this.phoList.concat(res.body.phos);
          } else {
            this.phoList = res.body.phos;
            // 保存type
          }
        });
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.mui-fullscreen {
  top: 40px;
}
* {
  touch-action: pan-y;
}
ul,
li {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
  margin: 10px 8px;
}
.mui-segmented-control.mui-segmented-control-inverted
  .mui-control-item.mui-active {
  border-bottom: 0;
}
li .intro {
  position: absolute;
  font-size: 13px;
  bottom: 0;
  width: 100%;
  height: 60px;
  color: #f7f7f7;
  background-color: rgba(0, 0, 0, 0.3);
  text-indent: 2em;
  overflow: hidden;
}
img {
  width: 100%;
  vertical-align: bottom;
  border-radius: 5px;
  box-shadow: 0 1px 5px #666;
}
</style>