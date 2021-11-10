<template>
  <div class="recommend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  data() {
    return {};
  },
  created: function () {
    this.initData();
  },
  components: {},
  computed: {},
  methods: {
    initData() {},
  },
};
</script>

<style lang="scss" scoped>
.recommend {
  .title {
    background-color: #eee;
    text-align: left;
    line-height: 0.46rem;
    padding-left: 0.2rem;
  }
  .item {
    overflow: hidden;
    .item-img-wrapper {
      overflow: hidden;
      height: 0;
      padding-bottom: 37.09%;
    }
    &-img {
      width: 100%;
    }
    &-info {
      text-align: left;
      padding: 0.1rem;
      .item-title {
        line-height: 0.54rem;
        font-size: 0.3rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .item-desc {
        line-height: 0.4rem;
        color: #ccc;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>