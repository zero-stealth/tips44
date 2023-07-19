<script setup>
import TelegramIcon from '../icons/telegram.vue'
import banner from '../assets/banner.jpg'
import PayIcon from '../icons/payIcon.vue'
import VipIcon from '../icons/VipIcon.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const isOpen = ref(false)
const sport = ref('')

const showMenu = () => {
  isOpen.value = !isOpen.value
}

const goPay = () => {
  router.push({ name: 'Pay' })
}

const openTelegram = () => {
  window.open('https://t.me/sportypredict_tips', '_blank')
}
</script>
<template>
  <div
    class="hero-section"
    :style="{
      backgroundImage: `url(${banner}),  linear-gradient( rgb(92, 13, 32),rgb(92, 13, 32)`
    }"
  >
    <div class="hero-s-contain">
      <div class="hero-info">
        <h1>
          Get <span>free tips</span> and enjoy <span>winnings</span> everday on all <span>Sports</span> 
        </h1>
        <p>
          We offer top-notch betting tips and predictions for football, basketball, hockey and tennis. Take a break, unwind, and reap the rewards. We've handled all the groundwork, so you can sit back and enjoy the benefits hassle-free
        </p>
        
      </div>
      <div class="nav-important">
        <a href="#vip" class="nav-i-btn">
         <VipIcon class="icon-nav nav-i" /> 
         VIP Packages
        </a>
      <button class="nav-i-btn" @click="openTelegram()">
        <TelegramIcon class="icon-nav nav-i" />
        Join telegram
      </button>
      <button class="nav-i-btn" @click="goPay()">
        <PayIcon class="icon-nav nav-i" />
        How to pay
      </button>
    </div>
    </div>
  </div>
</template>
<style>
@import '../style/nav.css';
</style>
