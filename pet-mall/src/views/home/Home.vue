<template>
  <div class="home">
    <Header />
    <!-- <Swiper /> -->
  </div>
</template>

<script>
import Header from "@/views/home/Header";
// import Swiper from "@/views/home/Swiper";
export default {
  name: "home",
  components: {
    Header
    // Swiper
  }
};
</script>
<style scoped>
.home {
  margin-bottom: 50px;
}
</style>

