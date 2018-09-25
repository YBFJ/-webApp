<template>
<div>
<city-header></city-header>
 <city-search></city-search>
 <city-list :letter="letter" :cities="cities" :hotCities="hotCities"></city-list>
 <city-alphabet
 @change="handelLetterChange"
 :cities="cities"></city-alphabet>
</div>

</template>

<script>
import axios from 'axios';
import CityHeader from './components/Header';
import CitySearch from './components/search';
import CityList from './components/list';
import CityAlphabet from './components/Alphabet';
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    };
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res) {
      console.log(res);
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handelLetterChange(letter) {
      this.letter = letter;
      console.log(letter);
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped>
</style>
