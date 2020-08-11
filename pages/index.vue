<template>
  <homePage />
</template>

<script>
  import homePage from '~/components/pages/home/main.vue';

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
