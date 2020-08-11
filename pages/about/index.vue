<template>
  <aboutPage />
</template>

<script>
  import aboutPage from '~/components/pages/about/main.vue';

  export default {
    layout: 'default-layout',
    components: {
      aboutPage,
    },
    async fetch ({ store }) {
      await store.dispatch('about/setCurrentUser');
    },
  }
</script>
