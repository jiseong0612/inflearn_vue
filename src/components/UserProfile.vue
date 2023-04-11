<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <div>
        <slot name="username"></slot>
      </div>
        <slot name="time"></slot>
        <slot name="karma"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props :{
    userInfo : Object
  },
  created(){
    console.log('profileVue')
  }
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user{
  font-size: 2.5rem;
}
.user-description{
  padding-left: 8px;
}
.time{
  font-size: 0.7rem;
}
</style>