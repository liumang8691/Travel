<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOption: {
        autoplay: false,
      },
    };
  },
  created: function () {
    this.initList();
  },
  components: {},
  computed: {
    pages() {
      const pages = [];
      if (this.list) {
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
      }
      return pages;
    },
  },
  methods: {
    initList() {},
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/varibles.scss";
.icons {
  margin-top: 0.1rem;
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  .icon {
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    position: relative;
    &-img {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      &-content {
        height: 100%;
        display: block;
        margin: 0 auto;
      }
    }
    &-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      color: $darkTextColor;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>