<template>
  <div class="AdviceBox">
    <ul class="list1">
      <li>
        <img src="https://img.ddky.com/c/cms/temp/20190911/1568195178317_270_252.jpg" alt />
      </li>
      <li>
        <img src="https://img.ddky.com/c/cms/temp/20190911/1568195199372_270_252.jpg" alt />
      </li>
      <li>
        <img src="https://img.ddky.com/c/cms/temp/20190911/1568195204349_270_252.jpg" alt />
      </li>
      <li>
        <img src="https://img.ddky.com/c/cms/temp/20190911/1568195093878_270_252.jpg" alt />
      </li>
    </ul>
    <div class="list2">
      <ul>
        <li>
          <img src="https://img.ddky.com/c/cms/temp/20191105/1572919490594_270_252.jpg" alt />
        </li>
        <li>
          <img src="https://img.ddky.com/c/cms/temp/20191105/1572919494943_270_252.jpg" alt />
        </li>
      </ul>
      <ul>
        <li>
          <img src="https://img.ddky.com/c/cms/temp/20191107/1573095378734_270_252.jpg" alt />
        </li>
        <li>
          <img src="https://img.ddky.com/c/cms/temp/20191107/1573095380742_270_252.jpg" alt />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.AdviceBox {
  width: 100%;
  .list1 {
    display: flex;
    width: 100%;
    li {
      flex: 1;
      width: 25%;
      img {
        width: 100%;
      }
    }
  }
  .list2 {
    display: flex;
    width: 100%;
    ul {
      display: flex;
      width: 50%;
      li {
        width: 50%;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>