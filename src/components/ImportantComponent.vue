<script setup>
import TelegramIcon from '../icons/telegram.vue'
import PayIcon from '../icons/payIcon.vue'
import VipIcon from '../icons/VipIcon.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const isOpen = ref(false)

const goPay = () => {
  router.push({ name: 'Pay', params: { vipName: 'common' } })
}

const openTelegram = () => {
  window.open('https://t.me/+p9eRLjKRtv45Y2Fk', '_blank')
}
</script>
<template>
  <div class="imp-section">
    <div class="imp-info">
      <h1>Exclusive offers</h1>
    </div>
    <div class="nav-important">
      <button class="nav-i-btn" @click="openTelegram()">
        <TelegramIcon class="icon-nav" />
        Join telegram
      </button>
      <a href="#vip" class="nav-i-btn">
        <VipIcon class="icon-nav " />
        VIP Packages
      </a>
      <button class="nav-i-btn" @click="goPay()">
        <PayIcon class="icon-nav" />
        How to pay
      </button>
    </div>
  </div>
</template>
<style>
@import '../style/important.css';
</style>
