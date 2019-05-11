<template>
  <div>
    <div class="pho-preview">
      <img v-for="imgUrl in (pho.phos)" :key="imgUrl" :src="imgUrl" preview="0" preview-text="描述文字">
    </div>
    <Comment :commentSrc="'getphocom?phoId='+phoId" :submitSrc="'addphocom?phoid='+phoId"></Comment>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
// 导入自己抽象的评论组件
import Comment from "../Comment.vue";
export default {
  props: [],
  data() {
    return {
      // 图片对象
      pho: null,
      // 图片的 id 号，从/home/pho/phoId 中获取
      phoId: this.$route.params.phoId
    };
  },
  computed: {},
  created() {
    // 获取图片的详细
    this.getPhotoDetail();
  },
  mounted() {},
  watch: {},
  methods: {
    getPhotoDetail() {
      this.$http.get("getphodetail?phoId=" + this.phoId).then(
        res => {
          this.pho = res.body.pho;
        },
        () => {
          Toast("获取数据失败");
        }
      );
    }
  },
  components: { Comment }
};
</script>

<style scoped lang="scss">
.pho-preview {
  max-height: 120px;
  margin-bottom: 15px;
  overflow: hidden;
}
.pho-preview img {
  width: 25%;
  margin: 5px;
  vertical-align: top;
}
</style>
