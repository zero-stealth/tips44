<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const isSigninOrLoginRoute = computed(() => {
  const route = useRoute()
  return route.name === 'Signin' || route.name === 'Login' || route.name === 'AdminLogin' || route.name === 'AdminSignin'
})
</script>

<template>
  <div class="app-x">
    <div class="app-nav-m">
    </div>
    <div class="app-main">
      <NavBar v-if="!isSigninOrLoginRoute"/>  
      <RouterView />
    </div>
    <Footer v-if="!isSigninOrLoginRoute" />
  </div>
</template>

<style>
@import './style/app.css';
</style>
