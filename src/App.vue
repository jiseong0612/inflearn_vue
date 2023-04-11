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
  <Spinner :loading="true"></Spinner>
</template>



<script>
import ToolBar from '@/components/ToolBar.vue'
import Spinner from './components/spinnerComp.vue'
// import bus from '@/utils/bus'
export default {
  components: {
    ToolBar
    , Spinner
  },
  data(){
    return {
      loadingStatus : false,
    };
  },
  methods: {
    startSpinner(){
      this.loadingStatus = true;
    },
    endSpinner(){
      this.loadingStatus = false;
    }
  },
  created(){
    //bus.$on('start:spinner', this.startSpinner);
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
