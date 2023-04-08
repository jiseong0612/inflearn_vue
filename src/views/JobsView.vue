<template>
  <div v-for="user in users" v-bind:key="user.id">
    {{ user.title }}
  </div>
</template>

<script>
import{fetchJobsList} from '../api/index'
export default {
  data(){
    return {
      users : [],
    }
  },
  created(){
    var vm = this;
    fetchJobsList().then(function(response){
      vm.users = response.data;
    })
  }
}
</script>

<style>

</style>