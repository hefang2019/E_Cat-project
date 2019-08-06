<template>
    <div id="homeNav">
        <div class="catFood">
            <div class="catFoodTop">
                <div class="topLeft">
                    <img src="https://img2.epetbar.com/nowater/2019-04/11/14/99dfa93be426097b51ced606f7f75e08.png" alt="">
                </div>
                <div class="enter">
                    <img src="https://img2.epetbar.com/nowater/2018-10/22/15/ead6eb6726b9cada7beee3f27cd55fa8.png" alt="">
                </div>
            </div>
            <div class="columnList">
                <a href="###" class="maxImg">
                    <img src="https://img2.epetbar.com/2019-04/28/10/6d921c56be4acc502df8a3d3a0794543.png?x-oss-process=style/water" alt="">
                </a>
                <ul>
                    <li v-for="(food,idx) of cat" :key="idx">
                        <a href="###">
                            <img :src="food.small_image.img_url" alt="">
                        </a>
                        <p v-text="food.sale_price"></p>
                        <del v-text="food.market_price"></del>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      cat: ""
    };
  },
  async created() {
    let cat = await this.$axios.post(
      "https://www.easy-mock.com/mock/5d44f4bd02f05d18e0fc45d1/info/info"
    );
    window.console.log(cat.data.datas.list[14].data.goods);
    this.cat = cat.data.datas.list[14].data.goods;
  }
};
</script>
<style lang="scss" scoped>
#homeNav {
  widows: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  a {
    display: block;
  }
  p {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
  }
  .catFoodTop {
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .topLeft {
      width: 80px;
      height: 100%;
      img {
        widows: 140px;
        height: 19px;
        margin-left: 20px;
      }
    }
    .enter {
      width: 20%;
      height: 100%;
      img {
        width: 38px;
        height: 22px;
      }
    }
  }
  .columnList {
    width: 100%;
    height: 287px;
    .maxImg {
      width: 100%;
      height: 116px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    ul {
      widows: 100%;
      height: 170px;
      box-sizing: border-box;
      padding: 20px 0 10px 0px;
      display: flex;
      flex-wrap: nowrap;
      overflow: hidden;
      overflow-x: auto;
      li {
        width: 100px;
        height: 120px;
        text-align: center;
        margin-left: 15px;

        a {
          width: 84px;
          height: 84px;
          margin: auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
        p {
          font-size: 14px;
          color: red;
          font-weight: bold;
        }
        del {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
</style>



