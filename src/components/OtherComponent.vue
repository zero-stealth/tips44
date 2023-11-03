<template>
  <div class="prediction-con">
    <h1>{{ $t('other.other-l4') }}</h1>
    <div class="prediction-p">
      <OtherPredictions buttonName="Double Chance" />
      <OtherPredictions buttonName="Over 2.5 Goals" />
      <OtherPredictions buttonName="Over 1.5 Goals" />
      <OtherPredictions buttonName="Both Teams To Score" />
      <!-- <OtherPredictions buttonName="Bet Of The Day" /> -->
      <button class="other-p-btn" @click="goToD()">{{ $t('navbar.nav-l3') }}</button>
      <button class="other-p-btn" @click="goToH()">{{ $t('navbar.nav-l4') }}</button>
      <button class="other-p-btn" @click="goToB()">{{ $t('navbar.nav-l2') }}</button>
      <OtherPredictions buttonName="Under 3.5 Goals" />
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import OtherPredictions from '../components/OtherPredictions.vue'

const router = useRouter()

const goToB = () => {
  router.push({ name: 'Banker' })
}

const goToD = () => {
  router.push({ name: 'Daily' })
}

const goToH = () => {
  router.push({ name: 'Basketball' })
}
</script>
<style>
@import '../style/other.css';
</style>
