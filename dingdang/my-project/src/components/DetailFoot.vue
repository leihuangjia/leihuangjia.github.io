<template>
  <div class="DetailFoot">
    <div class="DetailFootList">
      <p>
        <van-icon size="22" name="manager-o" />
        <span>药师指导</span>
      </p>
      <p>
        <van-icon size="22" name="shopping-cart-o" />
        <span>清单列表</span>
      </p>
    </div>
    <div class="putIn">加入清单</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.DetailFoot {
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  height: vw(59);
  background: #fff;
  border-top: vw(2) solid #efeff4;
  justify-content: space-between;
  .DetailFootList {
    display: flex;
    width: calc(100% - 150px);
    p {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: vw(8) 0;
      color: #666666;
      span {
        font-size: vw(13);
      }
    }
  }
  .putIn {
    width: vw(178);
    height: vw(59);
    background: #e94544;
    font-size: vw(18);
    line-height: vw(59);
    text-align: center;
    color: #fff;
  }
}
</style>