<template>
  <div>
    <p> id : {{ userMap.id }}</p>
    <p> karma : {{ userMap.karma }}</p>
    <p> created : {{ userMap.created }}</p>
  </div>
</template>

<script>
export default {
  computed:{
    userMap(){
      return this.$store.state.user;
    }
  },
  created(){
    const userName = this.$route.params.userName;
    console.log(userName);

    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style>

</style>