<template>
  <div>
    <important />
    <div class="home-main">
      <div class="main-h">
        <div class="main-header">
          <div class="header-info">
            <h1>Basketball tips {{ currentDate }}</h1>
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
                  <td>{{ card.teamA }} <span class="vs-s">VS</span>  {{ card.teamB }}</td>
                  <td>{{ card.tip }}</td>
                  <td class="td-sd">
                {{ card.teamAscore }} - {{ card.teamBscore }}
                <div class="icon-sd" v-if="offset < 0 ">
                  <PassedIcon class="icon-sd-s icon-g" v-if="card.showResult === true" />
                  <FailedIcon class="icon-sd-s icon-f" v-else />
                </div>
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
    </div>
  </div>
  <OtherPackage id="vip" />
</template>

<script setup>
import axios from 'axios'
import Arrow from '../icons/arrow.vue'
import { ref, onMounted, watch } from 'vue'
import PassedIcon from '../icons/PassedIcon.vue'
import FailedIcon from '../icons/FailedIcon.vue'
import OtherPackage from '../components/OtherPackage.vue'
import important from '../components/ImportantComponent.vue'

const upcomingDates = ref('')
const currentDate = ref('')
const cardData = ref([])
const showScore = ref(false)
const SERVER_HOST = import.meta.env.VITE_SERVER_HOST

async function getPrediction() {
  const token = JSON.parse(localStorage.getItem('token'))

  try {
    const response = await axios.get(
      `${SERVER_HOST}/sports/sport/Basketball/${currentDate.value}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    cardData.value = response.data
    showScore.value = response.data.showScore
    console.log(cardData.value)
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
  upcomingDates.value = `${formattedDay}-${formattedMonth}-${today.getFullYear()}`
  currentDate.value = `${formattedDay}-${formattedMonth}-${today.getFullYear()}`
}

updateCurrentDate()


watch(currentDate, () => {
  getPrediction()
})
</script>

<style>
@import '../style/Home.css';
</style>
