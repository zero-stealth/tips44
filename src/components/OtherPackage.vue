<template>
  <div
    class="prediction-con"
    :style="{
      backgroundImage: `url(${banner})`
    }"
  >
    <h1>Vip Packages</h1>
    <div class="prediction-p">
      <OtherVip buttonName="Supreme 2+ " />
      <OtherVip buttonName="Mega VIP" />
      <OtherVip buttonName="Super singles" />
    </div>
  </div>
</template>
<script setup>
import banner from '../assets/banner.jpg'
import OtherVip from '../components/OtherVipPackage.vue'
</script>
<style>
@import '../style/other.css';
</style>
