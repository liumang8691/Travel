<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from "./compontents/Banner.vue";
import DetailHeader from "./compontents/Header.vue";
export default {
  data() {
    return {};
  },
  components: { DetailBanner, DetailHeader },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.content {
  height: 50rem;
}
</style>