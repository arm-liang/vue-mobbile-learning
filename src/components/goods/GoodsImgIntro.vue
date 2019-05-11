<template>
  <div>
    <h2>{{god.name}}</h2>
    <div class="imgs">
      <img v-for="imgSrc in god.imgIntro" :src="imgSrc" alt :key="imgSrc">
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  props: [],
  data() {
    return {
      id: this.$route.params.godId,
      god: ""
    };
  },
  computed: {},
  created() {
    this.getGoodsImgIntro();
  },
  mounted() {},
  watch: {},
  methods: {
    getGoodsImgIntro() {
      this.$http.get("getgoddetail?godId=" + this.id).then(res => {
        if (res.body.status == -1) {
          Toast("没有找到这个商品");
          return;
        }
        this.god = res.body.god;
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
h2 {
  text-align: center;
  color: #007aff;
}
.imgs img {
  width: 100%;
  vertical-align: top;
}
</style>
