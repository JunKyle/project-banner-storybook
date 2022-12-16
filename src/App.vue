<template>
  <div id="app">
    <BannerWidget :item="bannerObject"
                  v-if="bannerObject" />
  </div>
</template>

<script>
import BannerWidget from './components/BannerWidget.vue'

export default {
  name: 'App',
  data () {
    return {
      bannerObject: null
    };
  },
  components: {
    BannerWidget
  },
  mounted () {
      this.getBanner();
  },

  methods: {
    getBanner() {
      this.$axios
      .get('/static/banner.json')
      .then(response => {
        if (response && response.data) {
          this.bannerObject = response.data;
        }
      });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
