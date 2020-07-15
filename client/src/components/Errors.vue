<template>
    <transition name='fade' appear>
        <div v-if="errors">
            <h3 class="text-danger">Errors:</h3>
            <ul class="list-group">
                <li class="list-group-item list-group-item-danger" v-for="error in errors" :key="error">{{ error.msg }}</li>
            </ul>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['errors']
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