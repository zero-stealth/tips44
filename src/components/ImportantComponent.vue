<script setup>
import TelegramIcon from '../icons/telegram.vue'
import whatsappIcon from '../icons/whatsapp.vue'
import telegramIcon from '../icons/telegram.vue'
import PayIcon from '../icons/payIcon.vue'
import VipIcon from '../icons/VipIcon.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goVip = () => {
  router.push({ name: 'Vip' })
}

const goFacebook = () => {
  window.open('https://www.facebook.com/profile.php?id=100063590618259', '_blank')
}

const goWhatsapp = () => {
  window.open('https://wa.me/254743247861?text=Hi+there+Charisma+Betting+Tips', '_blank')
}

const goTelegram = () => {
  window.open('https://t.me/+p9eRLjKRtv45Y2Fk', '_blank')
}

const goPay = () => {
  router.push({ name: 'Pay', params: { vipName: 'Supreme VIP' } })
}
</script>
<template>
  <div class="imp-section">
    <div class="imp-info">
      <h1>Bet-Tip-Win Offers</h1>
    </div>
    <div class="nav-important">
      <div class="nav-top-vat">
        <button class="nav-vat-btn" @click="goVip()">
          <VipIcon class="icon-vat" />
          Genuine Vip Tips
        </button>
      </div>
      <div class="nav-middle-vat">
        <button class="nav-vat-btn" @click="goPay()">
          <PayIcon class="icon-vat" />
          {{ $t('important.imp-btn3') }}
        </button>
        <button @click="goTelegram()" class="nav-vat-btn">
          <telegramIcon class="icon-vat" />
          Join Telegram
        </button>
      </div>
      <div class="nav-bottom-vat">
        <button @click="goWhatsapp()" class="nav-vat-btn">
          <whatsappIcon class="icon-vat" />
          {{ $t('home.home-btn2') }}
        </button>
      </div>
    </div>
  </div>
</template>
<style>
@import '../style/important.css';
</style>
