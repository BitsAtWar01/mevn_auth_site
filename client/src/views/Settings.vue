<template>
<div class="row">
  <div class="col-sm-10 col-md-8 mx-auto my-1">
        <div class="card">
            <div class="card-body text-center">
                <h5 class="card-title">Admin Panel</h5>
                <p class="card-text">Some priviliges over a normal Wanderling.</p>
                <router-link :to="{name: 'Login', params: {role: 'admin'}}"  class="btn btn-dark">Login As an Admin</router-link>
            </div>
        </div>
    </div>
    <div class="col-sm-10 col-md-8 mx-auto my-1">
        <div class="card">
            <div class="card-body text-center">
                <h5 class="card-title">Super Admin Panel</h5>
                <p class="card-text">All the priviliges.</p>
                <router-link :to="{name: 'Login', params: {role: 'superadmin'}}"  class="btn btn-dark">Login As a Super Admin</router-link>
            </div>
        </div>
    </div>
    <div class="col-sm-10 col-md-8 mx-auto my-1">
        <div class="card">
            <div class="card-body text-center">
                <h5 class="card-title">Request For Admin/Superadmin Priviliges</h5>
                <p class="card-text">Apply for extra powers over other wanderlings. Apply by filling the form.</p>
                <router-link to="/request" class="btn btn-dark">Apply for Admin / Superadmin</router-link>
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