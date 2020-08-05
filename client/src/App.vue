<template>
  <div id="app">
     <Navbar/>
     <br>
     <br>
     <div class="container">
       <Alert class="mt-3"/>
       <Errors class="mt-3"/>
       <router-view/>
     </div>
  </div>
</template>

<script>
import Alert from './components/Alert.vue'
import Navbar from './components/Navbar.vue'
import Errors from './components/Errors.vue'
export default {
  components: {
    Alert,
    Navbar,
    Errors
  }
}
</script>

<style>
  
</style>
