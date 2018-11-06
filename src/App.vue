<template>
  <div>
    <navbar></navbar>
  </div>
</template>

<script>

  import navbar from './components/navbar';
  import {mapActions, mapGetters} from 'vuex';

  export default {
    components: {
      navbar,
    }
  }
</script>

<style scoped>

</style>
