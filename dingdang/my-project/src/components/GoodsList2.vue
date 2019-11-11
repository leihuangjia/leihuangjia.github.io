<template>
  <div class="goodsList">
    <van-sticky class="goodsListTil" :offset-top="56">
      <van-tabs>
        <van-tab
          class="goodsListTab"
          type="info"
          v-for="(l,index) in list"
          :key="index"
          :title="l"
          :line-height="0"
        ></van-tab>
      </van-tabs>
    </van-sticky>
    <van-card
      v-for="(z,index) in 8"
      :key="index"
      thumb="https://img.ddky.com/c/cms/temp/20191107/1573129273897_484_357.jpg"
    >
      <div class="tit" slot="title">
        <div class="tit_t" slot="tags" style="display: inline-block;">
          <van-tag class="tit_tag" type="danger">2-5天</van-tag>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;咽部灼热，急性咽炎， 咽痛咽干
      </div>
      <div class="desc" slot="desc">[弥可保]甲钴胺片(薄膜衣片)</div>
      <div slot="tags" class="tag">
        <van-tag class="tags" plain type="danger">直降限2件</van-tag>
      </div>
      <div slot="price">
        <span class="qian1">￥</span>2.00
      </div>
      <div class="origin-price" slot="origin-price">
        <span class="qian2">￥</span>
        1200.00
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
        "慢病秒杀",
        "男性健康",
        "热销推荐",
        "女性健康",
        "情趣用品",
        "美颜塑身",
        "营养保健",
        "避孕验孕"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.goodsListTil {
  border-top: vw(2) solid #efeff4;
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
  height: vw(38);
  color: #333;
  font-weight: 700;
  font-size: vw(13);
  margin-bottom: vw(3);
  line-height: vw(19);
  .tit_t {
    .tit_tag {
      font-size: 10px;
      font-weight: 400;
      width: vw(50);
      height: vw(21);
      padding: 0 vw(8);
      text-align: center;
      background-color: #f5a623;
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
}
.tag {
  width: vw(173);
  height: vw(19);
  margin-bottom: vw(12);
  .tags {
    border-radius: vw(5);
    padding: vw(1) vw(5);
    margin-right: vw(5);
    width: vw(70);
    height: vw(21);
    font-size: vw(11);
    line-height: vw(11);
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