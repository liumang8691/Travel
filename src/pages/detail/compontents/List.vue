<template>
  <div>
    <div class="item" v-for="item of list" :key="item.id">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{ item.title }}
      </div>
      <div class="item-children" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailList",
  props: {
    list: Array,
  },
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.item {
  &-title {
    line-height: 0.8rem;
    font-size: 0.32rem;
    padding: 0 0.2rem;
    display: flex;
    align-items: center;
    &-icon {
      display: inline-block;
      width: 0.36rem;
      height: 0.36rem;
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png);
      background-size: 0.4rem 3rem;
      margin-right: 0.1rem;
    }
  }
  &-children {
    padding: 0 0.4rem;
  }
}
</style>