<template>
  <div class="center">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import homeHeader from "./compontents/Header.vue";
import homeSwiper from "./compontents/Swiper.vue";
import homeIcons from "./compontents/Icons.vue";
import homeRecommend from "./compontents/Recommend.vue";
import homeWeekend from "./compontents/Weekend.vue";
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: { homeHeader, homeSwiper, homeIcons, homeRecommend, homeWeekend },
  data() {
    return {
      lastCity: null,
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  mounted() {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  computed: {
    ...mapState(["city"]),
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json?city=" + this.city).then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      if (res && res.data && res.data.ret) {
        const data = res.data.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    },
  },
};
</script>

<style scoped>
.center {
  text-align: center;
}
</style>
