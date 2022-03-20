<template>
  <div class="home">
    <ListMovies/>
   </div>
</template>

<script>
import ListMovies from '../components/ListMovies.vue'
export default {
  name: 'Home',
  components: {
    ListMovies
  }
}
</script>
<style scoped>

</style>
