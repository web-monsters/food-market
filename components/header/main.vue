<template>
  <header class="main__header header">
    <topline />

    <userPanel />

    <navigation />

  </header>
</template>

<script>
  import topline from '~/components/header/topline/main.vue';
  import userPanel from '~/components/header/userPanel/main.vue';
  import navigation from '~/components/header/navigation/main.vue';

  export default {
    components: {
      navigation,
      topline,
      userPanel,
    },
  }
</script>
