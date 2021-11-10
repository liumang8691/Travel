<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
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
  margin-top: 0.1rem;
  .title {
    background-color: #eee;
    text-align: left;
    line-height: 0.46rem;
    padding-left: 0.2rem;
  }
  .item {
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    &-img {
      width: 1.7rem;
      height: 1.7rem;
      padding: 0.1rem;
    }
    &-info {
      flex: 1;
      padding: 0.1rem;
      min-width: 0;
      text-align: left;
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
      .item-button {
        margin-top: 0.16rem;
        line-height: 0.44rem;
        background-color: #ff9300;
        padding: 0 0.2rem;
        border-radius: 0.06rem;
        color: #fff;
      }
    }
  }
}
</style>