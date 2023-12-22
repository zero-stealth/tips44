<script setup>
import hero from '../assets/hero.jpg'
</script>
<template>
  <div
    class="hero-section"
    :style="{
      backgroundImage: `url(${hero})`
    }"
  >
    <div class="hero-s-contain">
      <div class="hero-info">
        <h1>
          {{ $t('hero.hero-h1') }} <span> {{ $t('hero.hero-span1') }} </span> {{ $t('hero.hero-span2') }} <span> {{ $t('hero.hero-span3') }} </span> {{ $t('hero.hero-span4') }}
          <span>{{ $t('hero.hero-span5') }}.</span>
        </h1>
        <p>
          {{ $t('hero.hero-p1') }}
        </p>
      </div>
      <div class="nav-important">
      </div>
    </div>
  </div>
</template>
<style>
@import '../style/nav.css';
</style>
