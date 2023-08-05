<template>
  <HeroComponent />
  <important/>
  <div class="home-main">
    <div class="main-h">
      <div class="main-header">
        <div class="header-info">
          <h1>Banker of the day {{ currentDate }}</h1>
        </div>
        <div class="header-btn">
          <button class="btn-h" :class="{ 'active-btn': offset > 0 }" @click="previousDay">
            <Arrow class="btn-icon icon-left" />
            Previous
          </button>
          <button class="btn-h" :class="{ 'active-btn': offset < 0 }" @click="nextDay">
            Next
            <Arrow class="btn-icon icon-right" />
          </button>
        </div>
      </div>
      <template v-if="cardData.length > 0">
        <div class="main-table"> 
          <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>League</th>
            <th>Match</th>
            <th>Tip</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(card, index) in cardData" :key="index">
            <td>{{ card.time }}</td>
            <td>{{ card.league }}</td>
            <td>{{ card.teamA }} vs {{ card.teamB }}</td>
            <td>{{ card.tip }}</td>
            <td>
              <template
                v-if="
                  card.teamAscore !== null &&
                  card.teamBscore !== null &&
                  (card.teamAscore !== 0 || card.teamBscore !== 0)
                "
              >
                {{ card.teamAscore }} - {{ card.teamBscore }}
              </template>
              <template v-else>
                {{ card.time }}
              </template>
            </td>
          </tr>
        </tbody>
      </table>
        </div>
      </template>
      <template v-else>
        <div class="home-freetip">
          <h1>No predictions yet! Check back later.</h1>
        </div>
      </template>
    </div>
    <FreeExpertView />
    <div class="links-social">
      <div class="social-l">
        <button @click="goFacebook()" class="btn-s s-f">
         <facebookIcon class="btn-if"/>
          Facebook Tips
        </button>
        <button @click="goWhatsapp()" class="btn-s s-w">
          <whatsappIcon class="btn-if"/>
          Whatsapp
        </button>
      </div>
      <button @click="goTelegram()" class="btn-s s-t">
        <telegramIcon class="btn-if"/>
        Telegram Tips
      </button>
    </div>
    <OtherPackage id="vip" />
    <div class="news-main">
    <div class="news-header">
      <div class="news-info">
        <h1>Sport News</h1>
      </div>
      <div class="news-link">
        <Arrow class="news-icon icon-left" />
        <Arrow class="news-icon icon-left" />

        <span v-if="showMoreButton" @click="showMoreNews">more news</span>
        <span v-else  @click="showLessNews">less news</span>
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
    <UpcomingPicks/>
    <OtherComponent />
    <AboutComponent />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import Arrow from '../icons/arrow.vue'
import whatsappIcon from '../icons/whatsapp.vue'
import facebookIcon from '../icons/facebook.vue'
import telegramIcon from '../icons/telegram.vue'
import FreeExpertView from './FreeExpertView.vue'
import NewsCard from '../components/NewsCard.vue'
import AboutComponent from '../components/aboutComponent.vue'
import OtherPackage from '../components/OtherPackage.vue'
import UpcomingPicks from '../components/UpcomingPicks.vue'
import HeroComponent from '../components/HeroComponent.vue'
import OtherComponent from '../components/OtherComponent.vue'
import important from '../components/ImportantComponent.vue'

const showMoreButton = ref(true);
const maxNewsToShow = ref(3);
const currentDate = ref('')
const router = useRouter()
const cardData = ref([])
const newsData = ref([])

const showCard = (cardID) => {
  router.push({ name: 'Tips', params: { id: cardID } })
}

const newsInfo = (newsID) => {
  router.push({ name: 'News', params: { id: newsID } })
}

const visibleNews = computed(() => {
  return newsData.value.slice(0, maxNewsToShow.value);
});

const showMoreNews = () => {
  maxNewsToShow.value += 8; 
  showMoreButton.value = false;
};

const showLessNews = () => {
  maxNewsToShow.value -= 8; 
  if (maxNewsToShow.value <= 8) {
    showMoreButton.value = true;
  }
}

const getNews = async () => {
  try {
    const response = await axios.get('https://tips90-server.onrender.com/soccer/news-list', {
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST
      }
    })
    console.log(response.data.data)
    newsData.value = response.data.data
    console.log(newsData.value)
  } catch (err) {
    console.log(err)
  }
}

const randomNewsData = computed(() => {
  const shuffledNews = newsData.value.slice().sort(() => Math.random() - 0.5);
  return shuffledNews.slice(0, 8);
});

const getPrediction = async () => {
  const token = JSON.parse(localStorage.getItem('token'))
  try {
    const response = await axios.get(
      `https://tips90-server.onrender.com/predictions/bankerPrediction/banker/${currentDate.value}`
    )
    cardData.value = response.data
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  getPrediction()
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

const goFacebook = () => {
  window.open('https://wa.me/254743247861?text=Hi+there+Charisma+Betting+Tips', '_blank')

}

const goWhatsapp = () => {
  window.open('https://wa.me/254743247861?text=Hi+there+Charisma+Betting+Tips', '_blank')

}

const goTelegram = () => {
  window.open('https://t.me/+p9eRLjKRtv45Y2Fk', '_blank')
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
  getPrediction()
})
</script>

<style scoped>
@import '../style/Home.css';
</style>
