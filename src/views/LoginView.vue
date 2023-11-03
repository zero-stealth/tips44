<template>
  <div
    class="auth-container"
    :style="{
      backgroundImage: `linear-gradient(
      45deg,
      rgb(75, 0, 129, 0.8),
      rgb(75, 0, 129, 0.7)
    ), url(${SportBg})`
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
        <!-- <span>or</span> -->
     
        <!-- <span @click="create">Create an account</span> -->
      </form>
      <form @submit.prevent="resetAuth" class="l-form" v-else>
        <input type="email" class="input-l" placeholder="Email Address" v-model="email" />
        <input type="password" class="input-l" placeholder="Password" v-model="password" />
        <p>{{ errMsg }}</p>
        <button class="btn-f" type="submit">{{ $t('auth.auth-btn2') }}</button>
      </form>
      <span>or</span>
      <div class="l-alternatives">
        <button class="alt-btn" @click="create">
          {{ $t('auth.auth-btn3') }}
        </button>
      </div>

    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import SportBg from '../assets/sport-bg.png'
import { useRouter } from 'vue-router'

const resetPage = ref(false)
const router = useRouter()
const username = ref('')
const password = ref('')
const title = ref('Login to your account')
const errMsg = ref('')
const email = ref('')
const SERVER_HOST = import.meta.env.VITE_SERVER_HOST


const reset = () => {
  password.value = ''
  username.value = ''
  email.value = ''
}

const login = async () => {
  if (email.value !== '' && password.value !== '') {
    try {
      const response = await axios.post( `${SERVER_HOST}/auth/login`, {
        email: email.value,
        password: password.value
      });

      const responseData = response.data;

      const token = responseData.token;
      if (token) {
        const token = responseData.token;
        const username = responseData.username;
        const id = responseData._id;

        localStorage.setItem('username', username);
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('id', id);

        router.push({ name: 'Vip' });
      } else {
        errMsg.value = 'Invalid email or password';
      }
    } catch (error) {
      errMsg.value = 'Login failed. Please check your email and password.';
    }
  } else {
    errMsg.value = 'Please enter your email and password.';
    alert(errMsg.value);
    reset();
  }
};

const forgot = () => {
  title.value = 'Reset your account'
  resetPage.value = !resetPage.value
}

const create = () => {
  router.push({ name: 'Signin' })
}

const resetAuth = async () => {
  if (email.value !== '' && password.value !== '') {
    try {
      const response = await axios.put( `${SERVER_HOST}/auth/reset`, {
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
    reset()
  }
}


</script>

<style>
@import '../style/auth.css';
</style>
