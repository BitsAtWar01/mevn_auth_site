<template>
    <div>
        <div class="alert alert-danger" v-for="error in errors" :key="error">{{ error.msg }}</div>
    </div>
</template>

<script>
export default {
    props: ['errors']
}
</script>

<style scoped>
    
</style>