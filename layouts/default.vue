<template>
  <div class="main">
    <mainHeader />

    <main class="main__body">
      <nuxt />
    </main>

    <mainFooter /> <!-- todo sticky -->
  </div>
</template>

<script>
  import mainHeader from '~/components/header/main.vue';
  import mainFooter from '~/components/footer/main.vue';

  export default {
    components: {
      mainHeader,
      mainFooter,
    },
  }
</script>
