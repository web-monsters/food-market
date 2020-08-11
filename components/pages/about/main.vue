<template>
  <div class="about-page">
    <div class="about-page__user user">
      <div class="container">
        <h3>{{ title }}</h3>

        <div class="user">
          <p>{{ currentUser }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        title: 'about/getTitle',
        currentUser: 'about/getCurrentUser',
      }),
    },
    mounted () {
      console.log(this.currentUser);
    },
  }
</script>
