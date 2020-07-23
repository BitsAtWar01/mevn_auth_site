<template>
    <div>
        <h1 class="text-center text-muted">Register as a New Wanderling</h1>
        <div class="row">
            <div class="col-lg-6 col-md-8 mx-auto">
                <div class="card mb-2">
                    <div class="card-header text-white bg-dark">
                        <h4>Register</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="registerUser">
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
                                <label for="password">Password: </label>
                                <input 
                                    id="password"
                                    type="password"
                                    class="form-control"
                                    placeholder="Password"
                                    v-model="password"
                                />
                            </div>
                            <div class="form-group">
                                <label for="confirm_password">Confirm Password: </label>
                                <input 
                                    id="confirm_password"
                                    type="password"
                                    class="form-control"
                                    placeholder=" Confirm Password"
                                    v-model="confirm_password"
                                />
                            </div>
                            <input type="submit" class="btn btn-dark" value="Register">
                            &nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                            <router-link to="/login" class="float-right"><small class="text-muted">Already Have an Account?</small></router-link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return{
            username: "",
            password: "",
            confirm_password: "",
            name: "",
            email: ""
        }
    },
    methods: {
        ...mapActions(['register']),
        registerUser(){
            let user = {
                username: this.username,
                password: this.password,
                confirm_password: this.confirm_password,
                email: this.email,
                name: this.name
            }
            this.register({user: user, role: 'user'})
            .then(res => {
                if(res.data.success){
                    this.$router.push('/login');
                }
            })
        }
    }
}
</script>

<style scoped>
    .card, .btn, .form-control, .card-header {
        border-radius: 0;
    }
</style>