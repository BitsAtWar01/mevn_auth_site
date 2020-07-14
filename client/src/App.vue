<template>
  <div id="app">
     <Navbar/>
     <br>
     <br>
     <div class="container">
       <Errors v-if="errors" :errors="errors"/>
       <router-view/>
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
