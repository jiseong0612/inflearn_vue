<template>
  <div v-for="item in fetchedAsk" v-bind:key="item.id">
    <router-link :to="`/item/${item.id}`">{{item.title}}</router-link> .... by <router-link :to="`/user/${item.user}`"> {{item.user}}</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed : {
    ...mapGetters(['fetchedAsk'])
    // ask(){w
    //   return this.$store.state.ask;
    // }
  },
  created(){
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>