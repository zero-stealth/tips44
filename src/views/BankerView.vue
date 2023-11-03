<template>
    <important/>
  <div class="main-bet">
    <div class="main-header">
      <div class="header-info">
        <h1>{{ $t('banker.banker-h2') }}  {{ currentDate }}</h1>
      </div>
      <div class="header-btn">
        <button class="btn-h" :class="{ 'active-btn': offset === -1 }" @click="setOffset(-1)">
          {{ $t('banker.banker-btn1') }}
        </button>
        <button class="btn-h" :class="{ 'active-btn': offset === 0 }" @click="setOffset(0)">
          {{ $t('banker.banker-btn2') }}
        </button>
        <button class="btn-h" :class="{ 'active-btn': offset === 1 }" @click="setOffset(1)">
          {{ $t('banker.banker-btn3') }}
        </button>
      </div>
    </div>
    <template v-if="cardData.length > 0">
        <div class="main-table"> 
          <table>
        <thead>
          <tr>
            <th>{{ $t('table.table-t1') }}</th>
            <th>{{ $t('table.table-t2') }}</th>
            <th>{{ $t('table.table-t3') }}</th>
            <th>{{ $t('table.table-t4') }}</th>
            <th>{{ $t('table.table-t5') }}</th>
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
                <div class="icon-sd" v-if="offset === -1 ">
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
        <h1> {{ $t('banker.banker-h3') }}</h1>
      </div>
    </template>
  </div>
  <OtherPackage id="vip" />
</template>

<script setup>
import important from '../components/ImportantComponent.vue'
import OtherPackage from '../components/OtherPackage.vue'
import PassedIcon from '../icons/PassedIcon.vue'
import FailedIcon from '../icons/FailedIcon.vue'
import { ref, watchEffect, onMounted } from 'vue'
import axios from 'axios'

const SERVER_HOST = import.meta.env.VITE_SERVER_HOST
const currentDate = ref('')
const offset = ref(0)

const cardData = ref([])

const getPrediction = async () => {
  try {
    const response = await axios.get(
      `${SERVER_HOST}/predictions/bet/betOfTheDay/${currentDate.value}`
    )
    cardData.value = response.data
  } catch (err) {
    console.log(err)
  }
}


onMounted(() => {
  getPrediction()
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
  getPrediction()
})
</script>

<style>
@import '../style/Home.css';
@import '../style/Bet.css';
</style>
