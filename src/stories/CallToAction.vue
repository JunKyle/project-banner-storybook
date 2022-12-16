<template>
  <button class="button"
          @click="onClick"
          :class="classes"
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
    purple: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    classes() {
      return {
        'button--purple': this.purple
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.color,
      };
    }
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/scss/atoms/_button.scss";
</style>
