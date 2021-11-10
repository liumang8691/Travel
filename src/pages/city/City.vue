<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "./compentents/Header.vue";
import CitySearch from "./compentents/Search.vue";
import CityList from "./compentents/List.vue";
import CityAlphabet from "./compentents/Alphabet.vue";

export default {
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: null,
    };
  },
  components: { CityHeader, CitySearch, CityList, CityAlphabet },
  computed: {},
  mounted() {
    this.getCityInfo();
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.handleGetCityInfo);
    },
    handleGetCityInfo(res) {
      if (res && res.data && res.data.ret) {
        const data = res.data.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLetterChange(letter) {
      this.letter = letter;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>