<template>
  <tool-bar></tool-bar>
  <!-- 아래에서 위와 같이 바뀜 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- <transition name="fade">
    <router-view/>
  </transition> -->
</template>



<script>
import ToolBar from '@/components/ToolBar.vue'
export default {
  components: {
    ToolBar
  }
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
  }
  a{
    color : #34495e;
    text-decoration: none;
  }
  a:hover{
    color:#42b883;
    text-decoration: underline;

  }
  a.router-link-exact-active{
    text-decoration: underline;
  }
/* Router transition */
 .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
