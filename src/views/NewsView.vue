<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router'
import ArrowIcon from '@/icons/ArrowIcon.vue'
import { ref, onMounted, computed } from 'vue'

const newsData = ref([])
const router = useRouter()

const goBack = () => {
  router.go(-1)
}

const getNews = async () => {
  try {
    const response = await axios.get(
      'https://livescore-football.p.rapidapi.com/soccer/news-list',
      {
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
          'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST
        },
      }
    )
    console.log(response.data.data)
    newsData.value = response.data.data // Set the newsData to the response directly
    console.log(newsData.value)
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  getNews()
})

const filteredNewsData = computed(() => {
  const newsID = router.currentRoute.value.params.id
  return newsData.value.filter(newsItem => newsItem.id === newsID)
})
</script>

<template>
  <div class="details-container news-pin">
    <div v-for="newsItem in filteredNewsData" :key="newsItem.id" class="details-wrapper">
      <div
        class="details-image"
        :style="{
          backgroundImage: `url(${newsItem.image})`
        }"
      >
        <div class="details-h">
          <ArrowIcon class="details-arrow" @click="goBack()" />
          <h2> {{ $t('sport.sport-h1') }}</h2>
          <span></span>
        </div>
      </div>
      <div class="news-details-i">
        <h1>{{ newsItem.title }}</h1>
        <span>{{ newsItem.caption }}</span>
        <a :href="newsItem.url">more info</a>
      </div>
    </div>
  </div>
  <div class="mobilenav-layout">
    <mobileNav />
  </div>
</template>

<style> 
@import '../style/specific.css';
@import '../style/predictions.css';
</style>
