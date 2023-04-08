<template>
  <p v-for="item in fetchedAsk" v-bind:key="item.id">
    <a :href="item.url">{{item.title}}</a>
    <small>{{ item.time_ago }} by {{item.user}}</small>
  </p>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed : {
    ...mapGetters(['fetchedAsk'])
  },
  created(){
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>