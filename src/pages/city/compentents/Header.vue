<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <span class="iconfont header-back">&#xe743;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "~styles/varibles.scss";
.header {
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  font-size: 0.32rem;
  background: $bgColor;
  position: relative;
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