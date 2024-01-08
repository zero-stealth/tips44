<template>
  <div class="auth-container">
    <div class="form-l-wrapper">
      <div class="form-l-head">
        <h1>{{ title }}</h1>
      </div>
      <form @submit.prevent="login" class="l-form" v-if="!resetPage">
        <input type="email" class="input-l" placeholder="Email" v-model="email" />
        <input type="password" class="input-l" placeholder="Password" v-model="password" />
        <div class="l-form-forgot">
          <span @click="forgot">{{ $t('auth.auth-span1') }}</span>
        </div>
        <button class="btn-f" type="submit">{{ $t('auth.auth-btn1') }}</button>
      </form>
      <form @submit.prevent="resetAuth" class="l-form" v-else>
        <input type="email" class="input-l" placeholder="Email" v-model="email" />
        <input type="password" class="input-l" placeholder="Password" v-model="password" />
        <button class="btn-f" type="submit">{{ $t('auth.auth-btn2') }}</button>
      </form>
      <span>or</span>
      <div class="l-alternatives">
        <button class="alt-btn" @click="create">{{ $t('auth.auth-btn3') }}</button>
      </div>
    </div>
    <div class="auth-background-img">
      <!-- image -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const resetPage = ref(false)
const router = useRouter()
const toast = useToast()
const username = ref('')
const password = ref('')
const title = ref('Login to your account')
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
      const response = await axios.post(`${SERVER_HOST}/auth/login`, {
        email: email.value,
        password: password.value
      })

      const responseData = response.data

      const token = responseData.token
      if (token) {
        const token = responseData.token
        const username = responseData.username
        const id = responseData._id

        localStorage.setItem('username', username)
        localStorage.setItem('token', JSON.stringify(token))
        localStorage.setItem('id', id)

        router.push({ name: 'Vip' })
        toast.success('welcome back !')
      } else {
        toast.error('Invalid email or password')
      }
    } catch (error) {
      toast.error('Invalid email or password')
    }
  } else {
    toast.error('Please enter your email and password.')
    reset()
  }
}

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
      const response = await axios.put(`${SERVER_HOST}/auth/reset`, {
        email: email.value,
        password: password.value
      })
      resetPage.value = !resetPage.value
      toast.success('Reset successful.')
    } catch (error) {
      toast.error('Reset failed')
    }
  } else {
    toast.error('Please enter your email and password.')
    reset()
  }
}
</script>

<style>
@import '../style/auth.css';
</style>
