<template>
  <div class="swiper">
    <div class="mould-02">
      <div class="host">
        <div class="hostGods" v-for="(s,idx) of snaps" :key="idx">
          <div class="hostTop">
            <div class="hostImgTop">
              <img :src="s.img" alt="">
            </div>
            <div class="hostText">
              <span class="sp1">{{s.sp1}}</span>
              <span class="sp2">{{s.sp2}}</span>
            </div>
          </div>
          <ul class="hotgoods">
            <li v-for="(g,idx) of s.goods" :key="idx">
              <img :src="g.aimg" alt="">
              <p class="p1">{{g.p1}}</p>
              <del class="p2">{{g.p2}}</del>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="brand">
      <h3>品牌特卖</h3>
      <span>进入</span>
    </div>
    <!-- 品牌特卖 -->
    <van-swipe indicator-color="white" class="swiper1" show-indicators="true">
      <van-swipe-item v-for="(sw,idx) of swiper" :key="idx">
        <a href="###">
          <img :src="sw.Brands" alt="">
        </a>
        <div class="minImg">
          <a href="###" v-for="(sa,idx) of sw.brands2" :key="idx">
            <img :src="sa.sale">
          </a>
        </div>
      </van-swipe-item>

    </van-swipe>
    <!-- E宠国际 -->
    <div class="entrance">
      <div class="brand2">
        <h3>E宠国际</h3>
        <span>进入</span>
      </div>
      <div id="#swiper2">
        <van-swipe @change="onChange">
          <van-swipe-item v-for="(E,idx) of Epet" :key="idx" class="Eswiper">
            <img :src="E.img_url" alt="">
          </van-swipe-item>

          <div class="custom-indicator" slot="indicator">
            {{ current + 1 }}/2
          </div>
        </van-swipe>
      </div>

    </div>
    <!-- 新品馆 -->
    <div class="newProduct">
      <div class="productTop">
        <h3>新品馆</h3>
        <span>进入</span>
      </div>
      <div id="swiper3">
        <van-swipe @change="onChange">
          <van-swipe-item v-for="(gods,idx) of newGoods" :key="idx">
            <div class="newGods">
              <a href="###">
                <img :src="gods.image.img_url" alt="">
              </a>
              <div class="goodsInfo">
                <p class="Gtxt" v-text="gods.name"></p>
                <p class="price">
                  <span class="p1">￥{{gods.sale_price}}</span>
                  <span class="p2" v-text="gods.sale_price_description"></span>
                </p>
                <p class="oldPrice" v-text="gods.normal_price"></p>
              </div>
            </div>
          </van-swipe-item>

          <div class="custom-indicator" slot="indicator">
            {{ current + 1 }}/9
          </div>
        </van-swipe>
      </div>
    </div>
    <!-- 小萌书 -->
    <div class="book">
      <div class="productTop">
        <h3>小萌书</h3>
        <span>进入</span>
      </div>
      <div id="swiper4">
        <van-swipe @change="onChange">
          <van-swipe-item v-for="(bk,idx) of books" :key="idx">
            <a href="###">
              <img :src="bk.img_url" alt="">
            </a>
          </van-swipe-item>

          <div class="custom-indicator" slot="indicator">
            {{ current + 1 }}/3
          </div>
        </van-swipe>
      </div>
    </div>
  </div>
</template>
<script>
import { snap, swiper } from "@/config/index.js";

export default {
  data() {
    return {
      Epet: [],
      newGoods: [],
      books: [],
      current: 0
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  },
  async created() {
    this.snaps = snap;
    this.swiper = swiper;
    let Epet = await this.$axios.post(
      "https://www.easy-mock.com/mock/5d44f4bd02f05d18e0fc45d1/info/info"
    );
    this.Epet = Epet.data.datas.list[8].data.images;
    // window.console.log(Epet.data.datas.list[12].data.images);
    this.newGoods = Epet.data.datas.list[10].data.goods;
    this.books = Epet.data.datas.list[12].data.images;
  }
};
</script>

<style scoped>
#swiper2 {
  width: 100%;
  height: 100%;
}

#swiper2 .van-swipe {
  position: relative;
}

.van-swipe .custom-indicator {
  position: absolute;
  bottom: 10px;
  right: 20px;
}

.Eswiper {
  width: 100%;
  height: 100%;
}

.Eswiper img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

.brand2 {
  display: flex;
  justify-content: space-between;
}

.brand2 h3 {
  display: inline-block;
  margin-left: 10px;
  font-size: 16px;
}

.brand2 span {
  color: #999;
  font-size: 12px;
  line-height: 53px;
  margin-right: 10px;
}

.swiper1 {
  width: 100%;
}

.van-swipe-item {
  box-sizing: border-box;
  padding: 0 10px;
}

.swiper1 img {
  width: 100%;
  height: 100%;
}

.swiper1 .minImg {
  width: 100%;
  height: 100%;
}

.swiper1 .minImg img {
  width: 100%;
  height: 100%;
}

.swiper1 a {
  display: block;
}

.swiper1 .minImg a {
  width: 45%;
  height: 100%;
  float: left;
  text-align: center;
  margin: 5px;
}

.brand {
  box-sizing: border-box;
  width: 375px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin: 10px 0;
}

.brand h3 {
  display: inline-block;
  font-size: 16px;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}

.brand span {
  font-size: 12px;
  color: #999;
}

.hotgoods {
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 25px;
}

.hotgoods li {
  width: 50%;
  height: 100%;
  float: left;
}

.hotgoods li img {
  width: 58px;
  height: 58px;
}

.hotgoods li .p1 {
  font-size: 12px;
  font-weight: bold;
  color: red;
}

.hotgoods p {
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}

.hotgoods li .p2 {
  font-size: 12px;
  color: #999;
}

.mould-02 {
  width: 375px;
  height: 201px;
}

.mould-02 .host {
  width: 355px;
  height: 165px;
  margin: 0 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #cccccc;
  padding: 15px 5px;
}

.hostGods {
  width: 50%;
  height: 100%;
  float: left;
}

.hostTop {
  width: 100%;
  height: 16px;
  display: flex;
}

.hostTop .hostText:nth-child(2) {
  border-color: #fff;
}

.hostImgTop {
  width: 50%;
  height: 16px;
}

.hostImgTop img {
  width: 100%;
  height: 100%;
}

.hostText {
  width: 50%;
  height: 16px;
  font-size: 12px;
  border: 1px solid red;
  border-radius: 25px;
}

.hostText .sp1 {
  color: #fff;
  background: red;
}

/*---新品馆----*/

.newProduct {
  width: 100%;
  height: 243px;
}

.productTop {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 10px;
}

.productTop h3 {
  font-size: 16px;
}

.productTop span {
  font-size: 12px;
  color: #999;
  line-height: 53px;
}

#swiper3 {
  width: 100%;
  height: 190px;
  padding: 20px 20px;
  box-sizing: border-box;
}

#swiper3 .van-swipe {
  box-sizing: border-box;
  height: 160px;
  box-shadow: 0px 0px 5px #d4cece;
  border-radius: 15px;
  background: #fff;
  padding-top: 20px;
}

a {
  display: block;
}

.newGods {
  display: flex;
}

.newGods a {
  width: 45%;
  height: 110px;
  margin-right: 10px;
}

.newGods a img {
  width: 100%;
  height: 100%;
}

.goodsInfo {
  width: 55%;
  height: 110px;
}

.Gtxt {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #666;
}
.price .p1 {
  color: red;
  font-size: 14px;
  font-weight: bold;
}
.price .p2 {
  display: inline-block;
  font-size: 12px;
  color: #333;
  border: 1px solid #333;
  margin-left: 5px;
  padding: 2px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.oldPrice {
  font-size: 12px;
  color: #666;
}
/*-------小萌书------------*/
#swiper4 {
  width: 100%;
  height: 169px;
  box-sizing: border-box;
  padding: 0 10px;
}
#swiper4 a {
  width: 100%;
  height: 100%;
}
#swiper4 a img {
  width: 100%;
  border-radius: 15px;
  height: 100%;
}
</style>




