<template>
  <div class="header">
    <div class="header-left"><span class="iconfont">&#xe743;</span></div>
    <div class="header-input">
      <span class="iconfont">&#xe6ac;</span>
      <input placeholder="输入城市/景点/主题" />
    </div>
    <router-link to="city">
      <div class="header-right">
        {{ this.city || "城市" }}<span class="iconfont">&#xe877;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState(["city"]),
    ...mapGetters(["doubleCity"]),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "~styles/varibles.scss";

.header {
  height: $headerHeight;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $bgColor;
  color: #fff;
  &-left {
    width: 0.64rem;
    span {
      font-size: 0.64rem;
    }
  }
  &-input {
    flex: 1;
    display: flex;
    position: relative;
    input {
      flex: 1;
      height: 0.64rem;
      border-radius: 5px;
      border: none;
      padding-left: 25px;
    }
    .iconfont {
      position: absolute;
      z-index: 10;
      left: 12px;
      top: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      color: #333;
    }
  }
  &-right {
    min-width: 1.04rem;
    padding: 0 0.1rem;
    color: #fff;
  }
}
</style>