<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <span class="iconfont header-abs-back">&#xe743;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="div" to="/">
        <span class="iconfont header-fixed-back">&#xe743;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0,
      },
    };
  },
  activated: function () {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  components: {},
  computed: {},
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = {
          opacity,
        };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/varibles.scss";

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 50%;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  &-back {
    color: #fff;
    font-size: 0.4rem;
  }
}

.header-fixed {
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  font-size: 0.32rem;
  background: $bgColor;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  &-back {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 0.4rem;
    color: #fff;
    width: 0.64rem;
    text-align: center;
  }
}
</style>