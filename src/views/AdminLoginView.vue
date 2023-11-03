<template>
  <div
    class="auth-container"
    :style="{
      backgroundImage: `linear-gradient(110deg, rgba(3, 30, 60, 0.8), rgba(3, 30, 60, 0.7)), url(${SportBg})`
    }"
  >
    <div class="form-l-wrapper">
      <h1>{{ title }}</h1>
      <form @submit.prevent="login" class="l-form" v-if="!resetPage">
        <input type="email" class="input-l" placeholder="Email Address" v-model="email" />
        <input type="password" class="input-l" placeholder="Password" v-model="password" />
        <p>{{ errMsg }}</p>
        <button class="btn-f" type="submit">{{ $t('auth.auth-btn1') }}</button>
        <span @click="forgot">{{ $t('auth.auth-span1') }}</span>
      </form>
      <form @submit.prevent="resetAuth" class="l-form" v-else>
        <input type="email" class="input-l" placeholder="Email Address" v-model="email" />
        <input type="password" class="input-l" placeholder="Password" v-model="password" />
        <p>{{ errMsg }}</p>
        <button class="btn-f" type="submit">{{ $t('auth.auth-btn2') }}</button>
      </form>
      <span>or</span>
      <div class="l-alternatives">
        <button class="alt-btn" @click="create">{{ $t('auth.auth-btn3') }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const resetPage = ref(false)
const router = useRouter()
const password = ref('')
const title = ref('Login')
const errMsg = ref('')
const email = ref('')
const SERVER_HOST = import.meta.env.VITE_SERVER_HOST


const login = async () => {
  if (email.value !== '' && password.value !== '') {
    try {
      const response = await axios.post(`${SERVER_HOST}/auth/login`, {
        email: email.value,
        password: password.value
      });

      console.log(response.data);

      const token = response.data.token;
      if (token) {
      const id = response.data._id
        const isAdmin = response.data.isAdmin;
        const adminusername = response.data.username;

        localStorage.setItem('id', id);
        localStorage.setItem('admin', isAdmin);
        localStorage.setItem('username', adminusername);
        localStorage.setItem('token', JSON.stringify(token));

        router.push({ name: 'Panel' });
      } else {
        errMsg.value = 'Invalid email or password';
      }
    } catch (error) {
      console.error(error);
      errMsg.value = 'Login failed. Please check your email and password.';
    }
  } else {
    errMsg.value = 'Please enter your email and password.';
    alert(errMsg.value);
  }
};
const forgot = () => {
  title.value = 'Reset Your Account'
  resetPage.value = !resetPage.value
}

const create = () => {
  router.push({ name: 'AdminSignin' })
}

const resetAuth = async () => {
  if (email.value !== '' && password.value !== '') {
    try {
      const response = await axios.post(`${SERVER_HOST}/auth/reset`, {
        email: email.value,
        password: password.value
      })
      console.log(response.data) // Handle the response data as needed
      resetPage.value = !resetPage.value
    } catch (error) {
      errMsg.value = error
    }
  } else {
    errMsg.value = 'Write something'
  }
}
</script>

<style>
@import '../style/auth.css';
</style>
