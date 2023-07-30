<script setup>
import banner from '../assets/banner.jpg'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const isOpen = ref(false)
const sport = ref('')

const showMenu = () => {
  isOpen.value = !isOpen.value
}

const goPay = () => {
  router.push({ name: 'Pay' })
}

const openTelegram = () => {
  window.open('https://t.me/+p9eRLjKRtv45Y2Fk', '_blank')
}
</script>
<template>
  <div
    class="hero-section"
    :style="{
      backgroundImage: `url(${banner})`
    }"
  >
    <div class="hero-s-contain">
      <div class="hero-info">
        <h1>
          Access <span>free tips</span> and relish <span>daily victories </span> across all sporting
          <span>events.</span>
        </h1>
        <p>
          Tips90predict is a web-based platform that provides extremely precise predictions for
          football, soccer, basketball, and tennis, ensuring users can maximize their profits.
          Additionally, we offer up-to-date sports news to keep our users well-informed.
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
