<template>
  <div>
    <important />
    <div class="home-main">
      <div class="main-h">
        <div class="main-header">
          <div class="header-info">
            <h1>{{ $t('straight.s-h1') }} {{ currentDate }}</h1>
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
        <template v-if="filter.length > 0">
          <div class="main-tb-c">
            <table class="main-table">
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
                <tr v-for="(card, index) in filter" :key="index">
                  <td>{{ card.time }}</td>
                  <td>{{ card.league }}</td>
                  <td>{{ card.teamA }} <span class="vs-s">VS</span> {{ card.teamB }}</td>
                  <td>{{ card.tip }}</td>
                  <td class="td-sd">
                    {{ card.teamAscore }} - {{ card.teamBscore }}
                    <div class="icon-sd" v-if="offset < 0">
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
            <h1>{{ $t('banker.banker-h3') }}</h1>
          </div>
        </template>
      </div>
    </div>
  </div>
  <OtherPackage id="vip" />
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, watch, computed } from 'vue'
import Arrow from '../icons/arrow.vue'
import PassedIcon from '../icons/PassedIcon.vue'
import FailedIcon from '../icons/FailedIcon.vue'
import OtherPackage from '../components/OtherPackage.vue'
import important from '../components/ImportantComponent.vue'

const SERVER_HOST = import.meta.env.VITE_SERVER_HOST
const currentDate = ref('')
const cardData = ref([])

const filter = computed(() => {
  const allowedTips = ['AWAY WIN', 'HOME WIN']
  return cardData.value.filter((d) => allowedTips.includes(d.tip))
})

async function getPrediction() {
  const token = JSON.parse(localStorage.getItem('token'))

  try {
    const response = await axios.get(
      `${SERVER_HOST}/predictions/free-expert/expert/${currentDate.value}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
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
</script>

<style>
@import '../style/Home.css';
</style>
