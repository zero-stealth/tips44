5
<template>
  <div class="game-container">
    <div class="game-game-p">
      <!-- loop this  -->
      <div class="game-cf">
        <div class="main-header">
          <div class="header-info">
            <h1>Banker of the day ({{ currentDate }})</h1>
          </div>
          <div class="header-btn">
            <button class="game-h-b" :class="{ 'active-btn': offset > 0 }" @click="previousDay">
              previous
            </button>
            <button class="game-h-b" :class="{ 'active-btn': offset === 0 }" @click="setOffset(0)">
              Today
            </button>
            <button class="game-h-b" :class="{ 'active-btn': offset < 0 }" @click="nextDay">
              Next
            </button>
          </div>
        </div>
        <div class="game-table">
          <table>
            <thead>
              <tr>
                <th>League</th>
                <th>TeamA</th>
                <th>TeamB</th>
                <th>scoreA</th>
                <th>scoreB</th>
                <th>tip</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody v-for="item in cardData" :key="item._id">
              <tr v-for="data in item" :key="data._id">
                <td>
                  <div class="game-tbl-img">
                    <span>{{ data.league }}</span>
                  </div>
                </td>
                <td>
                  <div class="game-tbl-img">
                    <img :src="data.teamAIcon" alt="game-p" class="game-pi" />
                    <span>{{ data.teamA }}</span>
                  </div>
                </td>
                <td>
                  <div class="game-tbl-img">
                    <img :src="data.teamBIcon" alt="game-p" class="game-pi" />
                    <span>{{ data.teamB }}</span>
                  </div>
                </td>
                <td>
                  <span>{{ data.teamAscore }}</span>
                </td>
                <td>
                  <span>{{ data.teamBscore }}</span>
                </td>
                <td>
                  <span>{{ data.tip }}</span>
                </td>
                <td>
                  <div class="game-delete" @click="editGame(BetOfTheDay, data._id)">
                    <FileIcon class="icon-delete" />
                  </div>
                </td>
                <td>
                  <div class="game-delete" @click="deletePrediction(data._id)">
                    <DeleteIcon class="icon-delete" />
                  </div>
                </td>
              </tr>

              <tr v-if="cardData.length === 0">
                <td colspan="8">No games yet!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- loop this  -->
      <div class="game-cf">
        <div class="main-header">
          <div class="header-info">
            <h1>Straight win ({{ currentDate }})</h1>
          </div>
          <div class="header-btn">
            <button class="game-h-b" :class="{ 'active-btn': offset > 0 }" @click="previousDay">
              previous
            </button>
            <button class="game-h-b" :class="{ 'active-btn': offset === 0 }" @click="setOffset(0)">
              Today
            </button>
            <button class="game-h-b" :class="{ 'active-btn': offset < 0 }" @click="nextDay">
              Next
            </button>
          </div>
        </div>
        <div class="game-table">
          <table>
            <thead>
              <tr>
                <th>League</th>
                <th>TeamA</th>
                <th>TeamB</th>
                <th>scoreA</th>
                <th>scoreB</th>
                <th>tip</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody v-for="item in predictionData" :key="item._id">
              <tr v-for="data in item" :key="data._id">
                <td>
                  <div class="game-tbl-img">
                    <span>{{ data.league }}</span>
                  </div>
                </td>
                <td>
                  <div class="game-tbl-img">
                    <span>{{ data.teamA }}</span>
                  </div>
                </td>
                <td>
                  <div class="game-tbl-img">
                    <span>{{ data.teamB }}</span>
                  </div>
                </td>
                <td>
                  <span>{{ data.teamAscore }}</span>
                </td>
                <td>
                  <span>{{ data.teamBscore }}</span>
                </td>
                <td>
                  <span>{{ data.tip }}</span>
                </td>
                <td>
                  <div class="game-delete" @click="editGame(Daily, data._id)">
                    <FileIcon class="icon-delete" />
                  </div>
                </td>
                <td>
                  <div class="game-delete" @click="deletePrediction(data._id)">
                    <DeleteIcon class="icon-delete" />
                  </div>
                </td>
              </tr>
              <tr v-if="predictionData.length === 0">
                <td colspan="8">No games yet!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="game-cf">
        <div class="main-header">
          <div class="header-info">
            <h1>Free Expert predictions ({{ currentDate }})</h1>
          </div>
          <div class="header-btn">
            <button class="game-h-b" :class="{ 'active-btn': offset > 0 }" @click="previousDay">
              previous
            </button>
            <button class="game-h-b" :class="{ 'active-btn': offset === 0 }" @click="setOffset(0)">
              Today
            </button>
            <button class="game-h-b" :class="{ 'active-btn': offset < 0 }" @click="nextDay">
              Next
            </button>
          </div>
        </div>
        <div class="game-table">
          <table>
            <thead>
              <tr>
                <th>League</th>
                <th>TeamA</th>
                <th>TeamB</th>
                <th>scoreA</th>
                <th>scoreB</th>
                <th>tip</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody v-for="item in expertData" :key="item._id">
              <tr v-for="data in item" :key="data._id">
                <td>
                  <div class="game-tbl-img">
                    <span>{{ data.league }}</span>
                  </div>
                </td>
                <td>
                  <div class="game-tbl-img">
                    <span>{{ data.teamA }}</span>
                  </div>
                </td>
                <td>
                  <div class="game-tbl-img">
                    <span>{{ data.teamB }}</span>
                  </div>
                </td>
                <td>
                  <span>{{ data.teamAscore }}</span>
                </td>
                <td>
                  <span>{{ data.teamBscore }}</span>
                </td>
                <td>
                  <span>{{ data.tip }}</span>
                </td>
                <td>
                  <div class="game-delete" @click="editGame(Expert, data._id)">
                    <FileIcon class="icon-delete" />
                  </div>
                </td>
                <td>
                  <div class="game-delete" @click="deletePrediction(data._id)">
                    <DeleteIcon class="icon-delete" />
                  </div>
                </td>
              </tr>
              <tr v-if="expertData.length === 0">
                <td colspan="8">No games yet!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="game-cf">
        <div class="main-header">
          <div class="header-info">
            <h1>Upcoming games ({{ currentDate }})</h1>
          </div>
          <div class="header-btn">
            <button class="game-h-b" :class="{ 'active-btn': offset > 0 }" @click="previousDay">
              previous
            </button>
            <button class="game-h-b" :class="{ 'active-btn': offset === 0 }" @click="setOffset(0)">
              Today
            </button>
            <button class="game-h-b" :class="{ 'active-btn': offset < 0 }" @click="nextDay">
              Next
            </button>
          </div>
        </div>
        <div class="game-table">
          <table>
            <thead>
              <tr>
                <th>League</th>
                <th>TeamA</th>
                <th>TeamB</th>
                <th>scoreA</th>
                <th>scoreB</th>
                <th>tip</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody v-for="item in upcomingData" :key="item._id">
              <tr v-for="data in item" :key="data._id">
                <td>
                  <div class="game-tbl-img">
                    <span>{{ data.league }}</span>
                  </div>
                </td>
                <td>
                  <div class="game-tbl-img">
                    <img :src="data.teamAIcon" alt="game-p" class="game-pi" />
                    <span>{{ data.teamA }}</span>
                  </div>
                </td>
                <td>
                  <div class="game-tbl-img">
                    <img :src="data.teamBIcon" alt="game-p" class="game-pi" />
                    <span>{{ data.teamB }}</span>
                  </div>
                </td>
                <td>
                  <span>{{ data.teamAscore }}</span>
                </td>
                <td>
                  <span>{{ data.teamBscore }}</span>
                </td>
                <td>
                  <span>{{ data.tip }}</span>
                </td>
                <td>
                  <div class="game-delete" @click="editGame(UpcomingGames, data._id)">
                    <FileIcon class="icon-delete" />
                  </div>
                </td>
                <td>
                  <div class="game-delete" @click="deletePrediction(data._id)">
                    <DeleteIcon class="icon-delete" />
                  </div>
                </td>
              </tr>
              <tr v-if="upcomingData.length === 0">
                <td colspan="8">No games yet!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="game-cf">
        <div class="main-header">
          <div class="header-info">
            <h1>Vip Supreme games ({{ currentDate }})</h1>
          </div>
          <div class="header-btn">
            <button class="game-h-b" :class="{ 'active-btn': offset > 0 }" @click="previousDay">
              previous
            </button>
            <button class="game-h-b" :class="{ 'active-btn': offset === 0 }" @click="setOffset(0)">
              Today
            </button>
            <button class="game-h-b" :class="{ 'active-btn': offset < 0 }" @click="nextDay">
              Next
            </button>
          </div>
        </div>
        <div class="game-table">
          <table>
            <thead>
              <tr>
                <th>League</th>
                <th>TeamA</th>
                <th>TeamB</th>
                <th>scoreA</th>
                <th>scoreB</th>
                <th>tip</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody v-for="item in vipSupremeData" :key="item._id">
              <tr v-for="data in item" :key="data._id">
                <td>
                  <div class="game-tbl-img">
                    <span>{{ data.league }}</span>
                  </div>
                </td>
                <td>
                  <div class="game-tbl-img">
                    <span>{{ data.teamA }}</span>
                  </div>
                </td>
                <td>
                  <div class="game-tbl-img">
                    <span>{{ data.teamB }}</span>
                  </div>
                </td>
                <td>
                  <span>{{ data.teamAscore }}</span>
                </td>
                <td>
                  <span>{{ data.teamBscore }}</span>
                </td>
                <td>
                  <span>{{ data.tip }}</span>
                </td>
                <td>
                  <div class="game-delete" @click="editGame(VipSupreme, data._id)">
                    <FileIcon class="icon-delete" />
                  </div>
                </td>
                <td>
                  <div class="game-delete" @click="deletePrediction(data._id)">
                    <DeleteIcon class="icon-delete" />
                  </div>
                </td>
              </tr>
              <tr v-if="vipSupremeData.length === 0">
                <td colspan="8">No games yet!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="game-cf">
      <div class="main-header">
        <div class="header-info">
          <h1>Basketball ({{ currentDate }})</h1>
        </div>
        <div class="header-btn">
          <button class="game-h-b" :class="{ 'active-btn': offset > 0 }" @click="previousDay">
            previous
          </button>
          <button class="game-h-b" :class="{ 'active-btn': offset === 0 }" @click="setOffset(0)">
            Today
          </button>
          <button class="game-h-b" :class="{ 'active-btn': offset < 0 }" @click="nextDay">
            Next
          </button>
        </div>
      </div>
      <div class="game-table">
        <table>
          <thead>
            <tr>
              <th>League</th>
              <th>TeamA</th>
              <th>TeamB</th>
              <th>scoreA</th>
              <th>scoreB</th>
              <th>tip</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody v-for="item in basketBallData" :key="item._id">
            <tr v-for="data in item" :key="data._id">
              <td>
                <div class="game-tbl-img">
                  <span>{{ data.league }}</span>
                </div>
              </td>
              <td>
                <div class="game-tbl-img">
                  <span>{{ data.teamA }}</span>
                </div>
              </td>
              <td>
                <div class="game-tbl-img">
                  <span>{{ data.teamB }}</span>
                </div>
              </td>
              <td>
                <span>{{ data.teamAscore }}</span>
              </td>
              <td>
                <span>{{ data.teamBscore }}</span>
              </td>
              <td>
                <span>{{ data.tip }}</span>
              </td>
              <td>
                <div class="game-delete" @click="editSport(BasketballGames, data._id)">
                  <FileIcon class="icon-delete" />
                </div>
              </td>
              <td>
                <div class="game-delete" @click="deleteSport(data._id)">
                  <DeleteIcon class="icon-delete" />
                </div>
              </td>
            </tr>
            <tr v-if="basketBallData.length === 0">
              <td colspan="8">No games yet!</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="game-cf">
      <div class="main-header">
        <div class="header-info">
          <h1>Vip Result Posted</h1>
        </div>
      </div>
      <div class="game-table">
        <table>
          <thead>
            <tr>
              <th>Date&Day</th>
              <th>Result</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody v-for="item in vipResultData" :key="item._id">
            <tr v-for="data in item" :key="data._id">
              <td>
                <span>{{ data.gameName }}</span>
              </td>
              <td>
                <span>{{ data.gameScore }}</span>
              </td>
              <td>
                <div class="game-delete" @click="editVipResult(VipEditPage, data._id)">
                  <FileIcon class="icon-delete" />
                </div>
              </td>
              <td>
                <div class="game-delete" @click="deleteVipResult(data._id)">
                  <DeleteIcon class="icon-delete" />
                </div>
              </td>
            </tr>
            <tr v-if="vipResultData.length === 0">
              <td colspan="8">No Result yet!</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <div class="game-edit" :class="[isGameOpen ? 'showEdit' : 'closeEdit']">
      <div class="mobile-exit">
        <ExitIcon class="icon-exit" @click="showEdit()" />
      </div>
      <div class="game-main-p">
        <component
          @formSubmit="updateGame"
          @formVipResultSubmit="updateVipResult"
          @formSubmitSport="updateSport"
          :is="activePage"
        />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import axios from 'axios'
import { ref, watchEffect, onMounted, watch, shallowRef } from 'vue'
import Daily from './DailyEdit.vue'
import Expert from './FreeExpertEdit.vue'
import ExitIcon from '../icons/ExitIcon.vue'
import FileIcon from '../icons/FileIcon.vue'
import { useToast } from 'vue-toastification'
// import VipMega from './VipMegaGamesEdits.vue'
import DeleteIcon from '../icons/DeleteIcon.vue'
import VipSupreme from './VipSupremeGamesEdits.vue'
import BetOfTheDay from '../components/BetOfTheDayEdit.vue'
import BasketballGames from '../components/BasketballEdit.vue'
import UpcomingGames from '../components/UpcomingGamesEdits.vue'
import VipEditPage from '../components/VipresultsComponentEdits.vue'

const username = ref(null)
const currentDate = ref('')
const offset = ref(0)
const toast = useToast()
const isGameOpen = ref(false)
const cardData = ref([])
const vipSupremeData = ref([])
const predictionData = ref([])
const freeTipData = ref([])
const upcomingData = ref([])
const dailyData = ref([])
const expertData = ref([])
const vipResultData = ref([])
// const vipMegaData = ref([])
const basketBallData = ref([])
const SERVER_HOST = import.meta.env.VITE_SERVER_HOST

const getBetOfTheDay = async () => {
  try {
    // const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(
      `${SERVER_HOST}/predictions/bet/betOfTheDay/${currentDate.value}`
    )
    cardData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}

const getdailyData = async () => {
  try {
    // const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(
      `${SERVER_HOST}/predictions/daily-ten-prediction/dailyTen/${currentDate.value}`
    )
    dailyData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}
const getexpertData = async () => {
  try {
    // const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(
      `${SERVER_HOST}/predictions/free-expert/expert/${currentDate.value}`
    )

    expertData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}

const getVipSupremeGames = async () => {
  try {
    const response = await axios.get(
      `${SERVER_HOST}/predictions/vipSupreme/supreme/${currentDate.value}`
    )

    vipSupremeData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}

// const getVipMegaGames = async () => {
//   try {
//     const response = await axios.get(
//      `${SERVER_HOST}/predictions/vipMega/vipMega/${currentDate.value}`
//     )

//     vipMegaData.value = response.data.length > 0 ? [response.data] : []
//   } catch (err) {
//     console.log(err)
//   }
// }

const getVipResult = async () => {
  try {
    // const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(`${SERVER_HOST}/score/`)
    // console.log(response.data)
    vipResultData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}

const getPredictions = async () => {
  try {
    // const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(`${SERVER_HOST}/predictions/${currentDate.value}`)

    predictionData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}

const getFreeTips = async () => {
  try {
    // const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(`${SERVER_HOST}/predictions/tips/freeTip/${currentDate.value}`)

    freeTipData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}

const getUpcoming = async () => {
  try {
    // const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(
      `${SERVER_HOST}/predictions/upcomingPredictions/upcoming/${currentDate.value}`
    )

    upcomingData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}

const getBasketballBets = async () => {
  try {
    // const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(`${SERVER_HOST}/sports/sport/Basketball/${currentDate.value}`)

    basketBallData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}

const showEdit = () => {
  isGameOpen.value = !isGameOpen.value
}

const activePage = shallowRef(BetOfTheDay)
const gameId = ref('')
const sportId = ref('')
const ScoreId = ref('')

const editGame = (game, id) => {
  activePage.value = game
  gameId.value = id
  showEdit()
}

const editSport = (sport, id) => {
  activePage.value = sport
  sportId.value = id
  showEdit()
}

const editVipResult = (vip, id) => {
  activePage.value = vip
  ScoreId.value = id
  showEdit()
}

async function updateVipResult(formData) {
  try {
    const token = JSON.parse(localStorage.getItem('token'))
    const formDatass = new FormData()
    if (formData.Result !== '') {
      formDatass.append('gameScore', formDatass.Result)
    }
    if (formData.dayDate !== '') {
      formDatass.append('gameName', formDatass.dayDate)
    }

    const response = await axios.put(
      `${SERVER_HOST}/score/updatescore/${ScoreId.value}`,
      formDatass,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    toast.error('Vip result updated')
  } catch (error) {
    console.error('Error updating vip result:', error)
  }
}

async function updateGame(teamAscore, showResult, teamBscore, showScore) {
  try {
    const token = JSON.parse(localStorage.getItem('token'))
    const response = await axios.put(
      `${SERVER_HOST}/predictions/update/${gameId.value}`,
      { teamAscore, teamBscore, showScore, showResult },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    toast.error('Game updated')
  } catch (error) {
    /* empty */
  }
}

async function updateSport(teamAscore, showResult, teamBscore, showScore) {
  try {
    const token = JSON.parse(localStorage.getItem('token'))
    const response = await axios.put(
      `${SERVER_HOST}/sports/update/${sportId.value}`,
      { teamAscore, teamBscore, showScore, showResult },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    toast.error('Sport updated')
  } catch (error) {
    /* empty */
  }
}

const setOffset = (value) => {
  offset.value = value
  updateCurrentDate()
}

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

const getFormattedDate = (offset) => {
  const today = new Date()
  today.setDate(today.getDate() + offset)
  const day = String(today.getDate()).padStart(2, '0')
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const year = today.getFullYear()
  return `${day}-${month}-${year}`
}

const updateCurrentDate = () => {
  currentDate.value = getFormattedDate(offset.value)
}

watchEffect(() => {
  username.value = localStorage.getItem('username')
  updateCurrentDate()
})

onMounted(() => {
  getBetOfTheDay()
  getPredictions()
  getFreeTips()
  getUpcoming()
  getdailyData()
  getexpertData()
  getVipResult()

  // getVipMegaGames()
  getBasketballBets()
  getVipSupremeGames()
})

const deletePrediction = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem('token'))

    const response = await axios.delete(`${SERVER_HOST}/predictions/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    toast.error('prediction deleted ')
    await getPredictions()
    await getFreeTips()
    await getUpcoming()
    await getBetOfTheDay()
    await getexpertData()
  } catch (err) {
    toast.error('deletion failed')
  }
}

const deleteSport = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem('token'))

    const response = await axios.delete(`${SERVER_HOST}/sports/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    toast.error('sport deleted ')

    await getBasketballBets()
  } catch (err) {
    toast.error('deletion failed')
  }
}

const deleteVipResult = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem('token'))

    const response = await axios.delete(`${SERVER_HOST}/score/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    toast.error('vip result deleted ')

    await getVipResult()
  } catch (err) {
    toast.error('deletion failed')

  }
}

const showscore = ref(localStorage.getItem('showscore') === 'true')

watch(showscore, (value) => {
  localStorage.setItem('showscore', value.toString())
})

watch(currentDate, () => {
  getBetOfTheDay()
  getPredictions()
  getFreeTips()
  getUpcoming()
  getdailyData()
  getexpertData()
  // getVipMegaGames()
  getBasketballBets()
  getVipSupremeGames()
})
</script>

<style scoped>
@import '@/style/gameManagement.css';
</style>
