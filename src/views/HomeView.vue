<template>
  <HeroComponent />
  <important />
  <div class="home-main">
    <div class="main-h">
      <div class="main-header">
        <div class="header-info">
          <h1>{{ $t('banker.banker-h2') }} {{ currentDate }}</h1>
        </div>
        <div class="header-btn">
          <button class="btn-h" :class="{ 'active-btn': offset > 0 }" @click="previousDay">
            <Arrow class="btn-icon icon-left" />
            {{ $t('basketball.b-btn1') }} 
          </button>
          <button class="btn-h" :class="{ 'active-btn': offset < 0 }" @click="nextDay">
            {{ $t('basketball.b-btn2') }}
            <Arrow class="btn-icon icon-right" />
          </button>
        </div>
      </div>
      <template v-if="cardData.length > 0">
        <div v-for="item in cardData" class="main-h-card" :key="item._id">
          <Card
            v-for="card in item"
            :key="card._id"
            :tip="card.tip"
            :status="card.status"
            :leagueIcon="card.leagueIcon"
            :teamAIcon="card.teamAIcon"
            :teamBIcon="card.teamBIcon"
            :teamA="card.teamA"
            :teamB="card.teamB"
            :league="card.league"
            :showScore="card.showScore"
            :teamAscore="card.teamAscore"
            :teamBscore="card.teamBscore"
            :formationA="formatFormation(card.formationA) ? card.formationA[0].split('-') : []"
            :formationB="formatFormation(card.formationB) ? card.formationB[0].split('-') : []"
            :time="card.time"
          />
        </div>
      </template>
      <template v-else>
        <div class="home-freetip">
          <h1> {{ $t('banker.banker-h3') }}</h1>
        </div>
      </template>
    </div>
    <FreeExpertView />
    <OtherPackage id="vip" />
    <VipAdsComponent />
    <div class="news-main">
      <div class="news-header">
        <div class="news-info">
          <h1> {{ $t('home.home-h1') }}</h1>
        </div>
        <div class="news-link">
          <Arrow class="news-icon icon-left" />
          <Arrow class="news-icon icon-left" />

          <span v-if="showMoreButton" @click="showMoreNews">{{ $t('home.home-m1') }}</span>
          <span v-else @click="showLessNews">{{ $t('home.home-m2') }}</span>
          <Arrow class="news-icon" />
          <Arrow class="news-icon" />
        </div>
      </div>
      <div class="news-wrapper">
        <NewsCard
          v-for="(newsItem, index) in visibleNews"
          :key="index"
          :banner="newsItem.image"
          @click="newsInfo(newsItem.id)"
        >
          <h2>{{ newsItem.caption }}</h2>
        </NewsCard>
      </div>
    </div>
    <UpcomingPicks />
    <OtherComponent />
    <AboutComponent />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import Arrow from '../icons/arrow.vue'
import FreeExpertView from './FreeExpertView.vue'
import NewsCard from '../components/NewsCard.vue'
import Card from '../components/CardComponent.vue'
import AboutComponent from '../components/aboutComponent.vue'
import OtherPackage from '../components/OtherPackage.vue'
import VipAdsComponent from '../components/vipadsComponent.vue'
import UpcomingPicks from '../components/UpcomingPicks.vue'
import HeroComponent from '../components/HeroComponent.vue'
import OtherComponent from '../components/OtherComponent.vue'
import important from '../components/ImportantComponent.vue'

const showMoreButton = ref(true)
const maxNewsToShow = ref(3)
const currentDate = ref('')
const router = useRouter()
const cardData = ref([])
const newsData = ref([])
const SERVER_HOST = import.meta.env.VITE_SERVER_HOST

const newsInfo = (newsID) => {
  router.push({ name: 'News', params: { id: newsID } })
}

const visibleNews = computed(() => {
  return newsData.value.slice(0, maxNewsToShow.value)
})

const showMoreNews = () => {
  maxNewsToShow.value += 8
  showMoreButton.value = false
}

const showLessNews = () => {
  maxNewsToShow.value -= 8
  if (maxNewsToShow.value <= 8) {
    showMoreButton.value = true
  }
}

const getNews = async () => {
  try {
    const response = await axios.get('https://livescore-football.p.rapidapi.com/soccer/news-list', {
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST
      }
    })
    newsData.value = response.data.data
  } catch (err) {
    console.log(err)
  }
}

const predictions = async () => {
  try {
    const response = await axios.get(
      `${SERVER_HOST}/predictions/bet/betOfTheDay/${currentDate.value}`
    )
    cardData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  predictions()
  getNews()
})

const offset = ref(0)

const previousDay = () => {
  offset.value--
  updateCurrentDate()
}

const nextDay = () => {
  if (offset.value < 1) {
    offset.value++
    updateCurrentDate()
  }
}



const updateCurrentDate = () => {
  const today = new Date()
  today.setDate(today.getDate() + offset.value)
  const month = today.getMonth() + 1
  const formattedMonth = month.toString().padStart(2, '0')
  const day = today.getDate()
  const formattedDay = day.toString().padStart(2, '0')
  currentDate.value = `${formattedDay}-${formattedMonth}-${today.getFullYear()}`
}

updateCurrentDate()

const formatFormation = (formation) => {
  if (Array.isArray(formation)) {
    return formation[0].split('-')
  }
  return []
}

watch(currentDate, () => {
  predictions()
})
</script>

<style scoped>
@import '../style/Home.css';
</style>
