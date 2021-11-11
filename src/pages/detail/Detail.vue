<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./compontents/Banner.vue";
import DetailHeader from "./compontents/Header.vue";
import DetailList from "./compontents/List.vue";
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          title: "成人票",
          children: [
            { id: 11, title: "成人票" },
            { id: 12, title: "学生票" },
            { id: 13, title: "VIP票" },
            {
              id: 14,
              title: "儿童票",
              children: [
                { id: 1411, title: "成人票" },
                { id: 1412, title: "学生票" },
                { id: 1413, title: "VIP票" },
                { id: 1414, title: "儿童票" },
              ],
            },
          ],
        },
        { id: 2, title: "学生票" },
        { id: 3, title: "VIP票" },
        { id: 4, title: "儿童票" },
      ],
    };
  },
  components: { DetailBanner, DetailHeader, DetailList },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.content {
  height: 50rem;
}
</style>