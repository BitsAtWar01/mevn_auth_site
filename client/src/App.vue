<template>
  <div id="app">
     <Navbar/>
     <br>
     <br>
     <div class="container">
       <router-view/>
       <Errors class="mt-3" :errors="errors"/>
     </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from './components/Navbar.vue'
import Errors from './components/Errors.vue'
export default {
  components: {
    Navbar,
    Errors
  },
  computed: {
    ...mapGetters(['errors'])
  }
}
</script>

<style>
  
</style>
