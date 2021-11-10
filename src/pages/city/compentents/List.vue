<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleClick(item.name)"
          >
            <div class="button">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="item.id" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <ul class="item-list">
          <li
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleClick(innerItem.name)"
          >
            {{ innerItem.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    hot: Array,
    cities: Object,
    letter: String,
  },
  data() {
    return {
      scroll: null,
    };
  },
  watch: {
    letter(val) {
      if (this.letter) {
        this.scroll.scrollToElement(this.$refs[this.letter][0]);
      }
    },
    cities() {
      this.$$nextTick(() => {
        this.scroll.refresh();
      });
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, { click: true, tap: true });
  },
  components: {},
  computed: {
    ...mapState({
      currentCity: "city",
    }),
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
.border-topbottom::before {
  border-color: #ccc;
}
.border-topbottom::after {
  border-color: #ccc;
}
.border-bottom::before {
  border-color: #ccc;
}
.border-bottom::after {
  border-color: #ccc;
}
.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  .title {
    line-height: 0.54rem;
    background-color: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }
  .button-list {
    padding: 0.1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .button-wrapper {
      width: 33.33%;
      min-width: 33.33%;
      line-height: 0.4rem;
      .button {
        text-align: center;
        margin: 0.1rem;
        padding: 0.1rem 0;
        border-radius: 0.06rem;
        border: 0.02rem solid #ccc;
      }
    }
  }
  .item-list {
    .item {
      line-height: 0.76rem;
      color: #666;
      padding-left: 0.2rem;
    }
  }
}
</style>