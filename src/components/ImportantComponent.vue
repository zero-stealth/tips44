<script setup>
import TelegramIcon from '../icons/telegram.vue'
import PayIcon from '../icons/payIcon.vue'
import VipIcon from '../icons/VipIcon.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goPay = () => {
  router.push({ name: 'Pay', params: { vipName: 'Supreme VIP' } })
}

const openTelegram = () => {
  window.open('https://t.me/+p9eRLjKRtv45Y2Fk', '_blank')
}
</script>
<template>
  <div class="imp-section">
    <div class="imp-info">
      <h1> {{ $t('important.imp-h1') }}</h1>
    </div>
    <div class="nav-important">
      <button class="nav-i-btn" @click="openTelegram()">
        <TelegramIcon class="icon-nav" />
        {{ $t('important.imp-btn1') }}
      </button>
      <a href="#vip" class="nav-i-btn">
        <VipIcon class="icon-nav " />
        {{ $t('important.imp-btn2') }}
      </a>
      <button class="nav-i-btn" @click="goPay()">
        <PayIcon class="icon-nav" />
        {{ $t('important.imp-btn3') }}
      </button>
    </div>
  </div>
</template>
<style>
@import '../style/important.css';
</style>
