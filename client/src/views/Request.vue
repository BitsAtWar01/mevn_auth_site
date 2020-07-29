<template>
  <div>
        <h1 class="text-center text-muted">Want to be a Admin/Superadmin Wanderling?</h1>
        <div class="row">
            <div class="col-lg-6 col-md-8 mx-auto">
                <div class="card mb-2">
                    <div class="card-header text-white bg-dark">
                        <h4>Request</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="requestUser">
                            <div class="form-group">
                                <label for="username">Username: </label>
                                <input 
                                    id="username"
                                    type="text"
                                    class="form-control"
                                    placeholder="Username"
                                    v-model="username"
                                />
                            </div>
                            <div class="form-group">
                                <label for="name">Name: </label>
                                <input 
                                    id="name"
                                    type="text"
                                    class="form-control"
                                    placeholder="Name"
                                    v-model="name"
                                />
                            </div>
                            <div class="form-group">
                                <label for="email">Email: </label>
                                <input 
                                    id="email"
                                    type="email"
                                    class="form-control"
                                    placeholder="Email"
                                    v-model="email"
                                />
                            </div>
                            <div class="form-group">
                                Role:
                                <br>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="role" id="admin" value="admin">
                                    <label class="form-check-label" for="admin">Admin</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="role" id="superadmin" value="superadmin">
                                    <label class="form-check-label" for="superadmin">Superadmin</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="request-body">Why do you think you are capable for the role?</label>
                                <textarea class="form-control rounded-0" id="request-body" rows="3"></textarea>
                            </div>
                            <input type="submit" class="btn btn-dark" value="Request">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        requestUser() {
            console.log('Under Construction!');
        }
    },
}
</script>

<style scoped>
    .card, .btn, .form-control, .card-header {
        border-radius: 0;
    }
</style>