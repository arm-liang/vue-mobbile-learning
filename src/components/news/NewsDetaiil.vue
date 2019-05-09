<template>
  <div>
    <div class="container">
      <h1 class="head">{{news.title}}</h1>
      <div class="metadata flex-box">
        <p class="add-time">发布时间：{{news.add_time | dateFormat('yyyy-mm-dd')}}</p>
        <p class="clicked">点击量：{{news.clicked}}</p>
      </div>
      <div class="content" v-html="news.content"></div>
      <Comment :commentSrc="'getnewscom?newsId='+id" :submitSrc="'addnewscom?newsId='+id"></Comment>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import Comment from "../Comment.vue";

export default {
  props: {},
  data() {
    return {
      id: this.$route.params.newsId,
      news: ""
    };
  },
  computed: {},
  created() {
    // 获取文章详细
    this.getNewsDetail();
  },
  watch: {},
  methods: {
    getNewsDetail() {
      this.$http.get("getnewsdetail?newsId=" + this.id).then(res => {
        if (res.body.status == -1) {
          Toast("没有找到这个新闻");
          return;
        }
        var news = res.body.news;
        this.news = news;
      });
    }
  },
  components: {
    Comment
  }
};
</script>

<style scoped>
.container {
  padding: 10px;
}
h1 {
  color: #333;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.flex-box {
  display: flex;
  justify-content: space-between;
}
.comment-head {
  margin-top: 10px;
  font-size: 16px;
  color: #111;
}
textarea {
  margin: 0;
}
.footer {
  text-align: right;
  margin-bottom: 10px;
}
</style>
