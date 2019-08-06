<template>
  <div>
    <!-- 搜索 -->
    <div class=headFiexd>
      <div class="header">
        <div class="head-search">
          <van-icon name="search" /> 请输入搜索内容
        </div>
        <div class="head-right">
          <van-icon name="other-pay" size="25px" color="#fff" />
        </div>
      </div>
      <!-- 导航 -->
      <ul class="nav">
        <li @click="details(Xid)" v-for="(n,index) in navList" :key="index" :id="n.Xid">{{n.nav}}</li>
      </ul>
    </div>
    <div class="wsipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in wsipeImg" :key="index">
          <img :src="item.wsipeUrl" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="menuDiv">
      <ul>
        <li>
          <img src="https://img2.epetbar.com/2018-10/19/19/9aa905ec1644bf2773a451aca9af06d3.png@!water" alt="">
        </li>
        <li>
          <img src="https://img2.epetbar.com/2018-10/19/18/ed8fcf7e8b283838a02a6a1604cb0237.png@!water" alt="">
        </li>
        <li>
          <img src="https://img2.epetbar.com/2018-10/24/12/01eec912897fc4ec3b440eedeaa6f321.png@!water" alt="">
        </li>
        <li>
          <img src="https://img2.epetbar.com/2019-05/24/13/691f3019d676e751a88f83dd23e5c2c5.png@!water" alt="">
        </li>
        <li>
          <img src="https://img2.epetbar.com/2019-03/12/10/7afd8f297dcf5ef870f87e8bca179ee1.png@!water" alt="">
        </li>
      </ul>
    </div>
    <div class="coupon">
      <img :src="cou.img" alt="" v-for="(cou,idx) of coupons" :key="idx">
    </div>
    <div class="mould-01">
      <img src="@/assets/imgs/01.gif" alt="">
    </div>
    <Swiper />
    <Navigation />
  </div>
</template>
<script>
import Swiper from "@/views/home/Swiper";
import Navigation from "@/views/home/Navigation";

export default {
  name: "home",
  components: {
    Swiper,
    Navigation
  },
  data() {
    return {
      headFiexd: false,

      navList: [
        {
          Xid: "10",
          nav: "精选"
        },
        {
          Xid: "11",
          nav: "进口猫粮"
        },
        {
          Xid: "12",
          nav: "国产猫粮"
        },
        {
          Xid: "13",
          nav: "罐头零食"
        },
        {
          Xid: "14",
          nav: "驱虫助手"
        },
        {
          Xid: "15",
          nav: "猫砂馆"
        }
      ],
      wsipeImg: [
        {
          id: "1",
          wsipeUrl: require("@/assets/imgs/01.jpg")
        },
        {
          id: "2",
          wsipeUrl: require("@/assets/imgs/02.jpg")
        },
        {
          id: "3",
          wsipeUrl: require("@/assets/imgs/03.jpg")
        },
        {
          id: "4",
          wsipeUrl: require("@/assets/imgs/04.png")
        },
        {
          id: "5",
          wsipeUrl: require("@/assets/imgs/05.jpg")
        },
        {
          id: "6",
          wsipeUrl: require("@/assets/imgs/06.jpg")
        }
      ],
      coupons: [
        {
          title: "youhuijuan",
          img: require("@/assets/imgs/07.jpg")
        },
        {
          title: "youhuijuan",
          img: require("@/assets/imgs/08.jpg")
        }
      ]
    };
  },
  methods: {
    details(id) {
      this.$router.push({
        name: "detail",
        params: { id, name: "li" }
      });
    }
  },
  activated() {
    window.scroll = () => {
      if (window.scrollY >= 5) {
        this.headFiexd = true;
      } else {
        this.headFiexd = false;
      }
    };
  }

  // async mounted() {
  //   let datainfo = await this.$axios.get(
  //     "https://mallcdn.api.epet.com/v3/index/main.html?do=getStaticV415&cdn_version=20190805113558&pet_type=cat&version=415&is_single=0&system=wap&isWeb=1&distinct_id=16c521cdb612c1-0cd1134357c4e-5a442916-2073600-16c521cdb62167"
  //   );

  //   window.console.log(datainfo);
  // }
};
</script>
<style scoped>
/* #headFiexd {
  background: #ffffff;
  color: #666;
} */
.mould-01 {
  width: 375px;
  height: 80px;
  margin-top: 20px;
}
.mould-01 img {
  width: 100%;
  height: 100%;
}
.coupon {
  width: 50%;
  height: 210px;
  display: flex;
}
.coupon img {
  width: 100%;
  height: 100%;
}
.headFiexd {
  position: fixed;
  top: 0;
  z-index: 99;
}
.wsipe {
  widows: 100%;
  height: 290px;
}
.wsipe img {
  width: 100%;
  height: 100%;
}
.nav {
  width: 375px;
  height: 44px;
  white-space: nowrap;
  display: flex;
  overflow: hidden;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 20px;
}
.nav::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0.5);
}
.nav li {
  line-height: 44px;
  padding: 0 20px;
  color: #fff;
  font-size: 14px;
}
ul li:nth-child(1) {
  font-weight: bold;
  font-size: 18px;
}
.header {
  width: 375px;
  height: 30px;
  display: flex;
  line-height: 30px;
  margin-top: 25px;
}
.head-search {
  flex: 1;
  border-radius: 15px;
  margin: 0 10px;
  color: #666;
  padding-left: 10px;
  font-size: 12px;
  background: #fff;
}
.head-right {
  margin: 0 10px;
}
.menuDiv {
  width: 100%;
  height: 115px;
  position: relative;
  margin-top: -10px;
}
.menuDiv ul {
  display: flex;
}
.menuDiv ul li {
  width: 20%;
  height: 115px;
}
.menuDiv ul li img {
  width: 100%;
  height: 100%;
}
</style>


