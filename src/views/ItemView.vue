<template>
 <div>
    <section>
      <user-profile :userInfo="userInfo">
        <template v-slot:username>
            <router-link :to="`/user/${userInfo.user}`">{{ userInfo.user }}</router-link>
        </template>
        <template v-slot:time>
            {{ 'Posted '+userInfo.time_ago }}
        </template>
      </user-profile>
    </section>
    <section>
        <h2>{{ userInfo.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="userInfo.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue";

export default {
  components: { 
    UserProfile 
  },
  computed : {
    userInfo(){
      return this.$store.state.item;
    }
  },
  created(){
    const id = this.$route.params.id;
    console.log(id);

    this.$store.dispatch('FETCH_ITEM', id);
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