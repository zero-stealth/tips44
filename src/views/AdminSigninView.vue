<template>
  <div class="auth-container">
    <div class="form-l-wrapper">
      <div class="form-l-head">
        <h1>{{ $t('auth.auth-btn3') }}</h1>
      </div>
      <form @submit.prevent="create" class="l-form">
        <input type="text" class="input-l" placeholder="Full Name" v-model="username" />
        <input type="email" class="input-l" placeholder="Email Address" v-model="email" />
        <select class="input-l" v-model="selectedCountry">
          <option disabled value="">Select a country</option>
          <option v-for="country in countriesData" :key="country.code" :value="country.code">
            {{ country.name }}
          </option>
        </select>
        <input type="password" class="input-l" placeholder="Password" v-model="password" />
        <input type="password" class="input-l" placeholder="Confirm password" v-model="confirmPassword" />
        <button class="btn-f" type="submit">{{ $t('auth.auth-btn4') }}</button>
      </form>
      <span>{{ $t('auth.auth-span2') }}</span>
      <div class="l-alternatives">
        <button class="alt-btn" @click="login">
          {{ $t('auth.auth-btn1') }}
        </button>
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
import countriesData from '../components/countries.json'

const selectedCountry = ref('')
const router = useRouter()
const username = ref('')
const password = ref('')
const toast = useToast()
const email = ref('')
const confirmPassword = ref('')
const SERVER_HOST = import.meta.env.VITE_SERVER_HOST


const reset = () => {
  email.value = ''
  password.value = ''
  username.value = ''
  selectedCountry.value = ''
  confirmPassword.value = ''
}

const create = async () => {
  if (username.value !== '' && password.value !== '') {
    try {
      const response = await axios.post( `${SERVER_HOST}/auth/register-admin`, {
        username: username.value,
        email: email.value,
        password: password.value,
        country: selectedCountry.value,
        confirmPassword: confirmPassword.value,
        selectedCountry: selectedCountry.value
      })
      toast.success('welcome admin!')
      const token = response.data.token
      const id = response.data._id
      
      localStorage.setItem('username', username)
      localStorage.setItem('token', JSON.stringify(token))
      localStorage.setItem('id', id)

      router.push({ name: 'Panel' })
    } catch (error) {
      toast.error('please enter valid email and password')
      reset()

    }
  } else {
    toast.error('Please enter your email and password.')
    reset()
  }
}


const login = () => {
  router.push({ name: 'AdminLogin' })
}
</script>

<style >
@import '../style/auth.css';
</style>
