<template>
  <div>
    <van-swipe
      class="DetailSwip"
      @change="onChange"
      :width="446"
      :height="303"
      show-indicators
      :autoplay="3000"
    >
      <van-swipe-item>
        <img
          class="swipe-item-img"
          :src="goods.imgUrl"
          alt
        />
      </van-swipe-item>

      <div class="custom-indicator dian" slot="indicator">{{ current + 1 }}/1</div>
    </van-swipe>
    <div class="ShopIntroduce">
      <div class="ShopIntroduce1">
        <p class="min28">28分钟</p>
        {{goods.title1}}
      </div>
      <div class="ShopIntroduce2">
        <p class="suited" v-text="goods.title2"></p>
        <p class="specification">
          <span class="sbook">说明书</span>
        </p>
      </div>
      <p class="yaonum" v-text="goods.specification"></p>
      <div class="ShopIntroduce3">
        <p>
          <span class="taocan">套餐价：</span>
          <span class="price">￥</span>
          <span class="price" v-text="goods.nowprice"></span>
        </p>
        <p class="volume">
          月售
          <span v-text="goods.sales"></span>笔
        </p>
      </div>
      <div class="ShopIntroduce4">
        <p class="kuaiyao">
          <img class="dinglogo" src="../assets/logo_20171130.png" alt />
          <span>[快药]急送，满￥38免运费，可预约</span>
        </p>
        <p class="location">
          <span>本商品由叮当智慧药房（广州）有限公司广州越秀东川路店为您服务</span>
          <img src="../assets/clickpoint.png" alt />
        </p>
      </div>
      <div class="ShopIntroduce5">
        <p class="left">
          好评度
          <span>100%</span>
        </p>
        <p class="right">
          <span>227条评价</span>
          <van-icon name="arrow" />
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import { Icon, Swipe, SwipeItem } from "vant";
Vue.use(Icon)
  .use(Swipe)
  .use(SwipeItem);
export default {
  data() {
    return {
      current: 0,
      goods: {}
    };
  },
  created() {
    this.goodslist();
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    goodslist() {
      axios
        .get("http://localhost:3000/goods", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(({ data }) => {
          this.goods = data[0];
        });
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 445) * 100vw;
}

.swipe-item-img {
  width: vw(305);
  margin: 0 vw(70);
}
.DetailSwip {
  position: relative;
  .dian {
    width: vw(34);
    height: vw(34);
    border-radius: 50%;
    background: #b2b2b2;
    color: #fff;
    text-align: center;
    font-size: vw(13);
    line-height: vw(34);
    position: absolute;
    bottom: vw(10);
    right: vw(20);
  }
}
.ShopIntroduce {
  width: 100%;
  height: vw(330);
  border-top: vw(1) solid #efeff4;
  padding: vw(14) 0;
  .ShopIntroduce1 {
    display: flex;
    font-size: vw(18);
    padding: 0 vw(18);
    .min28 {
      width: vw(57);
      height: vw(20);
      font-size: vw(12);
      line-height: vw(20);
      background: #e94544;
      color: #fff;
      text-align: center;
      margin-right: vw(3);
      border-radius: vw(3);
    }
  }
  .ShopIntroduce2 {
    display: flex;
    margin-top: vw(12);
    padding: 0 vw(18);
    justify-content: space-between;
    .suited {
      font-size: vw(13);
    }
    .specification {
      width: vw(77);
      height: vw(40);
      border-left: vw(2) dashed #ebebeb;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .sbook {
        display: inline-block;
        width: vw(58);
        height: vw(26);
        border: vw(1) solid #ebebeb;
        font-size: vw(12);
        line-height: vw(26);
        text-align: center;
      }
    }
  }
  .yaonum {
    color: #888888;
    font-size: vw(13);
    margin-top: vw(15);
    padding: 0 vw(18);
  }
  .ShopIntroduce3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: vw(22);
    padding: 0 vw(18) vw(14);
    border-bottom: vw(14) solid #efeff4;
    span {
      display: inline-block;
    }
    .taocan {
      font-size: vw(19);
    }
    .price {
      font-weight: 700;
      color: #f27777;
    }
    .volume {
      font-size: vw(12);
      color: #a6a6a6;
    }
  }
  .ShopIntroduce4 {
    width: 100%;
    height: vw(103);
    padding: 0 vw(18);
    border-bottom: vw(14) solid #efeff4;
    .kuaiyao {
      height: vw(50);
      border-bottom: vw(1) solid #efeff4;
      display: flex;
      align-items: center;
      font-size: vw(14);
      color: #e94f4e;
      img {
        width: vw(40);
        height: vw(30);
        margin-right: vw(9);
      }
    }
    .location {
      height: vw(50);
      font-size: vw(14);
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: vw(30);
        height: vw(7);
        margin-left: vw(19);
      }
      span {
        width: vw(354);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .ShopIntroduce5 {
    height: vw(54);
    display: flex;
    justify-content: space-between;
    .left {
      width: vw(118);
      line-height: vw(40);
      border-left: vw(4) solid #e94544;
      display: flex;
      font-size: vw(17);
      padding-left: vw(16);
      span {
        color: #e94544;
      }
    }
    .right {
      color: #888888;
      line-height: vw(40);
      font-size: vw(16);
      padding-right: vw(16);
    }
  }
}
</style>