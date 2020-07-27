<template>
<div class="row">
  <div class="col-sm-10 col-md-8 mx-auto my-1">
        <div class="card">
        <div class="card-body text-center">
            <h5 class="card-title">Admin Panel</h5>
            <p class="card-text">Some Privilidges over a normal User.</p>
            <router-link :to="{name: 'Login', params: {role: 'admin'}}" href="#" class="btn btn-dark">Login As an Admin</router-link>
        </div>
        </div>
    </div>
    <div class="col-sm-10 col-md-8 mx-auto my-1">
        <div class="card">
        <div class="card-body text-center">
            <h5 class="card-title">Super Admin Panel</h5>
            <p class="card-text">All the privilidges.</p>
            <router-link :to="{name: 'Login', params: {role: 'superadmin'}}" href="#" class="btn btn-dark">Login As a Super Admin</router-link>
        </div>
        </div>
    </div>
</div>
</template>

<style scoped>
    .card, .btn, .form-control, .card-header {
        border-radius: 0;
    }
</style>