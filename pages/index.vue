<template>
  <homePage />
</template>

<script>
  import homePage from '~/modules/HomePage/index.vue';

  export default {
    layout: 'default-layout',
    components: {
      homePage,
    },
    // async asyncData ({ store, route }) {
    //   await store.dispatch('getData');
    // },
  }
</script>
