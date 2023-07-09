<template>
  <div
    class="prediction-con"
    :style="{
      backgroundImage: `url(${banner})`
    }"
  >
    <h1>Vip Packages</h1>
    <div class="prediction-p">
      <OtherVip buttonName="Supreme 2+ VIP" />
      <OtherVip buttonName="Mega plan VIP" />
      <OtherVip buttonName="Single VIP" />
      <OtherVip buttonName="Draw VIP" />
      <OtherVip buttonName="Halftime VIP" />
    </div>
  </div>
</template>
<script setup>
import banner from '../assets/banner.png'
import OtherVip from '../components/OtherVipPackage.vue'
</script>
<style>
@import '../style/other.css';
</style>
