<template>
  <div class="goodsList">
    <h2>叮当好货</h2>
    <van-sticky :offset-top="130">
      <van-tabs>
        <van-tab type="info" v-for="(l,index) in list" :key="index" :title="l" :line-height="0"></van-tab>
      </van-tabs>
    </van-sticky>
    <img class="onlypic" src="../assets/ganmao.jpg" alt />
    <van-card v-for="(d,index) in lista" :key="index" :thumb="d.imgUrl" @click="toDetail(index)">
      <div class="tit" slot="title">
        <div class="tit_t" slot="tags" style="display: inline-block;">
          <van-tag class="tit_tag" type="danger">28分钟</van-tag>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{d.title1}}
      </div>
      <div class="desc" slot="desc" v-text="d.title2"></div>
      <div slot="tags" class="tag">
        <van-tag class="tags" plain type="danger">特价换购</van-tag>
        <van-tag class="tags" plain type="danger">1元换购</van-tag>
      </div>
      <div slot="price" v-text="d.nowprice">
        <span class="qian1">￥</span>
      </div>
      <div class="origin-price" slot="origin-price" v-text="d.oldprice">
        <span class="qian2">￥</span>
        <van-icon
          class="cart-circle"
          name="cart-circle"
          size="30"
          color="#ff5a5f"
          style="display:inline-block;"
        />
      </div>
    </van-card>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import store from "../stores";
import { Tab, Tabs, Sticky, Card, tag, button, Icon } from "vant";
Vue.use(Tab)
  .use(Tabs)
  .use(Sticky)
  .use(Card)
  .use(tag)
  .use(button)
  .use(Icon);
export default {
  data() {
    return {
      list: [
        "感冒发烧",
        "换季热销",
        "秋冬滋补",
        "润燥花茶",
        "家庭常备",
        "呵护女性",
        "男性健康",
        "慢病用药"
      ],
      state:store.state,
      detail: []
    };
  },
    computed: {
    lista() {
      if (this.state.searchText) {
        let _this = this;
        return this.detail.filter(function(item) {
          if (item.title1.indexOf(_this.state.searchText) != -1) {
            return item;
          }
        });
      } else {
        return this.detail;
      }
    }
  },
  created() {
    this.loadMore();
  },


  methods: {
    toDetail(index) {
      this.$router.push({
        path: "/detail/:id",
        name: "detail",
        params: { id: index }
      });
      window.location.reload();
    },
    loadMore() {
      axios.get("http://localhost:3000/data").then(({ data }) => {
        window.console.log(data);
        this.detail = data;
      });
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.van-ellipsis {
  font-size: vw(17);
  color: #333;
}
.van-tabs--line .van-tabs__wrap {
  height: vw(44);
}
.van-tabs__line {
  display: none;
}
.van-tab--active {
  color: #333;
  font-weight: 700;
}
.goodsList {
  h2 {
    line-height: vw(48);
    font-size: vw(26);
    font-weight: 700;
    padding: 0 vw(12);
    color: #333;
  }
  .onlypic {
    width: 100%;
    height: vw(178);
  }
}
.van-card__thumb {
  width: vw(200);
  height: vw(147);
  border-radius: vw(5);
  img {
    width: vw(200);
    height: vw(147);
    border-radius: vw(5);
  }
}
.van-card {
  padding: vw(18) vw(12);
  height: vw(172);
  background: #fff;
}
.van-card:not(:first-child) {
  margin: 0;
}
.van-card__content {
  width: vw(193);
  height: vw(146);
}
.tit {
  width: vw(173);
  color: #333;
  font-weight: 700;
  font-size: vw(13);
  margin-bottom: vw(3);
  line-height: vw(19);
  .tit_t {
    .tit_tag {
      font-size: vw(10);
      font-weight: 400;
      width: vw(54);
      height: vw(21);
      padding: 0 vw(8);
      text-align: center;
      background-color: #ff5a5f;
      color: #fff;
    }
  }
}
.desc {
  width: vw(173);
  height: vw(38);
  color: #888;
  font-size: vw(13);
  line-height: vw(19);
  margin-bottom: vw(3);
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.tag {
  width: vw(173);
  height: vw(19);
  margin-bottom: vw(12);
  .tags {
    border-radius: vw(5);
    padding: vw(1) vw(3);
    margin-right: vw(5);
    width: vw(52);
    height: vw(18);
    font-size: vw(11);
  }
}
.van-card__bottom {
  width: vw(173);
  height: vw(28);
  position: relative;
  .van-card__price {
    font-size: vw(18);
    color: #ee0a24;
    line-height: vw(28);
  }
  .van-card__origin-price {
    font-size: vw(11);
    color: #888;
  }
  .cart-circle {
    position: absolute;
    right: vw(-15);
    bottom: 0;
    vertical-align: bottom;
  }
}
.qian1 {
  padding: 0;
  margin: 0;
  font-size: vw(18);
  color: #ee0a24;
  display: inline-block;
  width: vw(14);
  height: vw(28);
  line-height: vw(28);
}
</style>