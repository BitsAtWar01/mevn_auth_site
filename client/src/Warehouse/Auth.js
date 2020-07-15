import axios from 'axios';
import router from '../router/index';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    errors: null
};

const getters = {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    errors: state => state.errors
};

const actions = {
    //Login Actions 
    async login({
        commit
    }, user) {
        commit('auth_request');
        try {
            let res = await axios.post('/api/users/login', user);
            if(res.data.success){
                const token = res.data.token;
                const user = res.data.user;
                //Store the token into the local storage
                localStorage.setItem('token', token);
                //Set the axios defaults
                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user);
            }
            return res;
        } catch (err) {
            commit('auth_error', err)
        }
    },
    async register({
        commit
    }, userData) {
        try {
            commit('register_request');
            let res = await axios.post('/api/users/register', userData);
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
        commit('user_profile', res.data.user);
        return res;
    },
    //Logout User
    async logout({
        commit
    }) {
        await localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/login');
        return
    }
}

const mutations = {
    auth_request(state){
        state.errors = null;
        state.status = 'loading';
    },
    auth_success(state, token, user){
        state.token = token;
        state.user = user;
        state.success = 'success';
        state.errors = null;
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
    },
    profile_request(state){
        state.status = 'loading';
    },
    user_profile(state, user){
        state.user = user;
    }
};
 
export default {
    state,
    actions,
    mutations,
    getters
};