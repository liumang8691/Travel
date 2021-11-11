<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{ sightName }}</div>
        <div class="banner-number">
          <span class="iconfont bannner-icon">&#xe63e;</span
          >{{ bannerImgs ? bannerImgs.length : 0 }}
        </div>
      </div>
    </div>
    <common-fade>
      <common-gallary
        :imgs="bannerImgs"
        @close="handleGallaryClose"
        v-show="showGallary"
      ></common-gallary>
    </common-fade>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
import CommonFade from "common/fade/Fade";
export default {
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array,
  },
  data() {
    return {
      showGallary: false,
    };
  },
  components: { CommonGallary, CommonFade },
  computed: {},
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  &-img {
    width: 100%;
  }
  &-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }
    .banner-number {
      padding: 0 0.4rem;
      line-height: 0.32rem;
      height: 0.32rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
      .bannner-icon {
        font-size: 0.24rem;
        margin-right: 0.2rem;
      }
    }
  }
}
</style>