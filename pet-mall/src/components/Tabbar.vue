<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item v-for="(item,idx) of list" :key="idx" :icon="item.icon" @click="toggleRoute(item)">
        {{ item.label }}
      </van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      list: [
        {
          icon: "home-o",
          label: "精选",
          route: "/"
        },
        {
          icon: "search",
          label: "分类",
          route: "/category"
        },
        {
          icon: "friends-o",
          label: "小萌书",
          route: "/opgcmain"
        },
        {
          icon: "setting-o",
          label: "购物车",
          route: "/shopcar"
        },
        {
          icon: "setting-o",
          label: "我的E宠",
          route: "/user"
        }
      ]
    };
  },
  methods: {
    toggleRoute(item) {
      window.console.log(item);
      this.$router.push({ path: item.route });
    }
  }
};
</script>

    


