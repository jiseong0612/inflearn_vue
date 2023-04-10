<template>
  <p v-for="job in jobs" v-bind:key="job.id">
    <a :href="job.url">{{job.title}}</a> 
    <small>
      {{ job.time_ago }}, {{job.domain}}
    </small>
  </p>
</template>

<script>
export default {
  computed:{
    jobs(){
      return this.$store.state.jobs
    }
  },
  created(){
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>