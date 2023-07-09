<template>
  <div
    class="prediction-con"
    :style="{
      backgroundImage: `url(${banner})`
    }"
  >
    <h1>Vip Packages</h1>
    <div class="prediction-p">
      <OtherVip buttonName="Investments 2+ vip" />
      <OtherVip buttonName="Mega plan Vip" />
      <OtherVip buttonName="Single Vip" />
      <OtherVip buttonName="Draw Vip" />
      <OtherVip buttonName="Halftime Vip" />
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
