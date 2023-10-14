<template>
  <div class="main-bet">
    <div class="header-info-h1">
      <h1>Free Expert predictions</h1>
    </div>
    <div class="main-header">
      <div class="header-info">
        <h1>{{ currentDate }}</h1>
      </div>
      <div class="header-btn">
        <button class="btn-h" :class="{ 'active-btn': offset === -1 }" @click="setOffset(-1)">
          Yesterday
        </button>
        <button class="btn-h" :class="{ 'active-btn': offset === 0 }" @click="setOffset(0)">
          Today
        </button>
        <button class="btn-h" :class="{ 'active-btn': offset === 1 }" @click="setOffset(1)">
          Tomorrow
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
              <td>{{ card.teamA }} <span class="vs-s">VS</span> {{ card.teamB }}</td>
              <td>{{ card.tip }}</td>
              <td class="td-sd">
                {{ card.teamAscore }} - {{ card.teamBscore }}
                <div class="icon-sd" v-if="offset == -1">
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
</template>

<script setup>
import { ref, watchEffect, onMounted } from 'vue'
import axios from 'axios'

import PassedIcon from '../icons/PassedIcon.vue'
import FailedIcon from '../icons/FailedIcon.vue'

const SERVER_HOST = import.meta.env.VITE_SERVER_HOST
const currentDate = ref('')
const offset = ref(0)

const cardData = ref([])



const predictions = async () => {
  try {
    const response = await axios.get(
      `${SERVER_HOST}/predictions/free-expert/expert/${currentDate.value}`
    )
    cardData.value = response.data
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  predictions()
})

const setOffset = (value) => {
  offset.value = value
  updateCurrentDate()
}

const updateCurrentDate = () => {
  const today = new Date()
  today.setDate(today.getDate() + offset.value)
  const day = String(today.getDate()).padStart(2, '0')
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const year = today.getFullYear()
  currentDate.value = `${day}-${month}-${year}`
}

updateCurrentDate()

watchEffect(() => {
  predictions()
})
</script>

<style>
@import '../style/Home.css';
@import '../style/Bet.css';
</style>
