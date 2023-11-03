<template>
  <div
    class="prediction-con"
    :style="{
      backgroundImage: `url(${banner})`
    }"
  >
    <h1>{{ $t('otherPackage.otherp-h1') }}</h1>
    <div class="prediction-p">
      <OtherVip class="vip" buttonName="Supreme VIP" />
      <!-- <OtherVip buttonName="MEGA ODDS" buttonOdds="5-10 odds" /> -->
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
