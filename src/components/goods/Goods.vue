<template>
  <div>
    <ul class="goods-list">
      <li v-for="god in goodsList" :key="god.godId">
        <div class="box">
          <div class="god-head">
            <router-link :to="'/home/goods/'+god.godId">
              <img :src="god.phos[0]">
              <div class="intro">{{god.intro}}</div>
            </router-link>
          </div>
          <div class="god-info">
            <div class="price">
              <span class="new-price">￥ {{god.newPrice}}</span>
              <span class="old-price">{{god.oldPrice}}</span>
            </div>
            <div class="quantity">
              <span class="status">运输中</span>
              <span>库存 {{god.quatity}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <mt-button plain type="primary" size="large" @click.native="getGoodsList">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  props: [],
  data() {
    return {
      goodsList: [],
      pageIdx: 1
    };
  },
  computed: {},
  created() {
    this.getGoodsList();
  },
  mounted() {},
  watch: {},
  methods: {
    getGoodsList() {
      this.$http.get("getgod?pageIdx=" + this.pageIdx).then(res => {
        if (res.body.status == -1) {
          Toast("没有更多的数据了~~");
          return;
        } else {
          this.goodsList = this.goodsList.concat(res.body.gods);
        }
        this.pageIdx++;
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
ul::after {
  content: "";
  display: block;
  clear: both;
  overflow: hidden;
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
li {
  float: left;
  width: 50%;
}
li .box {
  border-radius: 5px;
  border: solid 1px #f9f9f9;
  margin: 5px;
  border-radius: 3px;
  box-shadow: 0 2px 9px #666;
}

ul {
  margin-bottom: 10px;
}
img {
  width: 100%;
}
.god-head {
  font-size: 13px;
  min-height: 100px;
  overflow: hidden;
}
.god-head .intro {
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000;
}

.god-info {
  background-color: #f0f0f0;
}

.price .new-price {
  color: #dd0000;
  margin-right: 10px;
}

.price .old-price {
  text-decoration: line-through;
  font-size: 12px;
}

.quantity {
  display: flex;
  font-size: 12px;
  justify-content: space-between;
}
</style>
