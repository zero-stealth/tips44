<template>
  <div
    class="hero-section btn-view"
    :style="{
      backgroundImage: getBackgroundImage()
    }"
  >
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
</template>

<script setup>
import TelegramIcon from '../icons/telegram.vue';
import basketball from '../assets/basketball.jpg';
import banner from '../assets/banner.png';
import tennis from '../assets/tennis.jpg';
import hockey from '../assets/hockey.jpg';
import PayIcon from '../icons/payIcon.vue';
import VipIcon from '../icons/VipIcon.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goPay = () => {
  router.push({ name: 'Pay' });
};

const openTelegram = () => {
  window.open('https://t.me/sportypredict_tips', '_blank');
};

const getBackgroundImage = () => {
  if (router.currentRoute.value.name === 'Tennis') {
    return `url(${tennis}), linear-gradient( rgb(92, 13, 32),rgb(92, 13, 32)`;
  } else if (router.currentRoute.value.name === 'Basketball') {
    // Update with the desired background for the Basketball route
    return `url(${basketball}),linear-gradient( rgb(92, 13, 32),rgb(92, 13, 32)`;
  } else if (router.currentRoute.value.name === 'Hockey') {
    // Update with the desired background for the Hockey route
    return `url(${hockey}),linear-gradient( rgb(92, 13, 32),rgb(92, 13, 32)`;
  } else {
    return `url(${banner})`;
  }
};
</script>

<style>
@import '../style/nav.css';
</style>
