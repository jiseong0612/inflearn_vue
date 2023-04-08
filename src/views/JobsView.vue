<template>
  <p v-for="job in fetchedJobs" v-bind:key="job.id">
    <a :href="job.url">{{job.title}}</a>
    <small>{{ job.time_ago }} by {{job.domain}}</small>
  </p>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed :{
    ...mapGetters (['fetchedJobs'])
  },
  created(){
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>