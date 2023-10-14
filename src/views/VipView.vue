<template>
  <div class="vip-container">
    <div class="vip-wrapper">
      <div class="vip-notpaid" v-if="!paid">
        <div v-if="!username" class="vip-p">
          <h1>Sign in or log in to your account</h1>
          <div class="vip-sp">
            <button class="vip-btn" @click="goSignin()">
              <ProfileIcon class="vip-pay-icon" />
              Sign in
            </button>
            <button class="vip-btn" @click="goLogin()">
              Log in
              <ProfileIcon class="vip-pay-icon" />
            </button>
          </div>
        </div>
        <div class="vip-p" v-else>
          <h1>Your VIP account is in not activated</h1>
          <button class="vip-btn" @click="payPage()">
            <MoneyIcon class="vip-pay-icon" />
            Pay to activate
          </button>
        </div>
      </div>
      <div v-else>
        <div class="main-header vip-m">
          <div class="header-info">
            <h1> {{ vipName }} {{ currentDate }}</h1>
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
        <template v-if="(paid && username && SupremeData.length > 0) || MegaData.length > 0">
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
              <tbody v-if="supreme == true">
                <tr v-for="(card, index) in SupremeData" :key="index">
                  <td>{{ card.time }}</td>
                  <td>{{ card.league }}</td>
                    <td>{{ card.teamA }} <span class="vs-s">VS</span>  {{ card.teamB }}</td>
                  <td>{{ card.tip }}</td>
                  <td>{{ card.teamAscore }} - {{ card.teamBscore }}</td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr v-for="(card, index) in MegaData" :key="index">
                  <td>{{ card.time }}</td>
                  <td>{{ card.league }}</td>
                    <td>{{ card.teamA }} <span class="vs-s">VS</span>  {{ card.teamB }}</td>
                  <td>{{ card.tip }}</td>
                  <td>{{ card.teamAscore }} - {{ card.teamBscore }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
        <template
          v-else-if="(paid && username && MegaData.length === 0) || SupremeData.length === 0"
        >
          <div class="home-freetip">
            <h1>No predictions yet! Check back later.</h1>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import Arrow from '../icons/arrow.vue'
import { useRouter } from 'vue-router'
import { ref, onMounted, watch } from 'vue'

const router = useRouter()
const username = ref(null)
const currentDate = ref('')
const supreme = ref(false)
const MegaData = ref([])
const vipName = ref(null)
const SupremeData = ref([])
const paid = ref(false)
const offset = ref(0)
const SERVER_HOST = import.meta.env.VITE_SERVER_HOST


console.log(paid.value)
const updateAuthStatus = () => {
  const token = JSON.parse(localStorage.getItem('token'))


  // Clear cardData if token does not exist
  if (!token) {
    MegaData.value = []
    SupremeData.value = []
  }
}

const showName = () => {
  switch (supreme.value) {
  case true:
    vipName.value = 'Vip Supreme tips'
    break
  case false:
    vipName.value = 'Vip Mega tips'
    break
  default:
    break
}

}


const payPage = () => {
  router.push({ name: 'Pay', params: { vipName: 'SUPREME 2+' } })
}

const goSignin = () => {
  router.push({ name: 'Signin' })
}

const goLogin = () => {
  router.push({ name: 'Login' })
}


const getVipMega = async () => {
  const token = JSON.parse(localStorage.getItem('token'))

  try {
    const response = await axios.get(
      `${SERVER_HOST}/predictions/vipMega/vipMega/${currentDate.value}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    console.log(response.data)
    MegaData.value = response.data
  } catch (err) {
    console.log(err)
  }
}

const getVipSupreme = async () => {
  const token = JSON.parse(localStorage.getItem('token'))

  try {
    const response = await axios.get(
      `https://tips90-server.onrender.com/predictions/vipSupreme/supreme/${currentDate.value}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    console.log(response.data)
    SupremeData.value = response.data
  } catch (err) {
    console.log(err)
  }
}

const getAccountDetails = async () => {
  const token = JSON.parse(localStorage.getItem('token'))
  const id = localStorage.getItem('id')
  try {
    const response = await axios.get(
      `${SERVER_HOST}/auth/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    // console.log(response.data)
    username.value = response.data.username
    paid.value = response.data.paid
    supreme.value = response.data.supreme
    console.log(paid.value)
    console.log(supreme.value)
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  showName()
  getVipMega()
  getVipSupreme()
  updateAuthStatus()
  getAccountDetails()
})

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


watch([offset, username, paid], () => {
  updateAuthStatus()
  getVipSupreme()
  getVipMega()
})

watch([supreme], () => {
  showName();
})
</script>

<style scoped>
@import '../style/vip.css';
@import '../style/Home.css';
</style>
