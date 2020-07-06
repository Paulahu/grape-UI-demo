<template>
  <svg class="g-icon" aria-hidden="true">

    <use xlink:href="#i-setting"></use>

  </svg>
</template>

<script>
  export default {
    name: 'Icon.vue',
    props: ['name']
  }
</script>

<style scoped lang="scss">
  .g-icon {
    width: 1em;
    height: 1em;
  }
</style>
