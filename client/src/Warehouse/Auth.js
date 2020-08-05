import axios from 'axios';
import router from '../router/index';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    errors: null,
    alert: null
};

const getters = {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    errors: state => state.errors,
    alert: state => state.alert
};

const actions = {
    //Login Actions 
    async login({
        commit
    }, payload) {
        commit('auth_request');
        try {
            let res = await axios.post('/api/users/login-' + payload.role, payload.user);
            if(res.data.success){
                const userPayload = {
                    token : res.data.token,
                    user : res.data.user
                }
                //Store the token into the local storage
                localStorage.setItem('token', userPayload.token);
                //Set the axios defaults
                axios.defaults.headers.common['Authorization'] = userPayload.token;
                commit('auth_success', userPayload);
            }
            return res;
        } catch (err) {
            commit('auth_error', err)
        }
    },
    async register({
        commit
    }, payload) {
        try {
            commit('register_request');
            let res = await axios.post('/api/users/register-' + payload.role, payload.user);
            if(res.data.success !== undefined) {
                commit('register_success');
            }
            return res;
        } catch (err) {
            commit('register_error', err)
        }
    },
    //Get the User Profile
    async getProfile({
        commit
    }){
        commit('profile_request');
        let res = await axios.get('/api/users/profile');
        commit('user_profile', res.data);
        return res;
    },
    //Logout User
    async logout({
        commit
    }) {
        await localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/');
        return
    },
    async request({
        commit
    }, payload) {
        commit('req_request');
        try {
            let res = await axios.post('/api/users/request', payload);
            if(res.data.success != undefined){
                commit('req_success');
            }
            return res;
        } catch (err) {
            commit('req_error', err);
        }
    }
}

const mutations = {
    auth_request(state){
        state.errors = null;
        state.status = 'loading';
    },
    auth_success(state, payload){
        state.token = payload.token;
        state.user = payload.user;
        state.success = 'success';
        state.errors = null;
        state.alert = "Yay! You are now Loggeg in.";
        setTimeout(() => { state.alert = null }, 5000);
    },
    auth_error(state, err){
        state.errors = err.response.data.errors;
        setTimeout(() => { state.errors = null }, 5000);
    },
    register_request(state){
        state.errors = null;
        state.success = 'loading';
    },
    register_success(state){
        state.errors = null;
        state.status = 'success';
        state.alert = "Yay! User is now registered.";
        setTimeout(() => { state.alert = null }, 5000);
    },
    register_error(state, err){
        state.errors = err.response.data.errors;
        setTimeout(() => { state.errors = null }, 5000);
    },
    logout(state){
        state.errors = null;
        state.status = '';
        state.token = '';
        state.user = {};
        state.alert = "Goodbye! You have successfully logged out.";
        setTimeout(() => { state.alert = null }, 5000);
    },
    profile_request(state){
        state.status = 'loading';
    },
    user_profile(state, user){
        state.user = user;
    },
    req_request(state){
        state.errors = null;
        state.status = 'loading';
    },
    req_success(state){
        state.success = 'success';
        state.errors = null;
        state.alert = "Yay! Your request has now been recorded.";
        setTimeout(() => { state.alert = null }, 5000);
    },
    req_error(state, err){
        state.errors = err.response.data.errors;
        setTimeout(() => { state.errors = null }, 5000);
    },
};
 
export default {
    state,
    actions,
    mutations,
    getters
};