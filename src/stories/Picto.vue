<template>
  <font-awesome-icon 
    :class="classes"
    :icon="icon"></font-awesome-icon>
</template>

<script>
export default {
  name: 'Picto',
   props: {
    icon: {
      type: String,
      default: 'fa-location-dot',
      validator: function (value) {
        return ['fa-location-dot', 'fa-video-camera'].indexOf(value) !== -1;
      },
    },
    purple: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes() {
      return {
        'icon': true,
        'icon--purple': this.purple
      };
    }
  },
}
</script>

<style scoped lang="scss">
  @import "../assets/scss/atoms/_icon.scss";
</style>