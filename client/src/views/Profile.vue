<template>
    <div>
        <h1 class="text-muted">This is your Wanderland</h1>
       {{ user }}
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    methods: {
        ...mapActions(['getProfile'])
    },
    created() {
        this.getProfile();
    },
    computed: {
        ...mapGetters(['user'])
    },
}
</script>

<style>

</style>