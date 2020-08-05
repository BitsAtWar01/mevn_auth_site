<template>
    <transition name='fade' appear mode="out-in">
        <div v-if="alert">
            <h3 class="text-success">Alert:</h3>
            <div class="alert alert-success" role="alert">
                {{alert}}
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
  computed: {
    ...mapGetters(['alert'])
  }
}
</script>

<style scoped>
    .list-group-item {
        border-radius: 0;
    }

    .fade-enter{
        opacity: 0;
    }

    .fade-enter-active{
        transition: opacity 0.5s;
    }

    .fade-leave{
        /* opacity: 1; */
    }

    .fade-leave-active{
        transition: opacity 0.1s;
        opacity: 0;
    }
</style>