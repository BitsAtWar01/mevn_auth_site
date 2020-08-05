<template>
    <div>
        <h1 class="text-center text-muted">Login into your Wanderland</h1>
        <div class="row">
            <div class="col-lg-6 col-md-8 mx-auto">
                <div class="card mb-2">
                    <div class="card-header text-white bg-dark">
                        <h4>Hey {{ this.role }}! Please Login</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="loginUser">
                            <div class="form-group">
                                <label for="username">Username: </label>
                                <input 
                                    id="username"
                                    type="text" 
                                    class="form-control"
                                    placeholder="Username"
                                    name="username" 
                                    v-model="username"
                                />
                            </div>
                            <div class="form-group">
                                <label for="password">Password:</label>
                                <input 
                                    id="password"
                                    type="password"
                                    class="form-control"
                                    placeholder="Password"
                                    name="password"
                                    v-model="password"
                                    autocomplete="on"
                                />
                            </div>
                            <input type="submit" class="btn btn-dark" value="Login">
                            &nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                            <router-link v-if="role==='user'" to="/register" class="float-right"><small class="text-muted">Don't have an account?</small></router-link>
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
    props:{
        role: {
            type: String,
            default: 'user'
        }
    },
    data(){
        return{
            username: "",
            password: ""
        }
    },
    methods: {
        ...mapActions(['login']),
        loginUser() {
            let user = {
                username: this.username,
                password: this.password
            };
            this.login({user: user, role: this.role})
            .then(res => {
                if(res.data.success){
                    if(this.role === "user"){
                        this.$router.push('/profile');
                    } else {
                        this.$router.push('/dashboard');
                    }
                }
            }).catch(err => {
                console.log(err);
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