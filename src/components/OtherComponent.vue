<template>
  <div class="imp-section">
    <div class="imp-info">
      <h1>Tips Free </h1>
  </div>
    <div class="nav-important">
      <div class="nav-top-vat">
        <button class="other-p-btn" @click="goToD()">{{ $t('navbar.nav-l3') }}</button>
      </div>
      <div class="nav-middle-vat">
        <div class="middle-vat">
          <OtherPredictions buttonName="Over 2.5 Goals" />
          <OtherPredictions buttonName="Both Teams To Score" />
        </div>
        <div class="middle-vat">
          <OtherPredictions buttonName="Double Chance" />
          <OtherPredictions buttonName="Over 1.5 Goals" />
        </div>
      </div>
      <div class="nav-bottom-vat"></div>
      <button class="other-p-btn" @click="goTelegram()">Telegram Tips</button>

      <!-- <button class="other-p-btn" @click="goToH()">{{ $t('navbar.nav-l4') }}</button>
      <button class="other-p-btn" @click="goToB()">{{ $t('navbar.nav-l2') }}</button>
      <OtherPredictions buttonName="Under 3.5 Goals" /> -->
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import OtherPredictions from '../components/OtherPredictions.vue'

const router = useRouter()



const goToD = () => {''
  router.push({ name: 'Daily' })
}

const goTelegram = () => {
  window.open('https://t.me/+p9eRLjKRtv45Y2Fk', '_blank')
}
</script>
<style>
@import '../style/important.css';
</style>
