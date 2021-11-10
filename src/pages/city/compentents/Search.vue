<template>
  <div>
    <div class="search">
      <input
        type="text"
        placeholder="输入城市名或拼音"
        class="search-input"
        v-model="keyword"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item in list"
          :key="item.id"
          @click="handleClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import ObserveDom from "@better-scroll/observe-dom";
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    cities: Object,
  },
  data() {
    return {
      keyword: null,
      list: [],
      timer: null,
    };
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (var i in this.cities) {
          this.cities[i].forEach((val) => {
            if (
              val.spell.indexOf(this.keyword) > -1 ||
              val.name.indexOf(this.keyword) > -1
            ) {
              result.push(val);
            }
          });
        }
        this.list = result;
      }, 100);
    },
    cities() {
      this.$nextTick(() => {
        this.scroll.refresh();
      });
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs["search"], {
      click: true,
      tap: true,
      ObserveDom: true,
    });
  },
  components: {},
  computed: {
    hasNoData() {
      return !this.list.length;
    },
  },
  methods: {
    handleClick(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"]),
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/varibles.scss";
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background-color: $bgColor;
  &-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}
.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background-color: #fff;
  }
}
</style>