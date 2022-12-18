<template>
  <button class="button"
          @click="onClick"
          :style="style">{{label}}</button>
</template>

<script>
export default {
  name: 'CallToAction',
   props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String
    },
    backgroundColor: {
      type: String
    },
    url: {
      type: String,
      default: '',
      required: true
    }
  },

  computed: {
    style() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.color,
      };
    }
  },

  methods: {
    onClick() {
      window.location.href = this.url;
    },
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/scss/atoms/_button.scss";
</style>
