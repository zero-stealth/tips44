<template>
  <div class="card-comp">
    <div class="card-inv">
      <h2>{{ title }}</h2>
      <span>{{ currency }} {{ amount }}</span>
      <p>{{ description }}</p>
      <button @click="subscribe" class="btn-inv">Subscribe</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'; 

const router = useRouter();

const { title, currency, amount, description } = defineProps([
  'title',
  'currency',
  'amount',
  'description'
])

const subscribe = () => {
  router.push({ name: 'Vip' })
}
</script>
<style>
@import '../style/investment.css';
</style>
