<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(news, idx) in newsList" :key="idx" tag="li">
        <router-link :to="'/home/news/' + news.id">
          <img class="mui-media-object mui-pull-left" :src="news.img_url" alt="NO pic">
          <div class="mui-media-body">
            {{ news.title }}
            <p class="mui-ellipsis">{{news.summary}}</p>
          </div>
        </router-link>
      </li>
    </ul>
    <mt-button plain type="primary" size="large" @click.native="getNewsList">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  props: {},
  data() {
    return {
      pageIdx: 1,
      newsList: []
    };
  },
  created() {
    // VUE对象被创建之后记载数据
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("getnews?pageIdx=" + this.pageIdx).then(
        res => {
          // 将获取到的数据添加到 newsList上
          if (!res.body.news) {
            Toast("没有更多的新闻了~~");
            return;
          }
          let newsArr = JSON.parse(res.body.news);
          this.newsList = this.newsList.concat(newsArr);
          // 页码加一，下一次调用的时候直接获取下一页的新闻
          this.pageIdx++;
        },
        () => {
          Toast("数据获取失败");
        }
      );
    }
  }
};
</script>

<style scoped>
li {
  font-size: 16px;
  list-style: none;
}
ul {
  list-style: none;
}
p {
  font-size: 12px;
}
</style>