<template>
  <div>
    <important />
    <div class="home-main">
      <div class="main-h">
        <div class="main-header">
          <div class="header-info">
            <h1>Tennis Free tips {{ currentDate }}</h1>
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
          <div class="main-tb-c">
            <table class="main-table">
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
                  <td>{{ card.teamAscore }} - {{ card.teamBscore }}</td>
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
    </div>
  </div>
  <OtherPackage id="vip" />
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'
import Arrow from '../icons/arrow.vue'
import OtherPackage from '../components/OtherPackage.vue'
import important from '../components/ImportantComponent.vue'

const currentDate = ref('')
const cardData = ref([])
const url = ref('')

async function getPrediction() {
  const token = JSON.parse(localStorage.getItem('token'))
  url.value = `https://tips90-server.onrender.com/sports/sport/Tennis/${currentDate.value}`
  console.log(url.value)

  try {
    const response = await axios.get(url.value)
    console.log(response.data)
    cardData.value = response.data
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  getPrediction()
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
  const formattedMonth = month < 10 ? `0${month}` : month
  const day = today.getDate()
  const formattedDay = day < 10 ? `0${day}` : day
  currentDate.value = `${formattedDay}-${formattedMonth}-${today.getFullYear()}`
}

updateCurrentDate()

watch(currentDate, () => {
  getPrediction()
})

const formatFormation = (formation) => {
  if (Array.isArray(formation)) {
    return formation[0].split('-')
  }
  return []
}
</script>

<style>
@import '../style/Home.css';
</style>
