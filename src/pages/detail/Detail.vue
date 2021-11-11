<template>
  <div>
    <detail-banner
      :sightName="form.sightName"
      :bannerImg="form.bannerImg"
      :bannerImgs="form.gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="form.categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./compontents/Banner.vue";
import DetailHeader from "./compontents/Header.vue";
import DetailList from "./compontents/List.vue";
import axios from "axios";
export default {
  name: "Detail",
  data() {
    return {
      form: {},
    };
  },
  components: { DetailBanner, DetailHeader, DetailList },
  computed: {},
  methods: {
    getDetailInfo() {
      axios
        .get("/api/detail.json", { params: { id: this.$route.params.id } })
        .then((res) => {
          if (res && res.data && res.data.ret) {
            const data = res.data.data;
            this.form = data;
          }
        });
    },
  },
  mounted() {
    this.getDetailInfo();
  },
};
</script>

<style lang="scss" scoped>
.content {
  height: 50rem;
}
</style>