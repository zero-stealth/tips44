<template>
  <div
    class="prediction-con"
    :style="{
      backgroundImage: `url(${backdot})`
    }"
  >
    <h1>Vip Subscription</h1>
    <div class="prediction-p">
      <OtherVip class="vip" buttonName="Supreme VIP" />
      <!-- <OtherVip buttonName="MEGA ODDS" buttonOdds="5-10 odds" /> -->
    </div>
  </div>
</template>
<script setup>
import backdot from '../assets/backdot.png'
import OtherVip from '../components/OtherVipPackage.vue'
</script>
<style>
@import '../style/other.css';
</style>
